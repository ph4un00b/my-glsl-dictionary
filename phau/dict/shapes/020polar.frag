// Author BoS
// title: polar

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.804, pct, st.y) -
          smoothstep( pct, pct+-1.172, st.y);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);
    
    // plus +1 to avoid 0
    float B1 = abs(sin(u_time * 0.5));
    float B = abs(sin(u_time));
    vec2 pos = vec2(0.5) - st;
    // pos = st;
    float r = length(pos) * B1 * 3.;
    float a = atan(pos.y,pos.x);

    float f = cos(a* B1 * 9.);
    // f = abs(cos(a*3.));
    // f = abs(cos(a*2.5))*.5+.3;
 
    // f = abs(cos(a*9.968 + u_time)+3.832+sin(a*B*u_time ))*2.080+-3.052;
    // f = smoothstep(-.5,1., cos(a*10.))*0.2+0.5;

    float pct = plot(pos,f);
    color = vec3( 1.-smoothstep(f,f+0.180,r) );
    color *= (1.016-pct)*color+pct*vec3(0.101,1.000,0.078);


    gl_FragColor = vec4(color, 1.0);
}
