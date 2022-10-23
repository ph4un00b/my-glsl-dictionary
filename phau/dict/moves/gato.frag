// Author BoS
// Title: fixed gato

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

float box(in vec2 _st, in vec2 _size){
    _size = vec2(0.5) - _size*0.5;
    vec2 uv = smoothstep(_size,
                        _size+vec2(0.001),
                        _st);
    uv *= smoothstep(_size,
                    _size+vec2(0.001),
                    vec2(1.0)-_st);
    return uv.x*uv.y;
}



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
    c *= num;  // Scale up the space by N
    // ========== next are equivalent below:
    c = fract(c); // Wrap around 1.0
    // or returns the value of x modulo y. 
    c = mod(c, 1.0);
    //This is computed as x - y * floor(x/y).
    c = c - 1.000 * floor(c/1.000);
    return c;
}

vec3 rgb(in float r, in float g, in float b)
    {
    return vec3(r,g,b);
}

vec2 xy(in float x, in float y)
{
    return vec2(x,y);
}

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

#define PI 3.14159265359

float cross(in vec2 _st, float _size){
    // _st = rotate2d(0.012) * _st;
    _st -= vec2(0.5);
    // rotate the space
    // _st = rotate2d( sin(u_time)*PI ) * _st;
    _st = rotate2d( 0.748 ) * _st;
    // move it back to the original place
    _st += vec2(0.5);
    
    return box(_st, vec2(_size,_size/4.)) +
            box(_st, vec2(_size/4.,_size)); 
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
     // st.x *= u_resolution.x/u_resolution.y;
    vec3 color = vec3(0.0);
	
    vec2 pos = st;

	if (ceil(pos * 3.) == xy(1.,1.)) {
	color += rgb(1.000,0.124,0.366);
    // color += vec3(circle(pos * 2. + 0.17,0.284));   
    color += vec3(circle(st * 1. + 0.324, 0.068)); 
	}
    if (ceil(pos * 3.) == xy(2.,2.)) {
	color += rgb(0.000,1.000,0.067);
	// color += vec3(circle(pos * 2. - 0.5,0.284));     
    color += vec3(cross(
        st * 1. 
        , 0.236)   );   
	}
    if (ceil(pos * 3.) == xy(3.,3.)) {
	color += rgb(0.006,0.174,1.000);
    // color += vec3(circle(pos * 2. - 1.17,0.284));
    color += vec3(circle(st * 1. + -0.332, 0.068)); 
	}

    if (ceil(pos * 3.) == xy(1.,2.)) {
	color += rgb(1.000,0.381,0.988);
   	// color += vec3(circle(
    // color += vec3(circle(st * 1. + 0.204, 0.068)); 
    color += vec3(
        circle(
        	vec2(
                st.x * 1. + 0.340
                , st.y * 1. + 0.004)
        	, 0.068)
        ); 
	}
    if (ceil(pos * 3.) == xy(1.,3.)) {
	color += rgb(1.000,0.310,0.078);
        // color += vec3(circle(pos * 2. - 0.496,0.284)); 

    color += vec3(
        cross(
        	vec2(
                st.x * 1. + 0.324 
                , st.y * 1. + -0.356) 
        	, 0.228)
        ); 
	}

    if (ceil(pos * 3.) == xy(2.,1.)) {
	color += rgb(0.059,0.595,0.121);
    color += vec3(circle(vec2(
        st.x * 1. + -0.004
    	,st.y * 1. + 0.324
    ), 0.068)); 
	}
    if (ceil(pos * 3.) == xy(2.,3.)) {
	color += rgb(0.875,0.990,0.023);
    color += vec3(circle(vec2(
        st.x * 1. + 0.004
    	,st.y * 1. + -0.340
    ), 0.068)); 
	}

    if (ceil(pos * 3.) == xy(3.,1.)) {
	color += rgb(0.706,0.008,1.000);
    color += vec3(cross(vec2(
        st.x * 1. + -0.324
    	,st.y * 1. + 0.324
    ), 0.212)); 
	}
    if (ceil(pos * 3.) == xy(3.,2.)) {
	color += rgb(0.016,0.689,1.000);
    color += vec3(circle(vec2(
        st.x * 1. + -0.348
    	,st.y * 1. + -0.004
    ), 0.068));  
	}
        
    st = divideby(3., st);
    
    // color += vec3(circle(st,0.5));
    
    if (ceil(st * 3.) == /** 1,1 in 1 */ xy(1.,1.)) {
         // color = vec3(circle(st,0.956));
		// color = rgb(1.000,0.494,0.015);
        // color = vec3(cross(st,0.372));
        
	}
    
    

    // color += vec3(st,0.508);


    // color += vec3(circle(st,0.5));
    // color = vec3(ceil(st),0.);
    
    gl_FragColor = vec4(color,1.0);
}
