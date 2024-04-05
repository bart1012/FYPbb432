(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Io="163",J0=0,_f=1,Q0=2,Sm=1,e_=2,nr=3,Hi=0,qt=1,Mn=2,Vn=0,fs=1,Gi=2,vf=3,xf=4,t_=5,as=100,n_=101,i_=102,r_=103,s_=104,o_=200,a_=201,l_=202,c_=203,Bu=204,ku=205,u_=206,h_=207,f_=208,d_=209,p_=210,m_=211,g_=212,__=213,v_=214,x_=0,y_=1,S_=2,Wl=3,M_=4,w_=5,T_=6,b_=7,Mm=0,E_=1,A_=2,Or=0,R_=1,C_=2,P_=3,L_=4,I_=5,D_=6,U_=7,yf="attached",N_="detached",wm=300,go=301,_o=302,Hu=303,Gu=304,pc=306,vo=1e3,Cr=1001,Xl=1002,Fn=1003,Tm=1004,Zo=1005,sn=1006,Il=1007,ar=1008,O_=1008,zn=1009,F_=1010,z_=1011,bm=1012,Em=1013,Ss=1014,Ui=1015,wa=1016,Am=1017,Rm=1018,Do=1020,B_=35902,k_=1021,H_=1022,di=1023,G_=1024,V_=1025,oo=1026,xo=1027,Cm=1028,Pm=1029,W_=1030,Lm=1031,Im=1033,Ec=33776,Ac=33777,Rc=33778,Cc=33779,Sf=35840,Mf=35841,wf=35842,Tf=35843,Dm=36196,bf=37492,Ef=37496,Af=37808,Rf=37809,Cf=37810,Pf=37811,Lf=37812,If=37813,Df=37814,Uf=37815,Nf=37816,Of=37817,Ff=37818,zf=37819,Bf=37820,kf=37821,Pc=36492,Hf=36494,Gf=36495,X_=36283,Vf=36284,Wf=36285,Xf=36286,Ta=2300,yo=2301,Lc=2302,qf=2400,jf=2401,Yf=2402,q_=2500,j_=0,Um=1,Vu=2,Oa=3200,Y_=3201,Nm=0,K_=1,Li="",ct="srgb",Qt="srgb-linear",Th="display-p3",mc="display-p3-linear",ql="linear",Ct="srgb",jl="rec709",Yl="p3",Ps=7680,Kf=519,$_=512,Z_=513,J_=514,Om=515,Q_=516,ev=517,tv=518,nv=519,Wu=35044,$f="300 es",lr=2e3,Kl=2001;class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zf=1234567;const oa=Math.PI/180,So=180/Math.PI;function Ai(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function rn(r,e,t){return Math.max(e,Math.min(t,r))}function bh(r,e){return(r%e+e)%e}function iv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function rv(r,e,t){return r!==e?(t-r)/(e-r):0}function aa(r,e,t){return(1-t)*r+t*e}function sv(r,e,t,n){return aa(r,e,1-Math.exp(-t*n))}function ov(r,e=1){return e-Math.abs(bh(r,e*2)-e)}function av(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function lv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function cv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function uv(r,e){return r+Math.random()*(e-r)}function hv(r){return r*(.5-Math.random())}function fv(r){r!==void 0&&(Zf=r);let e=Zf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dv(r){return r*oa}function pv(r){return r*So}function mv(r){return(r&r-1)===0&&r!==0}function gv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function _v(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function vv(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const sr={DEG2RAD:oa,RAD2DEG:So,generateUUID:Ai,clamp:rn,euclideanModulo:bh,mapLinear:iv,inverseLerp:rv,lerp:aa,damp:sv,pingpong:ov,smoothstep:av,smootherstep:lv,randInt:cv,randFloat:uv,randFloatSpread:hv,seededRandom:fv,degToRad:dv,radToDeg:pv,isPowerOfTwo:mv,ceilPowerOfTwo:gv,floorPowerOfTwo:_v,setQuaternionFromProperEuler:vv,normalize:vt,denormalize:bi};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,i,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],S=i[1],y=i[4],b=i[7],L=i[2],w=i[5],M=i[8];return s[0]=o*_+a*S+l*L,s[3]=o*p+a*y+l*w,s[6]=o*m+a*b+l*M,s[1]=c*_+u*S+h*L,s[4]=c*p+u*y+h*w,s[7]=c*m+u*b+h*M,s[2]=d*_+f*S+g*L,s[5]=d*p+f*y+g*w,s[8]=d*m+f*b+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ic.makeScale(e,t)),this}rotate(e){return this.premultiply(Ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ic=new Qe;function Fm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ba(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xv(){const r=ba("canvas");return r.style.display="block",r}const Jf={};function zm(r){r in Jf||(Jf[r]=!0,console.warn(r))}const Qf=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ed=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Va={[Qt]:{transfer:ql,primaries:jl,toReference:r=>r,fromReference:r=>r},[ct]:{transfer:Ct,primaries:jl,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[mc]:{transfer:ql,primaries:Yl,toReference:r=>r.applyMatrix3(ed),fromReference:r=>r.applyMatrix3(Qf)},[Th]:{transfer:Ct,primaries:Yl,toReference:r=>r.convertSRGBToLinear().applyMatrix3(ed),fromReference:r=>r.applyMatrix3(Qf).convertLinearToSRGB()}},yv=new Set([Qt,mc]),mt={enabled:!0,_workingColorSpace:Qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!yv.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Va[e].toReference,i=Va[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Va[r].primaries},getTransfer:function(r){return r===Li?ql:Va[r].transfer}};function ao(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Dc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ls;class Sv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=ba("canvas")),Ls.width=e.width,Ls.height=e.height;const n=Ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ba("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ao(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ao(t[n]/255)*255):t[n]=ao(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mv=0;class Bm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Uc(i[o].image)):s.push(Uc(i[o]))}else s=Uc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Uc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Sv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wv=0;class Jt extends dr{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=Cr,i=Cr,s=sn,o=ar,a=di,l=zn,c=Jt.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Ai(),this.name="",this.source=new Bm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case Xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case Xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=wm;Jt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,i=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(f+1)/2,L=(m+1)/2,w=(u+d)/4,M=(h+_)/4,T=(g+p)/4;return y>b&&y>L?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=M/n):b>L?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=w/i,s=T/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=M/s,i=T/s),this.set(n,i,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-_)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tv extends dr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends Tv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class km extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bv extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let p=1-a;const m=l*d+c*f+u*g+h*_,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const L=Math.sqrt(y),w=Math.atan2(L,m*S);p=Math.sin(p*w)/L,a=Math.sin(a*w)/L}const b=a*S;if(l=l*p+d*b,c=c*p+f*b,u=u*p+g*b,h=h*p+_*b,p===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(td.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nc=new z,td=new Wr;class pr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vi):vi.fromBufferAttribute(s,o),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),Xa.subVectors(this.max,zo),Is.subVectors(e.a,zo),Ds.subVectors(e.b,zo),Us.subVectors(e.c,zo),_r.subVectors(Ds,Is),vr.subVectors(Us,Ds),jr.subVectors(Is,Us);let t=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-jr.z,jr.y,_r.z,0,-_r.x,vr.z,0,-vr.x,jr.z,0,-jr.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-jr.y,jr.x,0];return!Oc(t,Is,Ds,Us,Xa)||(t=[1,0,0,0,1,0,0,0,1],!Oc(t,Is,Ds,Us,Xa))?!1:(qa.crossVectors(_r,vr),t=[qa.x,qa.y,qa.z],Oc(t,Is,Ds,Us,Xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new z,new z,new z,new z,new z,new z,new z,new z],vi=new z,Wa=new pr,Is=new z,Ds=new z,Us=new z,_r=new z,vr=new z,jr=new z,zo=new z,Xa=new z,qa=new z,Yr=new z;function Oc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Yr.fromArray(r,s);const a=i.x*Math.abs(Yr.x)+i.y*Math.abs(Yr.y)+i.z*Math.abs(Yr.z),l=e.dot(Yr),c=t.dot(Yr),u=n.dot(Yr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ev=new pr,Bo=new z,Fc=new z;class Xi{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ev.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const t=Bo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Bo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(Fc)),this.expandByPoint(Bo.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new z,zc=new z,ja=new z,xr=new z,Bc=new z,Ya=new z,kc=new z;class Fa{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zc.copy(e).add(t).multiplyScalar(.5),ja.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(zc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ja),a=xr.dot(this.direction),l=-xr.dot(ja),c=xr.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(zc).addScaledVector(ja,d),f}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const n=Zi.dot(this.direction),i=Zi.dot(Zi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,n,i,s){Bc.subVectors(t,e),Ya.subVectors(n,e),kc.crossVectors(Bc,Ya);let o=this.direction.dot(kc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xr.subVectors(this.origin,e);const l=a*this.direction.dot(Ya.crossVectors(xr,Ya));if(l<0)return null;const c=a*this.direction.dot(Bc.cross(xr));if(c<0||l+c>o)return null;const u=-a*xr.dot(kc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,p){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,p)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ns.setFromMatrixColumn(e,0).length(),s=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Av,e,Rv)}lookAt(e,t,n){const i=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),yr.crossVectors(n,Kn),yr.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),yr.crossVectors(n,Kn)),yr.normalize(),Ka.crossVectors(Kn,yr),i[0]=yr.x,i[4]=Ka.x,i[8]=Kn.x,i[1]=yr.y,i[5]=Ka.y,i[9]=Kn.y,i[2]=yr.z,i[6]=Ka.z,i[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],S=n[3],y=n[7],b=n[11],L=n[15],w=i[0],M=i[4],T=i[8],x=i[12],v=i[1],C=i[5],I=i[9],O=i[13],k=i[2],B=i[6],H=i[10],G=i[14],W=i[3],J=i[7],U=i[11],he=i[15];return s[0]=o*w+a*v+l*k+c*W,s[4]=o*M+a*C+l*B+c*J,s[8]=o*T+a*I+l*H+c*U,s[12]=o*x+a*O+l*G+c*he,s[1]=u*w+h*v+d*k+f*W,s[5]=u*M+h*C+d*B+f*J,s[9]=u*T+h*I+d*H+f*U,s[13]=u*x+h*O+d*G+f*he,s[2]=g*w+_*v+p*k+m*W,s[6]=g*M+_*C+p*B+m*J,s[10]=g*T+_*I+p*H+m*U,s[14]=g*x+_*O+p*G+m*he,s[3]=S*w+y*v+b*k+L*W,s[7]=S*M+y*C+b*B+L*J,s[11]=S*T+y*I+b*H+L*U,s[15]=S*x+y*O+b*G+L*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+p*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=h*p*c-_*d*c+_*l*f-a*p*f-h*l*m+a*d*m,y=g*d*c-u*p*c-g*l*f+o*p*f+u*l*m-o*d*m,b=u*_*c-g*h*c+g*a*f-o*_*f-u*a*m+o*h*m,L=g*h*l-u*_*l-g*a*d+o*_*d+u*a*p-o*h*p,w=t*S+n*y+i*b+s*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=S*M,e[1]=(_*d*s-h*p*s-_*i*f+n*p*f+h*i*m-n*d*m)*M,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*M,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*M,e[4]=y*M,e[5]=(u*p*s-g*d*s+g*i*f-t*p*f-u*i*m+t*d*m)*M,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*m-t*l*m)*M,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*M,e[8]=b*M,e[9]=(g*h*s-u*_*s-g*n*f+t*_*f+u*n*m-t*h*m)*M,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*M,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*M,e[12]=L*M,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*p+t*h*p)*M,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*M,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*M,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,g=s*h,_=o*u,p=o*h,m=a*h,S=l*c,y=l*u,b=l*h,L=n.x,w=n.y,M=n.z;return i[0]=(1-(_+m))*L,i[1]=(f+b)*L,i[2]=(g-y)*L,i[3]=0,i[4]=(f-b)*w,i[5]=(1-(d+m))*w,i[6]=(p+S)*w,i[7]=0,i[8]=(g+y)*M,i[9]=(p-S)*M,i[10]=(1-(d+_))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ns.set(i[0],i[1],i[2]).length();const o=Ns.set(i[4],i[5],i[6]).length(),a=Ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],xi.copy(this);const c=1/s,u=1/o,h=1/a;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=u,xi.elements[5]*=u,xi.elements[6]*=u,xi.elements[8]*=h,xi.elements[9]*=h,xi.elements[10]*=h,t.setFromRotationMatrix(xi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=lr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===lr)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Kl)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=lr){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*c,f=(n+i)*u;let g,_;if(a===lr)g=(o+s)*h,_=-2*h;else if(a===Kl)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ns=new z,xi=new je,Av=new z(0,0,0),Rv=new z(1,1,1),yr=new z,Ka=new z,Kn=new z,nd=new je,id=new Wr;class Vi{constructor(e=0,t=0,n=0,i=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return id.setFromEuler(this),this.setFromQuaternion(id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Eh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cv=0;const rd=new z,Os=new Wr,Ji=new je,$a=new z,ko=new z,Pv=new z,Lv=new Wr,sd=new z(1,0,0),od=new z(0,1,0),ad=new z(0,0,1),ld={type:"added"},Iv={type:"removed"},Fs={type:"childadded",child:null},Hc={type:"childremoved",child:null};class Ot extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new z,t=new Vi,n=new Wr,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new Qe}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(sd,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(ad,e)}translateOnAxis(e,t){return rd.copy(e).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sd,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$a.copy(e):$a.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(ko,$a,this.up):Ji.lookAt($a,ko,this.up),this.quaternion.setFromRotationMatrix(Ji),i&&(Ji.extractRotation(i.matrixWorld),Os.setFromRotationMatrix(Ji),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ld),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Iv),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ld),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,Pv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,Lv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ot.DEFAULT_UP=new z(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new z,Qi=new z,Gc=new z,er=new z,zs=new z,Bs=new z,cd=new z,Vc=new z,Wc=new z,Xc=new z;class Ii{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yi.subVectors(e,t),i.cross(yi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){yi.subVectors(i,t),Qi.subVectors(n,t),Gc.subVectors(e,t);const o=yi.dot(yi),a=yi.dot(Qi),l=yi.dot(Gc),c=Qi.dot(Qi),u=Qi.dot(Gc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,er.x),l.addScaledVector(o,er.y),l.addScaledVector(a,er.z),l)}static isFrontFacing(e,t,n,i){return yi.subVectors(n,t),Qi.subVectors(e,t),yi.cross(Qi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),yi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ii.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;zs.subVectors(i,n),Bs.subVectors(s,n),Vc.subVectors(e,n);const l=zs.dot(Vc),c=Bs.dot(Vc);if(l<=0&&c<=0)return t.copy(n);Wc.subVectors(e,i);const u=zs.dot(Wc),h=Bs.dot(Wc);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(zs,o);Xc.subVectors(e,s);const f=zs.dot(Xc),g=Bs.dot(Xc);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Bs,a);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return cd.subVectors(s,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(cd,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(zs,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Za={h:0,s:0,l:0};function qc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=bh(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=qc(o,s,e+1/3),this.g=qc(o,s,e),this.b=qc(o,s,e-1/3)}return mt.toWorkingColorSpace(this,i),this}setStyle(e,t=ct){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){const n=Hm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}copyLinearToSRGB(e){return this.r=Dc(e.r),this.g=Dc(e.g),this.b=Dc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return mt.fromWorkingColorSpace(vn.copy(this),e),Math.round(rn(vn.r*255,0,255))*65536+Math.round(rn(vn.g*255,0,255))*256+Math.round(rn(vn.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(vn.copy(this),t);const n=vn.r,i=vn.g,s=vn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=ct){mt.fromWorkingColorSpace(vn.copy(this),e);const t=vn.r,n=vn.g,i=vn.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(Za);const n=aa(Sr.h,Za.h,t),i=aa(Sr.s,Za.s,t),s=aa(Sr.l,Za.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new ge;ge.NAMES=Hm;let Dv=0;class ii extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=fs,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bu,this.blendDst=ku,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==Hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bu&&(n.blendSrc=this.blendSrc),this.blendDst!==ku&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ni extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Mm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new z,Ja=new pe;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return zm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wu&&(e.usage=this.usage),e}}class Gm extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vm extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Uv=0;const ai=new je,jc=new Ot,ks=new z,$n=new pr,Ho=new pr,ln=new z;class Ht extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fm(e)?Vm:Gm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$n.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ho.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors($n.min,Ho.min),$n.expandByPoint(ln),ln.addVectors($n.max,Ho.max),$n.expandByPoint(ln)):($n.expandByPoint(Ho.min),$n.expandByPoint(Ho.max))}$n.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ln.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ln));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ln.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(e,c),ln.add(ks)),i=Math.max(i,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new z,l[T]=new z;const c=new z,u=new z,h=new z,d=new pe,f=new pe,g=new pe,_=new z,p=new z;function m(T,x,v){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,v),d.fromBufferAttribute(s,T),f.fromBufferAttribute(s,x),g.fromBufferAttribute(s,v),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(C),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),a[T].add(_),a[x].add(_),a[v].add(_),l[T].add(p),l[x].add(p),l[v].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let T=0,x=S.length;T<x;++T){const v=S[T],C=v.start,I=v.count;for(let O=C,k=C+I;O<k;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new z,b=new z,L=new z,w=new z;function M(T){L.fromBufferAttribute(i,T),w.copy(L);const x=a[T];y.copy(x),y.sub(L.multiplyScalar(L.dot(x))).normalize(),b.crossVectors(w,x);const C=b.dot(l[T])<0?-1:1;o.setXYZW(T,y.x,y.y,y.z,C)}for(let T=0,x=S.length;T<x;++T){const v=S[T],C=v.start,I=v.count;for(let O=C,k=C+I;O<k;O+=3)M(e.getX(O+0)),M(e.getX(O+1)),M(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new kt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ud=new je,Kr=new Fa,Qa=new Xi,hd=new z,Hs=new z,Gs=new z,Vs=new z,Yc=new z,el=new z,tl=new pe,nl=new pe,il=new pe,fd=new z,dd=new z,pd=new z,rl=new z,sl=new z;class Mt extends Ot{constructor(e=new Ht,t=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){el.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Yc.fromBufferAttribute(h,e),o?el.addScaledVector(Yc,u):el.addScaledVector(Yc.sub(t),u))}t.add(el)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(s),Kr.copy(e.ray).recast(e.near),!(Qa.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Qa,hd)===null||Kr.origin.distanceToSquared(hd)>(e.far-e.near)**2))&&(ud.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(ud),!(n.boundingBox!==null&&Kr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=S,L=y;b<L;b+=3){const w=a.getX(b),M=a.getX(b+1),T=a.getX(b+2);i=ol(this,m,e,n,c,u,h,w,M,T),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const S=a.getX(p),y=a.getX(p+1),b=a.getX(p+2);i=ol(this,o,e,n,c,u,h,S,y,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=S,L=y;b<L;b+=3){const w=b,M=b+1,T=b+2;i=ol(this,m,e,n,c,u,h,w,M,T),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const S=p,y=p+1,b=p+2;i=ol(this,o,e,n,c,u,h,S,y,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Nv(r,e,t,n,i,s,o,a){let l;if(e.side===qt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Hi,a),l===null)return null;sl.copy(a),sl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(sl);return c<t.near||c>t.far?null:{distance:c,point:sl.clone(),object:r}}function ol(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Hs),r.getVertexPosition(l,Gs),r.getVertexPosition(c,Vs);const u=Nv(r,e,t,n,Hs,Gs,Vs,rl);if(u){i&&(tl.fromBufferAttribute(i,a),nl.fromBufferAttribute(i,l),il.fromBufferAttribute(i,c),u.uv=Ii.getInterpolation(rl,Hs,Gs,Vs,tl,nl,il,new pe)),s&&(tl.fromBufferAttribute(s,a),nl.fromBufferAttribute(s,l),il.fromBufferAttribute(s,c),u.uv1=Ii.getInterpolation(rl,Hs,Gs,Vs,tl,nl,il,new pe)),o&&(fd.fromBufferAttribute(o,a),dd.fromBufferAttribute(o,l),pd.fromBufferAttribute(o,c),u.normal=Ii.getInterpolation(rl,Hs,Gs,Vs,fd,dd,pd,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};Ii.getNormal(Hs,Gs,Vs,h.normal),u.face=h}return u}class za extends Ht{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(h,2));function g(_,p,m,S,y,b,L,w,M,T,x){const v=b/M,C=L/T,I=b/2,O=L/2,k=w/2,B=M+1,H=T+1;let G=0,W=0;const J=new z;for(let U=0;U<H;U++){const he=U*C-O;for(let Ue=0;Ue<B;Ue++){const We=Ue*v-I;J[_]=We*S,J[p]=he*y,J[m]=k,c.push(J.x,J.y,J.z),J[_]=0,J[p]=0,J[m]=w>0?1:-1,u.push(J.x,J.y,J.z),h.push(Ue/M),h.push(1-U/T),G+=1}}for(let U=0;U<T;U++)for(let he=0;he<M;he++){const Ue=d+he+B*U,We=d+he+B*(U+1),$=d+(he+1)+B*(U+1),se=d+(he+1)+B*U;l.push(Ue,We,se),l.push(We,$,se),W+=6}a.addGroup(f,W,x),f+=W,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pn(r){const e={};for(let t=0;t<r.length;t++){const n=Mo(r[t]);for(const i in n)e[i]=n[i]}return e}function Ov(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Wm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const Fv={clone:Mo,merge:Pn};var zv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tt extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zv,this.fragmentShader=Bv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mo(e.uniforms),this.uniformsGroups=Ov(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ah extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=lr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new z,md=new pe,gd=new pe;class Sn extends Ah{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=So*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return So*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,md,gd),t.subVectors(gd,md)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ws=-90,Xs=1;class Xm extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Sn(Ws,Xs,e,t);i.layers=this.layers,this.add(i);const s=new Sn(Ws,Xs,e,t);s.layers=this.layers,this.add(s);const o=new Sn(Ws,Xs,e,t);o.layers=this.layers,this.add(o);const a=new Sn(Ws,Xs,e,t);a.layers=this.layers,this.add(a);const l=new Sn(Ws,Xs,e,t);l.layers=this.layers,this.add(l);const c=new Sn(Ws,Xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===lr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class qm extends Jt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:go,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jm extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new qm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new za(5,5,5),s=new Tt({name:"CubemapFromEquirect",uniforms:Mo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Vn});s.uniforms.tEquirect.value=t;const o=new Mt(i,s),a=t.minFilter;return t.minFilter===ar&&(t.minFilter=sn),new Xm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Kc=new z,kv=new z,Hv=new Qe;class ns{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Kc.subVectors(n,t).cross(kv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Kc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hv.getNormalMatrix(e),i=this.coplanarPoint(Kc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new Xi,al=new z;class Rh{constructor(e=new ns,t=new ns,n=new ns,i=new ns,s=new ns,o=new ns){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=lr){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],S=i[13],y=i[14],b=i[15];if(n[0].setComponents(l-s,d-c,p-f,b-m).normalize(),n[1].setComponents(l+s,d+c,p+f,b+m).normalize(),n[2].setComponents(l+o,d+u,p+g,b+S).normalize(),n[3].setComponents(l-o,d-u,p-g,b-S).normalize(),n[4].setComponents(l-a,d-h,p-_,b-y).normalize(),t===lr)n[5].setComponents(l+a,d+h,p+_,b+y).normalize();else if(t===Kl)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(al.x=i.normal.x>0?e.max.x:e.min.x,al.y=i.normal.y>0?e.max.y:e.min.y,al.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ym(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Gv(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(r.bindBuffer(c,a),h.count===-1&&d.length===0&&r.bufferSubData(c,0,u),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Ba extends Ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const S=m*d-o;for(let y=0;y<c;y++){const b=y*h-s;g.push(b,-S,0),_.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const y=S+c*m,b=S+c*(m+1),L=S+1+c*(m+1),w=S+1+c*m;f.push(y,b,w),f.push(b,L,w)}this.setIndex(f),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$v=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zv=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ix=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,px=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",yx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Px=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ix=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ox=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,oy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,my=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,My=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ry=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Py=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ly=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ny=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Oy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$y=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,l1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,p1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,S1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Vv,alphahash_pars_fragment:Wv,alphamap_fragment:Xv,alphamap_pars_fragment:qv,alphatest_fragment:jv,alphatest_pars_fragment:Yv,aomap_fragment:Kv,aomap_pars_fragment:$v,batching_pars_vertex:Zv,batching_vertex:Jv,begin_vertex:Qv,beginnormal_vertex:ex,bsdfs:tx,iridescence_fragment:nx,bumpmap_pars_fragment:ix,clipping_planes_fragment:rx,clipping_planes_pars_fragment:sx,clipping_planes_pars_vertex:ox,clipping_planes_vertex:ax,color_fragment:lx,color_pars_fragment:cx,color_pars_vertex:ux,color_vertex:hx,common:fx,cube_uv_reflection_fragment:dx,defaultnormal_vertex:px,displacementmap_pars_vertex:mx,displacementmap_vertex:gx,emissivemap_fragment:_x,emissivemap_pars_fragment:vx,colorspace_fragment:xx,colorspace_pars_fragment:yx,envmap_fragment:Sx,envmap_common_pars_fragment:Mx,envmap_pars_fragment:wx,envmap_pars_vertex:Tx,envmap_physical_pars_fragment:Ox,envmap_vertex:bx,fog_vertex:Ex,fog_pars_vertex:Ax,fog_fragment:Rx,fog_pars_fragment:Cx,gradientmap_pars_fragment:Px,lightmap_fragment:Lx,lightmap_pars_fragment:Ix,lights_lambert_fragment:Dx,lights_lambert_pars_fragment:Ux,lights_pars_begin:Nx,lights_toon_fragment:Fx,lights_toon_pars_fragment:zx,lights_phong_fragment:Bx,lights_phong_pars_fragment:kx,lights_physical_fragment:Hx,lights_physical_pars_fragment:Gx,lights_fragment_begin:Vx,lights_fragment_maps:Wx,lights_fragment_end:Xx,logdepthbuf_fragment:qx,logdepthbuf_pars_fragment:jx,logdepthbuf_pars_vertex:Yx,logdepthbuf_vertex:Kx,map_fragment:$x,map_pars_fragment:Zx,map_particle_fragment:Jx,map_particle_pars_fragment:Qx,metalnessmap_fragment:ey,metalnessmap_pars_fragment:ty,morphinstance_vertex:ny,morphcolor_vertex:iy,morphnormal_vertex:ry,morphtarget_pars_vertex:sy,morphtarget_vertex:oy,normal_fragment_begin:ay,normal_fragment_maps:ly,normal_pars_fragment:cy,normal_pars_vertex:uy,normal_vertex:hy,normalmap_pars_fragment:fy,clearcoat_normal_fragment_begin:dy,clearcoat_normal_fragment_maps:py,clearcoat_pars_fragment:my,iridescence_pars_fragment:gy,opaque_fragment:_y,packing:vy,premultiplied_alpha_fragment:xy,project_vertex:yy,dithering_fragment:Sy,dithering_pars_fragment:My,roughnessmap_fragment:wy,roughnessmap_pars_fragment:Ty,shadowmap_pars_fragment:by,shadowmap_pars_vertex:Ey,shadowmap_vertex:Ay,shadowmask_pars_fragment:Ry,skinbase_vertex:Cy,skinning_pars_vertex:Py,skinning_vertex:Ly,skinnormal_vertex:Iy,specularmap_fragment:Dy,specularmap_pars_fragment:Uy,tonemapping_fragment:Ny,tonemapping_pars_fragment:Oy,transmission_fragment:Fy,transmission_pars_fragment:zy,uv_pars_fragment:By,uv_pars_vertex:ky,uv_vertex:Hy,worldpos_vertex:Gy,background_vert:Vy,background_frag:Wy,backgroundCube_vert:Xy,backgroundCube_frag:qy,cube_vert:jy,cube_frag:Yy,depth_vert:Ky,depth_frag:$y,distanceRGBA_vert:Zy,distanceRGBA_frag:Jy,equirect_vert:Qy,equirect_frag:e1,linedashed_vert:t1,linedashed_frag:n1,meshbasic_vert:i1,meshbasic_frag:r1,meshlambert_vert:s1,meshlambert_frag:o1,meshmatcap_vert:a1,meshmatcap_frag:l1,meshnormal_vert:c1,meshnormal_frag:u1,meshphong_vert:h1,meshphong_frag:f1,meshphysical_vert:d1,meshphysical_frag:p1,meshtoon_vert:m1,meshtoon_frag:g1,points_vert:_1,points_frag:v1,shadow_vert:x1,shadow_frag:y1,sprite_vert:S1,sprite_frag:M1},xe={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Pi={basic:{uniforms:Pn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Pn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ge(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Pn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Pn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Pn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new ge(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Pn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Pn([xe.points,xe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Pn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Pn([xe.common,xe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Pn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Pn([xe.sprite,xe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Pn([xe.common,xe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Pn([xe.lights,xe.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Pi.physical={uniforms:Pn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const ll={r:0,b:0,g:0},Zr=new Vi,w1=new je;function T1(r,e,t,n,i,s,o){const a=new ge(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(p,m){let S=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=(m.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),S=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===pc)?(u===void 0&&(u=new Mt(new za(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:Mo(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Zr.copy(m.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(w1.makeRotationFromEuler(Zr)),u.material.toneMapped=mt.getTransfer(y.colorSpace)!==Ct,(h!==y||d!==y.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Mt(new Ba(2,2),new Tt({name:"BackgroundMaterial",uniforms:Mo(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=mt.getTransfer(y.colorSpace)!==Ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(ll,Wm(r)),n.buffers.color.setClear(ll.r,ll.g,ll.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function b1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(v,C,I,O,k){let B=!1;const H=h(O,I,C);s!==H&&(s=H,c(s.object)),B=f(v,O,I,k),B&&g(v,O,I,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,b(v,C,I,O),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function h(v,C,I){const O=I.wireframe===!0;let k=n[v.id];k===void 0&&(k={},n[v.id]=k);let B=k[C.id];B===void 0&&(B={},k[C.id]=B);let H=B[O];return H===void 0&&(H=d(l()),B[O]=H),H}function d(v){const C=[],I=[],O=[];for(let k=0;k<t;k++)C[k]=0,I[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,C,I,O){const k=s.attributes,B=C.attributes;let H=0;const G=I.getAttributes();for(const W in G)if(G[W].location>=0){const U=k[W];let he=B[W];if(he===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(he=v.instanceColor)),U===void 0||U.attribute!==he||he&&U.data!==he.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function g(v,C,I,O){const k={},B=C.attributes;let H=0;const G=I.getAttributes();for(const W in G)if(G[W].location>=0){let U=B[W];U===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(U=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(U=v.instanceColor));const he={};he.attribute=U,U&&U.data&&(he.data=U.data),k[W]=he,H++}s.attributes=k,s.attributesNum=H,s.index=O}function _(){const v=s.newAttributes;for(let C=0,I=v.length;C<I;C++)v[C]=0}function p(v){m(v,0)}function m(v,C){const I=s.newAttributes,O=s.enabledAttributes,k=s.attributeDivisors;I[v]=1,O[v]===0&&(r.enableVertexAttribArray(v),O[v]=1),k[v]!==C&&(r.vertexAttribDivisor(v,C),k[v]=C)}function S(){const v=s.newAttributes,C=s.enabledAttributes;for(let I=0,O=C.length;I<O;I++)C[I]!==v[I]&&(r.disableVertexAttribArray(I),C[I]=0)}function y(v,C,I,O,k,B,H){H===!0?r.vertexAttribIPointer(v,C,I,k,B):r.vertexAttribPointer(v,C,I,O,k,B)}function b(v,C,I,O){_();const k=O.attributes,B=I.getAttributes(),H=C.defaultAttributeValues;for(const G in B){const W=B[G];if(W.location>=0){let J=k[G];if(J===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){const U=J.normalized,he=J.itemSize,Ue=e.get(J);if(Ue===void 0)continue;const We=Ue.buffer,$=Ue.type,se=Ue.bytesPerElement,me=$===r.INT||$===r.UNSIGNED_INT||J.gpuType===Em;if(J.isInterleavedBufferAttribute){const ce=J.data,te=ce.stride,A=J.offset;if(ce.isInstancedInterleavedBuffer){for(let N=0;N<W.locationSize;N++)m(W.location+N,ce.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let N=0;N<W.locationSize;N++)p(W.location+N);r.bindBuffer(r.ARRAY_BUFFER,We);for(let N=0;N<W.locationSize;N++)y(W.location+N,he/W.locationSize,$,U,te*se,(A+he/W.locationSize*N)*se,me)}else{if(J.isInstancedBufferAttribute){for(let ce=0;ce<W.locationSize;ce++)m(W.location+ce,J.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ce=0;ce<W.locationSize;ce++)p(W.location+ce);r.bindBuffer(r.ARRAY_BUFFER,We);for(let ce=0;ce<W.locationSize;ce++)y(W.location+ce,he/W.locationSize,$,U,he*se,he/W.locationSize*ce*se,me)}}else if(H!==void 0){const U=H[G];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(W.location,U);break;case 3:r.vertexAttrib3fv(W.location,U);break;case 4:r.vertexAttrib4fv(W.location,U);break;default:r.vertexAttrib1fv(W.location,U)}}}}S()}function L(){T();for(const v in n){const C=n[v];for(const I in C){const O=C[I];for(const k in O)u(O[k].object),delete O[k];delete C[I]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const C=n[v.id];for(const I in C){const O=C[I];for(const k in O)u(O[k].object),delete O[k];delete C[I]}delete n[v.id]}function M(v){for(const C in n){const I=n[C];if(I[v.id]===void 0)continue;const O=I[v.id];for(const k in O)u(O[k].object),delete O[k];delete I[v.id]}}function T(){x(),o=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:x,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function E1(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<u;d++)this.render(l[d],c[d]);else{h.multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function A1(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(y){if(y==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_TEXTURE_SIZE),d=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),p=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),m=u>0,S=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:p,vertexTextures:m,maxSamples:S}}function R1(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ns,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,y=S*4;let b=m.clippingState||null;l.value=b,b=u(g,d,y,f);for(let L=0;L!==y;++L)b[L]=t[L];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,b=f;y!==_;++y,b+=4)o.copy(h[y]).applyMatrix4(S,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function C1(r){let e=new WeakMap;function t(o,a){return a===Hu?o.mapping=go:a===Gu&&(o.mapping=_o),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hu||a===Gu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jm(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ch extends Ah{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const no=4,_d=[.125,.215,.35,.446,.526,.582],ls=20,$c=new Ch,vd=new ge;let Zc=null,Jc=0,Qc=0,eu=!1;const is=(1+Math.sqrt(5))/2,qs=1/is,xd=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,is,qs),new z(0,is,-qs),new z(qs,0,is),new z(-qs,0,is),new z(is,qs,0),new z(-is,qs,0)];class yd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Jc,Qc),this._renderer.xr.enabled=eu,e.scissorTest=!1,cl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===go||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:wa,format:di,colorSpace:Qt,depthBuffer:!1},i=Sd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P1(s)),this._blurMaterial=L1(s,e,t)}return i}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,$c)}_sceneToCubeUV(e,t,n,i){const a=new Sn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(vd),u.toneMapping=Or,u.autoClear=!1;const f=new Ni({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new Mt(new za,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(vd),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;cl(i,S*y,m>2?y:0,y,y),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===go||e.mapping===_o;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Md());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;cl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,$c)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=xd[(i-1)%xd.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ls-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):ls;p>ls&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ls}`);const m=[];let S=0;for(let M=0;M<ls;++M){const T=M/_,x=Math.exp(-T*T/2);m.push(x),M===0?S+=x:M<p&&(S+=2*x)}for(let M=0;M<m.length;M++)m[M]=m[M]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const b=this._sizeLods[i],L=3*b*(i>y-no?i-y+no:0),w=4*(this._cubeSize-b);cl(t,L,w,3*b,2*b),l.setRenderTarget(t),l.render(h,$c)}}function P1(r){const e=[],t=[],n=[];let i=r;const s=r-no+1+_d.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-no?l=_d[o-r+no-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*f),y=new Float32Array(p*g*f),b=new Float32Array(m*g*f);for(let w=0;w<f;w++){const M=w%3*2/3-1,T=w>2?0:-1,x=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];S.set(x,_*g*w),y.set(d,p*g*w);const v=[w,w,w,w,w,w];b.set(v,m*g*w)}const L=new Ht;L.setAttribute("position",new kt(S,_)),L.setAttribute("uv",new kt(y,p)),L.setAttribute("faceIndex",new kt(b,m)),e.push(L),i>no&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sd(r,e,t){const n=new Bn(r,e,t);return n.texture.mapping=pc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function L1(r,e,t){const n=new Float32Array(ls),i=new z(0,1,0);return new Tt({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Md(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function wd(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I1(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hu||l===Gu,u=l===go||l===_o;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new yd(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new yd(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function D1(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function U1(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let y=0,b=S.length;y<b;y+=3){const L=S[y+0],w=S[y+1],M=S[y+2];d.push(L,w,w,M,M,L)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,b=S.length/3-1;y<b;y+=3){const L=y+0,w=y+1,M=y+2;d.push(L,w,w,M,M,L)}}else return;const p=new(Fm(d)?Vm:Gm)(d,1);p.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function N1(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,f){f!==0&&(r.drawElementsInstanced(n,d,s,h*o,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<f;_++)this.render(h[_]/o,d[_]);else{g.multiDrawElementsWEBGL(n,d,0,s,h,0,f);let _=0;for(let p=0;p<f;p++)_+=d[p];t.update(_,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function O1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function F1(r,e,t){const n=new WeakMap,i=new ut;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let v=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),p===!0&&(b=3);let L=a.attributes.position.count*b,w=1;L>e.maxTextureSize&&(w=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const M=new Float32Array(L*w*4*h),T=new km(M,L,w,h);T.type=Ui,T.needsUpdate=!0;const x=b*4;for(let C=0;C<h;C++){const I=m[C],O=S[C],k=y[C],B=L*w*4*C;for(let H=0;H<I.count;H++){const G=H*x;g===!0&&(i.fromBufferAttribute(I,H),M[B+G+0]=i.x,M[B+G+1]=i.y,M[B+G+2]=i.z,M[B+G+3]=0),_===!0&&(i.fromBufferAttribute(O,H),M[B+G+4]=i.x,M[B+G+5]=i.y,M[B+G+6]=i.z,M[B+G+7]=0),p===!0&&(i.fromBufferAttribute(k,H),M[B+G+8]=i.x,M[B+G+9]=i.y,M[B+G+10]=i.z,M[B+G+11]=k.itemSize===4?i.w:1)}}d={count:h,texture:T,size:new pe(L,w)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function z1(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Lh extends Jt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:oo,u!==oo&&u!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===oo&&(n=Ss),n===void 0&&u===xo&&(n=Do),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Km=new Jt,$m=new Lh(1,1);$m.compareFunction=Om;const Zm=new km,Jm=new bv,Qm=new qm,Td=[],bd=[],Ed=new Float32Array(16),Ad=new Float32Array(9),Rd=new Float32Array(4);function Uo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Td[i];if(s===void 0&&(s=new Float32Array(i),Td[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function on(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function an(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function gc(r,e){let t=bd[e];t===void 0&&(t=new Int32Array(e),bd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function B1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function k1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2fv(this.addr,e),an(t,e)}}function H1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;r.uniform3fv(this.addr,e),an(t,e)}}function G1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4fv(this.addr,e),an(t,e)}}function V1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Rd.set(n),r.uniformMatrix2fv(this.addr,!1,Rd),an(t,n)}}function W1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Ad.set(n),r.uniformMatrix3fv(this.addr,!1,Ad),an(t,n)}}function X1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Ed.set(n),r.uniformMatrix4fv(this.addr,!1,Ed),an(t,n)}}function q1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function j1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2iv(this.addr,e),an(t,e)}}function Y1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3iv(this.addr,e),an(t,e)}}function K1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4iv(this.addr,e),an(t,e)}}function $1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Z1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2uiv(this.addr,e),an(t,e)}}function J1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3uiv(this.addr,e),an(t,e)}}function Q1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4uiv(this.addr,e),an(t,e)}}function eS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?$m:Km;t.setTexture2D(e||s,i)}function tS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jm,i)}function nS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qm,i)}function iS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zm,i)}function rS(r){switch(r){case 5126:return B1;case 35664:return k1;case 35665:return H1;case 35666:return G1;case 35674:return V1;case 35675:return W1;case 35676:return X1;case 5124:case 35670:return q1;case 35667:case 35671:return j1;case 35668:case 35672:return Y1;case 35669:case 35673:return K1;case 5125:return $1;case 36294:return Z1;case 36295:return J1;case 36296:return Q1;case 35678:case 36198:case 36298:case 36306:case 35682:return eS;case 35679:case 36299:case 36307:return tS;case 35680:case 36300:case 36308:case 36293:return nS;case 36289:case 36303:case 36311:case 36292:return iS}}function sS(r,e){r.uniform1fv(this.addr,e)}function oS(r,e){const t=Uo(e,this.size,2);r.uniform2fv(this.addr,t)}function aS(r,e){const t=Uo(e,this.size,3);r.uniform3fv(this.addr,t)}function lS(r,e){const t=Uo(e,this.size,4);r.uniform4fv(this.addr,t)}function cS(r,e){const t=Uo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function uS(r,e){const t=Uo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function hS(r,e){const t=Uo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function fS(r,e){r.uniform1iv(this.addr,e)}function dS(r,e){r.uniform2iv(this.addr,e)}function pS(r,e){r.uniform3iv(this.addr,e)}function mS(r,e){r.uniform4iv(this.addr,e)}function gS(r,e){r.uniform1uiv(this.addr,e)}function _S(r,e){r.uniform2uiv(this.addr,e)}function vS(r,e){r.uniform3uiv(this.addr,e)}function xS(r,e){r.uniform4uiv(this.addr,e)}function yS(r,e,t){const n=this.cache,i=e.length,s=gc(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Km,s[o])}function SS(r,e,t){const n=this.cache,i=e.length,s=gc(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Jm,s[o])}function MS(r,e,t){const n=this.cache,i=e.length,s=gc(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Qm,s[o])}function wS(r,e,t){const n=this.cache,i=e.length,s=gc(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Zm,s[o])}function TS(r){switch(r){case 5126:return sS;case 35664:return oS;case 35665:return aS;case 35666:return lS;case 35674:return cS;case 35675:return uS;case 35676:return hS;case 5124:case 35670:return fS;case 35667:case 35671:return dS;case 35668:case 35672:return pS;case 35669:case 35673:return mS;case 5125:return gS;case 36294:return _S;case 36295:return vS;case 36296:return xS;case 35678:case 36198:case 36298:case 36306:case 35682:return yS;case 35679:case 36299:case 36307:return SS;case 35680:case 36300:case 36308:case 36293:return MS;case 36289:case 36303:case 36311:case 36292:return wS}}class bS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rS(t.type)}}class ES{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TS(t.type)}}class AS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const tu=/(\w+)(\])?(\[|\.)?/g;function Cd(r,e){r.seq.push(e),r.map[e.id]=e}function RS(r,e,t){const n=r.name,i=n.length;for(tu.lastIndex=0;;){const s=tu.exec(n),o=tu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Cd(t,c===void 0?new bS(a,r,e):new ES(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new AS(a),Cd(t,h)),t=h}}}class Dl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);RS(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Pd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const CS=37297;let PS=0;function LS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function IS(r){const e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(r);let n;switch(e===t?n="":e===Yl&&t===jl?n="LinearDisplayP3ToLinearSRGB":e===jl&&t===Yl&&(n="LinearSRGBToLinearDisplayP3"),r){case Qt:case mc:return[n,"LinearTransferOETF"];case ct:case Th:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Ld(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+LS(r.getShaderSource(e),o)}else return i}function DS(r,e){const t=IS(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function US(r,e){let t;switch(e){case R_:t="Linear";break;case C_:t="Reinhard";break;case P_:t="OptimizedCineon";break;case L_:t="ACESFilmic";break;case D_:t="AgX";break;case U_:t="Neutral";break;case I_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function NS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function OS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function FS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Jo(r){return r!==""}function Id(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xu(r){return r.replace(zS,kS)}const BS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kS(r,e){let t=Je[e];if(t===void 0){const n=BS.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xu(t)}const HS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ud(r){return r.replace(HS,GS)}function GS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Nd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function VS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Sm?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===e_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function WS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case go:case _o:e="ENVMAP_TYPE_CUBE";break;case pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case _o:e="ENVMAP_MODE_REFRACTION";break}return e}function qS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Mm:e="ENVMAP_BLENDING_MULTIPLY";break;case E_:e="ENVMAP_BLENDING_MIX";break;case A_:e="ENVMAP_BLENDING_ADD";break}return e}function jS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function YS(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=VS(t),c=WS(t),u=XS(t),h=qS(t),d=jS(t),f=NS(t),g=OS(s),_=i.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jo).join(`
`),m.length>0&&(m+=`
`)):(p=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),m=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?Je.tonemapping_pars_fragment:"",t.toneMapping!==Or?US("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,DS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jo).join(`
`)),o=Xu(o),o=Id(o,t),o=Dd(o,t),a=Xu(a),a=Id(a,t),a=Dd(a,t),o=Ud(o),a=Ud(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===$f?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=S+p+o,b=S+m+a,L=Pd(i,i.VERTEX_SHADER,y),w=Pd(i,i.FRAGMENT_SHADER,b);i.attachShader(_,L),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function M(C){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(L).trim(),k=i.getShaderInfoLog(w).trim();let B=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,L,w);else{const G=Ld(i,L,"vertex"),W=Ld(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+G+`
`+W)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(O===""||k==="")&&(H=!1);H&&(C.diagnostics={runnable:B,programLog:I,vertexShader:{log:O,prefix:p},fragmentShader:{log:k,prefix:m}})}i.deleteShader(L),i.deleteShader(w),T=new Dl(i,_),x=FS(i,_)}let T;this.getUniforms=function(){return T===void 0&&M(this),T};let x;this.getAttributes=function(){return x===void 0&&M(this),x};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,CS)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=PS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=w,this}let KS=0;class $S{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ZS(e),t.set(e,n)),n}}class ZS{constructor(e){this.id=KS++,this.code=e,this.usedTimes=0}}function JS(r,e,t,n,i,s,o){const a=new Eh,l=new $S,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,v,C,I,O){const k=I.fog,B=O.geometry,H=x.isMeshStandardMaterial?I.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||H),W=G&&G.mapping===pc?G.image.height:null,J=g[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const U=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,he=U!==void 0?U.length:0;let Ue=0;B.morphAttributes.position!==void 0&&(Ue=1),B.morphAttributes.normal!==void 0&&(Ue=2),B.morphAttributes.color!==void 0&&(Ue=3);let We,$,se,me;if(J){const bt=Pi[J];We=bt.vertexShader,$=bt.fragmentShader}else We=x.vertexShader,$=x.fragmentShader,l.update(x),se=l.getVertexShaderID(x),me=l.getFragmentShaderID(x);const ce=r.getRenderTarget(),te=O.isInstancedMesh===!0,A=O.isBatchedMesh===!0,N=!!x.map,P=!!x.matcap,Z=!!G,X=!!x.aoMap,ie=!!x.lightMap,ae=!!x.bumpMap,Me=!!x.normalMap,E=!!x.displacementMap,R=!!x.emissiveMap,j=!!x.metalnessMap,ee=!!x.roughnessMap,Q=x.anisotropy>0,ne=x.clearcoat>0,we=x.iridescence>0,le=x.sheen>0,ue=x.transmission>0,Re=Q&&!!x.anisotropyMap,oe=ne&&!!x.clearcoatMap,_e=ne&&!!x.clearcoatNormalMap,Ne=ne&&!!x.clearcoatRoughnessMap,Se=we&&!!x.iridescenceMap,Ae=we&&!!x.iridescenceThicknessMap,De=le&&!!x.sheenColorMap,Ke=le&&!!x.sheenRoughnessMap,Ye=!!x.specularMap,$e=!!x.specularColorMap,ke=!!x.specularIntensityMap,Te=ue&&!!x.transmissionMap,F=ue&&!!x.thicknessMap,re=!!x.gradientMap,de=!!x.alphaMap,be=x.alphaTest>0,Ce=!!x.alphaHash,tt=!!x.extensions;let ht=Or;x.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ht=r.toneMapping);const pt={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:We,fragmentShader:$,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:A,instancing:te,instancingColor:te&&O.instanceColor!==null,instancingMorph:te&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?r.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Qt,alphaToCoverage:!!x.alphaToCoverage,map:N,matcap:P,envMap:Z,envMapMode:Z&&G.mapping,envMapCubeUVHeight:W,aoMap:X,lightMap:ie,bumpMap:ae,normalMap:Me,displacementMap:d&&E,emissiveMap:R,normalMapObjectSpace:Me&&x.normalMapType===K_,normalMapTangentSpace:Me&&x.normalMapType===Nm,metalnessMap:j,roughnessMap:ee,anisotropy:Q,anisotropyMap:Re,clearcoat:ne,clearcoatMap:oe,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ne,iridescence:we,iridescenceMap:Se,iridescenceThicknessMap:Ae,sheen:le,sheenColorMap:De,sheenRoughnessMap:Ke,specularMap:Ye,specularColorMap:$e,specularIntensityMap:ke,transmission:ue,transmissionMap:Te,thicknessMap:F,gradientMap:re,opaque:x.transparent===!1&&x.blending===fs&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:be,alphaHash:Ce,combine:x.combine,mapUv:N&&_(x.map.channel),aoMapUv:X&&_(x.aoMap.channel),lightMapUv:ie&&_(x.lightMap.channel),bumpMapUv:ae&&_(x.bumpMap.channel),normalMapUv:Me&&_(x.normalMap.channel),displacementMapUv:E&&_(x.displacementMap.channel),emissiveMapUv:R&&_(x.emissiveMap.channel),metalnessMapUv:j&&_(x.metalnessMap.channel),roughnessMapUv:ee&&_(x.roughnessMap.channel),anisotropyMapUv:Re&&_(x.anisotropyMap.channel),clearcoatMapUv:oe&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&_(x.sheenRoughnessMap.channel),specularMapUv:Ye&&_(x.specularMap.channel),specularColorMapUv:$e&&_(x.specularColorMap.channel),specularIntensityMapUv:ke&&_(x.specularIntensityMap.channel),transmissionMapUv:Te&&_(x.transmissionMap.channel),thicknessMapUv:F&&_(x.thicknessMap.channel),alphaMapUv:de&&_(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Me||Q),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(N||de),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ue,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:ht,useLegacyLights:r._useLegacyLights,decodeVideoTexture:N&&x.map.isVideoTexture===!0&&mt.getTransfer(x.map.colorSpace)===Ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mn,flipSided:x.side===qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:tt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:tt&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function m(x){const v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)v.push(C),v.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(S(v,x),y(v,x),v.push(r.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function S(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function y(x,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),x.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.useLegacyLights&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),x.push(a.mask)}function b(x){const v=g[x.type];let C;if(v){const I=Pi[v];C=Fv.clone(I.uniforms)}else C=x.uniforms;return C}function L(x,v){let C;for(let I=0,O=u.length;I<O;I++){const k=u[I];if(k.cacheKey===v){C=k,++C.usedTimes;break}}return C===void 0&&(C=new YS(r,v,x,s),u.push(C)),C}function w(x){if(--x.usedTimes===0){const v=u.indexOf(x);u[v]=u[u.length-1],u.pop(),x.destroy()}}function M(x){l.remove(x)}function T(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:b,acquireProgram:L,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:T}}function QS(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function eM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Od(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Fd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,d,f,g,_,p){const m=o(h,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(h,d,f,g,_,p){const m=o(h,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||eM),n.length>1&&n.sort(d||Od),i.length>1&&i.sort(d||Od)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function tM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Fd,r.set(n,[o])):i>=s.length?(o=new Fd,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function nM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ge};break;case"SpotLight":t={position:new z,direction:new z,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function iM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let rM=0;function sM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function oM(r){const e=new nM,t=iM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,s=new je,o=new je;function a(c,u){let h=0,d=0,f=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let g=0,_=0,p=0,m=0,S=0,y=0,b=0,L=0,w=0,M=0,T=0;c.sort(sM);const x=u===!0?Math.PI:1;for(let C=0,I=c.length;C<I;C++){const O=c[C],k=O.color,B=O.intensity,H=O.distance,G=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=k.r*B*x,d+=k.g*B*x,f+=k.b*B*x;else if(O.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(O.sh.coefficients[W],B);T++}else if(O.isDirectionalLight){const W=e.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity*x),O.castShadow){const J=O.shadow,U=t.get(O);U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,n.directionalShadow[g]=U,n.directionalShadowMap[g]=G,n.directionalShadowMatrix[g]=O.shadow.matrix,y++}n.directional[g]=W,g++}else if(O.isSpotLight){const W=e.get(O);W.position.setFromMatrixPosition(O.matrixWorld),W.color.copy(k).multiplyScalar(B*x),W.distance=H,W.coneCos=Math.cos(O.angle),W.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),W.decay=O.decay,n.spot[p]=W;const J=O.shadow;if(O.map&&(n.spotLightMap[w]=O.map,w++,J.updateMatrices(O),O.castShadow&&M++),n.spotLightMatrix[p]=J.matrix,O.castShadow){const U=t.get(O);U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,n.spotShadow[p]=U,n.spotShadowMap[p]=G,L++}p++}else if(O.isRectAreaLight){const W=e.get(O);W.color.copy(k).multiplyScalar(B),W.halfWidth.set(O.width*.5,0,0),W.halfHeight.set(0,O.height*.5,0),n.rectArea[m]=W,m++}else if(O.isPointLight){const W=e.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity*x),W.distance=O.distance,W.decay=O.decay,O.castShadow){const J=O.shadow,U=t.get(O);U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,U.shadowCameraNear=J.camera.near,U.shadowCameraFar=J.camera.far,n.pointShadow[_]=U,n.pointShadowMap[_]=G,n.pointShadowMatrix[_]=O.shadow.matrix,b++}n.point[_]=W,_++}else if(O.isHemisphereLight){const W=e.get(O);W.skyColor.copy(O.color).multiplyScalar(B*x),W.groundColor.copy(O.groundColor).multiplyScalar(B*x),n.hemi[S]=W,S++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==g||v.pointLength!==_||v.spotLength!==p||v.rectAreaLength!==m||v.hemiLength!==S||v.numDirectionalShadows!==y||v.numPointShadows!==b||v.numSpotShadows!==L||v.numSpotMaps!==w||v.numLightProbes!==T)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=m,n.point.length=_,n.hemi.length=S,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=L+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,v.directionalLength=g,v.pointLength=_,v.spotLength=p,v.rectAreaLength=m,v.hemiLength=S,v.numDirectionalShadows=y,v.numPointShadows=b,v.numSpotShadows=L,v.numSpotMaps=w,v.numLightProbes=T,n.version=rM++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const y=c[m];if(y.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),h++}else if(y.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function zd(r){const e=new oM(r),t=[],n=[];function i(){t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function aM(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new zd(r),e.set(i,[a])):s>=o.length?(a=new zd(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class lM extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oa,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cM extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fM(r,e,t){let n=new Rh;const i=new pe,s=new pe,o=new ut,a=new lM({depthPacking:Y_}),l=new cM,c={},u=t.maxTextureSize,h={[Hi]:qt,[qt]:Hi,[Mn]:Mn},d=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:uM,fragmentShader:hM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sm;let m=this.type;this.render=function(w,M,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const x=r.getRenderTarget(),v=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Vn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=m!==nr&&this.type===nr,k=m===nr&&this.type!==nr;for(let B=0,H=w.length;B<H;B++){const G=w[B],W=G.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const J=W.getFrameExtents();if(i.multiply(J),s.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,W.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,W.mapSize.y=s.y)),W.map===null||O===!0||k===!0){const he=this.type!==nr?{minFilter:Fn,magFilter:Fn}:{};W.map!==null&&W.map.dispose(),W.map=new Bn(i.x,i.y,he),W.map.texture.name=G.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const U=W.getViewportCount();for(let he=0;he<U;he++){const Ue=W.getViewport(he);o.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),I.viewport(o),W.updateMatrices(G,he),n=W.getFrustum(),b(M,T,W.camera,G,this.type)}W.isPointLightShadow!==!0&&this.type===nr&&S(W,T),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(x,v,C)};function S(w,M){const T=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Bn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(M,null,T,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(M,null,T,f,_,null)}function y(w,M,T,x){let v=null;const C=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)v=C;else if(v=T.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const I=v.uuid,O=M.uuid;let k=c[I];k===void 0&&(k={},c[I]=k);let B=k[O];B===void 0&&(B=v.clone(),k[O]=B,M.addEventListener("dispose",L)),v=B}if(v.visible=M.visible,v.wireframe=M.wireframe,x===nr?v.side=M.shadowSide!==null?M.shadowSide:M.side:v.side=M.shadowSide!==null?M.shadowSide:h[M.side],v.alphaMap=M.alphaMap,v.alphaTest=M.alphaTest,v.map=M.map,v.clipShadows=M.clipShadows,v.clippingPlanes=M.clippingPlanes,v.clipIntersection=M.clipIntersection,v.displacementMap=M.displacementMap,v.displacementScale=M.displacementScale,v.displacementBias=M.displacementBias,v.wireframeLinewidth=M.wireframeLinewidth,v.linewidth=M.linewidth,T.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=r.properties.get(v);I.light=T}return v}function b(w,M,T,x,v){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===nr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const O=e.update(w),k=w.material;if(Array.isArray(k)){const B=O.groups;for(let H=0,G=B.length;H<G;H++){const W=B[H],J=k[W.materialIndex];if(J&&J.visible){const U=y(w,J,x,v);w.onBeforeShadow(r,w,M,T,O,U,W),r.renderBufferDirect(T,null,O,U,w,W),w.onAfterShadow(r,w,M,T,O,U,W)}}}else if(k.visible){const B=y(w,k,x,v);w.onBeforeShadow(r,w,M,T,O,B,null),r.renderBufferDirect(T,null,O,B,w,null),w.onAfterShadow(r,w,M,T,O,B,null)}}const I=w.children;for(let O=0,k=I.length;O<k;O++)b(I[O],M,T,x,v)}function L(w){w.target.removeEventListener("dispose",L);for(const T in c){const x=c[T],v=w.target.uuid;v in x&&(x[v].dispose(),delete x[v])}}}function dM(r){function e(){let F=!1;const re=new ut;let de=null;const be=new ut(0,0,0,0);return{setMask:function(Ce){de!==Ce&&!F&&(r.colorMask(Ce,Ce,Ce,Ce),de=Ce)},setLocked:function(Ce){F=Ce},setClear:function(Ce,tt,ht,pt,bt){bt===!0&&(Ce*=pt,tt*=pt,ht*=pt),re.set(Ce,tt,ht,pt),be.equals(re)===!1&&(r.clearColor(Ce,tt,ht,pt),be.copy(re))},reset:function(){F=!1,de=null,be.set(-1,0,0,0)}}}function t(){let F=!1,re=null,de=null,be=null;return{setTest:function(Ce){Ce?me(r.DEPTH_TEST):ce(r.DEPTH_TEST)},setMask:function(Ce){re!==Ce&&!F&&(r.depthMask(Ce),re=Ce)},setFunc:function(Ce){if(de!==Ce){switch(Ce){case x_:r.depthFunc(r.NEVER);break;case y_:r.depthFunc(r.ALWAYS);break;case S_:r.depthFunc(r.LESS);break;case Wl:r.depthFunc(r.LEQUAL);break;case M_:r.depthFunc(r.EQUAL);break;case w_:r.depthFunc(r.GEQUAL);break;case T_:r.depthFunc(r.GREATER);break;case b_:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=Ce}},setLocked:function(Ce){F=Ce},setClear:function(Ce){be!==Ce&&(r.clearDepth(Ce),be=Ce)},reset:function(){F=!1,re=null,de=null,be=null}}}function n(){let F=!1,re=null,de=null,be=null,Ce=null,tt=null,ht=null,pt=null,bt=null;return{setTest:function(dt){F||(dt?me(r.STENCIL_TEST):ce(r.STENCIL_TEST))},setMask:function(dt){re!==dt&&!F&&(r.stencilMask(dt),re=dt)},setFunc:function(dt,Fe,Le){(de!==dt||be!==Fe||Ce!==Le)&&(r.stencilFunc(dt,Fe,Le),de=dt,be=Fe,Ce=Le)},setOp:function(dt,Fe,Le){(tt!==dt||ht!==Fe||pt!==Le)&&(r.stencilOp(dt,Fe,Le),tt=dt,ht=Fe,pt=Le)},setLocked:function(dt){F=dt},setClear:function(dt){bt!==dt&&(r.clearStencil(dt),bt=dt)},reset:function(){F=!1,re=null,de=null,be=null,Ce=null,tt=null,ht=null,pt=null,bt=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,S=null,y=null,b=null,L=null,w=new ge(0,0,0),M=0,T=!1,x=null,v=null,C=null,I=null,O=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,H=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=H>=1):G.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=H>=2);let W=null,J={};const U=r.getParameter(r.SCISSOR_BOX),he=r.getParameter(r.VIEWPORT),Ue=new ut().fromArray(U),We=new ut().fromArray(he);function $(F,re,de,be){const Ce=new Uint8Array(4),tt=r.createTexture();r.bindTexture(F,tt),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ht=0;ht<de;ht++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(re,0,r.RGBA,1,1,be,0,r.RGBA,r.UNSIGNED_BYTE,Ce):r.texImage2D(re+ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ce);return tt}const se={};se[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(r.DEPTH_TEST),s.setFunc(Wl),ae(!1),Me(_f),me(r.CULL_FACE),X(Vn);function me(F){c[F]!==!0&&(r.enable(F),c[F]=!0)}function ce(F){c[F]!==!1&&(r.disable(F),c[F]=!1)}function te(F,re){return u[F]!==re?(r.bindFramebuffer(F,re),u[F]=re,F===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=re),F===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=re),!0):!1}function A(F,re){let de=d,be=!1;if(F){de=h.get(re),de===void 0&&(de=[],h.set(re,de));const Ce=F.textures;if(de.length!==Ce.length||de[0]!==r.COLOR_ATTACHMENT0){for(let tt=0,ht=Ce.length;tt<ht;tt++)de[tt]=r.COLOR_ATTACHMENT0+tt;de.length=Ce.length,be=!0}}else de[0]!==r.BACK&&(de[0]=r.BACK,be=!0);be&&r.drawBuffers(de)}function N(F){return f!==F?(r.useProgram(F),f=F,!0):!1}const P={[as]:r.FUNC_ADD,[n_]:r.FUNC_SUBTRACT,[i_]:r.FUNC_REVERSE_SUBTRACT};P[r_]=r.MIN,P[s_]=r.MAX;const Z={[o_]:r.ZERO,[a_]:r.ONE,[l_]:r.SRC_COLOR,[Bu]:r.SRC_ALPHA,[p_]:r.SRC_ALPHA_SATURATE,[f_]:r.DST_COLOR,[u_]:r.DST_ALPHA,[c_]:r.ONE_MINUS_SRC_COLOR,[ku]:r.ONE_MINUS_SRC_ALPHA,[d_]:r.ONE_MINUS_DST_COLOR,[h_]:r.ONE_MINUS_DST_ALPHA,[m_]:r.CONSTANT_COLOR,[g_]:r.ONE_MINUS_CONSTANT_COLOR,[__]:r.CONSTANT_ALPHA,[v_]:r.ONE_MINUS_CONSTANT_ALPHA};function X(F,re,de,be,Ce,tt,ht,pt,bt,dt){if(F===Vn){g===!0&&(ce(r.BLEND),g=!1);return}if(g===!1&&(me(r.BLEND),g=!0),F!==t_){if(F!==_||dt!==T){if((p!==as||y!==as)&&(r.blendEquation(r.FUNC_ADD),p=as,y=as),dt)switch(F){case fs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gi:r.blendFunc(r.ONE,r.ONE);break;case vf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case fs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gi:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case vf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}m=null,S=null,b=null,L=null,w.set(0,0,0),M=0,_=F,T=dt}return}Ce=Ce||re,tt=tt||de,ht=ht||be,(re!==p||Ce!==y)&&(r.blendEquationSeparate(P[re],P[Ce]),p=re,y=Ce),(de!==m||be!==S||tt!==b||ht!==L)&&(r.blendFuncSeparate(Z[de],Z[be],Z[tt],Z[ht]),m=de,S=be,b=tt,L=ht),(pt.equals(w)===!1||bt!==M)&&(r.blendColor(pt.r,pt.g,pt.b,bt),w.copy(pt),M=bt),_=F,T=!1}function ie(F,re){F.side===Mn?ce(r.CULL_FACE):me(r.CULL_FACE);let de=F.side===qt;re&&(de=!de),ae(de),F.blending===fs&&F.transparent===!1?X(Vn):X(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),i.setMask(F.colorWrite);const be=F.stencilWrite;o.setTest(be),be&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),R(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function ae(F){x!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),x=F)}function Me(F){F!==J0?(me(r.CULL_FACE),F!==v&&(F===_f?r.cullFace(r.BACK):F===Q0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ce(r.CULL_FACE),v=F}function E(F){F!==C&&(B&&r.lineWidth(F),C=F)}function R(F,re,de){F?(me(r.POLYGON_OFFSET_FILL),(I!==re||O!==de)&&(r.polygonOffset(re,de),I=re,O=de)):ce(r.POLYGON_OFFSET_FILL)}function j(F){F?me(r.SCISSOR_TEST):ce(r.SCISSOR_TEST)}function ee(F){F===void 0&&(F=r.TEXTURE0+k-1),W!==F&&(r.activeTexture(F),W=F)}function Q(F,re,de){de===void 0&&(W===null?de=r.TEXTURE0+k-1:de=W);let be=J[de];be===void 0&&(be={type:void 0,texture:void 0},J[de]=be),(be.type!==F||be.texture!==re)&&(W!==de&&(r.activeTexture(de),W=de),r.bindTexture(F,re||se[F]),be.type=F,be.texture=re)}function ne(){const F=J[W];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function we(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ke(F){Ue.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Ue.copy(F))}function Ye(F){We.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),We.copy(F))}function $e(F,re){let de=l.get(re);de===void 0&&(de=new WeakMap,l.set(re,de));let be=de.get(F);be===void 0&&(be=r.getUniformBlockIndex(re,F.name),de.set(F,be))}function ke(F,re){const be=l.get(re).get(F);a.get(re)!==be&&(r.uniformBlockBinding(re,be,F.__bindingPointIndex),a.set(re,be))}function Te(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},W=null,J={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,S=null,y=null,b=null,L=null,w=new ge(0,0,0),M=0,T=!1,x=null,v=null,C=null,I=null,O=null,Ue.set(0,0,r.canvas.width,r.canvas.height),We.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:me,disable:ce,bindFramebuffer:te,drawBuffers:A,useProgram:N,setBlending:X,setMaterial:ie,setFlipSided:ae,setCullFace:Me,setLineWidth:E,setPolygonOffset:R,setScissorTest:j,activeTexture:ee,bindTexture:Q,unbindTexture:ne,compressedTexImage2D:we,compressedTexImage3D:le,texImage2D:Ae,texImage3D:De,updateUBOMapping:$e,uniformBlockBinding:ke,texStorage2D:Ne,texStorage3D:Se,texSubImage2D:ue,texSubImage3D:Re,compressedTexSubImage2D:oe,compressedTexSubImage3D:_e,scissor:Ke,viewport:Ye,reset:Te}}function pM(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,R){return f?new OffscreenCanvas(E,R):ba("canvas")}function _(E,R,j){let ee=1;const Q=Me(E);if((Q.width>j||Q.height>j)&&(ee=j/Math.max(Q.width,Q.height)),ee<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ne=Math.floor(ee*Q.width),we=Math.floor(ee*Q.height);h===void 0&&(h=g(ne,we));const le=R?g(ne,we):h;return le.width=ne,le.height=we,le.getContext("2d").drawImage(E,0,0,ne,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ne+"x"+we+")."),le}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==Fn&&E.minFilter!==sn}function m(E){r.generateMipmap(E)}function S(E,R,j,ee,Q=!1){if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ne=R;if(R===r.RED&&(j===r.FLOAT&&(ne=r.R32F),j===r.HALF_FLOAT&&(ne=r.R16F),j===r.UNSIGNED_BYTE&&(ne=r.R8)),R===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(ne=r.R8UI),j===r.UNSIGNED_SHORT&&(ne=r.R16UI),j===r.UNSIGNED_INT&&(ne=r.R32UI),j===r.BYTE&&(ne=r.R8I),j===r.SHORT&&(ne=r.R16I),j===r.INT&&(ne=r.R32I)),R===r.RG&&(j===r.FLOAT&&(ne=r.RG32F),j===r.HALF_FLOAT&&(ne=r.RG16F),j===r.UNSIGNED_BYTE&&(ne=r.RG8)),R===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(ne=r.RG8UI),j===r.UNSIGNED_SHORT&&(ne=r.RG16UI),j===r.UNSIGNED_INT&&(ne=r.RG32UI),j===r.BYTE&&(ne=r.RG8I),j===r.SHORT&&(ne=r.RG16I),j===r.INT&&(ne=r.RG32I)),R===r.RGB&&j===r.UNSIGNED_INT_5_9_9_9_REV&&(ne=r.RGB9_E5),R===r.RGBA){const we=Q?ql:mt.getTransfer(ee);j===r.FLOAT&&(ne=r.RGBA32F),j===r.HALF_FLOAT&&(ne=r.RGBA16F),j===r.UNSIGNED_BYTE&&(ne=we===Ct?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function y(E,R){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Fn&&E.minFilter!==sn?Math.log2(Math.max(R.width,R.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?R.mipmaps.length:1}function b(E){const R=E.target;R.removeEventListener("dispose",b),w(R),R.isVideoTexture&&u.delete(R)}function L(E){const R=E.target;R.removeEventListener("dispose",L),T(R)}function w(E){const R=n.get(E);if(R.__webglInit===void 0)return;const j=E.source,ee=d.get(j);if(ee){const Q=ee[R.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(E),Object.keys(ee).length===0&&d.delete(j)}n.remove(E)}function M(E){const R=n.get(E);r.deleteTexture(R.__webglTexture);const j=E.source,ee=d.get(j);delete ee[R.__cacheKey],o.memory.textures--}function T(E){const R=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(R.__webglFramebuffer[ee]))for(let Q=0;Q<R.__webglFramebuffer[ee].length;Q++)r.deleteFramebuffer(R.__webglFramebuffer[ee][Q]);else r.deleteFramebuffer(R.__webglFramebuffer[ee]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[ee])}else{if(Array.isArray(R.__webglFramebuffer))for(let ee=0;ee<R.__webglFramebuffer.length;ee++)r.deleteFramebuffer(R.__webglFramebuffer[ee]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ee=0;ee<R.__webglColorRenderbuffer.length;ee++)R.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[ee]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const j=E.textures;for(let ee=0,Q=j.length;ee<Q;ee++){const ne=n.get(j[ee]);ne.__webglTexture&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(j[ee])}n.remove(E)}let x=0;function v(){x=0}function C(){const E=x;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),x+=1,E}function I(E){const R=[];return R.push(E.wrapS),R.push(E.wrapT),R.push(E.wrapR||0),R.push(E.magFilter),R.push(E.minFilter),R.push(E.anisotropy),R.push(E.internalFormat),R.push(E.format),R.push(E.type),R.push(E.generateMipmaps),R.push(E.premultiplyAlpha),R.push(E.flipY),R.push(E.unpackAlignment),R.push(E.colorSpace),R.join()}function O(E,R){const j=n.get(E);if(E.isVideoTexture&&ie(E),E.isRenderTargetTexture===!1&&E.version>0&&j.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(j,E,R);return}}t.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+R)}function k(E,R){const j=n.get(E);if(E.version>0&&j.__version!==E.version){Ue(j,E,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+R)}function B(E,R){const j=n.get(E);if(E.version>0&&j.__version!==E.version){Ue(j,E,R);return}t.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+R)}function H(E,R){const j=n.get(E);if(E.version>0&&j.__version!==E.version){We(j,E,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+R)}const G={[vo]:r.REPEAT,[Cr]:r.CLAMP_TO_EDGE,[Xl]:r.MIRRORED_REPEAT},W={[Fn]:r.NEAREST,[Tm]:r.NEAREST_MIPMAP_NEAREST,[Zo]:r.NEAREST_MIPMAP_LINEAR,[sn]:r.LINEAR,[Il]:r.LINEAR_MIPMAP_NEAREST,[ar]:r.LINEAR_MIPMAP_LINEAR},J={[$_]:r.NEVER,[nv]:r.ALWAYS,[Z_]:r.LESS,[Om]:r.LEQUAL,[J_]:r.EQUAL,[tv]:r.GEQUAL,[Q_]:r.GREATER,[ev]:r.NOTEQUAL};function U(E,R){if(R.type===Ui&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===sn||R.magFilter===Il||R.magFilter===Zo||R.magFilter===ar||R.minFilter===sn||R.minFilter===Il||R.minFilter===Zo||R.minFilter===ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(E,r.TEXTURE_WRAP_S,G[R.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,G[R.wrapT]),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,G[R.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,W[R.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,W[R.minFilter]),R.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,J[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Fn||R.minFilter!==Zo&&R.minFilter!==ar||R.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");r.texParameterf(E,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function he(E,R){let j=!1;E.__webglInit===void 0&&(E.__webglInit=!0,R.addEventListener("dispose",b));const ee=R.source;let Q=d.get(ee);Q===void 0&&(Q={},d.set(ee,Q));const ne=I(R);if(ne!==E.__cacheKey){Q[ne]===void 0&&(Q[ne]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,j=!0),Q[ne].usedTimes++;const we=Q[E.__cacheKey];we!==void 0&&(Q[E.__cacheKey].usedTimes--,we.usedTimes===0&&M(R)),E.__cacheKey=ne,E.__webglTexture=Q[ne].texture}return j}function Ue(E,R,j){let ee=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ee=r.TEXTURE_3D);const Q=he(E,R),ne=R.source;t.bindTexture(ee,E.__webglTexture,r.TEXTURE0+j);const we=n.get(ne);if(ne.version!==we.__version||Q===!0){t.activeTexture(r.TEXTURE0+j);const le=mt.getPrimaries(mt.workingColorSpace),ue=R.colorSpace===Li?null:mt.getPrimaries(R.colorSpace),Re=R.colorSpace===Li||le===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let oe=_(R.image,!1,i.maxTextureSize);oe=ae(R,oe);const _e=s.convert(R.format,R.colorSpace),Ne=s.convert(R.type);let Se=S(R.internalFormat,_e,Ne,R.colorSpace,R.isVideoTexture);U(ee,R);let Ae;const De=R.mipmaps,Ke=R.isVideoTexture!==!0&&Se!==Dm,Ye=we.__version===void 0||Q===!0,$e=ne.dataReady,ke=y(R,oe);if(R.isDepthTexture)Se=r.DEPTH_COMPONENT16,R.type===Ui?Se=r.DEPTH_COMPONENT32F:R.type===Ss?Se=r.DEPTH_COMPONENT24:R.type===Do&&(Se=r.DEPTH24_STENCIL8),Ye&&(Ke?t.texStorage2D(r.TEXTURE_2D,1,Se,oe.width,oe.height):t.texImage2D(r.TEXTURE_2D,0,Se,oe.width,oe.height,0,_e,Ne,null));else if(R.isDataTexture)if(De.length>0){Ke&&Ye&&t.texStorage2D(r.TEXTURE_2D,ke,Se,De[0].width,De[0].height);for(let Te=0,F=De.length;Te<F;Te++)Ae=De[Te],Ke?$e&&t.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ae.width,Ae.height,_e,Ne,Ae.data):t.texImage2D(r.TEXTURE_2D,Te,Se,Ae.width,Ae.height,0,_e,Ne,Ae.data);R.generateMipmaps=!1}else Ke?(Ye&&t.texStorage2D(r.TEXTURE_2D,ke,Se,oe.width,oe.height),$e&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe.width,oe.height,_e,Ne,oe.data)):t.texImage2D(r.TEXTURE_2D,0,Se,oe.width,oe.height,0,_e,Ne,oe.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Ke&&Ye&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,Se,De[0].width,De[0].height,oe.depth);for(let Te=0,F=De.length;Te<F;Te++)Ae=De[Te],R.format!==di?_e!==null?Ke?$e&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Ae.width,Ae.height,oe.depth,_e,Ae.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,Se,Ae.width,Ae.height,oe.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?$e&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Ae.width,Ae.height,oe.depth,_e,Ne,Ae.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Te,Se,Ae.width,Ae.height,oe.depth,0,_e,Ne,Ae.data)}else{Ke&&Ye&&t.texStorage2D(r.TEXTURE_2D,ke,Se,De[0].width,De[0].height);for(let Te=0,F=De.length;Te<F;Te++)Ae=De[Te],R.format!==di?_e!==null?Ke?$e&&t.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,Ae.width,Ae.height,_e,Ae.data):t.compressedTexImage2D(r.TEXTURE_2D,Te,Se,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?$e&&t.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ae.width,Ae.height,_e,Ne,Ae.data):t.texImage2D(r.TEXTURE_2D,Te,Se,Ae.width,Ae.height,0,_e,Ne,Ae.data)}else if(R.isDataArrayTexture)Ke?(Ye&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,Se,oe.width,oe.height,oe.depth),$e&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,_e,Ne,oe.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Se,oe.width,oe.height,oe.depth,0,_e,Ne,oe.data);else if(R.isData3DTexture)Ke?(Ye&&t.texStorage3D(r.TEXTURE_3D,ke,Se,oe.width,oe.height,oe.depth),$e&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,_e,Ne,oe.data)):t.texImage3D(r.TEXTURE_3D,0,Se,oe.width,oe.height,oe.depth,0,_e,Ne,oe.data);else if(R.isFramebufferTexture){if(Ye)if(Ke)t.texStorage2D(r.TEXTURE_2D,ke,Se,oe.width,oe.height);else{let Te=oe.width,F=oe.height;for(let re=0;re<ke;re++)t.texImage2D(r.TEXTURE_2D,re,Se,Te,F,0,_e,Ne,null),Te>>=1,F>>=1}}else if(De.length>0){if(Ke&&Ye){const Te=Me(De[0]);t.texStorage2D(r.TEXTURE_2D,ke,Se,Te.width,Te.height)}for(let Te=0,F=De.length;Te<F;Te++)Ae=De[Te],Ke?$e&&t.texSubImage2D(r.TEXTURE_2D,Te,0,0,_e,Ne,Ae):t.texImage2D(r.TEXTURE_2D,Te,Se,_e,Ne,Ae);R.generateMipmaps=!1}else if(Ke){if(Ye){const Te=Me(oe);t.texStorage2D(r.TEXTURE_2D,ke,Se,Te.width,Te.height)}$e&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,_e,Ne,oe)}else t.texImage2D(r.TEXTURE_2D,0,Se,_e,Ne,oe);p(R)&&m(ee),we.__version=ne.version,R.onUpdate&&R.onUpdate(R)}E.__version=R.version}function We(E,R,j){if(R.image.length!==6)return;const ee=he(E,R),Q=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,E.__webglTexture,r.TEXTURE0+j);const ne=n.get(Q);if(Q.version!==ne.__version||ee===!0){t.activeTexture(r.TEXTURE0+j);const we=mt.getPrimaries(mt.workingColorSpace),le=R.colorSpace===Li?null:mt.getPrimaries(R.colorSpace),ue=R.colorSpace===Li||we===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Re=R.isCompressedTexture||R.image[0].isCompressedTexture,oe=R.image[0]&&R.image[0].isDataTexture,_e=[];for(let F=0;F<6;F++)!Re&&!oe?_e[F]=_(R.image[F],!0,i.maxCubemapSize):_e[F]=oe?R.image[F].image:R.image[F],_e[F]=ae(R,_e[F]);const Ne=_e[0],Se=s.convert(R.format,R.colorSpace),Ae=s.convert(R.type),De=S(R.internalFormat,Se,Ae,R.colorSpace),Ke=R.isVideoTexture!==!0,Ye=ne.__version===void 0||ee===!0,$e=Q.dataReady;let ke=y(R,Ne);U(r.TEXTURE_CUBE_MAP,R);let Te;if(Re){Ke&&Ye&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,De,Ne.width,Ne.height);for(let F=0;F<6;F++){Te=_e[F].mipmaps;for(let re=0;re<Te.length;re++){const de=Te[re];R.format!==di?Se!==null?Ke?$e&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,re,0,0,de.width,de.height,Se,de.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,re,De,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?$e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,re,0,0,de.width,de.height,Se,Ae,de.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,re,De,de.width,de.height,0,Se,Ae,de.data)}}}else{if(Te=R.mipmaps,Ke&&Ye){Te.length>0&&ke++;const F=Me(_e[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,De,F.width,F.height)}for(let F=0;F<6;F++)if(oe){Ke?$e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,_e[F].width,_e[F].height,Se,Ae,_e[F].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,De,_e[F].width,_e[F].height,0,Se,Ae,_e[F].data);for(let re=0;re<Te.length;re++){const be=Te[re].image[F].image;Ke?$e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,re+1,0,0,be.width,be.height,Se,Ae,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,re+1,De,be.width,be.height,0,Se,Ae,be.data)}}else{Ke?$e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Se,Ae,_e[F]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,De,Se,Ae,_e[F]);for(let re=0;re<Te.length;re++){const de=Te[re];Ke?$e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,re+1,0,0,Se,Ae,de.image[F]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,re+1,De,Se,Ae,de.image[F])}}}p(R)&&m(r.TEXTURE_CUBE_MAP),ne.__version=Q.version,R.onUpdate&&R.onUpdate(R)}E.__version=R.version}function $(E,R,j,ee,Q,ne){const we=s.convert(j.format,j.colorSpace),le=s.convert(j.type),ue=S(j.internalFormat,we,le,j.colorSpace);if(!n.get(R).__hasExternalTextures){const oe=Math.max(1,R.width>>ne),_e=Math.max(1,R.height>>ne);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,ne,ue,oe,_e,R.depth,0,we,le,null):t.texImage2D(Q,ne,ue,oe,_e,0,we,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),X(R)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,Q,n.get(j).__webglTexture,0,Z(R)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,Q,n.get(j).__webglTexture,ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(E,R,j){if(r.bindRenderbuffer(r.RENDERBUFFER,E),R.depthBuffer&&!R.stencilBuffer){let ee=r.DEPTH_COMPONENT24;if(j||X(R)){const Q=R.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Ui?ee=r.DEPTH_COMPONENT32F:Q.type===Ss&&(ee=r.DEPTH_COMPONENT24));const ne=Z(R);X(R)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,ee,R.width,R.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,ee,R.width,R.height)}else r.renderbufferStorage(r.RENDERBUFFER,ee,R.width,R.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,E)}else if(R.depthBuffer&&R.stencilBuffer){const ee=Z(R);j&&X(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,R.width,R.height):X(R)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,E)}else{const ee=R.textures;for(let Q=0;Q<ee.length;Q++){const ne=ee[Q],we=s.convert(ne.format,ne.colorSpace),le=s.convert(ne.type),ue=S(ne.internalFormat,we,le,ne.colorSpace),Re=Z(R);j&&X(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,ue,R.width,R.height):X(R)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,ue,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,ue,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function me(E,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,E),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),O(R.depthTexture,0);const ee=n.get(R.depthTexture).__webglTexture,Q=Z(R);if(R.depthTexture.format===oo)X(R)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(R.depthTexture.format===xo)X(R)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ce(E){const R=n.get(E),j=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!R.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");me(R.__webglFramebuffer,E)}else if(j){R.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[ee]),R.__webglDepthbuffer[ee]=r.createRenderbuffer(),se(R.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=r.createRenderbuffer(),se(R.__webglDepthbuffer,E,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function te(E,R,j){const ee=n.get(E);R!==void 0&&$(ee.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&ce(E)}function A(E){const R=E.texture,j=n.get(E),ee=n.get(R);E.addEventListener("dispose",L);const Q=E.textures,ne=E.isWebGLCubeRenderTarget===!0,we=Q.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=R.version,o.memory.textures++),ne){j.__webglFramebuffer=[];for(let le=0;le<6;le++)if(R.mipmaps&&R.mipmaps.length>0){j.__webglFramebuffer[le]=[];for(let ue=0;ue<R.mipmaps.length;ue++)j.__webglFramebuffer[le][ue]=r.createFramebuffer()}else j.__webglFramebuffer[le]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){j.__webglFramebuffer=[];for(let le=0;le<R.mipmaps.length;le++)j.__webglFramebuffer[le]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(we)for(let le=0,ue=Q.length;le<ue;le++){const Re=n.get(Q[le]);Re.__webglTexture===void 0&&(Re.__webglTexture=r.createTexture(),o.memory.textures++)}if(E.samples>0&&X(E)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const ue=Q[le];j.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[le]);const Re=s.convert(ue.format,ue.colorSpace),oe=s.convert(ue.type),_e=S(ue.internalFormat,Re,oe,ue.colorSpace,E.isXRRenderTarget===!0),Ne=Z(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,_e,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,j.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),se(j.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),U(r.TEXTURE_CUBE_MAP,R);for(let le=0;le<6;le++)if(R.mipmaps&&R.mipmaps.length>0)for(let ue=0;ue<R.mipmaps.length;ue++)$(j.__webglFramebuffer[le][ue],E,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,ue);else $(j.__webglFramebuffer[le],E,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(R)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let le=0,ue=Q.length;le<ue;le++){const Re=Q[le],oe=n.get(Re);t.bindTexture(r.TEXTURE_2D,oe.__webglTexture),U(r.TEXTURE_2D,Re),$(j.__webglFramebuffer,E,Re,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),p(Re)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,ee.__webglTexture),U(le,R),R.mipmaps&&R.mipmaps.length>0)for(let ue=0;ue<R.mipmaps.length;ue++)$(j.__webglFramebuffer[ue],E,R,r.COLOR_ATTACHMENT0,le,ue);else $(j.__webglFramebuffer,E,R,r.COLOR_ATTACHMENT0,le,0);p(R)&&m(le),t.unbindTexture()}E.depthBuffer&&ce(E)}function N(E){const R=E.textures;for(let j=0,ee=R.length;j<ee;j++){const Q=R[j];if(p(Q)){const ne=E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,we=n.get(Q).__webglTexture;t.bindTexture(ne,we),m(ne),t.unbindTexture()}}}function P(E){if(E.samples>0&&X(E)===!1){const R=E.textures,j=E.width,ee=E.height;let Q=r.COLOR_BUFFER_BIT;const ne=[],we=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=n.get(E),ue=R.length>1;if(ue)for(let Re=0;Re<R.length;Re++)t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Re=0;Re<R.length;Re++){ne.push(r.COLOR_ATTACHMENT0+Re),E.depthBuffer&&ne.push(we);const oe=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(oe===!1&&(E.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&le.__isTransmissionRenderTarget!==!0&&(Q|=r.STENCIL_BUFFER_BIT)),ue&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,le.__webglColorRenderbuffer[Re]),oe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[we]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[we])),ue){const _e=n.get(R[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,j,ee,0,0,j,ee,Q,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let Re=0;Re<R.length;Re++){t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,le.__webglColorRenderbuffer[Re]);const oe=n.get(R[Re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,oe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Z(E){return Math.min(i.maxSamples,E.samples)}function X(E){const R=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ie(E){const R=o.render.frame;u.get(E)!==R&&(u.set(E,R),E.update())}function ae(E,R){const j=E.colorSpace,ee=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||j!==Qt&&j!==Li&&(mt.getTransfer(j)===Ct?(ee!==di||Q!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),R}function Me(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=v,this.setTexture2D=O,this.setTexture2DArray=k,this.setTexture3D=B,this.setTextureCube=H,this.rebindTextures=te,this.setupRenderTarget=A,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=$,this.useMultisampledRTT=X}function mM(r,e){function t(n,i=Li){let s;const o=mt.getTransfer(i);if(n===zn)return r.UNSIGNED_BYTE;if(n===Am)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Rm)return r.UNSIGNED_SHORT_5_5_5_1;if(n===B_)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===F_)return r.BYTE;if(n===z_)return r.SHORT;if(n===bm)return r.UNSIGNED_SHORT;if(n===Em)return r.INT;if(n===Ss)return r.UNSIGNED_INT;if(n===Ui)return r.FLOAT;if(n===wa)return r.HALF_FLOAT;if(n===k_)return r.ALPHA;if(n===H_)return r.RGB;if(n===di)return r.RGBA;if(n===G_)return r.LUMINANCE;if(n===V_)return r.LUMINANCE_ALPHA;if(n===oo)return r.DEPTH_COMPONENT;if(n===xo)return r.DEPTH_STENCIL;if(n===Cm)return r.RED;if(n===Pm)return r.RED_INTEGER;if(n===W_)return r.RG;if(n===Lm)return r.RG_INTEGER;if(n===Im)return r.RGBA_INTEGER;if(n===Ec||n===Ac||n===Rc||n===Cc)if(o===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ec)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ec)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ac)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sf||n===Mf||n===wf||n===Tf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Sf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dm)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===bf||n===Ef)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===bf)return o===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ef)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Af||n===Rf||n===Cf||n===Pf||n===Lf||n===If||n===Df||n===Uf||n===Nf||n===Of||n===Ff||n===zf||n===Bf||n===kf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Af)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===If)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Df)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Of)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ff)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kf)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pc||n===Hf||n===Gf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Pc)return o===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===X_||n===Vf||n===Wf||n===Xf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Pc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Vf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Do?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class gM extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tn extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _M={type:"move"};class nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_M)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const vM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Jt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Tt({vertexShader:vM,fragmentShader:xM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mt(new Ba(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class SM extends dr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new yM,p=t.getContextAttributes();let m=null,S=null;const y=[],b=[],L=new pe;let w=null;const M=new Sn;M.layers.enable(1),M.viewport=new ut;const T=new Sn;T.layers.enable(2),T.viewport=new ut;const x=[M,T],v=new gM;v.layers.enable(1),v.layers.enable(2);let C=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=y[$];return se===void 0&&(se=new nu,y[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=y[$];return se===void 0&&(se=new nu,y[$]=se),se.getGripSpace()},this.getHand=function($){let se=y[$];return se===void 0&&(se=new nu,y[$]=se),se.getHandSpace()};function O($){const se=b.indexOf($.inputSource);if(se===-1)return;const me=y[se];me!==void 0&&(me.update($.inputSource,$.frame,c||o),me.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",B);for(let $=0;$<y.length;$++){const se=b[$];se!==null&&(b[$]=null,y[$].disconnect(se))}C=null,I=null,_.reset(),e.setRenderTarget(m),f=null,d=null,h=null,i=null,S=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",k),i.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const se={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Bn(f.framebufferWidth,f.framebufferHeight,{format:di,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let se=null,me=null,ce=null;p.depth&&(ce=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=p.stencil?xo:oo,me=p.stencil?Do:Ss);const te={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(te),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Bn(d.textureWidth,d.textureHeight,{format:di,type:zn,depthTexture:new Lh(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const A=e.properties.get(S);A.__ignoreDepthValues=d.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),We.setContext(i),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function B($){for(let se=0;se<$.removed.length;se++){const me=$.removed[se],ce=b.indexOf(me);ce>=0&&(b[ce]=null,y[ce].disconnect(me))}for(let se=0;se<$.added.length;se++){const me=$.added[se];let ce=b.indexOf(me);if(ce===-1){for(let A=0;A<y.length;A++)if(A>=b.length){b.push(me),ce=A;break}else if(b[A]===null){b[A]=me,ce=A;break}if(ce===-1)break}const te=y[ce];te&&te.connect(me)}}const H=new z,G=new z;function W($,se,me){H.setFromMatrixPosition(se.matrixWorld),G.setFromMatrixPosition(me.matrixWorld);const ce=H.distanceTo(G),te=se.projectionMatrix.elements,A=me.projectionMatrix.elements,N=te[14]/(te[10]-1),P=te[14]/(te[10]+1),Z=(te[9]+1)/te[5],X=(te[9]-1)/te[5],ie=(te[8]-1)/te[0],ae=(A[8]+1)/A[0],Me=N*ie,E=N*ae,R=ce/(-ie+ae),j=R*-ie;se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(j),$.translateZ(R),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const ee=N+R,Q=P+R,ne=Me-j,we=E+(ce-j),le=Z*P/Q*ee,ue=X*P/Q*ee;$.projectionMatrix.makePerspective(ne,we,le,ue,ee,Q),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function J($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;_.texture!==null&&($.near=_.depthNear,$.far=_.depthFar),v.near=T.near=M.near=$.near,v.far=T.far=M.far=$.far,(C!==v.near||I!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,I=v.far,M.near=C,M.far=I,T.near=C,T.far=I,M.updateProjectionMatrix(),T.updateProjectionMatrix(),$.updateProjectionMatrix());const se=$.parent,me=v.cameras;J(v,se);for(let ce=0;ce<me.length;ce++)J(me[ce],se);me.length===2?W(v,M,T):v.projectionMatrix.copy(M.projectionMatrix),U($,v,se)};function U($,se,me){me===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=So*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null};let he=null;function Ue($,se){if(u=se.getViewerPose(c||o),g=se,u!==null){const me=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let ce=!1;me.length!==v.cameras.length&&(v.cameras.length=0,ce=!0);for(let A=0;A<me.length;A++){const N=me[A];let P=null;if(f!==null)P=f.getViewport(N);else{const X=h.getViewSubImage(d,N);P=X.viewport,A===0&&(e.setRenderTargetTextures(S,X.colorTexture,d.ignoreDepthValues?void 0:X.depthStencilTexture),e.setRenderTarget(S))}let Z=x[A];Z===void 0&&(Z=new Sn,Z.layers.enable(A),Z.viewport=new ut,x[A]=Z),Z.matrix.fromArray(N.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(N.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(P.x,P.y,P.width,P.height),A===0&&(v.matrix.copy(Z.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ce===!0&&v.cameras.push(Z)}const te=i.enabledFeatures;if(te&&te.includes("depth-sensing")){const A=h.getDepthInformation(me[0]);A&&A.isValid&&A.texture&&_.init(e,A,i.renderState)}}for(let me=0;me<y.length;me++){const ce=b[me],te=y[me];ce!==null&&te!==void 0&&te.update(ce,se,c||o)}_.render(e,v),he&&he($,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const We=new Ym;We.setAnimationLoop(Ue),this.setAnimationLoop=function($){he=$},this.dispose=function(){}}}const Jr=new Vi,MM=new je;function wM(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Wm(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,y,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===qt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===qt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),y=S.envMap,b=S.envMapRotation;if(y&&(p.envMap.value=y,Jr.copy(b),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),p.envMapRotation.value.setFromMatrix4(MM.makeRotationFromEuler(Jr)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const L=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*L,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function TM(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const b=y.program;n.uniformBlockBinding(S,b)}function c(S,y){let b=i[S.id];b===void 0&&(g(S),b=u(S),i[S.id]=b,S.addEventListener("dispose",p));const L=y.program;n.updateUBOMapping(S,L);const w=e.render.frame;s[S.id]!==w&&(d(S),s[S.id]=w)}function u(S){const y=h();S.__bindingPointIndex=y;const b=r.createBuffer(),L=S.__size,w=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,L,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,b),b}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=i[S.id],b=S.uniforms,L=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,M=b.length;w<M;w++){const T=Array.isArray(b[w])?b[w]:[b[w]];for(let x=0,v=T.length;x<v;x++){const C=T[x];if(f(C,w,x,L)===!0){const I=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let B=0;B<O.length;B++){const H=O[B],G=_(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,I+k,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,k),k+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(S,y,b,L){const w=S.value,M=y+"_"+b;if(L[M]===void 0)return typeof w=="number"||typeof w=="boolean"?L[M]=w:L[M]=w.clone(),!0;{const T=L[M];if(typeof w=="number"||typeof w=="boolean"){if(T!==w)return L[M]=w,!0}else if(T.equals(w)===!1)return T.copy(w),!0}return!1}function g(S){const y=S.uniforms;let b=0;const L=16;for(let M=0,T=y.length;M<T;M++){const x=Array.isArray(y[M])?y[M]:[y[M]];for(let v=0,C=x.length;v<C;v++){const I=x[v],O=Array.isArray(I.value)?I.value:[I.value];for(let k=0,B=O.length;k<B;k++){const H=O[k],G=_(H),W=b%L;W!==0&&L-W<G.boundary&&(b+=L-W),I.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=G.storage}}}const w=b%L;return w>0&&(b+=L-w),S.__size=b,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class bM{constructor(e={}){const{canvas:t=xv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this._useLegacyLights=!1,this.toneMapping=Or,this.toneMappingExposure=1;const y=this;let b=!1,L=0,w=0,M=null,T=-1,x=null;const v=new ut,C=new ut;let I=null;const O=new ge(0);let k=0,B=t.width,H=t.height,G=1,W=null,J=null;const U=new ut(0,0,B,H),he=new ut(0,0,B,H);let Ue=!1;const We=new Rh;let $=!1,se=!1;const me=new je,ce=new pe,te=new z,A={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function N(){return M===null?G:1}let P=n;function Z(D,V){const Y=t.getContext(D,V);return Y!==null?Y:null}try{const D={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Io}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",be,!1),P===null){const V="webgl2";if(P=Z(V,D),P===null)throw Z(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let X,ie,ae,Me,E,R,j,ee,Q,ne,we,le,ue,Re,oe,_e,Ne,Se,Ae,De,Ke,Ye,$e,ke;function Te(){X=new D1(P),X.init(),ie=new A1(P,X,e),Ye=new mM(P,X),ae=new dM(P),Me=new O1(P),E=new QS,R=new pM(P,X,ae,E,ie,Ye,Me),j=new C1(y),ee=new I1(y),Q=new Gv(P),$e=new b1(P,Q),ne=new U1(P,Q,Me,$e),we=new z1(P,ne,Q,Me),Ae=new F1(P,ie,R),_e=new R1(E),le=new JS(y,j,ee,X,ie,$e,_e),ue=new wM(y,E),Re=new tM,oe=new aM(X),Se=new T1(y,j,ee,ae,we,d,l),Ne=new fM(y,we,ie),ke=new TM(P,Me,ie,ae),De=new E1(P,X,Me),Ke=new N1(P,X,Me),Me.programs=le.programs,y.capabilities=ie,y.extensions=X,y.properties=E,y.renderLists=Re,y.shadowMap=Ne,y.state=ae,y.info=Me}Te();const F=new SM(y,P);this.xr=F,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const D=X.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=X.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(D){D!==void 0&&(G=D,this.setSize(B,H,!1))},this.getSize=function(D){return D.set(B,H)},this.setSize=function(D,V,Y=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=D,H=V,t.width=Math.floor(D*G),t.height=Math.floor(V*G),Y===!0&&(t.style.width=D+"px",t.style.height=V+"px"),this.setViewport(0,0,D,V)},this.getDrawingBufferSize=function(D){return D.set(B*G,H*G).floor()},this.setDrawingBufferSize=function(D,V,Y){B=D,H=V,G=Y,t.width=Math.floor(D*Y),t.height=Math.floor(V*Y),this.setViewport(0,0,D,V)},this.getCurrentViewport=function(D){return D.copy(v)},this.getViewport=function(D){return D.copy(U)},this.setViewport=function(D,V,Y,K){D.isVector4?U.set(D.x,D.y,D.z,D.w):U.set(D,V,Y,K),ae.viewport(v.copy(U).multiplyScalar(G).round())},this.getScissor=function(D){return D.copy(he)},this.setScissor=function(D,V,Y,K){D.isVector4?he.set(D.x,D.y,D.z,D.w):he.set(D,V,Y,K),ae.scissor(C.copy(he).multiplyScalar(G).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(D){ae.setScissorTest(Ue=D)},this.setOpaqueSort=function(D){W=D},this.setTransparentSort=function(D){J=D},this.getClearColor=function(D){return D.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(D=!0,V=!0,Y=!0){let K=0;if(D){let q=!1;if(M!==null){const fe=M.texture.format;q=fe===Im||fe===Lm||fe===Pm}if(q){const fe=M.texture.type,ye=fe===zn||fe===Ss||fe===bm||fe===Do||fe===Am||fe===Rm,Oe=Se.getClearColor(),He=Se.getClearAlpha(),Ie=Oe.r,Pe=Oe.g,Be=Oe.b;ye?(f[0]=Ie,f[1]=Pe,f[2]=Be,f[3]=He,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=Ie,g[1]=Pe,g[2]=Be,g[3]=He,P.clearBufferiv(P.COLOR,0,g))}else K|=P.COLOR_BUFFER_BIT}V&&(K|=P.DEPTH_BUFFER_BIT),Y&&(K|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Re.dispose(),oe.dispose(),E.dispose(),j.dispose(),ee.dispose(),we.dispose(),$e.dispose(),ke.dispose(),le.dispose(),F.dispose(),F.removeEventListener("sessionstart",Fe),F.removeEventListener("sessionend",Le),et.stop()};function re(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const D=Me.autoReset,V=Ne.enabled,Y=Ne.autoUpdate,K=Ne.needsUpdate,q=Ne.type;Te(),Me.autoReset=D,Ne.enabled=V,Ne.autoUpdate=Y,Ne.needsUpdate=K,Ne.type=q}function be(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ce(D){const V=D.target;V.removeEventListener("dispose",Ce),tt(V)}function tt(D){ht(D),E.remove(D)}function ht(D){const V=E.get(D).programs;V!==void 0&&(V.forEach(function(Y){le.releaseProgram(Y)}),D.isShaderMaterial&&le.releaseShaderCache(D))}this.renderBufferDirect=function(D,V,Y,K,q,fe){V===null&&(V=A);const ye=q.isMesh&&q.matrixWorld.determinant()<0,Oe=It(D,V,Y,K,q);ae.setMaterial(K,ye);let He=Y.index,Ie=1;if(K.wireframe===!0){if(He=ne.getWireframeAttribute(Y),He===void 0)return;Ie=2}const Pe=Y.drawRange,Be=Y.attributes.position;let Rt=Pe.start*Ie,mn=(Pe.start+Pe.count)*Ie;fe!==null&&(Rt=Math.max(Rt,fe.start*Ie),mn=Math.min(mn,(fe.start+fe.count)*Ie)),He!==null?(Rt=Math.max(Rt,0),mn=Math.min(mn,He.count)):Be!=null&&(Rt=Math.max(Rt,0),mn=Math.min(mn,Be.count));const Dt=mn-Rt;if(Dt<0||Dt===1/0)return;$e.setup(q,K,Oe,Y,He);let Yt,_t=De;if(He!==null&&(Yt=Q.get(He),_t=Ke,_t.setIndex(Yt)),q.isMesh)K.wireframe===!0?(ae.setLineWidth(K.wireframeLinewidth*N()),_t.setMode(P.LINES)):_t.setMode(P.TRIANGLES);else if(q.isLine){let qe=K.linewidth;qe===void 0&&(qe=1),ae.setLineWidth(qe*N()),q.isLineSegments?_t.setMode(P.LINES):q.isLineLoop?_t.setMode(P.LINE_LOOP):_t.setMode(P.LINE_STRIP)}else q.isPoints?_t.setMode(P.POINTS):q.isSprite&&_t.setMode(P.TRIANGLES);if(q.isBatchedMesh)_t.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)_t.renderInstances(Rt,Dt,q.count);else if(Y.isInstancedBufferGeometry){const qe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ki=Math.min(Y.instanceCount,qe);_t.renderInstances(Rt,Dt,Ki)}else _t.render(Rt,Dt)};function pt(D,V,Y){D.transparent===!0&&D.side===Mn&&D.forceSinglePass===!1?(D.side=qt,D.needsUpdate=!0,Ze(D,V,Y),D.side=Hi,D.needsUpdate=!0,Ze(D,V,Y),D.side=Mn):Ze(D,V,Y)}this.compile=function(D,V,Y=null){Y===null&&(Y=D),p=oe.get(Y),p.init(),S.push(p),Y.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),D!==Y&&D.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights(y._useLegacyLights);const K=new Set;return D.traverse(function(q){const fe=q.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){const Oe=fe[ye];pt(Oe,Y,q),K.add(Oe)}else pt(fe,Y,q),K.add(fe)}),S.pop(),p=null,K},this.compileAsync=function(D,V,Y=null){const K=this.compile(D,V,Y);return new Promise(q=>{function fe(){if(K.forEach(function(ye){E.get(ye).currentProgram.isReady()&&K.delete(ye)}),K.size===0){q(D);return}setTimeout(fe,10)}X.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let bt=null;function dt(D){bt&&bt(D)}function Fe(){et.stop()}function Le(){et.start()}const et=new Ym;et.setAnimationLoop(dt),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(D){bt=D,F.setAnimationLoop(D),D===null?et.stop():et.start()},F.addEventListener("sessionstart",Fe),F.addEventListener("sessionend",Le),this.render=function(D,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(V),V=F.getCamera()),D.isScene===!0&&D.onBeforeRender(y,D,V,M),p=oe.get(D,S.length),p.init(),S.push(p),me.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),We.setFromProjectionMatrix(me),se=this.localClippingEnabled,$=_e.init(this.clippingPlanes,se),_=Re.get(D,m.length),_.init(),m.push(_),ve(D,V,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(W,J),this.info.render.frame++,$===!0&&_e.beginShadows();const Y=p.state.shadowsArray;if(Ne.render(Y,D,V),$===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1)&&Se.render(_,D),p.setupLights(y._useLegacyLights),V.isArrayCamera){const K=V.cameras;for(let q=0,fe=K.length;q<fe;q++){const ye=K[q];Xe(_,D,ye,ye.viewport)}}else Xe(_,D,V);M!==null&&(R.updateMultisampleRenderTarget(M),R.updateRenderTargetMipmap(M)),D.isScene===!0&&D.onAfterRender(y,D,V),$e.resetDefaultState(),T=-1,x=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ve(D,V,Y,K){if(D.visible===!1)return;if(D.layers.test(V.layers)){if(D.isGroup)Y=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(V);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||We.intersectsSprite(D)){K&&te.setFromMatrixPosition(D.matrixWorld).applyMatrix4(me);const ye=we.update(D),Oe=D.material;Oe.visible&&_.push(D,ye,Oe,Y,te.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||We.intersectsObject(D))){const ye=we.update(D),Oe=D.material;if(K&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),te.copy(D.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),te.copy(ye.boundingSphere.center)),te.applyMatrix4(D.matrixWorld).applyMatrix4(me)),Array.isArray(Oe)){const He=ye.groups;for(let Ie=0,Pe=He.length;Ie<Pe;Ie++){const Be=He[Ie],Rt=Oe[Be.materialIndex];Rt&&Rt.visible&&_.push(D,ye,Rt,Y,te.z,Be)}}else Oe.visible&&_.push(D,ye,Oe,Y,te.z,null)}}const fe=D.children;for(let ye=0,Oe=fe.length;ye<Oe;ye++)ve(fe[ye],V,Y,K)}function Xe(D,V,Y,K){const q=D.opaque,fe=D.transmissive,ye=D.transparent;p.setupLightsView(Y),$===!0&&_e.setGlobalState(y.clippingPlanes,Y),fe.length>0&&ze(q,fe,V,Y),K&&ae.viewport(v.copy(K)),q.length>0&&Ge(q,V,Y),fe.length>0&&Ge(fe,V,Y),ye.length>0&&Ge(ye,V,Y),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function ze(D,V,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new Bn(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?wa:zn,minFilter:ar,samples:4,stencilBuffer:s});const Ie=E.get(p.state.transmissionRenderTarget);Ie.__isTransmissionRenderTarget=!0}const fe=p.state.transmissionRenderTarget;y.getDrawingBufferSize(ce),fe.setSize(ce.x,ce.y);const ye=y.getRenderTarget();y.setRenderTarget(fe),y.getClearColor(O),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear();const Oe=y.toneMapping;y.toneMapping=Or,Ge(D,Y,K),R.updateMultisampleRenderTarget(fe),R.updateRenderTargetMipmap(fe);let He=!1;for(let Ie=0,Pe=V.length;Ie<Pe;Ie++){const Be=V[Ie],Rt=Be.object,mn=Be.geometry,Dt=Be.material,Yt=Be.group;if(Dt.side===Mn&&Rt.layers.test(K.layers)){const _t=Dt.side;Dt.side=qt,Dt.needsUpdate=!0,Wt(Rt,Y,K,mn,Dt,Yt),Dt.side=_t,Dt.needsUpdate=!0,He=!0}}He===!0&&(R.updateMultisampleRenderTarget(fe),R.updateRenderTargetMipmap(fe)),y.setRenderTarget(ye),y.setClearColor(O,k),y.toneMapping=Oe}function Ge(D,V,Y){const K=V.isScene===!0?V.overrideMaterial:null;for(let q=0,fe=D.length;q<fe;q++){const ye=D[q],Oe=ye.object,He=ye.geometry,Ie=K===null?ye.material:K,Pe=ye.group;Oe.layers.test(Y.layers)&&Wt(Oe,V,Y,He,Ie,Pe)}}function Wt(D,V,Y,K,q,fe){D.onBeforeRender(y,V,Y,K,q,fe),D.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),q.onBeforeRender(y,V,Y,K,D,fe),q.transparent===!0&&q.side===Mn&&q.forceSinglePass===!1?(q.side=qt,q.needsUpdate=!0,y.renderBufferDirect(Y,V,K,q,D,fe),q.side=Hi,q.needsUpdate=!0,y.renderBufferDirect(Y,V,K,q,D,fe),q.side=Mn):y.renderBufferDirect(Y,V,K,q,D,fe),D.onAfterRender(y,V,Y,K,q,fe)}function Ze(D,V,Y){V.isScene!==!0&&(V=A);const K=E.get(D),q=p.state.lights,fe=p.state.shadowsArray,ye=q.state.version,Oe=le.getParameters(D,q.state,fe,V,Y),He=le.getProgramCacheKey(Oe);let Ie=K.programs;K.environment=D.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(D.isMeshStandardMaterial?ee:j).get(D.envMap||K.environment),K.envMapRotation=K.environment!==null&&D.envMap===null?V.environmentRotation:D.envMapRotation,Ie===void 0&&(D.addEventListener("dispose",Ce),Ie=new Map,K.programs=Ie);let Pe=Ie.get(He);if(Pe!==void 0){if(K.currentProgram===Pe&&K.lightsStateVersion===ye)return en(D,Oe),Pe}else Oe.uniforms=le.getUniforms(D),D.onBuild(Y,Oe,y),D.onBeforeCompile(Oe,y),Pe=le.acquireProgram(Oe,He),Ie.set(He,Pe),K.uniforms=Oe.uniforms;const Be=K.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Be.clippingPlanes=_e.uniform),en(D,Oe),K.needsLights=gt(D),K.lightsStateVersion=ye,K.needsLights&&(Be.ambientLightColor.value=q.state.ambient,Be.lightProbe.value=q.state.probe,Be.directionalLights.value=q.state.directional,Be.directionalLightShadows.value=q.state.directionalShadow,Be.spotLights.value=q.state.spot,Be.spotLightShadows.value=q.state.spotShadow,Be.rectAreaLights.value=q.state.rectArea,Be.ltc_1.value=q.state.rectAreaLTC1,Be.ltc_2.value=q.state.rectAreaLTC2,Be.pointLights.value=q.state.point,Be.pointLightShadows.value=q.state.pointShadow,Be.hemisphereLights.value=q.state.hemi,Be.directionalShadowMap.value=q.state.directionalShadowMap,Be.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Be.spotShadowMap.value=q.state.spotShadowMap,Be.spotLightMatrix.value=q.state.spotLightMatrix,Be.spotLightMap.value=q.state.spotLightMap,Be.pointShadowMap.value=q.state.pointShadowMap,Be.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=Pe,K.uniformsList=null,Pe}function Lt(D){if(D.uniformsList===null){const V=D.currentProgram.getUniforms();D.uniformsList=Dl.seqWithValue(V.seq,D.uniforms)}return D.uniformsList}function en(D,V){const Y=E.get(D);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function It(D,V,Y,K,q){V.isScene!==!0&&(V=A),R.resetTextureUnits();const fe=V.fog,ye=K.isMeshStandardMaterial?V.environment:null,Oe=M===null?y.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Qt,He=(K.isMeshStandardMaterial?ee:j).get(K.envMap||ye),Ie=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Pe=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Be=!!Y.morphAttributes.position,Rt=!!Y.morphAttributes.normal,mn=!!Y.morphAttributes.color;let Dt=Or;K.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Dt=y.toneMapping);const Yt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_t=Yt!==void 0?Yt.length:0,qe=E.get(K),Ki=p.state.lights;if($===!0&&(se===!0||D!==x)){const oi=D===x&&K.id===T;_e.setState(K,D,oi)}let Ut=!1;K.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ki.state.version||qe.outputColorSpace!==Oe||q.isBatchedMesh&&qe.batching===!1||!q.isBatchedMesh&&qe.batching===!0||q.isInstancedMesh&&qe.instancing===!1||!q.isInstancedMesh&&qe.instancing===!0||q.isSkinnedMesh&&qe.skinning===!1||!q.isSkinnedMesh&&qe.skinning===!0||q.isInstancedMesh&&qe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&qe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&qe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&qe.instancingMorph===!1&&q.morphTexture!==null||qe.envMap!==He||K.fog===!0&&qe.fog!==fe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==_e.numPlanes||qe.numIntersection!==_e.numIntersection)||qe.vertexAlphas!==Ie||qe.vertexTangents!==Pe||qe.morphTargets!==Be||qe.morphNormals!==Rt||qe.morphColors!==mn||qe.toneMapping!==Dt||qe.morphTargetsCount!==_t)&&(Ut=!0):(Ut=!0,qe.__version=K.version);let qr=qe.currentProgram;Ut===!0&&(qr=Ze(K,V,q));let mf=!1,Fo=!1,wc=!1;const gn=qr.getUniforms(),gr=qe.uniforms;if(ae.useProgram(qr.program)&&(mf=!0,Fo=!0,wc=!0),K.id!==T&&(T=K.id,Fo=!0),mf||x!==D){gn.setValue(P,"projectionMatrix",D.projectionMatrix),gn.setValue(P,"viewMatrix",D.matrixWorldInverse);const oi=gn.map.cameraPosition;oi!==void 0&&oi.setValue(P,te.setFromMatrixPosition(D.matrixWorld)),ie.logarithmicDepthBuffer&&gn.setValue(P,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&gn.setValue(P,"isOrthographic",D.isOrthographicCamera===!0),x!==D&&(x=D,Fo=!0,wc=!0)}if(q.isSkinnedMesh){gn.setOptional(P,q,"bindMatrix"),gn.setOptional(P,q,"bindMatrixInverse");const oi=q.skeleton;oi&&(oi.boneTexture===null&&oi.computeBoneTexture(),gn.setValue(P,"boneTexture",oi.boneTexture,R))}q.isBatchedMesh&&(gn.setOptional(P,q,"batchingTexture"),gn.setValue(P,"batchingTexture",q._matricesTexture,R));const Tc=Y.morphAttributes;if((Tc.position!==void 0||Tc.normal!==void 0||Tc.color!==void 0)&&Ae.update(q,Y,qr),(Fo||qe.receiveShadow!==q.receiveShadow)&&(qe.receiveShadow=q.receiveShadow,gn.setValue(P,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(gr.envMap.value=He,gr.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&V.environment!==null&&(gr.envMapIntensity.value=V.environmentIntensity),Fo&&(gn.setValue(P,"toneMappingExposure",y.toneMappingExposure),qe.needsLights&&Et(gr,wc),fe&&K.fog===!0&&ue.refreshFogUniforms(gr,fe),ue.refreshMaterialUniforms(gr,K,G,H,p.state.transmissionRenderTarget),Dl.upload(P,Lt(qe),gr,R)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Dl.upload(P,Lt(qe),gr,R),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&gn.setValue(P,"center",q.center),gn.setValue(P,"modelViewMatrix",q.modelViewMatrix),gn.setValue(P,"normalMatrix",q.normalMatrix),gn.setValue(P,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const oi=K.uniformsGroups;for(let bc=0,Z0=oi.length;bc<Z0;bc++){const gf=oi[bc];ke.update(gf,qr),ke.bind(gf,qr)}}return qr}function Et(D,V){D.ambientLightColor.needsUpdate=V,D.lightProbe.needsUpdate=V,D.directionalLights.needsUpdate=V,D.directionalLightShadows.needsUpdate=V,D.pointLights.needsUpdate=V,D.pointLightShadows.needsUpdate=V,D.spotLights.needsUpdate=V,D.spotLightShadows.needsUpdate=V,D.rectAreaLights.needsUpdate=V,D.hemisphereLights.needsUpdate=V}function gt(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(D,V,Y){E.get(D.texture).__webglTexture=V,E.get(D.depthTexture).__webglTexture=Y;const K=E.get(D);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,V){const Y=E.get(D);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(D,V=0,Y=0){M=D,L=V,w=Y;let K=!0,q=null,fe=!1,ye=!1;if(D){const He=E.get(D);He.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(P.FRAMEBUFFER,null),K=!1):He.__webglFramebuffer===void 0?R.setupRenderTarget(D):He.__hasExternalTextures&&R.rebindTextures(D,E.get(D.texture).__webglTexture,E.get(D.depthTexture).__webglTexture);const Ie=D.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ye=!0);const Pe=E.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Pe[V])?q=Pe[V][Y]:q=Pe[V],fe=!0):D.samples>0&&R.useMultisampledRTT(D)===!1?q=E.get(D).__webglMultisampledFramebuffer:Array.isArray(Pe)?q=Pe[Y]:q=Pe,v.copy(D.viewport),C.copy(D.scissor),I=D.scissorTest}else v.copy(U).multiplyScalar(G).floor(),C.copy(he).multiplyScalar(G).floor(),I=Ue;if(ae.bindFramebuffer(P.FRAMEBUFFER,q)&&K&&ae.drawBuffers(D,q),ae.viewport(v),ae.scissor(C),ae.setScissorTest(I),fe){const He=E.get(D.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+V,He.__webglTexture,Y)}else if(ye){const He=E.get(D.texture),Ie=V||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,He.__webglTexture,Y||0,Ie)}T=-1},this.readRenderTargetPixels=function(D,V,Y,K,q,fe,ye){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=E.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ye!==void 0&&(Oe=Oe[ye]),Oe){ae.bindFramebuffer(P.FRAMEBUFFER,Oe);try{const He=D.texture,Ie=He.format,Pe=He.type;if(Ie!==di&&Ye.convert(Ie)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Pe===wa&&(X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float"));if(Pe!==zn&&Ye.convert(Pe)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&Pe!==Ui&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=D.width-K&&Y>=0&&Y<=D.height-q&&P.readPixels(V,Y,K,q,Ye.convert(Ie),Ye.convert(Pe),fe)}finally{const He=M!==null?E.get(M).__webglFramebuffer:null;ae.bindFramebuffer(P.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(D,V,Y=0){const K=Math.pow(2,-Y),q=Math.floor(V.image.width*K),fe=Math.floor(V.image.height*K);R.setTexture2D(V,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,D.x,D.y,q,fe),ae.unbindTexture()},this.copyTextureToTexture=function(D,V,Y,K=0){const q=V.image.width,fe=V.image.height,ye=Ye.convert(Y.format),Oe=Ye.convert(Y.type);R.setTexture2D(Y,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Y.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Y.unpackAlignment),V.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,K,D.x,D.y,q,fe,ye,Oe,V.image.data):V.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,K,D.x,D.y,V.mipmaps[0].width,V.mipmaps[0].height,ye,V.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,K,D.x,D.y,ye,Oe,V.image),K===0&&Y.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(D,V,Y,K,q=0){const fe=Math.round(D.max.x-D.min.x),ye=Math.round(D.max.y-D.min.y),Oe=D.max.z-D.min.z+1,He=Ye.convert(K.format),Ie=Ye.convert(K.type);let Pe;if(K.isData3DTexture)R.setTexture3D(K,0),Pe=P.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)R.setTexture2DArray(K,0),Pe=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,K.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,K.unpackAlignment);const Be=P.getParameter(P.UNPACK_ROW_LENGTH),Rt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),mn=P.getParameter(P.UNPACK_SKIP_PIXELS),Dt=P.getParameter(P.UNPACK_SKIP_ROWS),Yt=P.getParameter(P.UNPACK_SKIP_IMAGES),_t=Y.isCompressedTexture?Y.mipmaps[q]:Y.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,_t.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_t.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,D.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,D.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,D.min.z),Y.isDataTexture||Y.isData3DTexture?P.texSubImage3D(Pe,q,V.x,V.y,V.z,fe,ye,Oe,He,Ie,_t.data):K.isCompressedArrayTexture?P.compressedTexSubImage3D(Pe,q,V.x,V.y,V.z,fe,ye,Oe,He,_t.data):P.texSubImage3D(Pe,q,V.x,V.y,V.z,fe,ye,Oe,He,Ie,_t),P.pixelStorei(P.UNPACK_ROW_LENGTH,Be),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Rt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,mn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Dt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Yt),q===0&&K.generateMipmaps&&P.generateMipmap(Pe),ae.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?R.setTextureCube(D,0):D.isData3DTexture?R.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?R.setTexture2DArray(D,0):R.setTexture2D(D,0),ae.unbindTexture()},this.resetState=function(){L=0,w=0,M=null,ae.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return lr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Th?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===mc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $l extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class EM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return zm("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new z;class Ih{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ih(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Bd=new z,kd=new ut,Hd=new ut,AM=new z,Gd=new je,ul=new z,iu=new Xi,Vd=new je,ru=new Fa;class RM extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yf,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ul),this.boundingBox.expandByPoint(ul)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ul),this.boundingSphere.expandByPoint(ul)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),iu.copy(this.boundingSphere),iu.applyMatrix4(i),e.ray.intersectsSphere(iu)!==!1&&(Vd.copy(i).invert(),ru.copy(e.ray).applyMatrix4(Vd),!(this.boundingBox!==null&&ru.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ru)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===N_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;kd.fromBufferAttribute(i.attributes.skinIndex,e),Hd.fromBufferAttribute(i.attributes.skinWeight,e),Bd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Hd.getComponent(s);if(o!==0){const a=kd.getComponent(s);Gd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(AM.copy(Bd).applyMatrix4(Gd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class eg extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class tg extends Jt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Fn,u=Fn,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wd=new je,CM=new je;class Dh{constructor(e=[],t=[]){this.uuid=Ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:CM;Wd.multiplyMatrices(a,t[s]),Wd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Dh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new tg(t,e,e,di,Ui);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new eg),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Zl extends kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const js=new je,Xd=new je,hl=[],qd=new pr,PM=new je,Go=new Mt,Vo=new Xi;class LM extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,PM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),qd.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(qd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Vo.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Go.geometry=this.geometry,Go.material=this.material,Go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vo.copy(this.boundingSphere),Vo.applyMatrix4(n),e.ray.intersectsSphere(Vo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,js),Xd.multiplyMatrices(n,js),Go.matrixWorld=Xd,Go.raycast(e,hl);for(let o=0,a=hl.length;o<a;o++){const l=hl[o];l.instanceId=s,l.object=this,t.push(l)}hl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new tg(new Float32Array(i*this.count),i,this.count,Cm,Ui));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ea extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jd=new z,Yd=new z,Kd=new je,su=new Fa,fl=new Xi;class wo extends Ot{constructor(e=new Ht,t=new Ea){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)jd.fromBufferAttribute(t,i-1),Yd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=jd.distanceTo(Yd);e.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(i),fl.radius+=s,e.ray.intersectsSphere(fl)===!1)return;Kd.copy(i).invert(),su.copy(e.ray).applyMatrix4(Kd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new z,u=new z,h=new z,d=new z,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let y=m,b=S-1;y<b;y+=f){const L=g.getX(y),w=g.getX(y+1);if(c.fromBufferAttribute(p,L),u.fromBufferAttribute(p,w),su.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let y=m,b=S-1;y<b;y+=f){if(c.fromBufferAttribute(p,y),u.fromBufferAttribute(p,y+1),su.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const $d=new z,Zd=new z;class IM extends wo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)$d.fromBufferAttribute(t,i),Zd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$d.distanceTo(Zd);e.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class DM extends wo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Uh extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jd=new je,qu=new Fa,dl=new Xi,pl=new z;class Jl extends Ot{constructor(e=new Ht,t=new Uh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(i),dl.radius+=s,e.ray.intersectsSphere(dl)===!1)return;Jd.copy(i).invert(),qu.copy(e.ray).applyMatrix4(Jd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=c.getX(g);pl.fromBufferAttribute(h,p),Qd(pl,p,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)pl.fromBufferAttribute(h,g),Qd(pl,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Qd(r,e,t,n,i,s,o){const a=qu.distanceSqToPoint(r);if(a<t){const l=new z;qu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class qi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new pe:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new z,i=[],s=[],o=[],a=new z,l=new je;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rn(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(rn(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Nh extends qi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new pe){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class UM extends Nh{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Oh(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const ml=new z,ou=new Oh,au=new Oh,lu=new Oh;class NM extends qi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new z){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(ml.subVectors(i[0],i[1]).add(i[0]),c=ml);const h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(ml.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=ml),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),ou.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,p),au.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,p),lu.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(ou.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),au.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),lu.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ou.calc(l),au.calc(l),lu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new z().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ep(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function OM(r,e){const t=1-r;return t*t*e}function FM(r,e){return 2*(1-r)*r*e}function zM(r,e){return r*r*e}function la(r,e,t,n){return OM(r,e)+FM(r,t)+zM(r,n)}function BM(r,e){const t=1-r;return t*t*t*e}function kM(r,e){const t=1-r;return 3*t*t*r*e}function HM(r,e){return 3*(1-r)*r*r*e}function GM(r,e){return r*r*r*e}function ca(r,e,t,n,i){return BM(r,e)+kM(r,t)+HM(r,n)+GM(r,i)}class ng extends qi{constructor(e=new pe,t=new pe,n=new pe,i=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new pe){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ca(e,i.x,s.x,o.x,a.x),ca(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class VM extends qi{constructor(e=new z,t=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new z){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ca(e,i.x,s.x,o.x,a.x),ca(e,i.y,s.y,o.y,a.y),ca(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ig extends qi{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class WM extends qi{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rg extends qi{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(la(e,i.x,s.x,o.x),la(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class XM extends qi{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(la(e,i.x,s.x,o.x),la(e,i.y,s.y,o.y),la(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sg extends qi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(ep(a,l.x,c.x,u.x,h.x),ep(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new pe().fromArray(i))}return this}}var tp=Object.freeze({__proto__:null,ArcCurve:UM,CatmullRomCurve3:NM,CubicBezierCurve:ng,CubicBezierCurve3:VM,EllipseCurve:Nh,LineCurve:ig,LineCurve3:WM,QuadraticBezierCurve:rg,QuadraticBezierCurve3:XM,SplineCurve:sg});class qM extends qi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tp[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new tp[i.type]().fromJSON(i))}return this}}class jM extends qM{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ig(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new rg(this.currentPoint.clone(),new pe(e,t),new pe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new ng(this.currentPoint.clone(),new pe(e,t),new pe(n,i),new pe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new sg(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new Nh(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Fh extends Ht{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=rn(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,h=new z,d=new pe,f=new z,g=new z,_=new z;let p=0,m=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:p=e[S+1].x-e[S].x,m=e[S+1].y-e[S].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:p=e[S+1].x-e[S].x,m=e[S+1].y-e[S].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let S=0;S<=t;S++){const y=n+S*u*i,b=Math.sin(y),L=Math.cos(y);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*b,h.y=e[w].y,h.z=e[w].x*L,o.push(h.x,h.y,h.z),d.x=S/t,d.y=w/(e.length-1),a.push(d.x,d.y);const M=l[3*w+0]*b,T=l[3*w+1],x=l[3*w+0]*L;c.push(M,T,x)}}for(let S=0;S<t;S++)for(let y=0;y<e.length-1;y++){const b=y+S*e.length,L=b,w=b+e.length,M=b+e.length+1,T=b+1;s.push(L,w,T),s.push(M,T,w)}this.setIndex(s),this.setAttribute("position",new Gt(o,3)),this.setAttribute("uv",new Gt(a,2)),this.setAttribute("normal",new Gt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fh(e.points,e.segments,e.phiStart,e.phiLength)}}class zh extends Fh{constructor(e=1,t=1,n=4,i=8){const s=new jM;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new zh(e.radius,e.length,e.capSegments,e.radialSegments)}}class wi extends Ht{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/i,f=new z,g=new pe;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const m=s+p/n*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<i;_++){const p=_*(n+1);for(let m=0;m<n;m++){const S=m+p,y=S,b=S+n+1,L=S+n+2,w=S+1;a.push(y,b,w),a.push(b,L,w)}}this.setIndex(a),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class fi extends Ht{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new z,d=new z,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const S=[],y=m/n;let b=0;m===0&&o===0?b=.5/t:m===n&&l===Math.PI&&(b=-.5/t);for(let L=0;L<=t;L++){const w=L/t;h.x=-e*Math.cos(i+w*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(i+w*s)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),p.push(w+b,1-y),S.push(c++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){const y=u[m][S+1],b=u[m][S],L=u[m+1][S],w=u[m+1][S+1];(m!==0||o>0)&&f.push(y,b,w),(m!==n-1||l<Math.PI)&&f.push(b,L,w)}this.setIndex(f),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bh extends Ht{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new z,h=new z,d=new z;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,p=f/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(_),h.y=(e+t*Math.cos(p))*Math.sin(_),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,S=(i+1)*f+g;o.push(_,p,S),o.push(p,m,S)}this.setIndex(o),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ei extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nm,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mr extends Ei{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function gl(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function YM(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function KM(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function np(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function og(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class ka{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $M extends ka{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qf,endingEnd:qf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case jf:s=e,a=2*t-n;break;case Yf:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jf:o=e,l=2*n-t;break;case Yf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,S=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*p+(1.5+f)*_+.5*g,b=f*p-f*_;for(let L=0;L!==a;++L)s[L]=m*o[u+L]+S*o[c+L]+y*o[l+L]+b*o[h+L];return s}}class ZM extends ka{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class JM extends ka{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ji{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gl(t,this.TimeBufferType),this.values=gl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gl(e.times,Array),values:gl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new JM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ZM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $M(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ta:t=this.InterpolantFactoryMethodDiscrete;break;case yo:t=this.InterpolantFactoryMethodLinear;break;case Lc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ta;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&YM(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Lc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ji.prototype.TimeBufferType=Float32Array;ji.prototype.ValueBufferType=Float32Array;ji.prototype.DefaultInterpolation=yo;class No extends ji{}No.prototype.ValueTypeName="bool";No.prototype.ValueBufferType=Array;No.prototype.DefaultInterpolation=Ta;No.prototype.InterpolantFactoryMethodLinear=void 0;No.prototype.InterpolantFactoryMethodSmooth=void 0;class ag extends ji{}ag.prototype.ValueTypeName="color";class To extends ji{}To.prototype.ValueTypeName="number";class QM extends ka{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Wr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ms extends ji{InterpolantFactoryMethodLinear(e){return new QM(this.times,this.values,this.getValueSize(),e)}}Ms.prototype.ValueTypeName="quaternion";Ms.prototype.DefaultInterpolation=yo;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Oo extends ji{}Oo.prototype.ValueTypeName="string";Oo.prototype.ValueBufferType=Array;Oo.prototype.DefaultInterpolation=Ta;Oo.prototype.InterpolantFactoryMethodLinear=void 0;Oo.prototype.InterpolantFactoryMethodSmooth=void 0;class bo extends ji{}bo.prototype.ValueTypeName="vector";class ew{constructor(e="",t=-1,n=[],i=q_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ai(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(nw(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(ji.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=KM(l);l=np(l,1,u),c=np(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new To(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const p=[],m=[];og(f,p,m,g),p.length!==0&&_.push(new h(d,p,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let S=0;S!==d[g].morphTargets.length;++S){const y=d[g];p.push(y.time),m.push(y.morphTarget===_?1:0)}i.push(new To(".morphTargetInfluence["+_+"]",p,m))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(bo,f+".position",d,"pos",i),n(Ms,f+".quaternion",d,"rot",i),n(bo,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tw(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return To;case"vector":case"vector2":case"vector3":case"vector4":return bo;case"color":return ag;case"quaternion":return Ms;case"bool":case"boolean":return No;case"string":return Oo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function nw(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=tw(r.type);if(r.times===void 0){const t=[],n=[];og(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Pr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class iw{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const rw=new iw;class Rs{constructor(e){this.manager=e!==void 0?e:rw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const tr={};class sw extends Error{constructor(e,t){super(e),this.response=t}}class Ql extends Rs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Pr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(tr[e]!==void 0){tr[e].push({onLoad:t,onProgress:n,onError:i});return}tr[e]=[],tr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=tr[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){S();function S(){h.read().then(({done:y,value:b})=>{if(y)m.close();else{_+=b.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,M=u.length;w<M;w++){const T=u[w];T.onProgress&&T.onProgress(L)}m.enqueue(b),S()}})}}});return new Response(p)}else throw new sw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Pr.add(e,c);const u=tr[e];delete tr[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=tr[e];if(u===void 0)throw this.manager.itemError(e),c;delete tr[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ow extends Rs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ba("img");function l(){u(),Pr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class kr extends Rs{constructor(e){super(e)}load(e,t,n,i){const s=new Jt,o=new ow(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class _c extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const cu=new je,ip=new z,rp=new z;class kh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rh,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(ip),rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rp),t.updateMatrixWorld(),cu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class aw extends kh{constructor(){super(new Sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=So*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class lw extends _c{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new aw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const sp=new je,Wo=new z,uu=new z;class cw extends kh{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Wo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wo),uu.copy(n.position),uu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(uu),n.updateMatrixWorld(),i.makeTranslation(-Wo.x,-Wo.y,-Wo.z),sp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sp)}}class ec extends _c{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new cw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class uw extends kh{constructor(){super(new Ch(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lg extends _c{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new uw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hw extends _c{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ua{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class fw extends Ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class dw extends Rs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Pr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Pr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Pr.add(e,l),s.manager.itemStart(e)}}class pw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=op(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=op();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function op(){return(typeof performance>"u"?Date:performance).now()}const Hh="\\[\\]\\.:\\/",mw=new RegExp("["+Hh+"]","g"),Gh="[^"+Hh+"]",gw="[^"+Hh.replace("\\.","")+"]",_w=/((?:WC+[\/:])*)/.source.replace("WC",Gh),vw=/(WCOD+)?/.source.replace("WCOD",gw),xw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gh),yw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gh),Sw=new RegExp("^"+_w+vw+xw+yw+"$"),Mw=["material","materials","bones","map"];class ww{constructor(e,t,n){const i=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class xt{constructor(e,t,n){this.path=t,this.parsedPath=n||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,n):new xt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mw,"")}static parseTrackName(e){const t=Sw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Mw.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=ww;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class St{constructor(e){this.value=e}clone(){return new St(this.value.clone===void 0?this.value:this.value.clone())}}const ap=new je;class Tw{constructor(e,t,n=0,i=1/0){this.ray=new Fa(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Eh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ap.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ap),this}intersectObject(e,t=!0,n=[]){return ju(e,this,n,t),n.sort(lp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ju(e[i],this,n,t);return n.sort(lp),n}}function lp(r,e){return r.distance-e.distance}function ju(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)ju(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Io);function bw(r){const e=new Sn(75,window.innerWidth/window.innerHeight,1e-4,150);return e.position.z=r,e}function cp(r){const e=new $l;return e.background=new ge(r),e}function cs(){function r(){const s=new kr().load("../../Assets/Models/rock_texture.jpg");return new Ei({map:s,metalness:.2,roughness:.6,envMapIntensity:.5,side:Mn})}const e=new fi(.5,50,50);new ge(Math.random(),Math.random(),Math.random());const t=r();return new Mt(e,t)}function Ew(){const r=new ec("white",150);r.position.set(0,6,-5);const e=new lg("white",100);e.position.set(0,0,-5),e.castShadow=!0;const t=new hw("white",.125);return{sunLight:r,keyLight:e,fillLight:t}}class Aw extends Ot{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new pe(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Ys=new z,up=new je,hp=new je,fp=new z,dp=new z;class Rw{constructor(e={}){const t=this;let n,i,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:i}},this.render=function(f,g){f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),up.copy(g.matrixWorldInverse),hp.multiplyMatrices(g.projectionMatrix,up),c(f,f,g),d(f)},this.setSize=function(f,g){n=f,i=g,s=n/2,o=i/2,l.style.width=f+"px",l.style.height=g+"px"};function c(f,g,_){if(f.isCSS2DObject){Ys.setFromMatrixPosition(f.matrixWorld),Ys.applyMatrix4(hp);const p=f.visible===!0&&Ys.z>=-1&&Ys.z<=1&&f.layers.test(_.layers)===!0;if(f.element.style.display=p===!0?"":"none",p===!0){f.onBeforeRender(t,g,_);const S=f.element;S.style.transform="translate("+-100*f.center.x+"%,"+-100*f.center.y+"%)translate("+(Ys.x*s+s)+"px,"+(-Ys.y*o+o)+"px)",S.parentNode!==l&&l.appendChild(S),f.onAfterRender(t,g,_)}const m={distanceToCameraSquared:u(_,f)};a.objects.set(f,m)}for(let p=0,m=f.children.length;p<m;p++)c(f.children[p],g,_)}function u(f,g){return fp.setFromMatrixPosition(f.matrixWorld),dp.setFromMatrixPosition(g.matrixWorld),fp.distanceToSquared(dp)}function h(f){const g=[];return f.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function d(f){const g=h(f).sort(function(p,m){if(p.renderOrder!==m.renderOrder)return m.renderOrder-p.renderOrder;const S=a.objects.get(p).distanceToCameraSquared,y=a.objects.get(m).distanceToCameraSquared;return S-y}),_=g.length;for(let p=0,m=g.length;p<m;p++)g[p].element.style.zIndex=_-p}}}const Cw=`
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


`,Pw=`
            //	Classic Perlin 3D Noise 
            //	by Stefan Gustavson
            //
            vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
            vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
            vec4 fade(vec4 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

            float cnoise(vec4 P){
                vec4 Pi0 = floor(P); // Integer part for indexing
                vec4 Pi1 = Pi0 + 1.0; // Integer part + 1
                Pi0 = mod(Pi0, 289.0);
                Pi1 = mod(Pi1, 289.0);
                vec4 Pf0 = fract(P); // Fractional part for interpolation
                vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0
                vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
                vec4 iy = vec4(Pi0.yy, Pi1.yy);
                vec4 iz0 = vec4(Pi0.zzzz);
                vec4 iz1 = vec4(Pi1.zzzz);
                vec4 iw0 = vec4(Pi0.wwww);
                vec4 iw1 = vec4(Pi1.wwww);

                vec4 ixy = permute(permute(ix) + iy);
                vec4 ixy0 = permute(ixy + iz0);
                vec4 ixy1 = permute(ixy + iz1);
                vec4 ixy00 = permute(ixy0 + iw0);
                vec4 ixy01 = permute(ixy0 + iw1);
                vec4 ixy10 = permute(ixy1 + iw0);
                vec4 ixy11 = permute(ixy1 + iw1);

                vec4 gx00 = ixy00 / 7.0;
                vec4 gy00 = floor(gx00) / 7.0;
                vec4 gz00 = floor(gy00) / 6.0;
                gx00 = fract(gx00) - 0.5;
                gy00 = fract(gy00) - 0.5;
                gz00 = fract(gz00) - 0.5;
                vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
                vec4 sw00 = step(gw00, vec4(0.0));
                gx00 -= sw00 * (step(0.0, gx00) - 0.5);
                gy00 -= sw00 * (step(0.0, gy00) - 0.5);

                vec4 gx01 = ixy01 / 7.0;
                vec4 gy01 = floor(gx01) / 7.0;
                vec4 gz01 = floor(gy01) / 6.0;
                gx01 = fract(gx01) - 0.5;
                gy01 = fract(gy01) - 0.5;
                gz01 = fract(gz01) - 0.5;
                vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
                vec4 sw01 = step(gw01, vec4(0.0));
                gx01 -= sw01 * (step(0.0, gx01) - 0.5);
                gy01 -= sw01 * (step(0.0, gy01) - 0.5);

                vec4 gx10 = ixy10 / 7.0;
                vec4 gy10 = floor(gx10) / 7.0;
                vec4 gz10 = floor(gy10) / 6.0;
                gx10 = fract(gx10) - 0.5;
                gy10 = fract(gy10) - 0.5;
                gz10 = fract(gz10) - 0.5;
                vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
                vec4 sw10 = step(gw10, vec4(0.0));
                gx10 -= sw10 * (step(0.0, gx10) - 0.5);
                gy10 -= sw10 * (step(0.0, gy10) - 0.5);

                vec4 gx11 = ixy11 / 7.0;
                vec4 gy11 = floor(gx11) / 7.0;
                vec4 gz11 = floor(gy11) / 6.0;
                gx11 = fract(gx11) - 0.5;
                gy11 = fract(gy11) - 0.5;
                gz11 = fract(gz11) - 0.5;
                vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
                vec4 sw11 = step(gw11, vec4(0.0));
                gx11 -= sw11 * (step(0.0, gx11) - 0.5);
                gy11 -= sw11 * (step(0.0, gy11) - 0.5);

                vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);
                vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);
                vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);
                vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);
                vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);
                vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);
                vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);
                vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);
                vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);
                vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);
                vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);
                vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);
                vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);
                vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);
                vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);
                vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);

                vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));
                g0000 *= norm00.x;
                g0100 *= norm00.y;
                g1000 *= norm00.z;
                g1100 *= norm00.w;

                vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));
                g0001 *= norm01.x;
                g0101 *= norm01.y;
                g1001 *= norm01.z;
                g1101 *= norm01.w;

                vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));
                g0010 *= norm10.x;
                g0110 *= norm10.y;
                g1010 *= norm10.z;
                g1110 *= norm10.w;

                vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));
                g0011 *= norm11.x;
                g0111 *= norm11.y;
                g1011 *= norm11.z;
                g1111 *= norm11.w;

                float n0000 = dot(g0000, Pf0);
                float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));
                float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));
                float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));
                float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));
                float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
                float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));
                float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));
                float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));
                float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));
                float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
                float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));
                float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));
                float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));
                float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));
                float n1111 = dot(g1111, Pf1);

                vec4 fade_xyzw = fade(Pf0);
                vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
                vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
                vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
                vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);
                float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
                return 2.2 * n_xyzw;
                }

                // Classic Perlin noise, periodic version
                float cnoise(vec4 P, vec4 rep){
                vec4 Pi0 = mod(floor(P), rep); // Integer part modulo rep
                vec4 Pi1 = mod(Pi0 + 1.0, rep); // Integer part + 1 mod rep
                vec4 Pf0 = fract(P); // Fractional part for interpolation
                vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0
                vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
                vec4 iy = vec4(Pi0.yy, Pi1.yy);
                vec4 iz0 = vec4(Pi0.zzzz);
                vec4 iz1 = vec4(Pi1.zzzz);
                vec4 iw0 = vec4(Pi0.wwww);
                vec4 iw1 = vec4(Pi1.wwww);

                vec4 ixy = permute(permute(ix) + iy);
                vec4 ixy0 = permute(ixy + iz0);
                vec4 ixy1 = permute(ixy + iz1);
                vec4 ixy00 = permute(ixy0 + iw0);
                vec4 ixy01 = permute(ixy0 + iw1);
                vec4 ixy10 = permute(ixy1 + iw0);
                vec4 ixy11 = permute(ixy1 + iw1);

                vec4 gx00 = ixy00 / 7.0;
                vec4 gy00 = floor(gx00) / 7.0;
                vec4 gz00 = floor(gy00) / 6.0;
                gx00 = fract(gx00) - 0.5;
                gy00 = fract(gy00) - 0.5;
                gz00 = fract(gz00) - 0.5;
                vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
                vec4 sw00 = step(gw00, vec4(0.0));
                gx00 -= sw00 * (step(0.0, gx00) - 0.5);
                gy00 -= sw00 * (step(0.0, gy00) - 0.5);

                vec4 gx01 = ixy01 / 7.0;
                vec4 gy01 = floor(gx01) / 7.0;
                vec4 gz01 = floor(gy01) / 6.0;
                gx01 = fract(gx01) - 0.5;
                gy01 = fract(gy01) - 0.5;
                gz01 = fract(gz01) - 0.5;
                vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
                vec4 sw01 = step(gw01, vec4(0.0));
                gx01 -= sw01 * (step(0.0, gx01) - 0.5);
                gy01 -= sw01 * (step(0.0, gy01) - 0.5);

                vec4 gx10 = ixy10 / 7.0;
                vec4 gy10 = floor(gx10) / 7.0;
                vec4 gz10 = floor(gy10) / 6.0;
                gx10 = fract(gx10) - 0.5;
                gy10 = fract(gy10) - 0.5;
                gz10 = fract(gz10) - 0.5;
                vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
                vec4 sw10 = step(gw10, vec4(0.0));
                gx10 -= sw10 * (step(0.0, gx10) - 0.5);
                gy10 -= sw10 * (step(0.0, gy10) - 0.5);

                vec4 gx11 = ixy11 / 7.0;
                vec4 gy11 = floor(gx11) / 7.0;
                vec4 gz11 = floor(gy11) / 6.0;
                gx11 = fract(gx11) - 0.5;
                gy11 = fract(gy11) - 0.5;
                gz11 = fract(gz11) - 0.5;
                vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
                vec4 sw11 = step(gw11, vec4(0.0));
                gx11 -= sw11 * (step(0.0, gx11) - 0.5);
                gy11 -= sw11 * (step(0.0, gy11) - 0.5);

                vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);
                vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);
                vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);
                vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);
                vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);
                vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);
                vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);
                vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);
                vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);
                vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);
                vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);
                vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);
                vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);
                vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);
                vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);
                vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);

                vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));
                g0000 *= norm00.x;
                g0100 *= norm00.y;
                g1000 *= norm00.z;
                g1100 *= norm00.w;

                vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));
                g0001 *= norm01.x;
                g0101 *= norm01.y;
                g1001 *= norm01.z;
                g1101 *= norm01.w;

                vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));
                g0010 *= norm10.x;
                g0110 *= norm10.y;
                g1010 *= norm10.z;
                g1110 *= norm10.w;

                vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));
                g0011 *= norm11.x;
                g0111 *= norm11.y;
                g1011 *= norm11.z;
                g1111 *= norm11.w;

                float n0000 = dot(g0000, Pf0);
                float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));
                float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));
                float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));
                float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));
                float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
                float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));
                float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));
                float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));
                float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));
                float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
                float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));
                float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));
                float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));
                float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));
                float n1111 = dot(g1111, Pf1);

                vec4 fade_xyzw = fade(Pf0);
                vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
                vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
                vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
                vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);
                float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
                return 2.2 * n_xyzw;
            }

          

            mat3 rotation3dY(float angle){
                float s = sin(angle);
                float c = cos(angle);
                return mat3(
                    c,0.0,-s,
                    0.0,1.0,0.0,
                    s,0.0,c
                );
            }
            attribute vec3 pos;
            varying vec2 vUv;
            uniform float time;
            uniform float opacity;

void main() {
    vUv = position.xy + vec2(0.5);
    vec3 finalpos = pos + position * 0.1;
    float particle_size = cnoise(vec4(pos * 2.0, 1.0)) * 0.001;
    vec3 world_pos = rotation3dY(time * 0.3 * (0.1 + 0.5 * particle_size)) * pos;
    vec3 particle_position = (modelMatrix * vec4(world_pos, 1.0)).xyz;
    vec4 view_pos = viewMatrix * vec4(particle_position, 1.0);
    view_pos.xyz += position * (0.05 + 0.1 * particle_size);
    gl_Position = projectionMatrix * view_pos;
}

            `,cg="data:image/webp;base64,UklGRnoEAABXRUJQVlA4WAoAAAAgAAAAZwEAZwEAVlA4IFwEAACQTQCdASpoAWgBPjEYiUSiIaOQKZg4AwS0t34jfL4QODLCb+Af//2LHYTAABZasuGzWhzuG3+zDeKUjOdw2/2YbxSkZzuG3+zDeKUjOdx1mUTfzuG3+zDeefzVXzG6Z8+1kVZdIzmoY0dor+fx91ujioi2UcsM40U0jOdvwaLmOPK1qYGnW3gqLC4T2YhqNYQldOdw2y+HV1X55HvFQzEz9h5SWyIJ/lV0awnZ0WoYFJSMnhZRaw7/dI8j0LnIvvwDNSH2tQobd8DFCWIGe/mOWF7OuYfLdzcs+yUiqJNu5b7g4q1y04nN7jKPGGzIMXrEMuLXgD0EP4jTDQc5Huk1HfGdje+56PHM732/WXSW8nd88NxJ7l3WQlhpx4VhLqIaO7w5wg7/xC8D83Zqst6luXtuqYxpe/oMSXSIXQJqdWXJSR51Fswu40IQ/iEdW8RDhHTEGbUpAaCIoqcUhOxgMgNmtHy9sJhZA+cA8bsH+Rcw4YbnCIeJ+vdPPCtUPr0PJ8tngZSLR5YtZnB5lWXBDt6dbD3/ADmCpuJuzZkq2RaOqfHVcYmdqXmDbYekkbtCIlV9RShB68i9WlxvsFgBI5DHVltAeYtPOQWFSEsP/tf6yMYzIPwaiqhbt5ua+rcy2MCvXAN7h0K/Zhu2OtkcDpFSo4k5ayUdTamA0Jr65bVh6Vfs1oQRFr5koRkuUsTq8G979823RB/+zDeKSis3z4OhpuiLNwosVP7cVwWLLRDI/8b7MN4pSeX03f9QQMWv2SCdfrdDbCNVl0jOdw2/2YbxSkZzuG3+zDeKUjOdw2/2YbxSkZzuG3+zDeKUjOdw2/2GAAD+/9naAAFcwaeAumAc9mdBnlgvGgXuJ5hTD5b9WjzHae1xZUISfgLZXq/UoPNi8Kj6FZD2YVlMnrXz12uP8txNRhqbDtO68In/VTDsd0IE+jeMpnCl4l3L8wxyOiYnoFiEr309uvvYpc6gwdEWLYFbrKt2yEUQKs5cXk2m8TWC/Xvci9Np9qQPjLOoePGsxu4qiKcefahtwlEtVk5pMAFmvRjzEL0OnsBuump5Y3VYCOFXPY1fGqE+3tC0dYhvV8xGJFGquGA/KotxZ/FiHVvx6K2eDOApjeZ7v2CaXNEzdGcjqG2+de8LPHXyBjNq9rK7xGkUVcjjwy4xV9IZwPEL4ZNj6Au62s5VkDhwjSzEPZCi739a+N85uOq8yTtnOtpHTpPAxgBBCZU0YHMcdOzrl0KS3NzEhRzE0tdUTggoAJKuEOigRmiL2R34rwMB9GIiL3gvp8YvvyrulmzQWmbRH7uWJpF10j6DJ+EVYfFHmXxyxfCamgT4y+zpa3ZDDA3meRh+EP946R1PlPs0jXfd9iv2XG9/GaKOCRu1AI9iMT53Co8HvYNbMGInp5O5/m3WIiY3oV0/XSNsSYhEz0fiE4QapAUxI4TTYuOWTtp+ZDDguEtw4APIajP45g9ML1sAAAAAAAA=",ug=new Tt({vertexShader:Pw,fragmentShader:Cw,uniforms:{opacity:{value:3},time:{value:0},uTexture:{value:new kr().load(cg)},resolution:{value:new ut},uColor:{value:new ge(16711680)},emissiveColor:{value:new ge(16777215)},emissiveIntensity:{value:0}},transparent:!0,depthTest:!1,blending:Gi});function pp(r,e,t){const n=new Ba(1,1);console.log(n.getAttribute("position"));const i=25e3,s=new fw;s.instanceCount=i,s.setAttribute("position",n.getAttribute("position")),s.index=n.index;let o=new Float32Array(i*3),a=r,l=e;function c(h,d,f){return h*(1-f)+d*f}for(let h=0;h<i;h++){let d=Math.random()*2*Math.PI,f=c(a,l,Math.random()),g=f*Math.sin(d),_=(Math.random()-.5)*t,p=f*Math.cos(d);o.set([g,_,p],h*3)}return s.setAttribute("pos",new Zl(o,3,!1)),new Mt(s,ug)}function Lw({rimHex:r=35071,facingHex:e=0}={}){const t={color1:{value:new ge(r)},color2:{value:new ge(e)},fresnelBias:{value:.1},fresnelScale:{value:1},fresnelPower:{value:4}},n=`
  uniform float fresnelBias;
  uniform float fresnelScale;
  uniform float fresnelPower;
  
  varying float vReflectionFactor;
  
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
  
    vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
  
    vec3 I = worldPosition.xyz - cameraPosition;
  
    vReflectionFactor = fresnelBias + fresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), fresnelPower );
  
    gl_Position = projectionMatrix * mvPosition;
  }
  `,i=`
  uniform vec3 color1;
  uniform vec3 color2;
  
  varying float vReflectionFactor;
  
  void main() {
    float f = clamp( vReflectionFactor, 0.0, 1.0 );
    gl_FragColor = vec4(mix(color2, color1, vec3(f)), f);
  }
  `;return new Tt({uniforms:t,vertexShader:n,fragmentShader:i,transparent:!0,blending:Gi})}function Iw(){const r={color1:{value:new z(.5,0,.5)},color2:{value:new z(0,1,0)},gapSize:{value:.5},ringWidth:{value:.3}},e=`
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;


    void main(){
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  
  `,t=`
    varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    // Define the number of stripes and gap size
    float numStripes = 1.0;
    float gapSize = 0.15;

    // Calculate the distance from the center of the torus
    float distanceToCenter = length(vPosition.xy);

    // Calculate the radius of each stripe
    float stripeRadius = 1.0 / numStripes;

    // Calculate the stripe index
    float stripeIndex = floor(distanceToCenter / stripeRadius);

    // Calculate the distance from the nearest stripe
    float distanceToStripe = abs(fract(distanceToCenter / stripeRadius) - 0.5);

    // Set color and alpha based on stripe index and distance
    vec3 color = mod(stripeIndex, 2.0) == 0.0 ? vec3(0.992, 0.961, 0.792) : vec3(0.792, 0.761, 0.592);
    float alpha = smoothstep(0.0, gapSize, distanceToStripe);

    // Output final color with alpha
    gl_FragColor = vec4(color, alpha);
}
  `;return new Tt({uniforms:r,vertexShader:e,fragmentShader:t,transparent:!0,blending:fs})}var hu=[];class Dw{constructor(){this.solarSystemGroupArr=[],this.solarSystemGroup=new Tn,this.positions=[],this.time=0,this.rings=new Tn}create(){function e(M){var T=new Ei({map:new kr().load(M)});return T}function t(){let M=[new z(0,0,25),new z(0,0,-20)];return M.push(new z().lerpVectors(M[0],M[1],1.4)),M}const n=t();for(let M=0;M<9;M++)this.solarSystemGroupArr.push(cs());for(let M=0;M<this.solarSystemGroupArr.length;M++)this.solarSystemGroupArr[M].material=new Ei({color:"white"}),this.solarSystemGroup.add(this.solarSystemGroupArr[M]);const i=new z().lerpVectors(n[0],n[1],0);this.positions.push(i),this.solarSystemGroup.children[0].position.copy(i),this.solarSystemGroup.children[0].scale.set(.1,.1,.1),this.solarSystemGroup.children[0].visible=!1;const s=new z().lerpVectors(n[0],n[1],.08);this.positions.push(s),this.solarSystemGroup.children[1].position.copy(s),this.solarSystemGroup.children[1].material=e("../../Assets/Images/Textures/Neptune/neptune.jpg"),this.solarSystemGroup.children[1].rotation.z=-30*Math.PI/180,this.solarSystemGroup.children[1].name="neptune",this.solarSystemGroup.children[1].userData="neptune",console.log(this.solarSystemGroup);const o=new z().lerpVectors(n[0],n[1],.163);this.positions.push(o),this.solarSystemGroup.children[2].position.copy(o),this.solarSystemGroup.children[2].material=e("../../Assets/Images/Textures/uranus/uranus.jpg"),this.solarSystemGroup.children[2].rotation.z=-98*Math.PI/180,this.solarSystemGroup.children[2].name="uranus";const a=new z().lerpVectors(n[0],n[1],.3);this.positions.push(a),this.solarSystemGroup.children[3].position.copy(a),this.solarSystemGroup.children[3].scale.set(2,2,2),this.solarSystemGroup.children[3].material=e("../../Assets/Images/Textures/saturn/saturn.jpg"),this.solarSystemGroup.children[3].rotation.z=-27*Math.PI/180,this.solarSystemGroup.children[3].name="saturn";const l=new z().lerpVectors(n[0],n[1],.48);this.positions.push(l),this.solarSystemGroup.children[4].position.copy(l),this.solarSystemGroup.children[4].scale.set(2,2,2),this.solarSystemGroup.children[4].material=e("../../Assets/Images/Textures/jupiter/jupitermap.jpg"),this.solarSystemGroup.children[4].rotation.z=-3*Math.PI/180,this.solarSystemGroup.children[4].name="jupiter";const c=new z().lerpVectors(n[0],n[1],.58);this.positions.push(c),this.solarSystemGroup.children[5].position.copy(c),this.solarSystemGroup.children[5].scale.set(.2,.2,.2),this.solarSystemGroup.children[5].material=e("../../Assets/Images/Textures/mars/mars.jpg"),this.solarSystemGroup.children[5].rotation.z=-25*Math.PI/180,this.solarSystemGroup.children[5].name="mars",new Tn;const u=new z().lerpVectors(n[0],n[1],.63);this.positions.push(u),this.solarSystemGroup.children[6].position.copy(u),this.solarSystemGroup.children[6].scale.set(.2,.2,.2),this.solarSystemGroup.children[6].material=e("../../Assets/Images/Textures/earth/earth.jpg"),this.solarSystemGroup.children[6].rotation.z=-23*Math.PI/180,this.solarSystemGroup.children[6].name="earth";var h=cs();h.scale.set(.201,.201,.201),h.position.copy(u);var d=new Ei({transparent:!0,map:new kr().load("../../Assets/Images/Textures/earth/earthClouds.webp"),blending:Gi});h.material=d,this.solarSystemGroup.add(h);const f=new z().lerpVectors(n[0],n[1],.67);this.positions.push(f),this.solarSystemGroup.children[7].position.copy(f),this.solarSystemGroup.children[7].scale.set(.2,.2,.2),this.solarSystemGroup.children[7].material=e("../../Assets/Images/Textures/venus/venus.jpg"),this.solarSystemGroup.children[7].rotation.z=-177*Math.PI/180,this.solarSystemGroup.children[7].name="venus";const g=new z().lerpVectors(n[0],n[1],.7);this.positions.push(g),this.solarSystemGroup.children[8].position.copy(g),this.solarSystemGroup.children[8].scale.set(.1,.1,.1),this.solarSystemGroup.children[8].material=e("../../Assets/Images/Textures/mercury/mercury.jpg"),this.solarSystemGroup.children[8].rotation.z=-.1*Math.PI/180,this.solarSystemGroup.children[8].name="mercury",hu.push(i,s,o,a,l,c,u,f,g),console.log(hu),console.log(this.solarSystemGroup.children);var _=[23782,8388564,15787660,16766720,10824234,35071,16777184,11776947];for(let M=1;M<this.solarSystemGroupArr.length;M++){const T=cs(),x=Lw();x.uniforms.color1.value=new ge(_[M-1]),T.material=x;const C=this.solarSystemGroup.children[M].scale.clone().multiplyScalar(1.01);T.scale.copy(C),T.position.copy(this.positions[M]),this.solarSystemGroup.add(T)}var p=75,m=75,S=[];S.push(new wi(1.85,1.83,p,m)),S.push(new wi(2,1.98,p,m)),S.push(new wi(2.18,2.16,p,m)),S.push(new wi(2.325,2.305,p,m)),S.push(new wi(2.85,2.83,p,m)),S.push(new wi(3.7,3.68,p,m)),S.push(new wi(4.28,4.26,p,m)),S.push(new wi(4.65,4.63,p,m)),S.push(new wi(2.4,2.1,p,m));for(let M=0;M<S.length;M++){const T=new Ni({color:"white",transparent:!0,opacity:.75});if(M===8){T.color=new ge(0,.95,.75);var y=new Mt(S[M],T);y.position.set(0,.01,-2.5),y.rotation.set(sr.degToRad(90),0,0)}else{var y=new Mt(S[M],T);y.position.set(0,0,-2.5),y.rotation.set(sr.degToRad(90),0,0)}this.rings.add(y)}const b=new Bh(2.1,.75,2,80);b.computeVertexNormals();var L=Iw();const w=new Mt(b,L);return w.position.copy(a),w.position.z-=.2,w.rotation.set(1.5,0,0),this.solarSystemGroup.add(w),this.solarSystemGroup.scale.set(.1,.1,.1),console.log(hu),console.log(this.solarSystemGroup),this.solarSystemGroup}animateOrbit(e,t){if(this.time+=.01,this.time>50){console.log(this.time);const i=.05/(t+1),s=15*((t+1)*.5);var n=this.time*i+t*.5;const o=0+s*Math.cos(n),a=-25+s*Math.sin(n);e.position.set(o,0,a)}}tick(){this.solarSystemGroup.children.forEach((e,t)=>{t===18?e.rotation.z-=.002:e.rotation.y+=.002})}}const Uw=`
    varying vec2 vUv;
    varying vec3 vPosition;

    void main(){
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix *vec4(position, 1.0);
    }
`,Nw=`
//
// Description : Array and textureless GLSL 2D/3D/4D simplex 
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
// 

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0; }

float mod289(float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0; }

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}

float permute(float x) {
     return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float taylorInvSqrt(float r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 grad4(float j, vec4 ip)
  {
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;
  }
						
// (sqrt(5) - 1)/4 = F4, used once below
#define F4 0.309016994374947451

float snoise(vec4 v)
  {
  const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4
                        0.276393202250021,  // 2 * G4
                        0.414589803375032,  // 3 * G4
                       -0.447213595499958); // -1 + 4 * G4

// First corner
  vec4 i  = floor(v + dot(v, vec4(F4)) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

// Other corners

// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
  vec4 i0;
  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );
//  i0.x = dot( isX, vec3( 1.0 ) );
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;
//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;
  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  // i0 now contains the unique values 0,1,2,3 in each channel
  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  //  x0 = x0 - 0.0 + 0.0 * C.xxxx
  //  x1 = x0 - i1  + 1.0 * C.xxxx
  //  x2 = x0 - i2  + 2.0 * C.xxxx
  //  x3 = x0 - i3  + 3.0 * C.xxxx
  //  x4 = x0 - 1.0 + 4.0 * C.xxxx
  vec4 x1 = x0 - i1 + C.xxxx;
  vec4 x2 = x0 - i2 + C.yyyy;
  vec4 x3 = x0 - i3 + C.zzzz;
  vec4 x4 = x0 + C.wwww;

// Permutations
  i = mod289(i); 
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope
// 7*7*6 = 294, which is close to the ring size 17*17 = 289.
  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

// Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

// Mix contributions from the five corners
  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

  }

varying vec2 vUv;
uniform float time;
varying vec3 vPosition;

float fbm(vec4 p){
    float sum = 0.;
    float amp = 1.;
    float scale = 0.01;
    for (int i=0; i<6;i++){
        sum+=snoise(p*scale)*amp;
        p.w +=100.;
        amp*=0.6;
        scale+=2.;
    }
    return sum;
}

void main(){
    // float noise = snoise(vec4(vUv*10., 1., time));
    // float noise = snoise(vec4(vPosition,time));
    // float noisy = snoise(vec4(vUv,1.0,time));
    // gl_FragColor = vec4(vUv,0.0,1.0);
    // gl_FragColor = vec4(noise);
    // gl_FragColor = vec4(vPosition, 1.);
    // gl_FragColor = vec4(noisy);
    // float noisy = snoise(vec4(vPosition*5., time*0.05)); // Generate noise value
    // float gray = 0.5 + 0.5 * noisy; // Remap noise value to [0, 1]
    // gl_FragColor = vec4(gray, gray, gray, 1.0); // Set color to grayscale
    vec4 p = vec4(vPosition*5.,time*0.05);
    float noisy = fbm(p);
    vec4 p1 = vec4(vPosition*4.,time*0.05);
    float spots = max(snoise(p1),0.);
    gl_FragColor = vec4(vec3(noisy),1.);
    // gl_FragColor *= vec4(vec3(spots),1.0);
    // gl_FragColor *= vec4(noisy,0.,0.,0.95);
    gl_FragColor *= mix(1.0,spots,0.1);

}

`,Ow=`
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float time;
    varying vec3 vLayer0;
    varying vec3 vLayer1;
    varying vec3 vLayer2;
    varying vec3 eyeVector;
    varying vec3 vNormal;

    void main(){
        vNormal = normal;
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix *vec4(position, 1.0);
    }
`,Fw=`

varying vec2 vUv;
uniform float time;
varying vec3 vPosition;
uniform samplerCube uPerlin;
varying vec3 vLayer0;
varying vec3 vLayer1;
varying vec3 vLayer2;
varying vec3 eyeVector;
varying vec3 vNormal;

float supersun() {
    float sum = 0.0;
    sum += textureCube(uPerlin, vLayer0).r;
    sum += textureCube(uPerlin, vLayer1).r;
    sum += textureCube(uPerlin, vLayer2).r;
    return sum * 0.33;
}

vec3 brightness2Color(float b) {
    b *= 0.25;
    return (vec3(b, b * b, b * b * b * b) / 0.25) * 0.8;
}

uniform float opacity;

void main() {

    float radiala = length(vPosition.xyz);

    vec2 fragmentDirection = normalize(vPosition.xy);
    float angle = acos(dot(fragmentDirection, normalize(-vPosition.xy)));

    // Smoothly transition the alpha value based on radial distance and angle
    float alpha = smoothstep(0.0, 0.5, radiala) * smoothstep(0.0, 1.5, angle); // Adjust parameters as needed
    
    float radial = 1.0 - vPosition.z;
   
    radial *= radial*radial;

    float brightness = 1.0 + radial * 0.33;
    // gl_FragColor.rgb = brightness2Color(brightness);
    vec3 color = (vec3(brightness * 0.25, pow(brightness * 0.25, 2.0), pow(brightness * 0.25, 4.0))) * 0.8;
    // float alpha = smoothstep(0.0, 0.2, radial); // Adjust the second parameter for smoother transition

    gl_FragColor = vec4(color * radial, opacity*alpha);
    // gl_FragColor = vec4(radial,radial,radial, radial);

}


`,hg=`

varying vec2 vUv;
uniform float time;
varying vec3 vPosition;
uniform samplerCube uPerlin;
varying vec3 vLayer0;
varying vec3 vLayer1;
varying vec3 vLayer2;
uniform float opacity;


float supersun(){
 float sum = 0.;
 sum += textureCube(uPerlin, vLayer0).r;
 sum += textureCube(uPerlin, vLayer1).r;
 sum += textureCube(uPerlin, vLayer2).r;
sum*=0.33;
 return sum;
}

vec3 brightness2Color(float b){
    b*=0.25;
    return (vec3(b,b*b,b*b*b*b)/0.25)*0.8;
}

varying float vReflectionFactor;

void main(){
    // vec4 color = textureCube(uPerlin, vPosition);
    float f = clamp( vReflectionFactor, 0.0, 1.0 );
    vec3 color1 = vec3(1, 0.984, 0);
    vec3 color2 = vec3(0.,0.,0.);
    float intensity = supersun();
    intensity = intensity*4.+1.;
    vec3 col = brightness2Color(intensity);

// Output the sampled color
    // gl_FragColor = color;
    // gl_FragColor = vec4(1.,0.,0.,1.);

    gl_FragColor = vec4(col, opacity * 1.);
    // gl_FragColor *= vec4( mix( color2, color1, f ), 0.3 );

}

`,fg=`
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float time;
    varying vec3 vLayer0;
    varying vec3 vLayer1;
    varying vec3 vLayer2;
    varying float vReflectionFactor;

mat2 rotate(float a){
    float s = sin(a);
    float c = cos(a);
    return mat2(c,-s,s,c);
}

    void main(){
        float t =time*0.01;
        mat2 rot = rotate(t);

        vec3 p0 = position;
        p0.yz = rot*p0.yz;
        vLayer0 = p0;

        vec3 p1 = position;
        p1.xz = rot*p1.xz;
        vLayer1 = p1;

        vec3 p2 = position;
        p2.xy = rot*p2.xy;
        vLayer2 = p2;

        vUv = uv;
        vPosition = position;

        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
      vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
  
      vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
  
      vec3 I = worldPosition.xyz - cameraPosition;
  
      // Calculate the reflection factor
      vReflectionFactor = 0.1 + 1.0 * pow( 1.0 + dot( normalize( I ), worldNormal ), 4.0 );
    
    // gl_Position = projectionMatrix * modelViewMatrix *vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    }
`;function Ul({rimHex:r=35071,facingHex:e=0}={}){const t={color1:{value:new ge(r)},color2:{value:new ge(e)},fresnelBias:{value:.1},fresnelScale:{value:1},fresnelPower:{value:4}},n=`
  uniform float fresnelBias;
  uniform float fresnelScale;
  uniform float fresnelPower;
  
  varying float vReflectionFactor;
  
  void main() {
      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
      vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
  
      vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
  
      vec3 I = worldPosition.xyz - cameraPosition;
  
      // Calculate the reflection factor
      vReflectionFactor = fresnelBias + fresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), fresnelPower );
  
      gl_Position = projectionMatrix * mvPosition;
  }
  `,i=`
  uniform vec3 color1;
  uniform vec3 color2;
  
  varying float vReflectionFactor;
  
  void main() {
    float f = clamp( vReflectionFactor, 0.0, 1.0 );
    // Interpolate between the two colors based on the reflection factor
    gl_FragColor = vec4( mix( color2, color1, f ), f );
  }
  `;return new Tt({uniforms:t,vertexShader:n,fragmentShader:i,transparent:!0,blending:Gi})}new kr;var dg=new Tt({side:qt,vertexShader:fg,fragmentShader:hg,transparent:!0,extensions:{derivatives:" #extension GL_OES_standard_derivatives : enable"},uniforms:{time:{value:0},resolution:{value:new ut},uPerlin:{value:null},opacity:{value:1}}});class zw extends Tt{constructor(){super({side:qt,vertexShader:fg,fragmentShader:hg,transparent:!0,extensions:{derivatives:" #extension GL_OES_standard_derivatives : enable"},uniforms:{time:{value:0},resolution:{value:new ut},uPerlin:{value:null},opacity:{value:1}}})}}var mp=new Tn,pg=new Tt({side:Mn,vertexShader:Uw,fragmentShader:Nw,extensions:{derivatives:" #extension GL_OES_standard_derivatives : enable"},uniforms:{time:{value:0},resolution:{value:new ut}}}),Bw=new Tt({side:qt,transparent:!0,vertexShader:Ow,fragmentShader:Fw,extensions:{derivatives:" #extension GL_OES_standard_derivatives : enable"},uniforms:{time:{value:0},resolution:{value:new ut},uPerlin:{value:null},opacity:{value:1}}});function kw(){var r=new Tn,e=new fi(1,150,150),t=new Mt(e,dg),n=Yu(),i=Yu(),s=Hw();return r.add(t,s,n,i),r}function Hw(){var r=new fi(1.3,100,100),e=new Mt(r,Bw);return e}function Gw(){var r=new fi(1,30,30),e=new Mt(r,pg);return Yu(),mp.add(e),mp}function Yu(){var r=Ul();r.uniforms.color1.value=new ge(1,.957,.78),r.uniforms.fresnelScale.value=2,r.uniforms.fresnelPower.value=4;var e=new fi(1.005,150,150),t=new Mt(e,r);return t}function Vw(r){const e=new bM({canvas:r,powerPreference:"high-performance",antialias:!1,stencil:!1,depth:!1});return e.physicallyCorrectLights=!0,e.outputColorSpace=ct,e}function Ww(){const r=new Rw;return r.domElement.style.position="absolute",r.domElement.style.top="0px",r.domElement.style.color="white",document.getElementById("page_wrapper").appendChild(r.domElement),r}class Xw{constructor(e,t,n,i){this.setSize(e,t,n,i),window.addEventListener("resize",()=>{console.log("resized"),this.setSize(e,t,n,i)})}setSize(e,t,n,i){const s=e;s.style.width=window.innerWidth+"px",s.style.height=window.innerHeight+"px",t.aspect=e.clientWidth/e.clientHeight,t.updateProjectionMatrix(),n.setSize(e.clientWidth,e.clientHeight),n.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight)}}let qw=new pw;class jw{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,g){this.camera=e,this.instancedSunTime=d,this.scene=t,this.renderer=n,this.renderer_2D=i,this.updatables=[],this.mat=s,this.sunmat=o,this.cubeCam=l,this.sunmatMain=a,this.rendertarget=c,this.scene1=u,this.solarSystemOrbitTime=h.time,this.morphPlanet=f,this.effectsComp=g}start(){this.renderer.setAnimationLoop(()=>{this.cubeCam.update(this.renderer,this.scene1),this.mat.uniforms.time.value+=qw.getDelta(),this.morphPlanet.children[0].rotation.y+=3e-4,this.morphPlanet.rotation.y+=2e-4,this.sunmat.uniforms.time.value+=.05,this.sunmatMain.uniforms.time.value+=.05,this.instancedSunTime.uniforms.time.value+=.05,this.instancedSunTime.uniforms.uPerlin.value=this.rendertarget.texture,this.solarSystemOrbitTime+=.05,this.sunmatMain.uniforms.uPerlin.value=this.rendertarget.texture,this.tick(),this.effectsComp.render(),this.renderer_2D.render(this.scene,this.camera)})}changeScene(e){this.scene=e}stop(){this.renderer.setAnimationLoop(null)}tick(){for(const e of this.updatables)e.tick()}}function ir(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function mg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Eo={duration:.5,overwrite:!1,delay:0},Vh,bn,Nt,pi=1e8,At=1/pi,Ku=Math.PI*2,Yw=Ku/4,Kw=0,gg=Math.sqrt,$w=Math.cos,Zw=Math.sin,fn=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},hr=function(e){return typeof e=="number"},Wh=function(e){return typeof e>"u"},Wi=function(e){return typeof e=="object"},Wn=function(e){return e!==!1},Xh=function(){return typeof window<"u"},_l=function(e){return Vt(e)||fn(e)},_g=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},En=Array.isArray,$u=/(?:-?\.?\d|\.)+/gi,vg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,io=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,xg=/[+-]=-?[.\d]+/,yg=/[^,'"\[\]\s]+/gi,Jw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,zt,Ri,Zu,qh,si={},tc={},Sg,Mg=function(e){return(tc=ws(e,si))&&Yn},jh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Aa=function(e,t){return!t&&console.warn(e)},wg=function(e,t){return e&&(si[e]=t)&&tc&&(tc[e]=t)||si},Ra=function(){return 0},Qw={suppressEvents:!0,isStart:!0,kill:!1},Nl={suppressEvents:!0,kill:!1},eT={suppressEvents:!0},Yh={},Fr=[],Ju={},Tg,Qn={},du={},gp=30,Ol=[],Kh="",$h=function(e){var t=e[0],n,i;if(Wi(t)||Vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ol.length;i--&&!Ol[i].targetTest(t););n=Ol[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Yg(e[i],n)))||e.splice(i,1);return e},ds=function(e){return e._gsap||$h(mi(e))[0]._gsap},bg=function(e,t,n){return(n=e[t])&&Vt(n)?e[t]():Wh(n)&&e.getAttribute&&e.getAttribute(t)||n},Xn=function(e,t){return(e=e.split(",")).forEach(t)||e},Xt=function(e){return Math.round(e*1e5)/1e5||0},hn=function(e){return Math.round(e*1e7)/1e7||0},lo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},tT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},nc=function(){var e=Fr.length,t=Fr.slice(0),n,i;for(Ju={},Fr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Eg=function(e,t,n,i){Fr.length&&!bn&&nc(),e.render(t,n,i||bn&&t<0&&(e._initted||e._startAt)),Fr.length&&!bn&&nc()},Ag=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(yg).length<2?t:fn(e)?e.trim():e},Rg=function(e){return e},_i=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},nT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ws=function(e,t){for(var n in t)e[n]=t[n];return e},_p=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Wi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ic=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ha=function(e){var t=e.parent||zt,n=e.keyframes?nT(En(e.keyframes)):_i;if(Wn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},iT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Cg=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},vc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Hr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ps=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},rT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Qu=function(e,t,n,i){return e._startAt&&(bn?e._startAt.revert(Nl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},sT=function r(e){return!e||e._ts&&r(e.parent)},vp=function(e){return e._repeat?Ao(e._tTime,e=e.duration()+e._rDelay)*e:0},Ao=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},rc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},xc=function(e){return e._end=hn(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},yc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=hn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),xc(e),n._dirty||ps(n,e)),e},Pg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=rc(e.rawTime(),t),(!t._dur||Ha(0,t.totalDuration(),n)-t._tTime>At)&&t.render(n,!0)),ps(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-At}},Di=function(e,t,n,i){return t.parent&&Hr(t),t._start=hn((hr(n)?n:n||e!==zt?li(e,n,t):e._time)+t._delay),t._end=hn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Cg(e,t,"_first","_last",e._sort?"_start":0),eh(t)||(e._recent=t),i||Pg(e,t),e._ts<0&&yc(e,e._tTime),e},Lg=function(e,t){return(si.ScrollTrigger||jh("scrollTrigger",t))&&si.ScrollTrigger.create(t,e)},Ig=function(e,t,n,i,s){if(Jh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!bn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Tg!==ei.frame)return Fr.push(e),e._lazy=[s,i],1},oT=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},eh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},aT=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&oT(e)&&!(!e._initted&&eh(e))||(e._ts<0||e._dp._ts<0)&&!eh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ha(0,e._tDur,t),u=Ao(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ao(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||bn||i||e._zTime===At||!t&&e._zTime){if(!e._initted&&Ig(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?At:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Qu(e,t,n,!0),e._onUpdate&&!n&&ni(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ni(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Hr(e,1),!n&&!bn&&(ni(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},lT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ro=function(e,t,n,i){var s=e._repeat,o=hn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:hn(o*(s+1)+e._rDelay*s):o,a>0&&!i&&yc(e,e._tTime=e._tDur*a),e.parent&&xc(e),n||ps(e.parent,e),e},xp=function(e){return e instanceof Un?ps(e):Ro(e,e._dur)},cT={_start:0,endTime:Ra,totalDuration:Ra},li=function r(e,t,n){var i=e.labels,s=e._recent||cT,o=e.duration()>=pi?s.endTime(!1):e._dur,a,l,c;return fn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(En(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},fa=function(e,t,n){var i=hr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Wn(l.vars.inherit)&&l.parent;o.immediateRender=Wn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Zt(t[0],o,t[s+1])},Xr=function(e,t){return e||e===0?t(e):t},Ha=function(e,t,n){return n<e?e:n>t?t:n},wn=function(e,t){return!fn(e)||!(t=Jw.exec(e))?"":t[1]},uT=function(e,t,n){return Xr(n,function(i){return Ha(e,t,i)})},th=[].slice,Dg=function(e,t){return e&&Wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wi(e[0]))&&!e.nodeType&&e!==Ri},hT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return fn(i)&&!t||Dg(i,1)?(s=n).push.apply(s,mi(i)):n.push(i)})||n},mi=function(e,t,n){return Nt&&!t&&Nt.selector?Nt.selector(e):fn(e)&&!n&&(Zu||!Co())?th.call((t||qh).querySelectorAll(e),0):En(e)?hT(e,n):Dg(e)?th.call(e,0):e?[e]:[]},nh=function(e){return e=mi(e)[0]||Aa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return mi(t,n.querySelectorAll?n:n===e?Aa("Invalid scope")||qh.createElement("div"):e)}},Ug=function(e){return e.sort(function(){return .5-Math.random()})},Ng=function(e){if(Vt(e))return e;var t=Wi(e)?e:{each:e},n=ms(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return fn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,g){var _=(g||t).length,p=o[_],m,S,y,b,L,w,M,T,x;if(!p){if(x=t.grid==="auto"?0:(t.grid||[1,pi])[1],!x){for(M=-pi;M<(M=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(p=o[_]=[],m=l?Math.min(x,_)*u-.5:i%x,S=x===pi?0:l?_*h/x-.5:i/x|0,M=0,T=pi,w=0;w<_;w++)y=w%x-m,b=S-(w/x|0),p[w]=L=c?Math.abs(c==="y"?b:y):gg(y*y+b*b),L>M&&(M=L),L<T&&(T=L);i==="random"&&Ug(p),p.max=M-T,p.min=T,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=wn(t.amount||t.each)||0,n=n&&_<0?Xg(n):n}return _=(p[d]-p.min)/p.max||0,hn(p.b+(n?n(_):_)*p.v)+p.u}},ih=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=hn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(hr(n)?0:wn(n))}},Og=function(e,t){var n=En(e),i,s;return!n&&Wi(e)&&(i=n=e.radius||pi,e.values?(e=mi(e.values),(s=!hr(e[0]))&&(i*=i)):e=ih(e.increment)),Xr(t,n?Vt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=pi,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||hr(o)?u:u+wn(o)}:ih(e))},Fg=function(e,t,n,i){return Xr(En(e)?!t:n===!0?!!(n=0):!i,function(){return En(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},fT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},dT=function(e,t){return function(n){return e(parseFloat(n))+(t||wn(n))}},pT=function(e,t,n){return Bg(e,t,0,1,n)},zg=function(e,t,n){return Xr(n,function(i){return e[~~t(i)]})},mT=function r(e,t,n){var i=t-e;return En(e)?zg(e,r(0,e.length),t):Xr(n,function(s){return(i+(s-e)%i)%i+e})},gT=function r(e,t,n){var i=t-e,s=i*2;return En(e)?zg(e,r(0,e.length-1),t):Xr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ca=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?yg:$u),n+=e.substr(t,i-t)+Fg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Bg=function(e,t,n,i,s){var o=t-e,a=i-n;return Xr(s,function(l){return n+((l-e)/o*a||0)})},_T=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=fn(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(En(e)&&!En(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=ws(En(e)?[]:{},e));if(!u){for(l in t)Zh.call(a,e,l,"get",t[l]);s=function(g){return tf(g,a)||(o?e.p:e)}}}return Xr(n,s)},yp=function(e,t,n){var i=e.labels,s=pi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ni=function(e,t,n){var i=e.vars,s=i[t],o=Nt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Fr.length&&nc(),a&&(Nt=a),u=l?s.apply(c,l):s.call(c),Nt=o,u},Qo=function(e){return Hr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bn),e.progress()<1&&ni(e,"onInterrupt"),e},ro,kg=[],Hg=function(e){if(e)if(e=!e.name&&e.default||e,Xh()||e.headless){var t=e.name,n=Vt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ra,render:tf,add:Zh,kill:DT,modifier:IT,rawVars:0},o={targetTest:0,get:0,getSetter:ef,aliases:{},register:0};if(Co(),e!==i){if(Qn[t])return;_i(i,_i(ic(e,s),o)),ws(i.prototype,ws(s,ic(e,o))),Qn[i.prop=t]=i,e.targetTest&&(Ol.push(i),Yh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}wg(t,i),e.register&&e.register(Yn,i,qn)}else kg.push(e)},wt=255,ea={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},pu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*wt+.5|0},Gg=function(e,t,n){var i=e?hr(e)?[e>>16,e>>8&wt,e&wt]:0:ea.black,s,o,a,l,c,u,h,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ea[e])i=ea[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&wt,i&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match($u),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=pu(l+1/3,s,o),i[1]=pu(l,s,o),i[2]=pu(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(vg),n&&i.length<4&&(i[3]=1),i}else i=e.match($u)||ea.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/wt,o=i[1]/wt,a=i[2]/wt,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Vg=function(e){var t=[],n=[],i=-1;return e.split(zr).forEach(function(s){var o=s.match(io)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Sp=function(e,t,n){var i="",s=(e+i).match(zr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Gg(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Vg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(zr,"1").split(io),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(zr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},zr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ea)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),vT=/hsl[a]?\(/,Wg=function(e){var t=e.join(" "),n;if(zr.lastIndex=0,zr.test(t))return n=vT.test(t),e[1]=Sp(e[1],n),e[0]=Sp(e[0],n,Vg(e[1])),!0},Pa,ei=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,g=function _(p){var m=r()-i,S=p===!0,y,b,L,w;if((m>e||m<0)&&(n+=m-t),i+=m,L=i-n,y=L-o,(y>0||S)&&(w=++h.frame,d=L-h.time*1e3,h.time=L=L/1e3,o+=y+(y>=s?4:s-y),b=1),S||(l=c(_)),b)for(f=0;f<a.length;f++)a[f](L,d,w,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Sg&&(!Zu&&Xh()&&(Ri=Zu=window,qh=Ri.document||{},si.gsap=Yn,(Ri.gsapVersions||(Ri.gsapVersions=[])).push(Yn.version),Mg(tc||Ri.GreenSockGlobals||!Ri.gsap&&Ri||{}),kg.forEach(Hg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},Pa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Pa=0,c=Ra},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,S){var y=m?function(b,L,w,M){p(b,L,w,M),h.remove(y)}:p;return h.remove(p),a[S?"unshift":"push"](y),Co(),y},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},h}(),Co=function(){return!Pa&&ei.wake()},lt={},xT=/^[\d.\-M][\d.\-,\s]/,yT=/["']/g,ST=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(yT,"").trim():+c,i=l.substr(a+1).trim();return t},MT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},wT=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ST(t[1])]:MT(e).split(",").map(Ag)):lt._CE&&xT.test(e)?lt._CE("",e):n},Xg=function(e){return function(t){return 1-e(1-t)}},qg=function r(e,t){for(var n=e._first,i;n;)n instanceof Un?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ms=function(e,t){return e&&(Vt(e)?e:lt[e]||wT(e))||t},Cs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Xn(e,function(a){lt[a]=si[a]=s,lt[o=a.toLowerCase()]=n;for(var l in s)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=s[l]}),s},jg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},mu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Ku*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Zw((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:jg(a);return s=Ku/s,l.config=function(c,u){return r(e,c,u)},l},gu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:jg(n);return i.config=function(s){return r(e,s)},i};Xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Cs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;Cs("Elastic",mu("in"),mu("out"),mu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Cs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Cs("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Cs("Circ",function(r){return-(gg(1-r*r)-1)});Cs("Sine",function(r){return r===1?1:-$w(r*Yw)+1});Cs("Back",gu("in"),gu("out"),gu());lt.SteppedEase=lt.steps=si.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-At;return function(a){return((i*Ha(0,o,a)|0)+s)*n}}};Eo.ease=lt["quad.out"];Xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Kh+=r+","+r+"Params,"});var Yg=function(e,t){this.id=Kw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:bg,this.set=t?t.getSetter:ef},La=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ro(this,+t.duration,1,1),this.data=t.data,Nt&&(this._ctx=Nt,Nt.data.push(this)),Pa||ei.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ro(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Co(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(yc(this,n),!s._dp||s.parent||Pg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===At||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Eg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+vp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+vp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ao(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?rc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-At?0:this._rts,this.totalTime(Ha(-Math.abs(this._delay),this._tDur,s),i!==!1),xc(this),rT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Co(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Di(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?rc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=eT);var i=bn;return bn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),bn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,xp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,xp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(li(this,n),Wn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Wn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-At)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Vt(n)?n:Rg,a=function(){var c=i.then;i.then=null,Vt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Qo(this)},r}();_i(La.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var Un=function(r){mg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Wn(n.sortChildren),zt&&Di(n.parent||zt,ir(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Lg(ir(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return fa(0,arguments,this),this},t.from=function(i,s,o){return fa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return fa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ha(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Zt(i,s,li(this,o),1),this},t.call=function(i,s,o){return Di(this,Zt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Zt(i,o,li(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ha(o).immediateRender=Wn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ha(a).immediateRender=Wn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:hn(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,p,m,S,y,b,L,w,M;if(this!==zt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,b=this._start,y=this._ts,m=!y,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(d=hn(u%p),u===l?(_=this._repeat,d=c):(_=~~(u/p),_&&_===u/p&&(d=c,_--),d>c&&(d=c)),L=Ao(this._tTime,p),!a&&this._tTime&&L!==_&&this._tTime-L*p-this._dur<=0&&(L=_),w&&_&1&&(d=c-d,M=1),_!==L&&!this._lock){var T=w&&L&1,x=T===(w&&_&1);if(_<L&&(T=!T),a=T?0:u%c?c:u,this._lock=1,this.render(a||(M?0:hn(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=T?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;qg(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=lT(this,hn(a),hn(d)),S&&(u-=d-(d=S._start))),this._tTime=u,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!_&&(ni(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!m){S=0,g&&(u+=this._zTime=-At);break}}f=g}else{f=this._last;for(var v=i<0?i:d;f;){if(g=f._prev,(f._act||v<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,s,o||bn&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!m){S=0,g&&(u+=this._zTime=v?-At:At);break}}f=g}}if(S&&!s&&(this.pause(),S.render(d>=a?0:-At)._zTime=d>=a?1:-1,this._ts))return this._start=b,xc(this),this.render(i,s,o);this._onUpdate&&!s&&ni(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(b===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Hr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(ni(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(hr(s)||(s=li(this,s,i)),!(i instanceof La)){if(En(i))return i.forEach(function(a){return o.add(a,s)}),this;if(fn(i))return this.addLabel(i,s);if(Vt(i))i=Zt.delayedCall(0,i);else return this}return this!==i?Di(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-pi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Zt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return fn(i)?this.removeLabel(i):Vt(i)?this.killTweensOf(i):(vc(this,i),i===this._recent&&(this._recent=this._last),ps(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=hn(ei.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=li(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Zt.delayedCall(0,s||Ra,o);return a.data="isPause",this._hasPause=1,Di(this,a,li(this,i))},t.removePause=function(i){var s=this._first;for(i=li(this,i);s;)s._start===i&&s.data==="isPause"&&Hr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Lr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=mi(i),l=this._first,c=hr(s),u;l;)l instanceof Zt?tT(l._targets,a)&&(c?(!Lr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=li(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=Zt.to(o,_i({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||At,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Ro(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,_i({startAt:{time:li(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),yp(this,li(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),yp(this,li(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ps(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ps(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=pi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Di(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ro(o,o===zt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(zt._ts&&(Eg(zt,rc(i,zt)),Tg=ei.frame),ei.frame>=gp){gp+=ri.autoSleep||120;var s=zt._first;if((!s||!s._ts)&&ri.autoSleep&&ei._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ei.sleep()}}},e}(La);_i(Un.prototype,{_lock:0,_hasPause:0,_forcing:0});var TT=function(e,t,n,i,s,o,a){var l=new qn(this._pt,e,t,0,1,e0,null,s),c=0,u=0,h,d,f,g,_,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ca(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),d=n.match(fu)||[];h=fu.exec(i);)g=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?lo(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=fu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(xg.test(i)||m)&&(l.e=0),this._pt=l,l},Zh=function(e,t,n,i,s,o,a,l,c,u){Vt(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:Vt(h)?c?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Vt(h)?c?CT:Jg:Qh,g;if(fn(i)&&(~i.indexOf("random(")&&(i=Ca(i)),i.charAt(1)==="="&&(g=lo(d,i)+(wn(d)||0),(g||g===0)&&(i=g))),!u||d!==i||rh)return!isNaN(d*i)&&i!==""?(g=new qn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?LT:Qg,0,f),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&jh(t,i),TT.call(this,e,t,d,i,f,l||ri.stringFilter,c))},bT=function(e,t,n,i,s){if(Vt(e)&&(e=da(e,s,t,n,i)),!Wi(e)||e.style&&e.nodeType||En(e)||_g(e))return fn(e)?da(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=da(e[a],s,t,n,i);return o},Kg=function(e,t,n,i,s,o){var a,l,c,u;if(Qn[e]&&(a=new Qn[e]).init(s,a.rawVars?t[e]:bT(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new qn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ro))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Lr,rh,Jh=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,y=e._overwrite==="auto"&&!Vh,b=e.timeline,L,w,M,T,x,v,C,I,O,k,B,H,G;if(b&&(!d||!s)&&(s="none"),e._ease=ms(s,Eo.ease),e._yEase=h?Xg(ms(h===!0?s:h,Eo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!b&&!!i.runBackwards,!b||d&&!i.stagger){if(I=p[0]?ds(p[0]).harness:0,H=I&&i[I.prop],L=ic(i,Yh),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&g?Nl:Qw),_._lazy=0),o){if(Hr(e._startAt=Zt.set(p,_i({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Wn(l),startAt:null,delay:0,onUpdate:c&&function(){return ni(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn||!a&&!f)&&e._startAt.revert(Nl),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),M=_i({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Wn(l),immediateRender:a,stagger:0,parent:m},L),H&&(M[I.prop]=H),Hr(e._startAt=Zt.set(p,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn?e._startAt.revert(Nl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Wn(l)||l&&!g,w=0;w<p.length;w++){if(x=p[w],C=x._gsap||$h(p)[w]._gsap,e._ptLookup[w]=k={},Ju[C.id]&&Fr.length&&nc(),B=S===p?w:S.indexOf(x),I&&(O=new I).init(x,H||L,e,B,S)!==!1&&(e._pt=T=new qn(e._pt,x,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(W){k[W]=T}),O.priority&&(v=1)),!I||H)for(M in L)Qn[M]&&(O=Kg(M,L,e,B,x,S))?O.priority&&(v=1):k[M]=T=Zh.call(e,x,M,"get",L[M],B,S,0,i.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),y&&e._pt&&(Lr=e,zt.killTweensOf(x,k,e.globalTime(t)),G=!e.parent,Lr=0),e._pt&&l&&(Ju[C.id]=1)}v&&t0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,d&&t<=0&&b.render(pi,!0,!0)},ET=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return rh=1,e.vars[t]="+=0",Jh(e,a),rh=0,l?Aa(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Xt(n)+wn(h.e)),h.b&&(h.b=u.s+wn(h.b))},AT=function(e,t){var n=e[0]?ds(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=ws({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},RT=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(En(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},da=function(e,t,n,i,s){return Vt(e)?e.call(t,n,i,s):fn(e)&&~e.indexOf("random(")?Ca(e):e},$g=Kh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Zg={};Xn($g+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Zg[r]=1});var Zt=function(r){mg(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ha(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=i.parent||zt,y=(En(n)||_g(n)?hr(n[0]):"length"in i)?[n]:mi(n),b,L,w,M,T,x,v,C;if(a._targets=y.length?$h(y):Aa("GSAP target "+n+" not found. https://gsap.com",!ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||_l(c)||_l(u)){if(i=a.vars,b=a.timeline=new Un({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:y}),b.kill(),b.parent=b._dp=ir(a),b._start=0,d||_l(c)||_l(u)){if(M=y.length,v=d&&Ng(d),Wi(d))for(T in d)~$g.indexOf(T)&&(C||(C={}),C[T]=d[T]);for(L=0;L<M;L++)w=ic(i,Zg),w.stagger=0,m&&(w.yoyoEase=m),C&&ws(w,C),x=y[L],w.duration=+da(c,ir(a),L,x,y),w.delay=(+da(u,ir(a),L,x,y)||0)-a._delay,!d&&M===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),b.to(x,w,v?v(L,x,y):0),b._ease=lt.none;b.duration()?c=u=0:a.timeline=0}else if(g){ha(_i(b.vars.defaults,{ease:"none"})),b._ease=ms(g.ease||i.ease||"none");var I=0,O,k,B;if(En(g))g.forEach(function(H){return b.to(y,H,">")}),b.duration();else{w={};for(T in g)T==="ease"||T==="easeEach"||RT(T,g[T],w,g.easeEach);for(T in w)for(O=w[T].sort(function(H,G){return H.t-G.t}),I=0,L=0;L<O.length;L++)k=O[L],B={ease:k.e,duration:(k.t-(L?O[L-1].t:0))/100*c},B[T]=k.v,b.to(y,B,I),I+=B.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return f===!0&&!Vh&&(Lr=ir(a),zt.killTweensOf(y),Lr=0),Di(S,ir(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===hn(S._time)&&Wn(h)&&sT(ir(a))&&S.data!=="nested")&&(a._tTime=-At,a.render(Math.max(0,-u)||0)),p&&Lg(ir(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-At&&!u?l:i<At?0:i,d,f,g,_,p,m,S,y,b;if(!c)aT(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(d=hn(h%_),h===l?(g=this._repeat,d=c):(g=~~(h/_),g&&g===hn(h/_)&&(d=c,g--),d>c&&(d=c)),m=this._yoyo&&g&1,m&&(b=this._yEase,d=c-d),p=Ao(this._tTime,_),d===a&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(y&&this._yEase&&qg(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(hn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Ig(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(b||this._ease)(d/c),this._from&&(this.ratio=S=1-S),d&&!a&&!s&&!g&&(ni(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Qu(this,i,s,o),ni(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&ni(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Qu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Hr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(ni(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Pa||ei.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Jh(this,c),u=this._ease(c/this._dur),ET(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(yc(this,0),this.parent||Cg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Qo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Lr&&Lr.vars.overwrite!==!0)._first||Qo(this),this.parent&&o!==this.timeline.totalDuration()&&Ro(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?mi(i):a,c=this._ptLookup,u=this._pt,h,d,f,g,_,p,m;if((!s||s==="all")&&iT(a,l))return s==="all"&&(this._pt=0),Qo(this);for(h=this._op=this._op||[],s!=="all"&&(fn(s)&&(_={},Xn(s,function(S){return _[S]=1}),s=_),s=AT(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(h[m]=s,g=d,f={}):(f=h[m]=h[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&vc(this,p,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&Qo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return fa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return fa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return zt.killTweensOf(i,s,o)},e}(La);_i(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xn("staggerTo,staggerFrom,staggerFromTo",function(r){Zt[r]=function(){var e=new Un,t=th.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Qh=function(e,t,n){return e[t]=n},Jg=function(e,t,n){return e[t](n)},CT=function(e,t,n,i){return e[t](i.fp,n)},PT=function(e,t,n){return e.setAttribute(t,n)},ef=function(e,t){return Vt(e[t])?Jg:Wh(e[t])&&e.setAttribute?PT:Qh},Qg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},LT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},e0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},tf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},IT=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},DT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?vc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},UT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},t0=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},qn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Qg,this.d=l||this,this.set=c||Qh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=UT,this.m=n,this.mt=s,this.tween=i},r}();Xn(Kh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Yh[r]=1});si.TweenMax=si.TweenLite=Zt;si.TimelineLite=si.TimelineMax=Un;zt=new Un({sortChildren:!1,defaults:Eo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ri.stringFilter=Wg;var gs=[],Fl={},NT=[],Mp=0,OT=0,_u=function(e){return(Fl[e]||NT).map(function(t){return t()})},sh=function(){var e=Date.now(),t=[];e-Mp>2&&(_u("matchMediaInit"),gs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ri.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),_u("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Mp=e,_u("matchMedia"))},n0=function(){function r(t,n){this.selector=n&&nh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=OT++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Vt(n)&&(s=i,i=n,n=Vt);var o=this,a=function(){var c=Nt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=nh(s)),Nt=o,h=i.apply(o,arguments),Vt(h)&&o._r.push(h),Nt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Vt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Nt;Nt=null,n(this),Nt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Zt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Un?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Zt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=gs.length;o--;)gs[o].id===this.id&&gs.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),FT=function(){function r(t){this.contexts=[],this.scope=t,Nt&&Nt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Wi(n)||(n={matches:n});var o=new n0(0,s||this.scope),a=o.conditions={},l,c,u;Nt&&!o.selector&&(o.selector=Nt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ri.matchMedia(n[c]),l&&(gs.indexOf(o)<0&&gs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(sh):l.addEventListener("change",sh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),sc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Hg(i)})},timeline:function(e){return new Un(e)},getTweensOf:function(e,t){return zt.getTweensOf(e,t)},getProperty:function(e,t,n,i){fn(e)&&(e=mi(e)[0]);var s=ds(e||{}).get,o=n?Rg:Ag;return n==="native"&&(n=""),e&&(t?o((Qn[t]&&Qn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Qn[a]&&Qn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=mi(e),e.length>1){var i=e.map(function(u){return Yn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Qn[t],a=ds(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;ro._pt=0,h.init(e,n?u+n:u,ro,0,[e]),h.render(1,h),ro._pt&&tf(1,ro)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Yn.to(e,ws((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ms(e.ease,Eo.ease)),_p(Eo,e||{})},config:function(e){return _p(ri,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Qn[a]&&!si[a]&&Aa(t+" effect requires "+a+" plugin.")}),du[t]=function(a,l,c){return n(mi(a),_i(l||{},s),c)},o&&(Un.prototype[t]=function(a,l,c){return this.add(du[t](a,Wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=ms(t)},parseEase:function(e,t){return arguments.length?ms(e,t):lt},getById:function(e){return zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Un(e),i,s;for(n.smoothChildTiming=Wn(e.smoothChildTiming),zt.remove(n),n._dp=0,n._time=n._tTime=zt._time,i=zt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Zt&&i.vars.onComplete===i._targets[0]))&&Di(n,i,i._start-i._delay),i=s;return Di(zt,n,0),n},context:function(e,t){return e?new n0(e,t):Nt},matchMedia:function(e){return new FT(e)},matchMediaRefresh:function(){return gs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||sh()},addEventListener:function(e,t){var n=Fl[e]||(Fl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Fl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:mT,wrapYoyo:gT,distribute:Ng,random:Fg,snap:Og,normalize:pT,getUnit:wn,clamp:uT,splitColor:Gg,toArray:mi,selector:nh,mapRange:Bg,pipe:fT,unitize:dT,interpolate:_T,shuffle:Ug},install:Mg,effects:du,ticker:ei,updateRoot:Un.updateRoot,plugins:Qn,globalTimeline:zt,core:{PropTween:qn,globals:wg,Tween:Zt,Timeline:Un,Animation:La,getCache:ds,_removeLinkedListItem:vc,reverting:function(){return bn},context:function(e){return e&&Nt&&(Nt.data.push(e),e._ctx=Nt),Nt},suppressOverwrites:function(e){return Vh=e}}};Xn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return sc[r]=Zt[r]});ei.add(Un.updateRoot);ro=sc.to({},{duration:0});var zT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},BT=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=zT(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},vu=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(fn(s)&&(l={},Xn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}BT(a,s)}}}},Yn=sc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)bn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},vu("roundProps",ih),vu("modifiers"),vu("snap",Og))||sc;Zt.version=Un.version=Yn.version="3.12.5";Sg=1;Xh()&&Co();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wp,Ir,co,nf,us,Tp,rf,kT=function(){return typeof window<"u"},fr={},rs=180/Math.PI,uo=Math.PI/180,Ks=Math.atan2,bp=1e8,sf=/([A-Z])/g,HT=/(left|right|width|margin|padding|x)/i,GT=/[\s,\(]\S/,Oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},oh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},VT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},WT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},XT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},i0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},r0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},qT=function(e,t,n){return e.style[t]=n},jT=function(e,t,n){return e.style.setProperty(t,n)},YT=function(e,t,n){return e._gsap[t]=n},KT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},$T=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},ZT=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Bt="transform",jn=Bt+"Origin",JT=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in fr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=rr(i,a)}):this.tfm[e]=o.x?o[e]:rr(i,e),e===jn&&(this.tfm.zOrigin=o.zOrigin);else return Oi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Bt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(jn,t,"")),e=Bt}(s||t)&&this.props.push(e,t,s[e])},s0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},QT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(sf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=rf(),(!s||!s.isStart)&&!n[Bt]&&(s0(n),i.zOrigin&&n[jn]&&(n[jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},o0=function(e,t){var n={target:e,props:[],revert:QT,save:JT};return e._gsap||Yn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},a0,ah=function(e,t){var n=Ir.createElementNS?Ir.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ir.createElement(e);return n&&n.style?n:Ir.createElement(e)},Bi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(sf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Po(t)||t,1)||""},Ep="O,Moz,ms,Ms,Webkit".split(","),Po=function(e,t,n){var i=t||us,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ep[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Ep[o]:"")+e},lh=function(){kT()&&window.document&&(wp=window,Ir=wp.document,co=Ir.documentElement,us=ah("div")||{style:{}},ah("div"),Bt=Po(Bt),jn=Bt+"Origin",us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",a0=!!Po("perspective"),rf=Yn.core.reverting,nf=1)},xu=function r(e){var t=ah("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(co.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),co.removeChild(t),this.style.cssText=s,o},Ap=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},l0=function(e){var t;try{t=e.getBBox()}catch{t=xu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===xu||(t=xu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Ap(e,["x","cx","x1"])||0,y:+Ap(e,["y","cy","y1"])||0,width:0,height:0}:t},c0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&l0(e))},Ts=function(e,t){if(t){var n=e.style,i;t in fr&&t!==jn&&(t=Bt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(sf,"-$1").toLowerCase())):n.removeAttribute(t)}},Dr=function(e,t,n,i,s,o){var a=new qn(e._pt,t,n,0,1,o?r0:i0);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Rp={deg:1,rad:1,turn:1},eb={grid:1,flex:1},Gr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=us.style,l=HT.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,_,p,m;if(i===o||!s||Rp[i]||Rp[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&c0(e),(f||o==="%")&&(fr[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Xt(f?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(d?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ir||!_.appendChild)&&(_=Ir.body),p=_._gsap,p&&f&&p.width&&l&&p.time===ei.time&&!p.uncache)return Xt(s/p.width*h);if(f&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,g=e[u],S?e.style[t]=S:Ts(e,t)}else(f||o==="%")&&!eb[Bi(_,"display")]&&(a.position=Bi(e,"position")),_===e&&(a.position="static"),_.appendChild(us),g=us[u],_.removeChild(us),a.position="absolute";return l&&f&&(p=ds(_),p.time=ei.time,p.width=_[u]),Xt(d?g*s/h:g&&s?h/g*s:0)},rr=function(e,t,n,i){var s;return nf||lh(),t in Oi&&t!=="transform"&&(t=Oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),fr[t]&&t!=="transform"?(s=Da(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ac(Bi(e,jn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=oc[t]&&oc[t](e,t,n)||Bi(e,t)||bg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Gr(e,t,s,n)+n:s},tb=function(e,t,n,i){if(!n||n==="none"){var s=Po(t,e,1),o=s&&Bi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Bi(e,"borderTopColor"))}var a=new qn(this._pt,e.style,t,0,1,e0),l=0,c=0,u,h,d,f,g,_,p,m,S,y,b,L;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=Bi(e,t)||i,_?e.style[t]=_:Ts(e,t)),u=[n,i],Wg(u),n=u[0],i=u[1],d=n.match(io)||[],L=i.match(io)||[],L.length){for(;h=io.exec(i);)p=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(f=parseFloat(_)||0,b=_.substr((f+"").length),p.charAt(1)==="="&&(p=lo(f,p)+b),m=parseFloat(p),y=p.substr((m+"").length),l=io.lastIndex-y.length,y||(y=y||ri.units[t]||b,l===i.length&&(i+=y,a.e+=y)),b!==y&&(f=Gr(e,t,_,y)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?r0:i0;return xg.test(i)&&(a.e=0),this._pt=a,a},Cp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},nb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Cp[n]||n,t[1]=Cp[i]||i,t.join(" ")},ib=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],fr[a]&&(l=1,a=a==="transformOrigin"?jn:Bt),Ts(n,a);l&&(Ts(n,Bt),o&&(o.svg&&n.removeAttribute("transform"),Da(n,1),o.uncache=1,s0(i)))}},oc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new qn(e._pt,t,n,0,0,ib);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ia=[1,0,0,1,0,0],u0={},h0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Pp=function(e){var t=Bi(e,Bt);return h0(t)?Ia:t.substr(7).match(vg).map(Xt)},of=function(e,t){var n=e._gsap||ds(e),i=e.style,s=Pp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ia:s):(s===Ia&&!e.offsetParent&&e!==co&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,co.appendChild(e)),s=Pp(e),l?i.display=l:Ts(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):co.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ch=function(e,t,n,i,s,o){var a=e._gsap,l=s||of(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],S=l[5],y=t.split(" "),b=parseFloat(y[0])||0,L=parseFloat(y[1])||0,w,M,T,x;n?l!==Ia&&(M=f*p-g*_)&&(T=b*(p/M)+L*(-_/M)+(_*S-p*m)/M,x=b*(-g/M)+L*(f/M)-(f*S-g*m)/M,b=T,L=x):(w=l0(e),b=w.x+(~y[0].indexOf("%")?b/100*w.width:b),L=w.y+(~(y[1]||y[0]).indexOf("%")?L/100*w.height:L)),i||i!==!1&&a.smooth?(m=b-c,S=L-u,a.xOffset=h+(m*f+S*_)-m,a.yOffset=d+(m*g+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=L,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[jn]="0px 0px",o&&(Dr(o,a,"xOrigin",c,b),Dr(o,a,"yOrigin",u,L),Dr(o,a,"xOffset",h,a.xOffset),Dr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+L)},Da=function(e,t){var n=e._gsap||new Yg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Bi(e,jn)||"0",u,h,d,f,g,_,p,m,S,y,b,L,w,M,T,x,v,C,I,O,k,B,H,G,W,J,U,he,Ue,We,$,se;return u=h=d=_=p=m=S=y=b=0,f=g=1,n.svg=!!(e.getCTM&&c0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),i.scale=i.rotate=i.translate="none"),M=of(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),ch(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,M)),L=n.xOrigin||0,w=n.yOrigin||0,M!==Ia&&(C=M[0],I=M[1],O=M[2],k=M[3],u=B=M[4],h=H=M[5],M.length===6?(f=Math.sqrt(C*C+I*I),g=Math.sqrt(k*k+O*O),_=C||I?Ks(I,C)*rs:0,S=O||k?Ks(O,k)*rs+_:0,S&&(g*=Math.abs(Math.cos(S*uo))),n.svg&&(u-=L-(L*C+w*O),h-=w-(L*I+w*k))):(se=M[6],We=M[7],U=M[8],he=M[9],Ue=M[10],$=M[11],u=M[12],h=M[13],d=M[14],T=Ks(se,Ue),p=T*rs,T&&(x=Math.cos(-T),v=Math.sin(-T),G=B*x+U*v,W=H*x+he*v,J=se*x+Ue*v,U=B*-v+U*x,he=H*-v+he*x,Ue=se*-v+Ue*x,$=We*-v+$*x,B=G,H=W,se=J),T=Ks(-O,Ue),m=T*rs,T&&(x=Math.cos(-T),v=Math.sin(-T),G=C*x-U*v,W=I*x-he*v,J=O*x-Ue*v,$=k*v+$*x,C=G,I=W,O=J),T=Ks(I,C),_=T*rs,T&&(x=Math.cos(T),v=Math.sin(T),G=C*x+I*v,W=B*x+H*v,I=I*x-C*v,H=H*x-B*v,C=G,B=W),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=Xt(Math.sqrt(C*C+I*I+O*O)),g=Xt(Math.sqrt(H*H+se*se)),T=Ks(B,H),S=Math.abs(T)>2e-4?T*rs:0,b=$?1/($<0?-$:$):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!h0(Bi(e,Bt)),G&&e.setAttribute("transform",G))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Xt(f),n.scaleY=Xt(g),n.rotation=Xt(_)+a,n.rotationX=Xt(p)+a,n.rotationY=Xt(m)+a,n.skewX=S+a,n.skewY=y+a,n.transformPerspective=b+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[jn]=ac(c)),n.xOffset=n.yOffset=0,n.force3D=ri.force3D,n.renderTransform=n.svg?sb:a0?f0:rb,n.uncache=0,n},ac=function(e){return(e=e.split(" "))[0]+" "+e[1]},yu=function(e,t,n){var i=wn(t);return Xt(parseFloat(t)+parseFloat(Gr(e,"x",n+"px",i)))+i},rb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,f0(e,t)},Qr="0deg",Xo="0px",es=") ",f0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,y=n.zOrigin,b="",L=m==="auto"&&e&&e!==1||m===!0;if(y&&(h!==Qr||u!==Qr)){var w=parseFloat(u)*uo,M=Math.sin(w),T=Math.cos(w),x;w=parseFloat(h)*uo,x=Math.cos(w),o=yu(S,o,M*x*-y),a=yu(S,a,-Math.sin(w)*-y),l=yu(S,l,T*x*-y+y)}p!==Xo&&(b+="perspective("+p+es),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(L||o!==Xo||a!==Xo||l!==Xo)&&(b+=l!==Xo||L?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+es),c!==Qr&&(b+="rotate("+c+es),u!==Qr&&(b+="rotateY("+u+es),h!==Qr&&(b+="rotateX("+h+es),(d!==Qr||f!==Qr)&&(b+="skew("+d+", "+f+es),(g!==1||_!==1)&&(b+="scale("+g+", "+_+es),S.style[Bt]=b||"translate(0, 0)"},sb=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,y=parseFloat(o),b=parseFloat(a),L,w,M,T,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=uo,c*=uo,L=Math.cos(l)*h,w=Math.sin(l)*h,M=Math.sin(l-c)*-d,T=Math.cos(l-c)*d,c&&(u*=uo,x=Math.tan(c-u),x=Math.sqrt(1+x*x),M*=x,T*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),L*=x,w*=x)),L=Xt(L),w=Xt(w),M=Xt(M),T=Xt(T)):(L=h,T=d,w=M=0),(y&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(y=Gr(f,"x",o,"px"),b=Gr(f,"y",a,"px")),(g||_||p||m)&&(y=Xt(y+g-(g*L+_*M)+p),b=Xt(b+_-(g*w+_*T)+m)),(i||s)&&(x=f.getBBox(),y=Xt(y+i/100*x.width),b=Xt(b+s/100*x.height)),x="matrix("+L+","+w+","+M+","+T+","+y+","+b+")",f.setAttribute("transform",x),S&&(f.style[Bt]=x)},ob=function(e,t,n,i,s){var o=360,a=fn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?rs:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*bp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*bp)%o-~~(c/o)*o)),e._pt=d=new qn(e._pt,t,n,i,c,VT),d.e=u,d.u="deg",e._props.push(n),d},Lp=function(e,t){for(var n in t)e[n]=t[n];return e},ab=function(e,t,n){var i=Lp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Bt]=t,a=Da(n,1),Ts(n,Bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Bt],o[Bt]=t,a=Da(n,1),o[Bt]=c);for(l in fr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=wn(c),g=wn(u),h=f!==g?Gr(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new qn(e._pt,a,l,h,d-h,oh),e._pt.u=g||0,e._props.push(l));Lp(a,i)};Xn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});oc[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(g){return rr(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,h)}});var d0={name:"css",register:lh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,g,_,p,m,S,y,b,L,w,M,T;nf||lh(),this.styles=this.styles||o0(e),T=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Qn[_]&&Kg(_,t,n,i,e,s)))){if(f=typeof u,g=oc[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ca(u)),g)g(this,e,_,u,n)&&(M=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",zr.lastIndex=0,zr.test(c)||(p=wn(c),m=wn(u)),m?p!==m&&(c=Gr(e,_,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),T.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],fn(c)&&~c.indexOf("random(")&&(c=Ca(c)),wn(c+"")||c==="auto"||(c+=ri.units[_]||wn(rr(e,_))||""),(c+"").charAt(1)==="="&&(c=rr(e,_))):c=rr(e,_),d=parseFloat(c),S=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in Oi&&(_==="autoAlpha"&&(d===1&&rr(e,"visibility")==="hidden"&&h&&(d=0),T.push("visibility",0,a.visibility),Dr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Oi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in fr,y){if(this.styles.save(_),b||(L=e._gsap,L.renderTransform&&!t.parseTransform||Da(e,t.parseTransform),w=t.smoothOrigin!==!1&&L.smooth,b=this._pt=new qn(this._pt,a,Bt,0,1,L.renderTransform,L,0,-1),b.dep=1),_==="scale")this._pt=new qn(this._pt,L,"scaleY",L.scaleY,(S?lo(L.scaleY,S+h):h)-L.scaleY||0,oh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){T.push(jn,0,a[jn]),u=nb(u),L.svg?ch(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==L.zOrigin&&Dr(this,L,"zOrigin",L.zOrigin,m),Dr(this,a,_,ac(c),ac(u)));continue}else if(_==="svgOrigin"){ch(e,u,1,w,0,this);continue}else if(_ in u0){ob(this,L,_,d,S?lo(d,S+u):u);continue}else if(_==="smoothOrigin"){Dr(this,L,"smooth",L.smooth,u);continue}else if(_==="force3D"){L[_]=u;continue}else if(_==="transform"){ab(this,u,e);continue}}else _ in a||(_=Po(_)||_);if(y||(h||h===0)&&(d||d===0)&&!GT.test(u)&&_ in a)p=(c+"").substr((d+"").length),h||(h=0),m=wn(u)||(_ in ri.units?ri.units[_]:p),p!==m&&(d=Gr(e,_,c,m)),this._pt=new qn(this._pt,y?L:a,_,d,(S?lo(d,S+h):h)-d,!y&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?XT:oh),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=WT);else if(_ in a)tb.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,s);else if(_!=="parseTransform"){jh(_,u);continue}y||(_ in a?T.push(_,0,a[_]):T.push(_,1,c||e[_])),o.push(_)}}M&&t0(this)},render:function(e,t){if(t.tween._time||!rf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:rr,aliases:Oi,getSetter:function(e,t,n){var i=Oi[t];return i&&i.indexOf(",")<0&&(t=i),t in fr&&t!==jn&&(e._gsap.x||rr(e,"x"))?n&&Tp===n?t==="scale"?KT:YT:(Tp=n||{})&&(t==="scale"?$T:ZT):e.style&&!Wh(e.style[t])?qT:~t.indexOf("-")?jT:ef(e,t)},core:{_removeProperty:Ts,_getMatrix:of}};Yn.utils.checkPrefix=Po;Yn.core.getStyleSaver=o0;(function(r,e,t,n){var i=Xn(r+","+e+","+t,function(s){fr[s]=1});Xn(e,function(s){ri.units[s]="deg",u0[s]=1}),Oi[i[13]]=r+","+e,Xn(n,function(s){var o=s.split(":");Oi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ri.units[r]="px"});Yn.registerPlugin(d0);var dn=Yn.registerPlugin(d0)||Yn;dn.core.Tween;function vl(...r){dn.to(r,{autoAlpha:0,display:"none",duration:1})}function Su(...r){dn.to(r,{autoAlpha:1,display:"block",duration:1}),console.log("show elements")}function Ip(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function lb(r,e,t){return e&&Ip(r.prototype,e),t&&Ip(r,t),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pn,zl,ti,Ur,Nr,ho,p0,ss,pa,m0,cr,Mi,g0,_0=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},v0=1,so=[],it=[],ki=[],ma=Date.now,uh=function(e,t){return t},cb=function(){var e=pa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,it),i.push.apply(i,ki),it=n,ki=i,uh=function(o,a){return t[o](a)}},Br=function(e,t){return~ki.indexOf(e)&&ki[ki.indexOf(e)+1][t]},ga=function(e){return!!~m0.indexOf(e)},Cn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},xl="scrollLeft",yl="scrollTop",hh=function(){return cr&&cr.isPressed||it.cache++},lc=function(e,t){var n=function i(s){if(s||s===0){v0&&(ti.history.scrollRestoration="manual");var o=cr&&cr.isPressed;s=i.v=Math.round(s)||(cr&&cr.iOS?1:0),e(s),i.cacheID=it.cache,o&&uh("ss",s)}else(t||it.cache!==i.cacheID||uh("ref"))&&(i.cacheID=it.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Nn={s:xl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:lc(function(r){return arguments.length?ti.scrollTo(r,nn.sc()):ti.pageXOffset||Ur[xl]||Nr[xl]||ho[xl]||0})},nn={s:yl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Nn,sc:lc(function(r){return arguments.length?ti.scrollTo(Nn.sc(),r):ti.pageYOffset||Ur[yl]||Nr[yl]||ho[yl]||0})},Gn=function(e,t){return(t&&t._ctx&&t._ctx.selector||pn.utils.toArray)(e)[0]||(typeof e=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Vr=function(e,t){var n=t.s,i=t.sc;ga(e)&&(e=Ur.scrollingElement||Nr);var s=it.indexOf(e),o=i===nn.sc?1:2;!~s&&(s=it.push(e)-1),it[s+o]||Cn(e,"scroll",hh);var a=it[s+o],l=a||(it[s+o]=lc(Br(e,n),!0)||(ga(e)?i:lc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=pn.getProperty(e,"scrollBehavior")==="smooth"),l},fh=function(e,t,n){var i=e,s=e,o=ma(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=ma();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,p=s,m=ma();return(g||g===0)&&g!==i&&u(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:h,getVelocity:d}},qo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Dp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},x0=function(){pa=pn.core.globals().ScrollTrigger,pa&&pa.core&&cb()},y0=function(e){return pn=e||_0(),!zl&&pn&&typeof document<"u"&&document.body&&(ti=window,Ur=document,Nr=Ur.documentElement,ho=Ur.body,m0=[ti,Ur,Nr,ho],pn.utils.clamp,g0=pn.core.context||function(){},ss="onpointerenter"in ho?"pointer":"mouse",p0=jt.isTouch=ti.matchMedia&&ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mi=jt.eventTypes=("ontouchstart"in Nr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Nr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return v0=0},500),x0(),zl=1),zl};Nn.op=nn;it.cache=0;var jt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){zl||y0(pn)||console.warn("Please gsap.registerPlugin(Observer)"),pa||x0();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,y=n.onPress,b=n.onRelease,L=n.onRight,w=n.onLeft,M=n.onUp,T=n.onDown,x=n.onChangeX,v=n.onChangeY,C=n.onChange,I=n.onToggleX,O=n.onToggleY,k=n.onHover,B=n.onHoverEnd,H=n.onMove,G=n.ignoreCheck,W=n.isNormalizer,J=n.onGestureStart,U=n.onGestureEnd,he=n.onWheel,Ue=n.onEnable,We=n.onDisable,$=n.onClick,se=n.scrollSpeed,me=n.capture,ce=n.allowClicks,te=n.lockAxis,A=n.onLockAxis;this.target=a=Gn(a)||Nr,this.vars=n,f&&(f=pn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,se=se||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ti.getComputedStyle(ho).lineHeight)||22);var N,P,Z,X,ie,ae,Me,E=this,R=0,j=0,ee=n.passive||!u,Q=Vr(a,Nn),ne=Vr(a,nn),we=Q(),le=ne(),ue=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Mi[0]==="pointerdown",Re=ga(a),oe=a.ownerDocument||Ur,_e=[0,0,0],Ne=[0,0,0],Se=0,Ae=function(){return Se=ma()},De=function(Le,et){return(E.event=Le)&&f&&~f.indexOf(Le.target)||et&&ue&&Le.pointerType!=="touch"||G&&G(Le,et)},Ke=function(){E._vx.reset(),E._vy.reset(),P.pause(),h&&h(E)},Ye=function(){var Le=E.deltaX=Dp(_e),et=E.deltaY=Dp(Ne),ve=Math.abs(Le)>=i,Xe=Math.abs(et)>=i;C&&(ve||Xe)&&C(E,Le,et,_e,Ne),ve&&(L&&E.deltaX>0&&L(E),w&&E.deltaX<0&&w(E),x&&x(E),I&&E.deltaX<0!=R<0&&I(E),R=E.deltaX,_e[0]=_e[1]=_e[2]=0),Xe&&(T&&E.deltaY>0&&T(E),M&&E.deltaY<0&&M(E),v&&v(E),O&&E.deltaY<0!=j<0&&O(E),j=E.deltaY,Ne[0]=Ne[1]=Ne[2]=0),(X||Z)&&(H&&H(E),Z&&(S(E),Z=!1),X=!1),ae&&!(ae=!1)&&A&&A(E),ie&&(he(E),ie=!1),N=0},$e=function(Le,et,ve){_e[ve]+=Le,Ne[ve]+=et,E._vx.update(Le),E._vy.update(et),c?N||(N=requestAnimationFrame(Ye)):Ye()},ke=function(Le,et){te&&!Me&&(E.axis=Me=Math.abs(Le)>Math.abs(et)?"x":"y",ae=!0),Me!=="y"&&(_e[2]+=Le,E._vx.update(Le,!0)),Me!=="x"&&(Ne[2]+=et,E._vy.update(et,!0)),c?N||(N=requestAnimationFrame(Ye)):Ye()},Te=function(Le){if(!De(Le,1)){Le=qo(Le,u);var et=Le.clientX,ve=Le.clientY,Xe=et-E.x,ze=ve-E.y,Ge=E.isDragging;E.x=et,E.y=ve,(Ge||Math.abs(E.startX-et)>=s||Math.abs(E.startY-ve)>=s)&&(S&&(Z=!0),Ge||(E.isDragging=!0),ke(Xe,ze),Ge||p&&p(E))}},F=E.onPress=function(Fe){De(Fe,1)||Fe&&Fe.button||(E.axis=Me=null,P.pause(),E.isPressed=!0,Fe=qo(Fe),R=j=0,E.startX=E.x=Fe.clientX,E.startY=E.y=Fe.clientY,E._vx.reset(),E._vy.reset(),Cn(W?a:oe,Mi[1],Te,ee,!0),E.deltaX=E.deltaY=0,y&&y(E))},re=E.onRelease=function(Fe){if(!De(Fe,1)){Rn(W?a:oe,Mi[1],Te,!0);var Le=!isNaN(E.y-E.startY),et=E.isDragging,ve=et&&(Math.abs(E.x-E.startX)>3||Math.abs(E.y-E.startY)>3),Xe=qo(Fe);!ve&&Le&&(E._vx.reset(),E._vy.reset(),u&&ce&&pn.delayedCall(.08,function(){if(ma()-Se>300&&!Fe.defaultPrevented){if(Fe.target.click)Fe.target.click();else if(oe.createEvent){var ze=oe.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,ti,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),Fe.target.dispatchEvent(ze)}}})),E.isDragging=E.isGesturing=E.isPressed=!1,h&&et&&!W&&P.restart(!0),m&&et&&m(E),b&&b(E,ve)}},de=function(Le){return Le.touches&&Le.touches.length>1&&(E.isGesturing=!0)&&J(Le,E.isDragging)},be=function(){return(E.isGesturing=!1)||U(E)},Ce=function(Le){if(!De(Le)){var et=Q(),ve=ne();$e((et-we)*se,(ve-le)*se,1),we=et,le=ve,h&&P.restart(!0)}},tt=function(Le){if(!De(Le)){Le=qo(Le,u),he&&(ie=!0);var et=(Le.deltaMode===1?l:Le.deltaMode===2?ti.innerHeight:1)*g;$e(Le.deltaX*et,Le.deltaY*et,0),h&&!W&&P.restart(!0)}},ht=function(Le){if(!De(Le)){var et=Le.clientX,ve=Le.clientY,Xe=et-E.x,ze=ve-E.y;E.x=et,E.y=ve,X=!0,h&&P.restart(!0),(Xe||ze)&&ke(Xe,ze)}},pt=function(Le){E.event=Le,k(E)},bt=function(Le){E.event=Le,B(E)},dt=function(Le){return De(Le)||qo(Le,u)&&$(E)};P=E._dc=pn.delayedCall(d||.25,Ke).pause(),E.deltaX=E.deltaY=0,E._vx=fh(0,50,!0),E._vy=fh(0,50,!0),E.scrollX=Q,E.scrollY=ne,E.isDragging=E.isGesturing=E.isPressed=!1,g0(this),E.enable=function(Fe){return E.isEnabled||(Cn(Re?oe:a,"scroll",hh),o.indexOf("scroll")>=0&&Cn(Re?oe:a,"scroll",Ce,ee,me),o.indexOf("wheel")>=0&&Cn(a,"wheel",tt,ee,me),(o.indexOf("touch")>=0&&p0||o.indexOf("pointer")>=0)&&(Cn(a,Mi[0],F,ee,me),Cn(oe,Mi[2],re),Cn(oe,Mi[3],re),ce&&Cn(a,"click",Ae,!0,!0),$&&Cn(a,"click",dt),J&&Cn(oe,"gesturestart",de),U&&Cn(oe,"gestureend",be),k&&Cn(a,ss+"enter",pt),B&&Cn(a,ss+"leave",bt),H&&Cn(a,ss+"move",ht)),E.isEnabled=!0,Fe&&Fe.type&&F(Fe),Ue&&Ue(E)),E},E.disable=function(){E.isEnabled&&(so.filter(function(Fe){return Fe!==E&&ga(Fe.target)}).length||Rn(Re?oe:a,"scroll",hh),E.isPressed&&(E._vx.reset(),E._vy.reset(),Rn(W?a:oe,Mi[1],Te,!0)),Rn(Re?oe:a,"scroll",Ce,me),Rn(a,"wheel",tt,me),Rn(a,Mi[0],F,me),Rn(oe,Mi[2],re),Rn(oe,Mi[3],re),Rn(a,"click",Ae,!0),Rn(a,"click",dt),Rn(oe,"gesturestart",de),Rn(oe,"gestureend",be),Rn(a,ss+"enter",pt),Rn(a,ss+"leave",bt),Rn(a,ss+"move",ht),E.isEnabled=E.isPressed=E.isDragging=!1,We&&We(E))},E.kill=E.revert=function(){E.disable();var Fe=so.indexOf(E);Fe>=0&&so.splice(Fe,1),cr===E&&(cr=0)},so.push(E),W&&ga(a)&&(cr=E),E.enable(_)},lb(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();jt.version="3.12.5";jt.create=function(r){return new jt(r)};jt.register=y0;jt.getAll=function(){return so.slice()};jt.getById=function(r){return so.filter(function(e){return e.vars.id===r})[0]};_0()&&pn.registerPlugin(jt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,eo,at,Ft,Ti,Pt,S0,cc,Ua,_a,ta,Sl,xn,Sc,dh,In,Up,Np,to,M0,Mu,w0,Ln,ph,T0,b0,Ar,mh,af,fo,lf,uc,gh,wu,Ml=1,yn=Date.now,Tu=yn(),gi=0,na=0,Op=function(e,t,n){var i=Jn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Fp=function(e,t){return t&&(!Jn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ub=function r(){return na&&requestAnimationFrame(r)},zp=function(){return Sc=1},Bp=function(){return Sc=0},Ci=function(e){return e},ia=function(e){return Math.round(e*1e5)/1e5||0},E0=function(){return typeof window<"u"},A0=function(){return Ee||E0()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},bs=function(e){return!!~S0.indexOf(e)},R0=function(e){return(e==="Height"?lf:at["inner"+e])||Ti["client"+e]||Pt["client"+e]},C0=function(e){return Br(e,"getBoundingClientRect")||(bs(e)?function(){return Vl.width=at.innerWidth,Vl.height=lf,Vl}:function(){return or(e)})},hb=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Br(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?R0(s):e["client"+s])||0}},fb=function(e,t){return!t||~ki.indexOf(e)?C0(e):function(){return Vl}},Fi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Br(e,n))?o()-C0(e)()[s]:bs(e)?(Ti[n]||Pt[n])-R0(i):e[n]-e["offset"+i])},wl=function(e,t){for(var n=0;n<to.length;n+=3)(!t||~t.indexOf(to[n+1]))&&e(to[n],to[n+1],to[n+2])},Jn=function(e){return typeof e=="string"},On=function(e){return typeof e=="function"},ra=function(e){return typeof e=="number"},os=function(e){return typeof e=="object"},jo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},bu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},$s=Math.abs,P0="left",L0="top",cf="right",uf="bottom",_s="width",vs="height",va="Right",xa="Left",ya="Top",Sa="Bottom",$t="padding",ui="margin",Lo="Width",hf="Height",tn="px",hi=function(e){return at.getComputedStyle(e)},db=function(e){var t=hi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},kp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},or=function(e,t){var n=t&&hi(e)[dh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},hc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},I0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},pb=function(e){return function(t){return Ee.utils.snap(I0(e),t)}},ff=function(e){var t=Ee.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},mb=function(e){return function(t,n){return ff(I0(e))(t,n.direction)}},Tl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},un=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},bl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Hp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},El={toggleActions:"play",anticipatePin:0},fc={top:0,left:0,center:.5,bottom:1,right:1},Bl=function(e,t){if(Jn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in fc?fc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Al=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,g=Ft.createElement("div"),_=bs(n)||Br(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?Pt:n,S=e.indexOf("start")!==-1,y=S?c:u,b="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(b+=(i===nn?cf:uf)+":"+(o+parseFloat(d))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=b,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],kl(g,0,i,S),g},kl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Lo]=1,s["border"+a+Lo]=0,s[n.p]=t+"px",Ee.set(e,s)},nt=[],_h={},Na,Gp=function(){return yn()-gi>34&&(Na||(Na=requestAnimationFrame(ur)))},Zs=function(){(!Ln||!Ln.isPressed||Ln.startX>Pt.clientWidth)&&(it.cache++,Ln?Na||(Na=requestAnimationFrame(ur)):ur(),gi||As("scrollStart"),gi=yn())},Eu=function(){b0=at.innerWidth,T0=at.innerHeight},sa=function(){it.cache++,!xn&&!w0&&!Ft.fullscreenElement&&!Ft.webkitFullscreenElement&&(!ph||b0!==at.innerWidth||Math.abs(at.innerHeight-T0)>at.innerHeight*.25)&&cc.restart(!0)},Es={},gb=[],D0=function r(){return cn(ot,"scrollEnd",r)||hs(!0)},As=function(e){return Es[e]&&Es[e].map(function(t){return t()})||gb},Zn=[],U0=function(e){for(var t=0;t<Zn.length;t+=5)(!e||Zn[t+4]&&Zn[t+4].query===e)&&(Zn[t].style.cssText=Zn[t+1],Zn[t].getBBox&&Zn[t].setAttribute("transform",Zn[t+2]||""),Zn[t+3].uncache=1)},df=function(e,t){var n;for(In=0;In<nt.length;In++)n=nt[In],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));uc=!0,t&&U0(t),t||As("revert")},N0=function(e,t){it.cache++,(t||!Dn)&&it.forEach(function(n){return On(n)&&n.cacheID++&&(n.rec=0)}),Jn(e)&&(at.history.scrollRestoration=af=e)},Dn,xs=0,Vp,_b=function(){if(Vp!==xs){var e=Vp=xs;requestAnimationFrame(function(){return e===xs&&hs(!0)})}},O0=function(){Pt.appendChild(fo),lf=!Ln&&fo.offsetHeight||at.innerHeight,Pt.removeChild(fo)},Wp=function(e){return Ua(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},hs=function(e,t){if(gi&&!e&&!uc){un(ot,"scrollEnd",D0);return}O0(),Dn=ot.isRefreshing=!0,it.forEach(function(i){return On(i)&&++i.cacheID&&(i.rec=i())});var n=As("refreshInit");M0&&ot.sort(),t||df(),it.forEach(function(i){On(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),nt.slice(0).forEach(function(i){return i.refresh()}),uc=!1,nt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),gh=1,Wp(!0),nt.forEach(function(i){var s=Fi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Wp(!1),gh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),it.forEach(function(i){On(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),N0(af,1),cc.pause(),xs++,Dn=2,ur(2),nt.forEach(function(i){return On(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Dn=ot.isRefreshing=!1,As("refresh")},vh=0,Hl=1,Ma,ur=function(e){if(e===2||!Dn&&!uc){ot.isUpdating=!0,Ma&&Ma.update(0);var t=nt.length,n=yn(),i=n-Tu>=50,s=t&&nt[0].scroll();if(Hl=vh>s?-1:1,Dn||(vh=s),i&&(gi&&!Sc&&n-gi>200&&(gi=0,As("scrollEnd")),ta=Tu,Tu=n),Hl<0){for(In=t;In-- >0;)nt[In]&&nt[In].update(0,i);Hl=1}else for(In=0;In<t;In++)nt[In]&&nt[In].update(0,i);ot.isUpdating=!1}Na=0},xh=[P0,L0,uf,cf,ui+Sa,ui+va,ui+ya,ui+xa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Gl=xh.concat([_s,vs,"boxSizing","max"+Lo,"max"+hf,"position",ui,$t,$t+ya,$t+va,$t+Sa,$t+xa]),vb=function(e,t,n){po(n);var i=e._gsap;if(i.spacerIsNative)po(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Au=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=xh.length,o=t.style,a=e.style,l;s--;)l=xh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[uf]=a[cf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[_s]=hc(e,Nn)+tn,o[vs]=hc(e,nn)+tn,o[$t]=a[ui]=a[L0]=a[P0]="0",po(i),a[_s]=a["max"+Lo]=n[_s],a[vs]=a["max"+hf]=n[vs],a[$t]=n[$t],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},xb=/([A-Z])/g,po=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(xb,"-$1").toLowerCase())}},Rl=function(e){for(var t=Gl.length,n=e.style,i=[],s=0;s<t;s++)i.push(Gl[s],n[Gl[s]]);return i.t=e,i},yb=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Vl={left:0,top:0},Xp=function(e,t,n,i,s,o,a,l,c,u,h,d,f,g){On(e)&&(e=e(l)),Jn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Bl("0"+e.substr(3),n):0));var _=f?f.time():0,p,m,S;if(f&&f.seek(0),isNaN(e)||(e=+e),ra(e))f&&(e=Ee.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&kl(a,n,i,!0);else{On(t)&&(t=t(l));var y=(e||"0").split(" "),b,L,w,M;S=Gn(t,l)||Pt,b=or(S)||{},(!b||!b.left&&!b.top)&&hi(S).display==="none"&&(M=S.style.display,S.style.display="block",b=or(S),M?S.style.display=M:S.style.removeProperty("display")),L=Bl(y[0],b[i.d]),w=Bl(y[1]||"0",n),e=b[i.p]-c[i.p]-u+L+s-w,a&&kl(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var T=e+n,x=o._isStart;p="scroll"+i.d2,kl(o,T,i,x&&T>20||!x&&(h?Math.max(Pt[p],Ti[p]):o.parentNode[p])<=T+1),h&&(c=or(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+tn))}return f&&S&&(p=or(S),f.seek(d),m=or(S),f._caScrollDist=p[i.p]-m[i.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},Sb=/(webkit|moz|length|cssText|inset)/i,qp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Pt){e._stOrig=s.cssText,a=hi(e);for(o in a)!+o&&!Sb.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},F0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},Cl=function(e,t,n){var i={};i[t.p]="+="+n,Ee.set(e,i)},jp=function(e,t){var n=Vr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,g={};c=c||n();var _=F0(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){it.cache++,o.tween&&ur()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Ee.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},un(e,"wheel",n.wheelHandler),ot.isTouch&&un(e,"touchmove",n.wheelHandler),s},ot=function(){function r(t,n){eo||r.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),mh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!na){this.update=this.refresh=this.kill=Ci;return}n=kp(Jn(n)||ra(n)||n.nodeType?{trigger:n}:n,El);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,y=s.once,b=s.snap,L=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,T=s.fastScrollEnd,x=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Nn:nn,C=!h&&h!==0,I=Gn(n.scroller||at),O=Ee.core.getCache(I),k=bs(I),B=("pinType"in n?n.pinType:Br(I,"pinType")||k&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=C&&n.toggleActions.split(" "),W="markers"in n?n.markers:El.markers,J=k?0:parseFloat(hi(I)["border"+v.p2+Lo])||0,U=this,he=n.onRefreshInit&&function(){return n.onRefreshInit(U)},Ue=hb(I,k,v),We=fb(I,k),$=0,se=0,me=0,ce=Vr(I,v),te,A,N,P,Z,X,ie,ae,Me,E,R,j,ee,Q,ne,we,le,ue,Re,oe,_e,Ne,Se,Ae,De,Ke,Ye,$e,ke,Te,F,re,de,be,Ce,tt,ht,pt,bt;if(U._startClamp=U._endClamp=!1,U._dir=v,p*=45,U.scroller=I,U.scroll=M?M.time.bind(M):ce,P=ce(),U.vars=n,i=i||n.animation,"refreshPriority"in n&&(M0=1,n.refreshPriority===-9999&&(Ma=U)),O.tweenScroll=O.tweenScroll||{top:jp(I,nn),left:jp(I,Nn)},U.tweenTo=te=O.tweenScroll[v.p],U.scrubDuration=function(ve){de=ra(ve)&&ve,de?re?re.duration(ve):re=Ee.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:de,paused:!0,onComplete:function(){return m&&m(U)}}):(re&&re.progress(1).kill(),re=0)},i&&(i.vars.lazy=!1,i._initted&&!U.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),U.animation=i.pause(),i.scrollTrigger=U,U.scrubDuration(h),Te=0,l||(l=i.vars.id)),b&&((!os(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in Pt.style&&Ee.set(k?[Pt,Ti]:I,{scrollBehavior:"auto"}),it.forEach(function(ve){return On(ve)&&ve.target===(k?Ft.scrollingElement||Ti:I)&&(ve.smooth=!1)}),N=On(b.snapTo)?b.snapTo:b.snapTo==="labels"?pb(i):b.snapTo==="labelsDirectional"?mb(i):b.directional!==!1?function(ve,Xe){return ff(b.snapTo)(ve,yn()-se<500?0:Xe.direction)}:Ee.utils.snap(b.snapTo),be=b.duration||{min:.1,max:2},be=os(be)?_a(be.min,be.max):_a(be,be),Ce=Ee.delayedCall(b.delay||de/2||.1,function(){var ve=ce(),Xe=yn()-se<500,ze=te.tween;if((Xe||Math.abs(U.getVelocity())<10)&&!ze&&!Sc&&$!==ve){var Ge=(ve-X)/Q,Wt=i&&!C?i.totalProgress():Ge,Ze=Xe?0:(Wt-F)/(yn()-ta)*1e3||0,Lt=Ee.utils.clamp(-Ge,1-Ge,$s(Ze/2)*Ze/.185),en=Ge+(b.inertia===!1?0:Lt),It,Et,gt=b,D=gt.onStart,V=gt.onInterrupt,Y=gt.onComplete;if(It=N(en,U),ra(It)||(It=en),Et=Math.round(X+It*Q),ve<=ie&&ve>=X&&Et!==ve){if(ze&&!ze._initted&&ze.data<=$s(Et-ve))return;b.inertia===!1&&(Lt=It-Ge),te(Et,{duration:be($s(Math.max($s(en-Wt),$s(It-Wt))*.185/Ze/.05||0)),ease:b.ease||"power3",data:$s(Et-ve),onInterrupt:function(){return Ce.restart(!0)&&V&&V(U)},onComplete:function(){U.update(),$=ce(),i&&(re?re.resetTo("totalProgress",It,i._tTime/i._tDur):i.progress(It)),Te=F=i&&!C?i.totalProgress():U.progress,S&&S(U),Y&&Y(U)}},ve,Lt*Q,Et-ve-Lt*Q),D&&D(U,te.tween)}}else U.isActive&&$!==ve&&Ce.restart(!0)}).pause()),l&&(_h[l]=U),d=U.trigger=Gn(d||f!==!0&&f),bt=d&&d._gsap&&d._gsap.stRevert,bt&&(bt=bt(U)),f=f===!0?d:Gn(f),Jn(a)&&(a={targets:d,className:a}),f&&(g===!1||g===ui||(g=!g&&f.parentNode&&f.parentNode.style&&hi(f.parentNode).display==="flex"?!1:$t),U.pin=f,A=Ee.core.getCache(f),A.spacer?ne=A.pinState:(w&&(w=Gn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),A.spacerIsNative=!!w,w&&(A.spacerState=Rl(w))),A.spacer=ue=w||Ft.createElement("div"),ue.classList.add("pin-spacer"),l&&ue.classList.add("pin-spacer-"+l),A.pinState=ne=Rl(f)),n.force3D!==!1&&Ee.set(f,{force3D:!0}),U.spacer=ue=A.spacer,ke=hi(f),Ae=ke[g+v.os2],oe=Ee.getProperty(f),_e=Ee.quickSetter(f,v.a,tn),Au(f,ue,ke),le=Rl(f)),W){j=os(W)?kp(W,Hp):Hp,E=Al("scroller-start",l,I,v,j,0),R=Al("scroller-end",l,I,v,j,0,E),Re=E["offset"+v.op.d2];var dt=Gn(Br(I,"content")||I);ae=this.markerStart=Al("start",l,dt,v,j,Re,0,M),Me=this.markerEnd=Al("end",l,dt,v,j,Re,0,M),M&&(pt=Ee.quickSetter([ae,Me],v.a,tn)),!B&&!(ki.length&&Br(I,"fixedMarkers")===!0)&&(db(k?Pt:I),Ee.set([E,R],{force3D:!0}),Ke=Ee.quickSetter(E,v.a,tn),$e=Ee.quickSetter(R,v.a,tn))}if(M){var Fe=M.vars.onUpdate,Le=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){U.update(0,0,1),Fe&&Fe.apply(M,Le||[])})}if(U.previous=function(){return nt[nt.indexOf(U)-1]},U.next=function(){return nt[nt.indexOf(U)+1]},U.revert=function(ve,Xe){if(!Xe)return U.kill(!0);var ze=ve!==!1||!U.enabled,Ge=xn;ze!==U.isReverted&&(ze&&(tt=Math.max(ce(),U.scroll.rec||0),me=U.progress,ht=i&&i.progress()),ae&&[ae,Me,E,R].forEach(function(Wt){return Wt.style.display=ze?"none":"block"}),ze&&(xn=U,U.update(ze)),f&&(!L||!U.isActive)&&(ze?vb(f,ue,ne):Au(f,ue,hi(f),De)),ze||U.update(ze),xn=Ge,U.isReverted=ze)},U.refresh=function(ve,Xe,ze,Ge){if(!((xn||!U.enabled)&&!Xe)){if(f&&ve&&gi){un(r,"scrollEnd",D0);return}!Dn&&he&&he(U),xn=U,te.tween&&!ze&&(te.tween.kill(),te.tween=0),re&&re.pause(),_&&i&&i.revert({kill:!1}).invalidate(),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var Wt=Ue(),Ze=We(),Lt=M?M.duration():Fi(I,v),en=Q<=.01,It=0,Et=Ge||0,gt=os(ze)?ze.end:n.end,D=n.endTrigger||d,V=os(ze)?ze.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),Y=U.pinnedContainer=n.pinnedContainer&&Gn(n.pinnedContainer,U),K=d&&Math.max(0,nt.indexOf(U))||0,q=K,fe,ye,Oe,He,Ie,Pe,Be,Rt,mn,Dt,Yt,_t,qe;for(W&&os(ze)&&(_t=Ee.getProperty(E,v.p),qe=Ee.getProperty(R,v.p));q--;)Pe=nt[q],Pe.end||Pe.refresh(0,1)||(xn=U),Be=Pe.pin,Be&&(Be===d||Be===f||Be===Y)&&!Pe.isReverted&&(Dt||(Dt=[]),Dt.unshift(Pe),Pe.revert(!0,!0)),Pe!==nt[q]&&(K--,q--);for(On(V)&&(V=V(U)),V=Op(V,"start",U),X=Xp(V,d,Wt,v,ce(),ae,E,U,Ze,J,B,Lt,M,U._startClamp&&"_startClamp")||(f?-.001:0),On(gt)&&(gt=gt(U)),Jn(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(Jn(V)?V.split(" ")[0]:"")+gt:(It=Bl(gt.substr(2),Wt),gt=Jn(V)?V:(M?Ee.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,X):X)+It,D=d)),gt=Op(gt,"end",U),ie=Math.max(X,Xp(gt||(D?"100% 0":Lt),D,Wt,v,ce()+It,Me,R,U,Ze,J,B,Lt,M,U._endClamp&&"_endClamp"))||-.001,It=0,q=K;q--;)Pe=nt[q],Be=Pe.pin,Be&&Pe.start-Pe._pinPush<=X&&!M&&Pe.end>0&&(fe=Pe.end-(U._startClamp?Math.max(0,Pe.start):Pe.start),(Be===d&&Pe.start-Pe._pinPush<X||Be===Y)&&isNaN(V)&&(It+=fe*(1-Pe.progress)),Be===f&&(Et+=fe));if(X+=It,ie+=It,U._startClamp&&(U._startClamp+=It),U._endClamp&&!Dn&&(U._endClamp=ie||-.001,ie=Math.min(ie,Fi(I,v))),Q=ie-X||(X-=.01)&&.001,en&&(me=Ee.utils.clamp(0,1,Ee.utils.normalize(X,ie,tt))),U._pinPush=Et,ae&&It&&(fe={},fe[v.a]="+="+It,Y&&(fe[v.p]="-="+ce()),Ee.set([ae,Me],fe)),f&&!(gh&&U.end>=Fi(I,v)))fe=hi(f),He=v===nn,Oe=ce(),Ne=parseFloat(oe(v.a))+Et,!Lt&&ie>1&&(Yt=(k?Ft.scrollingElement||Ti:I).style,Yt={style:Yt,value:Yt["overflow"+v.a.toUpperCase()]},k&&hi(Pt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Yt.style["overflow"+v.a.toUpperCase()]="scroll")),Au(f,ue,fe),le=Rl(f),ye=or(f,!0),Rt=B&&Vr(I,He?Nn:nn)(),g?(De=[g+v.os2,Q+Et+tn],De.t=ue,q=g===$t?hc(f,v)+Q+Et:0,q&&(De.push(v.d,q+tn),ue.style.flexBasis!=="auto"&&(ue.style.flexBasis=q+tn)),po(De),Y&&nt.forEach(function(Ki){Ki.pin===Y&&Ki.vars.pinSpacing!==!1&&(Ki._subPinOffset=!0)}),B&&ce(tt)):(q=hc(f,v),q&&ue.style.flexBasis!=="auto"&&(ue.style.flexBasis=q+tn)),B&&(Ie={top:ye.top+(He?Oe-X:Rt)+tn,left:ye.left+(He?Rt:Oe-X)+tn,boxSizing:"border-box",position:"fixed"},Ie[_s]=Ie["max"+Lo]=Math.ceil(ye.width)+tn,Ie[vs]=Ie["max"+hf]=Math.ceil(ye.height)+tn,Ie[ui]=Ie[ui+ya]=Ie[ui+va]=Ie[ui+Sa]=Ie[ui+xa]="0",Ie[$t]=fe[$t],Ie[$t+ya]=fe[$t+ya],Ie[$t+va]=fe[$t+va],Ie[$t+Sa]=fe[$t+Sa],Ie[$t+xa]=fe[$t+xa],we=yb(ne,Ie,L),Dn&&ce(0)),i?(mn=i._initted,Mu(1),i.render(i.duration(),!0,!0),Se=oe(v.a)-Ne+Q+Et,Ye=Math.abs(Q-Se)>1,B&&Ye&&we.splice(we.length-2,2),i.render(0,!0,!0),mn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Mu(0)):Se=Q,Yt&&(Yt.value?Yt.style["overflow"+v.a.toUpperCase()]=Yt.value:Yt.style.removeProperty("overflow-"+v.a));else if(d&&ce()&&!M)for(ye=d.parentNode;ye&&ye!==Pt;)ye._pinOffset&&(X-=ye._pinOffset,ie-=ye._pinOffset),ye=ye.parentNode;Dt&&Dt.forEach(function(Ki){return Ki.revert(!1,!0)}),U.start=X,U.end=ie,P=Z=Dn?tt:ce(),!M&&!Dn&&(P<tt&&ce(tt),U.scroll.rec=0),U.revert(!1,!0),se=yn(),Ce&&($=-1,Ce.restart(!0)),xn=0,i&&C&&(i._initted||ht)&&i.progress()!==ht&&i.progress(ht||0,!0).render(i.time(),!0,!0),(en||me!==U.progress||M||_)&&(i&&!C&&i.totalProgress(M&&X<-.001&&!me?Ee.utils.normalize(X,ie,0):me,!0),U.progress=en||(P-X)/Q===me?0:me),f&&g&&(ue._pinOffset=Math.round(U.progress*Se)),re&&re.invalidate(),isNaN(_t)||(_t-=Ee.getProperty(E,v.p),qe-=Ee.getProperty(R,v.p),Cl(E,v,_t),Cl(ae,v,_t-(Ge||0)),Cl(R,v,qe),Cl(Me,v,qe-(Ge||0))),en&&!Dn&&U.update(),u&&!Dn&&!ee&&(ee=!0,u(U),ee=!1)}},U.getVelocity=function(){return(ce()-Z)/(yn()-ta)*1e3||0},U.endAnimation=function(){jo(U.callbackAnimation),i&&(re?re.progress(1):i.paused()?C||jo(i,U.direction<0,1):jo(i,i.reversed()))},U.labelToScroll=function(ve){return i&&i.labels&&(X||U.refresh()||X)+i.labels[ve]/i.duration()*Q||0},U.getTrailing=function(ve){var Xe=nt.indexOf(U),ze=U.direction>0?nt.slice(0,Xe).reverse():nt.slice(Xe+1);return(Jn(ve)?ze.filter(function(Ge){return Ge.vars.preventOverlaps===ve}):ze).filter(function(Ge){return U.direction>0?Ge.end<=X:Ge.start>=ie})},U.update=function(ve,Xe,ze){if(!(M&&!ze&&!ve)){var Ge=Dn===!0?tt:U.scroll(),Wt=ve?0:(Ge-X)/Q,Ze=Wt<0?0:Wt>1?1:Wt||0,Lt=U.progress,en,It,Et,gt,D,V,Y,K;if(Xe&&(Z=P,P=M?ce():Ge,b&&(F=Te,Te=i&&!C?i.totalProgress():Ze)),p&&f&&!xn&&!Ml&&gi&&(!Ze&&X<Ge+(Ge-Z)/(yn()-ta)*p?Ze=1e-4:Ze===1&&ie>Ge+(Ge-Z)/(yn()-ta)*p&&(Ze=.9999)),Ze!==Lt&&U.enabled){if(en=U.isActive=!!Ze&&Ze<1,It=!!Lt&&Lt<1,V=en!==It,D=V||!!Ze!=!!Lt,U.direction=Ze>Lt?1:-1,U.progress=Ze,D&&!xn&&(Et=Ze&&!Lt?0:Ze===1?1:Lt===1?2:3,C&&(gt=!V&&G[Et+1]!=="none"&&G[Et+1]||G[Et],K=i&&(gt==="complete"||gt==="reset"||gt in i))),x&&(V||K)&&(K||h||!i)&&(On(x)?x(U):U.getTrailing(x).forEach(function(Oe){return Oe.endAnimation()})),C||(re&&!xn&&!Ml?(re._dp._time-re._start!==re._time&&re.render(re._dp._time-re._start),re.resetTo?re.resetTo("totalProgress",Ze,i._tTime/i._tDur):(re.vars.totalProgress=Ze,re.invalidate().restart())):i&&i.totalProgress(Ze,!!(xn&&(se||ve)))),f){if(ve&&g&&(ue.style[g+v.os2]=Ae),!B)_e(ia(Ne+Se*Ze));else if(D){if(Y=!ve&&Ze>Lt&&ie+1>Ge&&Ge+1>=Fi(I,v),L)if(!ve&&(en||Y)){var q=or(f,!0),fe=Ge-X;qp(f,Pt,q.top+(v===nn?fe:0)+tn,q.left+(v===nn?0:fe)+tn)}else qp(f,ue);po(en||Y?we:le),Ye&&Ze<1&&en||_e(Ne+(Ze===1&&!Y?Se:0))}}b&&!te.tween&&!xn&&!Ml&&Ce.restart(!0),a&&(V||y&&Ze&&(Ze<1||!wu))&&Ua(a.targets).forEach(function(Oe){return Oe.classList[en||y?"add":"remove"](a.className)}),o&&!C&&!ve&&o(U),D&&!xn?(C&&(K&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),o&&o(U)),(V||!wu)&&(c&&V&&bu(U,c),H[Et]&&bu(U,H[Et]),y&&(Ze===1?U.kill(!1,1):H[Et]=0),V||(Et=Ze===1?1:3,H[Et]&&bu(U,H[Et]))),T&&!en&&Math.abs(U.getVelocity())>(ra(T)?T:2500)&&(jo(U.callbackAnimation),re?re.progress(1):jo(i,gt==="reverse"?1:!Ze,1))):C&&o&&!xn&&o(U)}if($e){var ye=M?Ge/M.duration()*(M._caScrollDist||0):Ge;Ke(ye+(E._isFlipped?1:0)),$e(ye)}pt&&pt(-Ge/M.duration()*(M._caScrollDist||0))}},U.enable=function(ve,Xe){U.enabled||(U.enabled=!0,un(I,"resize",sa),k||un(I,"scroll",Zs),he&&un(r,"refreshInit",he),ve!==!1&&(U.progress=me=0,P=Z=$=ce()),Xe!==!1&&U.refresh())},U.getTween=function(ve){return ve&&te?te.tween:re},U.setPositions=function(ve,Xe,ze,Ge){if(M){var Wt=M.scrollTrigger,Ze=M.duration(),Lt=Wt.end-Wt.start;ve=Wt.start+Lt*ve/Ze,Xe=Wt.start+Lt*Xe/Ze}U.refresh(!1,!1,{start:Fp(ve,ze&&!!U._startClamp),end:Fp(Xe,ze&&!!U._endClamp)},Ge),U.update()},U.adjustPinSpacing=function(ve){if(De&&ve){var Xe=De.indexOf(v.d)+1;De[Xe]=parseFloat(De[Xe])+ve+tn,De[1]=parseFloat(De[1])+ve+tn,po(De)}},U.disable=function(ve,Xe){if(U.enabled&&(ve!==!1&&U.revert(!0,!0),U.enabled=U.isActive=!1,Xe||re&&re.pause(),tt=0,A&&(A.uncache=1),he&&cn(r,"refreshInit",he),Ce&&(Ce.pause(),te.tween&&te.tween.kill()&&(te.tween=0)),!k)){for(var ze=nt.length;ze--;)if(nt[ze].scroller===I&&nt[ze]!==U)return;cn(I,"resize",sa),k||cn(I,"scroll",Zs)}},U.kill=function(ve,Xe){U.disable(ve,Xe),re&&!Xe&&re.kill(),l&&delete _h[l];var ze=nt.indexOf(U);ze>=0&&nt.splice(ze,1),ze===In&&Hl>0&&In--,ze=0,nt.forEach(function(Ge){return Ge.scroller===U.scroller&&(ze=1)}),ze||Dn||(U.scroll.rec=0),i&&(i.scrollTrigger=null,ve&&i.revert({kill:!1}),Xe||i.kill()),ae&&[ae,Me,E,R].forEach(function(Ge){return Ge.parentNode&&Ge.parentNode.removeChild(Ge)}),Ma===U&&(Ma=0),f&&(A&&(A.uncache=1),ze=0,nt.forEach(function(Ge){return Ge.pin===f&&ze++}),ze||(A.spacer=0)),n.onKill&&n.onKill(U)},nt.push(U),U.enable(!1,!1),bt&&bt(U),i&&i.add&&!Q){var et=U.update;U.update=function(){U.update=et,X||ie||U.refresh()},Ee.delayedCall(.01,U.update),Q=.01,X=ie=0}else U.refresh();f&&_b()},r.register=function(n){return eo||(Ee=n||A0(),E0()&&window.document&&r.enable(),eo=na),eo},r.defaults=function(n){if(n)for(var i in n)El[i]=n[i];return El},r.disable=function(n,i){na=0,nt.forEach(function(o){return o[i?"kill":"disable"](n)}),cn(at,"wheel",Zs),cn(Ft,"scroll",Zs),clearInterval(Sl),cn(Ft,"touchcancel",Ci),cn(Pt,"touchstart",Ci),Tl(cn,Ft,"pointerdown,touchstart,mousedown",zp),Tl(cn,Ft,"pointerup,touchend,mouseup",Bp),cc.kill(),wl(cn);for(var s=0;s<it.length;s+=3)bl(cn,it[s],it[s+1]),bl(cn,it[s],it[s+2])},r.enable=function(){if(at=window,Ft=document,Ti=Ft.documentElement,Pt=Ft.body,Ee&&(Ua=Ee.utils.toArray,_a=Ee.utils.clamp,mh=Ee.core.context||Ci,Mu=Ee.core.suppressOverwrites||Ci,af=at.history.scrollRestoration||"auto",vh=at.pageYOffset,Ee.core.globals("ScrollTrigger",r),Pt)){na=1,fo=document.createElement("div"),fo.style.height="100vh",fo.style.position="absolute",O0(),ub(),jt.register(Ee),r.isTouch=jt.isTouch,Ar=jt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ph=jt.isTouch===1,un(at,"wheel",Zs),S0=[at,Ft,Ti,Pt],Ee.matchMedia?(r.matchMedia=function(l){var c=Ee.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Ee.addEventListener("matchMediaInit",function(){return df()}),Ee.addEventListener("matchMediaRevert",function(){return U0()}),Ee.addEventListener("matchMedia",function(){hs(0,1),As("matchMedia")}),Ee.matchMedia("(orientation: portrait)",function(){return Eu(),Eu})):console.warn("Requires GSAP 3.11.0 or later"),Eu(),un(Ft,"scroll",Zs);var n=Pt.style,i=n.borderTopStyle,s=Ee.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=or(Pt),nn.m=Math.round(o.top+nn.sc())||0,Nn.m=Math.round(o.left+Nn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Sl=setInterval(Gp,250),Ee.delayedCall(.5,function(){return Ml=0}),un(Ft,"touchcancel",Ci),un(Pt,"touchstart",Ci),Tl(un,Ft,"pointerdown,touchstart,mousedown",zp),Tl(un,Ft,"pointerup,touchend,mouseup",Bp),dh=Ee.utils.checkPrefix("transform"),Gl.push(dh),eo=yn(),cc=Ee.delayedCall(.2,hs).pause(),to=[Ft,"visibilitychange",function(){var l=at.innerWidth,c=at.innerHeight;Ft.hidden?(Up=l,Np=c):(Up!==l||Np!==c)&&sa()},Ft,"DOMContentLoaded",hs,at,"load",hs,at,"resize",sa],wl(un),nt.forEach(function(l){return l.enable(0,1)}),a=0;a<it.length;a+=3)bl(cn,it[a],it[a+1]),bl(cn,it[a],it[a+2])}},r.config=function(n){"limitCallbacks"in n&&(wu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Sl)||(Sl=i)&&setInterval(Gp,i),"ignoreMobileResize"in n&&(ph=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(wl(cn)||wl(un,n.autoRefreshEvents||"none"),w0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Gn(n),o=it.indexOf(s),a=bs(s);~o&&it.splice(o,a?6:2),i&&(a?ki.unshift(at,i,Pt,i,Ti,i):ki.unshift(s,i))},r.clearMatchMedia=function(n){nt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Jn(n)?Gn(n):n).getBoundingClientRect(),a=o[s?_s:vs]*i||0;return s?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},r.positionInViewport=function(n,i,s){Jn(n)&&(n=Gn(n));var o=n.getBoundingClientRect(),a=o[s?_s:vs],l=i==null?a/2:i in fc?fc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},r.killAll=function(n){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Es.killAll||[];Es={},i.forEach(function(s){return s()})}},r}();ot.version="3.12.5";ot.saveStyles=function(r){return r?Ua(r).forEach(function(e){if(e&&e.style){var t=Zn.indexOf(e);t>=0&&Zn.splice(t,5),Zn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),mh())}}):Zn};ot.revert=function(r,e){return df(!r,e)};ot.create=function(r,e){return new ot(r,e)};ot.refresh=function(r){return r?sa():(eo||ot.register())&&hs(!0)};ot.update=function(r){return++it.cache&&ur(r===!0?2:0)};ot.clearScrollMemory=N0;ot.maxScroll=function(r,e){return Fi(r,e?Nn:nn)};ot.getScrollFunc=function(r,e){return Vr(Gn(r),e?Nn:nn)};ot.getById=function(r){return _h[r]};ot.getAll=function(){return nt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ot.isScrolling=function(){return!!gi};ot.snapDirectional=ff;ot.addEventListener=function(r,e){var t=Es[r]||(Es[r]=[]);~t.indexOf(e)||t.push(e)};ot.removeEventListener=function(r,e){var t=Es[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ot.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=Ee.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||f.restart(!0),h.push(g.trigger),d.push(g),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&On(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return On(s)&&(s=s(),un(ot,"refresh",function(){return s=e.batchMax()})),Ua(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ot.create(c))}),t};var Yp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Ru=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(jt.isTouch?" pinch-zoom":""):"none",e===Ti&&r(Pt,t)},Pl={auto:1,scroll:1},Mb=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ee.core.getCache(s),a=yn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Pl[(l=hi(s)).overflowY]||Pl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!bs(s)&&(Pl[(l=hi(s)).overflowY]||Pl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},z0=function(e,t,n,i){return jt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Mb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&un(Ft,jt.eventTypes[0],$p,!1,!0)},onDisable:function(){return cn(Ft,jt.eventTypes[0],$p,!0)}})},wb=/(input|label|select|textarea)/i,Kp,$p=function(e){var t=wb.test(e.target.tagName);(t||Kp)&&(e._gsapAllow=!0,Kp=t)},Tb=function(e){os(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Gn(e.target)||Ti,u=Ee.core.globals().ScrollSmoother,h=u&&u.get(),d=Ar&&(e.content&&Gn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=Vr(c,nn),g=Vr(c,Nn),_=1,p=(jt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,m=0,S=On(i)?function(){return i(a)}:function(){return i||2.8},y,b,L=z0(c,e.type,!0,s),w=function(){return b=!1},M=Ci,T=Ci,x=function(){l=Fi(c,nn),T=_a(Ar?1:0,l),n&&(M=_a(0,Fi(c,Nn))),y=xs},v=function(){d._gsap.y=ia(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},C=function(){if(b){requestAnimationFrame(w);var W=ia(a.deltaY/2),J=T(f.v-W);if(d&&J!==f.v+f.offset){f.offset=J-f.v;var U=ia((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",d._gsap.y=U+"px",f.cacheID=it.cache,ur()}return!0}f.offset&&v(),b=!0},I,O,k,B,H=function(){x(),I.isActive()&&I.vars.scrollY>l&&(f()>l?I.progress(1)&&f(l):I.resetTo("scrollY",l))};return d&&Ee.set(d,{y:"+=0"}),e.ignoreCheck=function(G){return Ar&&G.type==="touchmove"&&C()||_>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){b=!1;var G=_;_=ia((at.visualViewport&&at.visualViewport.scale||1)/p),I.pause(),G!==_&&Ru(c,_>1.01?!0:n?!1:"x"),O=g(),k=f(),x(),y=xs},e.onRelease=e.onGestureStart=function(G,W){if(f.offset&&v(),!W)B.restart(!0);else{it.cache++;var J=S(),U,he;n&&(U=g(),he=U+J*.05*-G.velocityX/.227,J*=Yp(g,U,he,Fi(c,Nn)),I.vars.scrollX=M(he)),U=f(),he=U+J*.05*-G.velocityY/.227,J*=Yp(f,U,he,Fi(c,nn)),I.vars.scrollY=T(he),I.invalidate().duration(J).play(.01),(Ar&&I.vars.scrollY>=l||U>=l-1)&&Ee.to({},{onUpdate:H,duration:J})}o&&o(G)},e.onWheel=function(){I._ts&&I.pause(),yn()-m>1e3&&(y=0,m=yn())},e.onChange=function(G,W,J,U,he){if(xs!==y&&x(),W&&n&&g(M(U[2]===W?O+(G.startX-G.x):g()+W-U[1])),J){f.offset&&v();var Ue=he[2]===J,We=Ue?k+G.startY-G.y:f()+J-he[1],$=T(We);Ue&&We!==$&&(k+=$-We),f($)}(J||W)&&ur()},e.onEnable=function(){Ru(c,n?!1:"x"),ot.addEventListener("refresh",H),un(at,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),L.enable()},e.onDisable=function(){Ru(c,!0),cn(at,"resize",H),ot.removeEventListener("refresh",H),L.kill()},e.lockAxis=e.lockAxis!==!1,a=new jt(e),a.iOS=Ar,Ar&&!f()&&f(1),Ar&&Ee.ticker.add(Ci),B=a._dc,I=Ee.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:F0(f,f(),function(){return I.pause()})},onUpdate:ur,onComplete:B.vars.onComplete}),a};ot.sort=function(r){return nt.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};ot.observe=function(r){return new jt(r)};ot.normalizeScroll=function(r){if(typeof r>"u")return Ln;if(r===!0&&Ln)return Ln.enable();if(r===!1){Ln&&Ln.kill(),Ln=r;return}var e=r instanceof jt?r:Tb(r);return Ln&&Ln.target===e.target&&Ln.kill(),bs(e.target)&&(Ln=e),e};ot.core={_getVelocityProp:fh,_inputObserver:z0,_scrollers:it,_proxies:ki,bridge:{ss:function(){gi||As("scrollStart"),gi=yn()},ref:function(){return xn}}};A0()&&Ee.registerPlugin(ot);dn.registerPlugin(ot);const bb=document.querySelectorAll(".progressBarNav");var Zp=document.getElementById("firstCaption"),Eb=document.querySelectorAll(".LearnMoreButton");Eb.forEach(r=>{r.addEventListener("click",popUp)});function Ab(r){const e=dn.timeline();return e.to(r.position,{z:"0.5",duration:.05,ease:"none"},"start").to(r.position,{z:"-2.85",duration:1,ease:"none"},">").to(r.position,{z:"-8.5",duration:.75,ease:"none"},">").to(r.position,{z:"-16",duration:.5,ease:"none"},">").to(r.position,{z:"-24.80",duration:1,ease:"none"},">-=0.1").to(r.position,{z:"-30",duration:.25,ease:"none"},">").to(r.position,{z:"-45",duration:.5,ease:"none"},">"),e}function Rb(r,e,t,n,i,s,o,a,l,c,u,h,d){r.to(s.children[1].scale,{z:1.4,y:1.4,x:1.4},"<"),r.to([s.children[0].scale,s.children[1].scale,s.children[2].scale],{x:.01,y:.01,z:.01},">+=0.5"),r.to(n.uniforms.opacity,{value:3,duration:.5},">-=0.25"),r.to([s.children[0].material.uniforms.opacity,s.children[1].material.uniforms.opacity,s.children[2].material.uniforms.fresnelScale],{value:0,duration:.1},"<"),r.to([s.children[0].position,s.children[1].position,s.children[2].position],{z:-1},"<-=0.2"),r.to(n.uniforms.opacity,{value:0,duration:.5,delay:.05},">"),r.to(c.children[0].material.uniforms.fresnelScale,{value:0,duration:.25},"<"),r.to(c.material,{opacity:0,duration:.25},"<"),r.to(c.scale,{x:0,y:0,z:0,duration:.25},"<"),r.to(u.material,{opacity:1,duration:.25},"<+=0.35"),r.to(o.scale,{x:1,y:1,z:1,duration:.2},"<"),r.to(o.children[1].material,{opacity:1,duration:.2,delay:.25},">"),r.to(h.scale,{x:3.5,y:3.5,z:3.5,duration:.2},"<"),r.to(o.material.uniforms.transitionProgress,{value:1,duration:.2},">"),r.to(o.children[2].material.uniforms.color1.value,{r:1,g:.53,b:0,duration:.2},"<"),r.to([o.scale,h.scale],{x:0,y:0,z:0,duration:.2},">"),r.to(i.scale,{x:"0.25",y:"0.25",z:"0.25",duration:1,ease:"none",onStart:()=>{i.visible=!0}},">-=0.22"),r.to(i.position,{x:0,y:0,z:-50,duration:.7,ease:"none",delay:.1},"<"),r.to(i.scale,{x:"0",y:"0",z:"0",duration:.15,ease:"none",onComplete:()=>{i.visible=!1}},">")}function Cb(){const r=document.querySelector(".NavBar_Inner");Array.from(r.querySelectorAll("a")).forEach((t,n)=>{t.addEventListener("click",i=>{switch(i.preventDefault(),n){case 0:window.scrollTo({top:0});break;case 1:window.scrollTo({top:3e4});break;case 2:window.scrollTo({top:57500});break;case 3:window.scrollTo({top:80400});break;case 4:window.scrollTo({top:98e3});break}})})}function Pb(r,e,t,n,i,s,o,a,l,c,u,h,d,f,g,_){function p(){var w=document.getElementById("end_screen"),M=r.position.z;M<-33&&dn.to(w,{autoAlpha:1,display:"block",duration:2.5}),M<-3.65?a.children[3].visible=!1:a.children[3].visible=!0,M<-5?a.visible=!1:a.visible=!0;const T=M,x=[-2.85,-11,-18.5,-24.45];let v=.5;for(let B=0;B<x.length;B++){const H=x[B],G=v,W=H;let J=(T-G)/(W-G)*100;if(J=Math.min(J,100),J<100){const U=J+"%";dn.to(bb[B],{height:U})}else v=H}var C=.2,I=[0,-.38,-.95,-1.735,-2.31,-2.525,-2.7,-2.9];i.forEach((B,H)=>{var G=Math.abs(M-I[H])<C;dn.to(B,{autoAlpha:G?1:0,display:G?"block":"none"})});var O=.15,k=[.05,-.8,-2.4,-4.1,-6.25,-10.75,-12.5,-15,-16,-19.15,-22.25,-23.5,-29.5];M<-3?O=.45:O=.15,e.forEach((B,H)=>{var G=Math.abs(M-k[H])<O;G?dn.to(B,{duration:.3,autoAlpha:1,display:"block"}):dn.to(B,{duration:.3,autoAlpha:0,display:"none"})}),M<1?dn.to(Zp,{duration:1,autoAlpha:0,display:"none"}):dn.to(Zp,{duration:1,autoAlpha:1,display:"block"})}const m=dn.timeline({scrollTrigger:{trigger:"#page_wrapper",start:"top top",end:"+="+window.innerHeight*100,scrub:2,markers:!1,pin:!0},onUpdate:p});m.scrollTrigger.disable();var S=document.getElementById("start_btn");S.addEventListener("click",()=>{m.scrollTrigger.enable()});const y=Ab(r);m.add(y,0),m.add("start"),Rb(m,t,n,s,o,a,l,c,u,h,d,f),Cb(),document.querySelectorAll(".LearnMoreButton").forEach(w=>{w.addEventListener("click",()=>{m.scrollTrigger.disable(!1)})});var L=document.querySelectorAll(".close");L.forEach(w=>{w.addEventListener("click",()=>{m.scrollTrigger.enable(!1)})})}function Jp(r,e){if(e===j_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Vu||e===Um){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Vu)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Lb extends Rs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ob(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new qb(t)}),this.register(function(t){return new jb(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new Bb(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new Hb(t)}),this.register(function(t){return new Nb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Fb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Db(t)}),this.register(function(t){return new Yb(t)}),this.register(function(t){return new Kb(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ua.extractUrlBase(e);o=ua.resolveURL(c,this.path)}else o=ua.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ql(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===B0){try{o[st.KHR_BINARY_GLTF]=new $b(e)}catch(h){i&&i(h);return}s=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new cE(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case st.KHR_MATERIALS_UNLIT:o[h]=new Ub;break;case st.KHR_DRACO_MESH_COMPRESSION:o[h]=new Zb(s,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[h]=new Jb;break;case st.KHR_MESH_QUANTIZATION:o[h]=new Qb;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Ib(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Db{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new ge(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Qt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new lg(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ec(u),c.distance=h;break;case"spot":c=new lw(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Rr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Ub{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return Ni}extendParams(e,t,n){const i=[];e.color=new ge(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ct))}return Promise.all(i)}}class Nb{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Ob{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(a,a)}return Promise.all(s)}}class Fb{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class zb{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ct)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Bb{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class kb{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(a[0],a[1],a[2],Qt),Promise.all(s)}}class Hb{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Gb{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ct)),Promise.all(s)}}class Vb{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Wb{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Xb{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class qb{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jb{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Yb{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class Kb{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ci.TRIANGLES&&c.mode!==ci.TRIANGLE_STRIP&&c.mode!==ci.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const _=new je,p=new z,m=new Wr,S=new z(1,1,1),y=new LM(g.geometry,g.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,b),l.SCALE&&S.fromBufferAttribute(l.SCALE,b),y.setMatrixAt(b,_.compose(p,m,S));for(const b in l)if(b==="_COLOR_0"){const L=l[b];y.instanceColor=new Zl(L.array,L.itemSize,L.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);Ot.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const B0="glTF",Yo=12,Qp={JSON:1313821514,BIN:5130562};class $b{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Yo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==B0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Yo,s=new DataView(e,Yo);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Qp.JSON){const c=new Uint8Array(e,Yo+o,a);this.content=n.decode(c)}else if(l===Qp.BIN){const c=Yo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Zb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=yh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=yh[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=mo[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}h(f)},a,c,Qt,d)})})}}class Jb{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Qb{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class k0 extends ka{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,p=-2*f+3*d,m=f-d,S=1-p,y=m-d+h;for(let b=0;b!==a;b++){const L=o[_+b+a],w=o[_+b+l]*u,M=o[g+b+a],T=o[g+b]*u;s[b]=S*L+y*w+p*M+m*T}return s}}const eE=new Wr;class tE extends k0{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return eE.fromArray(s).normalize().toArray(s),s}}const ci={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},mo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},em={9728:Fn,9729:sn,9984:Tm,9985:Il,9986:Zo,9987:ar},tm={33071:Cr,33648:Xl,10497:vo},Cu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nE={CUBICSPLINE:void 0,LINEAR:yo,STEP:Ta},Pu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iE(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ei({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hi})),r.DefaultMaterial}function ts(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Rr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rE(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function sE(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oE(r){let e;const t=r.extensions&&r.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Lu(t.attributes):e=r.indices+":"+Lu(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Lu(r.targets[n]);return e}function Lu(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Sh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aE(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const lE=new je;class cE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ib,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new kr(this.options.manager):this.textureLoader=new dw(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ql(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ts(s,a,i),Rr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(ua.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Cu[i.type],a=mo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new kt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Cu[i.type],c=mo[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(f&&f!==h){const m=Math.floor(d/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let y=t.cache.get(S);y||(_=new c(a,m*f,i.count*f/u),y=new EM(_,f/u),t.cache.add(S,y)),p=new Ih(y,l,d%f/u,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),p=new kt(_,l,g);if(i.sparse!==void 0){const m=Cu.SCALAR,S=mo[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,L=new S(o[1],y,i.sparse.count*m),w=new c(o[2],b,i.sparse.count*l);a!==null&&(p=new kt(p.array.slice(),p.itemSize,p.normalized));for(let M=0,T=L.length;M<T;M++){const x=L[M];if(p.setX(x,w[M*l]),l>=2&&p.setY(x,w[M*l+1]),l>=3&&p.setZ(x,w[M*l+2]),l>=4&&p.setW(x,w[M*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=em[d.magFilter]||sn,u.minFilter=em[d.minFilter]||ar,u.wrapS=tm[d.wrapS]||vo,u.wrapT=tm[d.wrapT]||vo,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Jt(_);p.needsUpdate=!0,d(p)}),t.load(ua.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||aE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Uh,ii.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ea,ii.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ei}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){const h=i[st.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new ge(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Qt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,ct)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Mn);const u=s.alphaMode||Pu.OPAQUE;if(u===Pu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Pu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ni&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new pe(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Ni&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ni){const h=s.emissiveFactor;a.emissive=new ge().setRGB(h[0],h[1],h[2],Qt)}return s.emissiveTexture!==void 0&&o!==Ni&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,ct)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Rr(h,s),t.associations.set(h,{materials:e}),s.extensions&&ts(i,h,s),h})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return nm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=oE(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=nm(new Ht,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?iE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],p=o[f];let m;const S=c[f];if(p.mode===ci.TRIANGLES||p.mode===ci.TRIANGLE_STRIP||p.mode===ci.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new RM(_,S):new Mt(_,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===ci.TRIANGLE_STRIP?m.geometry=Jp(m.geometry,Um):p.mode===ci.TRIANGLE_FAN&&(m.geometry=Jp(m.geometry,Vu));else if(p.mode===ci.LINES)m=new IM(_,S);else if(p.mode===ci.LINE_STRIP)m=new wo(_,S);else if(p.mode===ci.LINE_LOOP)m=new DM(_,S);else if(p.mode===ci.POINTS)m=new Jl(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&sE(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Rr(m,s),p.extensions&&ts(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&ts(i,h[0],s),h[0];const d=new Tn;s.extensions&&ts(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Sn(sr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ch(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Rr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new je;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Dh(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let S=0,y=d.length;S<y;S++){const b=d[S],L=f[S],w=g[S],M=_[S],T=p[S];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const x=n._createAnimationTracks(b,L,w,M,T);if(x)for(let v=0;v<x.length;v++)m.push(x[v])}return new ew(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,lE)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new eg:c.length>1?u=new Tn:c.length===1?u=c[0]:u=new Ot,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Rr(u,s),s.extensions&&ts(n,u,s),s.matrix!==void 0){const h=new je;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Tn;n.name&&(s.name=i.createUniqueName(n.name)),Rr(s,n),n.extensions&&ts(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof ii||d instanceof Jt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];wr[s.path]===wr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(wr[s.path]){case wr.weights:c=To;break;case wr.rotation:c=Ms;break;case wr.position:case wr.scale:c=bo;break;default:switch(n.itemSize){case 1:c=To;break;case 2:case 3:default:c=bo;break}break}const u=i.interpolation!==void 0?nE[i.interpolation]:yo,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+wr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Sh(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ms?tE:k0;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function uE(r,e,t){const n=e.attributes,i=new pr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),a.normalized){const u=Sh(mo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new z,l=new z;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Sh(mo[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Xi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function nm(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=yh[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return mt.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),Rr(r,e),uE(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?rE(r,e.targets,t):r})}const Iu=new WeakMap;class hE extends Rs{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Ql(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,ct).catch(n)}decodeDracoFile(e,t,n,i,s=Qt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Iu.has(e)){const l=Iu.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[s]={resolve:c,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Iu.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Ht;e.index&&t.setIndex(new kt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,l=new kt(o,a);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==ct)return;const n=new ge;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Ql(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=fE.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function fE(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(u){r.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(r)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const f=t(h,d,new Int8Array(l),c),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{h.destroy(d)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const p in u){const m=self[h[p]];let S,y;if(c.useUniqueIDs)y=u[p],S=a.GetAttributeByUniqueId(d,y);else{if(y=a.GetAttributeId(d,o[u[p]]),y===-1)continue;S=a.GetAttribute(d,y)}const b=i(o,a,d,p,m,S);p==="color"&&(b.vertexColorSpace=c.vertexColorSpace),_.attributes.push(b)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,d)),o.destroy(d),_}function n(o,a,l){const u=l.num_faces()*3,h=u*4,d=o._malloc(h);a.GetTrianglesUInt32Array(l,h,d);const f=new Uint32Array(o.HEAPF32.buffer,d,u).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,l,c,u,h){const d=h.num_components(),g=l.num_points()*d,_=g*u.BYTES_PER_ELEMENT,p=s(o,u),m=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,h,p,_,m);const S=new u(o.HEAPF32.buffer,m,g).slice();return o._free(m),{name:c,array:S,itemSize:d}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const dE=new Lb,H0=new hE;H0.setDecoderPath("/examples/jsm/libs/draco/");dE.setDRACOLoader(H0);async function pE(){return{hubbleTelescope:null}}let Du=new pe,im=new Tw;document.querySelector(".LearnMoreButton");function mE(r,e){window.addEventListener("click",t=>{Du.x=t.clientX/window.innerWidth*2-1,Du.y=-(t.clientY/window.innerHeight)*2+1,im.setFromCamera(Du,r);const n=im.intersectObjects(e.children,!0);n.length>0&&n[0].object})}function gE({numStars:r=500}={}){function e(){const l=Math.cbrt(Math.random())*50,c=Math.random(),u=Math.random(),h=2*Math.PI*c,d=Math.acos(2*u-1);let f=l*Math.sin(d)*Math.cos(h),g=l*Math.sin(d)*Math.sin(h),_=l*Math.cos(d);return{pos:new z(f,g,_),hue:.6,minDist:l}}const t=[],n=[];let i;for(let l=0;l<r;l+=1){let c=e();const{pos:u,hue:h}=c;i=new ge().setHSL(h,.8,Math.random()),t.push(u.x,u.y,u.z),n.push(i.r,i.g,i.b)}const s=new Ht;s.setAttribute("position",new Gt(t,3)),s.setAttribute("color",new Gt(n,3));const o=new Uh({size:.2,vertexColors:!0,map:new kr().load(cg,l=>{l.minFilter=sn,l.magFilter=sn,l.format=di,l.premultiplyAlpha=!0,l.needsUpdate=!0}),transparent:!0,alphaTest:.01,blending:Gi,toneMapped:!1});return new Jl(s,o)}function _E(){const r={type:{value:3},radius:{value:5},amplitude:{value:1.2},sharpness:{value:2.5},offset:{value:-2},period:{value:.6},persistence:{value:.484},lacunarity:{value:1.8},octaves:{value:10},undulation:{value:0},ambientIntensity:{value:3.02},diffuseIntensity:{value:1},specularIntensity:{value:2},shininess:{value:10},lightDirection:{value:new z(1,1,1)},lightColor:{value:new ge(1,1,1)},bumpStrength:{value:1},bumpOffset:{value:.001},color1:{value:new ge(.08,.53,.35)},color2:{value:new ge(.62,.515,.375)},color3:{value:new ge(.15,.25,.08)},color4:{value:new ge(.15,.15,.15)},color5:{value:new ge(.015,.115,.28)},transition2:{value:.071},transition3:{value:.215},transition4:{value:.372},transition5:{value:1.2},blend12:{value:.152},blend23:{value:.152},blend34:{value:.104},blend45:{value:.168}};return new Tt({uniforms:r,vertexShader:` attribute vec3 tangent;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

    // 
    float simplex3(vec3 v) { 
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

      // First corner
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 =   v - i + dot(i, C.xxx) ;

      // Other corners
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );

      //  x0 = x0 - 0. + 0.0 * C 
      vec3 x1 = x0 - i1 + 1.0 * C.xxx;
      vec3 x2 = x0 - i2 + 2.0 * C.xxx;
      vec3 x3 = x0 - 1. + 3.0 * C.xxx;

      // Permutations
      i = mod(i, 289.0 ); 
      vec4 p = permute( permute( permute( 
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

      // Gradients
      // ( N*N points uniformly over a square, mapped onto an octahedron.)
      float n_ = 1.0/7.0; // N=7
      vec3  ns = n_ * D.wyz - D.xzx;

      vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);

      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );

      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));

      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);

      //Normalise gradients
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;

      // Mix final noise value
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                    dot(p2,x2), dot(p3,x3) ) );
    }

    float fractal3(      
      vec3 v,
      float sharpness,
      float period,
      float persistence,
      float lacunarity,
      int octaves
    ) {
      float n = 0.0;
      float a = 1.0; // Amplitude for current octave
      float max_amp = 0.0; // Accumulate max amplitude so we can normalize after
      float P = period;  // Period for current octave

      for(int i = 0; i < octaves; i++) {
          n += a * simplex3(v / P);
          a *= persistence;
          max_amp += a;
          P /= lacunarity;
      }

      // Normalize noise between [0.0, amplitude]
      return n / max_amp;
    }

    float terrainHeight(
      int type,
      vec3 v,
      float amplitude,
      float sharpness,
      float offset,
      float period,
      float persistence,
      float lacunarity,
      int octaves
    ) {
      float h = 0.0;

      if (type == 1) {
        h = amplitude * simplex3(v / period);
      } else if (type == 2) {
        h = amplitude * fractal3(
          v,
          sharpness,
          period, 
          persistence, 
          lacunarity, 
          octaves);
        h = amplitude * pow(max(0.0, (h + 1.0) / 2.0), sharpness);
      } else if (type == 3) {
        h = fractal3(
          v,
          sharpness,
          period, 
          persistence, 
          lacunarity, 
          octaves);
        h = amplitude * pow(max(0.0, 1.0 - abs(h)), sharpness);
      }

      // Multiply by amplitude and adjust offset
      return max(0.0, h + offset);
    }

        // Terrain generation parameters
        uniform int type;
        uniform float radius;
        uniform float amplitude;
        uniform float sharpness;
        uniform float offset;
        uniform float period;
        uniform float persistence;
        uniform float lacunarity;
        uniform int octaves;
    
        // Bump mapping
        uniform float bumpStrength;
        uniform float bumpOffset;
    
        varying vec3 fragPosition;
        varying vec3 fragNormal;
        varying vec3 fragTangent;
        varying vec3 fragBitangent;
    
        void main() {
          // Calculate terrain height
          float h = terrainHeight(
            type,
            position,
            amplitude, 
            sharpness,
            offset,
            period, 
            persistence, 
            lacunarity, 
            octaves);
    
          vec3 pos = position * (radius + h);
    
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          fragPosition = position;
          fragNormal = normal;
          fragTangent = tangent;
          fragBitangent = cross(normal, tangent);
        }`,fragmentShader:`

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

    // 
    float simplex3(vec3 v) { 
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

      // First corner
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 =   v - i + dot(i, C.xxx) ;

      // Other corners
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );

      //  x0 = x0 - 0. + 0.0 * C 
      vec3 x1 = x0 - i1 + 1.0 * C.xxx;
      vec3 x2 = x0 - i2 + 2.0 * C.xxx;
      vec3 x3 = x0 - 1. + 3.0 * C.xxx;

      // Permutations
      i = mod(i, 289.0 ); 
      vec4 p = permute( permute( permute( 
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

      // Gradients
      // ( N*N points uniformly over a square, mapped onto an octahedron.)
      float n_ = 1.0/7.0; // N=7
      vec3  ns = n_ * D.wyz - D.xzx;

      vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);

      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );

      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));

      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);

      //Normalise gradients
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;

      // Mix final noise value
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                    dot(p2,x2), dot(p3,x3) ) );
    }

    float fractal3(      
      vec3 v,
      float sharpness,
      float period,
      float persistence,
      float lacunarity,
      int octaves
    ) {
      float n = 0.0;
      float a = 1.0; // Amplitude for current octave
      float max_amp = 0.0; // Accumulate max amplitude so we can normalize after
      float P = period;  // Period for current octave

      for(int i = 0; i < octaves; i++) {
          n += a * simplex3(v / P);
          a *= persistence;
          max_amp += a;
          P /= lacunarity;
      }

      // Normalize noise between [0.0, amplitude]
      return n / max_amp;
    }

    float terrainHeight(
      int type,
      vec3 v,
      float amplitude,
      float sharpness,
      float offset,
      float period,
      float persistence,
      float lacunarity,
      int octaves
    ) {
      float h = 0.0;

      if (type == 1) {
        h = amplitude * simplex3(v / period);
      } else if (type == 2) {
        h = amplitude * fractal3(
          v,
          sharpness,
          period, 
          persistence, 
          lacunarity, 
          octaves);
        h = amplitude * pow(max(0.0, (h + 1.0) / 2.0), sharpness);
      } else if (type == 3) {
        h = fractal3(
          v,
          sharpness,
          period, 
          persistence, 
          lacunarity, 
          octaves);
        h = amplitude * pow(max(0.0, 1.0 - abs(h)), sharpness);
      }

      // Multiply by amplitude and adjust offset
      return max(0.0, h + offset);
    }

        uniform int type;
        uniform float radius;
        uniform float amplitude;
        uniform float sharpness;
        uniform float offset;
        uniform float period;
        uniform float persistence;
        uniform float lacunarity;
        uniform int octaves;
    
        // Layer colors
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        uniform vec3 color4;
        uniform vec3 color5;
        
        // Transition points for each layer
        uniform float transition2;
        uniform float transition3;
        uniform float transition4;
        uniform float transition5;
    
        // Amount of blending between each layer
        uniform float blend12;
        uniform float blend23;
        uniform float blend34;
        uniform float blend45;
    
        // Bump mapping parameters
        uniform float bumpStrength;
        uniform float bumpOffset;
    
        // Lighting parameters
        uniform float ambientIntensity;
        uniform float diffuseIntensity;
        uniform float specularIntensity;
        uniform float shininess;
        uniform vec3 lightDirection;
        uniform vec3 lightColor;
    
        varying vec3 fragPosition;
        varying vec3 fragNormal;
        varying vec3 fragTangent;
        varying vec3 fragBitangent;
    
        void main() {
          // Calculate terrain height
          float h = terrainHeight(
            type,
            fragPosition,
            amplitude, 
            sharpness,
            offset,
            period, 
            persistence, 
            lacunarity, 
            octaves);
    
          vec3 dx = bumpOffset * fragTangent;
          float h_dx = terrainHeight(
            type,
            fragPosition + dx,
            amplitude, 
            sharpness,
            offset,
            period, 
            persistence, 
            lacunarity, 
            octaves);
    
          vec3 dy = bumpOffset * fragBitangent;
          float h_dy = terrainHeight(
            type,
            fragPosition + dy,
            amplitude, 
            sharpness,
            offset,
            period, 
            persistence, 
            lacunarity, 
            octaves);
    
          vec3 pos = fragPosition * (radius + h);
          vec3 pos_dx = (fragPosition + dx) * (radius + h_dx);
          vec3 pos_dy = (fragPosition + dy) * (radius + h_dy);
    
          // Recalculate surface normal post-bump mapping
          vec3 bumpNormal = normalize(cross(pos_dx - pos, pos_dy - pos));
          // Mix original normal and bumped normal to control bump strength
          vec3 N = normalize(mix(fragNormal, bumpNormal, bumpStrength));
        
          // Normalized light direction (points in direction that light travels)
          vec3 L = normalize(-lightDirection);
          // View vector from camera to fragment
          vec3 V = normalize(cameraPosition - pos);
          // Reflected light vector
          vec3 R = normalize(reflect(L, N));
    
          float diffuse = diffuseIntensity * max(0.0, dot(N, -L));
    
          // https://ogldev.org/www/tutorial19/tutorial19.html
          float specularFalloff = clamp((transition3 - h) / transition3, 0.0, 1.0);
          float specular = max(0.0, specularFalloff * specularIntensity * pow(dot(V, R), shininess));
    
          float light = ambientIntensity + diffuse + specular;
    
          // Blender colors layer by layer
          vec3 color12 = mix(
            color1, 
            color2, 
            smoothstep(transition2 - blend12, transition2 + blend12, h));
    
          vec3 color123 = mix(
            color12, 
            color3, 
            smoothstep(transition3 - blend23, transition3 + blend23, h));
    
          vec3 color1234 = mix(
            color123, 
            color4, 
            smoothstep(transition4 - blend34, transition4 + blend34, h));
    
          vec3 finalColor = mix(
            color1234, 
            color5, 
            smoothstep(transition5 - blend45, transition5 + blend45, h));
          
          gl_FragColor = vec4(light * finalColor * lightColor, 1.0);
        }
        `})}class rm{constructor(e){this.pointPos=null,this.obj=e,this.custom_shader=new Tt({transparent:!0,opacity:.4,vertexShader:`
        varying vec3 vUv;
        void main() {
          vUv = position;
          vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 10.0;
          gl_Position = projectionMatrix * modelViewPosition;
        }
      `,fragmentShader:`
        varying vec3 vUv;
        void main() {
          float radius = 0.1;
          vec2 uv = gl_PointCoord - vec2(0.5);
          if (length(uv) > radius) {
            discard;
          }
          gl_FragColor = vec4(0.8, 0.5, 0.2, 1.0);
        }
      `,uniforms:{pointSize:{value:.05}}})}convert(){const e=[];for(let h=0;h<500;h++){const d=new z;d.random().normalize().multiplyScalar(1),e.push(d)}const n=[],i=.1;for(let h=0;h<500;h++){const d=e[h];for(let f=h+1;f<500;f++){const g=e[f];d.distanceTo(g)<i&&(n.push(d.x,d.y,d.z),n.push(g.x,g.y,g.z))}}const s=new Ht;s.setAttribute("position",new kt(new Float32Array(n),3));const o=new Ea({color:new ge(.678,.847,.902),transparent:!0,opacity:0}),a=new wo(s,o),l=new Ht().setFromPoints(e),c=new Jl(l,this.custom_shader),u=new Tn;return u.add(c,a),u}convertLineSphere(){const e=[];for(let u=0;u<2e3;u++){const h=Math.random(),d=Math.random(),f=2*Math.PI*h,g=Math.acos(2*d-1),_=Math.sin(g)*Math.cos(f),p=Math.sin(g)*Math.sin(f),m=Math.cos(g),S=new z(_,p,m);e.push(S)}const n=[],i=.05;for(let u=0;u<2e3;u++){const h=e[u];let d=1/0,f=-1;for(let g=0;g<2e3;g++)if(u!==g){const _=e[g],p=h.distanceTo(_);p<d&&(d=p,f=g)}if(d<i){const g=e[f];n.push(h.x,h.y,h.z),n.push(g.x,g.y,g.z)}}const s=new Ht;s.setAttribute("position",new kt(new Float32Array(n),3));const o=new Ea({color:new ge(.678,.847,.902),transparent:!0,opacity:0});new wo(s,o);const a=new Ht().setFromPoints(e),l=new Jl(a,this.custom_shader),c=new Tn;return c.add(l),c}tick(){}}const Uu={uniforms:{c:{value:1},glowColor:{value:new ge(65533)}},vertexShader:`
        varying vec3 viewVector;
        void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vec3 transformedNormal = normalize(normalMatrix * normal);
            viewVector = normalize(cameraPosition - mvPosition.xyz);
            gl_Position = projectionMatrix * mvPosition;
        }
    `,fragmentShader:`
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
    
    `},vE=new Tt({uniforms:Uu.uniforms,vertexShader:Uu.vertexShader,fragmentShader:Uu.fragmentShader,blending:Gi,transparent:!0});/**
 * postprocessing v6.35.3 build Sat Mar 30 2024
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2024 Raoul van Rüschen
 * @license Zlib
 */var Nu=1/1e3,xE=1e3,yE=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(r){typeof document<"u"&&document.hidden!==void 0&&(r?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=r)}get delta(){return this._delta*Nu}get fixedDelta(){return this._fixedDelta*Nu}set fixedDelta(r){this._fixedDelta=r*xE}get elapsed(){return this._elapsed*Nu}update(r){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(r!==void 0?r:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(r){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},SE=new Ah,Tr=null;function ME(){if(Tr===null){const r=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]);Tr=new Ht,Tr.setAttribute!==void 0?(Tr.setAttribute("position",new kt(r,3)),Tr.setAttribute("uv",new kt(e,2))):(Tr.addAttribute("position",new kt(r,3)),Tr.addAttribute("uv",new kt(e,2)))}return Tr}var Yi=class G0{constructor(e="Pass",t=new $l,n=SE){this.name=e,this.renderer=null,this.scene=t,this.camera=n,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Mt(ME(),e),t.frustumCulled=!1,this.scene===null&&(this.scene=new $l),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=Oa){}render(e,t,n,i,s){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,n){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Bn||t instanceof ii||t instanceof Jt||t instanceof G0)&&this[e].dispose()}}},wE=class extends Yi{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(r,e,t,n,i){const s=r.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},TE=Number(Io.replace(/\D+/g,""));function Ga(r){return TE<154?r.replace("colorspace_fragment","encodings_fragment"):r}var bE=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,V0="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",W0=class extends Tt{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new St(null),opacity:new St(1)},blending:Vn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:bE,vertexShader:V0}),this.fragmentShader=Ga(this.fragmentShader)}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}getOpacity(r){return this.uniforms.opacity.value}setOpacity(r){this.uniforms.opacity.value=r}},EE=class extends Yi{constructor(r,e=!0){super("CopyPass"),this.fullscreenMaterial=new W0,this.needsSwap=!1,this.renderTarget=r,r===void 0&&(this.renderTarget=new Bn(1,1,{minFilter:sn,magFilter:sn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(r){this.autoResize=r}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(r){this.autoResize=r}render(r,e,t,n,i){this.fullscreenMaterial.inputBuffer=e.texture,r.setRenderTarget(this.renderToScreen?null:this.renderTarget),r.render(this.scene,this.camera)}setSize(r,e){this.autoResize&&this.renderTarget.setSize(r,e)}initialize(r,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==zn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":r!==null&&r.outputColorSpace===ct&&(this.renderTarget.texture.colorSpace=ct))}},sm=new ge,X0=class extends Yi{constructor(r=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=r,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(r,e,t){this.color=r,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(r){this.overrideClearColor=r}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(r){this.overrideClearAlpha=r}render(r,e,t,n,i){const s=this.overrideClearColor,o=this.overrideClearAlpha,a=r.getClearAlpha(),l=s!==null,c=o>=0;l?(r.getClearColor(sm),r.setClearColor(s,c?o:a)):c&&r.setClearAlpha(o),r.setRenderTarget(this.renderToScreen?null:e),r.clear(this.color,this.depth,this.stencil),l?r.setClearColor(sm,a):c&&r.setClearAlpha(a)}},AE=class extends Yi{constructor(r,e){super("MaskPass",r,e),this.needsSwap=!1,this.clearPass=new X0(!1,!1,!0),this.inverse=!1}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get inverted(){return this.inverse}set inverted(r){this.inverse=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(r){this.inverted=r}render(r,e,t,n,i){const s=r.getContext(),o=r.state.buffers,a=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,h=1-u;o.color.setMask(!1),o.depth.setMask(!1),o.color.setLocked(!0),o.depth.setLocked(!0),o.stencil.setTest(!0),o.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.stencil.setFunc(s.ALWAYS,u,4294967295),o.stencil.setClear(h),o.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(r,null):(c.render(r,e),c.render(r,t))),this.renderToScreen?(r.setRenderTarget(null),r.render(a,l)):(r.setRenderTarget(e),r.render(a,l),r.setRenderTarget(t),r.render(a,l)),o.color.setLocked(!1),o.depth.setLocked(!1),o.stencil.setLocked(!1),o.stencil.setFunc(s.EQUAL,1,4294967295),o.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.stencil.setLocked(!0)}},RE=class{constructor(r=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:n=0,frameBufferType:i}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,i,n),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new EE,this.depthTexture=null,this.passes=[],this.timer=new yE,this.autoRenderToScreen=!0,this.setRenderer(r)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(r){const e=this.inputBuffer,t=this.multisampling;t>0&&r>0?(this.inputBuffer.samples=r,this.outputBuffer.samples=r,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==r&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,r),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(r){if(this.renderer=r,r!==null){const e=r.getSize(new pe),t=r.getContext().getContextAttributes().alpha,n=this.inputBuffer.texture.type;n===zn&&r.outputColorSpace===ct&&(this.inputBuffer.texture.colorSpace=ct,this.outputBuffer.texture.colorSpace=ct,this.inputBuffer.dispose(),this.outputBuffer.dispose()),r.autoClear=!1,this.setSize(e.width,e.height);for(const i of this.passes)i.initialize(r,t,n)}}replaceRenderer(r,e=!0){const t=this.renderer,n=t.domElement.parentNode;return this.setRenderer(r),e&&n!==null&&(n.removeChild(t.domElement),n.appendChild(r.domElement)),t}createDepthTexture(){const r=this.depthTexture=new Lh;return this.inputBuffer.depthTexture=r,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(r.format=xo,r.type=Do):r.type=Ss,r}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const r of this.passes)r.setDepthTexture(null)}}createBuffer(r,e,t,n){const i=this.renderer,s=i===null?new pe:i.getDrawingBufferSize(new pe),o={minFilter:sn,magFilter:sn,stencilBuffer:e,depthBuffer:r,type:t},a=new Bn(s.width,s.height,o);return n>0&&(a.ignoreDepthForMultisampleCopy=!1,a.samples=n),t===zn&&i!==null&&i.outputColorSpace===ct&&(a.texture.colorSpace=ct),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(r){for(const e of this.passes)e.mainScene=r}setMainCamera(r){for(const e of this.passes)e.mainCamera=r}addPass(r,e){const t=this.passes,n=this.renderer,i=n.getDrawingBufferSize(new pe),s=n.getContext().getContextAttributes().alpha,o=this.inputBuffer.texture.type;if(r.setRenderer(n),r.setSize(i.width,i.height),r.initialize(n,s,o),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),r.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,r):t.push(r),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),r.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const a=this.createDepthTexture();for(r of t)r.setDepthTexture(a)}else r.setDepthTexture(this.depthTexture)}removePass(r){const e=this.passes,t=e.indexOf(r);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const s=(a,l)=>a||l.needsDepthTexture;e.reduce(s,!1)||(r.getDepthTexture()===this.depthTexture&&r.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(r.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const r=this.passes;this.deleteDepthTexture(),r.length>0&&(this.autoRenderToScreen&&(r[r.length-1].renderToScreen=!1),this.passes=[])}render(r){const e=this.renderer,t=this.copyPass;let n=this.inputBuffer,i=this.outputBuffer,s=!1,o,a,l;r===void 0&&(this.timer.update(),r=this.timer.getDelta());for(const c of this.passes)c.enabled&&(c.render(e,n,i,r,s),c.needsSwap&&(s&&(t.renderToScreen=c.renderToScreen,o=e.getContext(),a=e.state.buffers.stencil,a.setFunc(o.NOTEQUAL,1,4294967295),t.render(e,n,i,r,s),a.setFunc(o.EQUAL,1,4294967295)),l=n,n=i,i=l),c instanceof AE?s=!0:c instanceof wE&&(s=!1))}setSize(r,e,t){const n=this.renderer,i=n.getSize(new pe);(r===void 0||e===void 0)&&(r=i.width,e=i.height),(i.width!==r||i.height!==e)&&n.setSize(r,e,t);const s=n.getDrawingBufferSize(new pe);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height);for(const o of this.passes)o.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const r of this.passes)r.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose()}},ys={NONE:0,DEPTH:1,CONVOLUTION:2},ft={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},CE=class{constructor(){this.shaderParts=new Map([[ft.FRAGMENT_HEAD,null],[ft.FRAGMENT_MAIN_UV,null],[ft.FRAGMENT_MAIN_IMAGE,null],[ft.VERTEX_HEAD,null],[ft.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=ys.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Qt}},Ou=!1,om=class{constructor(r=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(r),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Mn:t=this.materialsFlatShadedDoubleSide;break;case qt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Mn:t=this.materialsDoubleSide;break;case qt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(r){if(!(r instanceof Tt))return r.clone();const e=r.uniforms,t=new Map;for(const i in e){const s=e[i].value;s.isRenderTargetTexture&&(e[i].value=null,t.set(i,s))}const n=r.clone();for(const i of t)e[i[0]].value=i[1],n.uniforms[i[0]].value=i[1];return n}setMaterial(r){if(this.disposeMaterials(),this.material=r,r!==null){const e=this.materials=[this.cloneMaterial(r),this.cloneMaterial(r),this.cloneMaterial(r)];for(const t of e)t.uniforms=Object.assign({},r.uniforms),t.side=Hi;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},r.uniforms),n.side=qt,n}),this.materialsDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},r.uniforms),n.side=Mn,n}),this.materialsFlatShaded=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},r.uniforms),n.flatShading=!0,n}),this.materialsFlatShadedBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},r.uniforms),n.flatShading=!0,n.side=qt,n}),this.materialsFlatShadedDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},r.uniforms),n.flatShading=!0,n.side=Mn,n})}}render(r,e,t){const n=r.shadowMap.enabled;if(r.shadowMap.enabled=!1,Ou){const i=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),r.render(e,t);for(const s of i)s[0].material=s[1];this.meshCount!==i.size&&i.clear()}else{const i=e.overrideMaterial;e.overrideMaterial=this.material,r.render(e,t),e.overrideMaterial=i}r.shadowMap.enabled=n}disposeMaterials(){if(this.material!==null){const r=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of r)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Ou}static set workaroundEnabled(r){Ou=r}},br=-1,zi=class extends dr{constructor(r,e=br,t=br,n=1){super(),this.resizable=r,this.baseSize=new pe(1,1),this.preferredSize=new pe(e,t),this.target=this.preferredSize,this.s=n,this.effectiveSize=new pe,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const r=this.baseSize,e=this.preferredSize,t=this.effectiveSize,n=this.scale;e.width!==br?t.width=e.width:e.height!==br?t.width=Math.round(e.height*(r.width/Math.max(r.height,1))):t.width=Math.round(r.width*n),e.height!==br?t.height=e.height:e.width!==br?t.height=Math.round(e.width/Math.max(r.width/Math.max(r.height,1),1)):t.height=Math.round(r.height*n)}get width(){return this.effectiveSize.width}set width(r){this.preferredWidth=r}get height(){return this.effectiveSize.height}set height(r){this.preferredHeight=r}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(r){this.s!==r&&(this.s=r,this.preferredSize.setScalar(br),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(r){this.scale=r}get baseWidth(){return this.baseSize.width}set baseWidth(r){this.baseSize.width!==r&&(this.baseSize.width=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(r){this.baseWidth=r}get baseHeight(){return this.baseSize.height}set baseHeight(r){this.baseSize.height!==r&&(this.baseSize.height=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(r){this.baseHeight=r}setBaseSize(r,e){(this.baseSize.width!==r||this.baseSize.height!==e)&&(this.baseSize.set(r,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(r){this.preferredSize.width!==r&&(this.preferredSize.width=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(r){this.preferredWidth=r}get preferredHeight(){return this.preferredSize.height}set preferredHeight(r){this.preferredSize.height!==r&&(this.preferredSize.height=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(r){this.preferredHeight=r}setPreferredSize(r,e){(this.preferredSize.width!==r||this.preferredSize.height!==e)&&(this.preferredSize.set(r,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(r){this.s=r.scale,this.baseSize.set(r.baseWidth,r.baseHeight),this.preferredSize.set(r.preferredWidth,r.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return br}},rt={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},PE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",LE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",IE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",DE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",UE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",NE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",OE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",FE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",zE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",BE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",kE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",HE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",GE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",VE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",WE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",XE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",qE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",jE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",YE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",KE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",$E="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",ZE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",JE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",QE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",eA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",tA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",nA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",iA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",rA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",sA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",oA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",aA="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",lA=new Map([[rt.ADD,PE],[rt.ALPHA,LE],[rt.AVERAGE,IE],[rt.COLOR,DE],[rt.COLOR_BURN,UE],[rt.COLOR_DODGE,NE],[rt.DARKEN,OE],[rt.DIFFERENCE,FE],[rt.DIVIDE,zE],[rt.DST,null],[rt.EXCLUSION,BE],[rt.HARD_LIGHT,kE],[rt.HARD_MIX,HE],[rt.HUE,GE],[rt.INVERT,VE],[rt.INVERT_RGB,WE],[rt.LIGHTEN,XE],[rt.LINEAR_BURN,qE],[rt.LINEAR_DODGE,jE],[rt.LINEAR_LIGHT,YE],[rt.LUMINOSITY,KE],[rt.MULTIPLY,$E],[rt.NEGATION,ZE],[rt.NORMAL,JE],[rt.OVERLAY,QE],[rt.PIN_LIGHT,eA],[rt.REFLECT,tA],[rt.SATURATION,nA],[rt.SCREEN,iA],[rt.SOFT_LIGHT,rA],[rt.SRC,sA],[rt.SUBTRACT,oA],[rt.VIVID_LIGHT,aA]]),cA=class extends dr{constructor(r,e=1){super(),this._blendFunction=r,this.opacity=new St(e)}getOpacity(){return this.opacity.value}setOpacity(r){this.opacity.value=r}get blendFunction(){return this._blendFunction}set blendFunction(r){this._blendFunction=r,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(r){this.blendFunction=r}getShaderCode(){return lA.get(this.blendFunction)}},pf={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},uA=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,hA="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",fA=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],dA=class extends Tt{constructor(r=new ut){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new St(null),texelSize:new St(new ut),scale:new St(1),kernel:new St(0)},blending:Vn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:uA,vertexShader:hA}),this.fragmentShader=Ga(this.fragmentShader),this.setTexelSize(r.x,r.y),this.kernelSize=pf.MEDIUM}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.inputBuffer=r}get kernelSequence(){return fA[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(r){this.uniforms.scale.value=r}getScale(){return this.uniforms.scale.value}setScale(r){this.uniforms.scale.value=r}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(r){this.uniforms.kernel.value=r}setKernel(r){this.kernel=r}setTexelSize(r,e){this.uniforms.texelSize.value.set(r,e,r*.5,e*.5)}setSize(r,e){const t=1/r,n=1/e;this.uniforms.texelSize.value.set(t,n,t*.5,n*.5)}},pA=class extends Yi{constructor({kernelSize:r=pf.MEDIUM,resolutionScale:e=.5,width:t=zi.AUTO_SIZE,height:n=zi.AUTO_SIZE,resolutionX:i=t,resolutionY:s=n}={}){super("KawaseBlurPass"),this.renderTargetA=new Bn(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const o=this.resolution=new zi(this,i,s,e);o.addEventListener("change",a=>this.setSize(o.baseWidth,o.baseHeight)),this._blurMaterial=new dA,this._blurMaterial.kernelSize=r,this.copyMaterial=new W0}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(r){this._blurMaterial=r}get dithering(){return this.copyMaterial.dithering}set dithering(r){this.copyMaterial.dithering=r}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(r){this.blurMaterial.kernelSize=r}get width(){return this.resolution.width}set width(r){this.resolution.preferredWidth=r}get height(){return this.resolution.height}set height(r){this.resolution.preferredHeight=r}get scale(){return this.blurMaterial.scale}set scale(r){this.blurMaterial.scale=r}getScale(){return this.blurMaterial.scale}setScale(r){this.blurMaterial.scale=r}getKernelSize(){return this.kernelSize}setKernelSize(r){this.kernelSize=r}getResolutionScale(){return this.resolution.scale}setResolutionScale(r){this.resolution.scale=r}render(r,e,t,n,i){const s=this.scene,o=this.camera,a=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,u=c.kernelSequence;let h=e;this.fullscreenMaterial=c;for(let d=0,f=u.length;d<f;++d){const g=d&1?l:a;c.kernel=u[d],c.inputBuffer=h.texture,r.setRenderTarget(g),r.render(s,o),h=g}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=h.texture,r.setRenderTarget(this.renderToScreen?null:t),r.render(s,o)}setSize(r,e){const t=this.resolution;t.setBaseSize(r,e);const n=t.width,i=t.height;this.renderTargetA.setSize(n,i),this.renderTargetB.setSize(n,i),this.blurMaterial.setSize(r,e)}initialize(r,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==zn?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):r!==null&&r.outputColorSpace===ct&&(this.renderTargetA.texture.colorSpace=ct,this.renderTargetB.texture.colorSpace=ct))}static get AUTO_SIZE(){return zi.AUTO_SIZE}},mA=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l)*l;
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*clamp(l,0.0,1.0),l);
#else
gl_FragColor=vec4(l);
#endif
}`,gA=class extends Tt{constructor(r=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Io.replace(/\D+/g,"")},uniforms:{inputBuffer:new St(null),threshold:new St(0),smoothing:new St(1),range:new St(null)},blending:Vn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:mA,vertexShader:V0}),this.colorOutput=r,this.luminanceRange=e}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}get threshold(){return this.uniforms.threshold.value}set threshold(r){this.smoothing>0||r>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=r}getThreshold(){return this.threshold}setThreshold(r){this.threshold=r}get smoothing(){return this.uniforms.smoothing.value}set smoothing(r){this.threshold>0||r>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=r}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(r){this.smoothing=r}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(r){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(r){r?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(r){return this.colorOutput}setColorOutputEnabled(r){this.colorOutput=r}get useRange(){return this.luminanceRange!==null}set useRange(r){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(r){r!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=r,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(r){this.luminanceRange=r}},_A=class extends Yi{constructor({renderTarget:r,luminanceRange:e,colorOutput:t,resolutionScale:n=1,width:i=zi.AUTO_SIZE,height:s=zi.AUTO_SIZE,resolutionX:o=i,resolutionY:a=s}={}){super("LuminancePass"),this.fullscreenMaterial=new gA(t,e),this.needsSwap=!1,this.renderTarget=r,this.renderTarget===void 0&&(this.renderTarget=new Bn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new zi(this,o,a,n);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(r,e,t,n,i){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,r.setRenderTarget(this.renderToScreen?null:this.renderTarget),r.render(this.scene,this.camera)}setSize(r,e){const t=this.resolution;t.setBaseSize(r,e),this.renderTarget.setSize(t.width,t.height)}initialize(r,e,t){t!==void 0&&t!==zn&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},vA=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,xA="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",yA=class extends Tt{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new St(null),texelSize:new St(new pe)},blending:Vn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:vA,vertexShader:xA}),this.fragmentShader=Ga(this.fragmentShader)}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setSize(r,e){this.uniforms.texelSize.value.set(1/r,1/e)}},SA=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,MA="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",wA=class extends Tt{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new St(null),supportBuffer:new St(null),texelSize:new St(new pe),radius:new St(.85)},blending:Vn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:SA,vertexShader:MA}),this.fragmentShader=Ga(this.fragmentShader)}set inputBuffer(r){this.uniforms.inputBuffer.value=r}set supportBuffer(r){this.uniforms.supportBuffer.value=r}get radius(){return this.uniforms.radius.value}set radius(r){this.uniforms.radius.value=r}setSize(r,e){this.uniforms.texelSize.value.set(1/r,1/e)}},TA=class extends Yi{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Bn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new yA,this.upsamplingMaterial=new wA,this.resolution=new pe}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(r){if(this.levels!==r){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<r;++t){const n=e.clone();n.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(n)}this.upsamplingMipmaps.push(e);for(let t=1,n=r-1;t<n;++t){const i=e.clone();i.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(i)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(r){this.upsamplingMaterial.radius=r}render(r,e,t,n,i){const{scene:s,camera:o}=this,{downsamplingMaterial:a,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:u}=this;let h=e;this.fullscreenMaterial=a;for(let d=0,f=c.length;d<f;++d){const g=c[d];a.setSize(h.width,h.height),a.inputBuffer=h.texture,r.setRenderTarget(g),r.render(s,o),h=g}this.fullscreenMaterial=l;for(let d=u.length-1;d>=0;--d){const f=u[d];l.setSize(h.width,h.height),l.inputBuffer=h.texture,l.supportBuffer=c[d].texture,r.setRenderTarget(f),r.render(s,o),h=f}}setSize(r,e){const t=this.resolution;t.set(r,e);let n=t.width,i=t.height;for(let s=0,o=this.downsamplingMipmaps.length;s<o;++s)n=Math.round(n*.5),i=Math.round(i*.5),this.downsamplingMipmaps[s].setSize(n,i),s<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[s].setSize(n,i)}initialize(r,e,t){if(t!==void 0){const n=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const i of n)i.texture.type=t;if(t!==zn)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(r!==null&&r.outputColorSpace===ct)for(const i of n)i.texture.colorSpace=ct}}dispose(){super.dispose();for(const r of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))r.dispose()}},bA=class extends dr{constructor(r,e,{attributes:t=ys.NONE,blendFunction:n=rt.NORMAL,defines:i=new Map,uniforms:s=new Map,extensions:o=null,vertexShader:a=null}={}){super(),this.name=r,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=a,this.defines=i,this.uniforms=s,this.extensions=o,this.blendMode=new cA(n),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=Qt,this._outputColorSpace=Li}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(r){this._inputColorSpace=r,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(r){this._outputColorSpace=r,this.setChanged()}set mainScene(r){}set mainCamera(r){}getName(){return this.name}setRenderer(r){this.renderer=r}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(r){this.attributes=r,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(r){this.fragmentShader=r,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(r){this.vertexShader=r,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(r,e=Oa){}update(r,e,t){}setSize(r,e){}initialize(r,e,t){}dispose(){for(const r of Object.keys(this)){const e=this[r];(e instanceof Bn||e instanceof ii||e instanceof Jt||e instanceof Yi)&&this[r].dispose()}}},EA=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,texel.a);}`,AA=class extends bA{constructor({blendFunction:r=rt.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:t=.025,mipmapBlur:n=!1,intensity:i=1,radius:s=.85,levels:o=8,kernelSize:a=pf.LARGE,resolutionScale:l=.5,width:c=zi.AUTO_SIZE,height:u=zi.AUTO_SIZE,resolutionX:h=c,resolutionY:d=u}={}){super("BloomEffect",EA,{blendFunction:r,uniforms:new Map([["map",new St(null)],["intensity",new St(i)]])}),this.renderTarget=new Bn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new pA({kernelSize:a}),this.luminancePass=new _A({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new TA,this.mipmapBlurPass.enabled=n,this.mipmapBlurPass.radius=s,this.mipmapBlurPass.levels=o,this.uniforms.get("map").value=n?this.mipmapBlurPass.texture:this.renderTarget.texture;const f=this.resolution=new zi(this,h,d,l);f.addEventListener("change",g=>this.setSize(f.baseWidth,f.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(r){this.resolution.preferredWidth=r}get height(){return this.resolution.height}set height(r){this.resolution.preferredHeight=r}get dithering(){return this.blurPass.dithering}set dithering(r){this.blurPass.dithering=r}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(r){this.blurPass.kernelSize=r}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(r){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(r){this.uniforms.get("intensity").value=r}getIntensity(){return this.intensity}setIntensity(r){this.intensity=r}getResolutionScale(){return this.resolution.scale}setResolutionScale(r){this.resolution.scale=r}update(r,e,t){const n=this.renderTarget,i=this.luminancePass;i.enabled?(i.render(r,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(r,i.renderTarget):this.blurPass.render(r,i.renderTarget,n)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(r,e):this.blurPass.render(r,e,n)}setSize(r,e){const t=this.resolution;t.setBaseSize(r,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(r,e),this.mipmapBlurPass.setSize(r,e)}initialize(r,e,t){this.blurPass.initialize(r,e,t),this.luminancePass.initialize(r,e,t),this.mipmapBlurPass.initialize(r,e,t),t!==void 0&&(this.renderTarget.texture.type=t,r!==null&&r.outputColorSpace===ct&&(this.renderTarget.texture.colorSpace=ct))}},RA=class extends Yi{constructor(r,e,t=null){super("RenderPass",r,e),this.needsSwap=!1,this.clearPass=new X0,this.overrideMaterialManager=t===null?null:new om(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get renderToScreen(){return super.renderToScreen}set renderToScreen(r){super.renderToScreen=r,this.clearPass.renderToScreen=r}get overrideMaterial(){const r=this.overrideMaterialManager;return r!==null?r.material:null}set overrideMaterial(r){const e=this.overrideMaterialManager;r!==null?e!==null?e.setMaterial(r):this.overrideMaterialManager=new om(r):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(r){this.overrideMaterial=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getSelection(){return this.selection}setSelection(r){this.selection=r}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(r){this.ignoreBackground=r}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(r){this.skipShadowMapUpdate=r}getClearPass(){return this.clearPass}render(r,e,t,n,i){const s=this.scene,o=this.camera,a=this.selection,l=o.layers.mask,c=s.background,u=r.shadowMap.autoUpdate,h=this.renderToScreen?null:e;a!==null&&o.layers.set(a.getLayer()),this.skipShadowMapUpdate&&(r.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(r,e),r.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(r,s,o):r.render(s,o),o.layers.mask=l,s.background=c,r.shadowMap.autoUpdate=u}},CA=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#if THREE_REVISION >= 137
vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,PA="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",LA=class extends Tt{constructor(r,e,t,n,i=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Io.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new St(null),depthBuffer:new St(null),resolution:new St(new pe),texelSize:new St(new pe),cameraNear:new St(.3),cameraFar:new St(1e3),aspect:new St(1),time:new St(0)},blending:Vn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:i}),r&&this.setShaderParts(r),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(n)}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(r){this.uniforms.depthBuffer.value=r}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(r){this.defines.DEPTH_PACKING=r.toFixed(0),this.needsUpdate=!0}setDepthBuffer(r,e=Oa){this.depthBuffer=r,this.depthPacking=e}setShaderData(r){this.setShaderParts(r.shaderParts),this.setDefines(r.defines),this.setUniforms(r.uniforms),this.setExtensions(r.extensions)}setShaderParts(r){return this.fragmentShader=CA.replace(ft.FRAGMENT_HEAD,r.get(ft.FRAGMENT_HEAD)||"").replace(ft.FRAGMENT_MAIN_UV,r.get(ft.FRAGMENT_MAIN_UV)||"").replace(ft.FRAGMENT_MAIN_IMAGE,r.get(ft.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=PA.replace(ft.VERTEX_HEAD,r.get(ft.VERTEX_HEAD)||"").replace(ft.VERTEX_MAIN_SUPPORT,r.get(ft.VERTEX_MAIN_SUPPORT)||""),this.fragmentShader=Ga(this.fragmentShader),this.needsUpdate=!0,this}setDefines(r){for(const e of r.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(r){for(const e of r.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(r){this.extensions={};for(const e of r)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(r){this.encodeOutput!==r&&(r?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(r){return this.encodeOutput}setOutputEncodingEnabled(r){this.encodeOutput=r}get time(){return this.uniforms.time.value}set time(r){this.uniforms.time.value=r}setDeltaTime(r){this.uniforms.time.value+=r}adoptCameraSettings(r){this.copyCameraSettings(r)}copyCameraSettings(r){r&&(this.uniforms.cameraNear.value=r.near,this.uniforms.cameraFar.value=r.far,r instanceof Sn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(r,e){const t=this.uniforms;t.resolution.value.set(r,e),t.texelSize.value.set(1/r,1/e),t.aspect.value=r/e}static get Section(){return ft}};function am(r,e,t){for(const n of e){const i="$1"+r+n.charAt(0).toUpperCase()+n.slice(1),s=new RegExp("([^\\.])(\\b"+n+"\\b)","g");for(const o of t.entries())o[1]!==null&&t.set(o[0],o[1].replace(s,i))}}function IA(r,e,t){let n=e.getFragmentShader(),i=e.getVertexShader();const s=n!==void 0&&/mainImage/.test(n),o=n!==void 0&&/mainUv/.test(n);if(t.attributes|=e.getAttributes(),n===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(o&&t.attributes&ys.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!o)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const a=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts;let c=l.get(ft.FRAGMENT_HEAD)||"",u=l.get(ft.FRAGMENT_MAIN_UV)||"",h=l.get(ft.FRAGMENT_MAIN_IMAGE)||"",d=l.get(ft.VERTEX_HEAD)||"",f=l.get(ft.VERTEX_MAIN_SUPPORT)||"";const g=new Set,_=new Set;if(o&&(u+=`	${r}MainUv(UV);
`,t.uvTransformation=!0),i!==null&&/mainSupport/.test(i)){const S=/mainSupport *\([\w\s]*?uv\s*?\)/.test(i);f+=`	${r}MainSupport(`,f+=S?`vUv);
`:`);
`;for(const y of i.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const b of y[1].split(/\s*,\s*/))t.varyings.add(b),g.add(b),_.add(b);for(const y of i.matchAll(a))_.add(y[1])}for(const S of n.matchAll(a))_.add(S[1]);for(const S of e.defines.keys())_.add(S.replace(/\([\w\s,]*\)/g,""));for(const S of e.uniforms.keys())_.add(S);_.delete("while"),_.delete("for"),_.delete("if"),e.uniforms.forEach((S,y)=>t.uniforms.set(r+y.charAt(0).toUpperCase()+y.slice(1),S)),e.defines.forEach((S,y)=>t.defines.set(r+y.charAt(0).toUpperCase()+y.slice(1),S));const p=new Map([["fragment",n],["vertex",i]]);am(r,_,t.defines),am(r,_,p),n=p.get("fragment"),i=p.get("vertex");const m=e.blendMode;if(t.blendModes.set(m.blendFunction,m),s){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(h+=e.inputColorSpace===ct?`color0 = LinearTosRGB(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Li?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const S=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;h+=`${r}MainImage(color0, UV, `,t.attributes&ys.DEPTH&&S.test(n)&&(h+="depth, ",t.readDepth=!0),h+=`color1);
	`;const y=r+"BlendOpacity";t.uniforms.set(y,m.opacity),h+=`color0 = blend${m.blendFunction}(color0, color1, ${y});

	`,c+=`uniform float ${y};

`}if(c+=n+`
`,i!==null&&(d+=i+`
`),l.set(ft.FRAGMENT_HEAD,c),l.set(ft.FRAGMENT_MAIN_UV,u),l.set(ft.FRAGMENT_MAIN_IMAGE,h),l.set(ft.VERTEX_HEAD,d),l.set(ft.VERTEX_MAIN_SUPPORT,f),e.extensions!==null)for(const S of e.extensions)t.extensions.add(S)}}var DA=class extends Yi{constructor(r,...e){super("EffectPass"),this.fullscreenMaterial=new LA(null,null,null,r),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(r){for(const e of this.effects)e.mainScene=r}set mainCamera(r){this.fullscreenMaterial.copyCameraSettings(r);for(const e of this.effects)e.mainCamera=r}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(r){this.fullscreenMaterial.encodeOutput=r}get dithering(){return this.fullscreenMaterial.dithering}set dithering(r){const e=this.fullscreenMaterial;e.dithering=r,e.needsUpdate=!0}setEffects(r){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=r.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const r=new CE;let e=0;for(const o of this.effects)if(o.blendMode.blendFunction===rt.DST)r.attributes|=o.getAttributes()&ys.DEPTH;else{if(r.attributes&o.getAttributes()&ys.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${o.name})`);IA("e"+e++,o,r)}let t=r.shaderParts.get(ft.FRAGMENT_HEAD),n=r.shaderParts.get(ft.FRAGMENT_MAIN_IMAGE),i=r.shaderParts.get(ft.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const o of r.blendModes.values())t+=o.getShaderCode().replace(s,`blend${o.blendFunction}`)+`
`;r.attributes&ys.DEPTH?(r.readDepth&&(n=`float depth = readDepth(UV);

	`+n),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,r.colorSpace===ct&&(n+=`color0 = sRGBToLinear(color0);
	`),r.uvTransformation?(i=`vec2 transformedUv = vUv;
`+i,r.defines.set("UV","transformedUv")):r.defines.set("UV","vUv"),r.shaderParts.set(ft.FRAGMENT_HEAD,t),r.shaderParts.set(ft.FRAGMENT_MAIN_IMAGE,n),r.shaderParts.set(ft.FRAGMENT_MAIN_UV,i);for(const[o,a]of r.shaderParts)a!==null&&r.shaderParts.set(o,a.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(r)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(r,e=Oa){this.fullscreenMaterial.depthBuffer=r,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(r,e)}render(r,e,t,n,i){for(const s of this.effects)s.update(r,e,n);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=n*this.timeScale,r.setRenderTarget(this.renderToScreen?null:t),r.render(this.scene,this.camera)}}setSize(r,e){this.fullscreenMaterial.setSize(r,e);for(const t of this.effects)t.setSize(r,e)}initialize(r,e,t){this.renderer=r;for(const n of this.effects)n.initialize(r,e,t);this.updateMaterial(),t!==void 0&&t!==zn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const r of this.effects)r.removeEventListener("change",this.listener),r.dispose()}handleEvent(r){switch(r.type){case"change":this.recompile();break}}};const lm=`
varying vec2 vUv;
varying vec3 vPosition;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float transitionProgress;

void main() {
    vec4 texel1 = texture2D(texture1, vUv);
    vec4 texel2 = texture2D(texture2, vUv);
    // gl_FragColor = mix(texel1, texel2, transitionProgress);
    csm_DiffuseColor = mix(texel1, texel2, transitionProgress);
  }

`,cm=`
    varying vec2 vUv;
    varying vec3 vPosition;

    void main(){
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix *vec4(position, 1.0);
    }
`;function Mc(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Ll(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var q0={exports:{}};(function(r,e){(function(t){r.exports=t()})(function(){return function t(n,i,s){function o(c,u){if(!i[c]){if(!n[c]){var h=typeof Ll=="function"&&Ll;if(!u&&h)return h(c,!0);if(a)return a(c,!0);throw new Error("Cannot find module '"+c+"'")}u=i[c]={exports:{}},n[c][0].call(u.exports,function(d){var f=n[c][1][d];return o(f||d)},u,u.exports,t,n,i,s)}return i[c].exports}for(var a=typeof Ll=="function"&&Ll,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(t,n,i){(function(s,o,a,l,c,u,h,d,f){var g=t("crypto");function _(w,M){M=S(w,M);var T;return(T=M.algorithm!=="passthrough"?g.createHash(M.algorithm):new L).write===void 0&&(T.write=T.update,T.end=T.update),b(M,T).dispatch(w),T.update||T.end(""),T.digest?T.digest(M.encoding==="buffer"?void 0:M.encoding):(w=T.read(),M.encoding!=="buffer"?w.toString(M.encoding):w)}(i=n.exports=_).sha1=function(w){return _(w)},i.keys=function(w){return _(w,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},i.MD5=function(w){return _(w,{algorithm:"md5",encoding:"hex"})},i.keysMD5=function(w){return _(w,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var p=g.getHashes?g.getHashes().slice():["sha1","md5"],m=(p.push("passthrough"),["buffer","hex","binary","base64"]);function S(w,M){var T={};if(T.algorithm=(M=M||{}).algorithm||"sha1",T.encoding=M.encoding||"hex",T.excludeValues=!!M.excludeValues,T.algorithm=T.algorithm.toLowerCase(),T.encoding=T.encoding.toLowerCase(),T.ignoreUnknown=M.ignoreUnknown===!0,T.respectType=M.respectType!==!1,T.respectFunctionNames=M.respectFunctionNames!==!1,T.respectFunctionProperties=M.respectFunctionProperties!==!1,T.unorderedArrays=M.unorderedArrays===!0,T.unorderedSets=M.unorderedSets!==!1,T.unorderedObjects=M.unorderedObjects!==!1,T.replacer=M.replacer||void 0,T.excludeKeys=M.excludeKeys||void 0,w===void 0)throw new Error("Object argument required.");for(var x=0;x<p.length;++x)p[x].toLowerCase()===T.algorithm.toLowerCase()&&(T.algorithm=p[x]);if(p.indexOf(T.algorithm)===-1)throw new Error('Algorithm "'+T.algorithm+'"  not supported. supported values: '+p.join(", "));if(m.indexOf(T.encoding)===-1&&T.algorithm!=="passthrough")throw new Error('Encoding "'+T.encoding+'"  not supported. supported values: '+m.join(", "));return T}function y(w){if(typeof w=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(w))!=null}function b(w,M,T){T=T||[];function x(v){return M.update?M.update(v,"utf8"):M.write(v,"utf8")}return{dispatch:function(v){return this["_"+((v=w.replacer?w.replacer(v):v)===null?"null":typeof v)](v)},_object:function(v){var C,I=Object.prototype.toString.call(v),O=/\[object (.*)\]/i.exec(I);if(O=(O=O?O[1]:"unknown:["+I+"]").toLowerCase(),0<=(I=T.indexOf(v)))return this.dispatch("[CIRCULAR:"+I+"]");if(T.push(v),a!==void 0&&a.isBuffer&&a.isBuffer(v))return x("buffer:"),x(v);if(O==="object"||O==="function"||O==="asyncfunction")return I=Object.keys(v),w.unorderedObjects&&(I=I.sort()),w.respectType===!1||y(v)||I.splice(0,0,"prototype","__proto__","constructor"),w.excludeKeys&&(I=I.filter(function(k){return!w.excludeKeys(k)})),x("object:"+I.length+":"),C=this,I.forEach(function(k){C.dispatch(k),x(":"),w.excludeValues||C.dispatch(v[k]),x(",")});if(!this["_"+O]){if(w.ignoreUnknown)return x("["+O+"]");throw new Error('Unknown object type "'+O+'"')}this["_"+O](v)},_array:function(v,k){k=k!==void 0?k:w.unorderedArrays!==!1;var I=this;if(x("array:"+v.length+":"),!k||v.length<=1)return v.forEach(function(B){return I.dispatch(B)});var O=[],k=v.map(function(B){var H=new L,G=T.slice();return b(w,H,G).dispatch(B),O=O.concat(G.slice(T.length)),H.read().toString()});return T=T.concat(O),k.sort(),this._array(k,!1)},_date:function(v){return x("date:"+v.toJSON())},_symbol:function(v){return x("symbol:"+v.toString())},_error:function(v){return x("error:"+v.toString())},_boolean:function(v){return x("bool:"+v.toString())},_string:function(v){x("string:"+v.length+":"),x(v.toString())},_function:function(v){x("fn:"),y(v)?this.dispatch("[native]"):this.dispatch(v.toString()),w.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(v.name)),w.respectFunctionProperties&&this._object(v)},_number:function(v){return x("number:"+v.toString())},_xml:function(v){return x("xml:"+v.toString())},_null:function(){return x("Null")},_undefined:function(){return x("Undefined")},_regexp:function(v){return x("regex:"+v.toString())},_uint8array:function(v){return x("uint8array:"),this.dispatch(Array.prototype.slice.call(v))},_uint8clampedarray:function(v){return x("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(v))},_int8array:function(v){return x("int8array:"),this.dispatch(Array.prototype.slice.call(v))},_uint16array:function(v){return x("uint16array:"),this.dispatch(Array.prototype.slice.call(v))},_int16array:function(v){return x("int16array:"),this.dispatch(Array.prototype.slice.call(v))},_uint32array:function(v){return x("uint32array:"),this.dispatch(Array.prototype.slice.call(v))},_int32array:function(v){return x("int32array:"),this.dispatch(Array.prototype.slice.call(v))},_float32array:function(v){return x("float32array:"),this.dispatch(Array.prototype.slice.call(v))},_float64array:function(v){return x("float64array:"),this.dispatch(Array.prototype.slice.call(v))},_arraybuffer:function(v){return x("arraybuffer:"),this.dispatch(new Uint8Array(v))},_url:function(v){return x("url:"+v.toString())},_map:function(v){return x("map:"),v=Array.from(v),this._array(v,w.unorderedSets!==!1)},_set:function(v){return x("set:"),v=Array.from(v),this._array(v,w.unorderedSets!==!1)},_file:function(v){return x("file:"),this.dispatch([v.name,v.size,v.type,v.lastModfied])},_blob:function(){if(w.ignoreUnknown)return x("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return x("domwindow")},_bigint:function(v){return x("bigint:"+v.toString())},_process:function(){return x("process")},_timer:function(){return x("timer")},_pipe:function(){return x("pipe")},_tcp:function(){return x("tcp")},_udp:function(){return x("udp")},_tty:function(){return x("tty")},_statwatcher:function(){return x("statwatcher")},_securecontext:function(){return x("securecontext")},_connection:function(){return x("connection")},_zlib:function(){return x("zlib")},_context:function(){return x("context")},_nodescript:function(){return x("nodescript")},_httpparser:function(){return x("httpparser")},_dataview:function(){return x("dataview")},_signal:function(){return x("signal")},_fsevent:function(){return x("fsevent")},_tlswrap:function(){return x("tlswrap")}}}function L(){return{buf:"",write:function(w){this.buf+=w},end:function(w){this.buf+=w},read:function(){return this.buf}}}i.writeToStream=function(w,M,T){return T===void 0&&(T=M,M={}),b(M=S(w,M),T).dispatch(w)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(t,n,i){(function(s,o,a,l,c,u,h,d,f){(function(g){var _=typeof Uint8Array<"u"?Uint8Array:Array,p=43,m=47,S=48,y=97,b=65,L=45,w=95;function M(T){return T=T.charCodeAt(0),T===p||T===L?62:T===m||T===w?63:T<S?-1:T<S+10?T-S+26+26:T<b+26?T-b:T<y+26?T-y+26:void 0}g.toByteArray=function(T){var x,v;if(0<T.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var C=T.length,C=T.charAt(C-2)==="="?2:T.charAt(C-1)==="="?1:0,I=new _(3*T.length/4-C),O=0<C?T.length-4:T.length,k=0;function B(H){I[k++]=H}for(x=0;x<O;x+=4,0)B((16711680&(v=M(T.charAt(x))<<18|M(T.charAt(x+1))<<12|M(T.charAt(x+2))<<6|M(T.charAt(x+3))))>>16),B((65280&v)>>8),B(255&v);return C==2?B(255&(v=M(T.charAt(x))<<2|M(T.charAt(x+1))>>4)):C==1&&(B((v=M(T.charAt(x))<<10|M(T.charAt(x+1))<<4|M(T.charAt(x+2))>>2)>>8&255),B(255&v)),I},g.fromByteArray=function(T){var x,v,C,I,O=T.length%3,k="";function B(H){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(H)}for(x=0,C=T.length-O;x<C;x+=3)v=(T[x]<<16)+(T[x+1]<<8)+T[x+2],k+=B((I=v)>>18&63)+B(I>>12&63)+B(I>>6&63)+B(63&I);switch(O){case 1:k=(k+=B((v=T[T.length-1])>>2))+B(v<<4&63)+"==";break;case 2:k=(k=(k+=B((v=(T[T.length-2]<<8)+T[T.length-1])>>10))+B(v>>4&63))+B(v<<2&63)+"="}return k}})(i===void 0?this.base64js={}:i)}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(t,n,i){(function(s,o,p,l,c,u,h,d,f){var g=t("base64-js"),_=t("ieee754");function p(A,N,P){if(!(this instanceof p))return new p(A,N,P);var Z,X,ie,ae,Me=typeof A;if(N==="base64"&&Me=="string")for(A=(ae=A).trim?ae.trim():ae.replace(/^\s+|\s+$/g,"");A.length%4!=0;)A+="=";if(Me=="number")Z=W(A);else if(Me=="string")Z=p.byteLength(A,N);else{if(Me!="object")throw new Error("First argument needs to be a number, array or string.");Z=W(A.length)}if(p._useTypedArrays?X=p._augment(new Uint8Array(Z)):((X=this).length=Z,X._isBuffer=!0),p._useTypedArrays&&typeof A.byteLength=="number")X._set(A);else if(J(ae=A)||p.isBuffer(ae)||ae&&typeof ae=="object"&&typeof ae.length=="number")for(ie=0;ie<Z;ie++)p.isBuffer(A)?X[ie]=A.readUInt8(ie):X[ie]=A[ie];else if(Me=="string")X.write(A,0,N);else if(Me=="number"&&!p._useTypedArrays&&!P)for(ie=0;ie<Z;ie++)X[ie]=0;return X}function m(A,N,P,Z){return p._charsWritten=We(function(X){for(var ie=[],ae=0;ae<X.length;ae++)ie.push(255&X.charCodeAt(ae));return ie}(N),A,P,Z)}function S(A,N,P,Z){return p._charsWritten=We(function(X){for(var ie,ae,Me=[],E=0;E<X.length;E++)ae=X.charCodeAt(E),ie=ae>>8,ae=ae%256,Me.push(ae),Me.push(ie);return Me}(N),A,P,Z)}function y(A,N,P){var Z="";P=Math.min(A.length,P);for(var X=N;X<P;X++)Z+=String.fromCharCode(A[X]);return Z}function b(A,N,P,ie){ie||(te(typeof P=="boolean","missing or invalid endian"),te(N!=null,"missing offset"),te(N+1<A.length,"Trying to read beyond buffer length"));var X,ie=A.length;if(!(ie<=N))return P?(X=A[N],N+1<ie&&(X|=A[N+1]<<8)):(X=A[N]<<8,N+1<ie&&(X|=A[N+1])),X}function L(A,N,P,ie){ie||(te(typeof P=="boolean","missing or invalid endian"),te(N!=null,"missing offset"),te(N+3<A.length,"Trying to read beyond buffer length"));var X,ie=A.length;if(!(ie<=N))return P?(N+2<ie&&(X=A[N+2]<<16),N+1<ie&&(X|=A[N+1]<<8),X|=A[N],N+3<ie&&(X+=A[N+3]<<24>>>0)):(N+1<ie&&(X=A[N+1]<<16),N+2<ie&&(X|=A[N+2]<<8),N+3<ie&&(X|=A[N+3]),X+=A[N]<<24>>>0),X}function w(A,N,P,Z){if(Z||(te(typeof P=="boolean","missing or invalid endian"),te(N!=null,"missing offset"),te(N+1<A.length,"Trying to read beyond buffer length")),!(A.length<=N))return Z=b(A,N,P,!0),32768&Z?-1*(65535-Z+1):Z}function M(A,N,P,Z){if(Z||(te(typeof P=="boolean","missing or invalid endian"),te(N!=null,"missing offset"),te(N+3<A.length,"Trying to read beyond buffer length")),!(A.length<=N))return Z=L(A,N,P,!0),2147483648&Z?-1*(4294967295-Z+1):Z}function T(A,N,P,Z){return Z||(te(typeof P=="boolean","missing or invalid endian"),te(N+3<A.length,"Trying to read beyond buffer length")),_.read(A,N,P,23,4)}function x(A,N,P,Z){return Z||(te(typeof P=="boolean","missing or invalid endian"),te(N+7<A.length,"Trying to read beyond buffer length")),_.read(A,N,P,52,8)}function v(A,N,P,Z,X){if(X||(te(N!=null,"missing value"),te(typeof Z=="boolean","missing or invalid endian"),te(P!=null,"missing offset"),te(P+1<A.length,"trying to write beyond buffer length"),se(N,65535)),X=A.length,!(X<=P))for(var ie=0,ae=Math.min(X-P,2);ie<ae;ie++)A[P+ie]=(N&255<<8*(Z?ie:1-ie))>>>8*(Z?ie:1-ie)}function C(A,N,P,Z,X){if(X||(te(N!=null,"missing value"),te(typeof Z=="boolean","missing or invalid endian"),te(P!=null,"missing offset"),te(P+3<A.length,"trying to write beyond buffer length"),se(N,4294967295)),X=A.length,!(X<=P))for(var ie=0,ae=Math.min(X-P,4);ie<ae;ie++)A[P+ie]=N>>>8*(Z?ie:3-ie)&255}function I(A,N,P,Z,X){X||(te(N!=null,"missing value"),te(typeof Z=="boolean","missing or invalid endian"),te(P!=null,"missing offset"),te(P+1<A.length,"Trying to write beyond buffer length"),me(N,32767,-32768)),A.length<=P||v(A,0<=N?N:65535+N+1,P,Z,X)}function O(A,N,P,Z,X){X||(te(N!=null,"missing value"),te(typeof Z=="boolean","missing or invalid endian"),te(P!=null,"missing offset"),te(P+3<A.length,"Trying to write beyond buffer length"),me(N,2147483647,-2147483648)),A.length<=P||C(A,0<=N?N:4294967295+N+1,P,Z,X)}function k(A,N,P,Z,X){X||(te(N!=null,"missing value"),te(typeof Z=="boolean","missing or invalid endian"),te(P!=null,"missing offset"),te(P+3<A.length,"Trying to write beyond buffer length"),ce(N,34028234663852886e22,-34028234663852886e22)),A.length<=P||_.write(A,N,P,Z,23,4)}function B(A,N,P,Z,X){X||(te(N!=null,"missing value"),te(typeof Z=="boolean","missing or invalid endian"),te(P!=null,"missing offset"),te(P+7<A.length,"Trying to write beyond buffer length"),ce(N,17976931348623157e292,-17976931348623157e292)),A.length<=P||_.write(A,N,P,Z,52,8)}i.Buffer=p,i.SlowBuffer=p,i.INSPECT_MAX_BYTES=50,p.poolSize=8192,p._useTypedArrays=function(){try{var A=new ArrayBuffer(0),N=new Uint8Array(A);return N.foo=function(){return 42},N.foo()===42&&typeof N.subarray=="function"}catch{return!1}}(),p.isEncoding=function(A){switch(String(A).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},p.isBuffer=function(A){return!(A==null||!A._isBuffer)},p.byteLength=function(A,N){var P;switch(A+="",N||"utf8"){case"hex":P=A.length/2;break;case"utf8":case"utf-8":P=he(A).length;break;case"ascii":case"binary":case"raw":P=A.length;break;case"base64":P=Ue(A).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":P=2*A.length;break;default:throw new Error("Unknown encoding")}return P},p.concat=function(A,N){if(te(J(A),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),A.length===0)return new p(0);if(A.length===1)return A[0];if(typeof N!="number")for(X=N=0;X<A.length;X++)N+=A[X].length;for(var P=new p(N),Z=0,X=0;X<A.length;X++){var ie=A[X];ie.copy(P,Z),Z+=ie.length}return P},p.prototype.write=function(A,N,P,Z){isFinite(N)?isFinite(P)||(Z=P,P=void 0):(E=Z,Z=N,N=P,P=E),N=Number(N)||0;var X,ie,ae,Me,E=this.length-N;switch((!P||E<(P=Number(P)))&&(P=E),Z=String(Z||"utf8").toLowerCase()){case"hex":X=function(R,j,ee,Q){ee=Number(ee)||0;var ne=R.length-ee;(!Q||ne<(Q=Number(Q)))&&(Q=ne),te((ne=j.length)%2==0,"Invalid hex string"),ne/2<Q&&(Q=ne/2);for(var we=0;we<Q;we++){var le=parseInt(j.substr(2*we,2),16);te(!isNaN(le),"Invalid hex string"),R[ee+we]=le}return p._charsWritten=2*we,we}(this,A,N,P);break;case"utf8":case"utf-8":ie=this,ae=N,Me=P,X=p._charsWritten=We(he(A),ie,ae,Me);break;case"ascii":case"binary":X=m(this,A,N,P);break;case"base64":ie=this,ae=N,Me=P,X=p._charsWritten=We(Ue(A),ie,ae,Me);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":X=S(this,A,N,P);break;default:throw new Error("Unknown encoding")}return X},p.prototype.toString=function(A,N,P){var Z,X,ie,ae,Me=this;if(A=String(A||"utf8").toLowerCase(),N=Number(N)||0,(P=P!==void 0?Number(P):Me.length)===N)return"";switch(A){case"hex":Z=function(E,R,j){var ee=E.length;(!R||R<0)&&(R=0),(!j||j<0||ee<j)&&(j=ee);for(var Q="",ne=R;ne<j;ne++)Q+=U(E[ne]);return Q}(Me,N,P);break;case"utf8":case"utf-8":Z=function(E,R,j){var ee="",Q="";j=Math.min(E.length,j);for(var ne=R;ne<j;ne++)E[ne]<=127?(ee+=$(Q)+String.fromCharCode(E[ne]),Q=""):Q+="%"+E[ne].toString(16);return ee+$(Q)}(Me,N,P);break;case"ascii":case"binary":Z=y(Me,N,P);break;case"base64":X=Me,ae=P,Z=(ie=N)===0&&ae===X.length?g.fromByteArray(X):g.fromByteArray(X.slice(ie,ae));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":Z=function(E,R,j){for(var ee=E.slice(R,j),Q="",ne=0;ne<ee.length;ne+=2)Q+=String.fromCharCode(ee[ne]+256*ee[ne+1]);return Q}(Me,N,P);break;default:throw new Error("Unknown encoding")}return Z},p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},p.prototype.copy=function(A,N,P,Z){if(N=N||0,(Z=Z||Z===0?Z:this.length)!==(P=P||0)&&A.length!==0&&this.length!==0){te(P<=Z,"sourceEnd < sourceStart"),te(0<=N&&N<A.length,"targetStart out of bounds"),te(0<=P&&P<this.length,"sourceStart out of bounds"),te(0<=Z&&Z<=this.length,"sourceEnd out of bounds"),Z>this.length&&(Z=this.length);var X=(Z=A.length-N<Z-P?A.length-N+P:Z)-P;if(X<100||!p._useTypedArrays)for(var ie=0;ie<X;ie++)A[ie+N]=this[ie+P];else A._set(this.subarray(P,P+X),N)}},p.prototype.slice=function(A,N){var P=this.length;if(A=G(A,P,0),N=G(N,P,P),p._useTypedArrays)return p._augment(this.subarray(A,N));for(var Z=N-A,X=new p(Z,void 0,!0),ie=0;ie<Z;ie++)X[ie]=this[ie+A];return X},p.prototype.get=function(A){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(A)},p.prototype.set=function(A,N){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(A,N)},p.prototype.readUInt8=function(A,N){if(N||(te(A!=null,"missing offset"),te(A<this.length,"Trying to read beyond buffer length")),!(A>=this.length))return this[A]},p.prototype.readUInt16LE=function(A,N){return b(this,A,!0,N)},p.prototype.readUInt16BE=function(A,N){return b(this,A,!1,N)},p.prototype.readUInt32LE=function(A,N){return L(this,A,!0,N)},p.prototype.readUInt32BE=function(A,N){return L(this,A,!1,N)},p.prototype.readInt8=function(A,N){if(N||(te(A!=null,"missing offset"),te(A<this.length,"Trying to read beyond buffer length")),!(A>=this.length))return 128&this[A]?-1*(255-this[A]+1):this[A]},p.prototype.readInt16LE=function(A,N){return w(this,A,!0,N)},p.prototype.readInt16BE=function(A,N){return w(this,A,!1,N)},p.prototype.readInt32LE=function(A,N){return M(this,A,!0,N)},p.prototype.readInt32BE=function(A,N){return M(this,A,!1,N)},p.prototype.readFloatLE=function(A,N){return T(this,A,!0,N)},p.prototype.readFloatBE=function(A,N){return T(this,A,!1,N)},p.prototype.readDoubleLE=function(A,N){return x(this,A,!0,N)},p.prototype.readDoubleBE=function(A,N){return x(this,A,!1,N)},p.prototype.writeUInt8=function(A,N,P){P||(te(A!=null,"missing value"),te(N!=null,"missing offset"),te(N<this.length,"trying to write beyond buffer length"),se(A,255)),N>=this.length||(this[N]=A)},p.prototype.writeUInt16LE=function(A,N,P){v(this,A,N,!0,P)},p.prototype.writeUInt16BE=function(A,N,P){v(this,A,N,!1,P)},p.prototype.writeUInt32LE=function(A,N,P){C(this,A,N,!0,P)},p.prototype.writeUInt32BE=function(A,N,P){C(this,A,N,!1,P)},p.prototype.writeInt8=function(A,N,P){P||(te(A!=null,"missing value"),te(N!=null,"missing offset"),te(N<this.length,"Trying to write beyond buffer length"),me(A,127,-128)),N>=this.length||(0<=A?this.writeUInt8(A,N,P):this.writeUInt8(255+A+1,N,P))},p.prototype.writeInt16LE=function(A,N,P){I(this,A,N,!0,P)},p.prototype.writeInt16BE=function(A,N,P){I(this,A,N,!1,P)},p.prototype.writeInt32LE=function(A,N,P){O(this,A,N,!0,P)},p.prototype.writeInt32BE=function(A,N,P){O(this,A,N,!1,P)},p.prototype.writeFloatLE=function(A,N,P){k(this,A,N,!0,P)},p.prototype.writeFloatBE=function(A,N,P){k(this,A,N,!1,P)},p.prototype.writeDoubleLE=function(A,N,P){B(this,A,N,!0,P)},p.prototype.writeDoubleBE=function(A,N,P){B(this,A,N,!1,P)},p.prototype.fill=function(A,N,P){if(N=N||0,P=P||this.length,te(typeof(A=typeof(A=A||0)=="string"?A.charCodeAt(0):A)=="number"&&!isNaN(A),"value is not a number"),te(N<=P,"end < start"),P!==N&&this.length!==0){te(0<=N&&N<this.length,"start out of bounds"),te(0<=P&&P<=this.length,"end out of bounds");for(var Z=N;Z<P;Z++)this[Z]=A}},p.prototype.inspect=function(){for(var A=[],N=this.length,P=0;P<N;P++)if(A[P]=U(this[P]),P===i.INSPECT_MAX_BYTES){A[P+1]="...";break}return"<Buffer "+A.join(" ")+">"},p.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(p._useTypedArrays)return new p(this).buffer;for(var A=new Uint8Array(this.length),N=0,P=A.length;N<P;N+=1)A[N]=this[N];return A.buffer};var H=p.prototype;function G(A,N,P){return typeof A!="number"?P:N<=(A=~~A)?N:0<=A||0<=(A+=N)?A:0}function W(A){return(A=~~Math.ceil(+A))<0?0:A}function J(A){return(Array.isArray||function(N){return Object.prototype.toString.call(N)==="[object Array]"})(A)}function U(A){return A<16?"0"+A.toString(16):A.toString(16)}function he(A){for(var N=[],P=0;P<A.length;P++){var Z=A.charCodeAt(P);if(Z<=127)N.push(A.charCodeAt(P));else for(var X=P,ie=(55296<=Z&&Z<=57343&&P++,encodeURIComponent(A.slice(X,P+1)).substr(1).split("%")),ae=0;ae<ie.length;ae++)N.push(parseInt(ie[ae],16))}return N}function Ue(A){return g.toByteArray(A)}function We(A,N,P,Z){for(var X=0;X<Z&&!(X+P>=N.length||X>=A.length);X++)N[X+P]=A[X];return X}function $(A){try{return decodeURIComponent(A)}catch{return"�"}}function se(A,N){te(typeof A=="number","cannot write a non-number as a number"),te(0<=A,"specified a negative value for writing an unsigned value"),te(A<=N,"value is larger than maximum value for type"),te(Math.floor(A)===A,"value has a fractional component")}function me(A,N,P){te(typeof A=="number","cannot write a non-number as a number"),te(A<=N,"value larger than maximum allowed value"),te(P<=A,"value smaller than minimum allowed value"),te(Math.floor(A)===A,"value has a fractional component")}function ce(A,N,P){te(typeof A=="number","cannot write a non-number as a number"),te(A<=N,"value larger than maximum allowed value"),te(P<=A,"value smaller than minimum allowed value")}function te(A,N){if(!A)throw new Error(N||"Failed assertion")}p._augment=function(A){return A._isBuffer=!0,A._get=A.get,A._set=A.set,A.get=H.get,A.set=H.set,A.write=H.write,A.toString=H.toString,A.toLocaleString=H.toString,A.toJSON=H.toJSON,A.copy=H.copy,A.slice=H.slice,A.readUInt8=H.readUInt8,A.readUInt16LE=H.readUInt16LE,A.readUInt16BE=H.readUInt16BE,A.readUInt32LE=H.readUInt32LE,A.readUInt32BE=H.readUInt32BE,A.readInt8=H.readInt8,A.readInt16LE=H.readInt16LE,A.readInt16BE=H.readInt16BE,A.readInt32LE=H.readInt32LE,A.readInt32BE=H.readInt32BE,A.readFloatLE=H.readFloatLE,A.readFloatBE=H.readFloatBE,A.readDoubleLE=H.readDoubleLE,A.readDoubleBE=H.readDoubleBE,A.writeUInt8=H.writeUInt8,A.writeUInt16LE=H.writeUInt16LE,A.writeUInt16BE=H.writeUInt16BE,A.writeUInt32LE=H.writeUInt32LE,A.writeUInt32BE=H.writeUInt32BE,A.writeInt8=H.writeInt8,A.writeInt16LE=H.writeInt16LE,A.writeInt16BE=H.writeInt16BE,A.writeInt32LE=H.writeInt32LE,A.writeInt32BE=H.writeInt32BE,A.writeFloatLE=H.writeFloatLE,A.writeFloatBE=H.writeFloatBE,A.writeDoubleLE=H.writeDoubleLE,A.writeDoubleBE=H.writeDoubleBE,A.fill=H.fill,A.inspect=H.inspect,A.toArrayBuffer=H.toArrayBuffer,A}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(t,n,i){(function(s,o,g,l,c,u,h,d,f){var g=t("buffer").Buffer,_=4,p=new g(_);p.fill(0),n.exports={hash:function(m,S,y,b){for(var L=S(function(v,C){v.length%_!=0&&(I=v.length+(_-v.length%_),v=g.concat([v,p],I));for(var I,O=[],k=C?v.readInt32BE:v.readInt32LE,B=0;B<v.length;B+=_)O.push(k.call(v,B));return O}(m=g.isBuffer(m)?m:new g(m),b),8*m.length),S=b,w=new g(y),M=S?w.writeInt32BE:w.writeInt32LE,T=0;T<L.length;T++)M.call(w,L[T],4*T,!0);return w}}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(t,n,i){(function(s,o,g,l,c,u,h,d,f){var g=t("buffer").Buffer,_=t("./sha"),p=t("./sha256"),m=t("./rng"),S={sha1:_,sha256:p,md5:t("./md5")},y=64,b=new g(y);function L(v,C){var I=S[v=v||"sha1"],O=[];return I||w("algorithm:",v,"is not yet supported"),{update:function(k){return g.isBuffer(k)||(k=new g(k)),O.push(k),k.length,this},digest:function(k){var B=g.concat(O),B=C?function(H,G,W){g.isBuffer(G)||(G=new g(G)),g.isBuffer(W)||(W=new g(W)),G.length>y?G=H(G):G.length<y&&(G=g.concat([G,b],y));for(var J=new g(y),U=new g(y),he=0;he<y;he++)J[he]=54^G[he],U[he]=92^G[he];return W=H(g.concat([J,W])),H(g.concat([U,W]))}(I,C,B):I(B);return O=null,k?B.toString(k):B}}}function w(){var v=[].slice.call(arguments).join(" ");throw new Error([v,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}b.fill(0),i.createHash=function(v){return L(v)},i.createHmac=L,i.randomBytes=function(v,C){if(!C||!C.call)return new g(m(v));try{C.call(this,void 0,new g(m(v)))}catch(I){C(I)}};var M,T=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],x=function(v){i[v]=function(){w("sorry,",v,"is not implemented yet")}};for(M in T)x(T[M])}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(t,n,i){(function(s,o,a,l,c,u,h,d,f){var g=t("./helpers");function _(w,M){w[M>>5]|=128<<M%32,w[14+(M+64>>>9<<4)]=M;for(var T=1732584193,x=-271733879,v=-1732584194,C=271733878,I=0;I<w.length;I+=16){var O=T,k=x,B=v,H=C,T=m(T,x,v,C,w[I+0],7,-680876936),C=m(C,T,x,v,w[I+1],12,-389564586),v=m(v,C,T,x,w[I+2],17,606105819),x=m(x,v,C,T,w[I+3],22,-1044525330);T=m(T,x,v,C,w[I+4],7,-176418897),C=m(C,T,x,v,w[I+5],12,1200080426),v=m(v,C,T,x,w[I+6],17,-1473231341),x=m(x,v,C,T,w[I+7],22,-45705983),T=m(T,x,v,C,w[I+8],7,1770035416),C=m(C,T,x,v,w[I+9],12,-1958414417),v=m(v,C,T,x,w[I+10],17,-42063),x=m(x,v,C,T,w[I+11],22,-1990404162),T=m(T,x,v,C,w[I+12],7,1804603682),C=m(C,T,x,v,w[I+13],12,-40341101),v=m(v,C,T,x,w[I+14],17,-1502002290),T=S(T,x=m(x,v,C,T,w[I+15],22,1236535329),v,C,w[I+1],5,-165796510),C=S(C,T,x,v,w[I+6],9,-1069501632),v=S(v,C,T,x,w[I+11],14,643717713),x=S(x,v,C,T,w[I+0],20,-373897302),T=S(T,x,v,C,w[I+5],5,-701558691),C=S(C,T,x,v,w[I+10],9,38016083),v=S(v,C,T,x,w[I+15],14,-660478335),x=S(x,v,C,T,w[I+4],20,-405537848),T=S(T,x,v,C,w[I+9],5,568446438),C=S(C,T,x,v,w[I+14],9,-1019803690),v=S(v,C,T,x,w[I+3],14,-187363961),x=S(x,v,C,T,w[I+8],20,1163531501),T=S(T,x,v,C,w[I+13],5,-1444681467),C=S(C,T,x,v,w[I+2],9,-51403784),v=S(v,C,T,x,w[I+7],14,1735328473),T=y(T,x=S(x,v,C,T,w[I+12],20,-1926607734),v,C,w[I+5],4,-378558),C=y(C,T,x,v,w[I+8],11,-2022574463),v=y(v,C,T,x,w[I+11],16,1839030562),x=y(x,v,C,T,w[I+14],23,-35309556),T=y(T,x,v,C,w[I+1],4,-1530992060),C=y(C,T,x,v,w[I+4],11,1272893353),v=y(v,C,T,x,w[I+7],16,-155497632),x=y(x,v,C,T,w[I+10],23,-1094730640),T=y(T,x,v,C,w[I+13],4,681279174),C=y(C,T,x,v,w[I+0],11,-358537222),v=y(v,C,T,x,w[I+3],16,-722521979),x=y(x,v,C,T,w[I+6],23,76029189),T=y(T,x,v,C,w[I+9],4,-640364487),C=y(C,T,x,v,w[I+12],11,-421815835),v=y(v,C,T,x,w[I+15],16,530742520),T=b(T,x=y(x,v,C,T,w[I+2],23,-995338651),v,C,w[I+0],6,-198630844),C=b(C,T,x,v,w[I+7],10,1126891415),v=b(v,C,T,x,w[I+14],15,-1416354905),x=b(x,v,C,T,w[I+5],21,-57434055),T=b(T,x,v,C,w[I+12],6,1700485571),C=b(C,T,x,v,w[I+3],10,-1894986606),v=b(v,C,T,x,w[I+10],15,-1051523),x=b(x,v,C,T,w[I+1],21,-2054922799),T=b(T,x,v,C,w[I+8],6,1873313359),C=b(C,T,x,v,w[I+15],10,-30611744),v=b(v,C,T,x,w[I+6],15,-1560198380),x=b(x,v,C,T,w[I+13],21,1309151649),T=b(T,x,v,C,w[I+4],6,-145523070),C=b(C,T,x,v,w[I+11],10,-1120210379),v=b(v,C,T,x,w[I+2],15,718787259),x=b(x,v,C,T,w[I+9],21,-343485551),T=L(T,O),x=L(x,k),v=L(v,B),C=L(C,H)}return Array(T,x,v,C)}function p(w,M,T,x,v,C){return L((M=L(L(M,w),L(x,C)))<<v|M>>>32-v,T)}function m(w,M,T,x,v,C,I){return p(M&T|~M&x,w,M,v,C,I)}function S(w,M,T,x,v,C,I){return p(M&x|T&~x,w,M,v,C,I)}function y(w,M,T,x,v,C,I){return p(M^T^x,w,M,v,C,I)}function b(w,M,T,x,v,C,I){return p(T^(M|~x),w,M,v,C,I)}function L(w,M){var T=(65535&w)+(65535&M);return(w>>16)+(M>>16)+(T>>16)<<16|65535&T}n.exports=function(w){return g.hash(w,_,16)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(t,n,i){(function(s,o,a,l,c,u,h,d,f){n.exports=function(g){for(var _,p=new Array(g),m=0;m<g;m++)!(3&m)&&(_=4294967296*Math.random()),p[m]=_>>>((3&m)<<3)&255;return p}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(t,n,i){(function(s,o,a,l,c,u,h,d,f){var g=t("./helpers");function _(S,y){S[y>>5]|=128<<24-y%32,S[15+(y+64>>9<<4)]=y;for(var b,L,w,M=Array(80),T=1732584193,x=-271733879,v=-1732584194,C=271733878,I=-1009589776,O=0;O<S.length;O+=16){for(var k=T,B=x,H=v,G=C,W=I,J=0;J<80;J++){M[J]=J<16?S[O+J]:m(M[J-3]^M[J-8]^M[J-14]^M[J-16],1);var U=p(p(m(T,5),(U=x,L=v,w=C,(b=J)<20?U&L|~U&w:!(b<40)&&b<60?U&L|U&w|L&w:U^L^w)),p(p(I,M[J]),(b=J)<20?1518500249:b<40?1859775393:b<60?-1894007588:-899497514)),I=C,C=v,v=m(x,30),x=T,T=U}T=p(T,k),x=p(x,B),v=p(v,H),C=p(C,G),I=p(I,W)}return Array(T,x,v,C,I)}function p(S,y){var b=(65535&S)+(65535&y);return(S>>16)+(y>>16)+(b>>16)<<16|65535&b}function m(S,y){return S<<y|S>>>32-y}n.exports=function(S){return g.hash(S,_,20,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(t,n,i){(function(s,o,a,l,c,u,h,d,f){function g(y,b){var L=(65535&y)+(65535&b);return(y>>16)+(b>>16)+(L>>16)<<16|65535&L}function _(y,b){var L,w=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),M=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),T=new Array(64);y[b>>5]|=128<<24-b%32,y[15+(b+64>>9<<4)]=b;for(var x,v,C=0;C<y.length;C+=16){for(var I=M[0],O=M[1],k=M[2],B=M[3],H=M[4],G=M[5],W=M[6],J=M[7],U=0;U<64;U++)T[U]=U<16?y[U+C]:g(g(g((v=T[U-2],m(v,17)^m(v,19)^S(v,10)),T[U-7]),(v=T[U-15],m(v,7)^m(v,18)^S(v,3))),T[U-16]),L=g(g(g(g(J,m(v=H,6)^m(v,11)^m(v,25)),H&G^~H&W),w[U]),T[U]),x=g(m(x=I,2)^m(x,13)^m(x,22),I&O^I&k^O&k),J=W,W=G,G=H,H=g(B,L),B=k,k=O,O=I,I=g(L,x);M[0]=g(I,M[0]),M[1]=g(O,M[1]),M[2]=g(k,M[2]),M[3]=g(B,M[3]),M[4]=g(H,M[4]),M[5]=g(G,M[5]),M[6]=g(W,M[6]),M[7]=g(J,M[7])}return M}var p=t("./helpers"),m=function(y,b){return y>>>b|y<<32-b},S=function(y,b){return y>>>b};n.exports=function(y){return p.hash(y,_,32,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(t,n,i){(function(s,o,a,l,c,u,h,d,f){i.read=function(g,_,p,m,C){var y,b,L=8*C-m-1,w=(1<<L)-1,M=w>>1,T=-7,x=p?C-1:0,v=p?-1:1,C=g[_+x];for(x+=v,y=C&(1<<-T)-1,C>>=-T,T+=L;0<T;y=256*y+g[_+x],x+=v,T-=8);for(b=y&(1<<-T)-1,y>>=-T,T+=m;0<T;b=256*b+g[_+x],x+=v,T-=8);if(y===0)y=1-M;else{if(y===w)return b?NaN:1/0*(C?-1:1);b+=Math.pow(2,m),y-=M}return(C?-1:1)*b*Math.pow(2,y-m)},i.write=function(g,_,p,m,S,I){var b,L,w=8*I-S-1,M=(1<<w)-1,T=M>>1,x=S===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=m?0:I-1,C=m?1:-1,I=_<0||_===0&&1/_<0?1:0;for(_=Math.abs(_),isNaN(_)||_===1/0?(L=isNaN(_)?1:0,b=M):(b=Math.floor(Math.log(_)/Math.LN2),_*(m=Math.pow(2,-b))<1&&(b--,m*=2),2<=(_+=1<=b+T?x/m:x*Math.pow(2,1-T))*m&&(b++,m/=2),M<=b+T?(L=0,b=M):1<=b+T?(L=(_*m-1)*Math.pow(2,S),b+=T):(L=_*Math.pow(2,T-1)*Math.pow(2,S),b=0));8<=S;g[p+v]=255&L,v+=C,L/=256,S-=8);for(b=b<<S|L,w+=S;0<w;g[p+v]=255&b,v+=C,b/=256,w-=8);g[p+v-C]|=128*I}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(t,n,i){(function(s,o,a,l,c,u,h,d,f){var g,_,p;function m(){}(s=n.exports={}).nextTick=(_=typeof window<"u"&&window.setImmediate,p=typeof window<"u"&&window.postMessage&&window.addEventListener,_?function(S){return window.setImmediate(S)}:p?(g=[],window.addEventListener("message",function(S){var y=S.source;y!==window&&y!==null||S.data!=="process-tick"||(S.stopPropagation(),0<g.length&&g.shift()())},!0),function(S){g.push(S),window.postMessage("process-tick","*")}):function(S){setTimeout(S,0)}),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.binding=function(S){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(S){throw new Error("process.chdir is not supported")}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(q0);var UA=q0.exports;const NA=Mc(UA);var j0=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],OA=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],Y0=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"],FA=j0,zA=FA.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),Mh=Y0;Mh=Mh.slice().filter(function(r){return!/^(gl\_|texture)/.test(r)});var BA=Mh.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),kA=$A,HA=j0,um=OA,GA=Y0,VA=zA,WA=BA,Si=999,hm=9999,Fu=0,zu=1,fm=2,dm=3,pm=4,Ko=5,XA=6,qA=7,jA=8,mm=9,YA=10,gm=11,KA=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function $A(r){var e=0,t=0,n=Si,i,s,o=[],a=[],l=1,c=0,u=0,h=!1,d=!1,f="",g;r=r||{};var _=GA,p=HA;r.version==="300 es"&&(_=WA,p=VA);for(var m={},S={},e=0;e<_.length;e++)m[_[e]]=!0;for(var e=0;e<p.length;e++)S[p[e]]=!0;return function(G){return a=[],G!==null?b(G):L()};function y(G){G.length&&a.push({type:KA[n],data:G,position:u,line:l,column:c})}function b(G){e=0,G.toString&&(G=G.toString()),f+=G.replace(/\r\n/g,`
`),g=f.length;for(var W;i=f[e],e<g;){switch(W=e,n){case Fu:e=v();break;case zu:e=x();break;case fm:e=T();break;case dm:e=C();break;case pm:e=k();break;case gm:e=O();break;case Ko:e=B();break;case hm:e=H();break;case mm:e=M();break;case Si:e=w();break}if(W!==e)switch(f[W]){case`
`:c=0,++l;break;default:++c;break}}return t+=e,f=f.slice(e),a}function L(G){return o.length&&y(o.join("")),n=YA,y("(eof)"),a}function w(){return o=o.length?[]:o,s==="/"&&i==="*"?(u=t+e-1,n=Fu,s=i,e+1):s==="/"&&i==="/"?(u=t+e-1,n=zu,s=i,e+1):i==="#"?(n=fm,u=t+e,e):/\s/.test(i)?(n=mm,u=t+e,e):(h=/\d/.test(i),d=/[^\w_]/.test(i),u=t+e,n=h?pm:d?dm:hm,e)}function M(){return/[^\s]/g.test(i)?(y(o.join("")),n=Si,e):(o.push(i),s=i,e+1)}function T(){return(i==="\r"||i===`
`)&&s!=="\\"?(y(o.join("")),n=Si,e):(o.push(i),s=i,e+1)}function x(){return T()}function v(){return i==="/"&&s==="*"?(o.push(i),y(o.join("")),n=Si,e+1):(o.push(i),s=i,e+1)}function C(){if(s==="."&&/\d/.test(i))return n=Ko,e;if(s==="/"&&i==="*")return n=Fu,e;if(s==="/"&&i==="/")return n=zu,e;if(i==="."&&o.length){for(;I(o););return n=Ko,e}if(i===";"||i===")"||i==="("){if(o.length)for(;I(o););return y(i),n=Si,e+1}var G=o.length===2&&i!=="=";if(/[\w_\d\s]/.test(i)||G){for(;I(o););return n=Si,e}return o.push(i),s=i,e+1}function I(G){var W=0,J,U;do{if(J=um.indexOf(G.slice(0,G.length+W).join("")),U=um[J],J===-1){if(W--+G.length>0)continue;U=G.slice(0,1).join("")}return y(U),u+=U.length,o=o.slice(U.length),o.length}while(!0)}function O(){return/[^a-fA-F0-9]/.test(i)?(y(o.join("")),n=Si,e):(o.push(i),s=i,e+1)}function k(){return i==="."||/[eE]/.test(i)?(o.push(i),n=Ko,s=i,e+1):i==="x"&&o.length===1&&o[0]==="0"?(n=gm,o.push(i),s=i,e+1):/[^\d]/.test(i)?(y(o.join("")),n=Si,e):(o.push(i),s=i,e+1)}function B(){return i==="f"&&(o.push(i),s=i,e+=1),/[eE]/.test(i)||(i==="-"||i==="+")&&/[eE]/.test(s)?(o.push(i),s=i,e+1):/[^\d]/.test(i)?(y(o.join("")),n=Si,e):(o.push(i),s=i,e+1)}function H(){if(/[^\d\w_]/.test(i)){var G=o.join("");return S[G]?n=jA:m[G]?n=qA:n=XA,y(o.join("")),n=Si,e}return o.push(i),s=i,e+1}}var ZA=kA,JA=QA;function QA(r,e){var t=ZA(e),n=[];return n=n.concat(t(r)),n=n.concat(t(null)),n}const eR=Mc(JA);var tR=nR;function nR(r){for(var e=[],t=0;t<r.length;t++)r[t].type!=="eof"&&e.push(r[t].data);return e.join("")}const _m=Mc(tR);var iR=rR;function rR(r){var e=null,t=null,n=0,i=0,s=0,o=0,a=0,l=[],c,u,h;for(c=0,u;c<r.length;c++)if(h=r[c],h.data==="{"){if(n&&n++||(u=f(c,Er(")"),Er()),u<0)||(o=u,u=f(u,Er("("),Er(")")),u<0)||(a=u,u=f(u,$o),u<0)||r[u].type!=="ident"||(t=r[u].data,u=f(u,$o),u<0))continue;n=1,i=c,e=r[u].data,s=u;var d=f(u,$o);switch(r[d]&&r[d].data){case"lowp":case"highp":case"mediump":s=d}}else if(n&&h.data==="}"){if(--n)continue;l.push({name:t,type:e,body:[i+1,c],args:[a,o+1],outer:[s,c+1]})}for(c=0;c<r.length;c++)if(h=r[c],h.data===";"){if(u=f(c,Er(")"),Er()),u<0||(o=u,u=f(u,Er("("),Er(")")),u<0)||(a=u,u=f(u,$o),u<0)||r[u].type!=="ident"||(t=r[u].data,u=f(u,$o),u<0)||r[u].type==="operator"||r[u].data==="return")continue;e=r[u].data,l.push({name:t,type:e,body:!1,args:[a,o+1],outer:[u,c+1]})}return l.sort(function(g,_){return g.outer[0]-_.outer[0]});function f(g,_,p){for(var m=g-1;m>=0;m--){if(_(r[m]))return m;if(p&&p(r[m]))return-1}return-1}}function Er(r){return function(e){return e.type==="operator"&&(!r||e.data===r)}}function $o(r){return r.type!=="whitespace"}const sR=Mc(iR);function oR(r,e){if(typeof r!="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function K0(r){var e=oR(r,"string");return typeof e=="symbol"?e:String(e)}function yt(r,e,t){return e=K0(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function vm(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,n)}return t}function Js(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?vm(Object(t),!0).forEach(function(n){yt(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):vm(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function aR(r,e){if(r==null)return{};var t={},n=Object.keys(r),i,s;for(s=0;s<n.length;s++)i=n[s],!(e.indexOf(i)>=0)&&(t[i]=r[i]);return t}function lR(r,e){if(r==null)return{};var t=aR(r,e),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(i=0;i<s.length;i++)n=s[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(t[n]=r[n])}return t}function cR(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function xm(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,K0(n.key),n)}}function uR(r,e,t){return e&&xm(r.prototype,e),t&&xm(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function $0(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function wh(r,e){return wh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},wh(r,e)}function hR(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&wh(r,e)}function dc(r){return dc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},dc(r)}function fR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function dR(r,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $0(r)}function pR(r){var e=fR();return function(){var n=dc(r),i;if(e){var s=dc(this).constructor;i=Reflect.construct(n,arguments,s)}else i=n.apply(this,arguments);return dR(this,i)}}var Ve={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",depthAlpha:"csm_DepthAlpha"},kn,Qs,mR=(kn={},yt(kn,"".concat(Ve.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(Ve.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),yt(kn,"".concat(Ve.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(Ve.position,`;
  `)}),yt(kn,"".concat(Ve.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(Ve.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),yt(kn,"".concat(Ve.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(Ve.pointSize,`;
    `)}),yt(kn,"".concat(Ve.diffuseColor),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(Ve.diffuseColor,`;
  `)}),yt(kn,"".concat(Ve.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(Ve.fragColor,`;
  `)}),yt(kn,"".concat(Ve.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(Ve.emissive,`;
    `)}),yt(kn,"".concat(Ve.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(Ve.roughness,`;
    `)}),yt(kn,"".concat(Ve.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(Ve.metalness,`;
    `)}),yt(kn,"".concat(Ve.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(Ve.ao,`;
    `)}),yt(kn,"".concat(Ve.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(Ve.bump," - (dot(").concat(Ve.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),yt(kn,"".concat(Ve.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(Ve.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(Ve.depthAlpha,`;
    `)}),kn),gR=(Qs={},yt(Qs,"".concat(Ve.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(Ve.position,`, 1.0 );
  `)}),yt(Qs,"".concat(Ve.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(Ve.position,`;
  `)}),yt(Qs,"".concat(Ve.diffuseColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Ve.diffuseColor,`;
  `)}),yt(Qs,"".concat(Ve.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Ve.fragColor,`;
  `)}),Qs),_R=`

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        vec3 csm_Position = vec3(0.0);
        vec4 csm_PositionRaw = vec4(0.0);
        vec3 csm_Normal = vec3(0.0);
    #else
        vec3 csm_Position = position;
        vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        vec3 csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize = size;
    #endif
#else
    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        vec4 csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        vec4 csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            vec4 csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            vec4 csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            vec4 csm_DiffuseColor = vec4(diffuse, opacity);
            vec4 csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive = emissive;
        float csm_Roughness = roughness;
        float csm_Metalness = metalness;
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump = vec3(0.0);
    #endif

    float csm_DepthAlpha = 1.0;
#endif
`,vR=`
    varying mat4 csm_internal_vModelViewMatrix;
`,xR=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,yR=`
    varying mat4 csm_internal_vModelViewMatrix;
`,SR=`
    
`,Hn,MR=(Hn={},yt(Hn,"".concat(Ve.position),"*"),yt(Hn,"".concat(Ve.positionRaw),"*"),yt(Hn,"".concat(Ve.normal),"*"),yt(Hn,"".concat(Ve.pointSize),["PointsMaterial"]),yt(Hn,"".concat(Ve.diffuseColor),"*"),yt(Hn,"".concat(Ve.fragColor),"*"),yt(Hn,"".concat(Ve.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),yt(Hn,"".concat(Ve.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),yt(Hn,"".concat(Ve.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),yt(Hn,"".concat(Ve.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),yt(Hn,"".concat(Ve.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),yt(Hn,"".concat(Ve.depthAlpha),"*"),Hn),wR=["baseMaterial","fragmentShader","vertexShader","uniforms","patchMap","cacheKey","silent"],TR=function(e,t,n){return e.split(t).join(n)},bR=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},ER=function(e,t){return new RegExp("\\b".concat(bR(t),"\\b")).test(e)};function AR(r){try{new r}catch(e){if(e.message.indexOf("is not a constructor")>=0)return!1}return!0}function RR(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;Object.assign(r,e);var n=Object.getPrototypeOf(e);Object.entries(Object.getOwnPropertyDescriptors(n)).filter(function(i){var s=typeof i[1].get=="function",o=typeof i[1].set=="function",a=typeof i[1].value=="function",l=i[0]==="constructor";return(s||o||a)&&!l}).forEach(function(i){if(typeof r[i[0]]=="function"){t||console.warn("Function ".concat(i[0]," already exists on CSM, renaming to base_").concat(i[0]));var s="base_".concat(i[0]);r[s]=i[1].value.bind(r);return}Object.defineProperty(r,i[0],i[1])})}function CR(r){var e=r.toString().trim(),t=e.substring(e.indexOf("{")+1,e.lastIndexOf("}"));return t.trim().length===0}function ym(r){return r.replace(/\s/g,"")}function PR(r,e,t){var n=r.lastIndexOf(e);return n===-1?r:r.substring(0,n)+t+r.substring(n+e.length)}var LR=function(r){hR(t,r);var e=pR(t);function t(n){var i,s=n.baseMaterial,o=n.fragmentShader,a=n.vertexShader,l=n.uniforms,c=n.patchMap,u=n.cacheKey,h=n.silent,d=lR(n,wR);cR(this,t);var f;if(AR(s)?f=new s(d):(f=s,Object.assign(f,d)),f.type==="RawShaderMaterial")throw new Error("CustomShaderMaterial does not support RawShaderMaterial");i=e.call(this),RR($0(i),f,h),i.__csm={patchMap:c||{},fragmentShader:o||"",vertexShader:a||"",cacheKey:u,baseMaterial:s,instanceID:sr.generateUUID(),type:f.type,isAlreadyExtended:!CR(f.onBeforeCompile),cacheHash:"",silent:h},i.uniforms=Js(Js({},i.uniforms||{}),l||{});{var g=i.__csm,_=g.fragmentShader,p=g.vertexShader,m=i.uniforms;i.__csm.cacheHash=i.getCacheHash(),i.generateMaterial(_,p,m)}return i}return uR(t,[{key:"update",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.uniforms=i.uniforms||this.uniforms,Object.assign(this.__csm,i);var s=this.__csm,o=s.fragmentShader,a=s.vertexShader,l=this.uniforms,c=this.getCacheHash();this.__csm.cacheHash=c,this.generateMaterial(o,a,l)}},{key:"clone",value:function(){var i={baseMaterial:this.__csm.baseMaterial,fragmentShader:this.__csm.fragmentShader,vertexShader:this.__csm.vertexShader,uniforms:this.uniforms,silent:this.__csm.silent,patchMap:this.__csm.patchMap,cacheKey:this.__csm.cacheKey},s=new this.constructor(i);return Object.assign(this,s),s}},{key:"getCacheHash",value:function(){var i=this.__csm,s=i.fragmentShader,o=i.vertexShader,a=this.uniforms,l=Object.values(a).reduce(function(u,h){var d=h.value;return u+JSON.stringify(d)},""),c=ym(s)+ym(o)+l;return c.trim().length>0?NA(c):this.customProgramCacheKey()}},{key:"generateMaterial",value:function(i,s,o){var a=this,l=this.parseShader(i),c=this.parseShader(s);this.uniforms=o||{},this.customProgramCacheKey=function(){return a.__csm.cacheHash};var u=function(f){try{if(l){var g=a.patchShader(l,f.fragmentShader,!0);f.fragmentShader=a.getMaterialDefine()+g}if(c){var _=a.patchShader(c,f.vertexShader);f.vertexShader=`#define IS_VERTEX;
`+_,f.vertexShader=a.getMaterialDefine()+f.vertexShader}f.uniforms=Js(Js({},f.uniforms),a.uniforms),a.uniforms=f.uniforms}catch(p){console.error(p)}};if(this.__csm.isAlreadyExtended){var h=this.onBeforeCompile;this.onBeforeCompile=function(d,f){h(d,f),u(d)}}else this.onBeforeCompile=u;this.needsUpdate=!0}},{key:"patchShader",value:function(i,s,o){var a=this,l=s,c=Js(Js({},this.getPatchMapForMaterial()),this.__csm.patchMap);Object.keys(c).forEach(function(d){Object.keys(c[d]).forEach(function(f){var g=MR[d],_=a.__csm.type;if(d==="*"||ER(i.main,d))if(!g||Array.isArray(g)&&g.includes(_)||g==="*")l=TR(l,f,c[d][f]);else throw new Error("CSM: ".concat(d," is not available in ").concat(_,". Shader cannot compile."))})}),l=l.replace("void main() {",`
        #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
          `.concat(o?yR:vR,`
          #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
        #endif

        `).concat(i.header,`
        
        void main() {
          #ifndef CSM_IS_DEFAULTS_DEFINED
            `).concat(_R,`
            #define CSM_IS_DEFAULTS_DEFINED 1
          #endif
          
          #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
            `).concat(o?SR:xR,`
            #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
          #endif

          // CSM_START
      `));var u=this.__csm.isAlreadyExtended,h=l.includes("// CSM_END");return u&&h?l=PR(l,"// CSM_END",`
          // CSM_END
          `.concat(i.main,`
          // CSM_END
        `)):l=l.replace("// CSM_START",`
        // CSM_START
        `.concat(i.main,`
        // CSM_END
          `)),l=i.defines+l,l}},{key:"parseShader",value:function(i){if(i){var s=i.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,""),o=eR(s),a=sR(o),l=a.map(function(h){return h.name}).indexOf("main"),c=_m(o.slice(0,l>=0?a[l].outer[0]:void 0)),u=l>=0?this.getShaderFromIndex(o,a[l].body):"";return{defines:"",header:c,main:u}}}},{key:"getMaterialDefine",value:function(){var i=this.__csm.type;return i?"#define IS_".concat(i.toUpperCase(),`;
`):`#define IS_UNKNOWN;
`}},{key:"getPatchMapForMaterial",value:function(){switch(this.__csm.type){case"ShaderMaterial":return gR;default:return mR}}},{key:"getShaderFromIndex",value:function(i,s){return _m(i.slice(s[0],s[1]))}}]),t}(ii);function IR(r){const e=new Ea({color:"orange",opacity:0,transparent:!0,emissive:new ge("orange"),emissiveIntensity:15}),t=new Ht().setFromPoints(r);return new wo(t,e)}class DR{constructor(e){this.camera=null,this.scene=null,this.renderer=null,this.renderer_2D=null,this.sphere1=null,this.sphere2=null,this.sphere3=null,this.sphere4=null,this.sphere5=null,this.light=null,this.axesH=null,this.loop=null,this.nav_bar=null,this.time=0,this.menu_screen=document.getElementById("main_menu"),this.main_app=document.getElementById("app"),this.chapterPOIs=document.querySelector(".Chapter_Content"),this.single_chapter=document.querySelectorAll(".captions"),this.camera=bw(40);const t=cp("black"),n=cp("black");this.scene=n,this.scene1=new $l,this.renderer=Vw(e),this.renderer_2D=Ww(),this.galaxy=pp(.75,3,7.5);const i=Gw();i.position.set(0,0,0);var s=new Dw;this.solarSystem=new Tn,this.galaxyMat=ug.clone(),this.galaxy.position.set(0,0,-8),this.galaxy.material=this.galaxyMat,this.galaxy.rotation.set(sr.degToRad(90),0,0),this.galaxyinner=pp(.55,2.5,1.5),this.galaxyinner.position.set(0,0,-11),this.galaxyinner.material=this.galaxyMat,this.galaxyinner.rotation.set(sr.degToRad(90),0,0),this.scene.add(this.galaxyinner);var o=null,a=null;this.sunTexture=kw(),this.sunTexture.position.set(0,0,-2.5);var l=new zw;function c(){o=new jm(256,{generateMipmaps:!0,minFilter:O_}),a=new Xm(.001,1e3,o),a.position.set(0,0,0)}c(),this.scene1.background=new ge("white"),this.scene1.add(i,a),this.stars=gE({numStars:5e3}),this.scene.add(this.stars);var u=Ew(),h=u.sunLight,d=u.sunLight;d.position.set(0,15,-10);var f=u.keyLight,g=u.fillLight,_=new kr;this.fres=Ul();var p=new z(-4,-2.25,-16.25),m=new z(4,-2.25,-16.25),S=new z(0,4,-16.25),y=new z(-4,-2.25,-16.25),b=[p,m,S,y];this.triangle=IR(b),this.scene.add(this.triangle),this.solarSystem.add(s.create(),this.sunTexture),this.solarSystem.position.z=-2.2;const L=["NEPTUNE","URANUS","SATURN","JUPITER","MARS","EARTH","VENUS","MERCURY"];var w=[0,-.38,-.95,-1.735,-2.31,-2.525,-2.69,-2.85];this.planetLabelsDOM=[];const M=new Tn,T=document.querySelector(".popUps");var x=document.querySelectorAll(".overview");for(let ke=0;ke<8;ke++){var v=document.createElement("h2");v.textContent=L[ke],this.planetLabelsDOM.push(v);var C=new Aw(v);C.position.x=.025,C.position.y=0,C.position.z=w[ke],M.add(C)}var I=document.querySelectorAll(".close");I.forEach(ke=>{ke.addEventListener("click",O)});function O(){console.log("explore clicked"),T.style.display="none",x.forEach(ke=>{ke.style.display="none"})}this.planetLabelsDOM.forEach((ke,Te)=>{ke.addEventListener("click",()=>{T.style.display="block",x[Te].style.display="block"})}),this.planetLabelsDOM.forEach(ke=>{ke.style.fontFamily="Oswald, sans-serif",ke.style.fontWeight=700,ke.style.fontSize="3rem",ke.style.position="absolute"}),M.children[4].position.x=.015,M.children[5].position.x=.015,M.children[6].position.x=.013,M.children[7].position.x=.01,this.planetLabelsDOM.forEach(ke=>{ke.style.display="none",ke.style.opacity=0});var k=new ec(16777215,150);k.position.set(0,10,-25),_.load("../../Assets/Images/Textures/KorribanBumpF.png"),_.load("../../Assets/Images/Textures/KorribanDis.png"),_.load("../../Assets/Images/Textures/KorribanRoughness.png");var B=new fi(5,150,150),H=_.load("../../Assets/Images/Textures/KorribanD.png"),G=_.load("../../Assets/Images/Textures/KorribanD1.png");new Tt({uniforms:{texture1:{value:G},texture2:{value:H},transitionProgress:{value:0}},vertexShader:cm,fragmentShader:lm});var W=new LR({baseMaterial:new Ei,uniforms:{texture1:{value:G},texture2:{value:H},transitionProgress:{value:0}},vertexShader:cm,fragmentShader:lm});this.exoF=new Mt(B,W),this.exoF.position.set(0,0,-32);var J=new fi(5.1,150,150);new ge(1,.729,0);var U=new ge(.212,.898,1),Ue=Ul({rimHex:U,facingHex:0}),We=new Mt(J,Ue),$=new fi(5.3,150,150),se=_.load("../../Assets/Images/Textures/KorribanC.png"),me=new Ei({map:se,alphaMap:se,blending:Gi,transparent:!0,opacity:1}),ce=new Mt($,me),te=new fi(5.1,150,150),A=_.load("../../Assets/Images/Textures/exoL.webp"),N=new Ei({map:A,depthTest:!1,alphaMap:A,blending:Gi,transparent:!0,opacity:0,emissive:new ge(16777215),emissiveIntensity:1,emissiveMap:A}),P=new Mt(te,N);P.rotation.set(0,0,0),this.exoF.add(ce,P,We),this.exoF.scale.set(0,0,0),this.exoF.rotation.set(0,-1.85,0),n.add(this.exoF);var Z=cs(),X=new rm(Z),ie=X.convert();ie.scale.set(14,14,14),ie.position.set(-15,-10,20);var ae=ie.clone();ae.position.set(15,10,17),ae.rotation.set(sr.degToRad(180),sr.degToRad(180),0),t.add(ie,ae),ie.visible=!1,ae.visible=!1;var Me=new fi(1,50,50),E=new Ni,R=new Mt(Me,E),j=new rm(R);this.main_Scene_NPo=j.convertLineSphere(),this.main_Scene_NPo.position.set(0,0,-28),this.main_Scene_NPo.scale.set(0,0,0),this.scene.add(this.main_Scene_NPo);const ee=new zh(.5,.25,50,105),Q=new Ei({map:_.load("../../Assets/Images/Textures/ufo/Metal_006_basecolor.jpg"),emissive:"red",toneMapped:!1,emissiveIntensity:0,metalness:1});this.ufo=new Mt(ee,Q),this.ufo.scale.set(1,.1,1);var ne=vE,we=this.ufo.clone();we.scale.set(1.025,.25,1.025),we.material=ne;const le=new ec("white",55);this.ufo.add(we),le.position.set(.25,2,-15),this.ufo.position.set(.25,0,-15),this.ufo.rotation.set(0,0,sr.degToRad(120)),this.ufo.scale.set(0,0,0),this.ufo.visible=!1,this.scene.add(this.ufo),this.asteroid=cs();var ue=_E();ue.uniforms.amplitude.value=3.5,ue.uniforms.offset.value=1.3,ue.uniforms.sharpness.value=.115,ue.uniforms.period.value=1,ue.uniforms.persistence.value=.55,ue.uniforms.lacunarity.value=1.8,ue.uniforms.octaves.value=10,ue.uniforms.type.value=3,ue.uniforms.blend12.value=1,ue.uniforms.color1.value=new ge(1,0,0),ue.uniforms.color2.value=new ge(1,1,0),ue.uniforms.color3.value=new ge(1,.125,0),ue.uniforms.color4.value=new ge(.055,.3,.85),ue.uniforms.color5.value=new ge(.5,.5,.5),ue.uniforms.specularIntensity.value=0,ue.uniforms.shininess.value=0,ue.uniforms.lightDirection.value=new z(.5,3,2),ue.uniforms.transition2.value=0,ue.uniforms.transition3.value=0,ue.uniforms.transition4.value=0,ue.uniforms.transition5.value=3,this.asteroid.material=ue,this.asteroid.scale.set(.005,.005,.005),this.asteroid.rotation.set(0,-.25,3),this.blackHole=cs();var Re=cs();Re.scale.set(1.05,1.05,1.05),Re.material=Ul(),Re.material.uniforms.color1.value=new ge(1,1,1),Re.material.uniforms.fresnelScale.value=20,Re.material.uniforms.fresnelPower.value=10,this.blackHole.material=new Ni({color:"black",transparent:!0,opacity:1}),this.blackHole.add(Re),this.blackHole.scale.set(.8,.8,.8),this.blackHole.position.set(0,0,-11),n.add(this.blackHole,this.galaxy,M,this.solarSystem,h,f,g),mE(this.camera,this.scene),this.composer=new RE(this.renderer,{frameBufferType:wa}),this.resizer=new Xw(e,this.camera,this.renderer,this.renderer_2D),this.loop=new jw(this.camera,t,this.renderer,this.renderer_2D,this.galaxyMat,pg,dg,a,o,this.scene1,s,l,this.exoF,this.composer),this.loop.updatables.push(s);var oe=this.galaxy.clone();console.log(oe),oe.material.uniforms.opacity.value=6,oe.position.set(0,0,35),oe.scale.set(3,3,3),t.add(oe);const _e=document.querySelector(".NavBar");document.querySelector(".about").addEventListener("click",()=>{Su(Se)});const Se=document.getElementById("about");var Ae=document.getElementById("closeAbout");Ae.addEventListener("click",()=>{vl(Se)}),vl(this.chapterPOIs,Se);var De=document.getElementById("start_btn"),Ke=document.getElementById("title_container"),Ye=document.getElementById("controls");this.composer.setSize(window.innerWidth,window.innerHeight);const $e=new RA(t,this.camera);this.composer.addPass($e),this.active=!0,De.addEventListener("click",()=>{vl(Ke),dn.to(this.camera.position,{z:33,duration:1,ease:"circ.out",onStart:()=>{ie.visible=!0,ae.visible=!0,dn.to(ie.children[1].material,{opacity:.2,duration:1.5,ease:"circ.out"})},onComplete:()=>{Su(Ye),dn.to(Ye,{display:"none",autoAlpha:0,duration:1,ease:"circ.out",delay:2.5,onComplete:()=>{vl(this.menu_screen),this.loop.changeScene(this.scene),$e.scene=this.scene,this.active=!1,this.composer.addPass(new DA(this.camera,new AA({luminanceThreshold:.25,luminanceSmoothing:.05,intensity:1,radius:1}))),Su(_e,this.chapterPOIs)}})}}),dn.to(oe.material.uniforms.opacity,{value:0,duration:1,ease:"circ.out"})})}async load_assets(){const{hubbleTelescope:e}=await pE();Pb(this.camera,this.single_chapter,this.solarSystem,this.morphMat,this.planetLabelsDOM,this.galaxyMat,this.ufo,this.sunTexture,this.exoF,e,this.asteroid,this.blackHole,this.triangle,this.main_Scene_NPo,this.galaxyinner,this.active)}start(){this.loop.start()}stop(){this.loop.stop()}}async function UR(){const r=document.querySelector("canvas.webgl"),e=new DR(r);await e.load_assets(),e.start()}UR().catch(r=>{console.error(r)});
