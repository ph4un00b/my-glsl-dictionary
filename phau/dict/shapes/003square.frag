// Author: BoS
// Title: outline square

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
    
vec3 square(vec2 st, float size) {
    float pixels = size;
    vec2 bl = step(vec2(pixels),st);
	float pct = bl.x * bl.y;
    // top-right
    vec2 tr = step(vec2(pixels),1.0-st);
    pct *= tr.x * tr.y;
    vec3 color2 = vec3(pct);
    return color2;
}

vec3 outlineSquare(float outer, float inner, vec2 st) {
    vec3 inSquare = 1. - square(st, inner);
    vec3 res = 1. - (square(st, outer) * inSquare );
    return res;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = outlineSquare(0.134, 0.200, st);
    gl_FragColor = vec4(color,1.0);
}
