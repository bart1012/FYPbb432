const fragment = /*glsl*/ `

varying vec2 vUv;
uniform float time;
varying vec3 vPosition;
uniform samplerCube uPerlin;
varying vec3 vLayer0;
varying vec3 vLayer1;
varying vec3 vLayer2;
uniform float opacity;


float supersun(){
 float sum = 0.;
 sum += textureCube(uPerlin, vLayer0).r;
 sum += textureCube(uPerlin, vLayer1).r;
 sum += textureCube(uPerlin, vLayer2).r;
sum*=0.33;
 return sum;
}

vec3 brightness2Color(float b){
    b*=0.25;
    return (vec3(b,b*b,b*b*b*b)/0.25)*0.8;
}

varying float vReflectionFactor;

void main(){
    // vec4 color = textureCube(uPerlin, vPosition);
    float f = clamp( vReflectionFactor, 0.0, 1.0 );
    vec3 color1 = vec3(1, 0.984, 0);
    vec3 color2 = vec3(0.,0.,0.);
    float intensity = supersun();
    intensity = intensity*4.+1.;
    vec3 col = brightness2Color(intensity);

// Output the sampled color
    // gl_FragColor = color;
    // gl_FragColor = vec4(1.,0.,0.,1.);

    gl_FragColor = vec4(col, opacity * 1.);
    // gl_FragColor *= vec4( mix( color2, color1, f ), 0.3 );

}

`

export default fragment;