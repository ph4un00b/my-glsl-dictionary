// Author: fau
// Title: polygon counter

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
    
float polygon( in float N, in float size, in vec2 st ) {
      //remapping to 0 , 0
    vec2 pos = vec2(0.5) - st;
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
    // todo: use turns 
    // @link https://www.computerenhance.com/p/turns-are-better-than-radians
    float b = TWO_PI / N;
    float range = angle;
    
    // range = .5;
    // range *= 0.636;
    range /= b;
    range += 0.500;
    // then round it down to the nearest 
    // integer using the floor function
    // This puts each point 
    // into one of four quadrants
    
    range = floor(range);
    
    // then turn that back into an
    // angle and subtract the difference 
    // between that and the actual angle
    // range = range * 1.57 - angle;
    range = range * b - angle;
    
    // Taking cos of that difference 
    // and multiplying by the length of
    // the original point gives the 
    // distance of that point along the 
    // vector for the centre line of the quadrant.
    range = cos(range) * length(pos.xy);
    
    // Finally a step turns that into a square
    range = step( size , range );
    return range;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
        //  st.x *= u_resolution.x/u_resolution.y;

    //remapping to 0 , 0
    vec2 pos = vec2(0.5) - st;
    float B = abs(sin(u_time));
    float B1 = (sin(u_time));
    float N = floor(mod(u_time, 10.));
    
	float range = polygon(N, 0.140, st);
    
    gl_FragColor = vec4(range);
}
