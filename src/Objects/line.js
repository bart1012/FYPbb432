import { Line, Color, BufferGeometry, LineBasicMaterial} from "three";

function createLines(points){
    const material = new LineBasicMaterial({
        color: 'orange',
        opacity: 0.0,
        transparent: true,
        emissive: new Color('orange'), // Set emissive color to white for brightness
        emissiveIntensity: 15, // Increase emissive intensity for a stronger glow
    });
    
    const geometry = new BufferGeometry().setFromPoints( points );
    
    const line = new Line( geometry, material );

    return line
}

export {createLines};