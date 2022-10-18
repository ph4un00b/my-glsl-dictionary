// Author: BoS
// Title: mixed fields

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
     st.x *= u_resolution.x/u_resolution.y;

	// Remap the space to -1. to 1.
    // st = st *2.-1.;
    
    vec2 pos = vec2(0.460,0.530) - st;
    
    float B = abs(sin(u_time));
    float B1 = (sin(u_time));
    float N = floor(mod(u_time, 10.));
    
	// First we find the angle of each point 
    // using the atan function.
    float PixelAngle = B1 + atan(
        pos.x
        , pos.y
    );
    
    // remapping 1.5 to 2.5
    // atan(x) 			-> -1.5, 1.5
    // atan(x) * 0.636  -> -1, 2
    // atan(x) + 0.5 	-> -1.5, 2.5
    // todo: use turns 
    // @link https://www.computerenhance.com/p/turns-are-better-than-radians
    float PixelRadius = TWO_PI / N;    
    float fd = cos(
        floor(.5 + PixelAngle / PixelRadius)
        * PixelRadius - PixelAngle)
        *length(
        	pos
        	// min(abs(pos) - B, 0.)
        	// max(abs(pos) + B, 0.)
    );
    
    fd += sin(
        floor(.5 + PixelAngle / PixelRadius)
        * PixelRadius - PixelAngle)
        *length(
        	// pos
        	min(abs(pos) - B, 0.)
        	// max(abs(pos) + B, 0.)
    );
    
    vec3 color = vec3(fd);
    gl_FragColor = vec4(color, 1.);
}
