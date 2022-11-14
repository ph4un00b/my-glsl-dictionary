// Author: phau
// Title: noises2!
// lesson:  sky

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
      
      #define PLATFORM_WEBGL
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

/*
original_author: [Ian McEwan, Ashima Arts]
description: modulus of 289
use: mod289(<float|vec2|vec3|vec4> x)
*/

#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(in float x) {
  return x - floor(x * (1. / 289.)) * 289.;
}

vec2 mod289(in vec2 x) {
  return x - floor(x * (1. / 289.)) * 289.;
}

vec3 mod289(in vec3 x) {
  return x - floor(x * (1. / 289.)) * 289.;
}

vec4 mod289(in vec4 x) {
  return x - floor(x * (1. / 289.)) * 289.;
}
#endif




/*
original_author: [Ian McEwan, Ashima Arts]
description: permute
use: permute(<float|vec2|vec3|vec4> x)
license : |
  Copyright (C) 2011 Ashima Arts. All rights reserved.
  Distributed under the MIT License. See LICENSE file.
  https://github.com/ashima/webgl-noise
*/

#ifndef FNC_PERMUTE
#define FNC_PERMUTE
float permute(in float x) {
     return mod289(((x * 34.) + 1.)*x);
}

vec3 permute(in vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

vec4 permute(in vec4 x) {
     return mod289(((x * 34.) + 1.)*x);
}
#endif



/*
original_author: [Ian McEwan, Ashima Arts]
description: 
use: taylorInvSqrt(<float|vec4> x)
*/

#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 taylorInvSqrt(in vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
#endif


/*
original_author: [Ian McEwan, Ashima Arts]
description: grad4, used for snoise(vec4 v)
use: grad4(<float> j, <vec4> ip)
*/

#ifndef FNC_GRAD4
#define FNC_GRAD4
vec4 grad4(float j, vec4 ip) {
    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
    vec4 p,s;

    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
    s = vec4(lessThan(p, vec4(0.0)));
    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;

    return p;
}
#endif



/*
original_author: [Ian McEwan, Ashima Arts]
description: Simplex Noise https://github.com/ashima/webgl-noise
use: snoise(<vec2|vec3|vec4> pos)
license: |
    Copyright (C) 2011 Ashima Arts. All rights reserved.
    Copyright (C) 2011-2016 by Stefan Gustavson (Classic noise and others)
    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    Neither the name of the GPUImage framework nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.  
*/

#ifndef FNC_SNOISE
#define FNC_SNOISE
float snoise(in vec2 v) {
    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                        -0.577350269189626,  // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    // First corner
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);

    // Other corners
    vec2 i1;
    //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
    //i1.y = 1.0 - i1.x;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    // x0 = x0 - 0.0 + 0.0 * C.xx ;
    // x1 = x0 - i1 + 1.0 * C.xx ;
    // x2 = x0 - 1.0 + 2.0 * C.xx ;
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;

    // Permutations
    i = mod289(i); // Avoid truncation effects in permutation
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;

    // Gradients: 41 points uniformly over a line, mapped onto a diamond.
    // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;

    // Normalise gradients implicitly by scaling m
    // Approximation of: m *= inversesqrt( a0*a0 + h*h );
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

    // Compute final noise value at P
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}


