// Author: phau
// Title: noises
precision mediump float;
            
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
      
      float ran(in vec2 st, in float lever) {
          float k = 43758.5453123;
          float y;
          // vec2 vran = vec2(12.9898,78.233);
          vec2 vran = vec2(1. + N, 1. + N * 10.);
          float x = dot(st.xy, vran);
          // middle concentration
          // >>> rand(x);
          y = fract( sin(x) * k);
          // bottom concentration
          // >>> rand(x) * rand(x );
          y = fract( sin(x) * k) * fract( sin(x) * k);
          // upper concentration
          // >>> abs(sqrt(-0.384 + rand(x)));
          y = sqrt(fract( sin(x) * k));
          // hard bottom concentration with lever
          /** lever: [0 (uppper), 5 (bottom)] */
          y = pow(fract( sin(x) * k), lever);
          /** @link https://pixelero.wordpress.com/2008/04/24/various-functions-and-various-distributions-with-mathrandom/ */
          return y;
      }
      
      
      
      float stripes(in vec2 st, in float num) {
          return fract((st.x + st.y)  * num + u_time);
      }
      
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
      
      
      vec2 offset_in_px(in vec2 st, in float offset) {
          vec2 pixel = 1. / u_resolution;
          // random offset
          float ran = noise2c(st + u_time);
          return st + (pixel * offset * ran);
      }
      
      
      
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
      description: fade
      use: fade(<vec2|vec3|vec4> t)
      license: |
        Copyright (C) 2011 Ashima Arts. All rights reserved.
        Distributed under the MIT License. See LICENSE file.
        https://github.com/ashima/webgl-noise
      */
      
      #ifndef FNC_FADE
      #define FNC_FADE
      float fade(in float t) {
        return t * t * t * (t * (t * 6. - 15.) + 10.);
      }
      
      vec2 fade(in vec2 t) {
        return t * t * t * (t * (t * 6. - 15.) + 10.);
      }
      
      vec3 fade(in vec3 t) {
        return t * t * t * (t * (t * 6. - 15. ) + 10.);
      }
      
      vec4 fade(vec4 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
      }
      #endif
      
    
      
      #ifndef FNC_CNOISE
      #define FNC_CNOISE
      
      float cnoise(in vec2 P) {
          vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
          vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
          Pi = mod289(Pi); // To avoid truncation effects in permutation
          vec4 ix = Pi.xzxz;
          vec4 iy = Pi.yyww;
          vec4 fx = Pf.xzxz;
          vec4 fy = Pf.yyww;
      
          vec4 i = permute(permute(ix) + iy);
      
          vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
          vec4 gy = abs(gx) - 0.5 ;
          vec4 tx = floor(gx + 0.5);
          gx = gx - tx;
      
          vec2 g00 = vec2(gx.x,gy.x);
          vec2 g10 = vec2(gx.y,gy.y);
          vec2 g01 = vec2(gx.z,gy.z);
          vec2 g11 = vec2(gx.w,gy.w);
      
          vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
          g00 *= norm.x;
          g01 *= norm.y;
          g10 *= norm.z;
          g11 *= norm.w;
      
          float n00 = dot(g00, vec2(fx.x, fy.x));
          float n10 = dot(g10, vec2(fx.y, fy.y));
          float n01 = dot(g01, vec2(fx.z, fy.z));
          float n11 = dot(g11, vec2(fx.w, fy.w));
      
          vec2 fade_xy = fade(Pf.xy);
          vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
          float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
          return 2.3 * n_xy;
      }
      
      float cnoise(in vec3 P) {
          vec3 Pi0 = floor(P); // Integer part for indexing
          vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
          Pi0 = mod289(Pi0);
          Pi1 = mod289(Pi1);
          vec3 Pf0 = fract(P); // Fractional part for interpolation
          vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
          vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
          vec4 iy = vec4(Pi0.yy, Pi1.yy);
          vec4 iz0 = Pi0.zzzz;
          vec4 iz1 = Pi1.zzzz;
      
          vec4 ixy = permute(permute(ix) + iy);
          vec4 ixy0 = permute(ixy + iz0);
          vec4 ixy1 = permute(ixy + iz1);
      
          vec4 gx0 = ixy0 * (1.0 / 7.0);
          vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
          gx0 = fract(gx0);
          vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
          vec4 sz0 = step(gz0, vec4(0.0));
          gx0 -= sz0 * (step(0.0, gx0) - 0.5);
          gy0 -= sz0 * (step(0.0, gy0) - 0.5);
      
          vec4 gx1 = ixy1 * (1.0 / 7.0);
          vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
          gx1 = fract(gx1);
          vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
          vec4 sz1 = step(gz1, vec4(0.0));
          gx1 -= sz1 * (step(0.0, gx1) - 0.5);
          gy1 -= sz1 * (step(0.0, gy1) - 0.5);
      
          vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
          vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
          vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
          vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
          vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
          vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
          vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
          vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
      
          vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
          g000 *= norm0.x;
          g010 *= norm0.y;
          g100 *= norm0.z;
          g110 *= norm0.w;
          vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
          g001 *= norm1.x;
          g011 *= norm1.y;
          g101 *= norm1.z;
          g111 *= norm1.w;
      
          float n000 = dot(g000, Pf0);
          float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
          float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
          float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
          float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
          float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
          float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
          float n111 = dot(g111, Pf1);
      
          vec3 fade_xyz = fade(Pf0);
          vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
          vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
          float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
          return 2.2 * n_xyz;
      }
      
      float cnoise(in vec4 P) {
          vec4 Pi0 = floor(P); // Integer part for indexing
          vec4 Pi1 = Pi0 + 1.0; // Integer part + 1
          Pi0 = mod289(Pi0);
          Pi1 = mod289(Pi1);
          vec4 Pf0 = fract(P); // Fractional part for interpolation
          vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0
          vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
          vec4 iy = vec4(Pi0.yy, Pi1.yy);
          vec4 iz0 = vec4(Pi0.zzzz);
          vec4 iz1 = vec4(Pi1.zzzz);
          vec4 iw0 = vec4(Pi0.wwww);
          vec4 iw1 = vec4(Pi1.wwww);
      
          vec4 ixy = permute(permute(ix) + iy);
          vec4 ixy0 = permute(ixy + iz0);
          vec4 ixy1 = permute(ixy + iz1);
          vec4 ixy00 = permute(ixy0 + iw0);
          vec4 ixy01 = permute(ixy0 + iw1);
          vec4 ixy10 = permute(ixy1 + iw0);
          vec4 ixy11 = permute(ixy1 + iw1);
      
          vec4 gx00 = ixy00 * (1.0 / 7.0);
          vec4 gy00 = floor(gx00) * (1.0 / 7.0);
          vec4 gz00 = floor(gy00) * (1.0 / 6.0);
          gx00 = fract(gx00) - 0.5;
          gy00 = fract(gy00) - 0.5;
          gz00 = fract(gz00) - 0.5;
          vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
          vec4 sw00 = step(gw00, vec4(0.0));
          gx00 -= sw00 * (step(0.0, gx00) - 0.5);
          gy00 -= sw00 * (step(0.0, gy00) - 0.5);
      
          vec4 gx01 = ixy01 * (1.0 / 7.0);
          vec4 gy01 = floor(gx01) * (1.0 / 7.0);
          vec4 gz01 = floor(gy01) * (1.0 / 6.0);
          gx01 = fract(gx01) - 0.5;
          gy01 = fract(gy01) - 0.5;
          gz01 = fract(gz01) - 0.5;
          vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
          vec4 sw01 = step(gw01, vec4(0.0));
          gx01 -= sw01 * (step(0.0, gx01) - 0.5);
          gy01 -= sw01 * (step(0.0, gy01) - 0.5);
      
          vec4 gx10 = ixy10 * (1.0 / 7.0);
          vec4 gy10 = floor(gx10) * (1.0 / 7.0);
          vec4 gz10 = floor(gy10) * (1.0 / 6.0);
          gx10 = fract(gx10) - 0.5;
          gy10 = fract(gy10) - 0.5;
          gz10 = fract(gz10) - 0.5;
          vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
          vec4 sw10 = step(gw10, vec4(0.0));
          gx10 -= sw10 * (step(0.0, gx10) - 0.5);
          gy10 -= sw10 * (step(0.0, gy10) - 0.5);
      
          vec4 gx11 = ixy11 * (1.0 / 7.0);
          vec4 gy11 = floor(gx11) * (1.0 / 7.0);
          vec4 gz11 = floor(gy11) * (1.0 / 6.0);
          gx11 = fract(gx11) - 0.5;
          gy11 = fract(gy11) - 0.5;
          gz11 = fract(gz11) - 0.5;
          vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
          vec4 sw11 = step(gw11, vec4(0.0));
          gx11 -= sw11 * (step(0.0, gx11) - 0.5);
          gy11 -= sw11 * (step(0.0, gy11) - 0.5);
      
          vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);
          vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);
          vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);
          vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);
          vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);
          vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);
          vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);
          vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);
          vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);
          vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);
          vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);
          vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);
          vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);
          vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);
          vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);
          vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);
      
          vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));
          g0000 *= norm00.x;
          g0100 *= norm00.y;
          g1000 *= norm00.z;
          g1100 *= norm00.w;
      
          vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));
          g0001 *= norm01.x;
          g0101 *= norm01.y;
          g1001 *= norm01.z;
          g1101 *= norm01.w;
      
          vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));
          g0010 *= norm10.x;
          g0110 *= norm10.y;
          g1010 *= norm10.z;
          g1110 *= norm10.w;
      
          vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));
          g0011 *= norm11.x;
          g0111 *= norm11.y;
          g1011 *= norm11.z;
          g1111 *= norm11.w;
      
          float n0000 = dot(g0000, Pf0);
          float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));
          float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));
          float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));
          float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));
          float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
          float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));
          float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));
          float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));
          float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));
          float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
          float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));
          float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));
          float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));
          float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));
          float n1111 = dot(g1111, Pf1);
      
          vec4 fade_xyzw = fade(Pf0);
          vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
          vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
          vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
          vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);
          float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
          return 2.2 * n_xyzw;
      }
      #endif
      
      
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

      float layers2(vec2 st) {
         float test = 0.5 * cnoise(st * 1. + u_time * 0.15);
          // layer2
          test += 0.25 * cnoise(st * 2. + vec2(u_time, 0.0));
          // layer3
          test += 0.125 * cnoise(st * 4.+ vec2(u_time, 0.0));
          // layer4
          test += 0.0625 * cnoise(st * 8. + vec2(u_time, 0.0));
          // layer5
          test += 0.0625 * cnoise(st * 16. + vec2(u_time, 0.0));
        return test;
    }



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



      float layers3(vec2 st) {
         float test = .5 * fbm(st * 1. + u_time * 0.15);
          // layer2
          test += 0.25 * fbm(st * 2. + vec2(u_time, 0.0));
        //   // layer3
          test += 0.125 * fbm(st * 4.+ vec2(u_time, 0.0));
        //   // layer4
          test += 0.0625 * fbm(st * 8. + vec2(u_time, 0.0));
        //   // layer5
          test += 0.0625 * fbm(st * 16. + vec2(u_time, 0.0));
        return test;
    }



