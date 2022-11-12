// Author: phau
// Title: base
// lesson: base!

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

vec2 remap(vec2 st, float N) {
    st =  N * st;
    st = st - (N / 2.0);
    return st;
}

float circleA(vec2 st, float delta) {
    return length(st) + delta;
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
  	vec2 ipos = ceil(st);
  	vec2 fpos = fract(st);
    
    float radius = circleA(st, S * 0.496);
    float angle = atan(st.y, st.x);
    
    // radius = 0.832; // all lines go to the center
    angle = 1.;
    vec2 p = vec2(radius);
    p = vec2(
        radius * cos(angle),
        radius * sin(angle)
    );
     
    // color.rgb= PURPLE + AZUR;

    color.r = abs(sin(cos(u_time + 3. * p.y) * 3. * p.x));
    color.g = abs(cos(sin(u_time + 3. * p.x) * 3. * p.y));
    color.b = fract(u_time);

  gl_FragColor = color;
}