// Author: fau
// Title: batman

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
    
    //remapping to 0 , 0
    vec2 pos = vec2(0.5) - st;
    float B = abs(sin(u_time));
    
	// First we find the angle of each point 
    // using the atan function.
    float angle = atan(
        pos.x
        , pos.y
    );
    
    
	gl_FragColor=vec4(
        step(0.164,cos( floor(angle*0.556+0.508)* 1.610-angle)*length(pos.xy))
    );

}
