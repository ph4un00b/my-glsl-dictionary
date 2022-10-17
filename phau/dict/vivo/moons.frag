// Author: Patricio Gonzalez Vivo
// Title: Moons

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.1415926535897932384626433832795
#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// LIGHT Functions and Structs
struct Light { vec3 ambient, diffuse, specular; };
struct DirectionalLight { Light emission; vec3 direction; };
struct PointLight { Light emission; vec3 position; };
struct Material { Light bounce; vec3 emission; };

void computeLight(in DirectionalLight _light, in Material _material, in vec3 _pos, in vec3 _normal, inout Light _accumulator ){
    _accumulator.ambient += _light.emission.ambient;

    float diffuseFactor = max(0.0,dot(_normal,-_light.direction));
    _accumulator.diffuse += _light.emission.diffuse * diffuseFactor;

    if (diffuseFactor > 0.0) {
        vec3 reflectVector = reflect(_light.direction, _normal);
        float specularFactor = max(0.0,dot(normalize(_pos), reflectVector));
        _accumulator.specular += _light.emission.specular * specularFactor;
    }

}

void computeLight(in PointLight _light, in Material _material, in vec3 _pos, in vec3 _normal, inout Light _accumulator ){
    float dist = length(_light.position - _pos);
    vec3 lightDirection = (_light.position - _pos)/dist;

    _accumulator.ambient += _light.emission.ambient;

    float diffuseFactor = max(0.0,dot(lightDirection,_normal));
    _accumulator.diffuse += _light.emission.diffuse * diffuseFactor;

    if (diffuseFactor > 0.0) {
        vec3 reflectVector = reflect(-lightDirection, _normal);
        float specularFactor = max(0.0,dot(-normalize(_pos), reflectVector));
        _accumulator.specular += _light.emission.specular * specularFactor;
    }
}

vec3 calculate(in Material _material, in Light _light){
    vec3 color = vec3(0.0);
    color += _material.emission;
    color += _material.bounce.ambient * _light.ambient;
    color += _material.bounce.diffuse * _light.diffuse;
    color += _material.bounce.specular * _light.specular;
    return color;
}

vec3 rimLight (in vec3 _normal, in float _pct) {
    float cosTheta = abs( dot( vec3(0.0,0.0,-1.0) , _normal));
    return vec3( _pct * ( 1. - smoothstep( 0.0, 1., cosTheta ) ) );
}

// SPHERE functions
vec3 sphereNormal (vec2 st) {
    st = fract(st)*2.0-1.0; 
    vec3 ret;
    ret.xy = sqrt(st * st) * sign(st);
    ret.z = sqrt(abs(1.0 - dot(ret.xy,ret.xy)));
    return ret * 0.5 + 0.5;
}

float circle (vec2 st, float radius) {
    vec2 pos = vec2(0.5)-st;
    return smoothstep(1.0-radius,1.0-radius+radius*0.2,1.-dot(pos,pos)*PI);
}


// SCENE Definitions
//---------------------------------------------------

//  Light accumulator
Light l = Light(vec3(0.0),vec3(0.0),vec3(0.0)); 

//  Material
Material m = Material(Light(vec3(.0),vec3(0.960,0.960,0.960),vec3(0.3)),vec3(0.0));

// Lights
DirectionalLight pLight = DirectionalLight(Light(vec3(0.),vec3(0.9),vec3(0.5)),vec3(1.0));


void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st = (st-.5)*1.088+.5;
    if (u_resolution.y > u_resolution.x ) {
        st.y *= u_resolution.y/u_resolution.x;
        st.y -= (u_resolution.y*.5-u_resolution.x*.5)/u_resolution.x;
    } else {
        st.x *= u_resolution.x/u_resolution.y;
        st.x -= (u_resolution.x*.5-u_resolution.y*.5)/u_resolution.y;
    }
    vec3 color = vec3(0.);
    
    st = vec2(0.5)-st;
    
    float t = u_time*.1;
    float r = dot(st,st);
    float a = atan(st.y,st.x)/PI;
    
    st = vec2(a,r);
    
    float num = 9.;
    st *= vec2(num,pow(num,1.582*(1.0-r)));
    
    vec2 ipos = floor(st);
    vec2 fpos = fract(st);
        
    if (ipos.y == 2. && r < .3) {
        vec3 normal = sphereNormal(fpos)*2.0-1.0;
        
        t += ipos.x*3.14*0.1;
        pLight.direction = normalize(vec3(cos(t),0.,sin(t)));
        computeLight(pLight,m,normal,normal,l);

        color = calculate(m,l);
        
        // color -= rimLight(normal, -0.124);
		color *= circle(fpos, .8);
    }
    gl_FragColor = vec4(color,1.);
}