/*
original_author: Patricio Gonzalez Vivo
description: Signed Random 
use: srandomX(<vec2|vec3> x)
*/

#ifndef FNC_SRANDOM
#define FNC_SRANDOM

vec2 srandom2(in vec2 st) {
    const vec2 k = vec2(.3183099, .3678794);
    st = st * k + k.yx;
    return -1. + 2. * fract(16. * k * fract(st.x * st.y * (st.x + st.y)));
}

vec3 srandom3(in vec3 p) {
    p = vec3( dot(p, vec3(127.1, 311.7, 74.7)),
            dot(p, vec3(269.5, 183.3, 246.1)),
            dot(p, vec3(113.5, 271.9, 124.6)));
    return -1. + 2. * fract(sin(p) * 43758.5453123);
}

#endif


/*
original_author: Inigo Quilez
description: returns 2D/3D value noise in the first channel and in the rest the derivatives. For more details read this nice article http://www.iquilezles.org/www/articles/gradientnoise/gradientnoise.htm
use: noised(<vec2|vec3> space)
options:
    NOISED_QUINTIC_INTERPOLATION: Quintic interpolation on/off. Default is off.
*/

#ifndef NOISED_RANDOM2_FNC
#define NOISED_RANDOM2_FNC srandom2
#endif

#ifndef NOISED_RANDOM3_FNC
#define NOISED_RANDOM3_FNC srandom3
#endif

