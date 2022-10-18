// Author: thndl
// Title: distant field square

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
    // st += vec2(-0.5);
    //remapping to 0.0
    vec2 pos = vec2(0.5) - st;
    float B = abs(sin(u_time * 0.456));
    
	// vec2 bl = step(vec2(B),st);
	// float pct = bl.x * bl.y;
	// vec2 tr = step(vec2(B),1.0-st);
	// pct *= tr.x * tr.y;
    // vec3 color = vec3(pct);
    // gl_FragColor = vec4(color,1.0);
    
    vec2 r = abs(pos.xy);
    // distance field
    float squ = max(r.x , r.y);
    // squ = r.x;
    // squ = r.y;
        
	gl_FragColor=vec4(
        vec3(squ)
        ,1.);

}
