// Author: BoS
// Title: step square

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
    // vec3 color = vec3(0.0);

    // Each result will return 1.0 (white) or 0.0 (black).
    // float left = step(0.148,st.x);   // Similar to ( X greater than 0.1 )
    // float bottom = step(0.148,st.y); // Similar to ( Y greater than 0.1 )

    // // The multiplication of left*bottom will be similar to the logical AND.
    // color = vec3( left * bottom );

    
    // equivalent below
    
    float pixels = abs(sin(u_time * 0.5));
    vec2 borders = step(vec2(pixels),st);
	float pct = borders.x * borders.y;

    // top-right
    vec2 tr = step(vec2(pixels),1.0-st);
    pct *= tr.x * tr.y;
    
    vec3 color2 = vec3(pct);
    
    gl_FragColor = vec4(color2,1.0);
}