#ifndef FNC_NOISED
#define FNC_NOISED

// return gradient noise (in x) and its derivatives (in yz)
vec3 noised (in vec2 p) {
    // grid
    vec2 i = floor( p );
    vec2 f = fract( p );

  #ifdef NOISED_QUINTIC_INTERPOLATION
    // quintic interpolation
    vec2 u = f * f * f * (f * (f * 6. - 15.) + 10.);
    vec2 du = 30. * f * f * (f * (f - 2.) + 1.);
  #else
    // cubic interpolation
    vec2 u = f * f * (3. - 2. * f);
    vec2 du = 6. * f * (1. - f);
  #endif

    vec2 ga = NOISED_RANDOM2_FNC(i + vec2(0., 0.));
    vec2 gb = NOISED_RANDOM2_FNC(i + vec2(1., 0.));
    vec2 gc = NOISED_RANDOM2_FNC(i + vec2(0., 1.));
    vec2 gd = NOISED_RANDOM2_FNC(i + vec2(1., 1.));

    float va = dot(ga, f - vec2(0., 0.));
    float vb = dot(gb, f - vec2(1., 0.));
    float vc = dot(gc, f - vec2(0., 1.));
    float vd = dot(gd, f - vec2(1., 1.));

    return vec3( va + u.x*(vb-va) + u.y*(vc-va) + u.x*u.y*(va-vb-vc+vd),   // value
                ga + u.x*(gb-ga) + u.y*(gc-ga) + u.x*u.y*(ga-gb-gc+gd) +  // derivatives
                du * (u.yx*(va-vb-vc+vd) + vec2(vb,vc) - va));
}

