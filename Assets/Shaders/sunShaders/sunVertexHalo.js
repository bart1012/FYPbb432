const vertex = /*glsl*/ `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float time;
    varying vec3 vLayer0;
    varying vec3 vLayer1;
    varying vec3 vLayer2;
    varying vec3 eyeVector;
    varying vec3 vNormal;

    void main(){
        vNormal = normal;
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix *vec4(position, 1.0);
    }
`

export default vertex;