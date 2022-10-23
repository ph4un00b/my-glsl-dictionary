// Author BoS
// Title: square animation

#ifdef GL_ES
precision mediump float;
#endif

#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform float u_time;

// writing a square
// if ( (X GREATER THAN 1) AND (Y GREATER THAN 1) )
//     paint white
// else
//     paint black

float circle(in vec2 _st, in float _radius){
    vec2 l = _st-vec2(0.5);
    return 1.-smoothstep(_radius-(_radius*0.01),
                         _radius+(_radius*0.01),
                         dot(l,l)*4.0);
}

float box(vec2 _st, vec2 _size, float _smoothEdges){
    _size = vec2(0.5)-_size*0.500;
    vec2 aa = vec2(_smoothEdges*0.5);
    vec2 uv = smoothstep(_size,_size+aa,_st);
    uv *= smoothstep(_size,_size+aa,vec2(1.0)-_st);
    return uv.x*uv.y;
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

float B = abs(sin(u_time));
float B1 = (sin(u_time));
float N = floor(mod(u_time, 10.));

vec2 divideby(in float num, in vec2 c) 
{
    c *= num;      // Scale up the space by N
    // ========== next are equivalent below:
    c = fract(c); // Wrap around 1.0
    // or returns the value of x modulo y. 
    c = mod(c, 1.0);
    //This is computed as x - y * floor(x/y).
    c = c - 1.000 * floor(c/1.000);
    return c;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
     // st.x *= u_resolution.x/u_resolution.y;
    vec3 color = vec3(0.0);

    st = divideby(N, st);

    float rotate = u_time *N * 0.50;
    float remap =  0.25 * abs(sin(u_time)) + 0.5;
    st = rotateV2(remap, rotate, st);
    
    color = vec3(box(st,vec2(0.570,0.490), 0.0));
    
    gl_FragColor = vec4(color,1.0);
}