vec4 noised (in vec3 pos) {
    // grid
    vec3 p = floor(pos);
    vec3 w = fract(pos);

  #ifdef NOISED_QUINTIC_INTERPOLATION
    // quintic interpolant
    vec3 u = w * w * w * ( w * (w * 6. - 15.) + 10. );
    vec3 du = 30.0 * w * w * ( w * (w - 2.) + 1.);
  #else
    // cubic interpolant
    vec3 u = w * w * (3. - 2. * w);
    vec3 du = 6. * w * (1. - w);
  #endif

    // gradients
    vec3 ga = NOISED_RANDOM3_FNC(p + vec3(0., 0., 0.));
    vec3 gb = NOISED_RANDOM3_FNC(p + vec3(1., 0., 0.));
    vec3 gc = NOISED_RANDOM3_FNC(p + vec3(0., 1., 0.));
    vec3 gd = NOISED_RANDOM3_FNC(p + vec3(1., 1., 0.));
    vec3 ge = NOISED_RANDOM3_FNC(p + vec3(0., 0., 1.));
    vec3 gf = NOISED_RANDOM3_FNC(p + vec3(1., 0., 1.));
    vec3 gg = NOISED_RANDOM3_FNC(p + vec3(0., 1., 1.));
    vec3 gh = NOISED_RANDOM3_FNC(p + vec3(1., 1., 1.));

    // projections
    float va = dot(ga, w - vec3(0., 0., 0.));
    float vb = dot(gb, w - vec3(1., 0., 0.));
    float vc = dot(gc, w - vec3(0., 1., 0.));
    float vd = dot(gd, w - vec3(1., 1., 0.));
    float ve = dot(ge, w - vec3(0., 0., 1.));
    float vf = dot(gf, w - vec3(1., 0., 1.));
    float vg = dot(gg, w - vec3(0., 1., 1.));
    float vh = dot(gh, w - vec3(1., 1., 1.));

    // interpolations
    return vec4( va + u.x*(vb-va) + u.y*(vc-va) + u.z*(ve-va) + u.x*u.y*(va-vb-vc+vd) + u.y*u.z*(va-vc-ve+vg) + u.z*u.x*(va-vb-ve+vf) + (-va+vb+vc-vd+ve-vf-vg+vh)*u.x*u.y*u.z,    // value
                ga + u.x*(gb-ga) + u.y*(gc-ga) + u.z*(ge-ga) + u.x*u.y*(ga-gb-gc+gd) + u.y*u.z*(ga-gc-ge+gg) + u.z*u.x*(ga-gb-ge+gf) + (-ga+gb+gc-gd+ge-gf-gg+gh)*u.x*u.y*u.z +   // derivatives
                du * (vec3(vb,vc,ve) - va + u.yzx*vec3(va-vb-vc+vd,va-vc-ve+vg,va-vb-ve+vf) + u.zxy*vec3(va-vb-ve+vf,va-vb-vc+vd,va-vc-ve+vg) + u.yzx*u.zxy*(-va+vb+vc-vd+ve-vf-vg+vh) ));
}

