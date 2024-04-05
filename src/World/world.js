import {createCamera} from '../Components/camera.js';
import {createScene} from '../Components/scene.js';
import {createSphere} from '../Objects/titleSphere.js';
import { createLight } from '../Components/lights.js';
import {CSS2DObject} from 'three/addons/renderers/CSS2DRenderer.js';
import {CapsuleGeometry,HalfFloatType, PointLight,  SphereGeometry, Mesh, MeshBasicMaterial, ShaderMaterial,TextureLoader,MathUtils, MeshStandardMaterial, Scene, Vector3, Color, AdditiveBlending, CubeCamera, WebGLCubeRenderTarget, LinearMipMapLinearFilter, Group } from 'three';
import { galaxy, mat } from '../Objects/galaxy.js';
import {  SolarSystem } from '../Objects/solarSystem.js';
import { sun, material, materialTexture, sunMainBody, MaterialTexture, HaloTextureZ } from '../Objects/sun.js';
import {createRenderer} from '../Systems/renderer.js'
import { create2DRenderer } from '../Systems/2Drenderer.js';
import {Resizer} from '../Systems/Resizer.js';
import {Loop} from '../Systems/Looper.js';
import { hide_elements, show_elements } from '../Systems/camera_scroll.js';
import { init_MAPP } from '../Systems/animations.js';
import { load_GLTF } from '../Systems/loader.js';
import { onPointerMove } from '../Systems/mouse_raycaster.js';
import getStarfield from '../Objects/stars.js'
import morphPlanetMat from '../../Assets/Shaders/MorphingPlanet.js';
import { getFresnelMatOut } from '../../Assets/Shaders/fresnelMat_out.js';
import { GLBConverter } from '../Objects/pointCloudConverter.js';
import glowingMaterial from '../../Assets/Shaders/glowMat.js';
import { BloomEffect, EffectComposer, EffectPass, RenderPass } from "postprocessing";

import morphFragment from '../../Assets/Shaders/morphFragment.js';
import morphVertex from '../../Assets/Shaders/morphVertex.js';

import CustomShaderMaterial from 'three-custom-shader-material/vanilla';
import { createLines } from '../Objects/line.js';
import { gsap } from "gsap";