float snoise(in vec3 v) {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    //   x0 = x0 - 0.0 + 0.0 * C.xxx;
    //   x1 = x0 - i1  + 1.0 * C.xxx;
    //   x2 = x0 - i2  + 2.0 * C.xxx;
    //   x3 = x0 - 1.0 + 3.0 * C.xxx;
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
    vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

    // Permutations
    i = mod289(i);
    vec4 p = permute( permute( permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    // Gradients: 7x7 points over a square, mapped onto an octahedron.
    // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
    float n_ = 0.142857142857; // 1.0/7.0
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    //Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

float snoise(in vec4 v) {
    const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4
                        0.276393202250021,  // 2 * G4
                        0.414589803375032,  // 3 * G4
                        -0.447213595499958); // -1 + 4 * G4

    // First corner
    vec4 i  = floor(v + dot(v, vec4(.309016994374947451)) ); // (sqrt(5) - 1)/4
    vec4 x0 = v -   i + dot(i, C.xxxx);

    // Other corners

    // Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
    vec4 i0;
    vec3 isX = step( x0.yzw, x0.xxx );
    vec3 isYZ = step( x0.zww, x0.yyz );
    //  i0.x = dot( isX, vec3( 1.0 ) );
    i0.x = isX.x + isX.y + isX.z;
    i0.yzw = 1.0 - isX;
    //  i0.y += dot( isYZ.xy, vec2( 1.0 ) );
    i0.y += isYZ.x + isYZ.y;
    i0.zw += 1.0 - isYZ.xy;
    i0.z += isYZ.z;
    i0.w += 1.0 - isYZ.z;

    // i0 now contains the unique values 0,1,2,3 in each channel
    vec4 i3 = clamp( i0, 0.0, 1.0 );
    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

    //  x0 = x0 - 0.0 + 0.0 * C.xxxx
    //  x1 = x0 - i1  + 1.0 * C.xxxx
    //  x2 = x0 - i2  + 2.0 * C.xxxx
    //  x3 = x0 - i3  + 3.0 * C.xxxx
    //  x4 = x0 - 1.0 + 4.0 * C.xxxx
    vec4 x1 = x0 - i1 + C.xxxx;
    vec4 x2 = x0 - i2 + C.yyyy;
    vec4 x3 = x0 - i3 + C.zzzz;
    vec4 x4 = x0 + C.wwww;

    // Permutations
    i = mod289(i);
    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
    vec4 j1 = permute( permute( permute( permute (
                i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
            + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
            + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
            + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

    // Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope
    // 7*7*6 = 294, which is close to the ring size 17*17 = 289.
    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

    vec4 p0 = grad4(j0,   ip);
    vec4 p1 = grad4(j1.x, ip);
    vec4 p2 = grad4(j1.y, ip);
    vec4 p3 = grad4(j1.z, ip);
    vec4 p4 = grad4(j1.w, ip);

    // Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    p4 *= taylorInvSqrt(dot(p4,p4));

    // Mix contributions from the five corners
    vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
    vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
    m0 = m0 * m0;
    m1 = m1 * m1;
    return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
                + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;
}

vec2 snoise2( vec2 x ){
    float s  = snoise(vec2( x ));
    float s1 = snoise(vec2( x.y - 19.1, x.x + 47.2 ));
    return vec2( s , s1 );
}

vec3 snoise3( vec3 x ){
    float s  = snoise(vec3( x ));
    float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));
    float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));
    return vec3( s , s1 , s2 );
}

vec3 snoise3( vec4 x ){
    float s  = snoise(vec4( x ));
    float s1 = snoise(vec4( x.y - 19.1 , x.z + 33.4 , x.x + 47.2, x.w ));
    float s2 = snoise(vec4( x.z + 74.2 , x.x - 124.5 , x.y + 99.4, x.w ));
    return vec3( s , s1 , s2 );
}

#endif



/*
original_author: Patricio Gonzalez Vivo
description: Fractal Brownian Motion
use: fbm(<vec2> pos)
options:
    FBM_OCTAVES: numbers of octaves. Default is 4.
    FBM_NOISE_FNC(POS_UV): noise function to use Default 'snoise(POS_UV)' (simplex noise)
    FBM_VALUE_INITIAL: initial value. Default is 0.
    FBM_SCALE_SCALAR: scalar. Defualt is 2.
    FBM_AMPLITUD_INITIAL: initial amplitud value. Default is 0.5
    FBM_AMPLITUD_SCALAR: amplitud scalar. Default is 0.5
*/

#ifndef FBM_OCTAVES
#define FBM_OCTAVES 4
#endif

#ifndef FBM_NOISE_FNC
#define FBM_NOISE_FNC(POS_UV) snoise(POS_UV)
#endif

#ifndef FBM_NOISE2_FNC
#define FBM_NOISE2_FNC(POS_UV) FBM_NOISE_FNC(POS_UV)
#endif

#ifndef FBM_NOISE3_FNC
#define FBM_NOISE3_FNC(POS_UV) FBM_NOISE_FNC(POS_UV)
#endif


#ifndef FBM_NOISE_TYPE
#define FBM_NOISE_TYPE float
#endif

#ifndef FBM_VALUE_INITIAL
#define FBM_VALUE_INITIAL 0.0
#endif

#ifndef FBM_SCALE_SCALAR
#define FBM_SCALE_SCALAR 2.0
#endif

#ifndef FBM_AMPLITUD_INITIAL
#define FBM_AMPLITUD_INITIAL 0.5
#endif

#ifndef FBM_AMPLITUD_SCALAR
#define FBM_AMPLITUD_SCALAR 0.5
#endif

#ifndef FNC_FBM
#define FNC_FBM
FBM_NOISE_TYPE fbm(in vec2 st) {
    // Initial values
    FBM_NOISE_TYPE value = FBM_NOISE_TYPE(FBM_VALUE_INITIAL);
    float amplitud = FBM_AMPLITUD_INITIAL;

    // Loop of octaves
    for (int i = 0; i < FBM_OCTAVES; i++) {
        value += amplitud * FBM_NOISE2_FNC(st);
        st *= FBM_SCALE_SCALAR;
        amplitud *= FBM_AMPLITUD_SCALAR;
    }
    return value;
}

FBM_NOISE_TYPE fbm(in vec3 pos) {
    // Initial values
    FBM_NOISE_TYPE value = FBM_NOISE_TYPE(FBM_VALUE_INITIAL);
    float amplitud = FBM_AMPLITUD_INITIAL;

    // Loop of octaves
    for (int i = 0; i < FBM_OCTAVES; i++) {
        value += amplitud * FBM_NOISE3_FNC(pos);
        pos *= FBM_SCALE_SCALAR;
        amplitud *= FBM_AMPLITUD_SCALAR;
    }
    return value;
}
#endif

float S = abs(sin(u_time));
float S1 = (sin(u_time));
float N = floor(mod(u_time, 10.));
//
float K = 43758.5453123;
vec2 VRAN = vec2(12.9898 /* multiplier*/,78.233 /* multiplier*/);

float hash1(in float p) {
    float K = 43758.5453123;
    return fract(sin(p * 0.129898) * K);
}

vec2 hash2(in vec2 p) {
    float K = 43758.5453123;
    float x1 = 0.129898;
    float x2 = 0.81314;
    float y1 = 0.78233;
    float y2 = 0.15926;
    // p.x * vec2(x1, x2) + p.y * vec2(y1, y2)
    return fract(sin(p * mat2(x1, y1, x2, y2)) * K);
}
    
vec2 ran_unit2(in vec2 p) {
    return normalize(hash2(p) - 0.5);
}
    
float hash12(in vec2 p) {
    float K = 43758.5453123;
    return fract(sin(p.x*0.129898 + p.y*0.78233) * K);
}

vec3 paint(vec3 a, vec3 b) {
	return a + b;    
}

float value_noise(vec2 p)
{
    //Cell (whole number) coordinates
    vec2 cell = floor(p);
    //Sub-cell (fractional) coordinates
    vec2 sub = p - cell;
    //Cubic interpolation (use sub for linear interpolation)
    vec2 cube = sub*sub*(3.-2.*sub);
    //Offset vector
    vec2 off = vec2(0,1); 

    //Sample cell corners and interpolate between them.
    return mix( mix(hash12(cell+off.xx), hash12(cell+off.yx), cube.x),
                mix(hash12(cell+off.xy), hash12(cell+off.yy), cube.x), cube.y);
}
    
//Standard Perlin noise
float perlin_noise(vec2 p)
{
    //Cell (whole number) coordinates
    vec2 cell = floor(p);
    //Sub-cell (fractional) coordinates
    vec2 sub = p - cell; 
    //Quintic interpolation
    vec2 quint = sub*sub*sub*(10.0 + sub*(-15.0 + 6.0*sub));
    //Offset vector
    const vec2 off = vec2(0,1); 

    //Compute corner hashes and gradients
    float grad_corner00 = dot(ran_unit2(cell+off.xx), off.xx-sub);
    float grad_corner10 = dot(ran_unit2(cell+off.yx), off.yx-sub);
    float grad_corner01 = dot(ran_unit2(cell+off.xy), off.xy-sub);
    float grad_corner11 = dot(ran_unit2(cell+off.yy), off.yy-sub);

    //Interpolate between the gradient values them and map to 0 - 1 range
    return mix(mix(grad_corner00, grad_corner10, quint.x),
               mix(grad_corner01, grad_corner11, quint.x), quint.y) * 0.7 + 0.5;
}
    
float perlin_noise_linear(vec2 p)
{
    //Cell (whole number) coordinates
    vec2 cell = floor(p);
    //Sub-cell (fractional) coordinates
    vec2 sub = p - cell; 
    //Offset vector
    const vec2 off = vec2(0,1); 

    //Compute corner hashes and gradients
    float grad_corner00 = dot(ran_unit2(cell+off.xx), off.xx-sub);
    float grad_corner10 = dot(ran_unit2(cell+off.yx), off.yx-sub);
    float grad_corner01 = dot(ran_unit2(cell+off.xy), off.xy-sub);
    float grad_corner11 = dot(ran_unit2(cell+off.yy), off.yy-sub);

    //Interpolate between the gradient values them and map to 0 - 1 range
    return mix(mix(grad_corner00, grad_corner10, sub.x),
               mix(grad_corner01, grad_corner11, sub.x), sub.y);
}

//Standard Worley noise function
float worley_noise(vec2 p)
{
    //Cell (whole number) coordinates
    vec2 cell = floor(p);
    //Initialize distance at a high-number
    float dist = 9.0;
    
    //Iterate through [3,3] neighbor cells
    for(int x = -1; x<=1; x++)
    for(int y = -1; y<=1; y++)
    {
        //Get sample cell coordinates
        vec2 sample_cell = cell + vec2(x,y);
        //Compute difference from pixel to worley cell
        vec2 worley_dif = hash2(sample_cell) + sample_cell - p;
        //Save the nearest distance
        dist = min(dist, length(worley_dif));
    }
    return dist;
}

//Standard Voronoi noise function
float voronoi_noise(vec2 p)
{
    //Cell (whole number) coordinates
    vec2 cell = floor(p);
    //Initialize distance at a high-number
    float dist = 9.0;
    //Store the nearest voronoi cell
    vec2 voronoi_cell = cell;
    
    //Iterate through [3,3] neighbor cells
    for(int x = -1; x<=1; x++)
    for(int y = -1; y<=1; y++)
    {
        //Get sample cell coordintaes
        vec2 sample_cell = cell+vec2(x,y);
        //Compute difference from pixel to worley cell
        vec2 worley_dif = hash2(sample_cell) + sample_cell - p;
        //Compute the worley distance        
        float new_dist = length(worley_dif);
        //If the new distance is the nearest
        if (dist > new_dist)
        {
            //Store the new distance and cell coordinates
            dist = new_dist;
            voronoi_cell = sample_cell;
        }
    }
    //Get a random value using cell coordinates
    return hash12(voronoi_cell);
}
    
//Generate fractal value noise from multiple octaves
//oct - The number of octave passes
//per - Octave persistence value (should be between 0 and 1)
// float fractal_noise(in vec2 p, in int oct, in float per)
// {
//     float noise_sum = 0.0; //Noise total
//     float weight_sum = 0.0; //Weight total
//     float weight = 1.0; //Octave weight

//     for(int i = 0; i < oct; i++) //Iterate through octaves
//     {
//         //Add noise octave to total
//         noise_sum += value_noise(p) * weight; 
//         //Add octave weight to total
//         weight_sum += weight;
//         //Reduce octave amplitude with persistence value
//         weight *= per;
//         //Rotate and scale for next octave
//         p *= mat2(1.6,1.2,-1.2,1.6); 
//     }
//     //Compute weighted average
//     return noise_sum / weight_sum; 
// }
float value_noise_linear(vec2 p)
{
    //Cell (whole number) coordinates
    vec2 cell = floor(p);
    //Sub-cell (fractional) coordinates
    vec2 sub = p - cell;

    //Offset vector
    const vec2 off = vec2(0,1); 

    //Sample cell corners and interpolate between them.
    return mix( mix(hash12(cell+off.xx), hash12(cell+off.yx), sub.x),
                mix(hash12(cell+off.xy), hash12(cell+off.yy), sub.x), sub.y);
}

#define NUM_OCTAVES 5

float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
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

float noise(vec2 p){
	vec2 ip = floor(p);
	vec2 u = fract(p);
	u = u*u*(3.0-2.0*u);
	
	float res = mix(
		mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
		mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
	return res*res;
}

float fbm1(vec2 x) {
	float v = 0.0;
	float a = 0.5;
	vec2 shift = vec2(100);
	// Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
	for (int i = 0; i < NUM_OCTAVES; ++i) {
		v += a * noise(x);
		x = rot * x * 2.0 + shift;
		a *= 0.5;
	}
	return v;
}

float patterns(float x, float nois) {
    float test = x;
    test *= 2.672;
    test += nois;
    test += (u_time * (0.112) );
    // test += (u_time * noise1x(0.112) );
    // test += noise1x(u_time * (0.112) );
	test = fract(test);
    // test = step(0.180, test);
    // test = smoothstep(0.0, 0.124, test);
    test = smoothstep(0.0, 0.124, test) - smoothstep(0.050, 0.172, test);
    return test;
}

/** @link https://github.com/dmnsgn/glsl-rotate/blob/main/rotation-2d.glsl */
mat2 rotation2d(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat2(
    c, -s,
    s, c
  );
}

void main(void){

  vec3 color = vec3(0.);
  vec2 px=1./u_resolution;
  vec2 st=gl_FragCoord.xy*px;

  vec4 c2 = vec4(AZUR, 1.);
  vec4 c1 = vec4(WHITE, 1.);

  color.r = abs(sin(u_time));
  color.g = fract(st.x);
  color.b = fract(st.y);

  vec2 p = st * 3.008; 
  vec3 zell = vec3(0.);
	
  vec2 i = ceil(p);  // integer
  vec2 f = fract(p);  // fraction
    
  // round
  vec2 cell = floor(p);
  // value noise - https://www.getrevue.co/profile/xordev/issues/gm-shaders-mini-noise-1437243
  vec2 sub = p - cell; // (fractional coordinates in each cell)
  vec2 cube = sub*sub*(3.-2.*sub); // optional

  vec2 off = vec2(0.,1.);
  float test = 0.0;
  //p.x = p.x + u_time * 0.2; /* linear movement */
  // p = p + vec2(u_time * 0.1, u_time * 0.1); /* linear movement */
  // p = p * rotation2d(u_time * 0.005); 
  p = p * rotation2d(noise1x(u_time * 0.015)); /* noisy moves */
  p *= 4.000; /** zoom */
  float granitos = mix(0.034, 0.032, rand(p)); /** subtle nois */
    
  zell = paint(AZUR, VIOLET);
  test = patterns( value_noise_linear(p), granitos );
  zell = vec3(mix(c1, c2,test));
    color = i.x == 1. && i.y == 1. ? zell : color;
  zell = paint(AZUR, ACQUA);
  test = patterns( value_noise(p), granitos );
  zell = vec3(test);
    color = i.x == 2. && i.y == 1. ? zell : color;
  zell = paint(AZUR, PURPLE);
  test = patterns( perlin_noise(p), granitos );
  zell = vec3(test);
    color = i.x == 3. && i.y == 1. ? zell : color;
  zell = paint(LIME, ORANGE);
  test = patterns( perlin_noise_linear(p), granitos );
  zell = vec3(test);
    color = i.x == 1. && i.y == 2. ? zell : color;
  zell = paint(AZUR, BLUE);
  test = patterns( worley_noise(p), granitos );
  zell = vec3(test);
    color = i.x == 2. && i.y == 2. ? zell : color;
  zell = paint(LIME, ACQUA);
  test = patterns( voronoi_noise(p), granitos );
  zell = vec3(test);
    color = i.x == 3. && i.y == 2. ? zell : color;
  zell = RED + AZUR;
  test = patterns( fbm(p), granitos );
  zell = vec3(test);
    color = i.x == 1. && i.y == 3. ? zell : color;
  zell = paint(AZUR, VIOLET );

  test = patterns( fbm1(p), granitos );
  zell = vec3(mix(c1, c2,test));
    color = i.x == 2. && i.y == 3. ? zell : color;
    zell = AZUR;
    color = i.x == 3. && i.y == 3. ? zell : color;

  gl_FragColor = vec4(color,1.0);;
}   

