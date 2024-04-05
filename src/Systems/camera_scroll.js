import { gsap } from "gsap";

//const lookAt = new Vector3(0,0,0);

function hide_elements(...args){
  gsap.to(args, {autoAlpha: 0, display: 'none', duration: 1});
}

function show_elements(...args){
  gsap.to(args, {autoAlpha: 1, display: 'block', duration: 1} );
  console.log('show elements');
}

export {hide_elements, show_elements};