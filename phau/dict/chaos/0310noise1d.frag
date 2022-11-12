// Author: phau
// Title: animation
// lesson: noise1d!

#ifdef GL_ES
precision mediump float;
#endif

uniform vec3 u_camera;
uniform vec3 u_light;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

varying vec4 v_position;
varying vec3 v_normal;

#if defined(MODEL_VERTEX_TEXCOORD)
varying vec2 v_texcoord; 
#endif

/* Color palette */
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

vec2 xy(in float x,in float y)
{
    return vec2(x,y);
}

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
    sin(_angle),cos(_angle));
}

float box(in vec2 _st,in vec2 _size){
    _size=vec2(.5)-_size*.5;
    vec2 uv=smoothstep(_size,
        _size+vec2(.001),
    _st);
    uv*=smoothstep(_size,
        _size+vec2(.001),
        vec2(1.)-_st);
        return uv.x*uv.y;
    }
    
    float cross(in vec2 _st,float _size){
        // _st = rotate2d(0.012) * _st;
        _st-=vec2(.5);
        // rotate the space
        // _st = rotate2d( sin(u_time)*PI ) * _st;
        _st=rotate2d(.748)*_st;
        // move it back to the original place
        _st+=vec2(.5);
        
        return box(_st,vec2(_size,_size/4.))+
        box(_st,vec2(_size/4.,_size));
    }
    
    float circle(in vec2 _st,in float _radius){
        vec2 l=_st-vec2(.5);
        return 1.-smoothstep(_radius-(_radius*.01),
        _radius+(_radius*.01),
        dot(l,l)*4.);
    }
    
    vec4 when_eq(vec4 x, vec4 y) {
        return 1.0 - abs(sign(x - y));
    }

    vec4 when_neq(vec4 x, vec4 y) {
      return abs(sign(x - y));
    }

float S = abs(sin(u_time));
float S1 = (sin(u_time));
float N = floor(mod(u_time, 10.));
float K = 43758.5453123;
vec2 VRAN = vec2(12.9898,78.233);
uniform sampler2D u_tex0;

float ran2l(in vec2 st, in float lever) {
    float k = 43758.5453123;
    float y;
    vec2 vran = vec2(12.9898,78.233);
    // vec2 vran = vec2(1. + N, 1. + N * 10.);
    float x = dot(st.xy, vran);
    // hard bottom concentration with lever
    /** lever: [0 (uppper), 5 (bottom)] */
    y = pow(fract( sin(x) * k), lever);
    /** @link https://pixelero.wordpress.com/2008/04/24/various-functions-and-various-distributions-with-mathrandom/ */
    return y;
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

float ran2b(in vec2 st) {
    float k = 43758.5453123;
    float y;
    vec2 vran = vec2(12.9898,78.233);
    // vec2 vran = vec2(1. + N, 1. + N * 10.);
    float x = dot(st.xy, vran);
    // bottom concentration
    // >>> rand(x) * rand(x );
    y = fract( sin(x) * k) * fract( sin(x) * k);
    return y;
}

float ran2u(in vec2 st) {
    float k = 43758.5453123;
    float y;
    vec2 vran = vec2(12.9898,78.233);
    // vec2 vran = vec2(1. + N, 1. + N * 10.);
    float x = dot(st.xy, vran);
    // upper concentration
    // >>> abs(sqrt(-0.384 + rand(x)));
    y = sqrt(fract( sin(x) * k));
    return y;
}

vec2 remap(vec2 st, float N) {
    st =  N * st;
    st = st - (N / 2.0);
    return st;
}

float circleA(vec2 st, float delta) {
    return length(st) + delta;
}


float ran1(float x) {
    float y;
    float k = 43758.5453123;
    float i = floor(x);  // integer
	float f = fract(x);  // fraction
    // return fract(sin(x)* 1.0);
    return fract(sin(x)* k);
    // middle
    // return fract( sin(x) * k);
    // botom
    // return fract( sin(x) * k) * fract( sin(x) * k);
    // upper
    // return sqrt(fract( sin(x) * k));
}

float ran1l(in float x, in float lever) {
    float y;
    float k = 43758.5453123;
    float i = floor(x);  // integer
	float f = fract(x);  // fraction
    return pow(fract( sin(x) * k), lever);
}

float noise1(float x) {
    float k = 43758.5453123;
    float i = floor(x);  // integer
	float f = fract(x);  // fraction
    // y = mix(rand(i), rand(i + 1.0), f);
    return mix(ran1(i), ran1(i + 1.), f);
}

float noise1c(float x) {
    float k = 43758.5453123;
    float i = floor(x);  // integer
	float f = fract(x);  // fraction
    float u = f * f * (3.0 - 2.0 * f ); // custom cubic curve
    return mix(ran1(i), ran1(i + 1.), u);
}

float noise1s(float x) {
    float k = 43758.5453123;
    float i = floor(x);  // integer
	float f = fract(x);  // fraction
    // y = mix(rand(i), rand(i + 1.0), smoothstep(0.,1.,f));
    return mix(ran1(i), ran1(i + 1.0), smoothstep(0.,1.,f));
}

float noise1x(float x) {
    float y;
    float k = 43758.5453123;
    float i = floor(x);  // integer
	float f = fract(x);  // fraction

    // return fract( sin(i) * k);
    
    // y = mix(rand(i), rand(i + 1.0), f);
    // return mix(fract( sin(i) * k), fract( sin(i + 1.0) * k), f);
    
    // float u = f * f * (3.0 - 2.0 * f ); // custom cubic curve
    return mix(fract( sin(i) * k), fract( sin(i + 1.0) * k), f);
    
    // y = mix(rand(i), rand(i + 1.0), smoothstep(0.,1.,f));
    // return mix(fract( sin(i) * k), fract( sin(i + 1.0) * k), smoothstep(0.,1.,f));
}


void main(void){
    vec4 color=vec4(0.,0.,0.,1.);
    vec2 pixel=1./u_resolution;
    vec2 st=gl_FragCoord.xy*pixel;
  
    // st -= 1.;
    // st *= -0.384 + 1.840;
    // st.x += -0.328;
    // remap
    // st *= 3.;
    float times = 2.;
    st =  remap(st, times);
  	// vec2 ipos = ceil(st);
  	// vec2 fpos = fract(st);

    float radius = circleA(st, 0.496);
     // float radius = 2.;
    float angle = atan(st.y, st.x);
    
    // radius = 0.832; // all lines go to the center
    angle = noise1x(u_time);
    
    vec2 p = vec2(radius);
    // vec2 p = vec2(ran(vec2(radius), 5.056));
    p = vec2(
        radius * cos(angle),
        // ran(vec2(radius * cos(angle)), 0.080),
        radius * sin(angle)
    );
     
    // color.rgb = PURPLE + AZUR;

    float test = abs(sin(cos(2. * p.x) * 6. * p.y));
    color.r = step(noise1s(0.428 + u_time), (test));
    
    test = abs(cos(sin(3. * p.x) * 3. * p.y));
    color.g = step(noise1s(0.428 + u_time), (test));
    
    color.b = fract((u_time));
    
    // color += vec4(vec3(ran1(st.x)), 1.000);

  gl_FragColor = color;
}