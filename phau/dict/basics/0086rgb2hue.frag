// Author: BoS

// Title: Interaction of color - IV
// Lesson: Color the most relative medium in art
// Chapter: A color has many faces - the relativity of color

// "To begin the study of how color deceives and how to make use of this,
// the first excercise is
// to make one and the same color look different."
// 															Josef Albers


#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float rect(in vec2 st, in vec2 size){
	size = 0.250-size*0.250;
    vec2 uv = smoothstep(size,size+size*vec2(0.002),st*(1.0-st));
	return uv.x*uv.y;
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec3 influenced_color = vec3(
        fract(u_time * 0.2),
        fract(u_time * 0.3),
        fract(u_time * 0.1));
    
    vec3 influencing_color_A = vec3(0.653,0.918,0.985); 
    vec3 influencing_color_B = vec3(0.980,0.576,0.113);
    
    vec3 color = mix(influencing_color_A,
                     influencing_color_B,
                     step(0.516,st.x));
    
    color = mix(color,
               influenced_color,
               rect(abs((st-vec2(0.510,0.030))*vec2(2.,1.)),vec2(0.330,0.380)));

    gl_FragColor = vec4(color,1.0);
}