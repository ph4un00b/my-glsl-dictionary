// Author: BoS
// Title: step

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.148, pct, st.y) -
          smoothstep( pct, pct+0.132, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;

    // Step will return 0.0 unless the value is over 0.892,
    // in that case it will return 1.0
    float y = step(0.828,st.x);

    vec3 color = vec3(y);

    float pct = plot(st,y);
    color = (1.0-pct)*color+pct*vec3(0.876,0.027,1.000);

    gl_FragColor = vec4(color,1.0);
}