#endif



      float layers4(vec2 st) {
         float test = noised(st * 1. + u_time * 0.15).x;
          // layer2
          test += 0.25 * noised(st * 2. + vec2(u_time, 0.0)).x;
        // //   // layer3
          test += 0.125 * noised(st * 4.+ vec2(u_time, 0.0)).x;
        // //   // layer4
          test += 0.0625 * noised(st * 8. + vec2(u_time, 0.0)).x;
        // //   // layer5
          test += 0.0625 * noised(st * 16. + vec2(u_time, 0.0)).x;
        return test;
    }


      float layers5(vec2 st) {
         float test = snoise(st * 1. + u_time * 0.15);
          // layer2
          test += 0.25 * snoise(st * 2. + vec2(u_time, 0.0));
        // // //   // layer3
          test += 0.125 * snoise(st * 4.+ vec2(u_time, 0.0));
        // // //   // layer4
          test += 0.0625 * snoise(st * 8. + vec2(u_time, 0.0));
        // // //   // layer5
          test += 0.0625 * snoise(st * 16. + vec2(u_time, 0.0));
        return test;
    }




/*
original_author: Patricio Gonzalez Vivo
description: pass a value and get some random normalize value between 0 and 1
use: float random[2|3](<float|vec2|vec3> value)
*/

#ifndef FNC_RANDOM
#define FNC_RANDOM
float random(in float x) {
  return fract(sin(x) * 43758.5453);
}

