import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger );


const progressBar = document.querySelectorAll('.progressBarNav');
var firstCaption = document.getElementById('firstCaption');

var lMBtn = document.querySelectorAll('.LearnMoreButton');
lMBtn.forEach(button => {
  button.addEventListener("click", popUp);
  // Add event listener to the scroll event
});

//onComplete: ()=> {alert('done')}

function animateCam(camera){
  const tlCamera = gsap.timeline();
  tlCamera.to(camera.position, {z: '0.5', duration: 0.05, ease:'none'}, 'start')//start
  .to(camera.position, {z: '-2.85', duration: 1, ease:'none'}, '>')//scene1
  .to(camera.position, {z: '-8.5', duration: 0.75, ease:'none'}, '>')//scene2
  .to(camera.position, {z: '-16', duration: 0.5, ease:'none'}, '>')//scene3
  .to(camera.position, {z: '-24.80', duration: 1, ease:'none'}, '>-=0.1')
  .to(camera.position, {z: '-30', duration: 0.25, ease:'none'}, '>')
  .to(camera.position, {z: '-45', duration: 0.5, ease:'none'}, '>')

  return tlCamera;
}


function animate_objects(tl, solarsystem, morphMat, galaxyMat, 
  spaceship, sunHaloMat, exoF, hubbleTelescope, asteroid, blackHole, triangle, main_Scene_NPo, galaxyinner){
  

  tl.to(sunHaloMat.children[1].scale, {z: 1.4, y: 1.4,x: 1.4}, '<') //increase sun fresnel to keep it visible upon close proximity to camera


  tl.to([sunHaloMat.children[0].scale, sunHaloMat.children[1].scale, sunHaloMat.children[2].scale], {x: 0.01,y:0.01,z:0.01}, '>+=0.5'); //scale sun down 


  tl.to(galaxyMat.uniforms.opacity, {value: 3.0, duration:0.5}, '>-=0.25')//fade in galaxy
  //hide sun
  tl.to([sunHaloMat.children[0].material.uniforms.opacity, sunHaloMat.children[1].material.uniforms.opacity, sunHaloMat.children[2].material.uniforms.fresnelScale], {value: 0, duration:0.1}, '<');
  //move sun
  tl.to([sunHaloMat.children[0].position, sunHaloMat.children[1].position, sunHaloMat.children[2].position], {z:-1}, '<-=0.2');
  //fade out galaxy
  tl.to(galaxyMat.uniforms.opacity, {value: 0.0, duration:0.5, delay:0.05}, '>')
  
  //fade black hole
  tl.to( blackHole.children[0].material.uniforms.fresnelScale, {value:0.0, duration:0.25}, '<')
  tl.to( blackHole.material, {opacity:0.0, duration:0.25}, '<')
  tl.to( blackHole.scale, {x:0,y:0,z:0, duration:0.25}, '<')

  tl.to(triangle.material, {opacity: 1.0, duration:0.25}, '<+=0.35')

tl.to(exoF.scale, {
  x: 1,
  y: 1,
  z: 1,
  duration: 0.2,
  }, '<');

tl.to(exoF.children[1].material, {
  opacity:1.0,
  duration: 0.2,
  delay: 0.25
  }, '>');

tl.to(main_Scene_NPo.scale, {
  x:3.5,
  y:3.5,
  z:3.5,
  duration: 0.2,
  }, '<');

tl.to(exoF.material.uniforms.transitionProgress, {
  value:1.0,
  duration: 0.2,
  }, '>');
tl.to(exoF.children[2].material.uniforms.color1.value, {
  r:1,
  g:0.530,
  b:0,
  duration: 0.2,
  }, '<');

  tl.to([exoF.scale,main_Scene_NPo.scale], {
    x: 0,
    y: 0,
    z: 0,
    duration: 0.2,
    }, '>');
  tl.to(spaceship.scale, {x: '0.25',y: '0.25', z: '0.25', duration: 1, ease:'none', onStart: ()=>{
    spaceship.visible = true;
  }}, '>-=0.22')
  tl.to(spaceship.position, { x: 0, y: 0, z:-50, duration: 0.70, ease:'none', delay: 0.1}, '<')
  tl.to(spaceship.scale, {x: '0',y: '0', z: '0', duration: 0.15, ease:'none', onComplete: ()=>{
    spaceship.visible = false;
  }}, '>')

}

function clickableLinks(){
  const container = document.querySelector('.NavBar_Inner');
  const links = Array.from(container.querySelectorAll("a"));
  links.forEach((element, index) => {
    element.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent page refresh
        switch (index) {
            case 0:
                window.scrollTo({ top: 0 });
                break;
            case 1:
                window.scrollTo({ top: 30000 });
                break;
            case 2:
                window.scrollTo({ top: 57500 });
                break;
            case 3:
              window.scrollTo({ top: 80400 });
              break;
            case 4:
              window.scrollTo({ top: 98000 });
              break;
            // Add more cases for each link as needed
            default:
                break;
        }
    });
});
}

