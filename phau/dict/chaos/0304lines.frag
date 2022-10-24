// Author: phau
// Title: circle lines
// lesson: lines!

#ifdef GL_ES
precision mediump float;
#endif

#define TWO_PI 6.28318530718
#define PI 6.28318530718*0.5
#define HPI PI*0.5

uniform vec2 u_resolution;
uniform float u_time;

// writing a square
// if ( (X GREATER THAN 1) AND (Y GREATER THAN 1) )
//     paint white
// else
//     paint black
    
float polygon( in float N, in float size, in vec2 st ) {
      //remapping to 0 , 0
    vec2 pos = vec2(0.5) - st;
    // First we find the angle of each point 
    // using the atan function.
    float angle = atan(
        pos.x
        , pos.y
    );
    

    // remapping 1.5 to 2.5
    // atan(x) 			-> -1.5, 1.5
    // atan(x) * 0.636  -> -1, 2
    // atan(x) + 0.5 	-> -1.5, 2.5
    // todo: use turns 
    // @link https://www.computerenhance.com/p/turns-are-better-than-radians
    float b = TWO_PI / N;
    float range = angle;
    
    // range = .5;
    // range *= 0.636;
    range /= b;
    range += 0.500;
    // then round it down to the nearest 
    // integer using the floor function
    // This puts each point 
    // into one of four quadrants
    
    range = floor(range);
    
    // then turn that back into an
    // angle and subtract the difference 
    // between that and the actual angle
    // range = range * 1.57 - angle;
    range = range * b - angle;
    
    // Taking cos of that difference 
    // and multiplying by the length of
    // the original point gives the 
    // distance of that point along the 
    // vector for the centre line of the quadrant.
    range = cos(range) * length(pos.xy);
    
    // Finally a step turns that into a square
    range = step( size , range );
    return range;
}

float circle(in vec2 _st, in float _radius){
    vec2 l = _st-vec2(0.5);
    return 1.-smoothstep(_radius-(_radius*0.01),
                         _radius+(_radius*0.01),
                         dot(l,l)*4.0);
}

float isOdd(in float x) {
    float y;
    y = mod( x, 2.0) < 1.0 ? 0. : 1. ;
    // or built-in
	y = step( 1.0, mod( x , 2.0) );
    return y;
}

float isEven(in float x) {
    float y;
    y = mod( x, 2.0) > 1.0 ? 0. : 1. ;
    // or built-in
	// y = step( 0.0, mod( x , 2.0) );
    return y;
}

vec2 divideby(in float num, in vec2 c) 
{


    c *= num;      // Scale up the space by N
    // ========== next are equivalent below:
    

    if (false) {
        if ( mod(u_time, 2.0) < 1.0 )
        {
            c.x += isOdd(c.y) * u_time;
            c.x += isEven(c.y) * -u_time;
        } else {
            c.y += isOdd(c.x) * u_time;
            c.y += isEven(c.x) * -u_time;
        }
    }



    c = fract(c); // Wrap around 1.0
    // or returns the value of x modulo y. 
    c = mod(c, 1.0);
    //This is computed as x - y * floor(x/y).
    c = c - 1.000 * floor(c/1.000);
    return c;
}

vec2 grid(in float num, in vec2 c) 
{


    c *= num;      // Scale up the space by N
    // ========== next are equivalent below:

    c.y += isOdd(c.x) * 0.540;
    c.x += isOdd(c.y) * -0.356;
    
    c = fract(c); // Wrap around 1.0
    // or returns the value of x modulo y. 
    c = mod(c, 1.0);
    //This is computed as x - y * floor(x/y).
    c = c - 1.000 * floor(c/1.000);
    return c;
}

float mirror( in float pattern ) {
	return 1.0 - pattern;    
}

vec2 xy(in float x, in float y)
{
    return vec2(x,y);
}


float A( in vec2 st ) {
    float color = mirror( polygon(4., 0.660, st) );
    color *= ( mirror( polygon(4., 0.580, st) ) );

    return color; 
}

vec2 offset(vec2 _st /**, vec2 _offset */){
    vec2 uv;
	
    float valx = 0.500;
    float valy = 0.5;
    if( _st.x > valx ){
        uv.x = _st.x - valx;
    } else {
        uv.x = _st.x + valx;
    }

    if( _st.y > valy ){
        uv.y = _st.y - valy;
    } else {
        uv.y = _st.y +valy;
    }

    // uv.y = valy;
    return uv;
}
	
float B(in vec2 st) {
    float N = floor(mod(u_time, 7.));
    float size = 0.268;
    return (polygon(3. + N, size, st));
}

float S = abs(sin(u_time));
float S1 = (sin(u_time));
float N = floor(mod(u_time, 10.));
float K = 43758.5453123;
vec2 VRAN = vec2(12.9898,78.233);

float ran(in vec2 st, in float lever) {
    float k = 43758.5453123;
    float y;
    // vec2 vran = vec2(12.9898,78.233);
    vec2 vran = vec2(1. + N, 1. + N * 10.);
    float x = dot(st.xy, vran);
    // middle concentration
    // >>> rand(x);
    y = fract( sin(x) * k);
    // bottom concentration
    // >>> rand(x) * rand(x );
    y = fract( sin(x) * k) * fract( sin(x) * k);
    // upper concentration
    // >>> abs(sqrt(-0.384 + rand(x)));
    y = sqrt(fract( sin(x) * k));
    // hard bottom concentration with lever
    /** lever: [0 (uppper), 5 (bottom)] */
    y = pow(fract( sin(x) * k), lever);
    /** @link https://pixelero.wordpress.com/2008/04/24/various-functions-and-various-distributions-with-mathrandom/ */
    return y;
}

float rand(in float x) {
    float y;
    y = fract(sin(x)*100000.0);
    return y;
}

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

vec2 rotateV2(in float remap, in float rotation, in vec2 st) {
    st -= vec2( remap );
    st *= rotate2d( rotation );
    st += vec2( remap );
    return st;
}

float lineL2R(in vec2 st, in float size) {
	float color = 0.0;
   	color += step(st.x, st.y + size); 
	color *= step(st.y - size, st.x);  
    return color;
}

float lineR2L(in vec2 st, in float size) {
	float color = 0.0;
    vec2 c = rotateV2(0.5, HPI , st);
    color += lineL2R(c, size); 
    return color;
}

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution.xy;
     // st.x *= u_resolution.x/u_resolution.y;
    float color = 0.0;
   	vec2 pos = vec2(0.5) - st;
    
    st = divideby(1. + N, st);
    float ancho = 0.024;
    
    color += lineL2R(st, ancho); 
    color += lineR2L(st, ancho); 
    
    color += distance(
    	pos
        ,vec2(0.000,0.00)
    );
    // color = circle(st, 0.708);
    color = step(0.4, color);
    
    // st *= 50.; // Scale the coordinate system by 10
    vec2 ipos = floor(st);  // get the integer coords
    vec2 fpos = fract(st);  // get the fractional coords

    color *= ran( fpos, 0.160 );
   	// float color = step(0.524, ran( ipos, 2.120 ) ) ;
    // float color = ( ipos, 2.120 );
    gl_FragColor = vec4(vec3(color), 1.);
}
