import { WebGLRenderer, SRGBColorSpace } from "three";

function createRenderer(mycanvas){
    const renderer = new WebGLRenderer({canvas: mycanvas, 
    powerPreference: "high-performance",
	antialias: false,
	stencil: false,
	depth: false});
    renderer.physicallyCorrectLights = true;
    renderer.outputColorSpace = SRGBColorSpace;
    return renderer;    
}

export {createRenderer};