// Author BoS
// title: plus min max circle

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 smoothCircle(vec2 pos, vec2 st) {
    float pct = 0.0;
    // a. The DISTANCE from the pixel to the center
    pct = smoothstep(0.132,
        0.228,
        distance(
            st * abs(sin(u_time* 0.600) *5.752)
            , pos));
    return vec3(pct, sin(u_time),cos(u_time));
}

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;
    float pct = step(0.052,distance(st,vec2(0.230,0.420))) * distance(st,vec2(0.060,0.630));
    float pct2 = step(0.044,distance(st,vec2(0.820,0.620)) * distance(st,vec2(0.810,0.190)));
 	float min = min(distance(st,vec2(0.410,-0.400)), distance(st,vec2(0.690,-0.170)));
  	float max = max(distance(st,vec2(0.380,0.410)), distance(st,vec2(-0.310,-0.820)));
  	float pow = pow(distance(st,vec2(0.580,0.860)), distance(st,vec2(0.490,0.730)));
    vec3 color = vec3(pct*pct2*min*max*pow);
	gl_FragColor = vec4( color, 1.0 );
}