function init_MAPP(camera,single_chapter, solarsystem, morphMat,planetLabels, galaxyMat,spaceship
  ,sunHaloMat, exoF, hubbleTelescope, asteroid, blackHole, triangle, main_Scene_NPo,galaxyinner, active
  ) {

  function showPlanetLabel(){
    var endscreen = document.getElementById('end_screen');


    var camZ = camera.position.z;
    if (camZ < -33){
      gsap.to(endscreen, {autoAlpha: 1, display: 'block', duration: 2.5});
    }

    if (camZ < -3.65){
      sunHaloMat.children[3].visible = false;
    }else{
      sunHaloMat.children[3].visible = true;
    }

    if (camZ < -5){
      sunHaloMat.visible = false;
    }else{
      sunHaloMat.visible = true;
    }

    //----------------nab bar animations 

    const cameraPosition = camZ;
    const endPoints = [-2.85, -11, -18.5, -24.45];
    let startPosition = 0.5;
    
    // Iterate through each endpoint
    for (let index = 0; index < endPoints.length; index++) {
        const endPosition = endPoints[index];
        const barStartPosition = startPosition;
        const barEndPosition = endPosition;
    
        let progressPassed = ((cameraPosition - barStartPosition) / (barEndPosition - barStartPosition)) * 100;
        progressPassed = Math.min(progressPassed, 100); // Ensure progress doesn't exceed 100%
    
        if (progressPassed < 100) {
            const progressBarHeight = progressPassed + '%';
            gsap.to(progressBar[index], { height: progressBarHeight });
        } else {
            startPosition = endPosition;
        }
    }


    var distanceThreshold = 0.2;
    var points = [0,
      -0.38,
      -0.95,
      -1.735,
      -2.31,
      -2.525,
      -2.7,
      -2.9];


    planetLabels.forEach((child, index) => {
      var isWithinRangeZ = Math.abs(camZ - points[index]) < distanceThreshold;
      gsap.to(child, {autoAlpha: isWithinRangeZ ? 1 : 0, display: isWithinRangeZ ? 'block' : 'none'});
    });

    //chapterPOIs--------------------------------------------
    var distanceCaptionThreshold = 0.15;

    var captionPoints = [0.05,
      -0.8,
      -2.40,
      -4.10,
      -6.25,
      -10.75,
      -12.5,
      -15,
      -16,
      -19.15,
      -22.25,
      -23.50,
      -29.5
    ];
    if (camZ < -3){
      distanceCaptionThreshold = 0.45;
    }else{
      distanceCaptionThreshold = 0.15;
    }

      single_chapter.forEach((element, index) => {
        var isWithinRangeZ = Math.abs(camZ - captionPoints[index]) < distanceCaptionThreshold;
        if (isWithinRangeZ) {
            gsap.to(element, { duration: 0.3, autoAlpha: 1, display: 'block' });
        } else {
            gsap.to(element, { duration: 0.3, autoAlpha: 0, display: 'none' });
        }
    });

    if (camZ < 1){
      gsap.to(firstCaption, { duration: 1, autoAlpha: 0, display: 'none' });
    }else{
      gsap.to(firstCaption, { duration: 1, autoAlpha: 1, display: 'block' });
    }
     
  }


    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#page_wrapper',
          start: 'top top',
          end: '+=' + window.innerHeight * 100,
          scrub: 2, //can increase for smoother transitions
          markers: false,
          pin: true,
        },
        onUpdate: showPlanetLabel,
    });

     tl.scrollTrigger.disable();
    
     var startBtn = document.getElementById('start_btn');
     startBtn.addEventListener('click', ()=>{
      tl.scrollTrigger.enable();
     });

      const tlCamera = animateCam(camera);
      tl.add(tlCamera, 0);

      tl.add('start') //set a start point of the timeline 
      animate_objects(tl, solarsystem, morphMat, galaxyMat, spaceship, 
        sunHaloMat, exoF, hubbleTelescope, asteroid, blackHole, triangle, main_Scene_NPo, galaxyinner);
      clickableLinks();
   
      const learnMoreButtons = document.querySelectorAll('.LearnMoreButton');
      learnMoreButtons.forEach(button => {
        button.addEventListener("click", ()=>{
          tl.scrollTrigger.disable(false);
        });
      });


      var span = document.querySelectorAll('.close');
      span.forEach(button => {
        button.addEventListener("click", ()=>{
          tl.scrollTrigger.enable(false);
        });
    });
}

export {init_MAPP};