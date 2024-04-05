const morphFragment = /*glsl*/`
varying vec2 vUv;
varying vec3 vPosition;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float transitionProgress;

void main() {
    vec4 texel1 = texture2D(texture1, vUv);
    vec4 texel2 = texture2D(texture2, vUv);
    // gl_FragColor = mix(texel1, texel2, transitionProgress);
    csm_DiffuseColor = mix(texel1, texel2, transitionProgress);
  }

`;

export default morphFragment;
