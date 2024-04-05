import * as THREE from 'three';

const glowShader = {
    uniforms: {
        'c': { value: 1.0 },
        glowColor: { value: new THREE.Color(0x00fffd) }
    },
    vertexShader: `
        varying vec3 viewVector;
        void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vec3 transformedNormal = normalize(normalMatrix * normal);
            viewVector = normalize(cameraPosition - mvPosition.xyz);
            gl_Position = projectionMatrix * mvPosition;
        }
    `,
    fragmentShader: `
    uniform vec3 glowColor;
    uniform float c;
    
    varying vec3 viewVector;
    
    void main() {
        // Calculate the distance from the center
        float distanceFromCenter = length(viewVector);
    
        // Define the colors to interpolate between
        vec3 centerColor = vec3(0.5, 0.5, 1.0);  // Lighter shade of blue for center
        vec3 edgeColor = vec3(0.0, 0.0, 0.5);    // Darker shade of blue for edge
    
        // Interpolate between centerColor and edgeColor based on distance
        vec3 finalColor = mix(centerColor, edgeColor, distanceFromCenter);
    
        // Apply glow color and intensity
        vec3 glow = glowColor * c;
    
        // Combine the final color with the glow effect
        vec3 resultColor = finalColor + glow;
    
        // Output the final color
        gl_FragColor = vec4(resultColor, 0.75);
    }
    
    `
};

const glowingMaterial = new THREE.ShaderMaterial({
    uniforms: glowShader.uniforms,
    vertexShader: glowShader.vertexShader,
    fragmentShader: glowShader.fragmentShader,
    // side: THREE.BackSide, // Render on the back side of the object
    blending: THREE.AdditiveBlending, // Additive blending for glow effect
    transparent: true // Make the material transparent
});

export default glowingMaterial;
