import { MeshBasicMaterial, Color, BackSide, Group, Clock,DoubleSide, PlaneGeometry, Vector4, InstancedBufferAttribute, Mesh, InstancedBufferGeometry, ShaderMaterial, TextureLoader, SphereGeometry, MeshStandardMaterial, Uniform, NormalBlending, AdditiveBlending } from "three";
import sunVertex from '../../Assets/Shaders/sunShaders/sunVertex.js';
import sunFragment from '../../Assets/Shaders/sunShaders/sunFragment.js';  
import sunVertexHalo from '../../Assets/Shaders/sunShaders/sunVertexHalo.js';
import sunFragmentHalo from '../../Assets/Shaders/sunShaders/sunFragmentHalo.js'; 
import sunFragmentHaloY from '../../Assets/Shaders/sunShaders/sunFragmentHaloUp.js'; 
import sunFragmentTexture from '../../Assets/Shaders/sunShaders/sunFragmentTexture.js';  
import sunVertexTexture from '../../Assets/Shaders/sunShaders/sunVertexTexture.js';
import { getFresnelMatOut } from "../../Assets/Shaders/fresnelMat_out.js";
// import sunFragmentHalo from "../../Assets/Shaders/sunShaders/sunFragmentHalo.js";
// import sunVertexHalo from "../../Assets/Shaders/sunShaders/sunVertexHalo.js";

const textureLoader = new TextureLoader();

var materialTexture = new ShaderMaterial({
    side: BackSide,
    vertexShader: sunVertexTexture,
    fragmentShader: sunFragmentTexture,
    transparent: true,
    extensions: {
        derivatives: " #extension GL_OES_standard_derivatives : enable",
    },
    uniforms: {
        time: {value: 0}, 
        resolution: {value: new Vector4()},
        uPerlin: {value: null},
        opacity: {value: 1.0}
    }
})

class MaterialTexture extends ShaderMaterial {
    constructor() {
        super({
            side: BackSide,
            vertexShader: sunVertexTexture,
            fragmentShader: sunFragmentTexture,
            transparent: true,
            extensions: {
                derivatives: " #extension GL_OES_standard_derivatives : enable",
            },
            uniforms: {
                time: { value: 0 },
                resolution: { value: new Vector4() },
                uPerlin: { value: null },
                opacity: { value: 1.0 }
            }
        });
    }
}

class HaloTextureZ extends ShaderMaterial {
    constructor() {
        super({
            side: BackSide,
            transparent: true,
            vertexShader: sunVertexHalo,
            fragmentShader: sunFragmentHalo,
            extensions: {
                derivatives: " #extension GL_OES_standard_derivatives : enable",
            },
            uniforms: {
                time: { value: 0 },
                resolution: { value: new Vector4() },
                uPerlin: { value: null },
                opacity: { value: 1.0 }
            }
        });
    }
}

var sunGroup = new Group();

var material = new ShaderMaterial({
    side: DoubleSide,
    vertexShader: sunVertex,
    fragmentShader: sunFragment,
    extensions: {
        derivatives: " #extension GL_OES_standard_derivatives : enable",
    },
    uniforms: {
        time: {value: 0}, 
        resolution: {value: new Vector4()},
    }  
})

var haloTextureZ = new ShaderMaterial({
    side: BackSide,
    transparent: true,
    vertexShader: sunVertexHalo,
    fragmentShader: sunFragmentHalo,
    extensions: {
        derivatives: " #extension GL_OES_standard_derivatives : enable",
    },
    uniforms: {
        time: {value: 0}, 
        resolution: {value: new Vector4()},
        uPerlin: {value: null},
        opacity: {value: 1.0}
    }
})
/*
var haloTextureY = new ShaderMaterial({
    side: BackSide,
    transparent: true,
    // blending: AdditiveBlending,
    vertexShader: sunVertexHalo,
    fragmentShader: sunFragmentHaloY,
    extensions: {
        derivatives: " #extension GL_OES_standard_derivatives : enable",
    },
    uniforms: {
        time: {value: 0}, 
        resolution: {value: new Vector4()},
        uPerlin: {value: null},
        opacity: {value: 0.0}
    }
})
*/
function sunMainBody(){
    var sunGroup = new Group();
    var geometry = new SphereGeometry(1,150,150);
    // var mat = new MeshStandardMaterial();
    var sunMesh = new Mesh(geometry, materialTexture);
    var haloFres = sunHalo();
    var haloFresinPlace = sunHalo();
    var halo = sunHaloZ();
    // var galaxy = galaxySphere();
    // var haloUp = sunHaloY();
    // sunGroup.add(sunMesh, halo, haloUp);
    sunGroup.add(sunMesh, halo, haloFres, haloFresinPlace);
    return sunGroup;
}

function sunHaloZ(){
    var halogeometry = new SphereGeometry(1.3,100,100);
    var sunHalo = new Mesh(halogeometry, haloTextureZ);
    return sunHalo;
}

function sun(){
    var geometry = new SphereGeometry(1,30,30);
    // var mat = new MeshStandardMaterial();
    var sunMesh = new Mesh(geometry, material);
    var halo = sunHalo();
    // sunMainBody();
    sunGroup.add(sunMesh);
    return sunGroup;
}
/*
function galaxySphere(){
    var mat = new MeshBasicMaterial({
        map: textureLoader.load('../../Assets/Images/Textures/innerGalaxy/innerGalaxy.jpg'),
        side: DoubleSide,
        depthFunc: false
    })
    var galaxySphereGeo = new SphereGeometry(1.005,150,150);
    var galaxySphere = new Mesh(galaxySphereGeo, mat);
    return galaxySphere;
}
*/
function sunHalo(){
    var mat = getFresnelMatOut();
    mat.uniforms.color1.value = new Color(1, 0.957, 0.78);
    mat.uniforms.fresnelScale.value = 2.0;
    mat.uniforms.fresnelPower.value = 4.0;
    var halogeometry = new SphereGeometry(1.005,150,150);
    var sunHalo = new Mesh(halogeometry, mat);
    return sunHalo;
}

export {sun, material, materialTexture, sunMainBody, haloTextureZ, MaterialTexture, HaloTextureZ}