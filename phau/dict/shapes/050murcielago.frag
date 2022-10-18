// Author: fau
// Title: murcielago

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

    //remapping to 0 , 0
    vec2 pos = vec2(0.5) - st;
    float B = abs(sin(u_time));
    
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
    float range = angle;
    range *= 0.636;
    range += 0.500;
    // then round it down to the nearest 
    // integer using the floor function
    // This puts each point 
    // into one of four quadrants
    range = floor(range);
    
    // then turn that back into an
    // angle and subtract the difference 
    // between that and the actual angle
    // range = ;
    
    // Taking cos of that difference 
    // and multiplying by the length of
    // the original point gives the 
    // distance of that point along the 
    // vector for the centre line of the quadrant.
    range = cos( floor(angle*0.636+0.5)* 1.57-angle * length(pos.xy));
    
    // Finally a step turns that into a square
    range = step(0.2, 
                range
	
                );
    
    gl_FragColor=vec4(range);
    // f=vec4(step(.5,cos( floor(a*.636+.5)* 1.57-a)*length(c.xy)))
	// gl_FragColor=vec4(
	// step(0.220,
	// cos( 
	// floor(
	// angle*0.636+0.5)* 1.57-angle)
	// *length(pos.xy)
	// )
	// );

}
