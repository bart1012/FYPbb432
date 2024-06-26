import { Clock } from "three";
let clock = new Clock();


class Loop {
    constructor(camera, scene, renderer, renderer_2D, mat, sunmat, sunmatMain, 
        cubeCam, rendertarget, scene1, solarSystemOrbitTime,sunBody, morphPlanet, effectsComp){
        this.camera = camera;
        this.instancedSunTime = sunBody;
        this.scene = scene;
        this.renderer = renderer;
        this.renderer_2D = renderer_2D;
        this.updatables = [];
        this.mat = mat;
        this.sunmat = sunmat;
        this.cubeCam = cubeCam;
        this.sunmatMain = sunmatMain;
        this.rendertarget = rendertarget;
        this.scene1 = scene1;
        this.solarSystemOrbitTime = solarSystemOrbitTime.time;
        this.morphPlanet = morphPlanet;
        this.effectsComp = effectsComp;

    }
    start(){
        this.renderer.setAnimationLoop(() => {
            this.cubeCam.update(this.renderer, this.scene1);
            this.mat.uniforms.time.value += clock.getDelta();
            this.morphPlanet.children[0].rotation.y +=0.0003;
            this.morphPlanet.rotation.y +=0.0002;

            this.sunmat.uniforms.time.value += 0.05;
            this.sunmatMain.uniforms.time.value += 0.05;
            this.instancedSunTime.uniforms.time.value += 0.05;
            this.instancedSunTime.uniforms.uPerlin.value = this.rendertarget.texture;
            this.solarSystemOrbitTime += 0.05;
            this.sunmatMain.uniforms.uPerlin.value = this.rendertarget.texture;
            // console.log(this.sunmat.uniforms.time.value );
            this.tick();
            // this.camera.lookAt(0,0,-8);
            // this.renderer.render(this.scene, this.camera);
            this.effectsComp.render();
            this.renderer_2D.render(this.scene, this.camera);
        });
    }
    changeScene(scene){
        this.scene = scene;
    }
    stop(){
        this.renderer.setAnimationLoop(null);
    }
    tick(){
        for (const object of this.updatables){
            object.tick();
        }
    }
}

export {Loop};