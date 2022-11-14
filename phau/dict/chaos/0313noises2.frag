// Author: phau
// Title: noises 2!

#ifdef GL_ES
precision mediump float;
#endif
            
      uniform vec3 u_camera;
      uniform vec3 u_light;
      
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;
      
      varying vec4 v_position;
      varying vec3 v_normal;
      
      #if defined(MODEL_VERTEX_TEXCOORD)
      varying vec2 v_texcoord; 
      #endif
      
      #define PLATFORM_WEBGL
      /* Color palette */
      #define BLACK vec3(0.,0.,0.)
      #define WHITE vec3(1.,1.,1.)
      #define RED vec3(1.,0.,0.)
      #define GREEN vec3(0.,1.,0.)
      #define BLUE vec3(0.,0.,1.)
      #define YELLOW vec3(1.,1.,0.)
      #define CYAN vec3(0.,1.,1.)
      #define MAGENTA vec3(1.,0.,1.)
      #define ORANGE vec3(1.,.5,0.)
      #define PURPLE vec3(1.,0.,.5)
      #define LIME vec3(.5,1.,0.)
      #define ACQUA vec3(0.,1.,.5)
      #define VIOLET vec3(.5,0.,1.)
      #define AZUR vec3(0.,.5,1.)
    
float S = abs(sin(u_time));
float S1 = (sin(u_time));
float N = floor(mod(u_time, 10.));
//
float K = 43758.5453123;
vec2 VRAN = vec2(12.9898 /* multiplier*/,78.233 /* multiplier*/);

float hash1(in float p) {
    float K = 43758.5453123;
    return fract(sin(p * 0.129898) * K);
}

vec2 hash2(in vec2 p) {
    float K = 43758.5453123;
    float x1 = 0.129898;
    float x2 = 0.81314;
    float y1 = 0.78233;
    float y2 = 0.15926;
    // p.x * vec2(x1, x2) + p.y * vec2(y1, y2)
    return fract(sin(p * mat2(x1, y1, x2, y2)) * K);
}
    
vec2 ran_unit2(in vec2 p) {
    return normalize(hash2(p) - 0.5);
}
    
float hash12(in vec2 p) {
    float K = 43758.5453123;
    return fract(sin(p.x*0.129898 + p.y*0.78233) * K);
}

vec3 paint(vec3 a, vec3 b) {
	return a + b;    
}

float value_noise(vec2 p)
{
    //Cell (whole number) coordinates
    vec2 cell = floor(p);
    //Sub-cell (fractional) coordinates
    vec2 sub = p - cell;
    //Cubic interpolation (use sub for linear interpolation)
    vec2 cube = sub*sub*(3.-2.*sub);
    //Offset vector
    vec2 off = vec2(0,1); 

    //Sample cell corners and interpolate between them.
    return mix( mix(hash12(cell+off.xx), hash12(cell+off.yx), cube.x),
                mix(hash12(cell+off.xy), hash12(cell+off.yy), cube.x), cube.y);
}
    
//Standard Perlin noise
float perlin_noise(vec2 p)
{
    //Cell (whole number) coordinates
    vec2 cell = floor(p);
    //Sub-cell (fractional) coordinates
    vec2 sub = p - cell; 
    //Quintic interpolation
    vec2 quint = sub*sub*sub*(10.0 + sub*(-15.0 + 6.0*sub));
    //Offset vector
    const vec2 off = vec2(0,1); 

    //Compute corner hashes and gradients
    float grad_corner00 = dot(ran_unit2(cell+off.xx), off.xx-sub);
    float grad_corner10 = dot(ran_unit2(cell+off.yx), off.yx-sub);
    float grad_corner01 = dot(ran_unit2(cell+off.xy), off.xy-sub);
    float grad_corner11 = dot(ran_unit2(cell+off.yy), off.yy-sub);

    //Interpolate between the gradient values them and map to 0 - 1 range
    return mix(mix(grad_corner00, grad_corner10, quint.x),
               mix(grad_corner01, grad_corner11, quint.x), quint.y) * 0.7 + 0.5;
}
    
float perlin_noise_linear(vec2 p)
{
    //Cell (whole number) coordinates
    vec2 cell = floor(p);
    //Sub-cell (fractional) coordinates
    vec2 sub = p - cell; 
    //Offset vector
    const vec2 off = vec2(0,1); 

    //Compute corner hashes and gradients
    float grad_corner00 = dot(ran_unit2(cell+off.xx), off.xx-sub);
    float grad_corner10 = dot(ran_unit2(cell+off.yx), off.yx-sub);
    float grad_corner01 = dot(ran_unit2(cell+off.xy), off.xy-sub);
    float grad_corner11 = dot(ran_unit2(cell+off.yy), off.yy-sub);

    //Interpolate between the gradient values them and map to 0 - 1 range
    return mix(mix(grad_corner00, grad_corner10, sub.x),
               mix(grad_corner01, grad_corner11, sub.x), sub.y);
}