class World {
    //1. Create a world instance
    constructor(container){
        this.camera = null;
        this.scene = null;
        this.renderer = null;
        this.renderer_2D = null;
        this.sphere1 = null;
        this.sphere2 = null;
        this.sphere3 = null;
        this.sphere4 = null;
        this.sphere5 = null;
        this.light = null;
        this.axesH = null;
        this.loop = null;
        this.nav_bar = null;
        this.time = 0;




          
     
        this.menu_screen = document.getElementById('main_menu');
        this.main_app = document.getElementById('app');
        this.chapterPOIs = document.querySelector('.Chapter_Content');
        this.single_chapter = document.querySelectorAll('.captions')

        this.camera = createCamera(40);
        

        const title_scene = createScene('black');
        const chapter_scene = createScene('black');
        this.scene = chapter_scene;
        this.scene1 = new Scene();

        
        this.renderer = createRenderer(container);
        this.renderer_2D = create2DRenderer();
        
        this.galaxy = galaxy(0.75,3,7.5);

        const sunMesh = sun();
        sunMesh.position.set(0,0,0);
        var solarSystemRep = new SolarSystem;

        this.solarSystem = new Group();
        this.galaxyMat = mat.clone();
        this.galaxy.position.set(0,0,-8);
        this.galaxy.material=this.galaxyMat;
        this.galaxy.rotation.set(MathUtils.degToRad(90),0,0);
    
        this.galaxyinner = galaxy(0.55,2.5,1.5);
        this.galaxyinner.position.set(0,0,-11);
        this.galaxyinner.material=this.galaxyMat;
        this.galaxyinner.rotation.set(MathUtils.degToRad(90),0,0);
        this.scene.add(this.galaxyinner);

        var cubeRendererTarget1 = null;
        var cubeCamera = null;
        this.sunTexture = sunMainBody();
        
        this.sunTexture.position.set(0,0,-2.5);
        var sunBody = new MaterialTexture();
       
        //render the sun in another scene for sampling
        function cubeCam(){
            cubeRendererTarget1 = new WebGLCubeRenderTarget(256, {
                generateMipmaps: true,
                minFilter: LinearMipMapLinearFilter,
            });
            cubeCamera = new CubeCamera(0.001,1000, cubeRendererTarget1);
            cubeCamera.position.set(0,0,0);
        }

        cubeCam();

        this.scene1.background = new Color('white');
        this.scene1.add(sunMesh, cubeCamera);

        this.stars = getStarfield({numStars: 5000});
        this.scene.add(this.stars);

        //create main scene lights
        var lights = createLight();
        var sunLight = lights.sunLight;
        var sunLight2 = lights.sunLight;
        sunLight2.position.set(0,15,-10);
        var keyLight = lights.keyLight;
        var fillLight = lights.fillLight;

        var textureLoader = new TextureLoader();

    //exoP1----------------------------
    this.fres = getFresnelMatOut();





//-----------------------------------------------------------
    

       
  

       var v1 = new Vector3(-4,-2.25,-16.25);
       var v2 = new Vector3(4,-2.25,-16.25);
       var v3 = new Vector3(0,4,-16.25);
       var v4 = new Vector3(-4,-2.25,-16.25);


       var pointsTri = [v1,v2,v3,v4];
       
     this.triangle = createLines(pointsTri);
       this.scene.add(this.triangle);




        

       this.solarSystem.add(solarSystemRep.create(), this.sunTexture);

        this.solarSystem.position.z = -2.2;


        const planetNames = ['NEPTUNE', 'URANUS', 'SATURN', 'JUPITER', 'MARS', 'EARTH', 'VENUS', 'MERCURY'];
        var points = [0,
            -0.38,
            -0.95,
            -1.735,
            -2.31,
            -2.525,
            -2.69,
            -2.85];
        this.planetLabelsDOM = [];
        const planetLabel2DObj = new Group();

        const popup = document.querySelector('.popUps');
        var modals = document.querySelectorAll('.overview');


        for (let index = 0; index < 8; index++) {
            var h2 = document.createElement('h2');
            h2.textContent = planetNames[index];
            this.planetLabelsDOM.push(h2);
            var cpointLabel2 = new CSS2DObject(h2);
            cpointLabel2.position.x = 0.025;
            cpointLabel2.position.y = 0;
            cpointLabel2.position.z = points[index];
            planetLabel2DObj.add(cpointLabel2);            
        }


        var span = document.querySelectorAll('.close');

        span.forEach(button => {
            button.addEventListener("click", hide);
        });

        function hide(){
            console.log('explore clicked');
            popup.style.display = 'none';
            modals.forEach(modal => {
                modal.style.display = 'none';
            })
        }


        this.planetLabelsDOM.forEach((child, index) =>{
            child.addEventListener('click', ()=>{
                popup.style.display = 'block';
                modals[index].style.display = 'block';
            })
        })

        this.planetLabelsDOM.forEach(label => {
            label.style.fontFamily = 'Oswald, sans-serif';
            label.style.fontWeight = 700;
            label.style.fontSize = '3rem';
            label.style.position = 'absolute';
        })


        planetLabel2DObj.children[4].position.x = 0.015;
        planetLabel2DObj.children[5].position.x = 0.015;
        planetLabel2DObj.children[6].position.x = 0.013;
        planetLabel2DObj.children[7].position.x = 0.01;
        // console.log(planetLabel2DObj);
        
        this.planetLabelsDOM.forEach(child => {
            child.style.display = 'none',
            child.style.opacity = 0;
        });

 



        //scene2 ----------- intelligent life
        var newLight = new PointLight(0xffffff, 150);
        newLight.position.set(0,10,-25);


        var exoBumpMap = textureLoader.load('../../Assets/Images/Textures/KorribanBumpF.png');
        var exoDisMap = textureLoader.load('../../Assets/Images/Textures/KorribanDis.png');
        var exoRoughnessMap = textureLoader.load('../../Assets/Images/Textures/KorribanRoughness.png');



        var exoFgeo = new SphereGeometry(5,150,150);
        // var exoFMap = textureLoader.load('../../Assets/Images/Textures/KorribanD.png');
        var exoFMapRed = textureLoader.load('../../Assets/Images/Textures/KorribanD.png');
        var exoFMapBlue = textureLoader.load('../../Assets/Images/Textures/KorribanD1.png');
        var exoFMaterial = new ShaderMaterial({
            uniforms: {
                texture1: { value: exoFMapBlue }, // Initial texture
                texture2: { value: exoFMapRed }, // Target texture
                transitionProgress: { value: 0.0 } // Transition progress
              },
            vertexShader: morphVertex,
            fragmentShader: morphFragment,
        });

        var exoFmaterialReactive = new CustomShaderMaterial({
            baseMaterial: new MeshStandardMaterial,
            uniforms: {
                texture1: { value: exoFMapBlue }, // Initial texture
                texture2: { value: exoFMapRed }, // Target texture
                transitionProgress: { value: 0.0 } // Transition progress
              },
            vertexShader: morphVertex,
            fragmentShader: morphFragment
        });
        
        this.exoF = new Mesh(exoFgeo, exoFmaterialReactive);
        this.exoF.position.set(0,0,-32);

        
        var exoFresG = new SphereGeometry(5.1,150,150);
        
        var color1 = new Color(1, 0.729, 0);
        var color2 = new Color(0.212, 0.898, 1);

        const customMaterial = getFresnelMatOut({
            rimHex: color2,  // Custom rim color (red)
            facingHex: 0x000000 // Custom facing color (green)
        });

      
        var exoFresM = customMaterial;
        var exoFres = new Mesh(exoFresG, exoFresM);

        //clouds----------------------------

        var exoFCgeo = new SphereGeometry(5.3,150,150);
        var exoFCMap = textureLoader.load('../../Assets/Images/Textures/KorribanC.png');

        var exoFCMaterial = new MeshStandardMaterial({
            map:exoFCMap,
            alphaMap: exoFCMap,
            blending: AdditiveBlending,
            transparent: true,
            opacity:1
        });
        var exoFC = new Mesh(exoFCgeo, exoFCMaterial);

        //lights----------------------------

        
        var exoFLgeo = new SphereGeometry(5.1,150,150);
        var exoEmmMap = textureLoader.load('../../Assets/Images/Textures/exoL.webp');

        var exoFLMaterial = new MeshStandardMaterial({
            map: exoEmmMap,
            depthTest:false,
            alphaMap: exoEmmMap,
            blending: AdditiveBlending, // Use AdditiveBlending for glow effects
            transparent: true,
            opacity: 0.0,
            emissive: new Color(0xffffff), // Set emissive color to white for brightness
            emissiveIntensity: 1, // Increase emissive intensity for a stronger glow
            emissiveMap: exoEmmMap, // Assign emissive map for texture-based glow
        });
        var exoFL = new Mesh(exoFLgeo, exoFLMaterial);
        // exoFL.position.set(0,0,-25);
        exoFL.rotation.set(0,0,0);
        /*
        var exoLightsmesh = exoFC.clone();
        exoLights.scale.set(0.2,0.2,0.2);
*/

        this.exoF.add(exoFC, exoFL, exoFres);
        this.exoF.scale.set(0,0,0);
        this.exoF.rotation.set(0,-1.85,0);
        chapter_scene.add(this.exoF);


    //-------------------------arcs

    
        var networkSphereGeo = createSphere();
        var networkPoints = new GLBConverter(networkSphereGeo);
        var networkplanet = networkPoints.convert();
        networkplanet.scale.set(14,14,14);
        networkplanet.position.set(-15,-10,20);
        

        var networkplanet2 = networkplanet.clone();

        networkplanet2.position.set(15,10,17);
        networkplanet2.rotation.set(MathUtils.degToRad(180),MathUtils.degToRad(180),0);
        title_scene.add(networkplanet, networkplanet2);
        networkplanet.visible = false;
        networkplanet2.visible = false;

        var main_Scene_NPgg = new SphereGeometry(1,50,50);
        var matt = new MeshBasicMaterial();
        var main_Scene_NPg = new Mesh(main_Scene_NPgg, matt);
        var main_Scene_NPc = new GLBConverter(main_Scene_NPg);
        this.main_Scene_NPo = main_Scene_NPc.convertLineSphere();
        this.main_Scene_NPo.position.set(0,0,-28);
        this.main_Scene_NPo.scale.set(0,0,0);

        this.scene.add(this.main_Scene_NPo);

        const geometrycap = new CapsuleGeometry( 0.5, 0.25, 50, 105 ); 
        const materialCap = new MeshStandardMaterial( { 
            map: textureLoader.load('../../Assets/Images/Textures/ufo/Metal_006_basecolor.jpg'),
            emissive: 'red',
            toneMapped: false,
            emissiveIntensity: 0.0,
            metalness: 1,
            }); 
        this.ufo = new Mesh( geometrycap, materialCap ); 
        this.ufo.scale.set(1,0.1,1);

        //--------------------------------------------------------------

        
        var tMat = glowingMaterial;
        var ufoHalo =  this.ufo.clone();
        ufoHalo.scale.set(1.025,.25,1.025);
        ufoHalo.material = tMat;
        // torusMesh.position.set(0,0,1);

        const ufoLight = new PointLight('white', 55);


        this.ufo.add(ufoHalo);
    
        ufoLight.position.set(0.25,2,-15);

        this.ufo.position.set(0.25,0,-15);
        this.ufo.rotation.set(0,0,MathUtils.degToRad(120));
        this.ufo.scale.set(0,0,0);


        this.ufo.visible = false;


        this.scene.add( this.ufo );

        //---------------------------------------
        
        
//-----------------asteroid------------------

this.asteroid = createSphere();
var asteroidMat = morphPlanetMat();

asteroidMat.uniforms.amplitude.value = 3.5;
asteroidMat.uniforms.offset.value = 1.3;
asteroidMat.uniforms.sharpness.value = 0.115;
asteroidMat.uniforms.period.value = 1;
asteroidMat.uniforms.persistence.value = 0.55;
asteroidMat.uniforms.lacunarity.value = 1.8;
asteroidMat.uniforms.octaves.value = 10;
asteroidMat.uniforms.type.value = 3;

asteroidMat.uniforms.blend12.value = 1;

asteroidMat.uniforms.color1.value = new Color(1,0,0);
asteroidMat.uniforms.color2.value = new Color(1, 1,0);
asteroidMat.uniforms.color3.value = new Color(1, 0.125,0);
asteroidMat.uniforms.color4.value = new Color(0.055, 0.3, 0.85);
asteroidMat.uniforms.color5.value = new Color(0.5, 0.5, 0.5);

//    this.morphMat3.uniforms.ambientIntensity.value = 0;
asteroidMat.uniforms.specularIntensity.value = 0;
//    this.morphMat3.uniforms.diffuseIntensity.value = 1;
asteroidMat.uniforms.shininess.value = 0;
asteroidMat.uniforms.lightDirection.value = new Vector3(0.5, 3, 2);      


asteroidMat.uniforms.transition2.value = 0;
asteroidMat.uniforms.transition3.value =0;
asteroidMat.uniforms.transition4.value = 0;
asteroidMat.uniforms.transition5.value = 3;      

this.asteroid.material = asteroidMat;
this.asteroid.scale.set(0.005,0.005,0.005);
// this.asteroid.position.set(-2.5,2.5,-20);
this.asteroid.rotation.set(0,-0.25,3);
// this.exoPlanets.add(this.asteroid);

//-----------------asteroid------------------

this.blackHole = createSphere();
var blackHoleAround = createSphere();
blackHoleAround.scale.set(1.05,1.05,1.05);
blackHoleAround.material = getFresnelMatOut();
blackHoleAround.material.uniforms.color1.value = new Color(1,1,1);
blackHoleAround.material.uniforms.fresnelScale.value = 20.0;
blackHoleAround.material.uniforms.fresnelPower.value = 10.0;

this.blackHole.material = new MeshBasicMaterial({color: 'black', transparent: true, opacity:1.0});
this.blackHole.add(blackHoleAround);
this.blackHole.scale.set(0.8,0.8,0.8);
this.blackHole.position.set(0,0,-11);

//this.blackHole, add to scene
       
        chapter_scene.add( this.blackHole, this.galaxy, 
            planetLabel2DObj, this.solarSystem, 
            sunLight, keyLight, fillLight);


        //creating and adding objs
        onPointerMove(this.camera, this.scene);




        this.composer = new EffectComposer(this.renderer, {
            frameBufferType: HalfFloatType
        });

  
     
       
        //scene creation
        this.resizer = new Resizer(container, this.camera, this.renderer, this.renderer_2D);
        this.loop = new Loop(this.camera, title_scene, this.renderer, this.renderer_2D, this.galaxyMat, material, 
            materialTexture, cubeCamera, cubeRendererTarget1, this.scene1, solarSystemRep,
            sunBody, this.exoF, this.composer);
        this.loop.updatables.push( solarSystemRep); 
        var title_galaxy = this.galaxy.clone();
        
       console.log(title_galaxy);
        title_galaxy.material.uniforms.opacity.value = 6;
        title_galaxy.position.set(0,0,35);  
        title_galaxy.scale.set(3,3,3);  
        title_scene.add(title_galaxy);
        
        const navBar = document.querySelector('.NavBar');
        const about = document.querySelector('.about');
        about.addEventListener('click', ()=>{
            show_elements(aboutContainer);
        });
        const aboutContainer = document.getElementById('about');
        var aboutClose = document.getElementById('closeAbout');
        aboutClose.addEventListener('click', ()=>{
            hide_elements(aboutContainer);
        })
        hide_elements(this.chapterPOIs, aboutContainer);
        var startBtn = document.getElementById('start_btn');
        var title_container = document.getElementById('title_container');
        var controls = document.getElementById('controls');


        
        this.composer.setSize(window.innerWidth, window.innerHeight);
        const renderPass = new RenderPass( title_scene, this.camera );
        this.composer.addPass( renderPass );


        this.active = true;


        startBtn.addEventListener('click', ()=>{
            hide_elements(title_container);
            gsap.to(this.camera.position, {z: 33, duration: 1, ease: 'circ.out', onStart: ()=>{
                networkplanet.visible = true;
                networkplanet2.visible = true;
                gsap.to(networkplanet.children[1].material, {opacity: 0.2, duration: 1.5, ease: 'circ.out'});}
                
                ,onComplete: ()=>{
                show_elements(controls);
                gsap.to(controls, { display: 'none', autoAlpha: 0, duration: 1, ease: 'circ.out', delay: 2.5, onComplete: ()=>{
                    hide_elements(this.menu_screen);
                    this.loop.changeScene(this.scene);
                    renderPass.scene = this.scene;
                    this.active = false;
                    this.composer.addPass(new EffectPass(this.camera, new BloomEffect({
                        luminanceThreshold: 0.25,
                        luminanceSmoothing: 0.05,
                        intensity: 1,
                        radius: 1,                        
                    })));
                    show_elements(navBar,this.chapterPOIs);
                }});
               
            }});
            gsap.to(title_galaxy.material.uniforms.opacity, {value: 0.0, duration: 1, ease: 'circ.out'});

        })
    }
    
    async load_assets(){
        const { hubbleTelescope} = await load_GLTF();

       init_MAPP(this.camera,  this.single_chapter, this.solarSystem, this.morphMat, this.planetLabelsDOM, 
        this.galaxyMat, 
        this.ufo, this.sunTexture, this.exoF, hubbleTelescope, 
        this.asteroid, this.blackHole,  
        this.triangle, this.main_Scene_NPo, this.galaxyinner, this.active);
    }

    start() {
        this.loop.start();
      }

    stop(){
        this.loop.stop();
    }
}

export {World};