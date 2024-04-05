import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';


const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( '/examples/jsm/libs/draco/' );

loader.setDRACOLoader( dracoLoader );


async function load_GLTF(){

/*
    const [telescopeData] = await Promise.all([
        loader.loadAsync('../../Assets/Models/Hubble.glb'),
        ]);
*/
    const hubbleTelescope = null;

    return {hubbleTelescope};
};

export {load_GLTF};