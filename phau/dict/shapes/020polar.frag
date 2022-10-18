// Author BoS
// title: polar

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
      // st.x *= u_resolution.x/u_resolution.y;
      // st.y *= u_resolution.y/u_resolution.x;

    vec3 color = vec3(0.0);
    
    // plus +1 to avoid 0
    float B1 = 1. + abs(sin(u_time));
    float B = abs(sin(u_time));
    vec2 pos = vec2(0.5) - st;
    // pos = st;
    float r = length(pos) * B1 * 8.;
    float a = atan(pos.y,pos.x);

    float f = cos(a* B1 * 4.);
    // f = abs(cos(a*3.));
    // f = abs(cos(a*2.5))*.5+.3;
    f = abs(cos(a*9.968 + u_time)+3.832+sin(a*B*u_time ))*2.080+-3.052;
    // f = smoothstep(-.5,1., cos(a*10.))*0.2+0.5;

    color = vec3( 1.-smoothstep(f,f+0.180,r) );

    gl_FragColor = vec4(color, 1.0);
}
