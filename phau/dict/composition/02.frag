// Author: fau
// Title: fondo

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.0);
	vec3 colorA = vec3(0.028,0.021,0.865);
	vec3 colorB = vec3(0.645,0.007,0.157);

    vec3 pct = vec3(st.x);

    pct.r = smoothstep(0.072,1.296, st.x);
    pct.g = sin(st.x * 2.540 ) - 0.204;
    pct.b = pow(st.x,0.980);
    //
    color = mix(colorA, colorB, pct);
    // Plot transition lines for each channel
    color = mix(color,vec3(1.0,0.0,0.0),plot(st,pct.r));
    color = mix(color,vec3(0.0,1.0,0.0),plot(st,pct.g));
    color = mix(color,vec3(0.0,0.0,1.0),plot(st,pct.b));
    // Step will return 0.0 unless the value is over 0.5,
    // in that case it will 	return 1.0
//     float a = smoothstep(0.256, 1.068, st.x);
// 	vec3 coloredA = a + vec3(0.001,0.080,0.990);
//     vec3 color = vec3(coloredA);
    
//     float pct = plot(st,a);
//     color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

    gl_FragColor = vec4(color,1.0);
}
