// Author BoS
// Title: frag - mod - floor

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

    color = vec3(circle(st,0.5));
    
    gl_FragColor = vec4(color,1.0);
}
