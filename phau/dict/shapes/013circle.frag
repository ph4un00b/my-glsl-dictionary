// Author BoS
// title: distant field - circle

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  st.x *= u_resolution.x/u_resolution.y;
  vec3 color = vec3(0.0);
  float d = 0.0;

  float B = abs(sin(u_time));
  float B1 = (sin(u_time));
    
  // Remap the space to -1. to 1.
  st = st * 2. - 1.;
  // Make the distance field
  // d = length( abs(st)-(0.300) );
  vec2 quadrants = abs(st) * 1.;
  d = length( quadrants - B );
  // d = length( min(abs(st)- B ,0.) );
  // d = length( max(abs(st)- B ,0.) );

  // Visualize the distance field
  // gl_FragColor = vec4(vec3(fract(d*10.0)),1.0);
	// gl_FragColor = vec4(vec3( (d*10.0) ) , 1.0);

  // Drawing with the distance field
  // gl_FragColor = vec4(vec3( step(.3,d) ),1.0);
  gl_FragColor = vec4(vec3( step(.3,d) * step(d,.4)),1.0);
  // gl_FragColor = vec4(vec3( smoothstep(.3,.4,d)* smoothstep(.6,.5,d)) ,1.0);
}