float random(in vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float random(in vec3 pos) {
  return fract(sin(dot(pos.xyz, vec3(70.9898, 78.233, 32.4355))) * 43758.5453123);
}

float random(in vec4 pos) {
    float dot_product = dot(pos, vec4(12.9898,78.233,45.164,94.673));
    return fract(sin(dot_product) * 43758.5453);
}

// Hash function from https://www.shadertoy.com/view/4djSRW
#ifndef RANDOM_SCALE3
#define RANDOM_SCALE3 vec3(.1031, .1030, .0973)
#endif

#ifndef RANDOM_SCALE4
#define RANDOM_SCALE4 vec4(1031, .1030, .0973, .1099)
#endif
vec2 random2(float p) {
    vec3 p3 = fract(vec3(p) * RANDOM_SCALE3);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xx+p3.yz)*p3.zy);
}

vec2 random2(vec2 p) {
    vec3 p3 = fract(p.xyx * RANDOM_SCALE3);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xx+p3.yz)*p3.zy);
}

vec2 random2(vec3 p3) {
    p3 = fract(p3 * RANDOM_SCALE3);
    p3 += dot(p3, p3.yzx+19.19);
    return fract((p3.xx+p3.yz)*p3.zy);
}

vec3 random3(float p) {
    vec3 p3 = fract(vec3(p) * RANDOM_SCALE3);
    p3 += dot(p3, p3.yzx+19.19);
    return fract((p3.xxy+p3.yzz)*p3.zyx); 
}

vec3 random3(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * RANDOM_SCALE3);
    p3 += dot(p3, p3.yxz+19.19);
    return fract((p3.xxy+p3.yzz)*p3.zyx);
}

vec3 random3(vec3 p) {
    p = fract(p * RANDOM_SCALE3);
    p += dot(p, p.yxz+19.19);
    return fract((p.xxy + p.yzz)*p.zyx);
}

vec4 random4(float p) {
    vec4 p4 = fract(vec4(p) * RANDOM_SCALE4);
    p4 += dot(p4, p4.wzxy+19.19);
    return fract((p4.xxyz+p4.yzzw)*p4.zywx);   
}

vec4 random4(vec2 p) {
    vec4 p4 = fract(vec4(p.xyxy) * RANDOM_SCALE4);
    p4 += dot(p4, p4.wzxy+19.19);
    return fract((p4.xxyz+p4.yzzw)*p4.zywx);
}

vec4 random4(vec3 p) {
    vec4 p4 = fract(vec4(p.xyzx)  * RANDOM_SCALE4);
    p4 += dot(p4, p4.wzxy+19.19);
    return fract((p4.xxyz+p4.yzzw)*p4.zywx);
}

vec4 random4(vec4 p4) {
    p4 = fract(p4  * RANDOM_SCALE4);
    p4 += dot(p4, p4.wzxy+19.19);
    return fract((p4.xxyz+p4.yzzw)*p4.zywx);
}


#endif



#ifndef QTR_PI
#define QTR_PI 0.78539816339
#endif
#ifndef HALF_PI
#define HALF_PI 1.5707963267948966192313216916398
#endif
#ifndef PI
#define PI 3.1415926535897932384626433832795
#endif
#ifndef TWO_PI
#define TWO_PI 6.2831853071795864769252867665590
#endif
#ifndef TAU
#define TAU 6.2831853071795864769252867665590
#endif
#ifndef ONE_OVER_PI
#define ONE_OVER_PI 0.31830988618
#endif
#ifndef SQRT_HALF_PI
#define SQRT_HALF_PI 1.25331413732
#endif
#ifndef PHI
#define PHI 1.618033988749894848204586834
#endif
#ifndef EPSILON
#define EPSILON 0.0000001
#endif
#ifndef GOLDEN_RATIO
#define GOLDEN_RATIO 1.6180339887
#endif
#ifndef GOLDEN_RATIO_CONJUGATE 
#define GOLDEN_RATIO_CONJUGATE 0.61803398875
#endif
#ifndef GOLDEN_ANGLE // (3.-sqrt(5.0))*PI radians
#define GOLDEN_ANGLE 2.39996323
#endif



