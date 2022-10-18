// Author BoS
// title: smooth - circle
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

// without expensive sqrt
float circle(in vec2 _st, in float _radius){
    vec2 dist = _st-vec2(0.5);
	return 1.-smoothstep(_radius-(_radius*0.01),
                         _radius+(_radius*0.01),
                         dot(dist,dist)*4.0);
}


void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = smoothCircle(vec2(0.4), st) * smoothCircle(vec2(0.950,0.820), st);
    color *= min(smoothCircle(vec2(1.000,0.200), st), smoothCircle(vec2(0.210,0.970), st));
    // color *= max(smoothCircle(vec2(-0.180,0.620), st), smoothCircle(vec2(0.070,-0.010), st));
     // color *= pow(smoothCircle(vec2(1.000,0.200), st), smoothCircle(vec2(0.210,0.970), st));
	gl_FragColor = vec4( color, 1.0 );
}
