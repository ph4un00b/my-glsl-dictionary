// Author: BoS
// Title: floor square

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
    
void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    float t = (sin(floor(u_time))) * 0.2;
    float size = 0.256;
    // Each result will return 1.0 (white) or 0.0 (black).
    float left = (smoothstep(t, size, st.x));   // Similar to ( X greater than 0.1 )
    float bottom = (smoothstep(t, size, st.y)); // Similar to ( Y greater than 0.1 )
    // // The multiplication of left*bottom will be similar to the logical AND.
    color = vec3( floor(left * bottom) );


//     // top-right
    float right = smoothstep(t, size, 1.-st.x);   // Similar to ( X greater than 0.1 )
    float top = smoothstep(t, size, 1.-st.y); // Similar to ( Y greater than 0.1 )
    // // The multiplication of left*bottom will be similar to the logical AND.
    color *= vec3( right * top );
    
    gl_FragColor = vec4(color,1.0);
}