/*
original_author: Inigo Quiles
description: cell noise https://iquilezles.org/articles/voronoise/
use: <float> voronoi(<vec3|vec2> pos, float voronoi, float _smoothness);
options:
    VORONOI_RANDOM_FNC: 
*/

#ifndef VORONOI_RANDOM_FNC 
#define VORONOI_RANDOM_FNC(XYZ) random3(XYZ) 
#endif

#ifndef FNC_VORONOISE
#define FNC_VORONOISE
float voronoise( in vec2 p, in float u, float v) {
    float k = 1.0+63.0*pow(1.0-v,6.0);
    vec2 i = floor(p);
    vec2 f = fract(p);
    
    vec2 a = vec2(0.0, 0.0);
    
    #if defined(PLATFORM_WEBGL)
    for ( float y = -2.0; y <= 2.0; y++ )
    for ( float x = -2.0; x <= 2.0; x++ ) {
        vec2 g = vec2(x, y);

    #else
    vec2 g = vec2(-2.0);
    for ( g.y = -2.0; g.y <= 2.0; g.y++ )
    for ( g.x = -2.0; g.x <= 2.0; g.x++ ) {
        
    #endif
        vec3  o = VORONOI_RANDOM_FNC(i + g) * vec3(u, u, 1.0);
        vec2  d = g - f + o.xy;
        float w = pow(1.0-smoothstep(0.0,1.414, length(d)), k );
        a += vec2(o.z*w,w);
    }
        
    return a.x/a.y;
}

float voronoise(vec3 p, float u, float v)  {
    float k = 1.0+63.0*pow(1.0-v,6.0);
    vec3 i = floor(p);
    vec3 f = fract(p);

    float s = 1.0 + 31.0 * v;
    vec2 a = vec2(0.0, 0.0);

    #if defined(PLATFORM_WEBGL)
    for ( float z = -2.0; z <= 2.0; z++ )
    for ( float y = -2.0; y <= 2.0; y++ )
    for ( float x = -2.0; x <= 2.0; x++ ) {
        vec3 g = vec3(x, y, z);

    #else

    vec3 g = vec3(-2.0);
    for (g.z = -2.0; g.z <= 2.0; g.z++ )
    for (g.y = -2.0; g.y <= 2.0; g.y++ )
    for (g.x = -2.0; g.x <= 2.0; g.x++ ) {
    #endif

        vec3 o = VORONOI_RANDOM_FNC(i + g) * vec3(u, u, 1.);
        vec3 d = g - f + o + 0.5;
        float w = pow(1.0 - smoothstep(0.0, 1.414, length(d)), k);
        a += vec2(o.z*w, w);
     }
     return a.x / a.y;
}

#endif



      float layers6(vec2 st) {
         float test = 0.2 * voronoise(st * 4.5 + u_time * 0.15, 1., 1.);
          // layer2
          test += 0.25 * voronoise(st * 9. + vec2(u_time, 0.0), 1., 1.);
        // // // //   // layer3
          test += 0.125 * voronoise(st * 18. + vec2(u_time, 0.0), 1., 1.);
        // // // //   // layer4
          test += 0.0625 * voronoise(st * 36. + vec2(u_time, 0.0), 1., 1.);
        // // // //   // layer5
          test += 0.0625 * voronoise(st * 72. + vec2(u_time, 0.0), 1., 1.);
        return test;
    }



/*
original_author: Patricio Gonzalez Vivo
description: Worley noise
use: <vec2> worley(<vec2|vec3> pos)
*/

#ifndef FNC_WORLEY
#define FNC_WORLEY

float worley(vec2 p){
    vec2 n = floor( p );
    vec2 f = fract( p );

    float dis = 1.0;
    for( int j= -1; j <= 1; j++ )
        for( int i=-1; i <= 1; i++ ) {	
                vec2  g = vec2(i,j);
                vec2  o = random2( n + g );
                vec2  delta = g + o - f;
                float d = length(delta);
                dis = min(dis,d);
    }

    return 1.0-dis;
}

float worley(vec3 p){
    vec3 n = floor( p );
    vec3 f = fract( p );

    float dis = 1.0;
    for( int k = -1; k <= 1; k++ )
        for( int j= -1; j <= 1; j++ )
            for( int i=-1; i <= 1; i++ ) {	
                vec3  g = vec3(i,j,k);
                vec3  o = random3( n + g );
                vec3  delta = g+o-f;
                float d = length(delta);
                dis = min(dis,d);
    }

    return 1.0-dis;
}

#endif


      float layers7(vec2 st) {
         float test = 0.1 * worley(st + u_time * 0.15);
          // layer2
          test += 0.25 * worley(st * 2. + vec2(u_time, 0.0));
        // // // // //   // layer3
          test += 0.125 * worley(st * 4. + vec2(u_time, 0.0));
        // // // // //   // layer4
          test += 0.0625 * worley(st * 8. + vec2(u_time, 0.0));
        // // // // //   // layer5
          test += 0.0625 * worley(st * 16. + vec2(u_time, 0.0));
        return test;
    }

vec3 paint(vec3 a, vec3 b) {
	return a + b;    
}

float layers1(vec2 st) {
  float test = 0.5 * noise2c(st * (1.0) + u_time);
  // layer2
  test += 0.25 * noise2c(st * 2. + vec2(u_time, 0.0));
  // layer3
  test += 0.125 * noise2c(st * 4.+ vec2(u_time, 0.0));
  // layer4
  test += 0.0625 * noise2c(st * 8.+ vec2(u_time, 0.0));
  // layer5
  test += 0.0625 * noise2c(st * 16.+ vec2(u_time, 0.0));
  return test;
}
void main(void){
 	vec3 c1 = BLACK;
  vec3 c2 = WHITE;
  vec2 pixel=1./u_resolution;
  vec2 st=gl_FragCoord.xy*pixel;
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
  	cell = mix(c1,c2, test);
    color = i.x == 1. && i.y == 1. ? cell : color;
    cell = paint(AZUR, ACQUA);

        // lever = 0.512;
    test = smoothstep(0.0, lever, layers4(st));
    cell = mix(c1,c2, test);

    color = i.x == 2. && i.y == 1. ? cell : color;

    cell = paint(AZUR, PURPLE);

        // lever = 0.512;
    test = smoothstep(0.0, lever, layers7(st));
    cell = mix(c1,c2, test);
    color = i.x == 3. && i.y == 1. ? cell : color;

    cell = paint(LIME, ORANGE);

        // lever = 0.512;
    test = smoothstep(0.0, lever, layers6(st));
    cell = mix(c1,c2, test);
    color = i.x == 1. && i.y == 2. ? cell : color;

    cell = paint(AZUR, BLUE);
        // lever = 0.512;
    test = smoothstep(0.0, lever, layers5(st));
    cell = mix(c1,c2, test);

    color = i.x == 2. && i.y == 2. ? cell : color;

    cell = paint(LIME, ACQUA);

        // lever = 0.512;
    test = smoothstep(0.0, lever, layers3(st));
    cell = mix(c1,c2, test);
    color = i.x == 3. && i.y == 2. ? cell : color;

    cell = paint(LIME, RED);
    // lever = 0.512;
    test = smoothstep(0.0, lever, layers2(st));
    cell = mix(c1,c2, test);
    color = i.x == 1. && i.y == 3. ? cell : color;

    cell = paint(LIME, CYAN);

        // lever = 0.512;
    test = smoothstep(0.0, lever, layers1(st));
    cell = mix(c1,c2, test);
    color = i.x == 2. && i.y == 3. ? cell : color;
    cell = paint(RED, ACQUA );
    color = i.x == 3. && i.y == 3. ? cell : color;

    gl_FragColor = vec4(color,1.0);
      }   
