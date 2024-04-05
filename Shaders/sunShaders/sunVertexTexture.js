const vertex = /*glsl*/ `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float time;
    varying vec3 vLayer0;
    varying vec3 vLayer1;
    varying vec3 vLayer2;
    varying float vReflectionFactor;

mat2 rotate(float a){
    float s = sin(a);
    float c = cos(a);
    return mat2(c,-s,s,c);
}

    void main(){
        float t =time*0.01;
        mat2 rot = rotate(t);

        vec3 p0 = position;
        p0.yz = rot*p0.yz;
        vLayer0 = p0;

        vec3 p1 = position;
        p1.xz = rot*p1.xz;
        vLayer1 = p1;

        vec3 p2 = position;
        p2.xy = rot*p2.xy;
        vLayer2 = p2;

        vUv = uv;
        vPosition = position;

        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
      vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
  
      vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
  
      vec3 I = worldPosition.xyz - cameraPosition;
  
      // Calculate the reflection factor
      vReflectionFactor = 0.1 + 1.0 * pow( 1.0 + dot( normalize( I ), worldNormal ), 4.0 );
    
    // gl_Position = projectionMatrix * modelViewMatrix *vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    }
`

export default vertex;