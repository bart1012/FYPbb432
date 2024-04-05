const galaxyFragment = /*glsl*/`
varying vec2 vUv;
uniform sampler2D uTexture;
uniform float opacity;

uniform vec3 emissiveColor;  // Emissive color uniform
uniform float emissiveIntensity;  // Emissive intensity uniform

void main() {
    vec4 ttt = texture2D(uTexture, vUv);
    
    // Adjust the center position for the rotated plane geometry
    vec2 center = vec2(0.505, 0.25);  // Assuming the center is at (0.5, 0.25)
    float distance = distance(gl_FragCoord.xy / vec2(1900.0, 1900.0), center);
    
    // Define the colors to lerp between
    vec3 color1 = vec3(1.0, 0.7, 0.2);  // White
    vec3 color2 = vec3(1.0, 0.5, 0.0);  // Orange
    vec3 color3 = vec3(0.5, 0.0, 1.0);  // Purple
    
    // Adjust the smoothstep range to decrease the radius
    float t = smoothstep(0.02, 0.5, distance);  // Adjust the range as per your preference
    
    // Interpolate smoothly from white to orange
    vec3 interpolatedColor = mix(color1, color2, smoothstep(0.02, 0.08, distance));
    
    // Interpolate smoothly from orange to purple
    interpolatedColor = mix(interpolatedColor, color3, t);
    
    // Scale the emissive color by the emissive intensity
    vec3 emissive = emissiveColor * emissiveIntensity;

    // Combine shader color with emissive effect
    vec3 finalColor = interpolatedColor + emissive;

    // Output the final color
    gl_FragColor = vec4(finalColor, opacity * ttt.r);
}


`;

export default galaxyFragment;
