// Author: Patricio Gonzalez Vivo
// Title: Matrix

#ifdef GL_ES
precision mediump float;
#endif
                
uniform vec2 u_resolution;
uniform float u_time;

float random(in float x){ return fract(sin(x)*43758.5453); }
float random(in vec2 st){ return fract(sin(dot(st.xy ,vec2(12.9898,78.233))) * 43758.5453); }

float randomChar(vec2 outer,vec2 inner){
    float grid = 5.;
    vec2 margin = vec2(.2,.05);
    vec2 borders = step(margin,inner)*step(margin,1.-inner);
    vec2 ipos = floor(inner*grid);
    vec2 fpos = fract(inner*grid);
    return step(.5,random(outer*64.+ipos)) * borders.x * borders.y * step(0.01,fpos.x) * step(0.01,fpos.y);
}

void main(){
    vec2 st = gl_FragCoord.st/u_resolution.xy;
    st.y *= u_resolution.y/u_resolution.x;
    vec3 color = vec3(0.0);

    float t = u_time*20.;
    float rows = floor(100.);
    vec2 ipos = floor(st*rows);
    vec2 fpos = fract(st*rows);

    ipos.y += mod(floor(t*random(ipos.x+1.)),max(u_resolution.x,u_resolution.y));

    float pct = 1.0;
    pct *= randomChar(ipos,fpos);
    pct *= random(ipos);

    color += pct*pct;

    gl_FragColor = vec4( color , 1.0);
}