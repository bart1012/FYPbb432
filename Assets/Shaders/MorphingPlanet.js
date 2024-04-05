import { SphereGeometry, ShaderMaterial, TextureLoader, Mesh, Vector3, Color } from "three";

function morphPlanetMat(){
//control amplitude, sharpness, water worlds - solid terrain - 
    const planetParams = {
        type: { value: 3 },
        radius: { value: 5.0 },
        // amplitude: { value: 1.19 },
        amplitude: { value: 1.2},
        // amplitude: { value: 0.0 },
        // sharpness: { value: 2.6 },
        sharpness: { value: 2.5 },
        // offset: { value: -0.016 },
        offset: { value: -2},
        
        // period: { value: 0.6 },
        period: { value: 0.6 },
        persistence: { value: 0.484 },
        // persistence: { value: 0.6 },
        lacunarity: { value: 1.8 },
        octaves: { value: 10 },
        undulation: { value: 0.0 },
        //light
        ambientIntensity: { value: 3.02 },
        // ambientIntensity: { value: 0.00 },
        diffuseIntensity: { value: 1 },
        // specularIntensity: { value: 2 },
        specularIntensity: { value: 2 },
        // shininess: { value: 10 },
        shininess: { value:10 },

         // diffuseIntensity: { value: 1 },
        // diffuseIntensity: { value: 1.10 },
        lightDirection: { value: new Vector3(1,1,1) },
        lightColor: { value: new Color(1,1,1) },
        //light
        bumpStrength: { value: 1.0 },
        bumpOffset: { value: 0.001 },
        color1: { value: new Color(0.08,0.53,0.35) },
        color2: { value: new Color(0.62,0.515,0.375) },
        color3: { value: new Color(0.15,0.25,0.08) },
        color4: { value: new Color(0.15,0.15,0.15) },
        color5: { value: new Color(0.015,0.115,0.280) },
        transition2: { value: 0.071 },
        transition3: { value: 0.215 },
        transition4: { value: 0.372 },
        transition5: { value: 1.2 },
        blend12: { value: 0.152 },
        blend23: { value: 0.152 },
        blend34: { value: 0.104 },
        blend45: { value: 0.168 }
      };

    const material = new ShaderMaterial({
        uniforms: planetParams,
        vertexShader: /*glsl*/` attribute vec3 tangent;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

    // 
    float simplex3(vec3 v) { 
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

      //  x0 = x0 - 0. + 0.0 * C 
      vec3 x1 = x0 - i1 + 1.0 * C.xxx;
      vec3 x2 = x0 - i2 + 2.0 * C.xxx;
      vec3 x3 = x0 - 1. + 3.0 * C.xxx;

      // Permutations
      i = mod(i, 289.0 ); 
      vec4 p = permute( permute( permute( 
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

      // Gradients
      // ( N*N points uniformly over a square, mapped onto an octahedron.)
      float n_ = 1.0/7.0; // N=7
      vec3  ns = n_ * D.wyz - D.xzx;

      vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);

      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );

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

    float fractal3(      
      vec3 v,
      float sharpness,
      float period,
      float persistence,
      float lacunarity,
      int octaves
    ) {
      float n = 0.0;
      float a = 1.0; // Amplitude for current octave
      float max_amp = 0.0; // Accumulate max amplitude so we can normalize after
      float P = period;  // Period for current octave

      for(int i = 0; i < octaves; i++) {
          n += a * simplex3(v / P);
          a *= persistence;
          max_amp += a;
          P /= lacunarity;
      }

      // Normalize noise between [0.0, amplitude]
      return n / max_amp;
    }

    float terrainHeight(
      int type,
      vec3 v,
      float amplitude,
      float sharpness,
      float offset,
      float period,
      float persistence,
      float lacunarity,
      int octaves
    ) {
      float h = 0.0;

      if (type == 1) {
        h = amplitude * simplex3(v / period);
      } else if (type == 2) {
        h = amplitude * fractal3(
          v,
          sharpness,
          period, 
          persistence, 
          lacunarity, 
          octaves);
        h = amplitude * pow(max(0.0, (h + 1.0) / 2.0), sharpness);
      } else if (type == 3) {
        h = fractal3(
          v,
          sharpness,
          period, 
          persistence, 
          lacunarity, 
          octaves);
        h = amplitude * pow(max(0.0, 1.0 - abs(h)), sharpness);
      }

      // Multiply by amplitude and adjust offset
      return max(0.0, h + offset);
    }

        // Terrain generation parameters
        uniform int type;
        uniform float radius;
        uniform float amplitude;
        uniform float sharpness;
        uniform float offset;
        uniform float period;
        uniform float persistence;
        uniform float lacunarity;
        uniform int octaves;
    
        // Bump mapping
        uniform float bumpStrength;
        uniform float bumpOffset;
    
        varying vec3 fragPosition;
        varying vec3 fragNormal;
        varying vec3 fragTangent;
        varying vec3 fragBitangent;
    
        void main() {
          // Calculate terrain height
          float h = terrainHeight(
            type,
            position,
            amplitude, 
            sharpness,
            offset,
            period, 
            persistence, 
            lacunarity, 
            octaves);
    
          vec3 pos = position * (radius + h);
    
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          fragPosition = position;
          fragNormal = normal;
          fragTangent = tangent;
          fragBitangent = cross(normal, tangent);
        }`,
        fragmentShader: /*glsl*/ `

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

    // 
    float simplex3(vec3 v) { 
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

      //  x0 = x0 - 0. + 0.0 * C 
      vec3 x1 = x0 - i1 + 1.0 * C.xxx;
      vec3 x2 = x0 - i2 + 2.0 * C.xxx;
      vec3 x3 = x0 - 1. + 3.0 * C.xxx;

      // Permutations
      i = mod(i, 289.0 ); 
      vec4 p = permute( permute( permute( 
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

      // Gradients
      // ( N*N points uniformly over a square, mapped onto an octahedron.)
      float n_ = 1.0/7.0; // N=7
      vec3  ns = n_ * D.wyz - D.xzx;

      vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);

      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );

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

    float fractal3(      
      vec3 v,
      float sharpness,
      float period,
      float persistence,
      float lacunarity,
      int octaves
    ) {
      float n = 0.0;
      float a = 1.0; // Amplitude for current octave
      float max_amp = 0.0; // Accumulate max amplitude so we can normalize after
      float P = period;  // Period for current octave

      for(int i = 0; i < octaves; i++) {
          n += a * simplex3(v / P);
          a *= persistence;
          max_amp += a;
          P /= lacunarity;
      }

      // Normalize noise between [0.0, amplitude]
      return n / max_amp;
    }

    float terrainHeight(
      int type,
      vec3 v,
      float amplitude,
      float sharpness,
      float offset,
      float period,
      float persistence,
      float lacunarity,
      int octaves
    ) {
      float h = 0.0;

      if (type == 1) {
        h = amplitude * simplex3(v / period);
      } else if (type == 2) {
        h = amplitude * fractal3(
          v,
          sharpness,
          period, 
          persistence, 
          lacunarity, 
          octaves);
        h = amplitude * pow(max(0.0, (h + 1.0) / 2.0), sharpness);
      } else if (type == 3) {
        h = fractal3(
          v,
          sharpness,
          period, 
          persistence, 
          lacunarity, 
          octaves);
        h = amplitude * pow(max(0.0, 1.0 - abs(h)), sharpness);
      }

      // Multiply by amplitude and adjust offset
      return max(0.0, h + offset);
    }

        uniform int type;
        uniform float radius;
        uniform float amplitude;
        uniform float sharpness;
        uniform float offset;
        uniform float period;
        uniform float persistence;
        uniform float lacunarity;
        uniform int octaves;
    
        // Layer colors
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        uniform vec3 color4;
        uniform vec3 color5;
        
        // Transition points for each layer
        uniform float transition2;
        uniform float transition3;
        uniform float transition4;
        uniform float transition5;
    
        // Amount of blending between each layer
        uniform float blend12;
        uniform float blend23;
        uniform float blend34;
        uniform float blend45;
    
        // Bump mapping parameters
        uniform float bumpStrength;
        uniform float bumpOffset;
    
        // Lighting parameters
        uniform float ambientIntensity;
        uniform float diffuseIntensity;
        uniform float specularIntensity;
        uniform float shininess;
        uniform vec3 lightDirection;
        uniform vec3 lightColor;
    
        varying vec3 fragPosition;
        varying vec3 fragNormal;
        varying vec3 fragTangent;
        varying vec3 fragBitangent;
    
        void main() {
          // Calculate terrain height
          float h = terrainHeight(
            type,
            fragPosition,
            amplitude, 
            sharpness,
            offset,
            period, 
            persistence, 
            lacunarity, 
            octaves);
    
          vec3 dx = bumpOffset * fragTangent;
          float h_dx = terrainHeight(
            type,
            fragPosition + dx,
            amplitude, 
            sharpness,
            offset,
            period, 
            persistence, 
            lacunarity, 
            octaves);
    
          vec3 dy = bumpOffset * fragBitangent;
          float h_dy = terrainHeight(
            type,
            fragPosition + dy,
            amplitude, 
            sharpness,
            offset,
            period, 
            persistence, 
            lacunarity, 
            octaves);
    
          vec3 pos = fragPosition * (radius + h);
          vec3 pos_dx = (fragPosition + dx) * (radius + h_dx);
          vec3 pos_dy = (fragPosition + dy) * (radius + h_dy);
    
          // Recalculate surface normal post-bump mapping
          vec3 bumpNormal = normalize(cross(pos_dx - pos, pos_dy - pos));
          // Mix original normal and bumped normal to control bump strength
          vec3 N = normalize(mix(fragNormal, bumpNormal, bumpStrength));
        
          // Normalized light direction (points in direction that light travels)
          vec3 L = normalize(-lightDirection);
          // View vector from camera to fragment
          vec3 V = normalize(cameraPosition - pos);
          // Reflected light vector
          vec3 R = normalize(reflect(L, N));
    
          float diffuse = diffuseIntensity * max(0.0, dot(N, -L));
    
          // https://ogldev.org/www/tutorial19/tutorial19.html
          float specularFalloff = clamp((transition3 - h) / transition3, 0.0, 1.0);
          float specular = max(0.0, specularFalloff * specularIntensity * pow(dot(V, R), shininess));
    
          float light = ambientIntensity + diffuse + specular;
    
          // Blender colors layer by layer
          vec3 color12 = mix(
            color1, 
            color2, 
            smoothstep(transition2 - blend12, transition2 + blend12, h));
    
          vec3 color123 = mix(
            color12, 
            color3, 
            smoothstep(transition3 - blend23, transition3 + blend23, h));
    
          vec3 color1234 = mix(
            color123, 
            color4, 
            smoothstep(transition4 - blend34, transition4 + blend34, h));
    
          vec3 finalColor = mix(
            color1234, 
            color5, 
            smoothstep(transition5 - blend45, transition5 + blend45, h));
          
          gl_FragColor = vec4(light * finalColor * lightColor, 1.0);
        }
        `
        
      });

      return material;
}

export default morphPlanetMat;