// Author: BoS
// Title: rotate - scale

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

float cross(in vec2 _st, float _size){
    return  box(_st, vec2(_size,_size/4.)) +
            box(_st, vec2(_size/4.,_size));
}

float sqr(float size, vec2 p) {
    vec2 radius = abs( p.xy );
    float field = max(radius.x , radius.y);
    return step( size, field );
}

float B = abs(sin(u_time));

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

mat2 scale2d(vec2 _scale){
    return mat2(_scale.x,0.0,
                0.0,_scale.y);
}

#define PI 3.14159265359


void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
     // st.x *= u_resolution.x/u_resolution.y;
	vec2 pos = vec2( 0.5 ) - st;
    // To move the cross we move the space
    vec2 translate = vec2(
        cos(u_time),
        sin(u_time) * cos(u_time)
    );

    // pos = rotate2d( sin(u_time)* 4. ) * pos;
    pos = rotate2d( sin(u_time)* PI  ) * pos;
    pos += translate * 0.348;
    pos = scale2d( vec2(sin(u_time) + 0.0) ) * pos;
    vec3 color = vec3( sqr(0.1, pos) );
    
    // coords debug
    color += vec3(pos.x, pos.y, 0.0);
    
	gl_FragColor = vec4(color, 1.);

}
