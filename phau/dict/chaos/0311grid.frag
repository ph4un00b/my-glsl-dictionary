// Author: phau
// Title: grid

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec4 when_eq(vec4 x, vec4 y) {
    return 1.0 - abs(sign(x - y));
}

vec4 when_neq(vec4 x, vec4 y) {
  return abs(sign(x - y));
}

#define BLACK vec3(0.,0.,0.)
#define WHITE vec3(1.,1.,1.)
#define RED vec3(1.,0.,0.)
#define GREEN vec3(0.,1.,0.)
#define BLUE vec3(0.,0.,1.)
#define YELLOW vec3(1.,1.,0.)
#define CYAN vec3(0.,1.,1.)
#define MAGENTA vec3(1.,0.,1.)
#define ORANGE vec3(1.,.5,0.)
#define PURPLE vec3(1.,0.,.5)
#define LIME vec3(.5,1.,0.)
#define ACQUA vec3(0.,1.,.5)
#define VIOLET vec3(.5,0.,1.)
#define AZUR vec3(0.,.5,1.)

vec3 paint(vec3 a, vec3 b) {
	return a + b;    
}

float ran2m(in vec2 st) {
  float k = 43758.5453123;
  float y;
  vec2 vran = vec2(12.9898,78.233);
  // vec2 vran = vec2(1. + N, 1. + N * 10.);
  float x = dot(st.xy, vran);
  // middle concentration
  // >>> rand(x);
  y = fract( sin(x) * k);
  return y;
}

float noise2c(vec2 x) {
  vec2 i = floor(x);  // integer
  vec2 f = fract(x);  // fraction
  vec2 u = f * f * (3.0 - 2.0 * f ); // custom cubic curve
  return mix(
      mix( ran2m(i), ran2m(i + vec2(1.0, 0.0)), u.x ),
      mix( ran2m(i + vec2(0.0, 1.0)), ran2m(i + vec2(1.0, 1.0)), u.x),
      u.y
  );
}

float layers(vec2 st) {
    float test = 0.5 * noise2c(st * (7.0) + u_time);
    // layer2
    test += 0.25 * noise2c(st * 14.376 + vec2(u_time, 0.0));
    // layer3
    test += 0.125 * noise2c(st * 28.+ vec2(u_time, 0.0));
    // layer4
    test += 0.0625 * noise2c(st * 56.+ vec2(u_time, 0.0));
    // layer5
    test += 0.0625 * noise2c(st * 56. * 2.+ vec2(u_time, 0.0));
    return test;
}

void main() {
 	vec3 c1 = BLACK;
    vec3 c2 = WHITE;
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    // line below will stretch the grid
    // st.x *= u_resolution.x/u_resolution.y;
	
    st = st * 3.;

    vec2 i = ceil(st);  // integer
	vec2 f = fract(st);  // fraction
    vec3 color = vec3(0.);
    vec3 cell = vec3(0.);

    color.r = fract(st.x);
    color.g = fract(st.y);
    color.b = abs(sin(u_time));
    
    cell = paint(AZUR, VIOLET);
    float lever = 0.512;
    float test = smoothstep(0.0, lever, layers(st));
          // test = step(lever, layers1(st));
  	cell = mix(c1,c2, test);
    color = i.x == 1. && i.y == 1. ? cell : color;
    cell = paint(AZUR, ACQUA);
    color = i.x == 2. && i.y == 1. ? cell : color;
    cell = paint(AZUR, PURPLE);
    color = i.x == 3. && i.y == 1. ? cell : color;
    cell = paint(LIME, ORANGE);
    color = i.x == 1. && i.y == 2. ? cell : color;
    cell = paint(AZUR, BLUE);
    color = i.x == 2. && i.y == 2. ? cell : color;
    cell = paint(LIME, ACQUA);
    color = i.x == 3. && i.y == 2. ? cell : color;
    cell = paint(LIME, MAGENTA);
    color = i.x == 1. && i.y == 3. ? cell : color;
    cell = paint(LIME, CYAN);
    color = i.x == 1. && i.y == 3. ? cell : color;
    cell = paint(RED, VIOLET );
    color = i.x == 2. && i.y == 3. ? cell : color;
    cell = paint(RED, ACQUA );
    color = i.x == 3. && i.y == 3. ? cell : color;

    gl_FragColor = vec4(color,1.0);
}