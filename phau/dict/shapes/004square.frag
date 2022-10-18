// Author: todo
// Title: mondrian square

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
    // bottom-left
    vec2 bl = step(vec2(pixels),st);
	float pct = bl.x * bl.y;
    // top-right
    vec2 tr = step(vec2(pixels),1.0-st);
    pct *= tr.x * tr.y;
    vec3 color = vec3(pct);
    return color;
}

vec3 squareY(vec2 st, float size) {
    float pixels = size;
    // bottom-left
    vec2 bl = step(vec2(pixels),st);
	float pct = bl.x * bl.y;
    // top-right
    vec2 tr = step(vec2(pixels),1.0-st);
    pct *= tr.x * tr.y;
    vec3 colorY = vec3(vec2(pct), .1);
    // vec3 colorR = vec3(pct, .1, pct);
    // vec3 colorB = vec3(0.1,vec2(pct));
      // vec3 color = vec3(pct);
    return colorY;
}

vec3 squareB(vec2 st, float size) {
    float pixels = size;
    // bottom-left
    vec2 bl = step(vec2(pixels),st);
	float pct = bl.x * bl.y;
    // top-right
    vec2 tr = step(vec2(pixels),1.0-st);
    pct *= tr.x * tr.y;
    // vec3 colorY = vec3(vec2(pct), .1);
    // vec3 colorR = vec3(pct, .1, pct);
    vec3 colorB = vec3(0.1,vec2(pct));
      // vec3 color = vec3(pct);
    return colorB;
}

vec3 squareR(vec2 st, float size) {
    float pixels = size;
    // bottom-left
    vec2 bl = step(vec2(pixels),st);
	float pct = bl.x * bl.y;
    // top-right
    vec2 tr = step(vec2(pixels),1.0-st);
    pct *= tr.x * tr.y;
    // vec3 colorY = vec3(vec2(pct), .1);
    vec3 colorR = vec3(pct, .1, pct);
    // vec3 colorB = vec3(0.1,vec2(pct));
      // vec3 color = vec3(pct);
    return colorR;
}

vec3 outlineSquare(float outer, float inner, vec2 st) {
    vec3 inSquare = 1. -square(st, inner);
    vec3 res = 1. - (square(st, outer) * inSquare );
    return res;
}

vec3 outlineSquareY(float outer, float inner, vec2 st) {
    vec3 inSquare = 1. -squareY(st, inner);
    vec3 res = 1. - (square(st, outer) * inSquare );
    return res;
}

vec3 outlineSquareR(float outer, float inner, vec2 st) {
    vec3 inSquare = 1. -squareR(st, inner);
    vec3 res = 1. - (square(st, outer) * inSquare );
    return res;
}

vec3 outlineSquareB(float outer, float inner, vec2 st) {
    vec3 inSquare = 1. -squareB(st, inner);
    vec3 res = 1. - (square(st, outer) * inSquare );
    return res;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = outlineSquareY(0.444, 0.456, st + vec2(0.410,-0.400)) *
        outlineSquareR(0.444, 0.456, st + vec2(0.020,0.080)) *
        outlineSquareB(0.444, 0.456, st + vec2(-0.100,-0.080));
    gl_FragColor = vec4(color,1.0);
}