//Standard Worley noise function
float worley_noise(vec2 p)
{
    //Cell (whole number) coordinates
    vec2 cell = floor(p);
    //Initialize distance at a high-number
    float dist = 9.0;
    
    //Iterate through [3,3] neighbor cells
    for(int x = -1; x<=1; x++)
    for(int y = -1; y<=1; y++)
    {
        //Get sample cell coordinates
        vec2 sample_cell = cell + vec2(x,y);
        //Compute difference from pixel to worley cell
        vec2 worley_dif = hash2(sample_cell) + sample_cell - p;
        //Save the nearest distance
        dist = min(dist, length(worley_dif));
    }
    return dist;
}

//Standard Voronoi noise function
float voronoi_noise(vec2 p)
{
    //Cell (whole number) coordinates
    vec2 cell = floor(p);
    //Initialize distance at a high-number
    float dist = 9.0;
    //Store the nearest voronoi cell
    vec2 voronoi_cell = cell;
    
    //Iterate through [3,3] neighbor cells
    for(int x = -1; x<=1; x++)
    for(int y = -1; y<=1; y++)
    {
        //Get sample cell coordintaes
        vec2 sample_cell = cell+vec2(x,y);
        //Compute difference from pixel to worley cell
        vec2 worley_dif = hash2(sample_cell) + sample_cell - p;
        //Compute the worley distance        
        float new_dist = length(worley_dif);
        //If the new distance is the nearest
        if (dist > new_dist)
        {
            //Store the new distance and cell coordinates
            dist = new_dist;
            voronoi_cell = sample_cell;
        }
    }
    //Get a random value using cell coordinates
    return hash12(voronoi_cell);
}
    
//Generate fractal value noise from multiple octaves
//oct - The number of octave passes
//per - Octave persistence value (should be between 0 and 1)
// float fractal_noise(in vec2 p, in int oct, in float per)
// {
//     float noise_sum = 0.0; //Noise total
//     float weight_sum = 0.0; //Weight total
//     float weight = 1.0; //Octave weight

//     for(int i = 0; i < oct; i++) //Iterate through octaves
//     {
//         //Add noise octave to total
//         noise_sum += value_noise(p) * weight; 
//         //Add octave weight to total
//         weight_sum += weight;
//         //Reduce octave amplitude with persistence value
//         weight *= per;
//         //Rotate and scale for next octave
//         p *= mat2(1.6,1.2,-1.2,1.6); 
//     }
//     //Compute weighted average
//     return noise_sum / weight_sum; 
// }
float value_noise_linear(vec2 p)
{
    //Cell (whole number) coordinates
    vec2 cell = floor(p);
    //Sub-cell (fractional) coordinates
    vec2 sub = p - cell;

    //Offset vector
    const vec2 off = vec2(0,1); 

    //Sample cell corners and interpolate between them.
    return mix( mix(hash12(cell+off.xx), hash12(cell+off.yx), sub.x),
                mix(hash12(cell+off.xy), hash12(cell+off.yy), sub.x), sub.y);
}
void main(void){

  vec3 color = vec3(0.);
  vec2 px=1./u_resolution;
  vec2 st=gl_FragCoord.xy*px;

  vec4 c2 = vec4(WHITE, 1.);
  vec4 c1 = vec4(BLACK, 1.);

  color.r = abs(sin(u_time));
  color.g = fract(st.x);
  color.b = fract(st.y);

  vec2 p = st * 3.0;
  vec3 zell = vec3(0.);
	
  vec2 i = ceil(p);  // integer
  vec2 f = fract(p);  // fraction
    
  // round
  vec2 cell = floor(p);
  // value noise - https://www.getrevue.co/profile/xordev/issues/gm-shaders-mini-noise-1437243
  vec2 sub = p - cell; // (fractional coordinates in each cell)
  vec2 cube = sub*sub*(3.-2.*sub); // optional

  vec2 off = vec2(0.,1.);
    
  p.x = p.x + u_time;
  zell = paint(AZUR, VIOLET);
  zell = vec3(value_noise_linear(p));
    color = i.x == 1. && i.y == 1. ? zell : color;
  zell = paint(AZUR, ACQUA);
  zell = vec3(value_noise(p));
    color = i.x == 2. && i.y == 1. ? zell : color;
  zell = paint(AZUR, PURPLE);
  zell = vec3(perlin_noise(p));
    color = i.x == 3. && i.y == 1. ? zell : color;
  zell = paint(LIME, ORANGE);
  zell = vec3(perlin_noise_linear(p));
    color = i.x == 1. && i.y == 2. ? zell : color;
  zell = paint(AZUR, BLUE);
  zell = vec3(worley_noise(p));
    color = i.x == 2. && i.y == 2. ? zell : color;
  zell = paint(LIME, ACQUA);
  zell = vec3(voronoi_noise(p));
    color = i.x == 3. && i.y == 2. ? zell : color;
    zell = paint(LIME, MAGENTA);
    color = i.x == 1. && i.y == 3. ? zell : color;
    zell = RED + AZUR;
    color = i.x == 1. && i.y == 3. ? zell : color;
    zell = paint(AZUR, VIOLET );
    color = i.x == 2. && i.y == 3. ? zell : color;
    zell = LIME + AZUR;
    color = i.x == 3. && i.y == 3. ? zell : color;

  gl_FragColor = vec4(color,1.0);;
}   

