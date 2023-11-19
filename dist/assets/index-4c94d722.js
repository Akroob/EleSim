(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mu="157",mr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qp=0,Vu=1,Yp=2,v0=1,S0=2,wi=3,Bi=0,mn=1,oi=2,ds=0,js=1,Gu=2,Wu=3,Xu=4,Kp=5,kr=100,$p=101,Zp=102,ju=103,qu=104,Jp=200,Qp=201,e1=202,t1=203,b0=204,M0=205,n1=206,i1=207,s1=208,r1=209,o1=210,a1=0,c1=1,l1=2,Ih=3,h1=4,u1=5,d1=6,f1=7,E0=0,p1=1,m1=2,fs=0,g1=1,_1=2,x1=3,y1=4,v1=5,T0=300,ro=301,oo=302,Nh=303,Dh=304,ml=306,ao=1e3,Ln=1001,Kc=1002,kt=1003,Oh=1004,Gc=1005,un=1006,w0=1007,Qs=1008,ps=1009,S1=1010,b1=1011,gu=1012,A0=1013,os=1014,Li=1015,Ta=1016,L0=1017,C0=1018,qs=1020,M1=1021,Cn=1023,E1=1024,T1=1025,Ys=1026,co=1027,w1=1028,R0=1029,A1=1030,P0=1031,z0=1033,Il=33776,Nl=33777,Dl=33778,Ol=33779,Yu=35840,Ku=35841,$u=35842,Zu=35843,L1=36196,Ju=37492,Qu=37496,ed=37808,td=37809,nd=37810,id=37811,sd=37812,rd=37813,od=37814,ad=37815,cd=37816,ld=37817,hd=37818,ud=37819,dd=37820,fd=37821,Ul=36492,pd=36494,md=36495,C1=36283,gd=36284,_d=36285,xd=36286,wa=2300,lo=2301,Fl=2302,yd=2400,vd=2401,Sd=2402,R1=2500,P1=0,I0=1,Uh=2,N0=3e3,Ks=3001,z1=3200,I1=3201,D0=0,N1=1,Rn="",At="srgb",Yt="srgb-linear",_u="display-p3",gl="display-p3-linear",$c="linear",gt="srgb",Zc="rec709",Jc="p3",Bl=7680,D1=519,O1=512,U1=513,F1=514,B1=515,k1=516,H1=517,V1=518,G1=519,Fh=35044,bd="300 es",Bh=1035,Ci=2e3,Qc=2001;class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Md=1234567;const fa=Math.PI/180,ho=180/Math.PI;function Nn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[s&255]+$t[s>>8&255]+$t[s>>16&255]+$t[s>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function xu(s,e){return(s%e+e)%e}function W1(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function X1(s,e,t){return s!==e?(t-s)/(e-s):0}function pa(s,e,t){return(1-t)*s+t*e}function j1(s,e,t,n){return pa(s,e,1-Math.exp(-t*n))}function q1(s,e=1){return e-Math.abs(xu(s,e*2)-e)}function Y1(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function K1(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function $1(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Z1(s,e){return s+Math.random()*(e-s)}function J1(s){return s*(.5-Math.random())}function Q1(s){s!==void 0&&(Md=s);let e=Md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function em(s){return s*fa}function tm(s){return s*ho}function kh(s){return(s&s-1)===0&&s!==0}function O0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function el(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function nm(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*p,a*l);break;case"YXY":s.set(c*p,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ai(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const _l={DEG2RAD:fa,RAD2DEG:ho,generateUUID:Nn,clamp:Rt,euclideanModulo:xu,mapLinear:W1,inverseLerp:X1,lerp:pa,damp:j1,pingpong:q1,smoothstep:Y1,smootherstep:K1,randInt:$1,randFloat:Z1,randFloatSpread:J1,seededRandom:Q1,degToRad:em,radToDeg:tm,isPowerOfTwo:kh,ceilPowerOfTwo:O0,floorPowerOfTwo:el,setQuaternionFromProperEuler:nm,normalize:ht,denormalize:ai};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,i,r,o,a,c,l){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],b=i[1],x=i[4],v=i[7],T=i[2],z=i[5],w=i[8];return r[0]=o*_+a*b+c*T,r[3]=o*m+a*x+c*z,r[6]=o*f+a*v+c*w,r[1]=l*_+h*b+u*T,r[4]=l*m+h*x+u*z,r[7]=l*f+h*v+u*w,r[2]=d*_+p*b+g*T,r[5]=d*m+p*x+g*z,r[8]=d*f+p*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kl.makeScale(e,t)),this}rotate(e){return this.premultiply(kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kl=new tt;function U0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Aa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function im(){const s=Aa("canvas");return s.style.display="block",s}const Ed={};function ma(s){s in Ed||(Ed[s]=!0,console.warn(s))}const Td=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wd=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ja={[Yt]:{transfer:$c,primaries:Zc,toReference:s=>s,fromReference:s=>s},[At]:{transfer:gt,primaries:Zc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[gl]:{transfer:$c,primaries:Jc,toReference:s=>s.applyMatrix3(wd),fromReference:s=>s.applyMatrix3(Td)},[_u]:{transfer:gt,primaries:Jc,toReference:s=>s.convertSRGBToLinear().applyMatrix3(wd),fromReference:s=>s.applyMatrix3(Td).convertLinearToSRGB()}},sm=new Set([Yt,gl]),at={enabled:!0,_workingColorSpace:Yt,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!sm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ja[e].toReference,i=Ja[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ja[s].primaries},getTransfer:function(s){return s===Rn?$c:Ja[s].transfer}};function Qr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let _r;class F0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_r===void 0&&(_r=Aa("canvas")),_r.width=e.width,_r.height=e.height;const n=_r.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Aa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Qr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qr(t[n]/255)*255):t[n]=Qr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rm=0;class B0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Nn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Vl(i[o].image)):r.push(Vl(i[o]))}else r=Vl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Vl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?F0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let om=0;class jt extends Ss{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=Ln,i=Ln,r=un,o=Qs,a=Cn,c=ps,l=jt.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Nn(),this.name="",this.source=new B0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ks?At:Rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ao:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case Kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ao:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case Kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?Ks:N0}set encoding(e){ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ks?At:Rn}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=T0;jt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(p+1)/2,T=(f+1)/2,z=(h+d)/4,w=(u+_)/4,F=(g+m)/4;return x>v&&x>T?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=z/n,r=w/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=z/i,r=F/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=w/r,i=F/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class am extends Ss{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ma("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ks?At:Rn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new B0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends am{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class k0 extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cm extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*_,b=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const T=Math.sqrt(x),z=Math.atan2(T,f*b);m=Math.sin(m*z)/T,a=Math.sin(a*z)/T}const v=a*b;if(c=c*m+d*v,l=l*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ad.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,h=c*n+a*t-r*i,u=c*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=l*c+d*-r+h*-a-u*-o,this.y=h*c+d*-o+u*-r-l*-a,this.z=u*c+d*-a+l*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gl.copy(this).projectOnVector(e),this.sub(Gl)}reflect(e){return this.sub(Gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gl=new C,Ad=new hi;class On{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox),xr.applyMatrix4(e.matrixWorld),this.union(xr);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)vi.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(vi)}else i.boundingBox===null&&i.computeBoundingBox(),xr.copy(i.boundingBox),xr.applyMatrix4(e.matrixWorld),this.union(xr)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),Qa.subVectors(this.max,Bo),yr.subVectors(e.a,Bo),vr.subVectors(e.b,Bo),Sr.subVectors(e.c,Bo),qi.subVectors(vr,yr),Yi.subVectors(Sr,vr),Ps.subVectors(yr,Sr);let t=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-Ps.z,Ps.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,Ps.z,0,-Ps.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-Ps.y,Ps.x,0];return!Wl(t,yr,vr,Sr,Qa)||(t=[1,0,0,0,1,0,0,0,1],!Wl(t,yr,vr,Sr,Qa))?!1:(ec.crossVectors(qi,Yi),t=[ec.x,ec.y,ec.z],Wl(t,yr,vr,Sr,Qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new C,new C,new C,new C,new C,new C,new C,new C],vi=new C,xr=new On,yr=new C,vr=new C,Sr=new C,qi=new C,Yi=new C,Ps=new C,Bo=new C,Qa=new C,ec=new C,zs=new C;function Wl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){zs.fromArray(s,r);const a=i.x*Math.abs(zs.x)+i.y*Math.abs(zs.y)+i.z*Math.abs(zs.z),c=e.dot(zs),l=t.dot(zs),h=n.dot(zs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const lm=new On,ko=new C,Xl=new C;class Un{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const t=ko.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ko,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Xl)),this.expandByPoint(ko.copy(e.center).sub(Xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new C,jl=new C,tc=new C,Ki=new C,ql=new C,nc=new C,Yl=new C;class Mo{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){jl.copy(e).add(t).multiplyScalar(.5),tc.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(jl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(tc),a=Ki.dot(this.direction),c=-Ki.dot(tc),l=Ki.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(jl).addScaledVector(tc,d),p}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const n=Si.dot(this.direction),i=Si.dot(Si)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,i,r){ql.subVectors(t,e),nc.subVectors(n,e),Yl.crossVectors(ql,nc);let o=this.direction.dot(Yl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const c=a*this.direction.dot(nc.crossVectors(Ki,nc));if(c<0)return null;const l=a*this.direction.dot(ql.cross(Ki));if(l<0||c+l>o)return null;const h=-a*Ki.dot(Yl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,i,r,o,a,c,l,h,u,d,p,g,_,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,p,g,_,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/br.setFromMatrixColumn(e,0).length(),r=1/br.setFromMatrixColumn(e,1).length(),o=1/br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hm,e,um)}lookAt(e,t,n){const i=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),$i.crossVectors(n,vn),$i.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),$i.crossVectors(n,vn)),$i.normalize(),ic.crossVectors(vn,$i),i[0]=$i.x,i[4]=ic.x,i[8]=vn.x,i[1]=$i.y,i[5]=ic.y,i[9]=vn.y,i[2]=$i.z,i[6]=ic.z,i[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],b=n[3],x=n[7],v=n[11],T=n[15],z=i[0],w=i[4],F=i[8],M=i[12],L=i[1],G=i[5],ie=i[9],se=i[13],N=i[2],H=i[6],Y=i[10],j=i[14],le=i[3],Q=i[7],K=i[11],D=i[15];return r[0]=o*z+a*L+c*N+l*le,r[4]=o*w+a*G+c*H+l*Q,r[8]=o*F+a*ie+c*Y+l*K,r[12]=o*M+a*se+c*j+l*D,r[1]=h*z+u*L+d*N+p*le,r[5]=h*w+u*G+d*H+p*Q,r[9]=h*F+u*ie+d*Y+p*K,r[13]=h*M+u*se+d*j+p*D,r[2]=g*z+_*L+m*N+f*le,r[6]=g*w+_*G+m*H+f*Q,r[10]=g*F+_*ie+m*Y+f*K,r[14]=g*M+_*se+m*j+f*D,r[3]=b*z+x*L+v*N+T*le,r[7]=b*w+x*G+v*H+T*Q,r[11]=b*F+x*ie+v*Y+T*K,r[15]=b*M+x*se+v*j+T*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*p-n*c*p)+_*(+t*c*p-t*l*d+r*o*d-i*o*p+i*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],b=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,x=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,v=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,T=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,z=t*b+n*x+i*v+r*T;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/z;return e[0]=b*w,e[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*w,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*f+n*c*f)*w,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*p-n*c*p)*w,e[4]=x*w,e[5]=(h*m*r-g*d*r+g*i*p-t*m*p-h*i*f+t*d*f)*w,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*f-t*c*f)*w,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*p+t*c*p)*w,e[8]=v*w,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*f-t*u*f)*w,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*f+t*a*f)*w,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*w,e[12]=T*w,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*w,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*w,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,b=c*l,x=c*h,v=c*u,T=n.x,z=n.y,w=n.z;return i[0]=(1-(_+f))*T,i[1]=(p+v)*T,i[2]=(g-x)*T,i[3]=0,i[4]=(p-v)*z,i[5]=(1-(d+f))*z,i[6]=(m+b)*z,i[7]=0,i[8]=(g+x)*w,i[9]=(m-b)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=br.set(i[0],i[1],i[2]).length();const o=br.set(i[4],i[5],i[6]).length(),a=br.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Fn.copy(this);const l=1/r,h=1/o,u=1/a;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,t.setFromRotationMatrix(Fn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Ci){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(a===Ci)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Qc)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Ci){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,p=(n+i)*h;let g,_;if(a===Ci)g=(o+r)*u,_=-2*u;else if(a===Qc)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const br=new C,Fn=new Ye,hm=new C(0,0,0),um=new C(1,1,1),$i=new C,ic=new C,vn=new C,Ld=new Ye,Cd=new hi;class xl{constructor(e=0,t=0,n=0,i=xl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ld,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cd.setFromEuler(this),this.setFromQuaternion(Cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xl.DEFAULT_ORDER="XYZ";class yu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dm=0;const Rd=new C,Mr=new hi,bi=new Ye,sc=new C,Ho=new C,fm=new C,pm=new hi,Pd=new C(1,0,0),zd=new C(0,1,0),Id=new C(0,0,1),mm={type:"added"},gm={type:"removed"};class Mt extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new C,t=new xl,n=new hi,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new tt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new yu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mr.setFromAxisAngle(e,t),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(e,t){return Mr.setFromAxisAngle(e,t),this.quaternion.premultiply(Mr),this}rotateX(e){return this.rotateOnAxis(Pd,e)}rotateY(e){return this.rotateOnAxis(zd,e)}rotateZ(e){return this.rotateOnAxis(Id,e)}translateOnAxis(e,t){return Rd.copy(e).applyQuaternion(this.quaternion),this.position.add(Rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pd,e)}translateY(e){return this.translateOnAxis(zd,e)}translateZ(e){return this.translateOnAxis(Id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sc.copy(e):sc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Ho,sc,this.up):bi.lookAt(sc,Ho,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),Mr.setFromRotationMatrix(bi),this.quaternion.premultiply(Mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,fm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,pm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mt.DEFAULT_UP=new C(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new C,Mi=new C,Kl=new C,Ei=new C,Er=new C,Tr=new C,Nd=new C,$l=new C,Zl=new C,Jl=new C;let rc=!1;class An{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Bn.subVectors(e,t),i.cross(Bn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Bn.subVectors(i,t),Mi.subVectors(n,t),Kl.subVectors(e,t);const o=Bn.dot(Bn),a=Bn.dot(Mi),c=Bn.dot(Kl),l=Mi.dot(Mi),h=Mi.dot(Kl),u=o*l-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ei),Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,t,n,i,r,o,a,c){return rc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rc=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Ei),c.setScalar(0),c.addScaledVector(r,Ei.x),c.addScaledVector(o,Ei.y),c.addScaledVector(a,Ei.z),c}static isFrontFacing(e,t,n,i){return Bn.subVectors(n,t),Mi.subVectors(e,t),Bn.cross(Mi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Bn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return rc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rc=!0),An.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return An.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Er.subVectors(i,n),Tr.subVectors(r,n),$l.subVectors(e,n);const c=Er.dot($l),l=Tr.dot($l);if(c<=0&&l<=0)return t.copy(n);Zl.subVectors(e,i);const h=Er.dot(Zl),u=Tr.dot(Zl);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Er,o);Jl.subVectors(e,r);const p=Er.dot(Jl),g=Tr.dot(Jl);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Tr,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Nd.subVectors(r,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(Nd,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(Er,o).addScaledVector(Tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let _m=0;class Zn extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=js,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=b0,this.blendDst=M0,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ih,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bl,this.stencilZFail=Bl,this.stencilZPass=Bl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(n.blending=this.blending),this.side!==Bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const H0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},oc={h:0,s:0,l:0};function Ql(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}let Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=xu(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ql(o,r,e+1/3),this.g=Ql(o,r,e),this.b=Ql(o,r,e-1/3)}return at.toWorkingColorSpace(this,i),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=H0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}copyLinearToSRGB(e){return this.r=Hl(e.r),this.g=Hl(e.g),this.b=Hl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return at.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Rt(Zt.r*255,0,255))*65536+Math.round(Rt(Zt.g*255,0,255))*256+Math.round(Rt(Zt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,i=Zt.g,r=Zt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=At){at.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,i=Zt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(oc);const n=pa(Zi.h,oc.h,t),i=pa(Zi.s,oc.s,t),r=pa(Zi.l,oc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Zt=new Be;Be.NAMES=H0;class Ri extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=E0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new C,ac=new re;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fh,this.updateRange={offset:0,count:-1},this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ac.fromBufferAttribute(this,t),ac.applyMatrix3(e),this.setXY(t,ac.x,ac.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class V0 extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class G0 extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xm=0;const En=new Ye,eh=new Mt,wr=new C,Sn=new On,Vo=new On,Ut=new C;class on extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U0(e)?G0:V0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return eh.lookAt(e),eh.updateMatrix(),this.applyMatrix4(eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(Sn.min,Vo.min),Sn.expandByPoint(Ut),Ut.addVectors(Sn.max,Vo.max),Sn.expandByPoint(Ut)):(Sn.expandByPoint(Vo.min),Sn.expandByPoint(Vo.max))}Sn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ut.fromBufferAttribute(a,l),c&&(wr.fromBufferAttribute(e,l),Ut.add(wr)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let L=0;L<a;L++)l[L]=new C,h[L]=new C;const u=new C,d=new C,p=new C,g=new re,_=new re,m=new re,f=new C,b=new C;function x(L,G,ie){u.fromArray(i,L*3),d.fromArray(i,G*3),p.fromArray(i,ie*3),g.fromArray(o,L*2),_.fromArray(o,G*2),m.fromArray(o,ie*2),d.sub(u),p.sub(u),_.sub(g),m.sub(g);const se=1/(_.x*m.y-m.x*_.y);isFinite(se)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(se),b.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(se),l[L].add(f),l[G].add(f),l[ie].add(f),h[L].add(b),h[G].add(b),h[ie].add(b))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let L=0,G=v.length;L<G;++L){const ie=v[L],se=ie.start,N=ie.count;for(let H=se,Y=se+N;H<Y;H+=3)x(n[H+0],n[H+1],n[H+2])}const T=new C,z=new C,w=new C,F=new C;function M(L){w.fromArray(r,L*3),F.copy(w);const G=l[L];T.copy(G),T.sub(w.multiplyScalar(w.dot(G))).normalize(),z.crossVectors(F,G);const se=z.dot(h[L])<0?-1:1;c[L*4]=T.x,c[L*4+1]=T.y,c[L*4+2]=T.z,c[L*4+3]=se}for(let L=0,G=v.length;L<G;++L){const ie=v[L],se=ie.start,N=ie.count;for(let H=se,Y=se+N;H<Y;H+=3)M(n[H+0]),M(n[H+1]),M(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new rn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dd=new Ye,Is=new Mo,cc=new Un,Od=new C,Ar=new C,Lr=new C,Cr=new C,th=new C,lc=new C,hc=new re,uc=new re,dc=new re,Ud=new C,Fd=new C,Bd=new C,fc=new C,pc=new C;class sn extends Mt{constructor(e=new on,t=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){lc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(th.fromBufferAttribute(u,e),o?lc.addScaledVector(th,h):lc.addScaledVector(th.sub(t),h))}t.add(lc)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(r),Is.copy(e.ray).recast(e.near),!(cc.containsPoint(Is.origin)===!1&&(Is.intersectSphere(cc,Od)===null||Is.origin.distanceToSquared(Od)>(e.far-e.near)**2))&&(Dd.copy(r).invert(),Is.copy(e.ray).applyMatrix4(Dd),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,T=x;v<T;v+=3){const z=a.getX(v),w=a.getX(v+1),F=a.getX(v+2);i=mc(this,f,e,n,l,h,u,z,w,F),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const b=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);i=mc(this,o,e,n,l,h,u,b,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,T=x;v<T;v+=3){const z=v,w=v+1,F=v+2;i=mc(this,f,e,n,l,h,u,z,w,F),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const b=m,x=m+1,v=m+2;i=mc(this,o,e,n,l,h,u,b,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ym(s,e,t,n,i,r,o,a){let c;if(e.side===mn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Bi,a),c===null)return null;pc.copy(a),pc.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(pc);return l<t.near||l>t.far?null:{distance:l,point:pc.clone(),object:s}}function mc(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Ar),s.getVertexPosition(c,Lr),s.getVertexPosition(l,Cr);const h=ym(s,e,t,n,Ar,Lr,Cr,fc);if(h){i&&(hc.fromBufferAttribute(i,a),uc.fromBufferAttribute(i,c),dc.fromBufferAttribute(i,l),h.uv=An.getInterpolation(fc,Ar,Lr,Cr,hc,uc,dc,new re)),r&&(hc.fromBufferAttribute(r,a),uc.fromBufferAttribute(r,c),dc.fromBufferAttribute(r,l),h.uv1=An.getInterpolation(fc,Ar,Lr,Cr,hc,uc,dc,new re),h.uv2=h.uv1),o&&(Ud.fromBufferAttribute(o,a),Fd.fromBufferAttribute(o,c),Bd.fromBufferAttribute(o,l),h.normal=An.getInterpolation(fc,Ar,Lr,Cr,Ud,Fd,Bd,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new C,materialIndex:0};An.getNormal(Ar,Lr,Cr,u.normal),h.face=u}return h}class Ua extends on{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function g(_,m,f,b,x,v,T,z,w,F,M){const L=v/w,G=T/F,ie=v/2,se=T/2,N=z/2,H=w+1,Y=F+1;let j=0,le=0;const Q=new C;for(let K=0;K<Y;K++){const D=K*G-se;for(let V=0;V<H;V++){const _e=V*L-ie;Q[_]=_e*b,Q[m]=D*x,Q[f]=N,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[f]=z>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(V/w),u.push(1-K/F),j+=1}}for(let K=0;K<F;K++)for(let D=0;D<w;D++){const V=d+D+H*K,_e=d+D+H*(K+1),ve=d+(D+1)+H*(K+1),Me=d+(D+1)+H*K;c.push(V,_e,Me),c.push(_e,ve,Me),le+=6}a.addGroup(p,le,M),p+=le,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(s){const e={};for(let t=0;t<s.length;t++){const n=uo(s[t]);for(const i in n)e[i]=n[i]}return e}function vm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function W0(s){return s.getRenderTarget()===null?s.outputColorSpace:at.workingColorSpace}const vu={clone:uo,merge:tn};var Sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ms extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sm,this.fragmentShader=bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=vm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class X0 extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nn extends X0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Rr=-90,Pr=1;class Mm extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new nn(Rr,Pr,e,t);i.layers=this.layers,this.add(i);const r=new nn(Rr,Pr,e,t);r.layers=this.layers,this.add(r);const o=new nn(Rr,Pr,e,t);o.layers=this.layers,this.add(o);const a=new nn(Rr,Pr,e,t);a.layers=this.layers,this.add(a);const c=new nn(Rr,Pr,e,t);c.layers=this.layers,this.add(c);const l=new nn(Rr,Pr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class j0 extends jt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ro,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Em extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ma("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ks?At:Rn),this.texture=new j0(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ua(5,5,5),r=new ms({name:"CubemapFromEquirect",uniforms:uo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:ds});r.uniforms.tEquirect.value=t;const o=new sn(i,r),a=t.minFilter;return t.minFilter===Qs&&(t.minFilter=un),new Mm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const nh=new C,Tm=new C,wm=new tt;class Ai{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=nh.subVectors(n,t).cross(Tm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(nh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wm.getNormalMatrix(e),i=this.coplanarPoint(nh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new Un,gc=new C;class Su{constructor(e=new Ai,t=new Ai,n=new Ai,i=new Ai,r=new Ai,o=new Ai){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],b=i[13],x=i[14],v=i[15];if(n[0].setComponents(c-r,d-l,m-p,v-f).normalize(),n[1].setComponents(c+r,d+l,m+p,v+f).normalize(),n[2].setComponents(c+o,d+h,m+g,v+b).normalize(),n[3].setComponents(c-o,d-h,m-g,v-b).normalize(),n[4].setComponents(c-a,d-u,m-_,v-x).normalize(),t===Ci)n[5].setComponents(c+a,d+u,m+_,v+x).normalize();else if(t===Qc)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){return Ns.center.set(0,0,0),Ns.radius=.7071067811865476,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(gc.x=i.normal.x>0?e.max.x:e.min.x,gc.y=i.normal.y>0?e.max.y:e.min.y,gc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function q0(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Am(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=s.SHORT;else if(u instanceof Uint32Array)g=s.UNSIGNED_INT;else if(u instanceof Int32Array)g=s.INT;else if(u instanceof Int8Array)g=s.BYTE;else if(u instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,u){const d=h.array,p=h.updateRange;s.bindBuffer(u,l),p.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(r(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class bu extends on{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const b=f*d-o;for(let x=0;x<l;x++){const v=x*u-r;g.push(v,-b,0),_.push(0,0,1),m.push(x/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){const x=b+l*f,v=b+l*(f+1),T=b+1+l*(f+1),z=b+1+l*f;p.push(x,v,z),p.push(v,T,z)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bu(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cm=`#ifdef USE_ALPHAHASH
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
#endif`,Rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bm=`#ifdef USE_IRIDESCENCE
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
#endif`,km=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Km=`#define PI 3.141592653589793
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
} // validated`,$m=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Zm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n2="gl_FragColor = linearToOutputTexel( gl_FragColor );",i2=`
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
}`,s2=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,r2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,o2=`#ifdef USE_ENVMAP
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
#endif`,a2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c2=`#ifdef USE_ENVMAP
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
#endif`,l2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f2=`#ifdef USE_GRADIENTMAP
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
}`,p2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,m2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x2=`uniform bool receiveShadow;
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
#endif`,y2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,v2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E2=`PhysicalMaterial material;
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,T2=`struct PhysicalMaterial {
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
}`,w2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
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
#endif`,A2=`#if defined( RE_IndirectDiffuse )
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
#endif`,L2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,z2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,I2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O2=`#if defined( USE_POINTS_UV )
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
#endif`,U2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k2=`#ifdef USE_MORPHNORMALS
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
#endif`,H2=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,V2=`#ifdef USE_MORPHTARGETS
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
#endif`,G2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,W2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,X2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y2=`#ifdef USE_NORMALMAP
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
#endif`,K2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,c3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h3=`float getShadowMask() {
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
}`,u3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,f3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p3=`#ifdef USE_SKINNING
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
#endif`,m3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y3=`#ifdef USE_TRANSMISSION
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
#endif`,v3=`#ifdef USE_TRANSMISSION
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
#endif`,S3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w3=`uniform sampler2D t2D;
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
}`,A3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P3=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,z3=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,I3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,N3=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,D3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U3=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F3=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B3=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,k3=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,H3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,V3=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,G3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,W3=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,X3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,j3=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,q3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Y3=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,K3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,$3=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z3=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,J3=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Q3=`uniform float size;
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
}`,e4=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,t4=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,n4=`uniform vec3 color;
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
}`,i4=`uniform float rotation;
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
}`,s4=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Je={alphahash_fragment:Lm,alphahash_pars_fragment:Cm,alphamap_fragment:Rm,alphamap_pars_fragment:Pm,alphatest_fragment:zm,alphatest_pars_fragment:Im,aomap_fragment:Nm,aomap_pars_fragment:Dm,begin_vertex:Om,beginnormal_vertex:Um,bsdfs:Fm,iridescence_fragment:Bm,bumpmap_pars_fragment:km,clipping_planes_fragment:Hm,clipping_planes_pars_fragment:Vm,clipping_planes_pars_vertex:Gm,clipping_planes_vertex:Wm,color_fragment:Xm,color_pars_fragment:jm,color_pars_vertex:qm,color_vertex:Ym,common:Km,cube_uv_reflection_fragment:$m,defaultnormal_vertex:Zm,displacementmap_pars_vertex:Jm,displacementmap_vertex:Qm,emissivemap_fragment:e2,emissivemap_pars_fragment:t2,colorspace_fragment:n2,colorspace_pars_fragment:i2,envmap_fragment:s2,envmap_common_pars_fragment:r2,envmap_pars_fragment:o2,envmap_pars_vertex:a2,envmap_physical_pars_fragment:y2,envmap_vertex:c2,fog_vertex:l2,fog_pars_vertex:h2,fog_fragment:u2,fog_pars_fragment:d2,gradientmap_pars_fragment:f2,lightmap_fragment:p2,lightmap_pars_fragment:m2,lights_lambert_fragment:g2,lights_lambert_pars_fragment:_2,lights_pars_begin:x2,lights_toon_fragment:v2,lights_toon_pars_fragment:S2,lights_phong_fragment:b2,lights_phong_pars_fragment:M2,lights_physical_fragment:E2,lights_physical_pars_fragment:T2,lights_fragment_begin:w2,lights_fragment_maps:A2,lights_fragment_end:L2,logdepthbuf_fragment:C2,logdepthbuf_pars_fragment:R2,logdepthbuf_pars_vertex:P2,logdepthbuf_vertex:z2,map_fragment:I2,map_pars_fragment:N2,map_particle_fragment:D2,map_particle_pars_fragment:O2,metalnessmap_fragment:U2,metalnessmap_pars_fragment:F2,morphcolor_vertex:B2,morphnormal_vertex:k2,morphtarget_pars_vertex:H2,morphtarget_vertex:V2,normal_fragment_begin:G2,normal_fragment_maps:W2,normal_pars_fragment:X2,normal_pars_vertex:j2,normal_vertex:q2,normalmap_pars_fragment:Y2,clearcoat_normal_fragment_begin:K2,clearcoat_normal_fragment_maps:$2,clearcoat_pars_fragment:Z2,iridescence_pars_fragment:J2,opaque_fragment:Q2,packing:e3,premultiplied_alpha_fragment:t3,project_vertex:n3,dithering_fragment:i3,dithering_pars_fragment:s3,roughnessmap_fragment:r3,roughnessmap_pars_fragment:o3,shadowmap_pars_fragment:a3,shadowmap_pars_vertex:c3,shadowmap_vertex:l3,shadowmask_pars_fragment:h3,skinbase_vertex:u3,skinning_pars_vertex:d3,skinning_vertex:f3,skinnormal_vertex:p3,specularmap_fragment:m3,specularmap_pars_fragment:g3,tonemapping_fragment:_3,tonemapping_pars_fragment:x3,transmission_fragment:y3,transmission_pars_fragment:v3,uv_pars_fragment:S3,uv_pars_vertex:b3,uv_vertex:M3,worldpos_vertex:E3,background_vert:T3,background_frag:w3,backgroundCube_vert:A3,backgroundCube_frag:L3,cube_vert:C3,cube_frag:R3,depth_vert:P3,depth_frag:z3,distanceRGBA_vert:I3,distanceRGBA_frag:N3,equirect_vert:D3,equirect_frag:O3,linedashed_vert:U3,linedashed_frag:F3,meshbasic_vert:B3,meshbasic_frag:k3,meshlambert_vert:H3,meshlambert_frag:V3,meshmatcap_vert:G3,meshmatcap_frag:W3,meshnormal_vert:X3,meshnormal_frag:j3,meshphong_vert:q3,meshphong_frag:Y3,meshphysical_vert:K3,meshphysical_frag:$3,meshtoon_vert:Z3,meshtoon_frag:J3,points_vert:Q3,points_frag:e4,shadow_vert:t4,shadow_frag:n4,sprite_vert:i4,sprite_frag:s4},me={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},dn={basic:{uniforms:tn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:tn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Be(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:tn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:tn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:tn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Be(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:tn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:tn([me.points,me.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:tn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:tn([me.common,me.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:tn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:tn([me.sprite,me.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:tn([me.common,me.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:tn([me.lights,me.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};dn.physical={uniforms:tn([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const _c={r:0,b:0,g:0};function r4(s,e,t,n,i,r,o){const a=new Be(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(m,f){let b=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),b=!0);const v=s.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ml)?(h===void 0&&(h=new sn(new Ua(1,1,1),new ms({name:"BackgroundCubeMaterial",uniforms:uo(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,z,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=at.getTransfer(x.colorSpace)!==gt,(u!==x||d!==x.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new sn(new bu(2,2),new ms({name:"BackgroundMaterial",uniforms:uo(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=at.getTransfer(x.colorSpace)!==gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,f){m.getRGB(_c,W0(s)),n.buffers.color.setClear(_c.r,_c.g,_c.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function o4(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null);let l=c,h=!1;function u(N,H,Y,j,le){let Q=!1;if(o){const K=_(j,Y,H);l!==K&&(l=K,p(l.object)),Q=f(N,j,Y,le),Q&&b(N,j,Y,le)}else{const K=H.wireframe===!0;(l.geometry!==j.id||l.program!==Y.id||l.wireframe!==K)&&(l.geometry=j.id,l.program=Y.id,l.wireframe=K,Q=!0)}le!==null&&t.update(le,s.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,F(N,H,Y,j),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(le).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(N){return n.isWebGL2?s.bindVertexArray(N):r.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?s.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function _(N,H,Y){const j=Y.wireframe===!0;let le=a[N.id];le===void 0&&(le={},a[N.id]=le);let Q=le[H.id];Q===void 0&&(Q={},le[H.id]=Q);let K=Q[j];return K===void 0&&(K=m(d()),Q[j]=K),K}function m(N){const H=[],Y=[],j=[];for(let le=0;le<i;le++)H[le]=0,Y[le]=0,j[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:j,object:N,attributes:{},index:null}}function f(N,H,Y,j){const le=l.attributes,Q=H.attributes;let K=0;const D=Y.getAttributes();for(const V in D)if(D[V].location>=0){const ve=le[V];let Me=Q[V];if(Me===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor)),ve===void 0||ve.attribute!==Me||Me&&ve.data!==Me.data)return!0;K++}return l.attributesNum!==K||l.index!==j}function b(N,H,Y,j){const le={},Q=H.attributes;let K=0;const D=Y.getAttributes();for(const V in D)if(D[V].location>=0){let ve=Q[V];ve===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(ve=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(ve=N.instanceColor));const Me={};Me.attribute=ve,ve&&ve.data&&(Me.data=ve.data),le[V]=Me,K++}l.attributes=le,l.attributesNum=K,l.index=j}function x(){const N=l.newAttributes;for(let H=0,Y=N.length;H<Y;H++)N[H]=0}function v(N){T(N,0)}function T(N,H){const Y=l.newAttributes,j=l.enabledAttributes,le=l.attributeDivisors;Y[N]=1,j[N]===0&&(s.enableVertexAttribArray(N),j[N]=1),le[N]!==H&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,H),le[N]=H)}function z(){const N=l.newAttributes,H=l.enabledAttributes;for(let Y=0,j=H.length;Y<j;Y++)H[Y]!==N[Y]&&(s.disableVertexAttribArray(Y),H[Y]=0)}function w(N,H,Y,j,le,Q,K){K===!0?s.vertexAttribIPointer(N,H,Y,le,Q):s.vertexAttribPointer(N,H,Y,j,le,Q)}function F(N,H,Y,j){if(n.isWebGL2===!1&&(N.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const le=j.attributes,Q=Y.getAttributes(),K=H.defaultAttributeValues;for(const D in Q){const V=Q[D];if(V.location>=0){let _e=le[D];if(_e===void 0&&(D==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),D==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor)),_e!==void 0){const ve=_e.normalized,Me=_e.itemSize,De=t.get(_e);if(De===void 0)continue;const Ie=De.buffer,ze=De.type,Qe=De.bytesPerElement,ot=n.isWebGL2===!0&&(ze===s.INT||ze===s.UNSIGNED_INT||_e.gpuType===A0);if(_e.isInterleavedBufferAttribute){const Oe=_e.data,P=Oe.stride,he=_e.offset;if(Oe.isInstancedInterleavedBuffer){for(let q=0;q<V.locationSize;q++)T(V.location+q,Oe.meshPerAttribute);N.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let q=0;q<V.locationSize;q++)v(V.location+q);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let q=0;q<V.locationSize;q++)w(V.location+q,Me/V.locationSize,ze,ve,P*Qe,(he+Me/V.locationSize*q)*Qe,ot)}else{if(_e.isInstancedBufferAttribute){for(let Oe=0;Oe<V.locationSize;Oe++)T(V.location+Oe,_e.meshPerAttribute);N.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)v(V.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Oe=0;Oe<V.locationSize;Oe++)w(V.location+Oe,Me/V.locationSize,ze,ve,Me*Qe,Me/V.locationSize*Oe*Qe,ot)}}else if(K!==void 0){const ve=K[D];if(ve!==void 0)switch(ve.length){case 2:s.vertexAttrib2fv(V.location,ve);break;case 3:s.vertexAttrib3fv(V.location,ve);break;case 4:s.vertexAttrib4fv(V.location,ve);break;default:s.vertexAttrib1fv(V.location,ve)}}}}z()}function M(){ie();for(const N in a){const H=a[N];for(const Y in H){const j=H[Y];for(const le in j)g(j[le].object),delete j[le];delete H[Y]}delete a[N]}}function L(N){if(a[N.id]===void 0)return;const H=a[N.id];for(const Y in H){const j=H[Y];for(const le in j)g(j[le].object),delete j[le];delete H[Y]}delete a[N.id]}function G(N){for(const H in a){const Y=a[H];if(Y[N.id]===void 0)continue;const j=Y[N.id];for(const le in j)g(j[le].object),delete j[le];delete Y[N.id]}}function ie(){se(),h=!0,l!==c&&(l=c,p(l.object))}function se(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:ie,resetDefaultState:se,dispose:M,releaseStatesOfGeometry:L,releaseStatesOfProgram:G,initAttributes:x,enableAttribute:v,disableUnusedAttributes:z}}function a4(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,h){s.drawArrays(r,l,h),t.update(h,r,1)}function c(l,h,u){if(u===0)return;let d,p;if(i)d=s,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,l,h,u),t.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=c}function c4(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,v=o||e.has("OES_texture_float"),T=x&&v,z=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:T,maxSamples:z}}function l4(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ai,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const b=r?0:n,x=b*4;let v=f.clippingState||null;c.value=v,v=h(g,d,x,p);for(let T=0;T!==x;++T)v[T]=t[T];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,v=p;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function h4(s){let e=new WeakMap;function t(o,a){return a===Nh?o.mapping=ro:a===Dh&&(o.mapping=oo),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Nh||a===Dh)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Em(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Fa extends X0{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Kr=4,kd=[.125,.215,.35,.446,.526,.582],Hs=20,ih=new Fa,Hd=new Be;let sh=null;const Os=(1+Math.sqrt(5))/2,zr=1/Os,Vd=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Os,zr),new C(0,Os,-zr),new C(zr,0,Os),new C(-zr,0,Os),new C(Os,zr,0),new C(-Os,zr,0)];class Gd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){sh=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sh),e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ro||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Ta,format:Cn,colorSpace:Yt,depthBuffer:!1},i=Wd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u4(r)),this._blurMaterial=d4(r,e,t)}return i}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,ih)}_sceneToCubeUV(e,t,n,i){const a=new nn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Hd),h.toneMapping=fs,h.autoClear=!1;const p=new Ri({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new sn(new Ua,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Hd),_=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):b===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const x=this._cubeSize;xc(i,b*x,f>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ro||e.mapping===oo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new sn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;xc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ih)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Vd[(i-1)%Vd.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new sn(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Hs-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Hs;m>Hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hs}`);const f=[];let b=0;for(let w=0;w<Hs;++w){const F=w/_,M=Math.exp(-F*F/2);f.push(M),w===0?b+=M:w<m&&(b+=2*M)}for(let w=0;w<f.length;w++)f[w]=f[w]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[i],T=3*v*(i>x-Kr?i-x+Kr:0),z=4*(this._cubeSize-v);xc(t,T,z,3*v,2*v),c.setRenderTarget(t),c.render(u,ih)}}function u4(s){const e=[],t=[],n=[];let i=s;const r=s-Kr+1+kd.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Kr?c=kd[o-s+Kr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,b=new Float32Array(_*g*p),x=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let z=0;z<p;z++){const w=z%3*2/3-1,F=z>2?0:-1,M=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];b.set(M,_*g*z),x.set(d,m*g*z);const L=[z,z,z,z,z,z];v.set(L,f*g*z)}const T=new on;T.setAttribute("position",new rn(b,_)),T.setAttribute("uv",new rn(x,m)),T.setAttribute("faceIndex",new rn(v,f)),e.push(T),i>Kr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wd(s,e,t){const n=new er(s,e,t);return n.texture.mapping=ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function d4(s,e,t){const n=new Float32Array(Hs),i=new C(0,1,0);return new ms({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Xd(){return new ms({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function jd(){return new ms({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Mu(){return`

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
	`}function f4(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Nh||c===Dh,h=c===ro||c===oo;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Gd(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Gd(s));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function p4(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function m4(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let x=0,v=b.length;x<v;x+=3){const T=b[x+0],z=b[x+1],w=b[x+2];d.push(T,z,z,w,w,T)}}else if(g!==void 0){const b=g.array;_=g.version;for(let x=0,v=b.length/3-1;x<v;x+=3){const T=x+0,z=x+1,w=x+2;d.push(T,z,z,w,w,T)}}else return;const m=new(U0(d)?G0:V0)(d,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function g4(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,p){s.drawElements(r,p,a,d*c),t.update(p,r,1)}function u(d,p,g){if(g===0)return;let _,m;if(i)_=s,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,p,a,d*c,g),t.update(p,r,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function _4(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function x4(s,e){return s[0]-e[0]}function y4(s,e){return Math.abs(e[1])-Math.abs(s[1])}function v4(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new rt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let H=function(){se.dispose(),r.delete(h),h.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,z=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let M=0;x===!0&&(M=1),v===!0&&(M=2),T===!0&&(M=3);let L=h.attributes.position.count*M,G=1;L>e.maxTextureSize&&(G=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const ie=new Float32Array(L*G*4*_),se=new k0(ie,L,G,_);se.type=Li,se.needsUpdate=!0;const N=M*4;for(let Y=0;Y<_;Y++){const j=z[Y],le=w[Y],Q=F[Y],K=L*G*4*Y;for(let D=0;D<j.count;D++){const V=D*N;x===!0&&(o.fromBufferAttribute(j,D),ie[K+V+0]=o.x,ie[K+V+1]=o.y,ie[K+V+2]=o.z,ie[K+V+3]=0),v===!0&&(o.fromBufferAttribute(le,D),ie[K+V+4]=o.x,ie[K+V+5]=o.y,ie[K+V+6]=o.z,ie[K+V+7]=0),T===!0&&(o.fromBufferAttribute(Q,D),ie[K+V+8]=o.x,ie[K+V+9]=o.y,ie[K+V+10]=o.z,ie[K+V+11]=Q.itemSize===4?o.w:1)}}m={count:_,texture:se,size:new re(L,G)},r.set(h,m),h.addEventListener("dispose",H)}let f=0;for(let x=0;x<d.length;x++)f+=d[x];const b=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",b),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let v=0;v<g;v++)_[v]=[v,0];n[h.id]=_}for(let v=0;v<g;v++){const T=_[v];T[0]=v,T[1]=d[v]}_.sort(y4);for(let v=0;v<8;v++)v<g&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(x4);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let b=0;for(let v=0;v<8;v++){const T=a[v],z=T[0],w=T[1];z!==Number.MAX_SAFE_INTEGER&&w?(m&&h.getAttribute("morphTarget"+v)!==m[z]&&h.setAttribute("morphTarget"+v,m[z]),f&&h.getAttribute("morphNormal"+v)!==f[z]&&h.setAttribute("morphNormal"+v,f[z]),i[v]=w,b+=w):(m&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),f&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const x=h.morphTargetsRelative?1:1-b;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function S4(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Y0=new jt,K0=new k0,$0=new cm,Z0=new j0,qd=[],Yd=[],Kd=new Float32Array(16),$d=new Float32Array(9),Zd=new Float32Array(4);function Eo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=qd[i];if(r===void 0&&(r=new Float32Array(i),qd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function yl(s,e){let t=Yd[e];t===void 0&&(t=new Int32Array(e),Yd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function b4(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function M4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),Ot(t,e)}}function E4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),Ot(t,e)}}function T4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),Ot(t,e)}}function w4(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Dt(t,n))return;Zd.set(n),s.uniformMatrix2fv(this.addr,!1,Zd),Ot(t,n)}}function A4(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Dt(t,n))return;$d.set(n),s.uniformMatrix3fv(this.addr,!1,$d),Ot(t,n)}}function L4(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Dt(t,n))return;Kd.set(n),s.uniformMatrix4fv(this.addr,!1,Kd),Ot(t,n)}}function C4(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function R4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),Ot(t,e)}}function P4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),Ot(t,e)}}function z4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),Ot(t,e)}}function I4(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function N4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),Ot(t,e)}}function D4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),Ot(t,e)}}function O4(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),Ot(t,e)}}function U4(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Y0,i)}function F4(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$0,i)}function B4(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Z0,i)}function k4(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||K0,i)}function H4(s){switch(s){case 5126:return b4;case 35664:return M4;case 35665:return E4;case 35666:return T4;case 35674:return w4;case 35675:return A4;case 35676:return L4;case 5124:case 35670:return C4;case 35667:case 35671:return R4;case 35668:case 35672:return P4;case 35669:case 35673:return z4;case 5125:return I4;case 36294:return N4;case 36295:return D4;case 36296:return O4;case 35678:case 36198:case 36298:case 36306:case 35682:return U4;case 35679:case 36299:case 36307:return F4;case 35680:case 36300:case 36308:case 36293:return B4;case 36289:case 36303:case 36311:case 36292:return k4}}function V4(s,e){s.uniform1fv(this.addr,e)}function G4(s,e){const t=Eo(e,this.size,2);s.uniform2fv(this.addr,t)}function W4(s,e){const t=Eo(e,this.size,3);s.uniform3fv(this.addr,t)}function X4(s,e){const t=Eo(e,this.size,4);s.uniform4fv(this.addr,t)}function j4(s,e){const t=Eo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function q4(s,e){const t=Eo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Y4(s,e){const t=Eo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function K4(s,e){s.uniform1iv(this.addr,e)}function $4(s,e){s.uniform2iv(this.addr,e)}function Z4(s,e){s.uniform3iv(this.addr,e)}function J4(s,e){s.uniform4iv(this.addr,e)}function Q4(s,e){s.uniform1uiv(this.addr,e)}function eg(s,e){s.uniform2uiv(this.addr,e)}function tg(s,e){s.uniform3uiv(this.addr,e)}function ng(s,e){s.uniform4uiv(this.addr,e)}function ig(s,e,t){const n=this.cache,i=e.length,r=yl(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Y0,r[o])}function sg(s,e,t){const n=this.cache,i=e.length,r=yl(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||$0,r[o])}function rg(s,e,t){const n=this.cache,i=e.length,r=yl(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Z0,r[o])}function og(s,e,t){const n=this.cache,i=e.length,r=yl(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||K0,r[o])}function ag(s){switch(s){case 5126:return V4;case 35664:return G4;case 35665:return W4;case 35666:return X4;case 35674:return j4;case 35675:return q4;case 35676:return Y4;case 5124:case 35670:return K4;case 35667:case 35671:return $4;case 35668:case 35672:return Z4;case 35669:case 35673:return J4;case 5125:return Q4;case 36294:return eg;case 36295:return tg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return og}}class cg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=H4(t.type)}}class lg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=ag(t.type)}}class hg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const rh=/(\w+)(\])?(\[|\.)?/g;function Jd(s,e){s.seq.push(e),s.map[e.id]=e}function ug(s,e,t){const n=s.name,i=n.length;for(rh.lastIndex=0;;){const r=rh.exec(n),o=rh.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Jd(t,l===void 0?new cg(a,s,e):new lg(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new hg(a),Jd(t,u)),t=u}}}class Wc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);ug(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Qd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let dg=0;function fg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function pg(s){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(s);let n;switch(e===t?n="":e===Jc&&t===Zc?n="LinearDisplayP3ToLinearSRGB":e===Zc&&t===Jc&&(n="LinearSRGBToLinearDisplayP3"),s){case Yt:case gl:return[n,"LinearTransferOETF"];case At:case _u:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ef(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+fg(s.getShaderSource(e),o)}else return i}function mg(s,e){const t=pg(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gg(s,e){let t;switch(e){case g1:t="Linear";break;case _1:t="Reinhard";break;case x1:t="OptimizedCineon";break;case y1:t="ACESFilmic";break;case v1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _g(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ta).join(`
`)}function xg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ta(s){return s!==""}function tf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(s){return s.replace(vg,bg)}const Sg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bg(s,e){let t=Je[e];if(t===void 0){const n=Sg.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Hh(t)}const Mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sf(s){return s.replace(Mg,Eg)}function Eg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function rf(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===v0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===S0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function wg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ro:case oo:e="ENVMAP_TYPE_CUBE";break;case ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ag(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case oo:e="ENVMAP_MODE_REFRACTION";break}return e}function Lg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case E0:e="ENVMAP_BLENDING_MULTIPLY";break;case p1:e="ENVMAP_BLENDING_MIX";break;case m1:e="ENVMAP_BLENDING_ADD";break}return e}function Cg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Rg(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Tg(t),l=wg(t),h=Ag(t),u=Lg(t),d=Cg(t),p=t.isWebGL2?"":_g(t),g=xg(r),_=i.createProgram();let m,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ta).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ta).join(`
`),f.length>0&&(f+=`
`)):(m=[rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),f=[p,rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fs?"#define TONE_MAPPING":"",t.toneMapping!==fs?Je.tonemapping_pars_fragment:"",t.toneMapping!==fs?gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,mg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),o=Hh(o),o=tf(o,t),o=nf(o,t),a=Hh(a),a=tf(a,t),a=nf(a,t),o=sf(o),a=sf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=b+m+o,v=b+f+a,T=Qd(i,i.VERTEX_SHADER,x),z=Qd(i,i.FRAGMENT_SHADER,v);if(i.attachShader(_,T),i.attachShader(_,z),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const M=i.getProgramInfoLog(_).trim(),L=i.getShaderInfoLog(T).trim(),G=i.getShaderInfoLog(z).trim();let ie=!0,se=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ie=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,z);else{const N=ef(i,T,"vertex"),H=ef(i,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+N+`
`+H)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(L===""||G==="")&&(se=!1);se&&(this.diagnostics={runnable:ie,programLog:M,vertexShader:{log:L,prefix:m},fragmentShader:{log:G,prefix:f}})}i.deleteShader(T),i.deleteShader(z);let w;this.getUniforms=function(){return w===void 0&&(w=new Wc(i,_)),w};let F;return this.getAttributes=function(){return F===void 0&&(F=yg(i,_)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=z,this}let Pg=0;class zg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ig(e),t.set(e,n)),n}}class Ig{constructor(e){this.id=Pg++,this.code=e,this.usedTimes=0}}function Ng(s,e,t,n,i,r,o){const a=new yu,c=new zg,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,L,G,ie,se){const N=ie.fog,H=se.geometry,Y=M.isMeshStandardMaterial?ie.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),le=j&&j.mapping===ml?j.image.height:null,Q=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const K=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,D=K!==void 0?K.length:0;let V=0;H.morphAttributes.position!==void 0&&(V=1),H.morphAttributes.normal!==void 0&&(V=2),H.morphAttributes.color!==void 0&&(V=3);let _e,ve,Me,De;if(Q){const ct=dn[Q];_e=ct.vertexShader,ve=ct.fragmentShader}else _e=M.vertexShader,ve=M.fragmentShader,c.update(M),Me=c.getVertexShaderID(M),De=c.getFragmentShaderID(M);const Ie=s.getRenderTarget(),ze=se.isInstancedMesh===!0,Qe=!!M.map,ot=!!M.matcap,Oe=!!j,P=!!M.aoMap,he=!!M.lightMap,q=!!M.bumpMap,oe=!!M.normalMap,ee=!!M.displacementMap,Pe=!!M.emissiveMap,be=!!M.metalnessMap,Ee=!!M.roughnessMap,Fe=M.anisotropy>0,Ke=M.clearcoat>0,ut=M.iridescence>0,A=M.sheen>0,S=M.transmission>0,B=Fe&&!!M.anisotropyMap,ae=Ke&&!!M.clearcoatMap,ne=Ke&&!!M.clearcoatNormalMap,ce=Ke&&!!M.clearcoatRoughnessMap,Ce=ut&&!!M.iridescenceMap,ue=ut&&!!M.iridescenceThicknessMap,xe=A&&!!M.sheenColorMap,I=A&&!!M.sheenRoughnessMap,de=!!M.specularMap,$=!!M.specularColorMap,Ve=!!M.specularIntensityMap,Ae=S&&!!M.transmissionMap,ye=S&&!!M.thicknessMap,Re=!!M.gradientMap,R=!!M.alphaMap,fe=M.alphaTest>0,Z=!!M.alphaHash,ge=!!M.extensions,pe=!!H.attributes.uv1,te=!!H.attributes.uv2,Le=!!H.attributes.uv3;let ke=fs;return M.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(ke=s.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:_e,fragmentShader:ve,defines:M.defines,customVertexShaderID:Me,customFragmentShaderID:De,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:ze,instancingColor:ze&&se.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ie===null?s.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Yt,map:Qe,matcap:ot,envMap:Oe,envMapMode:Oe&&j.mapping,envMapCubeUVHeight:le,aoMap:P,lightMap:he,bumpMap:q,normalMap:oe,displacementMap:d&&ee,emissiveMap:Pe,normalMapObjectSpace:oe&&M.normalMapType===N1,normalMapTangentSpace:oe&&M.normalMapType===D0,metalnessMap:be,roughnessMap:Ee,anisotropy:Fe,anisotropyMap:B,clearcoat:Ke,clearcoatMap:ae,clearcoatNormalMap:ne,clearcoatRoughnessMap:ce,iridescence:ut,iridescenceMap:Ce,iridescenceThicknessMap:ue,sheen:A,sheenColorMap:xe,sheenRoughnessMap:I,specularMap:de,specularColorMap:$,specularIntensityMap:Ve,transmission:S,transmissionMap:Ae,thicknessMap:ye,gradientMap:Re,opaque:M.transparent===!1&&M.blending===js,alphaMap:R,alphaTest:fe,alphaHash:Z,combine:M.combine,mapUv:Qe&&_(M.map.channel),aoMapUv:P&&_(M.aoMap.channel),lightMapUv:he&&_(M.lightMap.channel),bumpMapUv:q&&_(M.bumpMap.channel),normalMapUv:oe&&_(M.normalMap.channel),displacementMapUv:ee&&_(M.displacementMap.channel),emissiveMapUv:Pe&&_(M.emissiveMap.channel),metalnessMapUv:be&&_(M.metalnessMap.channel),roughnessMapUv:Ee&&_(M.roughnessMap.channel),anisotropyMapUv:B&&_(M.anisotropyMap.channel),clearcoatMapUv:ae&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:I&&_(M.sheenRoughnessMap.channel),specularMapUv:de&&_(M.specularMap.channel),specularColorMapUv:$&&_(M.specularColorMap.channel),specularIntensityMapUv:Ve&&_(M.specularIntensityMap.channel),transmissionMapUv:Ae&&_(M.transmissionMap.channel),thicknessMapUv:ye&&_(M.thicknessMap.channel),alphaMapUv:R&&_(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(oe||Fe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:pe,vertexUv2s:te,vertexUv3s:Le,pointsUvs:se.isPoints===!0&&!!H.attributes.uv&&(Qe||R),fog:!!N,useFog:M.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:se.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:V,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ke,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Qe&&M.map.isVideoTexture===!0&&at.getTransfer(M.map.colorSpace)===gt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===oi,flipSided:M.side===mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ge&&M.extensions.derivatives===!0,extensionFragDepth:ge&&M.extensions.fragDepth===!0,extensionDrawBuffers:ge&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)L.push(G),L.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(b(L,M),x(L,M),L.push(s.outputColorSpace)),L.push(M.customProgramCacheKey),L.join()}function b(M,L){M.push(L.precision),M.push(L.outputColorSpace),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.mapUv),M.push(L.alphaMapUv),M.push(L.lightMapUv),M.push(L.aoMapUv),M.push(L.bumpMapUv),M.push(L.normalMapUv),M.push(L.displacementMapUv),M.push(L.emissiveMapUv),M.push(L.metalnessMapUv),M.push(L.roughnessMapUv),M.push(L.anisotropyMapUv),M.push(L.clearcoatMapUv),M.push(L.clearcoatNormalMapUv),M.push(L.clearcoatRoughnessMapUv),M.push(L.iridescenceMapUv),M.push(L.iridescenceThicknessMapUv),M.push(L.sheenColorMapUv),M.push(L.sheenRoughnessMapUv),M.push(L.specularMapUv),M.push(L.specularColorMapUv),M.push(L.specularIntensityMapUv),M.push(L.transmissionMapUv),M.push(L.thicknessMapUv),M.push(L.combine),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.numLightProbes),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function x(M,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.matcap&&a.enable(4),L.envMap&&a.enable(5),L.normalMapObjectSpace&&a.enable(6),L.normalMapTangentSpace&&a.enable(7),L.clearcoat&&a.enable(8),L.iridescence&&a.enable(9),L.alphaTest&&a.enable(10),L.vertexColors&&a.enable(11),L.vertexAlphas&&a.enable(12),L.vertexUv1s&&a.enable(13),L.vertexUv2s&&a.enable(14),L.vertexUv3s&&a.enable(15),L.vertexTangents&&a.enable(16),L.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.skinning&&a.enable(4),L.morphTargets&&a.enable(5),L.morphNormals&&a.enable(6),L.morphColors&&a.enable(7),L.premultipliedAlpha&&a.enable(8),L.shadowMapEnabled&&a.enable(9),L.useLegacyLights&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function v(M){const L=g[M.type];let G;if(L){const ie=dn[L];G=vu.clone(ie.uniforms)}else G=M.uniforms;return G}function T(M,L){let G;for(let ie=0,se=l.length;ie<se;ie++){const N=l[ie];if(N.cacheKey===L){G=N,++G.usedTimes;break}}return G===void 0&&(G=new Rg(s,L,M,r),l.push(G)),G}function z(M){if(--M.usedTimes===0){const L=l.indexOf(M);l[L]=l[l.length-1],l.pop(),M.destroy()}}function w(M){c.remove(M)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:T,releaseProgram:z,releaseShaderCache:w,programs:l,dispose:F}}function Dg(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Og(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function of(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function af(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,g,_,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||Og),n.length>1&&n.sort(d||of),i.length>1&&i.sort(d||of)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Ug(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new af,s.set(n,[o])):i>=r.length?(o=new af,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Fg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Be};break;case"SpotLight":t={position:new C,direction:new C,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function Bg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let kg=0;function Hg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Vg(s,e){const t=new Fg,n=Bg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);const r=new C,o=new Ye,a=new Ye;function c(h,u){let d=0,p=0,g=0;for(let ie=0;ie<9;ie++)i.probe[ie].set(0,0,0);let _=0,m=0,f=0,b=0,x=0,v=0,T=0,z=0,w=0,F=0,M=0;h.sort(Hg);const L=u===!0?Math.PI:1;for(let ie=0,se=h.length;ie<se;ie++){const N=h[ie],H=N.color,Y=N.intensity,j=N.distance,le=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=H.r*Y*L,p+=H.g*Y*L,g+=H.b*Y*L;else if(N.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(N.sh.coefficients[Q],Y);M++}else if(N.isDirectionalLight){const Q=t.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity*L),N.castShadow){const K=N.shadow,D=n.get(N);D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.directionalShadow[_]=D,i.directionalShadowMap[_]=le,i.directionalShadowMatrix[_]=N.shadow.matrix,v++}i.directional[_]=Q,_++}else if(N.isSpotLight){const Q=t.get(N);Q.position.setFromMatrixPosition(N.matrixWorld),Q.color.copy(H).multiplyScalar(Y*L),Q.distance=j,Q.coneCos=Math.cos(N.angle),Q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Q.decay=N.decay,i.spot[f]=Q;const K=N.shadow;if(N.map&&(i.spotLightMap[w]=N.map,w++,K.updateMatrices(N),N.castShadow&&F++),i.spotLightMatrix[f]=K.matrix,N.castShadow){const D=n.get(N);D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.spotShadow[f]=D,i.spotShadowMap[f]=le,z++}f++}else if(N.isRectAreaLight){const Q=t.get(N);Q.color.copy(H).multiplyScalar(Y),Q.halfWidth.set(N.width*.5,0,0),Q.halfHeight.set(0,N.height*.5,0),i.rectArea[b]=Q,b++}else if(N.isPointLight){const Q=t.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity*L),Q.distance=N.distance,Q.decay=N.decay,N.castShadow){const K=N.shadow,D=n.get(N);D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,D.shadowCameraNear=K.camera.near,D.shadowCameraFar=K.camera.far,i.pointShadow[m]=D,i.pointShadowMap[m]=le,i.pointShadowMatrix[m]=N.shadow.matrix,T++}i.point[m]=Q,m++}else if(N.isHemisphereLight){const Q=t.get(N);Q.skyColor.copy(N.color).multiplyScalar(Y*L),Q.groundColor.copy(N.groundColor).multiplyScalar(Y*L),i.hemi[x]=Q,x++}}b>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const G=i.hash;(G.directionalLength!==_||G.pointLength!==m||G.spotLength!==f||G.rectAreaLength!==b||G.hemiLength!==x||G.numDirectionalShadows!==v||G.numPointShadows!==T||G.numSpotShadows!==z||G.numSpotMaps!==w||G.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=b,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=z,i.spotShadowMap.length=z,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=z+w-F,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=M,G.directionalLength=_,G.pointLength=m,G.spotLength=f,G.rectAreaLength=b,G.hemiLength=x,G.numDirectionalShadows=v,G.numPointShadows=T,G.numSpotShadows=z,G.numSpotMaps=w,G.numLightProbes=M,i.version=kg++)}function l(h,u){let d=0,p=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let b=0,x=h.length;b<x;b++){const v=h[b];if(v.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),d++}else if(v.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),g++}else if(v.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),a.identity(),o.copy(v.matrixWorld),o.premultiply(f),a.extractRotation(o),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:i}}function cf(s,e){const t=new Vg(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Gg(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new cf(s,e),t.set(r,[c])):o>=a.length?(c=new cf(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Wg extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xg extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qg=`uniform sampler2D shadow_pass;
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
}`;function Yg(s,e,t){let n=new Su;const i=new re,r=new re,o=new rt,a=new Wg({depthPacking:I1}),c=new Xg,l={},h=t.maxTextureSize,u={[Bi]:mn,[mn]:Bi,[oi]:oi},d=new ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:jg,fragmentShader:qg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new sn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v0;let f=this.type;this.render=function(T,z,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const F=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),G=s.state;G.setBlending(ds),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const ie=f!==wi&&this.type===wi,se=f===wi&&this.type!==wi;for(let N=0,H=T.length;N<H;N++){const Y=T[N],j=Y.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const le=j.getFrameExtents();if(i.multiply(le),r.copy(j.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/le.x),i.x=r.x*le.x,j.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/le.y),i.y=r.y*le.y,j.mapSize.y=r.y)),j.map===null||ie===!0||se===!0){const K=this.type!==wi?{minFilter:kt,magFilter:kt}:{};j.map!==null&&j.map.dispose(),j.map=new er(i.x,i.y,K),j.map.texture.name=Y.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const Q=j.getViewportCount();for(let K=0;K<Q;K++){const D=j.getViewport(K);o.set(r.x*D.x,r.y*D.y,r.x*D.z,r.y*D.w),G.viewport(o),j.updateMatrices(Y,K),n=j.getFrustum(),v(z,w,j.camera,Y,this.type)}j.isPointLightShadow!==!0&&this.type===wi&&b(j,w),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(F,M,L)};function b(T,z){const w=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new er(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(z,null,w,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(z,null,w,p,_,null)}function x(T,z,w,F){let M=null;const L=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=w.isPointLight===!0?c:a,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const G=M.uuid,ie=z.uuid;let se=l[G];se===void 0&&(se={},l[G]=se);let N=se[ie];N===void 0&&(N=M.clone(),se[ie]=N),M=N}if(M.visible=z.visible,M.wireframe=z.wireframe,F===wi?M.side=z.shadowSide!==null?z.shadowSide:z.side:M.side=z.shadowSide!==null?z.shadowSide:u[z.side],M.alphaMap=z.alphaMap,M.alphaTest=z.alphaTest,M.map=z.map,M.clipShadows=z.clipShadows,M.clippingPlanes=z.clippingPlanes,M.clipIntersection=z.clipIntersection,M.displacementMap=z.displacementMap,M.displacementScale=z.displacementScale,M.displacementBias=z.displacementBias,M.wireframeLinewidth=z.wireframeLinewidth,M.linewidth=z.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=s.properties.get(M);G.light=w}return M}function v(T,z,w,F,M){if(T.visible===!1)return;if(T.layers.test(z.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===wi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const ie=e.update(T),se=T.material;if(Array.isArray(se)){const N=ie.groups;for(let H=0,Y=N.length;H<Y;H++){const j=N[H],le=se[j.materialIndex];if(le&&le.visible){const Q=x(T,le,F,M);s.renderBufferDirect(w,null,ie,Q,T,j)}}}else if(se.visible){const N=x(T,se,F,M);s.renderBufferDirect(w,null,ie,N,T,null)}}const G=T.children;for(let ie=0,se=G.length;ie<se;ie++)v(G[ie],z,w,F,M)}}function Kg(s,e,t){const n=t.isWebGL2;function i(){let R=!1;const fe=new rt;let Z=null;const ge=new rt(0,0,0,0);return{setMask:function(pe){Z!==pe&&!R&&(s.colorMask(pe,pe,pe,pe),Z=pe)},setLocked:function(pe){R=pe},setClear:function(pe,te,Le,ke,xt){xt===!0&&(pe*=ke,te*=ke,Le*=ke),fe.set(pe,te,Le,ke),ge.equals(fe)===!1&&(s.clearColor(pe,te,Le,ke),ge.copy(fe))},reset:function(){R=!1,Z=null,ge.set(-1,0,0,0)}}}function r(){let R=!1,fe=null,Z=null,ge=null;return{setTest:function(pe){pe?Ie(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(pe){fe!==pe&&!R&&(s.depthMask(pe),fe=pe)},setFunc:function(pe){if(Z!==pe){switch(pe){case a1:s.depthFunc(s.NEVER);break;case c1:s.depthFunc(s.ALWAYS);break;case l1:s.depthFunc(s.LESS);break;case Ih:s.depthFunc(s.LEQUAL);break;case h1:s.depthFunc(s.EQUAL);break;case u1:s.depthFunc(s.GEQUAL);break;case d1:s.depthFunc(s.GREATER);break;case f1:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=pe}},setLocked:function(pe){R=pe},setClear:function(pe){ge!==pe&&(s.clearDepth(pe),ge=pe)},reset:function(){R=!1,fe=null,Z=null,ge=null}}}function o(){let R=!1,fe=null,Z=null,ge=null,pe=null,te=null,Le=null,ke=null,xt=null;return{setTest:function(ct){R||(ct?Ie(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(ct){fe!==ct&&!R&&(s.stencilMask(ct),fe=ct)},setFunc:function(ct,cn,Pt){(Z!==ct||ge!==cn||pe!==Pt)&&(s.stencilFunc(ct,cn,Pt),Z=ct,ge=cn,pe=Pt)},setOp:function(ct,cn,Pt){(te!==ct||Le!==cn||ke!==Pt)&&(s.stencilOp(ct,cn,Pt),te=ct,Le=cn,ke=Pt)},setLocked:function(ct){R=ct},setClear:function(ct){xt!==ct&&(s.clearStencil(ct),xt=ct)},reset:function(){R=!1,fe=null,Z=null,ge=null,pe=null,te=null,Le=null,ke=null,xt=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,b=null,x=null,v=null,T=null,z=null,w=null,F=null,M=!1,L=null,G=null,ie=null,se=null,N=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(le)[1]),Y=j>=1):le.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),Y=j>=2);let Q=null,K={};const D=s.getParameter(s.SCISSOR_BOX),V=s.getParameter(s.VIEWPORT),_e=new rt().fromArray(D),ve=new rt().fromArray(V);function Me(R,fe,Z,ge){const pe=new Uint8Array(4),te=s.createTexture();s.bindTexture(R,te),s.texParameteri(R,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(R,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<Z;Le++)n&&(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)?s.texImage3D(fe,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,pe):s.texImage2D(fe+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pe);return te}const De={};De[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ie(s.DEPTH_TEST),c.setFunc(Ih),ee(!1),Pe(Vu),Ie(s.CULL_FACE),q(ds);function Ie(R){d[R]!==!0&&(s.enable(R),d[R]=!0)}function ze(R){d[R]!==!1&&(s.disable(R),d[R]=!1)}function Qe(R,fe){return p[R]!==fe?(s.bindFramebuffer(R,fe),p[R]=fe,n&&(R===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=fe),R===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=fe)),!0):!1}function ot(R,fe){let Z=_,ge=!1;if(R)if(Z=g.get(fe),Z===void 0&&(Z=[],g.set(fe,Z)),R.isWebGLMultipleRenderTargets){const pe=R.texture;if(Z.length!==pe.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let te=0,Le=pe.length;te<Le;te++)Z[te]=s.COLOR_ATTACHMENT0+te;Z.length=pe.length,ge=!0}}else Z[0]!==s.COLOR_ATTACHMENT0&&(Z[0]=s.COLOR_ATTACHMENT0,ge=!0);else Z[0]!==s.BACK&&(Z[0]=s.BACK,ge=!0);ge&&(t.isWebGL2?s.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function Oe(R){return m!==R?(s.useProgram(R),m=R,!0):!1}const P={[kr]:s.FUNC_ADD,[$p]:s.FUNC_SUBTRACT,[Zp]:s.FUNC_REVERSE_SUBTRACT};if(n)P[ju]=s.MIN,P[qu]=s.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(P[ju]=R.MIN_EXT,P[qu]=R.MAX_EXT)}const he={[Jp]:s.ZERO,[Qp]:s.ONE,[e1]:s.SRC_COLOR,[b0]:s.SRC_ALPHA,[o1]:s.SRC_ALPHA_SATURATE,[s1]:s.DST_COLOR,[n1]:s.DST_ALPHA,[t1]:s.ONE_MINUS_SRC_COLOR,[M0]:s.ONE_MINUS_SRC_ALPHA,[r1]:s.ONE_MINUS_DST_COLOR,[i1]:s.ONE_MINUS_DST_ALPHA};function q(R,fe,Z,ge,pe,te,Le,ke){if(R===ds){f===!0&&(ze(s.BLEND),f=!1);return}if(f===!1&&(Ie(s.BLEND),f=!0),R!==Kp){if(R!==b||ke!==M){if((x!==kr||z!==kr)&&(s.blendEquation(s.FUNC_ADD),x=kr,z=kr),ke)switch(R){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gu:s.blendFunc(s.ONE,s.ONE);break;case Wu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Wu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}v=null,T=null,w=null,F=null,b=R,M=ke}return}pe=pe||fe,te=te||Z,Le=Le||ge,(fe!==x||pe!==z)&&(s.blendEquationSeparate(P[fe],P[pe]),x=fe,z=pe),(Z!==v||ge!==T||te!==w||Le!==F)&&(s.blendFuncSeparate(he[Z],he[ge],he[te],he[Le]),v=Z,T=ge,w=te,F=Le),b=R,M=!1}function oe(R,fe){R.side===oi?ze(s.CULL_FACE):Ie(s.CULL_FACE);let Z=R.side===mn;fe&&(Z=!Z),ee(Z),R.blending===js&&R.transparent===!1?q(ds):q(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);const ge=R.stencilWrite;l.setTest(ge),ge&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ee(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ie(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function ee(R){L!==R&&(R?s.frontFace(s.CW):s.frontFace(s.CCW),L=R)}function Pe(R){R!==qp?(Ie(s.CULL_FACE),R!==G&&(R===Vu?s.cullFace(s.BACK):R===Yp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),G=R}function be(R){R!==ie&&(Y&&s.lineWidth(R),ie=R)}function Ee(R,fe,Z){R?(Ie(s.POLYGON_OFFSET_FILL),(se!==fe||N!==Z)&&(s.polygonOffset(fe,Z),se=fe,N=Z)):ze(s.POLYGON_OFFSET_FILL)}function Fe(R){R?Ie(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function Ke(R){R===void 0&&(R=s.TEXTURE0+H-1),Q!==R&&(s.activeTexture(R),Q=R)}function ut(R,fe,Z){Z===void 0&&(Q===null?Z=s.TEXTURE0+H-1:Z=Q);let ge=K[Z];ge===void 0&&(ge={type:void 0,texture:void 0},K[Z]=ge),(ge.type!==R||ge.texture!==fe)&&(Q!==Z&&(s.activeTexture(Z),Q=Z),s.bindTexture(R,fe||De[R]),ge.type=R,ge.texture=fe)}function A(){const R=K[Q];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function S(){try{s.compressedTexImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function B(){try{s.compressedTexImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{s.texSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{s.texSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{s.texStorage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{s.texStorage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function I(){try{s.texImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{s.texImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(R){_e.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),_e.copy(R))}function Ve(R){ve.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),ve.copy(R))}function Ae(R,fe){let Z=u.get(fe);Z===void 0&&(Z=new WeakMap,u.set(fe,Z));let ge=Z.get(R);ge===void 0&&(ge=s.getUniformBlockIndex(fe,R.name),Z.set(R,ge))}function ye(R,fe){const ge=u.get(fe).get(R);h.get(fe)!==ge&&(s.uniformBlockBinding(fe,ge,R.__bindingPointIndex),h.set(fe,ge))}function Re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Q=null,K={},p={},g=new WeakMap,_=[],m=null,f=!1,b=null,x=null,v=null,T=null,z=null,w=null,F=null,M=!1,L=null,G=null,ie=null,se=null,N=null,_e.set(0,0,s.canvas.width,s.canvas.height),ve.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ie,disable:ze,bindFramebuffer:Qe,drawBuffers:ot,useProgram:Oe,setBlending:q,setMaterial:oe,setFlipSided:ee,setCullFace:Pe,setLineWidth:be,setPolygonOffset:Ee,setScissorTest:Fe,activeTexture:Ke,bindTexture:ut,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:I,texImage3D:de,updateUBOMapping:Ae,uniformBlockBinding:ye,texStorage2D:ue,texStorage3D:xe,texSubImage2D:ae,texSubImage3D:ne,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ce,scissor:$,viewport:Ve,reset:Re}}function $g(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,S){return f?new OffscreenCanvas(A,S):Aa("canvas")}function x(A,S,B,ae){let ne=1;if((A.width>ae||A.height>ae)&&(ne=ae/Math.max(A.width,A.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ce=S?el:Math.floor,Ce=ce(ne*A.width),ue=ce(ne*A.height);_===void 0&&(_=b(Ce,ue));const xe=B?b(Ce,ue):_;return xe.width=Ce,xe.height=ue,xe.getContext("2d").drawImage(A,0,0,Ce,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ce+"x"+ue+")."),xe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function v(A){return kh(A.width)&&kh(A.height)}function T(A){return a?!1:A.wrapS!==Ln||A.wrapT!==Ln||A.minFilter!==kt&&A.minFilter!==un}function z(A,S){return A.generateMipmaps&&S&&A.minFilter!==kt&&A.minFilter!==un}function w(A){s.generateMipmap(A)}function F(A,S,B,ae,ne=!1){if(a===!1)return S;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce=S;if(S===s.RED&&(B===s.FLOAT&&(ce=s.R32F),B===s.HALF_FLOAT&&(ce=s.R16F),B===s.UNSIGNED_BYTE&&(ce=s.R8)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(ce=s.R8UI),B===s.UNSIGNED_SHORT&&(ce=s.R16UI),B===s.UNSIGNED_INT&&(ce=s.R32UI),B===s.BYTE&&(ce=s.R8I),B===s.SHORT&&(ce=s.R16I),B===s.INT&&(ce=s.R32I)),S===s.RG&&(B===s.FLOAT&&(ce=s.RG32F),B===s.HALF_FLOAT&&(ce=s.RG16F),B===s.UNSIGNED_BYTE&&(ce=s.RG8)),S===s.RGBA){const Ce=ne?$c:at.getTransfer(ae);B===s.FLOAT&&(ce=s.RGBA32F),B===s.HALF_FLOAT&&(ce=s.RGBA16F),B===s.UNSIGNED_BYTE&&(ce=Ce===gt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function M(A,S,B){return z(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==kt&&A.minFilter!==un?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function L(A){return A===kt||A===Oh||A===Gc?s.NEAREST:s.LINEAR}function G(A){const S=A.target;S.removeEventListener("dispose",G),se(S),S.isVideoTexture&&g.delete(S)}function ie(A){const S=A.target;S.removeEventListener("dispose",ie),H(S)}function se(A){const S=n.get(A);if(S.__webglInit===void 0)return;const B=A.source,ae=m.get(B);if(ae){const ne=ae[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&N(A),Object.keys(ae).length===0&&m.delete(B)}n.remove(A)}function N(A){const S=n.get(A);s.deleteTexture(S.__webglTexture);const B=A.source,ae=m.get(B);delete ae[S.__cacheKey],o.memory.textures--}function H(A){const S=A.texture,B=n.get(A),ae=n.get(S);if(ae.__webglTexture!==void 0&&(s.deleteTexture(ae.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(B.__webglFramebuffer[ne]))for(let ce=0;ce<B.__webglFramebuffer[ne].length;ce++)s.deleteFramebuffer(B.__webglFramebuffer[ne][ce]);else s.deleteFramebuffer(B.__webglFramebuffer[ne]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[ne])}else{if(Array.isArray(B.__webglFramebuffer))for(let ne=0;ne<B.__webglFramebuffer.length;ne++)s.deleteFramebuffer(B.__webglFramebuffer[ne]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ne=0;ne<B.__webglColorRenderbuffer.length;ne++)B.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[ne]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,ce=S.length;ne<ce;ne++){const Ce=n.get(S[ne]);Ce.__webglTexture&&(s.deleteTexture(Ce.__webglTexture),o.memory.textures--),n.remove(S[ne])}n.remove(S),n.remove(A)}let Y=0;function j(){Y=0}function le(){const A=Y;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),Y+=1,A}function Q(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function K(A,S){const B=n.get(A);if(A.isVideoTexture&&Ke(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const ae=A.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(B,A,S);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function D(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){Qe(B,A,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function V(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){Qe(B,A,S);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function _e(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){ot(B,A,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}const ve={[ao]:s.REPEAT,[Ln]:s.CLAMP_TO_EDGE,[Kc]:s.MIRRORED_REPEAT},Me={[kt]:s.NEAREST,[Oh]:s.NEAREST_MIPMAP_NEAREST,[Gc]:s.NEAREST_MIPMAP_LINEAR,[un]:s.LINEAR,[w0]:s.LINEAR_MIPMAP_NEAREST,[Qs]:s.LINEAR_MIPMAP_LINEAR},De={[O1]:s.NEVER,[G1]:s.ALWAYS,[U1]:s.LESS,[B1]:s.LEQUAL,[F1]:s.EQUAL,[V1]:s.GEQUAL,[k1]:s.GREATER,[H1]:s.NOTEQUAL};function Ie(A,S,B){if(B?(s.texParameteri(A,s.TEXTURE_WRAP_S,ve[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,ve[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,ve[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Me[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Me[S.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==Ln||S.wrapT!==Ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,L(S.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,L(S.minFilter)),S.minFilter!==kt&&S.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,De[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===kt||S.minFilter!==Gc&&S.minFilter!==Qs||S.type===Li&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ta&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(A,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ze(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",G));const ae=S.source;let ne=m.get(ae);ne===void 0&&(ne={},m.set(ae,ne));const ce=Q(S);if(ce!==A.__cacheKey){ne[ce]===void 0&&(ne[ce]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[ce].usedTimes++;const Ce=ne[A.__cacheKey];Ce!==void 0&&(ne[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&N(S)),A.__cacheKey=ce,A.__webglTexture=ne[ce].texture}return B}function Qe(A,S,B){let ae=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ae=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ae=s.TEXTURE_3D);const ne=ze(A,S),ce=S.source;t.bindTexture(ae,A.__webglTexture,s.TEXTURE0+B);const Ce=n.get(ce);if(ce.version!==Ce.__version||ne===!0){t.activeTexture(s.TEXTURE0+B);const ue=at.getPrimaries(at.workingColorSpace),xe=S.colorSpace===Rn?null:at.getPrimaries(S.colorSpace),I=S.colorSpace===Rn||ue===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);const de=T(S)&&v(S.image)===!1;let $=x(S.image,de,!1,h);$=ut(S,$);const Ve=v($)||a,Ae=r.convert(S.format,S.colorSpace);let ye=r.convert(S.type),Re=F(S.internalFormat,Ae,ye,S.colorSpace,S.isVideoTexture);Ie(ae,S,Ve);let R;const fe=S.mipmaps,Z=a&&S.isVideoTexture!==!0,ge=Ce.__version===void 0||ne===!0,pe=M(S,$,Ve);if(S.isDepthTexture)Re=s.DEPTH_COMPONENT,a?S.type===Li?Re=s.DEPTH_COMPONENT32F:S.type===os?Re=s.DEPTH_COMPONENT24:S.type===qs?Re=s.DEPTH24_STENCIL8:Re=s.DEPTH_COMPONENT16:S.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ys&&Re===s.DEPTH_COMPONENT&&S.type!==gu&&S.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=os,ye=r.convert(S.type)),S.format===co&&Re===s.DEPTH_COMPONENT&&(Re=s.DEPTH_STENCIL,S.type!==qs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=qs,ye=r.convert(S.type))),ge&&(Z?t.texStorage2D(s.TEXTURE_2D,1,Re,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,Re,$.width,$.height,0,Ae,ye,null));else if(S.isDataTexture)if(fe.length>0&&Ve){Z&&ge&&t.texStorage2D(s.TEXTURE_2D,pe,Re,fe[0].width,fe[0].height);for(let te=0,Le=fe.length;te<Le;te++)R=fe[te],Z?t.texSubImage2D(s.TEXTURE_2D,te,0,0,R.width,R.height,Ae,ye,R.data):t.texImage2D(s.TEXTURE_2D,te,Re,R.width,R.height,0,Ae,ye,R.data);S.generateMipmaps=!1}else Z?(ge&&t.texStorage2D(s.TEXTURE_2D,pe,Re,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,$.width,$.height,Ae,ye,$.data)):t.texImage2D(s.TEXTURE_2D,0,Re,$.width,$.height,0,Ae,ye,$.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Z&&ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,Re,fe[0].width,fe[0].height,$.depth);for(let te=0,Le=fe.length;te<Le;te++)R=fe[te],S.format!==Cn?Ae!==null?Z?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,R.width,R.height,$.depth,Ae,R.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,Re,R.width,R.height,$.depth,0,R.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,R.width,R.height,$.depth,Ae,ye,R.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,Re,R.width,R.height,$.depth,0,Ae,ye,R.data)}else{Z&&ge&&t.texStorage2D(s.TEXTURE_2D,pe,Re,fe[0].width,fe[0].height);for(let te=0,Le=fe.length;te<Le;te++)R=fe[te],S.format!==Cn?Ae!==null?Z?t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,R.width,R.height,Ae,R.data):t.compressedTexImage2D(s.TEXTURE_2D,te,Re,R.width,R.height,0,R.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?t.texSubImage2D(s.TEXTURE_2D,te,0,0,R.width,R.height,Ae,ye,R.data):t.texImage2D(s.TEXTURE_2D,te,Re,R.width,R.height,0,Ae,ye,R.data)}else if(S.isDataArrayTexture)Z?(ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,Re,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Ae,ye,$.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,$.width,$.height,$.depth,0,Ae,ye,$.data);else if(S.isData3DTexture)Z?(ge&&t.texStorage3D(s.TEXTURE_3D,pe,Re,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Ae,ye,$.data)):t.texImage3D(s.TEXTURE_3D,0,Re,$.width,$.height,$.depth,0,Ae,ye,$.data);else if(S.isFramebufferTexture){if(ge)if(Z)t.texStorage2D(s.TEXTURE_2D,pe,Re,$.width,$.height);else{let te=$.width,Le=$.height;for(let ke=0;ke<pe;ke++)t.texImage2D(s.TEXTURE_2D,ke,Re,te,Le,0,Ae,ye,null),te>>=1,Le>>=1}}else if(fe.length>0&&Ve){Z&&ge&&t.texStorage2D(s.TEXTURE_2D,pe,Re,fe[0].width,fe[0].height);for(let te=0,Le=fe.length;te<Le;te++)R=fe[te],Z?t.texSubImage2D(s.TEXTURE_2D,te,0,0,Ae,ye,R):t.texImage2D(s.TEXTURE_2D,te,Re,Ae,ye,R);S.generateMipmaps=!1}else Z?(ge&&t.texStorage2D(s.TEXTURE_2D,pe,Re,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,ye,$)):t.texImage2D(s.TEXTURE_2D,0,Re,Ae,ye,$);z(S,Ve)&&w(ae),Ce.__version=ce.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ot(A,S,B){if(S.image.length!==6)return;const ae=ze(A,S),ne=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);const ce=n.get(ne);if(ne.version!==ce.__version||ae===!0){t.activeTexture(s.TEXTURE0+B);const Ce=at.getPrimaries(at.workingColorSpace),ue=S.colorSpace===Rn?null:at.getPrimaries(S.colorSpace),xe=S.colorSpace===Rn||Ce===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const I=S.isCompressedTexture||S.image[0].isCompressedTexture,de=S.image[0]&&S.image[0].isDataTexture,$=[];for(let te=0;te<6;te++)!I&&!de?$[te]=x(S.image[te],!1,!0,l):$[te]=de?S.image[te].image:S.image[te],$[te]=ut(S,$[te]);const Ve=$[0],Ae=v(Ve)||a,ye=r.convert(S.format,S.colorSpace),Re=r.convert(S.type),R=F(S.internalFormat,ye,Re,S.colorSpace),fe=a&&S.isVideoTexture!==!0,Z=ce.__version===void 0||ae===!0;let ge=M(S,Ve,Ae);Ie(s.TEXTURE_CUBE_MAP,S,Ae);let pe;if(I){fe&&Z&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,R,Ve.width,Ve.height);for(let te=0;te<6;te++){pe=$[te].mipmaps;for(let Le=0;Le<pe.length;Le++){const ke=pe[Le];S.format!==Cn?ye!==null?fe?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,0,0,ke.width,ke.height,ye,ke.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,R,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,0,0,ke.width,ke.height,ye,Re,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,R,ke.width,ke.height,0,ye,Re,ke.data)}}}else{pe=S.mipmaps,fe&&Z&&(pe.length>0&&ge++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,R,$[0].width,$[0].height));for(let te=0;te<6;te++)if(de){fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,$[te].width,$[te].height,ye,Re,$[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,R,$[te].width,$[te].height,0,ye,Re,$[te].data);for(let Le=0;Le<pe.length;Le++){const xt=pe[Le].image[te].image;fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,0,0,xt.width,xt.height,ye,Re,xt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,R,xt.width,xt.height,0,ye,Re,xt.data)}}else{fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ye,Re,$[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,R,ye,Re,$[te]);for(let Le=0;Le<pe.length;Le++){const ke=pe[Le];fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,0,0,ye,Re,ke.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,R,ye,Re,ke.image[te])}}}z(S,Ae)&&w(s.TEXTURE_CUBE_MAP),ce.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Oe(A,S,B,ae,ne,ce){const Ce=r.convert(B.format,B.colorSpace),ue=r.convert(B.type),xe=F(B.internalFormat,Ce,ue,B.colorSpace);if(!n.get(S).__hasExternalTextures){const de=Math.max(1,S.width>>ce),$=Math.max(1,S.height>>ce);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,ce,xe,de,$,S.depth,0,Ce,ue,null):t.texImage2D(ne,ce,xe,de,$,0,Ce,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Fe(S)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,ne,n.get(B).__webglTexture,0,Ee(S)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ae,ne,n.get(B).__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function P(A,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let ae=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||Fe(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Li?ae=s.DEPTH_COMPONENT32F:ne.type===os&&(ae=s.DEPTH_COMPONENT24));const ce=Ee(S);Fe(S)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,ae,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,ae,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,ae,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const ae=Ee(S);B&&Fe(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,s.DEPTH24_STENCIL8,S.width,S.height):Fe(S)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const ae=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<ae.length;ne++){const ce=ae[ne],Ce=r.convert(ce.format,ce.colorSpace),ue=r.convert(ce.type),xe=F(ce.internalFormat,Ce,ue,ce.colorSpace),I=Ee(S);B&&Fe(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,I,xe,S.width,S.height):Fe(S)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I,xe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,xe,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function he(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const ae=n.get(S.depthTexture).__webglTexture,ne=Ee(S);if(S.depthTexture.format===Ys)Fe(S)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0);else if(S.depthTexture.format===co)Fe(S)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function q(A){const S=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");he(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ae]),S.__webglDepthbuffer[ae]=s.createRenderbuffer(),P(S.__webglDepthbuffer[ae],A,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),P(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(A,S,B){const ae=n.get(A);S!==void 0&&Oe(ae.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&q(A)}function ee(A){const S=A.texture,B=n.get(A),ae=n.get(S);A.addEventListener("dispose",ie),A.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture()),ae.__version=S.version,o.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,ce=A.isWebGLMultipleRenderTargets===!0,Ce=v(A)||a;if(ne){B.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ue]=[];for(let xe=0;xe<S.mipmaps.length;xe++)B.__webglFramebuffer[ue][xe]=s.createFramebuffer()}else B.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)B.__webglFramebuffer[ue]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(ce)if(i.drawBuffers){const ue=A.texture;for(let xe=0,I=ue.length;xe<I;xe++){const de=n.get(ue[xe]);de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Fe(A)===!1){const ue=ce?S:[S];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xe=0;xe<ue.length;xe++){const I=ue[xe];B.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[xe]);const de=r.convert(I.format,I.colorSpace),$=r.convert(I.type),Ve=F(I.internalFormat,de,$,I.colorSpace,A.isXRRenderTarget===!0),Ae=Ee(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,Ve,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,B.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),P(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ne){t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),Ie(s.TEXTURE_CUBE_MAP,S,Ce);for(let ue=0;ue<6;ue++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)Oe(B.__webglFramebuffer[ue][xe],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,xe);else Oe(B.__webglFramebuffer[ue],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);z(S,Ce)&&w(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const ue=A.texture;for(let xe=0,I=ue.length;xe<I;xe++){const de=ue[xe],$=n.get(de);t.bindTexture(s.TEXTURE_2D,$.__webglTexture),Ie(s.TEXTURE_2D,de,Ce),Oe(B.__webglFramebuffer,A,de,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,0),z(de,Ce)&&w(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ue=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ae.__webglTexture),Ie(ue,S,Ce),a&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)Oe(B.__webglFramebuffer[xe],A,S,s.COLOR_ATTACHMENT0,ue,xe);else Oe(B.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,ue,0);z(S,Ce)&&w(ue),t.unbindTexture()}A.depthBuffer&&q(A)}function Pe(A){const S=v(A)||a,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ae=0,ne=B.length;ae<ne;ae++){const ce=B[ae];if(z(ce,S)){const Ce=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ue=n.get(ce).__webglTexture;t.bindTexture(Ce,ue),w(Ce),t.unbindTexture()}}}function be(A){if(a&&A.samples>0&&Fe(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,ae=A.height;let ne=s.COLOR_BUFFER_BIT;const ce=[],Ce=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=n.get(A),xe=A.isWebGLMultipleRenderTargets===!0;if(xe)for(let I=0;I<S.length;I++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+I,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+I,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let I=0;I<S.length;I++){ce.push(s.COLOR_ATTACHMENT0+I),A.depthBuffer&&ce.push(Ce);const de=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(de===!1&&(A.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),xe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[I]),de===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ce]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ce])),xe){const $=n.get(S[I]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0)}s.blitFramebuffer(0,0,B,ae,0,0,B,ae,ne,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let I=0;I<S.length;I++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+I,s.RENDERBUFFER,ue.__webglColorRenderbuffer[I]);const de=n.get(S[I]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+I,s.TEXTURE_2D,de,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Ee(A){return Math.min(u,A.samples)}function Fe(A){const S=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ke(A){const S=o.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function ut(A,S){const B=A.colorSpace,ae=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Bh||B!==Yt&&B!==Rn&&(at.getTransfer(B)===gt?a===!1?e.has("EXT_sRGB")===!0&&ae===Cn?(A.format=Bh,A.minFilter=un,A.generateMipmaps=!1):S=F0.sRGBToLinear(S):(ae!==Cn||ne!==ps)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=le,this.resetTextureUnits=j,this.setTexture2D=K,this.setTexture2DArray=D,this.setTexture3D=V,this.setTextureCube=_e,this.rebindTextures=oe,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Fe}function Zg(s,e,t){const n=t.isWebGL2;function i(r,o=Rn){let a;const c=at.getTransfer(o);if(r===ps)return s.UNSIGNED_BYTE;if(r===L0)return s.UNSIGNED_SHORT_4_4_4_4;if(r===C0)return s.UNSIGNED_SHORT_5_5_5_1;if(r===S1)return s.BYTE;if(r===b1)return s.SHORT;if(r===gu)return s.UNSIGNED_SHORT;if(r===A0)return s.INT;if(r===os)return s.UNSIGNED_INT;if(r===Li)return s.FLOAT;if(r===Ta)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===M1)return s.ALPHA;if(r===Cn)return s.RGBA;if(r===E1)return s.LUMINANCE;if(r===T1)return s.LUMINANCE_ALPHA;if(r===Ys)return s.DEPTH_COMPONENT;if(r===co)return s.DEPTH_STENCIL;if(r===Bh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===w1)return s.RED;if(r===R0)return s.RED_INTEGER;if(r===A1)return s.RG;if(r===P0)return s.RG_INTEGER;if(r===z0)return s.RGBA_INTEGER;if(r===Il||r===Nl||r===Dl||r===Ol)if(c===gt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Il)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ol)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Il)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ol)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yu||r===Ku||r===$u||r===Zu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Yu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ku)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$u)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===L1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ju||r===Qu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ju)return c===gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Qu)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ed||r===td||r===nd||r===id||r===sd||r===rd||r===od||r===ad||r===cd||r===ld||r===hd||r===ud||r===dd||r===fd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ed)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===td)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nd)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===id)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sd)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rd)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===od)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ad)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cd)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ld)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hd)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ud)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dd)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fd)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ul||r===pd||r===md)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ul)return c===gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===pd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===md)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===C1||r===gd||r===_d||r===xd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ul)return a.COMPRESSED_RED_RGTC1_EXT;if(r===gd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_d)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qs?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Jg extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vs extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qg={type:"move"};class oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class e9 extends jt{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Ys,h!==Ys&&h!==co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ys&&(n=os),n===void 0&&h===co&&(n=qs),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=c!==void 0?c:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class t9 extends Ss{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const b=[],x=[],v=new nn;v.layers.enable(1),v.viewport=new rt;const T=new nn;T.layers.enable(2),T.viewport=new rt;const z=[v,T],w=new Jg;w.layers.enable(1),w.layers.enable(2);let F=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let V=b[D];return V===void 0&&(V=new oh,b[D]=V),V.getTargetRaySpace()},this.getControllerGrip=function(D){let V=b[D];return V===void 0&&(V=new oh,b[D]=V),V.getGripSpace()},this.getHand=function(D){let V=b[D];return V===void 0&&(V=new oh,b[D]=V),V.getHandSpace()};function L(D){const V=x.indexOf(D.inputSource);if(V===-1)return;const _e=b[V];_e!==void 0&&(_e.update(D.inputSource,D.frame,l||o),_e.dispatchEvent({type:D.type,data:D.inputSource}))}function G(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",ie);for(let D=0;D<b.length;D++){const V=x[D];V!==null&&(x[D]=null,b[D].disconnect(V))}F=null,M=null,e.setRenderTarget(m),p=null,d=null,u=null,i=null,f=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",G),i.addEventListener("inputsourceschange",ie),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:p}),f=new er(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:ps,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let V=null,_e=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=_.stencil?co:Ys,_e=_.stencil?qs:os);const Me={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Me),i.updateRenderState({layers:[d]}),f=new er(d.textureWidth,d.textureHeight,{format:Cn,type:ps,depthTexture:new e9(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const De=e.properties.get(f);De.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function ie(D){for(let V=0;V<D.removed.length;V++){const _e=D.removed[V],ve=x.indexOf(_e);ve>=0&&(x[ve]=null,b[ve].disconnect(_e))}for(let V=0;V<D.added.length;V++){const _e=D.added[V];let ve=x.indexOf(_e);if(ve===-1){for(let De=0;De<b.length;De++)if(De>=x.length){x.push(_e),ve=De;break}else if(x[De]===null){x[De]=_e,ve=De;break}if(ve===-1)break}const Me=b[ve];Me&&Me.connect(_e)}}const se=new C,N=new C;function H(D,V,_e){se.setFromMatrixPosition(V.matrixWorld),N.setFromMatrixPosition(_e.matrixWorld);const ve=se.distanceTo(N),Me=V.projectionMatrix.elements,De=_e.projectionMatrix.elements,Ie=Me[14]/(Me[10]-1),ze=Me[14]/(Me[10]+1),Qe=(Me[9]+1)/Me[5],ot=(Me[9]-1)/Me[5],Oe=(Me[8]-1)/Me[0],P=(De[8]+1)/De[0],he=Ie*Oe,q=Ie*P,oe=ve/(-Oe+P),ee=oe*-Oe;V.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(ee),D.translateZ(oe),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const Pe=Ie+oe,be=ze+oe,Ee=he-ee,Fe=q+(ve-ee),Ke=Qe*ze/be*Pe,ut=ot*ze/be*Pe;D.projectionMatrix.makePerspective(Ee,Fe,Ke,ut,Pe,be),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function Y(D,V){V===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(V.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;w.near=T.near=v.near=D.near,w.far=T.far=v.far=D.far,(F!==w.near||M!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),F=w.near,M=w.far);const V=D.parent,_e=w.cameras;Y(w,V);for(let ve=0;ve<_e.length;ve++)Y(_e[ve],V);_e.length===2?H(w,v,T):w.projectionMatrix.copy(v.projectionMatrix),j(D,w,V)};function j(D,V,_e){_e===null?D.matrix.copy(V.matrixWorld):(D.matrix.copy(_e.matrixWorld),D.matrix.invert(),D.matrix.multiply(V.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(V.projectionMatrix),D.projectionMatrixInverse.copy(V.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=ho*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(D){c=D,d!==null&&(d.fixedFoveation=D),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=D)};let le=null;function Q(D,V){if(h=V.getViewerPose(l||o),g=V,h!==null){const _e=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ve=!1;_e.length!==w.cameras.length&&(w.cameras.length=0,ve=!0);for(let Me=0;Me<_e.length;Me++){const De=_e[Me];let Ie=null;if(p!==null)Ie=p.getViewport(De);else{const Qe=u.getViewSubImage(d,De);Ie=Qe.viewport,Me===0&&(e.setRenderTargetTextures(f,Qe.colorTexture,d.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(f))}let ze=z[Me];ze===void 0&&(ze=new nn,ze.layers.enable(Me),ze.viewport=new rt,z[Me]=ze),ze.matrix.fromArray(De.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(De.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Me===0&&(w.matrix.copy(ze.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ve===!0&&w.cameras.push(ze)}}for(let _e=0;_e<b.length;_e++){const ve=x[_e],Me=b[_e];ve!==null&&Me!==void 0&&Me.update(ve,V,l||o)}le&&le(D,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}const K=new q0;K.setAnimationLoop(Q),this.setAnimationLoop=function(D){le=D},this.dispose=function(){}}}function n9(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,W0(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,b,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,b,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===mn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===mn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=e.get(f).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===mn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function i9(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,x){const v=x.program;n.uniformBlockBinding(b,v)}function l(b,x){let v=i[b.id];v===void 0&&(g(b),v=h(b),i[b.id]=v,b.addEventListener("dispose",m));const T=x.program;n.updateUBOMapping(b,T);const z=e.render.frame;r[b.id]!==z&&(d(b),r[b.id]=z)}function h(b){const x=u();b.__bindingPointIndex=x;const v=s.createBuffer(),T=b.__size,z=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,T,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=i[b.id],v=b.uniforms,T=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let z=0,w=v.length;z<w;z++){const F=v[z];if(p(F,z,T)===!0){const M=F.__offset,L=Array.isArray(F.value)?F.value:[F.value];let G=0;for(let ie=0;ie<L.length;ie++){const se=L[ie],N=_(se);typeof se=="number"?(F.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,M+G,F.__data)):se.isMatrix3?(F.__data[0]=se.elements[0],F.__data[1]=se.elements[1],F.__data[2]=se.elements[2],F.__data[3]=se.elements[0],F.__data[4]=se.elements[3],F.__data[5]=se.elements[4],F.__data[6]=se.elements[5],F.__data[7]=se.elements[0],F.__data[8]=se.elements[6],F.__data[9]=se.elements[7],F.__data[10]=se.elements[8],F.__data[11]=se.elements[0]):(se.toArray(F.__data,G),G+=N.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,F.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,x,v){const T=b.value;if(v[x]===void 0){if(typeof T=="number")v[x]=T;else{const z=Array.isArray(T)?T:[T],w=[];for(let F=0;F<z.length;F++)w.push(z[F].clone());v[x]=w}return!0}else if(typeof T=="number"){if(v[x]!==T)return v[x]=T,!0}else{const z=Array.isArray(v[x])?v[x]:[v[x]],w=Array.isArray(T)?T:[T];for(let F=0;F<z.length;F++){const M=z[F];if(M.equals(w[F])===!1)return M.copy(w[F]),!0}}return!1}function g(b){const x=b.uniforms;let v=0;const T=16;let z=0;for(let w=0,F=x.length;w<F;w++){const M=x[w],L={boundary:0,storage:0},G=Array.isArray(M.value)?M.value:[M.value];for(let ie=0,se=G.length;ie<se;ie++){const N=G[ie],H=_(N);L.boundary+=H.boundary,L.storage+=H.storage}if(M.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=v,w>0){z=v%T;const ie=T-z;z!==0&&ie-L.boundary<0&&(v+=T-z,M.__offset=v)}v+=L.storage}return z=v%T,z>0&&(v+=T-z),b.__size=v,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function f(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}class vl{constructor(e={}){const{canvas:t=im(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=fs,this.toneMappingExposure=1;const x=this;let v=!1,T=0,z=0,w=null,F=-1,M=null;const L=new rt,G=new rt;let ie=null;const se=new Be(0);let N=0,H=t.width,Y=t.height,j=1,le=null,Q=null;const K=new rt(0,0,H,Y),D=new rt(0,0,H,Y);let V=!1;const _e=new Su;let ve=!1,Me=!1,De=null;const Ie=new Ye,ze=new re,Qe=new C,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return w===null?j:1}let P=n;function he(E,O){for(let W=0;W<E.length;W++){const U=E[W],X=t.getContext(U,O);if(X!==null)return X}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mu}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",ge,!1),P===null){const O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),P=he(O,E),P===null)throw he(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let q,oe,ee,Pe,be,Ee,Fe,Ke,ut,A,S,B,ae,ne,ce,Ce,ue,xe,I,de,$,Ve,Ae,ye;function Re(){q=new p4(P),oe=new c4(P,q,e),q.init(oe),Ve=new Zg(P,q,oe),ee=new Kg(P,q,oe),Pe=new _4(P),be=new Dg,Ee=new $g(P,q,ee,be,oe,Ve,Pe),Fe=new h4(x),Ke=new f4(x),ut=new Am(P,oe),Ae=new o4(P,q,ut,oe),A=new m4(P,ut,Pe,Ae),S=new S4(P,A,ut,Pe),I=new v4(P,oe,Ee),Ce=new l4(be),B=new Ng(x,Fe,Ke,q,oe,Ae,Ce),ae=new n9(x,be),ne=new Ug,ce=new Gg(q,oe),xe=new r4(x,Fe,Ke,ee,S,d,c),ue=new Yg(x,S,oe),ye=new i9(P,Pe,oe,ee),de=new a4(P,q,Pe,oe),$=new g4(P,q,Pe,oe),Pe.programs=B.programs,x.capabilities=oe,x.extensions=q,x.properties=be,x.renderLists=ne,x.shadowMap=ue,x.state=ee,x.info=Pe}Re();const R=new t9(x,P);this.xr=R,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(H,Y,!1))},this.getSize=function(E){return E.set(H,Y)},this.setSize=function(E,O,W=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,Y=O,t.width=Math.floor(E*j),t.height=Math.floor(O*j),W===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(H*j,Y*j).floor()},this.setDrawingBufferSize=function(E,O,W){H=E,Y=O,j=W,t.width=Math.floor(E*W),t.height=Math.floor(O*W),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,O,W,U){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,O,W,U),ee.viewport(L.copy(K).multiplyScalar(j).floor())},this.getScissor=function(E){return E.copy(D)},this.setScissor=function(E,O,W,U){E.isVector4?D.set(E.x,E.y,E.z,E.w):D.set(E,O,W,U),ee.scissor(G.copy(D).multiplyScalar(j).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(E){ee.setScissorTest(V=E)},this.setOpaqueSort=function(E){le=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(E=!0,O=!0,W=!0){let U=0;if(E){let X=!1;if(w!==null){const Te=w.texture.format;X=Te===z0||Te===P0||Te===R0}if(X){const Te=w.texture.type,Ue=Te===ps||Te===os||Te===gu||Te===qs||Te===L0||Te===C0,Ge=xe.getClearColor(),We=xe.getClearAlpha(),$e=Ge.r,Xe=Ge.g,qe=Ge.b;Ue?(p[0]=$e,p[1]=Xe,p[2]=qe,p[3]=We,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=$e,g[1]=Xe,g[2]=qe,g[3]=We,P.clearBufferiv(P.COLOR,0,g))}else U|=P.COLOR_BUFFER_BIT}O&&(U|=P.DEPTH_BUFFER_BIT),W&&(U|=P.STENCIL_BUFFER_BIT),P.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ne.dispose(),ce.dispose(),be.dispose(),Fe.dispose(),Ke.dispose(),S.dispose(),Ae.dispose(),ye.dispose(),B.dispose(),R.dispose(),R.removeEventListener("sessionstart",ct),R.removeEventListener("sessionend",cn),De&&(De.dispose(),De=null),Pt.stop()};function fe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const E=Pe.autoReset,O=ue.enabled,W=ue.autoUpdate,U=ue.needsUpdate,X=ue.type;Re(),Pe.autoReset=E,ue.enabled=O,ue.autoUpdate=W,ue.needsUpdate=U,ue.type=X}function ge(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pe(E){const O=E.target;O.removeEventListener("dispose",pe),te(O)}function te(E){Le(E),be.remove(E)}function Le(E){const O=be.get(E).programs;O!==void 0&&(O.forEach(function(W){B.releaseProgram(W)}),E.isShaderMaterial&&B.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,W,U,X,Te){O===null&&(O=ot);const Ue=X.isMesh&&X.matrixWorld.determinant()<0,Ge=Oo(E,O,W,U,X);ee.setMaterial(U,Ue);let We=W.index,$e=1;if(U.wireframe===!0){if(We=A.getWireframeAttribute(W),We===void 0)return;$e=2}const Xe=W.drawRange,qe=W.attributes.position;let yt=Xe.start*$e,pt=(Xe.start+Xe.count)*$e;Te!==null&&(yt=Math.max(yt,Te.start*$e),pt=Math.min(pt,(Te.start+Te.count)*$e)),We!==null?(yt=Math.max(yt,0),pt=Math.min(pt,We.count)):qe!=null&&(yt=Math.max(yt,0),pt=Math.min(pt,qe.count));const Kt=pt-yt;if(Kt<0||Kt===1/0)return;Ae.setup(X,U,Ge,W,We);let yn,vt=de;if(We!==null&&(yn=ut.get(We),vt=$,vt.setIndex(yn)),X.isMesh)U.wireframe===!0?(ee.setLineWidth(U.wireframeLinewidth*Oe()),vt.setMode(P.LINES)):vt.setMode(P.TRIANGLES);else if(X.isLine){let Ze=U.linewidth;Ze===void 0&&(Ze=1),ee.setLineWidth(Ze*Oe()),X.isLineSegments?vt.setMode(P.LINES):X.isLineLoop?vt.setMode(P.LINE_LOOP):vt.setMode(P.LINE_STRIP)}else X.isPoints?vt.setMode(P.POINTS):X.isSprite&&vt.setMode(P.TRIANGLES);if(X.isInstancedMesh)vt.renderInstances(yt,Kt,X.count);else if(W.isInstancedBufferGeometry){const Ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ji=Math.min(W.instanceCount,Ze);vt.renderInstances(yt,Kt,ji)}else vt.render(yt,Kt)},this.compile=function(E,O){function W(U,X,Te){U.transparent===!0&&U.side===oi&&U.forceSinglePass===!1?(U.side=mn,U.needsUpdate=!0,Xi(U,X,Te),U.side=Bi,U.needsUpdate=!0,Xi(U,X,Te),U.side=oi):Xi(U,X,Te)}m=ce.get(E),m.init(),b.push(m),E.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights(x._useLegacyLights),E.traverse(function(U){const X=U.material;if(X)if(Array.isArray(X))for(let Te=0;Te<X.length;Te++){const Ue=X[Te];W(Ue,E,U)}else W(X,E,U)}),b.pop(),m=null};let ke=null;function xt(E){ke&&ke(E)}function ct(){Pt.stop()}function cn(){Pt.start()}const Pt=new q0;Pt.setAnimationLoop(xt),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(E){ke=E,R.setAnimationLoop(E),E===null?Pt.stop():Pt.start()},R.addEventListener("sessionstart",ct),R.addEventListener("sessionend",cn),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(O),O=R.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,O,w),m=ce.get(E,b.length),m.init(),b.push(m),Ie.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),_e.setFromProjectionMatrix(Ie),Me=this.localClippingEnabled,ve=Ce.init(this.clippingPlanes,Me),_=ne.get(E,f.length),_.init(),f.push(_),fr(E,O,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(le,Q),this.info.render.frame++,ve===!0&&Ce.beginShadows();const W=m.state.shadowsArray;if(ue.render(W,E,O),ve===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),xe.render(_,E),m.setupLights(x._useLegacyLights),O.isArrayCamera){const U=O.cameras;for(let X=0,Te=U.length;X<Te;X++){const Ue=U[X];Io(_,E,Ue,Ue.viewport)}}else Io(_,E,O);w!==null&&(Ee.updateMultisampleRenderTarget(w),Ee.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,O),Ae.resetDefaultState(),F=-1,M=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function fr(E,O,W,U){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||_e.intersectsSprite(E)){U&&Qe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ie);const Ue=S.update(E),Ge=E.material;Ge.visible&&_.push(E,Ue,Ge,W,Qe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||_e.intersectsObject(E))){const Ue=S.update(E),Ge=E.material;if(U&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Qe.copy(E.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Qe.copy(Ue.boundingSphere.center)),Qe.applyMatrix4(E.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ge)){const We=Ue.groups;for(let $e=0,Xe=We.length;$e<Xe;$e++){const qe=We[$e],yt=Ge[qe.materialIndex];yt&&yt.visible&&_.push(E,Ue,yt,W,Qe.z,qe)}}else Ge.visible&&_.push(E,Ue,Ge,W,Qe.z,null)}}const Te=E.children;for(let Ue=0,Ge=Te.length;Ue<Ge;Ue++)fr(Te[Ue],O,W,U)}function Io(E,O,W,U){const X=E.opaque,Te=E.transmissive,Ue=E.transparent;m.setupLightsView(W),ve===!0&&Ce.setGlobalState(x.clippingPlanes,W),Te.length>0&&Xa(X,Te,O,W),U&&ee.viewport(L.copy(U)),X.length>0&&Ls(X,O,W),Te.length>0&&Ls(Te,O,W),Ue.length>0&&Ls(Ue,O,W),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Xa(E,O,W,U){const X=oe.isWebGL2;De===null&&(De=new er(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")?Ta:ps,minFilter:Qs,samples:X?4:0})),x.getDrawingBufferSize(ze),X?De.setSize(ze.x,ze.y):De.setSize(el(ze.x),el(ze.y));const Te=x.getRenderTarget();x.setRenderTarget(De),x.getClearColor(se),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();const Ue=x.toneMapping;x.toneMapping=fs,Ls(E,W,U),Ee.updateMultisampleRenderTarget(De),Ee.updateRenderTargetMipmap(De);let Ge=!1;for(let We=0,$e=O.length;We<$e;We++){const Xe=O[We],qe=Xe.object,yt=Xe.geometry,pt=Xe.material,Kt=Xe.group;if(pt.side===oi&&qe.layers.test(U.layers)){const yn=pt.side;pt.side=mn,pt.needsUpdate=!0,No(qe,W,U,yt,pt,Kt),pt.side=yn,pt.needsUpdate=!0,Ge=!0}}Ge===!0&&(Ee.updateMultisampleRenderTarget(De),Ee.updateRenderTargetMipmap(De)),x.setRenderTarget(Te),x.setClearColor(se,N),x.toneMapping=Ue}function Ls(E,O,W){const U=O.isScene===!0?O.overrideMaterial:null;for(let X=0,Te=E.length;X<Te;X++){const Ue=E[X],Ge=Ue.object,We=Ue.geometry,$e=U===null?Ue.material:U,Xe=Ue.group;Ge.layers.test(W.layers)&&No(Ge,O,W,We,$e,Xe)}}function No(E,O,W,U,X,Te){E.onBeforeRender(x,O,W,U,X,Te),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(x,O,W,U,E,Te),X.transparent===!0&&X.side===oi&&X.forceSinglePass===!1?(X.side=mn,X.needsUpdate=!0,x.renderBufferDirect(W,O,U,X,E,Te),X.side=Bi,X.needsUpdate=!0,x.renderBufferDirect(W,O,U,X,E,Te),X.side=oi):x.renderBufferDirect(W,O,U,X,E,Te),E.onAfterRender(x,O,W,U,X,Te)}function Xi(E,O,W){O.isScene!==!0&&(O=ot);const U=be.get(E),X=m.state.lights,Te=m.state.shadowsArray,Ue=X.state.version,Ge=B.getParameters(E,X.state,Te,O,W),We=B.getProgramCacheKey(Ge);let $e=U.programs;U.environment=E.isMeshStandardMaterial?O.environment:null,U.fog=O.fog,U.envMap=(E.isMeshStandardMaterial?Ke:Fe).get(E.envMap||U.environment),$e===void 0&&(E.addEventListener("dispose",pe),$e=new Map,U.programs=$e);let Xe=$e.get(We);if(Xe!==void 0){if(U.currentProgram===Xe&&U.lightsStateVersion===Ue)return Do(E,Ge),Xe}else Ge.uniforms=B.getUniforms(E),E.onBuild(W,Ge,x),E.onBeforeCompile(Ge,x),Xe=B.acquireProgram(Ge,We),$e.set(We,Xe),U.uniforms=Ge.uniforms;const qe=U.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(qe.clippingPlanes=Ce.uniform),Do(E,Ge),U.needsLights=qa(E),U.lightsStateVersion=Ue,U.needsLights&&(qe.ambientLightColor.value=X.state.ambient,qe.lightProbe.value=X.state.probe,qe.directionalLights.value=X.state.directional,qe.directionalLightShadows.value=X.state.directionalShadow,qe.spotLights.value=X.state.spot,qe.spotLightShadows.value=X.state.spotShadow,qe.rectAreaLights.value=X.state.rectArea,qe.ltc_1.value=X.state.rectAreaLTC1,qe.ltc_2.value=X.state.rectAreaLTC2,qe.pointLights.value=X.state.point,qe.pointLightShadows.value=X.state.pointShadow,qe.hemisphereLights.value=X.state.hemi,qe.directionalShadowMap.value=X.state.directionalShadowMap,qe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,qe.spotShadowMap.value=X.state.spotShadowMap,qe.spotLightMatrix.value=X.state.spotLightMatrix,qe.spotLightMap.value=X.state.spotLightMap,qe.pointShadowMap.value=X.state.pointShadowMap,qe.pointShadowMatrix.value=X.state.pointShadowMatrix);const yt=Xe.getUniforms(),pt=Wc.seqWithValue(yt.seq,qe);return U.currentProgram=Xe,U.uniformsList=pt,Xe}function Do(E,O){const W=be.get(E);W.outputColorSpace=O.outputColorSpace,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Oo(E,O,W,U,X){O.isScene!==!0&&(O=ot),Ee.resetTextureUnits();const Te=O.fog,Ue=U.isMeshStandardMaterial?O.environment:null,Ge=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Yt,We=(U.isMeshStandardMaterial?Ke:Fe).get(U.envMap||Ue),$e=U.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xe=!!W.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),qe=!!W.morphAttributes.position,yt=!!W.morphAttributes.normal,pt=!!W.morphAttributes.color;let Kt=fs;U.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Kt=x.toneMapping);const yn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,vt=yn!==void 0?yn.length:0,Ze=be.get(U),ji=m.state.lights;if(ve===!0&&(Me===!0||E!==M)){const st=E===M&&U.id===F;Ce.setState(U,E,st)}let Et=!1;U.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==ji.state.version||Ze.outputColorSpace!==Ge||X.isInstancedMesh&&Ze.instancing===!1||!X.isInstancedMesh&&Ze.instancing===!0||X.isSkinnedMesh&&Ze.skinning===!1||!X.isSkinnedMesh&&Ze.skinning===!0||X.isInstancedMesh&&Ze.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ze.instancingColor===!1&&X.instanceColor!==null||Ze.envMap!==We||U.fog===!0&&Ze.fog!==Te||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ce.numPlanes||Ze.numIntersection!==Ce.numIntersection)||Ze.vertexAlphas!==$e||Ze.vertexTangents!==Xe||Ze.morphTargets!==qe||Ze.morphNormals!==yt||Ze.morphColors!==pt||Ze.toneMapping!==Kt||oe.isWebGL2===!0&&Ze.morphTargetsCount!==vt)&&(Et=!0):(Et=!0,Ze.__version=U.version);let ti=Ze.currentProgram;Et===!0&&(ti=Xi(U,O,X));let Ya=!1,Cs=!1,Ne=!1;const we=ti.getUniforms(),mt=Ze.uniforms;if(ee.useProgram(ti.program)&&(Ya=!0,Cs=!0,Ne=!0),U.id!==F&&(F=U.id,Cs=!0),Ya||M!==E){we.setValue(P,"projectionMatrix",E.projectionMatrix),we.setValue(P,"viewMatrix",E.matrixWorldInverse);const st=we.map.cameraPosition;st!==void 0&&st.setValue(P,Qe.setFromMatrixPosition(E.matrixWorld)),oe.logarithmicDepthBuffer&&we.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&we.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Cs=!0,Ne=!0)}if(X.isSkinnedMesh){we.setOptional(P,X,"bindMatrix"),we.setOptional(P,X,"bindMatrixInverse");const st=X.skeleton;st&&(oe.floatVertexTextures?(st.boneTexture===null&&st.computeBoneTexture(),we.setValue(P,"boneTexture",st.boneTexture,Ee),we.setValue(P,"boneTextureSize",st.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Lt=W.morphAttributes;if((Lt.position!==void 0||Lt.normal!==void 0||Lt.color!==void 0&&oe.isWebGL2===!0)&&I.update(X,W,ti),(Cs||Ze.receiveShadow!==X.receiveShadow)&&(Ze.receiveShadow=X.receiveShadow,we.setValue(P,"receiveShadow",X.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(mt.envMap.value=We,mt.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Cs&&(we.setValue(P,"toneMappingExposure",x.toneMappingExposure),Ze.needsLights&&ja(mt,Ne),Te&&U.fog===!0&&ae.refreshFogUniforms(mt,Te),ae.refreshMaterialUniforms(mt,U,j,Y,De),Wc.upload(P,Ze.uniformsList,mt,Ee)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Wc.upload(P,Ze.uniformsList,mt,Ee),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&we.setValue(P,"center",X.center),we.setValue(P,"modelViewMatrix",X.modelViewMatrix),we.setValue(P,"normalMatrix",X.normalMatrix),we.setValue(P,"modelMatrix",X.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const st=U.uniformsGroups;for(let Qt=0,gi=st.length;Qt<gi;Qt++)if(oe.isWebGL2){const ni=st[Qt];ye.update(ni,ti),ye.bind(ni,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function ja(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function qa(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,O,W){be.get(E.texture).__webglTexture=O,be.get(E.depthTexture).__webglTexture=W;const U=be.get(E);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=W===void 0,U.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const W=be.get(E);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,W=0){w=E,T=O,z=W;let U=!0,X=null,Te=!1,Ue=!1;if(E){const We=be.get(E);We.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(P.FRAMEBUFFER,null),U=!1):We.__webglFramebuffer===void 0?Ee.setupRenderTarget(E):We.__hasExternalTextures&&Ee.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture);const $e=E.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const Xe=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xe[O])?X=Xe[O][W]:X=Xe[O],Te=!0):oe.isWebGL2&&E.samples>0&&Ee.useMultisampledRTT(E)===!1?X=be.get(E).__webglMultisampledFramebuffer:Array.isArray(Xe)?X=Xe[W]:X=Xe,L.copy(E.viewport),G.copy(E.scissor),ie=E.scissorTest}else L.copy(K).multiplyScalar(j).floor(),G.copy(D).multiplyScalar(j).floor(),ie=V;if(ee.bindFramebuffer(P.FRAMEBUFFER,X)&&oe.drawBuffers&&U&&ee.drawBuffers(E,X),ee.viewport(L),ee.scissor(G),ee.setScissorTest(ie),Te){const We=be.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,We.__webglTexture,W)}else if(Ue){const We=be.get(E.texture),$e=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,We.__webglTexture,W||0,$e)}F=-1},this.readRenderTargetPixels=function(E,O,W,U,X,Te,Ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ge=Ge[Ue]),Ge){ee.bindFramebuffer(P.FRAMEBUFFER,Ge);try{const We=E.texture,$e=We.format,Xe=We.type;if($e!==Cn&&Ve.convert($e)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Xe===Ta&&(q.has("EXT_color_buffer_half_float")||oe.isWebGL2&&q.has("EXT_color_buffer_float"));if(Xe!==ps&&Ve.convert(Xe)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===Li&&(oe.isWebGL2||q.has("OES_texture_float")||q.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-U&&W>=0&&W<=E.height-X&&P.readPixels(O,W,U,X,Ve.convert($e),Ve.convert(Xe),Te)}finally{const We=w!==null?be.get(w).__webglFramebuffer:null;ee.bindFramebuffer(P.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(E,O,W=0){const U=Math.pow(2,-W),X=Math.floor(O.image.width*U),Te=Math.floor(O.image.height*U);Ee.setTexture2D(O,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,E.x,E.y,X,Te),ee.unbindTexture()},this.copyTextureToTexture=function(E,O,W,U=0){const X=O.image.width,Te=O.image.height,Ue=Ve.convert(W.format),Ge=Ve.convert(W.type);Ee.setTexture2D(W,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,W.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,W.unpackAlignment),O.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,E.x,E.y,X,Te,Ue,Ge,O.image.data):O.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,Ue,O.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,U,E.x,E.y,Ue,Ge,O.image),U===0&&W.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(E,O,W,U,X=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=E.max.x-E.min.x+1,Ue=E.max.y-E.min.y+1,Ge=E.max.z-E.min.z+1,We=Ve.convert(U.format),$e=Ve.convert(U.type);let Xe;if(U.isData3DTexture)Ee.setTexture3D(U,0),Xe=P.TEXTURE_3D;else if(U.isDataArrayTexture)Ee.setTexture2DArray(U,0),Xe=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const qe=P.getParameter(P.UNPACK_ROW_LENGTH),yt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),pt=P.getParameter(P.UNPACK_SKIP_PIXELS),Kt=P.getParameter(P.UNPACK_SKIP_ROWS),yn=P.getParameter(P.UNPACK_SKIP_IMAGES),vt=W.isCompressedTexture?W.mipmaps[0]:W.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,vt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,vt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,E.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,E.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,E.min.z),W.isDataTexture||W.isData3DTexture?P.texSubImage3D(Xe,X,O.x,O.y,O.z,Te,Ue,Ge,We,$e,vt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Xe,X,O.x,O.y,O.z,Te,Ue,Ge,We,vt.data)):P.texSubImage3D(Xe,X,O.x,O.y,O.z,Te,Ue,Ge,We,$e,vt),P.pixelStorei(P.UNPACK_ROW_LENGTH,qe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,yt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Kt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,yn),X===0&&U.generateMipmaps&&P.generateMipmap(Xe),ee.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ee.setTextureCube(E,0):E.isData3DTexture?Ee.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ee.setTexture2DArray(E,0):Ee.setTexture2D(E,0),ee.unbindTexture()},this.resetState=function(){T=0,z=0,w=null,ee.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===_u?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===gl?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?Ks:N0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ks?At:Yt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class s9 extends vl{}s9.prototype.isWebGL1Renderer=!0;class r9 extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Eu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fh,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new C;class Hn{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class J0 extends Zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ir;const Go=new C,Nr=new C,Dr=new C,Or=new re,Wo=new re,Q0=new Ye,yc=new C,Xo=new C,vc=new C,lf=new re,ah=new re,hf=new re;class o9 extends Mt{constructor(e=new J0){if(super(),this.isSprite=!0,this.type="Sprite",Ir===void 0){Ir=new on;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Eu(t,5);Ir.setIndex([0,1,2,0,2,3]),Ir.setAttribute("position",new Hn(n,3,0,!1)),Ir.setAttribute("uv",new Hn(n,2,3,!1))}this.geometry=Ir,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Nr.setFromMatrixScale(this.matrixWorld),Q0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Nr.multiplyScalar(-Dr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Sc(yc.set(-.5,-.5,0),Dr,o,Nr,i,r),Sc(Xo.set(.5,-.5,0),Dr,o,Nr,i,r),Sc(vc.set(.5,.5,0),Dr,o,Nr,i,r),lf.set(0,0),ah.set(1,0),hf.set(1,1);let a=e.ray.intersectTriangle(yc,Xo,vc,!1,Go);if(a===null&&(Sc(Xo.set(-.5,.5,0),Dr,o,Nr,i,r),ah.set(0,1),a=e.ray.intersectTriangle(yc,vc,Xo,!1,Go),a===null))return;const c=e.ray.origin.distanceTo(Go);c<e.near||c>e.far||t.push({distance:c,point:Go.clone(),uv:An.getInterpolation(Go,yc,Xo,vc,lf,ah,hf,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Sc(s,e,t,n,i,r){Or.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Wo.x=r*Or.x-i*Or.y,Wo.y=i*Or.x+r*Or.y):Wo.copy(Or),s.copy(e),s.x+=Wo.x,s.y+=Wo.y,s.applyMatrix4(Q0)}const uf=new C,df=new rt,ff=new rt,a9=new C,pf=new Ye,Ur=new C,ch=new Un,mf=new Ye,lh=new Mo;class c9 extends sn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ur.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ur),this.boundingBox.expandByPoint(Ur)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ur.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ur),this.boundingSphere.expandByPoint(Ur)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ch.copy(this.boundingSphere),ch.applyMatrix4(i),e.ray.intersectsSphere(ch)!==!1&&(mf.copy(i).invert(),lh.copy(e.ray).applyMatrix4(mf),!(this.boundingBox!==null&&lh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,lh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;df.fromBufferAttribute(i.attributes.skinIndex,e),ff.fromBufferAttribute(i.attributes.skinWeight,e),uf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ff.getComponent(r);if(o!==0){const a=df.getComponent(r);pf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(a9.copy(uf).applyMatrix4(pf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class ep extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class l9 extends jt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=kt,h=kt,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gf=new Ye,h9=new Ye;class Tu{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:h9;gf.multiplyMatrices(a,t[r]),gf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Tu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=O0(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new l9(t,e,e,Cn,Li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ep),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class _f extends rn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fr=new Ye,xf=new Ye,bc=[],yf=new On,u9=new Ye,jo=new sn,qo=new Un;class d9 extends sn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _f(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,u9)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),yf.copy(e.boundingBox).applyMatrix4(Fr),this.boundingBox.union(yf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),qo.copy(e.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(qo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(jo.geometry=this.geometry,jo.material=this.material,jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(n),e.ray.intersectsSphere(qo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Fr),xf.multiplyMatrices(n,Fr),jo.matrixWorld=xf,jo.raycast(e,bc);for(let o=0,a=bc.length;o<a;o++){const c=bc[o];c.instanceId=r,c.object=this,t.push(c)}bc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _f(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class tp extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vf=new C,Sf=new C,bf=new Ye,hh=new Mo,Mc=new Un;class wu extends Mt{constructor(e=new on,t=new tp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)vf.fromBufferAttribute(t,i-1),Sf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=vf.distanceTo(Sf);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mc.copy(n.boundingSphere),Mc.applyMatrix4(i),Mc.radius+=r,e.ray.intersectsSphere(Mc)===!1)return;bf.copy(i).invert(),hh.copy(e.ray).applyMatrix4(bf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new C,h=new C,u=new C,d=new C,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let x=f,v=b-1;x<v;x+=p){const T=g.getX(x),z=g.getX(x+1);if(l.fromBufferAttribute(m,T),h.fromBufferAttribute(m,z),hh.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(d);F<e.near||F>e.far||t.push({distance:F,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let x=f,v=b-1;x<v;x+=p){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),hh.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(d);z<e.near||z>e.far||t.push({distance:z,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Mf=new C,Ef=new C;class f9 extends wu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Mf.fromBufferAttribute(t,i),Ef.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Mf.distanceTo(Ef);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class p9 extends wu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class np extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tf=new Ye,Vh=new Mo,Ec=new Un,Tc=new C;class m9 extends Mt{constructor(e=new on,t=new np){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ec.copy(n.boundingSphere),Ec.applyMatrix4(i),Ec.radius+=r,e.ray.intersectsSphere(Ec)===!1)return;Tf.copy(i).invert(),Vh.copy(e.ray).applyMatrix4(Tf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);Tc.fromBufferAttribute(u,m),wf(Tc,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Tc.fromBufferAttribute(u,g),wf(Tc,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wf(s,e,t,n,i,r,o){const a=Vh.distanceSqToPoint(s);if(a<t){const c=new C;Vh.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class fi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new re:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,i=[],r=[],o=[],a=new C,c=new Ye;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Rt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(Rt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Au extends fi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new re,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class g9 extends Au{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Lu(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const wc=new C,uh=new Lu,dh=new Lu,fh=new Lu;class _9 extends fi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(wc.subVectors(i[0],i[1]).add(i[0]),l=wc);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(wc.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=wc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),uh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),dh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),fh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(uh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),dh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),fh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(uh.calc(c),dh.calc(c),fh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Af(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function x9(s,e){const t=1-s;return t*t*e}function y9(s,e){return 2*(1-s)*s*e}function v9(s,e){return s*s*e}function ga(s,e,t,n){return x9(s,e)+y9(s,t)+v9(s,n)}function S9(s,e){const t=1-s;return t*t*t*e}function b9(s,e){const t=1-s;return 3*t*t*s*e}function M9(s,e){return 3*(1-s)*s*s*e}function E9(s,e){return s*s*s*e}function _a(s,e,t,n,i){return S9(s,e)+b9(s,t)+M9(s,n)+E9(s,i)}class ip extends fi{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_a(e,i.x,r.x,o.x,a.x),_a(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class T9 extends fi{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_a(e,i.x,r.x,o.x,a.x),_a(e,i.y,r.y,o.y,a.y),_a(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sp extends fi{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rp extends fi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class op extends fi{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ga(e,i.x,r.x,o.x),ga(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w9 extends fi{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ga(e,i.x,r.x,o.x),ga(e,i.y,r.y,o.y),ga(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ap extends fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Af(a,c.x,l.x,h.x,u.x),Af(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new re().fromArray(i))}return this}}var Gh=Object.freeze({__proto__:null,ArcCurve:g9,CatmullRomCurve3:_9,CubicBezierCurve:ip,CubicBezierCurve3:T9,EllipseCurve:Au,LineCurve:sp,LineCurve3:rp,QuadraticBezierCurve:op,QuadraticBezierCurve3:w9,SplineCurve:ap});class an extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Gh[i.type]().fromJSON(i))}return this}}class Wh extends an{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new sp(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new op(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new ip(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ap(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new Au(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Xc extends Wh{constructor(e){super(e),this.uuid=Nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Wh().fromJSON(i))}return this}}const A9={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=cp(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(n&&(r=z9(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return La(r,o,t,a,c,p,0),o}};function cp(s,e,t,n,i){let r,o;if(i===G9(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Lf(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Lf(r,s[r],s[r+1],o);return o&&Sl(o,o.next)&&(Ra(o),o=o.next),o}function tr(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Sl(t,t.next)||wt(t.prev,t,t.next)===0)){if(Ra(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function La(s,e,t,n,i,r,o){if(!s)return;!o&&r&&U9(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?C9(s,n,i,r):L9(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Ra(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=R9(tr(s),e,t),La(s,e,t,n,i,r,2)):o===2&&P9(s,e,t,n,i,r):La(tr(s),e,t,n,i,r,1);break}}}function L9(s){const e=s.prev,t=s,n=s.next;if(wt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&$r(i,a,r,c,o,l,g.x,g.y)&&wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function C9(s,e,t,n){const i=s.prev,r=s,o=s.next;if(wt(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=Xh(p,g,e,t,n),b=Xh(_,m,e,t,n);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=f&&v&&v.z<=b;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&$r(a,h,c,u,l,d,x.x,x.y)&&wt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&$r(a,h,c,u,l,d,v.x,v.y)&&wt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&$r(a,h,c,u,l,d,x.x,x.y)&&wt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=b;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&$r(a,h,c,u,l,d,v.x,v.y)&&wt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function R9(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Sl(i,r)&&lp(i,n,n.next,r)&&Ca(i,r)&&Ca(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ra(n),Ra(n.next),n=s=r),n=n.next}while(n!==s);return tr(n)}function P9(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&k9(o,a)){let c=hp(o,a);o=tr(o,o.next),c=tr(c,c.next),La(o,e,t,n,i,r,0),La(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function z9(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=cp(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(B9(l));for(i.sort(I9),r=0;r<i.length;r++)t=N9(i[r],t);return t}function I9(s,e){return s.x-e.x}function N9(s,e){const t=D9(s,e);if(!t)return e;const n=hp(t,s);return tr(n,n.next),tr(t,t.next)}function D9(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&$r(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Ca(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&O9(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function O9(s,e){return wt(s.prev,s,e.prev)<0&&wt(e.next,s,s.next)<0}function U9(s,e,t,n){let i=s;do i.z===0&&(i.z=Xh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,F9(i)}function F9(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Xh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function B9(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function $r(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function k9(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!H9(s,e)&&(Ca(s,e)&&Ca(e,s)&&V9(s,e)&&(wt(s.prev,s,e.prev)||wt(s,e.prev,e))||Sl(s,e)&&wt(s.prev,s,s.next)>0&&wt(e.prev,e,e.next)>0)}function wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Sl(s,e){return s.x===e.x&&s.y===e.y}function lp(s,e,t,n){const i=Lc(wt(s,e,t)),r=Lc(wt(s,e,n)),o=Lc(wt(t,n,s)),a=Lc(wt(t,n,e));return!!(i!==r&&o!==a||i===0&&Ac(s,t,e)||r===0&&Ac(s,n,e)||o===0&&Ac(t,s,n)||a===0&&Ac(t,e,n))}function Ac(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Lc(s){return s>0?1:s<0?-1:0}function H9(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&lp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ca(s,e){return wt(s.prev,s,s.next)<0?wt(s,e,s.next)>=0&&wt(s,s.prev,e)>=0:wt(s,e,s.prev)<0||wt(s,s.next,e)<0}function V9(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function hp(s,e){const t=new jh(s.i,s.x,s.y),n=new jh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Lf(s,e,t,n){const i=new jh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ra(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function jh(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function G9(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class eo{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return eo.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Cf(e),Rf(n,e);let o=e.length;t.forEach(Cf);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Rf(n,t[c]);const a=A9.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Cf(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Rf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Cu extends on{constructor(e=new Xc([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new qt(i,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:W9;let x,v=!1,T,z,w,F;f&&(x=f.getSpacedPoints(h),v=!0,d=!1,T=f.computeFrenetFrames(h,!1),z=new C,w=new C,F=new C),d||(m=0,p=0,g=0,_=0);const M=a.extractPoints(l);let L=M.shape;const G=M.holes;if(!eo.isClockWise(L)){L=L.reverse();for(let P=0,he=G.length;P<he;P++){const q=G[P];eo.isClockWise(q)&&(G[P]=q.reverse())}}const se=eo.triangulateShape(L,G),N=L;for(let P=0,he=G.length;P<he;P++){const q=G[P];L=L.concat(q)}function H(P,he,q){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(he,q)}const Y=L.length,j=se.length;function le(P,he,q){let oe,ee,Pe;const be=P.x-he.x,Ee=P.y-he.y,Fe=q.x-P.x,Ke=q.y-P.y,ut=be*be+Ee*Ee,A=be*Ke-Ee*Fe;if(Math.abs(A)>Number.EPSILON){const S=Math.sqrt(ut),B=Math.sqrt(Fe*Fe+Ke*Ke),ae=he.x-Ee/S,ne=he.y+be/S,ce=q.x-Ke/B,Ce=q.y+Fe/B,ue=((ce-ae)*Ke-(Ce-ne)*Fe)/(be*Ke-Ee*Fe);oe=ae+be*ue-P.x,ee=ne+Ee*ue-P.y;const xe=oe*oe+ee*ee;if(xe<=2)return new re(oe,ee);Pe=Math.sqrt(xe/2)}else{let S=!1;be>Number.EPSILON?Fe>Number.EPSILON&&(S=!0):be<-Number.EPSILON?Fe<-Number.EPSILON&&(S=!0):Math.sign(Ee)===Math.sign(Ke)&&(S=!0),S?(oe=-Ee,ee=be,Pe=Math.sqrt(ut)):(oe=be,ee=Ee,Pe=Math.sqrt(ut/2))}return new re(oe/Pe,ee/Pe)}const Q=[];for(let P=0,he=N.length,q=he-1,oe=P+1;P<he;P++,q++,oe++)q===he&&(q=0),oe===he&&(oe=0),Q[P]=le(N[P],N[q],N[oe]);const K=[];let D,V=Q.concat();for(let P=0,he=G.length;P<he;P++){const q=G[P];D=[];for(let oe=0,ee=q.length,Pe=ee-1,be=oe+1;oe<ee;oe++,Pe++,be++)Pe===ee&&(Pe=0),be===ee&&(be=0),D[oe]=le(q[oe],q[Pe],q[be]);K.push(D),V=V.concat(D)}for(let P=0;P<m;P++){const he=P/m,q=p*Math.cos(he*Math.PI/2),oe=g*Math.sin(he*Math.PI/2)+_;for(let ee=0,Pe=N.length;ee<Pe;ee++){const be=H(N[ee],Q[ee],oe);Ie(be.x,be.y,-q)}for(let ee=0,Pe=G.length;ee<Pe;ee++){const be=G[ee];D=K[ee];for(let Ee=0,Fe=be.length;Ee<Fe;Ee++){const Ke=H(be[Ee],D[Ee],oe);Ie(Ke.x,Ke.y,-q)}}}const _e=g+_;for(let P=0;P<Y;P++){const he=d?H(L[P],V[P],_e):L[P];v?(w.copy(T.normals[0]).multiplyScalar(he.x),z.copy(T.binormals[0]).multiplyScalar(he.y),F.copy(x[0]).add(w).add(z),Ie(F.x,F.y,F.z)):Ie(he.x,he.y,0)}for(let P=1;P<=h;P++)for(let he=0;he<Y;he++){const q=d?H(L[he],V[he],_e):L[he];v?(w.copy(T.normals[P]).multiplyScalar(q.x),z.copy(T.binormals[P]).multiplyScalar(q.y),F.copy(x[P]).add(w).add(z),Ie(F.x,F.y,F.z)):Ie(q.x,q.y,u/h*P)}for(let P=m-1;P>=0;P--){const he=P/m,q=p*Math.cos(he*Math.PI/2),oe=g*Math.sin(he*Math.PI/2)+_;for(let ee=0,Pe=N.length;ee<Pe;ee++){const be=H(N[ee],Q[ee],oe);Ie(be.x,be.y,u+q)}for(let ee=0,Pe=G.length;ee<Pe;ee++){const be=G[ee];D=K[ee];for(let Ee=0,Fe=be.length;Ee<Fe;Ee++){const Ke=H(be[Ee],D[Ee],oe);v?Ie(Ke.x,Ke.y+x[h-1].y,x[h-1].x+q):Ie(Ke.x,Ke.y,u+q)}}}ve(),Me();function ve(){const P=i.length/3;if(d){let he=0,q=Y*he;for(let oe=0;oe<j;oe++){const ee=se[oe];ze(ee[2]+q,ee[1]+q,ee[0]+q)}he=h+m*2,q=Y*he;for(let oe=0;oe<j;oe++){const ee=se[oe];ze(ee[0]+q,ee[1]+q,ee[2]+q)}}else{for(let he=0;he<j;he++){const q=se[he];ze(q[2],q[1],q[0])}for(let he=0;he<j;he++){const q=se[he];ze(q[0]+Y*h,q[1]+Y*h,q[2]+Y*h)}}n.addGroup(P,i.length/3-P,0)}function Me(){const P=i.length/3;let he=0;De(N,he),he+=N.length;for(let q=0,oe=G.length;q<oe;q++){const ee=G[q];De(ee,he),he+=ee.length}n.addGroup(P,i.length/3-P,1)}function De(P,he){let q=P.length;for(;--q>=0;){const oe=q;let ee=q-1;ee<0&&(ee=P.length-1);for(let Pe=0,be=h+m*2;Pe<be;Pe++){const Ee=Y*Pe,Fe=Y*(Pe+1),Ke=he+oe+Ee,ut=he+ee+Ee,A=he+ee+Fe,S=he+oe+Fe;Qe(Ke,ut,A,S)}}}function Ie(P,he,q){c.push(P),c.push(he),c.push(q)}function ze(P,he,q){ot(P),ot(he),ot(q);const oe=i.length/3,ee=b.generateTopUV(n,i,oe-3,oe-2,oe-1);Oe(ee[0]),Oe(ee[1]),Oe(ee[2])}function Qe(P,he,q,oe){ot(P),ot(he),ot(oe),ot(he),ot(q),ot(oe);const ee=i.length/3,Pe=b.generateSideWallUV(n,i,ee-6,ee-3,ee-2,ee-1);Oe(Pe[0]),Oe(Pe[1]),Oe(Pe[3]),Oe(Pe[1]),Oe(Pe[2]),Oe(Pe[3])}function ot(P){i.push(c[P*3+0]),i.push(c[P*3+1]),i.push(c[P*3+2])}function Oe(P){r.push(P.x),r.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return X9(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Gh[i.type]().fromJSON(i)),new Cu(n,e.options)}}const W9={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new re(r,o),new re(a,c),new re(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],p=e[i*3+1],g=e[i*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new re(o,1-c),new re(l,1-u),new re(d,1-g),new re(_,1-f)]:[new re(a,1-c),new re(h,1-u),new re(p,1-g),new re(m,1-f)]}};function X9(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ru extends on{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new C,d=new C,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const b=[],x=f/n;let v=0;f===0&&o===0?v=.5/t:f===n&&c===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const z=T/t;u.x=-e*Math.cos(i+z*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+z*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(z+v,1-x),b.push(l++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<t;b++){const x=h[f][b+1],v=h[f][b],T=h[f+1][b],z=h[f+1][b+1];(f!==0||o>0)&&p.push(x,v,z),(f!==n-1||c<Math.PI)&&p.push(v,T,z)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ru(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class j9 extends on{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new C,r=new C;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],d=u.start,p=u.count;for(let g=d,_=d+p;g<_;g+=3)for(let m=0;m<3;m++){const f=a.getX(g+m),b=a.getX(g+(m+1)%3);i.fromBufferAttribute(o,f),r.fromBufferAttribute(o,b),Pf(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l,u=3*a+(l+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Pf(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new qt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Pf(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class fo extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=D0,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bs extends fo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Cc(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function q9(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Y9(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function zf(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function up(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Ba{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class K9 extends Ba{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yd,endingEnd:yd}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case vd:r=e,a=2*t-n;break;case Sd:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case vd:o=e,c=2*n-t;break;case Sd:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let T=0;T!==a;++T)r[T]=f*o[h+T]+b*o[l+T]+x*o[c+T]+v*o[u+T];return r}}class $9 extends Ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class Z9 extends Ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class pi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cc(t,this.TimeBufferType),this.values=Cc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cc(e.times,Array),values:Cc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Z9(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $9(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new K9(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wa:t=this.InterpolantFactoryMethodDiscrete;break;case lo:t=this.InterpolantFactoryMethodLinear;break;case Fl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wa;case this.InterpolantFactoryMethodLinear:return lo;case this.InterpolantFactoryMethodSmooth:return Fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&q9(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Fl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=lo;class To extends pi{}To.prototype.ValueTypeName="bool";To.prototype.ValueBufferType=Array;To.prototype.DefaultInterpolation=wa;To.prototype.InterpolantFactoryMethodLinear=void 0;To.prototype.InterpolantFactoryMethodSmooth=void 0;class dp extends pi{}dp.prototype.ValueTypeName="color";class po extends pi{}po.prototype.ValueTypeName="number";class J9 extends Ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)hi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class nr extends pi{InterpolantFactoryMethodLinear(e){return new J9(this.times,this.values,this.getValueSize(),e)}}nr.prototype.ValueTypeName="quaternion";nr.prototype.DefaultInterpolation=lo;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class wo extends pi{}wo.prototype.ValueTypeName="string";wo.prototype.ValueBufferType=Array;wo.prototype.DefaultInterpolation=wa;wo.prototype.InterpolantFactoryMethodLinear=void 0;wo.prototype.InterpolantFactoryMethodSmooth=void 0;class mo extends pi{}mo.prototype.ValueTypeName="vector";class Q9{constructor(e,t=-1,n,i=R1){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Nn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(t5(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(pi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=Y9(c);c=zf(c,1,h),l=zf(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new po(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,_){if(p.length!==0){const m=[],f=[];up(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let b=0;b!==d[g].morphTargets.length;++b){const x=d[g];m.push(x.time),f.push(x.morphTarget===_?1:0)}i.push(new po(".morphTargetInfluence["+_+"]",m,f))}c=p.length*o}else{const p=".bones["+t[u].name+"]";n(mo,p+".position",d,"pos",i),n(nr,p+".quaternion",d,"rot",i),n(mo,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function e5(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return po;case"vector":case"vector2":case"vector3":case"vector4":return mo;case"color":return dp;case"quaternion":return nr;case"bool":case"boolean":return To;case"string":return wo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function t5(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=e5(s.type);if(s.times===void 0){const t=[],n=[];up(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const go={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class n5{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const i5=new n5;class rr{constructor(e){this.manager=e!==void 0?e:i5,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}rr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ti={};class s5 extends Error{constructor(e,t){super(e),this.response=t}}class Pu extends rr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=go.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ti[e]!==void 0){Ti[e].push({onLoad:t,onProgress:n,onError:i});return}Ti[e]=[],Ti[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Ti[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){b();function b(){u.read().then(({done:x,value:v})=>{if(x)f.close();else{_+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let z=0,w=h.length;z<w;z++){const F=h[z];F.onProgress&&F.onProgress(T)}f.enqueue(v),b()}})}}});return new Response(m)}else throw new s5(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{go.add(e,l);const h=Ti[e];delete Ti[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=Ti[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ti[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class r5 extends rr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=go.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Aa("img");function c(){h(),go.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class fp extends rr{constructor(e){super(e)}load(e,t,n,i){const r=new jt,o=new r5(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ka extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ph=new Ye,If=new C,Nf=new C;class zu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Su,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;If.setFromMatrixPosition(e.matrixWorld),t.position.copy(If),Nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nf),t.updateMatrixWorld(),ph.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ph),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ph)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class o5 extends zu{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ho*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class pp extends ka{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new o5}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Df=new Ye,Yo=new C,mh=new C;class a5 extends zu{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Yo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yo),mh.copy(n.position),mh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(mh),n.updateMatrixWorld(),i.makeTranslation(-Yo.x,-Yo.y,-Yo.z),Df.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Df)}}class mp extends ka{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new a5}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class c5 extends zu{constructor(){super(new Fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class l5 extends ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new c5}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class h5 extends ka{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class u5 extends ka{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class qh{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class d5 extends on{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class f5 extends rr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=go.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){go.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const Iu="\\[\\]\\.:\\/",p5=new RegExp("["+Iu+"]","g"),Nu="[^"+Iu+"]",m5="[^"+Iu.replace("\\.","")+"]",g5=/((?:WC+[\/:])*)/.source.replace("WC",Nu),_5=/(WCOD+)?/.source.replace("WCOD",m5),x5=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nu),y5=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nu),v5=new RegExp("^"+g5+_5+x5+y5+"$"),S5=["material","materials","bones","map"];class b5{constructor(e,t,n){const i=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,n):new lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(p5,"")}static parseTrackName(e){const t=v5.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);S5.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=b5;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Yh extends Eu{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class jc{constructor(e,t,n=0,i=1/0){this.ray=new Mo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new yu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Kh(e,this,n,t),n.sort(Of),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Kh(e[i],this,n,t);return n.sort(Of),n}}function Of(s,e){return s.distance-e.distance}function Kh(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Kh(i[r],e,t,!0)}}class Uf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ff=new C,Rc=new C;class M5{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ff.subVectors(e,this.start),Rc.subVectors(this.end,this.start);const n=Rc.dot(Rc);let r=Rc.dot(Ff)/n;return t&&(r=Rt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class E5 extends sn{constructor(e,t,n){const i=new Ru(t,4,2),r=new Ri({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}class T5{constructor(){this.type="ShapePath",this.color=new Be,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Wh,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const b=[];for(let x=0,v=f.length;x<v;x++){const T=f[x],z=new Xc;z.curves=T.curves,b.push(z)}return b}function n(f,b){const x=b.length;let v=!1;for(let T=x-1,z=0;z<x;T=z++){let w=b[T],F=b[z],M=F.x-w.x,L=F.y-w.y;if(Math.abs(L)>Number.EPSILON){if(L<0&&(w=b[z],M=-M,F=b[T],L=-L),f.y<w.y||f.y>F.y)continue;if(f.y===w.y){if(f.x===w.x)return!0}else{const G=L*(f.x-w.x)-M*(f.y-w.y);if(G===0)return!0;if(G<0)continue;v=!v}}else{if(f.y!==w.y)continue;if(F.x<=f.x&&f.x<=w.x||w.x<=f.x&&f.x<=F.x)return!0}}return v}const i=eo.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new Xc,c.curves=a.curves,l.push(c),l;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],d=[];let p=[],g=0,_;d[g]=void 0,p[g]=[];for(let f=0,b=r.length;f<b;f++)a=r[f],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!h&&d[g]&&g++,d[g]={s:new Xc,p:_},d[g].s.curves=a.curves,h&&g++,p[g]=[]):p[g].push({h:a,p:_[0]});if(!d[0])return t(r);if(d.length>1){let f=!1,b=0;for(let x=0,v=d.length;x<v;x++)u[x]=[];for(let x=0,v=d.length;x<v;x++){const T=p[x];for(let z=0;z<T.length;z++){const w=T[z];let F=!0;for(let M=0;M<d.length;M++)n(w.p,d[M].p)&&(x!==M&&b++,F?(F=!1,u[M].push(w)):f=!0);F&&u[x].push(w)}}b>0&&f===!1&&(p=u)}let m;for(let f=0,b=d.length;f<b;f++){c=d[f].s,l.push(c),m=p[f];for(let x=0,v=m.length;x<v;x++)c.holes.push(m[x].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mu);function Bf(s,e){if(e===P1)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Uh||e===I0){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Uh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class w5 extends rr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new P5(t)}),this.register(function(t){return new B5(t)}),this.register(function(t){return new k5(t)}),this.register(function(t){return new H5(t)}),this.register(function(t){return new I5(t)}),this.register(function(t){return new N5(t)}),this.register(function(t){return new D5(t)}),this.register(function(t){return new O5(t)}),this.register(function(t){return new R5(t)}),this.register(function(t){return new U5(t)}),this.register(function(t){return new z5(t)}),this.register(function(t){return new F5(t)}),this.register(function(t){return new L5(t)}),this.register(function(t){return new V5(t)}),this.register(function(t){return new G5(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=qh.extractUrlBase(e),this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Pu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===gp){try{o[it.KHR_BINARY_GLTF]=new W5(e)}catch(u){i&&i(u);return}r=JSON.parse(o[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new i6(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:o[u]=new C5;break;case it.KHR_DRACO_MESH_COMPRESSION:o[u]=new X5(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:o[u]=new j5;break;case it.KHR_MESH_QUANTIZATION:o[u]=new q5;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function A5(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class L5{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Be(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Yt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new l5(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new mp(h),l.distance=u;break;case"spot":l=new pp(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ns(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class C5{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return Ri}extendParams(e,t,n){const i=[];e.color=new Be(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Yt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(i)}}class R5{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class P5{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(a,a)}return Promise.all(r)}}class z5{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class I5{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Yt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,At)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class N5{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class D5{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(a[0],a[1],a[2],Yt),Promise.all(r)}}class O5{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bs}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class U5{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(a[0],a[1],a[2],Yt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,At)),Promise.all(r)}}class F5{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class B5{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class k5{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class H5{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class V5{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class G5{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==wn.TRIANGLES&&l.mode!==wn.TRIANGLE_STRIP&&l.mode!==wn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(const g of u){const _=new Ye,m=new C,f=new hi,b=new C(1,1,1),x=new d9(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,v),c.SCALE&&b.fromBufferAttribute(c.SCALE,v),x.setMatrixAt(v,_.compose(m,f,b));for(const v in c)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);Mt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const gp="glTF",Ko=12,kf={JSON:1313821514,BIN:5130562};class W5{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ko),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ko,r=new DataView(e,Ko);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===kf.JSON){const l=new Uint8Array(e,Ko+o,a);this.content=n.decode(l)}else if(c===kf.BIN){const l=Ko+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class X5{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=$h[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=$h[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=to[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(const p in d.attributes){const g=d.attributes[p],_=c[p];_!==void 0&&(g.normalized=_)}u(d)},a,l)})})}}class j5{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class q5{constructor(){this.name=it.KHR_MESH_QUANTIZATION}}class _p extends Ba{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,g=e*l,_=g-l,m=-2*p+3*d,f=p-d,b=1-m,x=f-d+u;for(let v=0;v!==a;v++){const T=o[_+v+a],z=o[_+v+c]*h,w=o[g+v+a],F=o[g+v]*h;r[v]=b*T+x*z+m*w+f*F}return r}}const Y5=new hi;class K5 extends _p{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Y5.fromArray(r).normalize().toArray(r),r}}const wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},to={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hf={9728:kt,9729:un,9984:Oh,9985:w0,9986:Gc,9987:Qs},Vf={33071:Ln,33648:Kc,10497:ao},gh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$h={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$5={CUBICSPLINE:void 0,LINEAR:lo,STEP:wa},_h={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Z5(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new fo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bi})),s.DefaultMaterial}function Ds(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ns(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function J5(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Q5(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function e6(s){let e;const t=s.extensions&&s.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xh(t.attributes):e=s.indices+":"+xh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+xh(s.targets[n]);return e}function xh(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Zh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function t6(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const n6=new Ye;class i6{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new A5,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new fp(this.options.manager):this.textureLoader=new f5(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ds(r,a,i),ns(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(qh.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=gh[i.type],a=to[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new rn(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=gh[i.type],l=to[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(d/p),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let x=t.cache.get(b);x||(_=new l(a,f*p,i.count*p/h),x=new Eu(_,p/h),t.cache.add(b,x)),m=new Hn(x,c,d%p/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new rn(_,c,g);if(i.sparse!==void 0){const f=gh.SCALAR,b=to[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,T=new b(o[1],x,i.sparse.count*f),z=new l(o[2],v,i.sparse.count*c);a!==null&&(m=new rn(m.array.slice(),m.itemSize,m.normalized));for(let w=0,F=T.length;w<F;w++){const M=T[w];if(m.setX(M,z[w*c]),c>=2&&m.setY(M,z[w*c+1]),c>=3&&m.setZ(M,z[w*c+2]),c>=4&&m.setW(M,z[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Hf[d.magFilter]||un,h.minFilter=Hf[d.minFilter]||Qs,h.wrapS=Vf[d.wrapS]||ao,h.wrapT=Vf[d.wrapT]||ao,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new jt(_);m.needsUpdate=!0,d(m)}),t.load(qh.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||t6(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new np,Zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new tp,Zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return fo}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[it.KHR_MATERIALS_UNLIT]){const u=i[it.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Be(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Yt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,At)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=oi);const h=r.alphaMode||_h.OPAQUE;if(h===_h.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===_h.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ri&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ri&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ri){const u=r.emissiveFactor;a.emissive=new Be().setRGB(u[0],u[1],u[2],Yt)}return r.emissiveTexture!==void 0&&o!==Ri&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,At)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ns(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ds(i,u,r),u})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Gf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=e6(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[it.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Gf(new on,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?Z5(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=o[p];let f;const b=l[p];if(m.mode===wn.TRIANGLES||m.mode===wn.TRIANGLE_STRIP||m.mode===wn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new c9(_,b):new sn(_,b),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===wn.TRIANGLE_STRIP?f.geometry=Bf(f.geometry,I0):m.mode===wn.TRIANGLE_FAN&&(f.geometry=Bf(f.geometry,Uh));else if(m.mode===wn.LINES)f=new f9(_,b);else if(m.mode===wn.LINE_STRIP)f=new wu(_,b);else if(m.mode===wn.LINE_LOOP)f=new p9(_,b);else if(m.mode===wn.POINTS)f=new m9(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Q5(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),ns(f,r),m.extensions&&Ds(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Ds(i,u[0],r),u[0];const d=new Vs;r.extensions&&Ds(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(_l.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Fa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ns(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ye;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Tu(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],g=i.samplers[p.sampler],_=p.target,m=_.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",b)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let b=0,x=d.length;b<x;b++){const v=d[b],T=p[b],z=g[b],w=_[b],F=m[b];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,T,z,w,F);if(M)for(let L=0;L<M.length;L++)f.push(M[L])}return new Q9(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,n6)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new ep:l.length>1?h=new Vs:l.length===1?h=l[0]:h=new Mt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ns(h,r),r.extensions&&Ds(n,h,r),r.matrix!==void 0){const u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Vs;n.name&&(r.name=i.createUniqueName(n.name)),ns(r,n),n.extensions&&Ds(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof Zn||d instanceof jt)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];Ji[r.path]===Ji.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ji[r.path]){case Ji.weights:l=po;break;case Ji.rotation:l=nr;break;case Ji.position:case Ji.scale:l=mo;break;default:switch(n.itemSize){case 1:l=po;break;case 2:case 3:default:l=mo;break}break}const h=i.interpolation!==void 0?$5[i.interpolation]:lo,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const g=new l(c[d]+"."+Ji[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Zh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof nr?K5:_p;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function s6(s,e,t){const n=e.attributes,i=new On;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),a.normalized){const h=Zh(to[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new C,c=new C;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=Zh(to[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Un;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Gf(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=$h[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return at.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),ns(s,e),s6(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?J5(s,e.targets,t):s})}const Br=new Ai,Qi=new jc,$o=new re,Wf=new C,Pc=new C,yh=new C,Xf=new Ye;class r6 extends Ss{constructor(e,t,n){super(),n.style.touchAction="none";let i=null,r=null;const o=[],a=this;function c(){n.addEventListener("pointermove",p),n.addEventListener("pointerdown",g),n.addEventListener("pointerup",_),n.addEventListener("pointerleave",_)}function l(){n.removeEventListener("pointermove",p),n.removeEventListener("pointerdown",g),n.removeEventListener("pointerup",_),n.removeEventListener("pointerleave",_),n.style.cursor=""}function h(){l()}function u(){return e}function d(){return Qi}function p(f){if(a.enabled!==!1){if(m(f),Qi.setFromCamera($o,t),i){Qi.ray.intersectPlane(Br,Pc)&&i.position.copy(Pc.sub(Wf).applyMatrix4(Xf)),a.dispatchEvent({type:"drag",object:i});return}if(f.pointerType==="mouse"||f.pointerType==="pen")if(o.length=0,Qi.setFromCamera($o,t),Qi.intersectObjects(e,a.recursive,o),o.length>0){const b=o[0].object;Br.setFromNormalAndCoplanarPoint(t.getWorldDirection(Br.normal),yh.setFromMatrixPosition(b.matrixWorld)),r!==b&&r!==null&&(a.dispatchEvent({type:"hoveroff",object:r}),n.style.cursor="auto",r=null),r!==b&&(a.dispatchEvent({type:"hoveron",object:b}),n.style.cursor="pointer",r=b)}else r!==null&&(a.dispatchEvent({type:"hoveroff",object:r}),n.style.cursor="auto",r=null)}}function g(f){a.enabled!==!1&&(m(f),o.length=0,Qi.setFromCamera($o,t),Qi.intersectObjects(e,a.recursive,o),o.length>0&&(i=a.transformGroup===!0?e[0]:o[0].object,Br.setFromNormalAndCoplanarPoint(t.getWorldDirection(Br.normal),yh.setFromMatrixPosition(i.matrixWorld)),Qi.ray.intersectPlane(Br,Pc)&&(Xf.copy(i.parent.matrixWorld).invert(),Wf.copy(Pc).sub(yh.setFromMatrixPosition(i.matrixWorld))),n.style.cursor="move",a.dispatchEvent({type:"dragstart",object:i})))}function _(){a.enabled!==!1&&(i&&(a.dispatchEvent({type:"dragend",object:i}),i=null),n.style.cursor=r?"pointer":"auto")}function m(f){const b=n.getBoundingClientRect();$o.x=(f.clientX-b.left)/b.width*2-1,$o.y=-(f.clientY-b.top)/b.height*2+1}c(),this.enabled=!0,this.recursive=!0,this.transformGroup=!1,this.activate=c,this.deactivate=l,this.dispose=h,this.getObjects=u,this.getRaycaster=d}}const jf={type:"change"},vh={type:"start"},qf={type:"end"},zc=new Mo,Yf=new Ai,o6=Math.cos(70*_l.DEG2RAD);class a6 extends Ss{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mr.ROTATE,MIDDLE:mr.DOLLY,RIGHT:mr.PAN},this.touches={ONE:gr.ROTATE,TWO:gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",S),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",S),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(jf),n.update(),r=i.NONE},this.update=function(){const I=new C,de=new hi().setFromUnitVectors(e.up,new C(0,1,0)),$=de.clone().invert(),Ve=new C,Ae=new hi,ye=new C,Re=2*Math.PI;return function(fe=null){const Z=n.object.position;I.copy(Z).sub(n.target),I.applyQuaternion(de),a.setFromVector3(I),n.autoRotate&&r===i.NONE&&G(M(fe)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ge=n.minAzimuthAngle,pe=n.maxAzimuthAngle;isFinite(ge)&&isFinite(pe)&&(ge<-Math.PI?ge+=Re:ge>Math.PI&&(ge-=Re),pe<-Math.PI?pe+=Re:pe>Math.PI&&(pe-=Re),ge<=pe?a.theta=Math.max(ge,Math.min(pe,a.theta)):a.theta=a.theta>(ge+pe)/2?Math.max(ge,a.theta):Math.min(pe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.zoomToCursor&&z||n.object.isOrthographicCamera?a.radius=Q(a.radius):a.radius=Q(a.radius*l),I.setFromSpherical(a),I.applyQuaternion($),Z.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let te=!1;if(n.zoomToCursor&&z){let Le=null;if(n.object.isPerspectiveCamera){const ke=I.length();Le=Q(ke*l);const xt=ke-Le;n.object.position.addScaledVector(v,xt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ke=new C(T.x,T.y,0);ke.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),te=!0;const xt=new C(T.x,T.y,0);xt.unproject(n.object),n.object.position.sub(xt).add(ke),n.object.updateMatrixWorld(),Le=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Le!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Le).add(n.object.position):(zc.origin.copy(n.object.position),zc.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(zc.direction))<o6?e.lookAt(n.target):(Yf.setFromNormalAndCoplanarPoint(n.object.up,n.target),zc.intersectPlane(Yf,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),te=!0);return l=1,z=!1,te||Ve.distanceToSquared(n.object.position)>o||8*(1-Ae.dot(n.object.quaternion))>o||ye.distanceToSquared(n.target)>0?(n.dispatchEvent(jf),Ve.copy(n.object.position),Ae.copy(n.object.quaternion),ye.copy(n.target),te=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ne),n.domElement.removeEventListener("pointerdown",be),n.domElement.removeEventListener("pointercancel",Fe),n.domElement.removeEventListener("wheel",A),n.domElement.removeEventListener("pointermove",Ee),n.domElement.removeEventListener("pointerup",Fe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",S),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Uf,c=new Uf;let l=1;const h=new C,u=new re,d=new re,p=new re,g=new re,_=new re,m=new re,f=new re,b=new re,x=new re,v=new C,T=new re;let z=!1;const w=[],F={};function M(I){return I!==null?2*Math.PI/60*n.autoRotateSpeed*I:2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function G(I){c.theta-=I}function ie(I){c.phi-=I}const se=function(){const I=new C;return function($,Ve){I.setFromMatrixColumn(Ve,0),I.multiplyScalar(-$),h.add(I)}}(),N=function(){const I=new C;return function($,Ve){n.screenSpacePanning===!0?I.setFromMatrixColumn(Ve,1):(I.setFromMatrixColumn(Ve,0),I.crossVectors(n.object.up,I)),I.multiplyScalar($),h.add(I)}}(),H=function(){const I=new C;return function($,Ve){const Ae=n.domElement;if(n.object.isPerspectiveCamera){const ye=n.object.position;I.copy(ye).sub(n.target);let Re=I.length();Re*=Math.tan(n.object.fov/2*Math.PI/180),se(2*$*Re/Ae.clientHeight,n.object.matrix),N(2*Ve*Re/Ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(se($*(n.object.right-n.object.left)/n.object.zoom/Ae.clientWidth,n.object.matrix),N(Ve*(n.object.top-n.object.bottom)/n.object.zoom/Ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function le(I){if(!n.zoomToCursor)return;z=!0;const de=n.domElement.getBoundingClientRect(),$=I.clientX-de.left,Ve=I.clientY-de.top,Ae=de.width,ye=de.height;T.x=$/Ae*2-1,T.y=-(Ve/ye)*2+1,v.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function Q(I){return Math.max(n.minDistance,Math.min(n.maxDistance,I))}function K(I){u.set(I.clientX,I.clientY)}function D(I){le(I),f.set(I.clientX,I.clientY)}function V(I){g.set(I.clientX,I.clientY)}function _e(I){d.set(I.clientX,I.clientY),p.subVectors(d,u).multiplyScalar(n.rotateSpeed);const de=n.domElement;G(2*Math.PI*p.x/de.clientHeight),ie(2*Math.PI*p.y/de.clientHeight),u.copy(d),n.update()}function ve(I){b.set(I.clientX,I.clientY),x.subVectors(b,f),x.y>0?Y(L()):x.y<0&&j(L()),f.copy(b),n.update()}function Me(I){_.set(I.clientX,I.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),H(m.x,m.y),g.copy(_),n.update()}function De(I){le(I),I.deltaY<0?j(L()):I.deltaY>0&&Y(L()),n.update()}function Ie(I){let de=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?ie(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),de=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?ie(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),de=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),de=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),de=!0;break}de&&(I.preventDefault(),n.update())}function ze(){if(w.length===1)u.set(w[0].pageX,w[0].pageY);else{const I=.5*(w[0].pageX+w[1].pageX),de=.5*(w[0].pageY+w[1].pageY);u.set(I,de)}}function Qe(){if(w.length===1)g.set(w[0].pageX,w[0].pageY);else{const I=.5*(w[0].pageX+w[1].pageX),de=.5*(w[0].pageY+w[1].pageY);g.set(I,de)}}function ot(){const I=w[0].pageX-w[1].pageX,de=w[0].pageY-w[1].pageY,$=Math.sqrt(I*I+de*de);f.set(0,$)}function Oe(){n.enableZoom&&ot(),n.enablePan&&Qe()}function P(){n.enableZoom&&ot(),n.enableRotate&&ze()}function he(I){if(w.length==1)d.set(I.pageX,I.pageY);else{const $=xe(I),Ve=.5*(I.pageX+$.x),Ae=.5*(I.pageY+$.y);d.set(Ve,Ae)}p.subVectors(d,u).multiplyScalar(n.rotateSpeed);const de=n.domElement;G(2*Math.PI*p.x/de.clientHeight),ie(2*Math.PI*p.y/de.clientHeight),u.copy(d)}function q(I){if(w.length===1)_.set(I.pageX,I.pageY);else{const de=xe(I),$=.5*(I.pageX+de.x),Ve=.5*(I.pageY+de.y);_.set($,Ve)}m.subVectors(_,g).multiplyScalar(n.panSpeed),H(m.x,m.y),g.copy(_)}function oe(I){const de=xe(I),$=I.pageX-de.x,Ve=I.pageY-de.y,Ae=Math.sqrt($*$+Ve*Ve);b.set(0,Ae),x.set(0,Math.pow(b.y/f.y,n.zoomSpeed)),Y(x.y),f.copy(b)}function ee(I){n.enableZoom&&oe(I),n.enablePan&&q(I)}function Pe(I){n.enableZoom&&oe(I),n.enableRotate&&he(I)}function be(I){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",Ee),n.domElement.addEventListener("pointerup",Fe)),ce(I),I.pointerType==="touch"?B(I):Ke(I))}function Ee(I){n.enabled!==!1&&(I.pointerType==="touch"?ae(I):ut(I))}function Fe(I){Ce(I),w.length===0&&(n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",Ee),n.domElement.removeEventListener("pointerup",Fe)),n.dispatchEvent(qf),r=i.NONE}function Ke(I){let de;switch(I.button){case 0:de=n.mouseButtons.LEFT;break;case 1:de=n.mouseButtons.MIDDLE;break;case 2:de=n.mouseButtons.RIGHT;break;default:de=-1}switch(de){case mr.DOLLY:if(n.enableZoom===!1)return;D(I),r=i.DOLLY;break;case mr.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;V(I),r=i.PAN}else{if(n.enableRotate===!1)return;K(I),r=i.ROTATE}break;case mr.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;K(I),r=i.ROTATE}else{if(n.enablePan===!1)return;V(I),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(vh)}function ut(I){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;_e(I);break;case i.DOLLY:if(n.enableZoom===!1)return;ve(I);break;case i.PAN:if(n.enablePan===!1)return;Me(I);break}}function A(I){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(I.preventDefault(),n.dispatchEvent(vh),De(I),n.dispatchEvent(qf))}function S(I){n.enabled===!1||n.enablePan===!1||Ie(I)}function B(I){switch(ue(I),w.length){case 1:switch(n.touches.ONE){case gr.ROTATE:if(n.enableRotate===!1)return;ze(),r=i.TOUCH_ROTATE;break;case gr.PAN:if(n.enablePan===!1)return;Qe(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case gr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Oe(),r=i.TOUCH_DOLLY_PAN;break;case gr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;P(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(vh)}function ae(I){switch(ue(I),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;he(I),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;q(I),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ee(I),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pe(I),n.update();break;default:r=i.NONE}}function ne(I){n.enabled!==!1&&I.preventDefault()}function ce(I){w.push(I)}function Ce(I){delete F[I.pointerId];for(let de=0;de<w.length;de++)if(w[de].pointerId==I.pointerId){w.splice(de,1);return}}function ue(I){let de=F[I.pointerId];de===void 0&&(de=new re,F[I.pointerId]=de),de.set(I.pageX,I.pageY)}function xe(I){const de=I.pointerId===w[0].pointerId?w[1]:w[0];return F[de.pointerId]}n.domElement.addEventListener("contextmenu",ne),n.domElement.addEventListener("pointerdown",be),n.domElement.addEventListener("pointercancel",Fe),n.domElement.addEventListener("wheel",A,{passive:!1}),this.update()}}const Kf=new On,Ic=new C;class xp extends d5{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new qt(e,3)),this.setAttribute("uv",new qt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Yh(t,6,1);return this.setAttribute("instanceStart",new Hn(n,3,0)),this.setAttribute("instanceEnd",new Hn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Yh(t,6,1);return this.setAttribute("instanceColorStart",new Hn(n,3,0)),this.setAttribute("instanceColorEnd",new Hn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new j9(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Kf.setFromBufferAttribute(t),this.boundingBox.union(Kf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ic.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ic)),Ic.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ic));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}me.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new re(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};dn.line={uniforms:vu.merge([me.common,me.fog,me.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Du extends ms{constructor(e){super({type:"LineMaterial",uniforms:vu.clone(dn.line.uniforms),vertexShader:dn.line.vertexShader,fragmentShader:dn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const $f=new C,Zf=new C,Vt=new rt,Gt=new rt,ii=new rt,Sh=new C,bh=new Ye,Xt=new M5,Jf=new C,Nc=new On,Dc=new Un,si=new rt;let ci,$s;function Qf(s,e,t){return si.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),si.multiplyScalar(1/si.w),si.x=$s/t.width,si.y=$s/t.height,si.applyMatrix4(s.projectionMatrixInverse),si.multiplyScalar(1/si.w),Math.abs(Math.max(si.x,si.y))}function c6(s,e){const t=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,c=o;a<c;a++){Xt.start.fromBufferAttribute(i,a),Xt.end.fromBufferAttribute(r,a),Xt.applyMatrix4(t);const l=new C,h=new C;ci.distanceSqToSegment(Xt.start,Xt.end,h,l),h.distanceTo(l)<$s*.5&&e.push({point:h,pointOnLine:l,distance:ci.origin.distanceTo(h),object:s,face:null,faceIndex:a,uv:null,uv1:null})}}function l6(s,e,t){const n=e.projectionMatrix,r=s.material.resolution,o=s.matrixWorld,a=s.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),u=-e.near;ci.at(1,ii),ii.w=1,ii.applyMatrix4(e.matrixWorldInverse),ii.applyMatrix4(n),ii.multiplyScalar(1/ii.w),ii.x*=r.x/2,ii.y*=r.y/2,ii.z=0,Sh.copy(ii),bh.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,p=h;d<p;d++){if(Vt.fromBufferAttribute(c,d),Gt.fromBufferAttribute(l,d),Vt.w=1,Gt.w=1,Vt.applyMatrix4(bh),Gt.applyMatrix4(bh),Vt.z>u&&Gt.z>u)continue;if(Vt.z>u){const x=Vt.z-Gt.z,v=(Vt.z-u)/x;Vt.lerp(Gt,v)}else if(Gt.z>u){const x=Gt.z-Vt.z,v=(Gt.z-u)/x;Gt.lerp(Vt,v)}Vt.applyMatrix4(n),Gt.applyMatrix4(n),Vt.multiplyScalar(1/Vt.w),Gt.multiplyScalar(1/Gt.w),Vt.x*=r.x/2,Vt.y*=r.y/2,Gt.x*=r.x/2,Gt.y*=r.y/2,Xt.start.copy(Vt),Xt.start.z=0,Xt.end.copy(Gt),Xt.end.z=0;const _=Xt.closestPointToPointParameter(Sh,!0);Xt.at(_,Jf);const m=_l.lerp(Vt.z,Gt.z,_),f=m>=-1&&m<=1,b=Sh.distanceTo(Jf)<$s*.5;if(f&&b){Xt.start.fromBufferAttribute(c,d),Xt.end.fromBufferAttribute(l,d),Xt.start.applyMatrix4(o),Xt.end.applyMatrix4(o);const x=new C,v=new C;ci.distanceSqToSegment(Xt.start,Xt.end,v,x),t.push({point:v,pointOnLine:x,distance:ci.origin.distanceTo(v),object:s,face:null,faceIndex:d,uv:null,uv1:null})}}}class h6 extends sn{constructor(e=new xp,t=new Du({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)$f.fromBufferAttribute(t,o),Zf.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+$f.distanceTo(Zf);const r=new Yh(i,2,1);return e.setAttribute("instanceDistanceStart",new Hn(r,1,0)),e.setAttribute("instanceDistanceEnd",new Hn(r,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ci=e.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;$s=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Dc.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=$s*.5;else{const u=Math.max(i.near,Dc.distanceToPoint(ci.origin));l=Qf(i,u,c.resolution)}if(Dc.radius+=l,ci.intersectsSphere(Dc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Nc.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=$s*.5;else{const u=Math.max(i.near,Nc.distanceToPoint(ci.origin));h=Qf(i,u,c.resolution)}Nc.expandByScalar(h),ci.intersectsBox(Nc)!==!1&&(n?c6(this,t):l6(this,i,t))}}class yp extends xp{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class u6 extends h6{constructor(e=new yp,t=new Du({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}class d6 extends rr{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Pu(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const c=r.parse(JSON.parse(a));t&&t(c)},n,i)}parse(e){return new f6(e)}}class f6{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=p6(e,t,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function p6(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,c=0;for(let l=0;l<n.length;l++){const h=n[l];if(h===`
`)a=0,c-=r;else{const u=m6(h,i,a,c,t);a+=u.offsetX,o.push(u.path)}}return o}function m6(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new T5;let a,c,l,h,u,d,p,g;if(r.o){const _=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,f=_.length;m<f;)switch(_[m++]){case"m":a=_[m++]*e+t,c=_[m++]*e+n,o.moveTo(a,c);break;case"l":a=_[m++]*e+t,c=_[m++]*e+n,o.lineTo(a,c);break;case"q":l=_[m++]*e+t,h=_[m++]*e+n,u=_[m++]*e+t,d=_[m++]*e+n,o.quadraticCurveTo(u,d,l,h);break;case"b":l=_[m++]*e+t,h=_[m++]*e+n,u=_[m++]*e+t,d=_[m++]*e+n,p=_[m++]*e+t,g=_[m++]*e+n,o.bezierCurveTo(u,d,p,g,l,h);break}}return{offsetX:r.ha*e,path:o}}class e0 extends Cu{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}function g6(s){if(s&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=s,document.head.appendChild(e),s}}function Zr(s,e){var t=s.__state.conversionName.toString(),n=Math.round(s.r),i=Math.round(s.g),r=Math.round(s.b),o=s.a,a=Math.round(s.h),c=s.s.toFixed(1),l=s.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var h=s.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+r+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+r+","+o+")";if(t==="HEX")return"0x"+s.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+r+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+r+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+r+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+r+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+c+",v:"+l+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+c+",v:"+l+",a:"+o+"}"}return"unknown format"}var t0=Array.prototype.forEach,Zo=Array.prototype.slice,J={BREAK:{},extend:function(e){return this.each(Zo.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(t[i])||(e[i]=t[i])}).bind(this))},this),e},defaults:function(e){return this.each(Zo.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(e[i])&&(e[i]=t[i])}).bind(this))},this),e},compose:function(){var e=Zo.call(arguments);return function(){for(var t=Zo.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(t0&&e.forEach&&e.forEach===t0)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,r=void 0;for(i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var r=this,o=arguments;function a(){i=null,n||e.apply(r,o)}var c=n||!i;clearTimeout(i),i=setTimeout(a,t),c&&e.apply(r,o)}},toArray:function(e){return e.toArray?e.toArray():Zo.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(s){function e(t){return s.apply(this,arguments)}return e.toString=function(){return s.toString()},e}(function(s){return isNaN(s)}),isArray:Array.isArray||function(s){return s.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},_6=[{litmus:J.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:Zr},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:Zr},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:Zr},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:Zr}}},{litmus:J.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:J.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:J.isObject,conversions:{RGBA_OBJ:{read:function(e){return J.isNumber(e.r)&&J.isNumber(e.g)&&J.isNumber(e.b)&&J.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return J.isNumber(e.r)&&J.isNumber(e.g)&&J.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return J.isNumber(e.h)&&J.isNumber(e.s)&&J.isNumber(e.v)&&J.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return J.isNumber(e.h)&&J.isNumber(e.s)&&J.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Jo=void 0,Oc=void 0,Jh=function(){Oc=!1;var e=arguments.length>1?J.toArray(arguments):arguments[0];return J.each(_6,function(t){if(t.litmus(e))return J.each(t.conversions,function(n,i){if(Jo=n.read(e),Oc===!1&&Jo!==!1)return Oc=Jo,Jo.conversionName=i,Jo.conversion=n,J.BREAK}),J.BREAK}),Oc},n0=void 0,tl={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-r*t),c=n*(1-(1-r)*t),l=[[n,c,o],[a,n,o],[o,n,c],[o,a,n],[c,o,n],[n,o,a]][i];return{r:l[0]*255,g:l[1]*255,b:l[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),r=Math.max(e,t,n),o=r-i,a=void 0,c=void 0;if(r!==0)c=o/r;else return{h:NaN,s:0,v:0};return e===r?a=(t-n)/o:t===r?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:c,v:r/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(n0=t*8)|e&~(255<<n0)}},x6=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Qn=function(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")},ei=function(){function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}}(),gs=function s(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:s(r,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},Ms=function(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):s.__proto__=e)},Es=function(s,e){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:s},Ht=function(){function s(){if(Qn(this,s),this.__state=Jh.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return ei(s,[{key:"toString",value:function(){return Zr(this)}},{key:"toHexString",value:function(){return Zr(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),s}();function Ou(s,e,t){Object.defineProperty(s,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Ht.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(Ht.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function Uu(s,e){Object.defineProperty(s,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Ht.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(Ht.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}Ht.recalculateRGB=function(s,e,t){if(s.__state.space==="HEX")s.__state[e]=tl.component_from_hex(s.__state.hex,t);else if(s.__state.space==="HSV")J.extend(s.__state,tl.hsv_to_rgb(s.__state.h,s.__state.s,s.__state.v));else throw new Error("Corrupted color state")};Ht.recalculateHSV=function(s){var e=tl.rgb_to_hsv(s.r,s.g,s.b);J.extend(s.__state,{s:e.s,v:e.v}),J.isNaN(e.h)?J.isUndefined(s.__state.h)&&(s.__state.h=0):s.__state.h=e.h};Ht.COMPONENTS=["r","g","b","h","s","v","hex","a"];Ou(Ht.prototype,"r",2);Ou(Ht.prototype,"g",1);Ou(Ht.prototype,"b",0);Uu(Ht.prototype,"h");Uu(Ht.prototype,"s");Uu(Ht.prototype,"v");Object.defineProperty(Ht.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Ht.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=tl.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var or=function(){function s(e,t){Qn(this,s),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return ei(s,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),s}(),y6={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},vp={};J.each(y6,function(s,e){J.each(s,function(t){vp[t]=e})});var v6=/(\d+(\.\d+)?)px/;function ri(s){if(s==="0"||J.isUndefined(s))return 0;var e=s.match(v6);return J.isNull(e)?0:parseFloat(e[1])}var k={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,r=t;J.isUndefined(r)&&(r=!0),J.isUndefined(i)&&(i=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var r=n||{},o=vp[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var c=r.x||r.clientX||0,l=r.y||r.clientY||0;a.initMouseEvent(t,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,c,l,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var h=a.initKeyboardEvent||a.initKeyEvent;J.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),h(t,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{a.initEvent(t,r.bubbles||!1,r.cancelable||!0);break}}J.defaults(a,i),e.dispatchEvent(a)},bind:function(e,t,n,i){var r=i||!1;return e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,n),k},unbind:function(e,t,n,i){var r=i||!1;return e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n),k},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return k},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return k},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return ri(t["border-left-width"])+ri(t["border-right-width"])+ri(t["padding-left"])+ri(t["padding-right"])+ri(t.width)},getHeight:function(e){var t=getComputedStyle(e);return ri(t["border-top-width"])+ri(t["border-bottom-width"])+ri(t["padding-top"])+ri(t["padding-bottom"])+ri(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Sp=function(s){Ms(e,s);function e(t,n){Qn(this,e);var i=Es(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){r.setValue(!r.__prev)}return k.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return ei(e,[{key:"setValue",value:function(n){var i=gs(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),gs(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(or),S6=function(s){Ms(e,s);function e(t,n,i){Qn(this,e);var r=Es(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=r;if(r.__select=document.createElement("select"),J.isArray(o)){var c={};J.each(o,function(l){c[l]=l}),o=c}return J.each(o,function(l,h){var u=document.createElement("option");u.innerHTML=h,u.setAttribute("value",l),a.__select.appendChild(u)}),r.updateDisplay(),k.bind(r.__select,"change",function(){var l=this.options[this.selectedIndex].value;a.setValue(l)}),r.domElement.appendChild(r.__select),r}return ei(e,[{key:"setValue",value:function(n){var i=gs(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return k.isActive(this.__select)?this:(this.__select.value=this.getValue(),gs(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(or),b6=function(s){Ms(e,s);function e(t,n){Qn(this,e);var i=Es(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;function o(){r.setValue(r.__input.value)}function a(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),k.bind(i.__input,"keyup",o),k.bind(i.__input,"change",o),k.bind(i.__input,"blur",a),k.bind(i.__input,"keydown",function(c){c.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return ei(e,[{key:"updateDisplay",value:function(){return k.isActive(this.__input)||(this.__input.value=this.getValue()),gs(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(or);function i0(s){var e=s.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var bp=function(s){Ms(e,s);function e(t,n,i){Qn(this,e);var r=Es(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return r.__min=o.min,r.__max=o.max,r.__step=o.step,J.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=i0(r.__impliedStep),r}return ei(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),gs(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=i0(n),this}}]),e}(or);function M6(s,e){var t=Math.pow(10,e);return Math.round(s*t)/t}var nl=function(s){Ms(e,s);function e(t,n,i){Qn(this,e);var r=Es(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));r.__truncationSuspended=!1;var o=r,a=void 0;function c(){var g=parseFloat(o.__input.value);J.isNaN(g)||o.setValue(g)}function l(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function h(){l()}function u(g){var _=a-g.clientY;o.setValue(o.getValue()+_*o.__impliedStep),a=g.clientY}function d(){k.unbind(window,"mousemove",u),k.unbind(window,"mouseup",d),l()}function p(g){k.bind(window,"mousemove",u),k.bind(window,"mouseup",d),a=g.clientY}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),k.bind(r.__input,"change",c),k.bind(r.__input,"blur",h),k.bind(r.__input,"mousedown",p),k.bind(r.__input,"keydown",function(g){g.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,l())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return ei(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():M6(this.getValue(),this.__precision),gs(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(bp);function s0(s,e,t,n,i){return n+(i-n)*((s-e)/(t-e))}var Qh=function(s){Ms(e,s);function e(t,n,i,r,o){Qn(this,e);var a=Es(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:r,step:o})),c=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),k.bind(a.__background,"mousedown",l),k.bind(a.__background,"touchstart",d),k.addClass(a.__background,"slider"),k.addClass(a.__foreground,"slider-fg");function l(_){document.activeElement.blur(),k.bind(window,"mousemove",h),k.bind(window,"mouseup",u),h(_)}function h(_){_.preventDefault();var m=c.__background.getBoundingClientRect();return c.setValue(s0(_.clientX,m.left,m.right,c.__min,c.__max)),!1}function u(){k.unbind(window,"mousemove",h),k.unbind(window,"mouseup",u),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}function d(_){_.touches.length===1&&(k.bind(window,"touchmove",p),k.bind(window,"touchend",g),p(_))}function p(_){var m=_.touches[0].clientX,f=c.__background.getBoundingClientRect();c.setValue(s0(m,f.left,f.right,c.__min,c.__max))}function g(){k.unbind(window,"touchmove",p),k.unbind(window,"touchend",g),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return ei(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",gs(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(bp),Mp=function(s){Ms(e,s);function e(t,n,i){Qn(this,e);var r=Es(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=r;return r.__button=document.createElement("div"),r.__button.innerHTML=i===void 0?"Fire":i,k.bind(r.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),k.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return ei(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(or),eu=function(s){Ms(e,s);function e(t,n){Qn(this,e);var i=Es(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new Ht(i.getValue()),i.__temp=new Ht(0);var r=i;i.domElement=document.createElement("div"),k.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",k.bind(i.__input,"keydown",function(_){_.keyCode===13&&u.call(this)}),k.bind(i.__input,"blur",u),k.bind(i.__selector,"mousedown",function(){k.addClass(this,"drag").bind(window,"mouseup",function(){k.removeClass(r.__selector,"drag")})}),k.bind(i.__selector,"touchstart",function(){k.addClass(this,"drag").bind(window,"touchend",function(){k.removeClass(r.__selector,"drag")})});var o=document.createElement("div");J.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),J.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),J.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),J.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),J.extend(o.style,{width:"100%",height:"100%",background:"none"}),r0(o,"top","rgba(0,0,0,0)","#000"),J.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),T6(i.__hue_field),J.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),k.bind(i.__saturation_field,"mousedown",a),k.bind(i.__saturation_field,"touchstart",a),k.bind(i.__field_knob,"mousedown",a),k.bind(i.__field_knob,"touchstart",a),k.bind(i.__hue_field,"mousedown",c),k.bind(i.__hue_field,"touchstart",c);function a(_){p(_),k.bind(window,"mousemove",p),k.bind(window,"touchmove",p),k.bind(window,"mouseup",l),k.bind(window,"touchend",l)}function c(_){g(_),k.bind(window,"mousemove",g),k.bind(window,"touchmove",g),k.bind(window,"mouseup",h),k.bind(window,"touchend",h)}function l(){k.unbind(window,"mousemove",p),k.unbind(window,"touchmove",p),k.unbind(window,"mouseup",l),k.unbind(window,"touchend",l),d()}function h(){k.unbind(window,"mousemove",g),k.unbind(window,"touchmove",g),k.unbind(window,"mouseup",h),k.unbind(window,"touchend",h),d()}function u(){var _=Jh(this.value);_!==!1?(r.__color.__state=_,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}function d(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function p(_){_.type.indexOf("touch")===-1&&_.preventDefault();var m=r.__saturation_field.getBoundingClientRect(),f=_.touches&&_.touches[0]||_,b=f.clientX,x=f.clientY,v=(b-m.left)/(m.right-m.left),T=1-(x-m.top)/(m.bottom-m.top);return T>1?T=1:T<0&&(T=0),v>1?v=1:v<0&&(v=0),r.__color.v=T,r.__color.s=v,r.setValue(r.__color.toOriginal()),!1}function g(_){_.type.indexOf("touch")===-1&&_.preventDefault();var m=r.__hue_field.getBoundingClientRect(),f=_.touches&&_.touches[0]||_,b=f.clientY,x=1-(b-m.top)/(m.bottom-m.top);return x>1?x=1:x<0&&(x=0),r.__color.h=x*360,r.setValue(r.__color.toOriginal()),!1}return i}return ei(e,[{key:"updateDisplay",value:function(){var n=Jh(this.getValue());if(n!==!1){var i=!1;J.each(Ht.COMPONENTS,function(a){if(!J.isUndefined(n[a])&&!J.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&J.extend(this.__color.__state,n)}J.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,o=255-r;J.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,r0(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),J.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(or),E6=["-moz-","-o-","-webkit-","-ms-",""];function r0(s,e,t,n){s.style.background="",J.each(E6,function(i){s.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function T6(s){s.style.background="",s.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",s.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var w6={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var r=n.getElementsByTagName("head")[0];try{r.appendChild(i)}catch{}}},A6=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,L6=function(e,t){var n=e[t];return J.isArray(arguments[2])||J.isObject(arguments[2])?new S6(e,t,arguments[2]):J.isNumber(n)?J.isNumber(arguments[2])&&J.isNumber(arguments[3])?J.isNumber(arguments[4])?new Qh(e,t,arguments[2],arguments[3],arguments[4]):new Qh(e,t,arguments[2],arguments[3]):J.isNumber(arguments[4])?new nl(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new nl(e,t,{min:arguments[2],max:arguments[3]}):J.isString(n)?new b6(e,t):J.isFunction(n)?new Mp(e,t,""):J.isBoolean(n)?new Sp(e,t):null};function C6(s){setTimeout(s,1e3/60)}var R6=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||C6,P6=function(){function s(){Qn(this,s),this.backgroundElement=document.createElement("div"),J.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),k.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),J.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;k.bind(this.backgroundElement,"click",function(){e.hide()})}return ei(s,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),J.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",k.unbind(t.domElement,"webkitTransitionEnd",i),k.unbind(t.domElement,"transitionend",i),k.unbind(t.domElement,"oTransitionEnd",i)};k.bind(this.domElement,"webkitTransitionEnd",n),k.bind(this.domElement,"transitionend",n),k.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-k.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-k.getHeight(this.domElement)/2+"px"}}]),s}(),z6=g6(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);w6.inject(z6);var o0="dg",a0=72,c0=20,Pa="Default",na=function(){try{return!!window.localStorage}catch{return!1}}(),xa=void 0,l0=!0,Hr=void 0,Mh=!1,Ep=[],ft=function s(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),k.addClass(this.domElement,o0),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=J.defaults(n,{closeOnTop:!1,autoPlace:!0,width:s.DEFAULT_WIDTH}),n=J.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),J.isUndefined(n.load)?n.load={preset:Pa}:n.preset&&(n.load.preset=n.preset),J.isUndefined(n.parent)&&n.hideable&&Ep.push(this),n.resizable=J.isUndefined(n.parent)&&n.resizable,n.autoPlace&&J.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=na&&localStorage.getItem(Vr(this,"isLocal"))==="true",r=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(d){t.parent?t.getRoot().preset=d:n.load.preset=d,O6(this),t.revert()}},width:{get:function(){return n.width},set:function(d){n.width=d,iu(t,d)}},name:{get:function(){return n.name},set:function(d){n.name=d,o&&(o.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(d){n.closed=d,n.closed?k.addClass(t.__ul,s.CLASS_CLOSED):k.removeClass(t.__ul,s.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?s.TEXT_OPEN:s.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(d){na&&(i=d,d?k.bind(window,"unload",r):k.unbind(window,"unload",r),localStorage.setItem(Vr(t,"isLocal"),d))}}}),J.isUndefined(n.parent)){if(this.closed=n.closed||!1,k.addClass(this.domElement,s.CLASS_MAIN),k.makeSelectable(this.domElement,!1),na&&i){t.useLocalStorage=!0;var a=localStorage.getItem(Vr(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=s.TEXT_CLOSED,k.addClass(this.__closeButton,s.CLASS_CLOSE_BUTTON),n.closeOnTop?(k.addClass(this.__closeButton,s.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(k.addClass(this.__closeButton,s.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),k.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var c=document.createTextNode(n.name);k.addClass(c,"controller-name"),o=Fu(t,c);var l=function(d){return d.preventDefault(),t.closed=!t.closed,!1};k.addClass(this.__ul,s.CLASS_CLOSED),k.addClass(o,"title"),k.bind(o,"click",l),n.closed||(this.closed=!1)}n.autoPlace&&(J.isUndefined(n.parent)&&(l0&&(Hr=document.createElement("div"),k.addClass(Hr,o0),k.addClass(Hr,s.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Hr),l0=!1),Hr.appendChild(this.domElement),k.addClass(this.domElement,s.CLASS_AUTO_PLACE)),this.parent||iu(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},k.bind(window,"resize",this.__resizeHandler),k.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),k.bind(this.__ul,"transitionend",this.__resizeHandler),k.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&D6(this),r=function(){na&&localStorage.getItem(Vr(t,"isLocal"))==="true"&&localStorage.setItem(Vr(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=r;function h(){var u=t.getRoot();u.width+=1,J.defer(function(){u.width-=1})}n.parent||h()};ft.toggleHide=function(){Mh=!Mh,J.each(Ep,function(s){s.domElement.style.display=Mh?"none":""})};ft.CLASS_AUTO_PLACE="a";ft.CLASS_AUTO_PLACE_CONTAINER="ac";ft.CLASS_MAIN="main";ft.CLASS_CONTROLLER_ROW="cr";ft.CLASS_TOO_TALL="taller-than-window";ft.CLASS_CLOSED="closed";ft.CLASS_CLOSE_BUTTON="close-button";ft.CLASS_CLOSE_TOP="close-top";ft.CLASS_CLOSE_BOTTOM="close-bottom";ft.CLASS_DRAG="drag";ft.DEFAULT_WIDTH=245;ft.TEXT_CLOSED="Close Controls";ft.TEXT_OPEN="Open Controls";ft._keydownHandler=function(s){document.activeElement.type!=="text"&&(s.which===a0||s.keyCode===a0)&&ft.toggleHide()};k.bind(window,"keydown",ft._keydownHandler,!1);J.extend(ft.prototype,{add:function(e,t){return ya(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return ya(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;J.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Hr.removeChild(this.domElement);var e=this;J.each(this.__folders,function(t){e.removeFolder(t)}),k.unbind(window,"keydown",ft._keydownHandler,!1),h0(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new ft(t);this.__folders[e]=n;var i=Fu(this,n.domElement);return k.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],h0(e);var t=this;J.each(e.__folders,function(n){e.removeFolder(n)}),J.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=k.getOffset(e.__ul).top,n=0;J.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=k.getHeight(i))}),window.innerHeight-t-c0<n?(k.addClass(e.domElement,ft.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-c0+"px"):(k.removeClass(e.domElement,ft.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&J.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:J.debounce(function(){this.onResize()},50),remember:function(){if(J.isUndefined(xa)&&(xa=new P6,xa.domElement.innerHTML=A6),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;J.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&N6(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&iu(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Uc(this)),e.folders={},J.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Uc(this),tu(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Pa]=Uc(this,!0)),this.load.remembered[e]=Uc(this),this.preset=e,nu(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){J.each(this.__controllers,function(t){this.getRoot().load.remembered?Tp(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),J.each(this.__folders,function(t){t.revert(t)}),e||tu(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&wp(this.__listening)},updateDisplay:function(){J.each(this.__controllers,function(e){e.updateDisplay()}),J.each(this.__folders,function(e){e.updateDisplay()})}});function Fu(s,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?s.__ul.insertBefore(n,t):s.__ul.appendChild(n),s.onResize(),n}function h0(s){k.unbind(window,"resize",s.__resizeHandler),s.saveToLocalStorageIfPossible&&k.unbind(window,"unload",s.saveToLocalStorageIfPossible)}function tu(s,e){var t=s.__preset_select[s.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function I6(s,e,t){if(t.__li=e,t.__gui=s,J.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),ya(s,t.object,t.property,{before:a,factoryArgs:[J.toArray(arguments)]})}if(J.isArray(o)||J.isObject(o)){var c=t.__li.nextElementSibling;return t.remove(),ya(s,t.object,t.property,{before:c,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Qh){var n=new nl(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});J.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var o=t[r],a=n[r];t[r]=n[r]=function(){var c=Array.prototype.slice.call(arguments);return a.apply(n,c),o.apply(t,c)}}),k.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof nl){var i=function(o){if(J.isNumber(t.__min)&&J.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,c=t.__gui.__listening.indexOf(t)>-1;t.remove();var l=ya(s,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return l.name(a),c&&l.listen(),l}return o};t.min=J.compose(i,t.min),t.max=J.compose(i,t.max)}else t instanceof Sp?(k.bind(e,"click",function(){k.fakeEvent(t.__checkbox,"click")}),k.bind(t.__checkbox,"click",function(r){r.stopPropagation()})):t instanceof Mp?(k.bind(e,"click",function(){k.fakeEvent(t.__button,"click")}),k.bind(e,"mouseover",function(){k.addClass(t.__button,"hover")}),k.bind(e,"mouseout",function(){k.removeClass(t.__button,"hover")})):t instanceof eu&&(k.addClass(e,"color"),t.updateDisplay=J.compose(function(r){return e.style.borderLeftColor=t.__color.toString(),r},t.updateDisplay),t.updateDisplay());t.setValue=J.compose(function(r){return s.getRoot().__preset_select&&t.isModified()&&tu(s.getRoot(),!0),r},t.setValue)}function Tp(s,e){var t=s.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var r=t.load.remembered,o=void 0;if(r[s.preset])o=r[s.preset];else if(r[Pa])o=r[Pa];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}function ya(s,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new eu(e,t);else{var r=[e,t].concat(n.factoryArgs);i=L6.apply(s,r)}n.before instanceof or&&(n.before=n.before.__li),Tp(s,i),k.addClass(i.domElement,"c");var o=document.createElement("span");k.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var c=Fu(s,a,n.before);return k.addClass(c,ft.CLASS_CONTROLLER_ROW),i instanceof eu?k.addClass(c,"color"):k.addClass(c,x6(i.getValue())),I6(s,c,i),s.__controllers.push(i),i}function Vr(s,e){return document.location.href+"."+e}function nu(s,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,s.__preset_select.appendChild(n),t&&(s.__preset_select.selectedIndex=s.__preset_select.length-1)}function u0(s,e){e.style.display=s.useLocalStorage?"block":"none"}function N6(s){var e=s.__save_row=document.createElement("li");k.addClass(s.domElement,"has-save"),s.__ul.insertBefore(e,s.__ul.firstChild),k.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",k.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",k.addClass(n,"button"),k.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",k.addClass(i,"button"),k.addClass(i,"save-as");var r=document.createElement("span");r.innerHTML="Revert",k.addClass(r,"button"),k.addClass(r,"revert");var o=s.__preset_select=document.createElement("select");if(s.load&&s.load.remembered?J.each(s.load.remembered,function(u,d){nu(s,d,d===s.preset)}):nu(s,Pa,!1),k.bind(o,"change",function(){for(var u=0;u<s.__preset_select.length;u++)s.__preset_select[u].innerHTML=s.__preset_select[u].value;s.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(r),na){var a=document.getElementById("dg-local-explain"),c=document.getElementById("dg-local-storage"),l=document.getElementById("dg-save-locally");l.style.display="block",localStorage.getItem(Vr(s,"isLocal"))==="true"&&c.setAttribute("checked","checked"),u0(s,a),k.bind(c,"change",function(){s.useLocalStorage=!s.useLocalStorage,u0(s,a)})}var h=document.getElementById("dg-new-constructor");k.bind(h,"keydown",function(u){u.metaKey&&(u.which===67||u.keyCode===67)&&xa.hide()}),k.bind(t,"click",function(){h.innerHTML=JSON.stringify(s.getSaveObject(),void 0,2),xa.show(),h.focus(),h.select()}),k.bind(n,"click",function(){s.save()}),k.bind(i,"click",function(){var u=prompt("Enter a new preset name.");u&&s.saveAs(u)}),k.bind(r,"click",function(){s.revert()})}function D6(s){var e=void 0;s.__resize_handle=document.createElement("div"),J.extend(s.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(r){return r.preventDefault(),s.width+=e-r.clientX,s.onResize(),e=r.clientX,!1}function n(){k.removeClass(s.__closeButton,ft.CLASS_DRAG),k.unbind(window,"mousemove",t),k.unbind(window,"mouseup",n)}function i(r){return r.preventDefault(),e=r.clientX,k.addClass(s.__closeButton,ft.CLASS_DRAG),k.bind(window,"mousemove",t),k.bind(window,"mouseup",n),!1}k.bind(s.__resize_handle,"mousedown",i),k.bind(s.__closeButton,"mousedown",i),s.domElement.insertBefore(s.__resize_handle,s.domElement.firstElementChild)}function iu(s,e){s.domElement.style.width=e+"px",s.__save_row&&s.autoPlace&&(s.__save_row.style.width=e+"px"),s.__closeButton&&(s.__closeButton.style.width=e+"px")}function Uc(s,e){var t={};return J.each(s.__rememberedObjects,function(n,i){var r={},o=s.__rememberedObjectIndecesToControllers[i];J.each(o,function(a,c){r[c]=e?a.initialValue:a.getValue()}),t[i]=r}),t}function O6(s){for(var e=0;e<s.__preset_select.length;e++)s.__preset_select[e].value===s.preset&&(s.__preset_select.selectedIndex=e)}function wp(s){s.length!==0&&R6.call(window,function(){wp(s)}),J.each(s,function(e){e.updateDisplay()})}var U6=ft;const Ap=document.getElementById("simscene"),F6=document.getElementById("consumer-unit-toggle"),il=document.getElementById("consumer-unit"),B6=document.getElementById("schematics-toggle"),sl=document.getElementById("schematics"),k6=document.getElementById("graph-toggle"),H6=document.getElementById("graph"),V6=document.getElementById("info-toggle"),va=document.getElementById("info"),G6=document.getElementById("loading-screen"),W6=document.getElementById("loading-progress");F6.addEventListener("click",()=>{il.classList.toggle("hidden")});B6.addEventListener("click",()=>{sl.classList.toggle("hidden")});k6.addEventListener("click",()=>{H6.classList.toggle("hidden")});V6.addEventListener("click",s=>{s.stopPropagation(),va.classList.toggle("hidden")});document.addEventListener("click",s=>{s.target!==va&&!va.contains(s.target)&&va.classList.add("hidden")});const gn=new r9,ss=new nn(75,window.innerWidth/window.innerHeight,.5,1e3),bl=new U6,Fi=new vl({antialias:!0});Fi.setSize(window.innerWidth,window.innerHeight);Ap.appendChild(Fi.domElement);const rs=new Fa(-1,1,1,-1,1,1e3),Ml=new vl({antialias:!0});Ml.setSize(.3*window.innerWidth,.3*window.innerHeight);il.appendChild(Ml.domElement);const kn=new Fa(-1,1,1,-1,1,1e3),_o=new vl({antialias:!0});_o.setSize(.3*window.innerWidth,.7*window.innerHeight);sl.appendChild(_o.domElement);gn.add(kn);const X6=.5,j6=.4,Jr=j6/X6;function Lp(s,e,t,n){s.position.copy(e),s.lookAt(t),s.left=-Jr*n,s.right=Jr*n,s.top=n,s.bottom=-n,s.updateProjectionMatrix()}const q6=new C(.5,1.5,2),Y6=new C(1.4,.5,-.5),ia=2;Lp(rs,q6,Y6,ia);const K6=new C(-2.22,0,.375),$6=new C(-2.22,-4,.375),sa=1;Lp(kn,K6,$6,sa);function Cp(){const s=window.innerWidth,e=window.innerHeight;ss.aspect=s/e,ss.updateProjectionMatrix(),rs.left=-Jr*ia*s/window.innerWidth,rs.right=Jr*ia*s/window.innerWidth,rs.top=ia*e/window.innerHeight,rs.bottom=-ia*e/window.innerHeight,rs.updateProjectionMatrix(),kn.left=-Jr*sa*s/window.innerWidth,kn.right=Jr*sa*s/window.innerWidth,kn.top=sa*e/window.innerHeight,kn.bottom=-sa*e/window.innerHeight,kn.updateProjectionMatrix(),Fi.setSize(s,e),Ml.setSize(.3*s,.3*e),_o.setSize(.3*s,.7*e)}window.addEventListener("resize",Cp);Cp();const Z6=new h5(16777215,.1);gn.add(Z6);const Gi=new pp(16777215,1);Gi.position.set(-2,2,20);gn.add(Gi);const J6=new C(-4,0,0);Gi.target.position.copy(J6);gn.add(Gi.target);Gi.angle=Math.PI/3;Gi.penumbra=.2;Gi.intensity=50;Gi.distance=30;Gi.decay=1.3;const Jn=new mp(16777215,75,100);Jn.position.set(-4,5,4);Jn.castShadow=!0;gn.add(Jn);const Q6=1;new E5(Jn,Q6);Fi.shadowMap.enabled=!0;Fi.shadowMap.type=S0;Jn.shadow.mapSize.width=2048;Jn.shadow.mapSize.height=2048;Jn.shadow.camera.near=.5;Jn.shadow.camera.far=500;Jn.shadow.bias=-.001;function ra(){He&&je&&as&&xo?Jn.visible=!0:Jn.visible=!1}const Bu=new u5(16777215,.4,1.6,2.1);Bu.position.set(-2.22,-4.25,.35);gn.add(Bu);const e_=new C(-2.22,-5,.35);Bu.lookAt(e_);let It=!0,ln=!0,Tn=!0,He=!0,je=!0,bn=!0,Pi=!0,Sa=!0,Zs=!1,Js=!1,as=!0,xo=!0,bt=!0,Nt=!1,_s=!1,ba=!0,Ma=!1,fn=!1,oa=23e4,Gr=23,rl,li,Pn=10,yo=.001,Dn=0,vo=.5,ol,al,cl,ll,hl,ul,dl,za=!1,Ia=!1,Na=!1,Da=!1,su,_t=!1,Gs,ru,Ws,Us,Fs,ou,Xs,au,cu,lu,hu,uu,Wr,Xr,jr,qc,Eh,Yc,aa,du,fu,ca,pu,la,ha,Rp,qr,Bs;const t_=new w5,n_="meshes.glb";let Qo;t_.load(n_,function(s){Qo=s.scene,gn.add(Qo);const e=Qo.children.slice(0,66);function t(Ne){Ne.isMesh&&(Ne.receiveShadow=!0,Ne.castShadow=!0),Ne.children&&Ne.children.forEach(we=>{t(we)})}e.forEach(Ne=>{t(Ne)}),Qo.children.slice(93,123).forEach(Ne=>{Ne.isMesh&&(Ne.material.transparent=!0,Ne.material.opacity=.01,Ne.visible=!0)});const i={};Qo.children.forEach(Ne=>{i[Ne.name]=Ne}),su=i.fanrotor;const r=i.intshadmains,o=i.interactMainsSwitch;Gs=i.intshadmainsswitch;const a=i.intersectSchematicsMains;ru=i.schematicMains;const c=i.intshadrcd,l=i.interactRcdSwitch;Xs=i.intshadrcdswitch;const h=i.intersectSchematicsRCD;cu=i.schematicRCDN,lu=i.schematicRCDL1,hu=i.schematicRCDL2,uu=i.schematicRCDL3,au=i.schematicRCDconnect;const u=i.intshadsurgeprotL2,d=i.interactMcbL2;Us=i.intshadsurgeprotL2switch;const p=i.intersectSchematicsMCBL2,g=i.schematicSurgeL2,_=i.intshadwallsocket,m=i.intshadwallsocketframe,f=i.intshadfancable0,b=i.intshadfancable1,x=i.intersectSchematicsSocket,v=i.schematicSocket;b.visible=!1,Wr=i.intshadintshadfanbtn0,Xr=i.intshadintshadfanbtn1,jr=i.intshadintshadfanbtn2;const T=i.fanSpeed0;T.material.transparent=!0,T.material.opacity=1;const z=i.fanSpeed1;z.material.transparent=!0,z.material.opacity=.5;const w=i.fanSpeed2;w.material.transparent=!0,w.material.opacity=.5;const F=i.intersectSchematicsFan0,M=i.intersectSchematicsFan1,L=i.intersectSchematicsFan2,G=i.intshadsurgeprotL3,ie=i.interactMcbL3;Fs=i.intshadsurgeprotL3switch;const se=i.intersectSchematicsMCBL3,N=i.schematicSurgeL3;aa=i.intshadwallswitchskey,du=i.intshadwallswitchframe;const H=i.intshadwallswitchinnardkey,Y=i.intersectSchematicsSwitchLight,j=i.schematicSwitchLight,le=i.intshadsurgeprotL1,Q=i.interactMcbL1;Ws=i.intshadsurgeprotL1switch;const K=i.intersectSchematicsMCBL1;ou=i.schematicSurgeL1,fu=i.intshadswitchLPEN,ca=i.intshadswitchLPENhandle;const D=i.intersectSchematicsSwitchLPEN,V=i.schematicSwitchLPEN;pu=i.intshadswitchLN,la=i.intshadswitchLNhandle;const _e=i.intersectSchematicsSwitchLN,ve=i.schematicSwitchLN,Me=i.intersectSwitchPENmid,De=i.intersectSwitchPENN,Ie=i.intersectSwitchPENPE;ha=i.intshadswitchPENhandle,Rp=i.intshadswitchPEN;const ze=i.intersectSchematicsSwitchPENmid,Qe=i.intersectSchematicsSwitchPENN,ot=i.intersectSchematicsSwitchPENPE,Oe=i.schematicSwitchPEN,P=i.shadconsumerunitcover,he=i.shadwallhide,q=i.modxpjouter,oe=i.modaxmk,ee=i.intshadwallswitchskey,Pe=i.intshadwallswitchframe,be=i.modwallswitchinnards,Ee=i.intshadwallswitchinnardkey;Yc=i.intshadwallsocket,qc=i.intshadwallsocketframe,Eh=i.modwallsocketinnards;const Fe=i.intersectSchematicsHideL1volt,Ke=i.intersectSchematicsHideL2volt,ut=i.intersectSchematicsHideL3volt,A=i.intersectSchematicsHideL1current,S=i.intersectSchematicsHideL2current,B=i.intersectSchematicsHideL3current,ae=i.intersectSchematicsHideNcurrent;ol=i.voltL1hideX,ol.visible=!1,al=i.voltL2hideX,al.visible=!1,cl=i.voltL3hideX,cl.visible=!1,ll=i.currentL1hideX,ll.visible=!1,hl=i.currentL2hideX,hl.visible=!1,ul=i.currentL3hideX,ul.visible=!1,dl=i.currentNhideX,dl.visible=!1,P.visible=!1,he.visible=!1,q.visible=!1,oe.visible=!0,ee.visible=!0,Pe.visible=!0,be.visible=!0,Ee.visible=!0,Yc.visible=!0,qc.visible=!0,Eh.visible=!0;function ne(Ne,we){Ne&&(Ne.visible=!Ne.visible,Ne.material&&(Ne.material.transparent=!Ne.visible))}const ce=[ee,Pe],Ce=[be,Ee],ue=[Yc,qc],xe=[Eh],I=[r,Gs],de=[c,Xs],$=[le,Ws,u,Us,G,Fs];function Ve(){const Ne=bl.addFolder("Object Display");Ne.add({Mains:I.every(we=>we.visible)},"Mains").onChange(()=>Ae(I)),Ne.add({RCD:de.every(we=>we.visible)},"RCD").onChange(()=>Ae(de)),Ne.add({MCBs:$.every(we=>we.visible)},"MCBs").onChange(()=>Ae($)),Ne.add({Cover:P.visible},"Cover").onChange(()=>ne(P)),Ne.add({Wall:he.visible},"Wall").onChange(()=>ne(he)),Ne.add({"XPJ Outer":q.visible},"XPJ Outer").onChange(()=>ne(q)),Ne.add({"AXMK Outer":oe.visible},"AXMK Outer").onChange(()=>ne(oe)),Ne.add({Switch:ce.every(we=>we.visible)},"Switch").onChange(()=>Ae(ce)),Ne.add({"Switch Innards":Ce.every(we=>we.visible)},"Switch Innards").onChange(()=>Ae(Ce)),Ne.add({Socket:ue.every(we=>we.visible)},"Socket").onChange(()=>Ae(ue)),Ne.add({"Socket Innards":xe.every(we=>we.visible)},"Socket Innards").onChange(()=>Ae(xe))}function Ae(Ne,we){Ne.forEach(mt=>ne(mt))}const ye=new jc,Re=new re,R=new jc,fe=new re,Z=new jc,ge=new re;let pe=!1,te=!1,Le=!1,ke=!1,xt=!1,ct=!1;function cn(){Pn>25&&Bt(),He=!He,ra(),ua(),ts(),Bt(),Tt(),_t=!0}function Pt(){je=!je,_t=!0,ra(),ua(),ts(),Bt(),Tt()}function fr(){pe?(Us.rotation.x=0,g.position.z=0,pe=!1):(Us.rotation.x=Math.PI/4,g.position.z=-.015,pe=!0),bn=!bn,ts(),Tt()}function Io(){te?(f.visible=!0,b.visible=!1,v.visible=!0,te=!1):(f.visible=!1,b.visible=!0,v.visible=!1,te=!0),Pi=!Pi,ts(),Tt()}function Xa(){Wr.position.set(-9.28448,-5.42748,1.57546),Xr.position.set(-9.25117,-5.17956,1.62338),jr.position.set(-9.25117,-4.93164,1.62338),Sa=!0,Zs=!1,Js=!1,T.material.opacity=1,z.material.opacity=.5,w.material.opacity=.5,ts(),Tt()}function Ls(){Wr.position.set(-9.25117,-5.42748,1.62338),Xr.position.set(-9.28448,-5.17956,1.57546),jr.position.set(-9.25117,-4.93164,1.62338),Sa=!1,Zs=!0,Js=!1,Mn.particlesPerSegment=1,T.material.opacity=.5,z.material.opacity=1,w.material.opacity=.5,ts(),Tt()}function No(){Wr.position.set(-9.25117,-5.42748,1.62338),Xr.position.set(-9.25117,-5.17956,1.62338),jr.position.set(-9.28448,-4.93164,1.57546),Sa=!1,Zs=!1,Js=!0,T.material.opacity=.5,z.material.opacity=.5,w.material.opacity=1,ts(),Tt()}function Xi(){Le?(Fs.rotation.x=0,N.position.z=0,Le=!1):(Fs.rotation.x=Math.PI/4,N.position.z=-.015,Le=!0),as=!as,ra(),ua(),Tt()}function Do(){ke?(aa.rotation.x=0,H.rotation.x=0,j.rotation.y=0,ke=!1):(aa.rotation.x=Math.PI/16,H.rotation.x=Math.PI/8,j.rotation.y=Math.PI/16,ke=!0),xo=!xo,ra(),ua(),Tt()}function Oo(){Pn>16&&Bt(),bt=!bt,_t=!0,Bt(),Tt()}function ja(){xt?(ca.rotation.z=0,V.rotation.y=0,xt=!1):(ca.rotation.z=Math.PI/10,V.rotation.y=Math.PI/11,xt=!0),Nt=!Nt,Bt(),Tt(),_t=!0}function qa(){ct?(la.rotation.z=0,ve.rotation.y=0,ct=!1):(la.rotation.z=Math.PI/10,ve.rotation.y=Math.PI/11,ct=!0),_s=!_s,Bt(),Tt(),_t=!0}function E(){_t=!0,ha.rotation.z=0,Oe.rotation.y=0,ba=!0,Ma=!1,fn=!1,Bt(),Tt()}function O(){_t=!0,ha.rotation.z=-Math.PI/11,Oe.rotation.y=Math.PI/12,ba=!1,Ma=!0,fn=!1,Bt(),Tt()}function W(){_t=!0,ha.rotation.z=Math.PI/11,Oe.rotation.y=-Math.PI/12,ba=!1,Ma=!1,fn=!0,Bt(),Tt()}function U(){Wn=!Wn,It=!Wn,y.hideL1=Wn,Op.updateDisplay(),Tt(),_t=!0}function X(){Xn=!Xn,ln=!Xn,y.hideL2=Xn,Up.updateDisplay(),Tt(),_t=!0}function Te(){jn=!jn,Tn=!jn,y.hideL3=jn,Fp.updateDisplay(),Tt(),_t=!0}function Ue(){pn.hideParticles=!pn.hideParticles,qn.hideParticles=!qn.hideParticles,Yn.hideParticles=!Yn.hideParticles,ki.hideParticles=!ki.hideParticles,zn.hideParticles=!zn.hideParticles,Kn.hideParticles=!Kn.hideParticles,$n.hideParticles=!$n.hideParticles,Vi.hideParticles=!Vi.hideParticles,Hp.updateDisplay(),_t=!0,za=!za,In(),Tt()}function Ge(){Mn.hideParticles=!Mn.hideParticles,di.hideParticles=!di.hideParticles,Vp.updateDisplay(),_t=!0,Ia=!Ia,In(),Tt()}function We(){ui.hideParticles=!ui.hideParticles,xs.hideParticles=!xs.hideParticles,Gp.updateDisplay(),_t=!0,Na=!Na,In(),Tt()}function $e(){Hi.hideParticles=!Hi.hideParticles,ys.hideParticles=!ys.hideParticles,Wp.updateDisplay(),Da=!Da,_t=!0,In(),Tt()}function Xe(Ne){const we=Ap.getBoundingClientRect();Re.x=(Ne.clientX-we.left)/we.width*2-1,Re.y=-((Ne.clientY-we.top)/we.height)*2+1,ye.setFromCamera(Re,ss);const mt=ye.intersectObjects([o,Gs,a],!0),Lt=ye.intersectObjects([l,Xs,h],!0),st=ye.intersectObjects([d,Us,p],!0),Qt=ye.intersectObjects([_,m,b,f,x],!0),gi=ye.intersectObjects([Wr,F],!0),ni=ye.intersectObjects([Xr,M],!0),_i=ye.intersectObjects([jr,L],!0),Uo=ye.intersectObjects([ie,Fs,se],!0),Rs=ye.intersectObjects([aa,H,du,Y],!0),xi=ye.intersectObjects([Q,Ws,K],!0),pr=ye.intersectObjects([fu,ca,D],!0),Ka=ye.intersectObjects([pu,la,_e],!0),$a=ye.intersectObjects([Me,ze],!0),Za=ye.intersectObjects([De,Qe],!0),Fo=ye.intersectObjects([Ie,ot],!0),wl=ye.intersectObjects([Fe],!0),Al=ye.intersectObjects([Ke],!0),Ll=ye.intersectObjects([ut],!0),Cl=ye.intersectObjects([A],!0),Rl=ye.intersectObjects([S],!0),Pl=ye.intersectObjects([B],!0),zl=ye.intersectObjects([ae],!0);mt.length>0&&cn(),Lt.length>0&&Pt(),st.length>0&&fr(),Qt.length>0&&Io(),gi.length>0&&Xa(),ni.length>0&&Ls(),_i.length>0&&No(),Uo.length>0&&Xi(),Rs.length>0&&Do(),xi.length>0&&Oo(),pr.length>0&&ja(),Ka.length>0&&qa(),$a.length>0&&E(),Za.length>0&&O(),Fo.length>0&&W(),wl.length>0&&U(),Al.length>0&&X(),Ll.length>0&&Te(),Cl.length>0&&Ue(),Rl.length>0&&Ge(),Pl.length>0&&We(),zl.length>0&&$e()}function qe(Ne){const we=il.getBoundingClientRect();fe.x=(Ne.clientX-we.left)/we.width*2-1,fe.y=-((Ne.clientY-we.top)/we.height)*2+1,R.setFromCamera(fe,rs);const mt=R.intersectObjects([o,Gs],!0),Lt=R.intersectObjects([l,Xs],!0),st=R.intersectObjects([d,Us],!0),Qt=R.intersectObjects([ie,Fs],!0),gi=R.intersectObjects([Q,Ws],!0);mt.length>0&&cn(),Lt.length>0&&Pt(),st.length>0&&fr(),Qt.length>0&&Xi(),gi.length>0&&Oo()}function yt(Ne){const we=sl.getBoundingClientRect();ge.x=(Ne.clientX-we.left)/we.width*2-1,ge.y=-((Ne.clientY-we.top)/we.height)*2+1,Z.setFromCamera(ge,kn);const mt=Z.intersectObjects([a],!0),Lt=Z.intersectObjects([h],!0),st=Z.intersectObjects([p],!0),Qt=Z.intersectObjects([x],!0),gi=Z.intersectObjects([F],!0),ni=Z.intersectObjects([M],!0),_i=Z.intersectObjects([L],!0),Uo=Z.intersectObjects([se],!0),Rs=Z.intersectObjects([Y],!0),xi=Z.intersectObjects([K],!0),pr=Z.intersectObjects([D],!0),Ka=Z.intersectObjects([_e],!0),$a=Z.intersectObjects([ze],!0),Za=Z.intersectObjects([Qe],!0),Fo=Z.intersectObjects([ot],!0),wl=Z.intersectObjects([Fe],!0),Al=Z.intersectObjects([Ke],!0),Ll=Z.intersectObjects([ut],!0),Cl=Z.intersectObjects([A],!0),Rl=Z.intersectObjects([S],!0),Pl=Z.intersectObjects([B],!0),zl=Z.intersectObjects([ae],!0);mt.length>0&&cn(),Lt.length>0&&Pt(),st.length>0&&fr(),Qt.length>0&&Io(),gi.length>0&&Xa(),ni.length>0&&Ls(),_i.length>0&&No(),Uo.length>0&&Xi(),Rs.length>0&&Do(),xi.length>0&&Oo(),pr.length>0&&ja(),Ka.length>0&&qa(),$a.length>0&&E(),Za.length>0&&O(),Fo.length>0&&W(),wl.length>0&&U(),Al.length>0&&X(),Ll.length>0&&Te(),Cl.length>0&&Ue(),Rl.length>0&&Ge(),Pl.length>0&&We(),zl.length>0&&$e()}document.addEventListener("click",Xe,!1),il.addEventListener("click",qe,!1),sl.addEventListener("click",yt,!1);const pt=new a6(ss,Fi.domElement);ss.position.set(0,0,8),pt.enabled=!0,Bs=i.intshadrheostatLPEwiper;const Kt=i.intersectSchematicsReheostatLPEWiper,yn=i.schematicRheostatLPEwiper;qr=i.intshadrheostatLNwiper;const vt=i.intersectSchematicsReheostatLNWiper,Ze=i.schematicRheostatLNwiper;ji([Bs,Kt,yn],Et,ss,Fi),ji([qr,vt,Ze],ti,ss,Fi),ji([Bs,Kt,yn],Et,kn,_o),ji([qr,vt,Ze],ti,kn,_o);function ji(Ne,we,mt,Lt){const st=new r6(Ne,mt,Lt.domElement);return st.addEventListener("dragstart",Ya),st.addEventListener("dragend",Cs),st.addEventListener("drag",we),st}function Et(Ne){const we=Ne.object,mt=0;let Lt;we===Bs?Lt=-.84:Lt=-.18,we.position.x=Math.max(Math.min(we.position.x,mt),Lt);const st=(we.position.x-Lt)/(mt-Lt),Qt=23e3;oa=Math.round(Qt+st*(23e4-Qt)),yo=230/oa;const _i=-.18,Rs=_i-0,xi=_i-st*Rs;if(Kt.position.x=xi,yn.position.x=xi,we!==Bs){const pr=-.84+st*(mt+.84);Bs.position.x=pr}we.position.y=0,we.position.z=0,d0(Se.schematicsL1curveLRCD,[33,34,35],oa,-2.394,115e4),d0(Se.L1curveLRCD,[142,143],oa,-4.98,245e3),s_(Se.schematicsL1curveLRCD,Se.L1curveLRCD)}rl=10;function ti(Ne){const we=Ne.object,mt=0,Lt=-.84;we.position.x=Math.max(Math.min(we.position.x,mt),Lt);const st=(we.position.x-Lt)/(mt-Lt),Qt=8;Gr=Math.round((Qt+st*(23-Qt))*10)/10;const ni=230;Pn=ni/Gr,li=ni/Gr,rl=li;const _i=-.18,Rs=_i-0,xi=_i-st*Rs;if(vt.position.x=xi,Ze.position.x=xi,we!==qr){const Fo=-.84+st*(mt+.84);qr.position.x=Fo}we.position.y=0,we.position.z=0,f0(Gn,[39,40,41],[38,39,40],Gr,-2.2,.0115),f0(Vn,[171,172],[170,171],Gr,-4,.06)}function Ya(){pt.enabled=!1}function Cs(){pt.enabled=!0}Ve(),G6.style.display="none",va.classList.remove("hidden")},function(s){W6.textContent="Complete"},void 0,function(s){console.error(s)});const Se={L1curveL:[{x:4.400691747665405,y:-7.074393749237061,z:-1.049999922513962},{x:.989238500595093,y:-7.074435710906982,z:-1.049999922513962},{x:.608446836471558,y:-6.999250888824463,z:-1.049999922513962},{x:.386059522628784,y:-6.78273344039917,z:-1.049999922513962},{x:.278871536254883,y:-6.51814603805542,z:-1.049999922513962},{x:.229012727737427,y:-6.142368793487549,z:-1.049999922513962},{x:.225911617279053,y:-.639055252075195,z:-1.050013512372971},{x:.226108074188232,y:-.487310767173767,z:-1.03395077586174},{x:.226013898849487,y:-.365373134613037,z:-.928701013326645},{x:.225759983062744,y:-.323689460754395,z:-.765179604291916},{x:.225869178771973,y:-.319593667984009,z:-.643899530172348},{x:.22713303565979,y:-.327510833740234,z:-.543155401945114},{x:.231043338775635,y:-.311503231525421,z:-.492687195539474},{x:.240316390991211,y:-.253416299819946,z:-.46278104186058},{x:.246111392974854,y:-.194975316524506,z:-.454259276390076},{x:.250691652297974,y:-.001881182193756,z:-.451023310422897},{x:.250421285629272,y:.115601539611816,z:-.450852692127228},{x:.250008583068848,y:.634672403335571,z:-.439038425683975},{x:.249190807342529,y:.790037393569946,z:-.445328742265701},{x:.250047206878662,y:.896118998527527,z:-.447204321622849},{x:.267520427703857,y:.965937972068787,z:-.480067878961563},{x:.290664434432983,y:1.000456690788269,z:-.507945895195007},{x:.330931901931763,y:1.002010703086853,z:-.541733771562576},{x:.372737288475037,y:.972192525863647,z:-.571143180131912},{x:.428314805030823,y:.911785244941711,z:-.607014328241348},{x:.477008938789368,y:.829735279083252,z:-.628203481435776},{x:.539199590682983,y:.684086680412292,z:-.643187195062637},{x:.58792769908905,y:.54635214805603,z:-.647897094488144},{x:.627784371376038,y:.421509146690369,z:-.648007839918137},{x:.67333197593689,y:.286518335342407,z:-.649606555700302},{x:.718801259994507,y:.161644101142883,z:-.651733726263046},{x:.752297163009644,y:.074590921401978,z:-.651101917028427},{x:.809635996818542,y:-.05772453546524,z:-.640209645032883},{x:.862019300460815,y:-.125926077365875,z:-.597643226385117},{x:.900749802589417,y:-.15151971578598,z:-.549868434667587},{x:.94386887550354,y:-.160367488861084,z:-.487964868545532},{x:.969602465629578,y:-.151245653629303,z:-.447486490011215},{x:.998592615127563,y:-.100513756275177,z:-.399594157934189},{x:1.002111792564392,y:-.009594559669495,z:-.390682220458984},{x:.999396443367004,y:.160207152366638,z:-.387146025896072},{x:.999960660934448,y:.656807661056519,z:-.378785163164139},{x:.999959468841553,y:.806666851043701,z:-.378778070211411},{x:1.001009941101074,y:.886438250541687,z:-.379503756761551},{x:1.042863965034485,y:.939292550086975,z:-.383558481931686},{x:1.132806658744812,y:.978099703788757,z:-.391120076179504},{x:1.229866623878479,y:.992538928985596,z:-.402996242046356},{x:1.426599740982056,y:1.002126812934875,z:-.419786095619202},{x:1.623126029968262,y:.977569460868835,z:-.418223232030869},{x:1.687439680099487,y:.961907267570496,z:-.415293961763382},{x:1.724791526794434,y:.938054203987122,z:-.406750112771988},{x:1.766761779785156,y:.886518001556396,z:-.387931793928146},{x:1.770832538604736,y:.807965040206909,z:-.378786116838455},{x:1.770756721496582,y:.657963871955872,z:-.378787338733673},{x:1.77074670791626,y:.084999918937683,z:-.391000002622604},{x:1.77074670791626,y:.085041880607605,z:-.206999957561493},{x:1.77074670791626,y:-.069999814033508,z:-.206999957561493},{x:2.314218044281006,y:-.069999814033508,z:-.206999957561493},{x:2.314218044281006,y:.084957957267761,z:-.207000017166138},{x:2.314218044281006,y:.084999918937683,z:-.391000002622604},{x:2.314217567443848,y:.340163350105286,z:-.391012489795685},{x:2.314217805862427,y:.625461101531982,z:-.391000658273697},{x:2.31418776512146,y:.649379730224609,z:-.390970945358276},{x:2.31418776512146,y:.799504518508911,z:-.390561699867249},{x:2.314190626144409,y:1.063421249389648,z:-.389621645212173},{x:2.321141004562378,y:1.10480260848999,z:-.386953890323639},{x:2.356108427047729,y:1.124949932098389,z:-.374055236577988},{x:2.399849414825439,y:1.130175590515137,z:-.359428197145462},{x:2.42929744720459,y:1.143935203552246,z:-.352482497692108},{x:2.436087846755981,y:1.189532995223999,z:-.359314024448395},{x:2.436446905136108,y:1.470582485198975,z:-.417381107807159},{x:2.436169385910034,y:1.609592437744141,z:-.43617182970047},{x:2.435839414596558,y:1.677866458892822,z:-.438591659069061},{x:2.435853242874146,y:1.746486186981201,z:-.44829073548317},{x:2.436062574386597,y:1.784854412078857,z:-.491086214780807},{x:2.436074733734131,y:1.794772624969482,z:-.541325151920319},{x:2.435869693756104,y:1.79584789276123,z:-.656554013490677},{x:2.435829401016235,y:1.799470901489258,z:-.779182642698288},{x:2.435893535614014,y:1.815919876098633,z:-.866810649633408},{x:2.436006784439087,y:1.866119384765625,z:-.959997028112411},{x:2.436063051223755,y:1.945553302764893,z:-1.014088600873947},{x:2.436017513275146,y:2.074982643127441,z:-1.039317697286606},{x:2.438291072845459,y:3.067899227142334,z:-1.04255935549736},{x:2.432215929031372,y:3.146212577819824,z:-1.04387292265892},{x:2.411118268966675,y:3.21710729598999,z:-1.045623272657394},{x:2.381290912628174,y:3.252997875213623,z:-1.046874970197678},{x:2.341110944747925,y:3.277383327484131,z:-1.047935336828232},{x:2.255387544631958,y:3.300200939178467,z:-1.04919895529747},{x:2.135798931121826,y:3.30955171585083,z:-1.049872726202011},{x:-3.773504257202148,y:3.310999870300293,z:-1.050002664327621},{x:-3.839134216308594,y:3.309936046600342,z:-1.050003975629807},{x:-3.922260761260986,y:3.290400981903076,z:-1.050144761800766},{x:-3.985969066619873,y:3.238917827606201,z:-1.050277203321457},{x:-4.00714635848999,y:3.175591468811035,z:-1.050067752599716},{x:-4.007999897003174,y:-3.998482227325439,z:-1.05000028014183},{x:-4.00792932510376,y:-4.11894702911377,z:-1.035941570997238},{x:-4.00773286819458,y:-4.178412914276123,z:-1.002804726362228},{x:-4.007514953613281,y:-4.218980312347412,z:-.944409817457199},{x:-4.007374286651611,y:-4.246376037597656,z:-.849750369787216},{x:-4.008008480072021,y:-4.261973857879639,z:-.603474467992783},{x:-4.007944583892822,y:-4.262043476104736,z:-.5129314661026},{x:-4.020505428314209,y:-4.269335746765137,z:-.461208760738373},{x:-4.057941913604736,y:-4.281341075897217,z:-.419202119112015},{x:-4.110801219940186,y:-4.288573741912842,z:-.39608296751976},{x:-5.965100526809692,y:-4.289976596832275,z:-.390920042991638},{x:-6.05224347114563,y:-4.290217399597168,z:-.379496932029724},{x:-6.117515802383423,y:-4.290305614471436,z:-.341150760650635},{x:-6.139757394790649,y:-4.289998531341553,z:-.277410954236984},{x:-6.139759302139282,y:-4.290011405944824,z:.668419390916824},{x:-6.128401041030884,y:-4.290128707885742,z:.738622695207596},{x:-6.098838090896606,y:-4.290306568145752,z:.796712905168533},{x:-6.036592721939087,y:-4.290172576904297,z:.836902767419815},{x:-5.94947075843811,y:-4.279438495635986,z:.837313562631607},{x:-5.912377595901489,y:-4.254734992980957,z:.822965413331985},{x:-5.896123170852661,y:-4.228962898254395,z:.792204886674881},{x:-5.889872789382935,y:-4.203831195831299,z:.703221589326859},{x:-5.889881372451782,y:-4.203186988830566,z:.665210396051407},{x:-5.85986065864563,y:-4.203186988830566,z:.665210396051407},{x:-5.85986065864563,y:-4.259999752044678,z:.573012143373489},{x:-5.85986065864563,y:-4.259999752044678,z:.573012143373489},{x:-5.85986065864563,y:-4.148999691009521,z:.573012262582779},{x:-5.85986065864563,y:-4.148999691009521,z:.552434712648392},{x:-5.609674692153931,y:-4.148999691009521,z:.552434712648392},{x:-5.609674692153931,y:-4.148999691009521,z:.573012262582779},{x:-5.609674692153931,y:-4.260000228881836,z:.573012262582779},{x:-5.609674692153931,y:-4.260000228881836,z:.665208727121353},{x:-5.609674692153931,y:-4.203170776367188,z:.665208727121353},{x:-5.609674692153931,y:-4.260000228881836,z:.665208727121353},{x:-5.632780790328979,y:-4.202662944793701,z:.66507413983345},{x:-5.632780790328979,y:-4.202539443969727,z:.701531857252121},{x:-5.632780790328979,y:-4.20804500579834,z:.73466095328331},{x:-5.632780790328979,y:-4.227414131164551,z:.755424410104752},{x:-5.632781267166138,y:-4.273155689239502,z:.795594543218613},{x:-5.632781267166138,y:-4.288960218429565,z:.830266445875168},{x:-5.632781744003296,y:-4.288960218429565,z:1.377663642168045},{x:-5.632781610702515,y:-4.288960218429565,z:1.425413876771927},{x:-5.667107610702515,y:-4.288960218429565,z:1.460619121789932},{x:-5.667381525039673,y:-4.288960218429565,z:1.471640020608902},{x:-5.999431848526001,y:-4.288960218429565,z:1.473004251718521},{x:-6.064109086990356,y:-4.288960218429565,z:1.485115438699722},{x:-6.103619337081909,y:-4.288960218429565,z:1.515852242708206},{x:-6.119653463363647,y:-4.288960218429565,z:1.562576919794083},{x:-6.119953870773315,y:-4.288960218429565,z:1.853779345750809},{x:-6.119953870773315,y:-4.288960218429565,z:1.894849568605423},{x:-6.097444295883179,y:-4.288960218429565,z:1.931421419382095},{x:-6.059420824050903,y:-4.288960218429565,z:1.942304521799088},{x:-5.944993257522583,y:-4.288822412490845,z:1.942304521799088},{x:-5.908377885818481,y:-4.268141269683838,z:1.933324247598648},{x:-5.890939950942993,y:-4.229379177093506,z:1.904160887002945},{x:-5.85994553565979,y:-4.205711841583252,z:1.776360899209976},{x:-5.85994553565979,y:-4.260005474090576,z:1.776360899209976},{x:-5.85994553565979,y:-4.260005474090576,z:1.683038860559464},{x:-5.85994553565979,y:-4.149616241455078,z:1.683038860559464},{x:-5.85994553565979,y:-4.149616241455078,z:1.663585215806961},{x:-5.85994553565979,y:-4.149616241455078,z:1.663585096597672},{x:-5.609732866287231,y:-4.149616241455078,z:1.683038979768753},{x:-5.609732866287231,y:-4.149616241455078,z:1.683038979768753},{x:-5.609732866287231,y:-4.260005474090576,z:1.683038979768753},{x:-5.609732866287231,y:-4.260005474090576,z:1.77635994553566},{x:-5.609732866287231,y:-4.205765724182129,z:1.77635994553566},{x:-5.586417436599731,y:-4.205642938613892,z:1.776325017213821},{x:-5.58653712272644,y:-4.216374158859253,z:1.859488755464554},{x:-5.577088594436646,y:-4.243375778198242,z:1.902555614709854},{x:-5.55078387260437,y:-4.272977352142334,z:1.931250602006912},{x:-5.499761343002319,y:-4.288572549819946,z:1.941890269517899},{x:-5.145716428756714,y:-4.289409875869751,z:1.942373663187027},{x:-5.093550443649292,y:-4.271369457244873,z:1.935035616159439},{x:-5.068063974380493,y:-4.207133531570435,z:1.900988966226578},{x:-5.062684297561646,y:-4.16188907623291,z:1.868461042642593},{x:-5.061107873916626,y:-4.093730926513672,z:1.793735295534134},{x:-5.061740636825562,y:-4.065988302230835,z:1.7387914955616},{x:-5.066412210464478,y:-4.012005805969238,z:1.489910751581192},{x:-4.048237085342407,y:-4.012005805969238,z:1.489910751581192},{x:-4.048237085342407,y:-3.711985349655151,z:1.489910751581192},{x:-3.559351682662964,y:-3.711985349655151,z:1.517643123865128},{x:-3.55869722366333,y:-3.747619390487671,z:1.517818003892899},{x:-3.555280447006226,y:-3.864701271057129,z:1.518392473459244},{x:-3.544493913650513,y:-4.006099700927734,z:1.519403010606766},{x:-3.531513452529907,y:-4.094357013702393,z:1.520146995782852},{x:-3.513954401016235,y:-4.168991088867188,z:1.520826250314713},{x:-3.474062919616699,y:-4.254623413085938,z:1.52165487408638},{x:-3.439752817153931,y:-4.28298282623291,z:1.521934539079666},{x:-3.393922328948975,y:-4.289998292922974,z:1.523142486810684},{x:-3.355446100234985,y:-4.289996385574341,z:1.536859422922134},{x:-3.332591772079468,y:-4.289996147155762,z:1.567647486925125},{x:-3.326144456863403,y:-4.28999662399292,z:1.608262211084366},{x:-3.326135873794556,y:-4.289999723434448,z:1.81953027844429},{x:-3.316749811172485,y:-4.289999723434448,z:1.888397604227066},{x:-3.285180568695068,y:-4.289999723434448,z:1.941681653261185},{x:-3.224250555038452,y:-4.289999723434448,z:1.981331259012222},{x:-3.171977281570435,y:-4.289999723434448,z:1.990635067224503},{x:-2.633371591567993,y:-4.289999723434448,z:1.990922838449478},{x:-2.592699289321899,y:-4.283334016799927,z:1.984722524881363},{x:-2.568218946456909,y:-4.25813627243042,z:1.95404127240181},{x:-2.559959650039673,y:-4.231316566467285,z:1.905213624238968},{x:-2.558641672134399,y:-4.210587501525879,z:1.836557656526566},{x:-2.558996677398682,y:-4.204934120178223,z:1.779109507799149},{x:-2.559036016464233,y:-4.204742193222046,z:1.733407765626907}],L1curveLN:[{x:-2.5097496509552,y:-4.203754663467407,z:1.73343363404274},{x:-2.507400751113892,y:-4.204070329666138,z:1.774434238672256},{x:-2.498951196670532,y:-4.214540719985962,z:1.820144087076187},{x:-2.48203444480896,y:-4.235857248306274,z:1.849415212869644},{x:-2.441213369369507,y:-4.271555662155151,z:1.861486822366714},{x:-2.348891496658325,y:-4.290007829666138,z:1.860628515481949},{x:-2.340998888015747,y:-4.290009737014771,z:1.859533220529556},{x:-2.303014993667603,y:-4.290010690689087,z:1.841457277536392},{x:-2.274697065353394,y:-4.28999924659729,z:1.799904972314835},{x:-2.269979238510132,y:-4.290004014968872,z:1.759077459573746},{x:-2.269989728927612,y:-4.290000200271606,z:1.545600324869156},{x:-2.296804666519165,y:-4.290011644363403,z:1.48735299706459},{x:-2.338794946670532,y:-4.290006875991821,z:1.464677721261978},{x:-2.405810594558716,y:-4.289998292922974,z:1.452941805124283},{x:-2.958412885665894,y:-4.289998292922974,z:1.452699691057205},{x:-3.031434774398804,y:-4.290005922317505,z:1.4464992582798},{x:-3.08767294883728,y:-4.289997339248657,z:1.410065323114395},{x:-3.127577543258667,y:-4.289992570877075,z:1.344431430101395},{x:-3.131776094436646,y:-4.290002107620239,z:1.285796791315079},{x:-3.131765604019165,y:-4.28999924659729,z:-.328397035598755},{x:-3.139041185379028,y:-4.290004014968872,z:-.362645834684372},{x:-3.157376050949097,y:-4.289999723434448,z:-.380433976650238},{x:-3.193157911300659,y:-4.28999924659729,z:-.391828417778015},{x:-3.904518842697144,y:-4.289301156997681,z:-.394127190113068},{x:-3.943666219711304,y:-4.279521703720093,z:-.425184667110443},{x:-3.967909574508667,y:-4.270614862442017,z:-.45701739192009},{x:-3.987967729568481,y:-4.262238264083862,z:-.512244075536728},{x:-3.987865209579468,y:-4.262824296951294,z:-.603765159845352},{x:-3.987892389297485,y:-4.244751214981079,z:-.849764496088028},{x:-3.987987279891968,y:-4.218878030776978,z:-.944115251302719},{x:-3.988211870193481,y:-4.179858922958374,z:-1.001895874738693},{x:-3.98836350440979,y:-4.120304346084595,z:-1.036583513021469},{x:-3.987993478775024,y:-3.999839067459106,z:-1.049992173910141},{x:-3.987590074539185,y:3.169576644897461,z:-1.050031512975693},{x:-3.971021413803101,y:3.225509643554688,z:-1.050255626440048},{x:-3.913655519485474,y:3.272034645080566,z:-1.050151079893112},{x:-3.836485147476196,y:3.289204597473145,z:-1.050004452466965},{x:-3.772472143173218,y:3.289999961853027,z:-1.050002664327621},{x:2.128417015075684,y:3.288923263549805,z:-1.049881190061569},{x:2.243536710739136,y:3.281682968139648,z:-1.049244731664658},{x:2.326607465744019,y:3.261837005615234,z:-1.047976583242416},{x:2.36308217048645,y:3.241426944732666,z:-1.046979993581772},{x:2.390456676483154,y:3.210951805114746,z:-1.045801013708115},{x:2.412114858627319,y:3.143547058105469,z:-1.043973058462143},{x:2.417316198348999,y:3.068952560424805,z:-1.042648881673813},{x:2.414082765579224,y:2.072097539901733,z:-1.039227575063705},{x:2.414111614227295,y:1.94612455368042,z:-1.014463156461716},{x:2.414035081863403,y:1.868525743484497,z:-.961993545293808},{x:2.413905382156372,y:1.818891286849976,z:-.872096627950668},{x:2.413838624954224,y:1.801464319229126,z:-.785455077886581},{x:2.413892269134521,y:1.79624080657959,z:-.662044614553452},{x:2.414121150970459,y:1.795644998550415,z:-.546876758337021},{x:2.414140462875366,y:1.787432670593262,z:-.495354264974594},{x:2.413925170898438,y:1.748205184936523,z:-.449257701635361},{x:2.413901329040527,y:1.678567409515381,z:-.438969701528549},{x:2.414264917373657,y:1.61071252822876,z:-.435527801513672},{x:2.414313316345215,y:1.470515966415405,z:-.39976179599762},{x:2.408572912216187,y:1.335959672927856,z:-.386385500431061},{x:2.392667531967163,y:1.258163928985596,z:-.375372558832169},{x:2.373194932937622,y:1.207232236862183,z:-.368112981319427},{x:2.336518526077271,y:1.162694215774536,z:-.361769646406174},{x:2.291061639785767,y:1.149922847747803,z:-.359999924898148},{x:1.902117967605591,y:1.150057315826416,z:-.360007494688034},{x:1.844223499298096,y:1.166357755661011,z:-.362189888954163},{x:1.807990074157715,y:1.20289421081543,z:-.367053061723709},{x:1.784879446029663,y:1.250179767608643,z:-.373347193002701},{x:1.775674104690552,y:1.289575815200806,z:-.378603011369705},{x:1.774884700775146,y:1.386311292648315,z:-.391180336475372},{x:1.774999856948853,y:1.419999990463257,z:-.404000133275986}],L1curveLPE:[{x:-2.534352123737335,y:-4.203796029090881,z:1.733411431312561},{x:-2.534352123737335,y:-4.25999653339386,z:1.733411431312561},{x:-2.534352123737335,y:-4.25999653339386,z:1.640003323554993},{x:-2.534352123737335,y:-4.139999985694885,z:1.640003323554993},{x:-2.699747622013092,y:-4.070960640907288,z:1.620638489723206},{x:-2.699747622013092,y:-4.070960640907288,z:1.640003561973572},{x:-2.699747622013092,y:-4.259997487068176,z:1.640003561973572},{x:-2.699747622013092,y:-4.259997487068176,z:1.733412146568298},{x:-2.699747622013092,y:-4.20388662815094,z:1.733412146568298},{x:-2.727161467075348,y:-4.20388662815094,z:1.733412146568298},{x:-2.7298544049263,y:-4.212733864784241,z:1.792122006416321},{x:-2.737078964710236,y:-4.227006077766418,z:1.820151925086975},{x:-2.750616848468781,y:-4.250569462776184,z:1.845242142677307},{x:-2.772007763385773,y:-4.277900338172913,z:1.858846306800842},{x:-2.798147737979889,y:-4.291728615760803,z:1.861272692680359},{x:-3.066250503063202,y:-4.29199230670929,z:1.861291289329529},{x:-3.139780700206757,y:-4.292004227638245,z:1.847168564796448},{x:-3.184505641460419,y:-4.291984677314758,z:1.809616923332214},{x:-3.196346461772919,y:-4.292001366615295,z:1.757503867149353},{x:-3.196342170238495,y:-4.291998028755188,z:-.259055227041245},{x:-3.203122317790985,y:-4.292007565498352,z:-.295279920101166},{x:-3.232372462749481,y:-4.291996598243713,z:-.319645196199417},{x:-3.271632850170135,y:-4.291999459266663,z:-.330097436904907},{x:-3.271760642528534,y:-4.291999936103821,z:-.330105692148209},{x:-3.892899692058563,y:-4.291997075080872,z:-.330097138881683},{x:-3.942090690135956,y:-4.290989518165588,z:-.341021448373795},{x:-3.979786098003387,y:-4.286325573921204,z:-.391498267650604},{x:-3.993961036205292,y:-4.281528115272522,z:-.447230041027069},{x:-3.997681796550751,y:-4.278071999549866,z:-.512150645256042},{x:-3.997580707073212,y:-4.27802574634552,z:-.604490280151367},{x:-3.99761027097702,y:-4.256709218025208,z:-.850464224815369},{x:-3.997735679149628,y:-4.224671483039856,z:-.946656584739685},{x:-3.997978866100311,y:-4.184295296669006,z:-1.004832148551941},{x:-3.998109996318817,y:-4.121495842933655,z:-1.042436718940735},{x:-3.997706115245819,y:-4.00120222568512,z:-1.058009743690491},{x:-3.996915996074677,y:3.173462510108948,z:-1.058071970939636},{x:-3.97529524564743,y:3.232722878456116,z:-1.058707475662231},{x:-3.914098918437958,y:3.280304074287415,z:-1.059515953063965},{x:-3.834421336650848,y:3.299513936042786,z:-1.059967398643494},{x:-3.766604602336884,y:3.300480008125305,z:-1.060003161430359},{x:-3.365127265453339,y:3.300480008125305,z:-1.060014724731445},{x:2.132759869098663,y:3.299185395240784,z:-1.059971570968628},{x:2.248222887516022,y:3.290591359138489,z:-1.059821248054504},{x:2.334081947803497,y:3.268102765083313,z:-1.059526920318604},{x:2.371764481067657,y:3.244826912879944,z:-1.059292674064636},{x:2.399714767932892,y:3.21085512638092,z:-1.059020519256592},{x:2.420068085193634,y:3.143057465553284,z:-1.058639168739319},{x:2.42648059129715,y:3.066469550132751,z:-1.058347702026367},{x:2.425027191638947,y:2.067585825920105,z:-1.055868983268738},{x:2.425049602985382,y:1.937475323677063,z:-1.027292609214783},{x:2.424963295459747,y:1.857954382896423,z:-.968167185783386},{x:2.424833118915558,y:1.80798351764679,z:-.872166335582733},{x:2.424777805805206,y:1.790816187858582,z:-.78326690196991},{x:2.424850761890411,y:1.784553408622742,z:-.658567786216736},{x:2.425103485584259,y:1.784666180610657,z:-.543854236602783},{x:2.425199329853058,y:1.777981877326965,z:-.495611011981964},{x:2.425229847431183,y:1.741746544837952,z:-.463577002286911},{x:2.42519599199295,y:1.664206624031067,z:-.447784662246704},{x:2.425078213214874,y:1.565107464790344,z:-.437292009592056},{x:2.425598108309796,y:1.519769787788391,z:-.43005046248436},{x:2.425078213214874,y:1.480193734169006,z:-.414321064949036},{x:2.422740963137456,y:1.46999990940094,z:-.409999400377274},{x:2.332452324068852,y:1.469995617866516,z:-.410003632307053},{x:2.298019363558598,y:1.472996115684509,z:-.413348644971848},{x:2.271950676119633,y:1.499904990196228,z:-.436071574687958},{x:2.264204933321781,y:1.542956709861755,z:-.450029134750366},{x:2.264105274355716,y:1.752755045890808,z:-.450015187263489},{x:2.257065654909915,y:1.791478276252747,z:-.450161814689636},{x:2.234301448977298,y:1.81657612323761,z:-.450068026781082},{x:2.192155243075198,y:1.819908976554871,z:-.449999868869781},{x:.449596495899885,y:1.818939566612244,z:-.449425131082535},{x:.406219573292463,y:1.809605479240417,z:-.44452178478241},{x:.373062105450361,y:1.784406065940857,z:-.433582246303558},{x:.362215729031294,y:1.737122654914856,z:-.422864556312561},{x:.362236362246066,y:1.510166049003601,z:-.394464313983917},{x:.362212758806735,y:1.423446574211121,z:-.403270989656448}],L1curveLRCD:[{x:4.400691747665405,y:-7.074393749237061,z:-1.049999922513962},{x:.989238500595093,y:-7.074435710906982,z:-1.049999922513962},{x:.608446836471558,y:-6.999250888824463,z:-1.049999922513962},{x:.386059522628784,y:-6.78273344039917,z:-1.049999922513962},{x:.278871536254883,y:-6.51814603805542,z:-1.049999922513962},{x:.229012727737427,y:-6.142368793487549,z:-1.049999922513962},{x:.225911617279053,y:-.639055252075195,z:-1.050013512372971},{x:.226108074188232,y:-.487310767173767,z:-1.03395077586174},{x:.226013898849487,y:-.365373134613037,z:-.928701013326645},{x:.225759983062744,y:-.323689460754395,z:-.765179604291916},{x:.225869178771973,y:-.319593667984009,z:-.643899530172348},{x:.22713303565979,y:-.327510833740234,z:-.543155401945114},{x:.231043338775635,y:-.311503231525421,z:-.492687195539474},{x:.240316390991211,y:-.253416299819946,z:-.46278104186058},{x:.246111392974854,y:-.194975316524506,z:-.454259276390076},{x:.250691652297974,y:-.001881182193756,z:-.451023310422897},{x:.250421285629272,y:.115601539611816,z:-.450852692127228},{x:.250008583068848,y:.634672403335571,z:-.439038425683975},{x:.249190807342529,y:.790037393569946,z:-.445328742265701},{x:.250047206878662,y:.896118998527527,z:-.447204321622849},{x:.267520427703857,y:.965937972068787,z:-.480067878961563},{x:.290664434432983,y:1.000456690788269,z:-.507945895195007},{x:.330931901931763,y:1.002010703086853,z:-.541733771562576},{x:.372737288475037,y:.972192525863647,z:-.571143180131912},{x:.428314805030823,y:.911785244941711,z:-.607014328241348},{x:.477008938789368,y:.829735279083252,z:-.628203481435776},{x:.539199590682983,y:.684086680412292,z:-.643187195062637},{x:.58792769908905,y:.54635214805603,z:-.647897094488144},{x:.627784371376038,y:.421509146690369,z:-.648007839918137},{x:.67333197593689,y:.286518335342407,z:-.649606555700302},{x:.718801259994507,y:.161644101142883,z:-.651733726263046},{x:.752297163009644,y:.074590921401978,z:-.651101917028427},{x:.809635996818542,y:-.05772453546524,z:-.640209645032883},{x:.862019300460815,y:-.125926077365875,z:-.597643226385117},{x:.900749802589417,y:-.15151971578598,z:-.549868434667587},{x:.94386887550354,y:-.160367488861084,z:-.487964868545532},{x:.969602465629578,y:-.151245653629303,z:-.447486490011215},{x:.998592615127563,y:-.100513756275177,z:-.399594157934189},{x:1.002111792564392,y:-.009594559669495,z:-.390682220458984},{x:.999396443367004,y:.160207152366638,z:-.387146025896072},{x:.999960660934448,y:.656807661056519,z:-.378785163164139},{x:.999959468841553,y:.806666851043701,z:-.378778070211411},{x:1.001009941101074,y:.886438250541687,z:-.379503756761551},{x:1.042863965034485,y:.939292550086975,z:-.383558481931686},{x:1.132806658744812,y:.978099703788757,z:-.391120076179504},{x:1.229866623878479,y:.992538928985596,z:-.402996242046356},{x:1.426599740982056,y:1.002126812934875,z:-.419786095619202},{x:1.623126029968262,y:.977569460868835,z:-.418223232030869},{x:1.687439680099487,y:.961907267570496,z:-.415293961763382},{x:1.724791526794434,y:.938054203987122,z:-.406750112771988},{x:1.766761779785156,y:.886518001556396,z:-.387931793928146},{x:1.770832538604736,y:.807965040206909,z:-.378786116838455},{x:1.770756721496582,y:.657963871955872,z:-.378787338733673},{x:1.77074670791626,y:.084999918937683,z:-.391000002622604},{x:1.77074670791626,y:.085041880607605,z:-.206999957561493},{x:1.77074670791626,y:-.069999814033508,z:-.206999957561493},{x:2.314218044281006,y:-.069999814033508,z:-.206999957561493},{x:2.314218044281006,y:.084957957267761,z:-.207000017166138},{x:2.314218044281006,y:.084999918937683,z:-.391000002622604},{x:2.314217567443848,y:.340163350105286,z:-.391012489795685},{x:2.314217805862427,y:.625461101531982,z:-.391000658273697},{x:2.31418776512146,y:.649379730224609,z:-.390970945358276},{x:2.31418776512146,y:.799504518508911,z:-.390561699867249},{x:2.314190626144409,y:1.063421249389648,z:-.389621645212173},{x:2.321141004562378,y:1.10480260848999,z:-.386953890323639},{x:2.356108427047729,y:1.124949932098389,z:-.374055236577988},{x:2.399849414825439,y:1.130175590515137,z:-.359428197145462},{x:2.42929744720459,y:1.143935203552246,z:-.352482497692108},{x:2.436087846755981,y:1.189532995223999,z:-.359314024448395},{x:2.436446905136108,y:1.470582485198975,z:-.417381107807159},{x:2.436169385910034,y:1.609592437744141,z:-.43617182970047},{x:2.435839414596558,y:1.677866458892822,z:-.438591659069061},{x:2.435853242874146,y:1.746486186981201,z:-.44829073548317},{x:2.436062574386597,y:1.784854412078857,z:-.491086214780807},{x:2.436074733734131,y:1.794772624969482,z:-.541325151920319},{x:2.435869693756104,y:1.79584789276123,z:-.656554013490677},{x:2.435829401016235,y:1.799470901489258,z:-.779182642698288},{x:2.435893535614014,y:1.815919876098633,z:-.866810649633408},{x:2.436006784439087,y:1.866119384765625,z:-.959997028112411},{x:2.436063051223755,y:1.945553302764893,z:-1.014088600873947},{x:2.436017513275146,y:2.074982643127441,z:-1.039317697286606},{x:2.438291072845459,y:3.067899227142334,z:-1.04255935549736},{x:2.432215929031372,y:3.146212577819824,z:-1.04387292265892},{x:2.411118268966675,y:3.21710729598999,z:-1.045623272657394},{x:2.381290912628174,y:3.252997875213623,z:-1.046874970197678},{x:2.341110944747925,y:3.277383327484131,z:-1.047935336828232},{x:2.255387544631958,y:3.300200939178467,z:-1.04919895529747},{x:2.135798931121826,y:3.30955171585083,z:-1.049872726202011},{x:-3.773504257202148,y:3.310999870300293,z:-1.050002664327621},{x:-3.839134216308594,y:3.309936046600342,z:-1.050003975629807},{x:-3.922260761260986,y:3.290400981903076,z:-1.050144761800766},{x:-3.985969066619873,y:3.238917827606201,z:-1.050277203321457},{x:-4.00714635848999,y:3.175591468811035,z:-1.050067752599716},{x:-4.007999897003174,y:-3.998482227325439,z:-1.05000028014183},{x:-4.00792932510376,y:-4.11894702911377,z:-1.035941570997238},{x:-4.00773286819458,y:-4.178412914276123,z:-1.002804726362228},{x:-4.007514953613281,y:-4.218980312347412,z:-.944409817457199},{x:-4.007374286651611,y:-4.246376037597656,z:-.849750369787216},{x:-4.008008480072021,y:-4.261973857879639,z:-.603474467992783},{x:-4.007944583892822,y:-4.262043476104736,z:-.5129314661026},{x:-4.020505428314209,y:-4.269335746765137,z:-.461208760738373},{x:-4.057941913604736,y:-4.281341075897217,z:-.419202119112015},{x:-4.110801219940186,y:-4.288573741912842,z:-.39608296751976},{x:-5.965100526809692,y:-4.289976596832275,z:-.390920042991638},{x:-6.05224347114563,y:-4.290217399597168,z:-.379496932029724},{x:-6.117515802383423,y:-4.290305614471436,z:-.341150760650635},{x:-6.139757394790649,y:-4.289998531341553,z:-.277410954236984},{x:-6.139759302139282,y:-4.290011405944824,z:.668419390916824},{x:-6.128401041030884,y:-4.290128707885742,z:.738622695207596},{x:-6.098838090896606,y:-4.290306568145752,z:.796712905168533},{x:-6.036592721939087,y:-4.290172576904297,z:.836902767419815},{x:-5.94947075843811,y:-4.279438495635986,z:.837313562631607},{x:-5.912377595901489,y:-4.254734992980957,z:.822965413331985},{x:-5.896123170852661,y:-4.228962898254395,z:.792204886674881},{x:-5.889872789382935,y:-4.203831195831299,z:.703221589326859},{x:-5.889881372451782,y:-4.203186988830566,z:.665210396051407},{x:-5.85986065864563,y:-4.203186988830566,z:.665210396051407},{x:-5.85986065864563,y:-4.259999752044678,z:.573012143373489},{x:-5.85986065864563,y:-4.259999752044678,z:.573012143373489},{x:-5.85986065864563,y:-4.148999691009521,z:.573012262582779},{x:-5.85986065864563,y:-4.148999691009521,z:.552434712648392},{x:-5.609674692153931,y:-4.148999691009521,z:.552434712648392},{x:-5.609674692153931,y:-4.148999691009521,z:.573012262582779},{x:-5.609674692153931,y:-4.260000228881836,z:.573012262582779},{x:-5.609674692153931,y:-4.260000228881836,z:.665208727121353},{x:-5.609674692153931,y:-4.203170776367188,z:.665208727121353},{x:-5.609674692153931,y:-4.260000228881836,z:.665208727121353},{x:-5.632780790328979,y:-4.202662944793701,z:.66507413983345},{x:-5.587310194969177,y:-4.204495549201965,z:.643564701080322},{x:-5.588474869728088,y:-4.202828049659729,z:.701492920517921},{x:-5.587361216545105,y:-4.215851426124573,z:.745496556162834},{x:-5.577935099601746,y:-4.24319851398468,z:.789079919457436},{x:-5.551767468452454,y:-4.272648811340332,z:.817609794437885},{x:-5.500808715820312,y:-4.28824371099472,z:.828372068703175},{x:-5.146838665008545,y:-4.289379060268402,z:.829957596957684},{x:-5.094715118408203,y:-4.271474540233612,z:.822825454175472},{x:-5.069004416465759,y:-4.207221984863281,z:.788863554596901},{x:-5.0634925365448,y:-4.162187874317169,z:.756541058421135},{x:-5.061604022979736,y:-4.093810707330704,z:.681701362133026},{x:-5.062041163444519,y:-4.066000401973724,z:.626671671867371},{x:-5.066443085670471,y:-4.043944954872131,z:.546949326992035},{x:-5.066443085670471,y:-4.012009263038635,z:.379006564617157},{x:-4.048246406018734,y:-4.012009263038635,z:.379006564617157},{x:-4.048246406018734,y:-3.707259267568588,z:.379006564617157},{x:-3.558381408452988,y:-3.707259267568588,z:.37933308315277},{x:-3.557456433773041,y:-3.746465682983398,z:.408772528171539},{x:-3.555215954780579,y:-3.793684422969818,z:.408871114253998},{x:-3.549277812242508,y:-3.872604489326477,z:.409107208251953},{x:-3.533526062965393,y:-4.004002630710602,z:.409614741802216},{x:-3.516728132963181,y:-4.093553960323334,z:.410022437572479},{x:-3.497406095266342,y:-4.166620135307312,z:.410381138324738},{x:-3.459121644496918,y:-4.250496983528137,z:.410817742347717},{x:-3.409289121627808,y:-4.287811696529388,z:.411007642745972},{x:-3.353748321533203,y:-4.289996206760406,z:.424574077129364},{x:-3.313245713710785,y:-4.289994955062866,z:.465323597192764},{x:-3.283352375030518,y:-4.289996027946472,z:.534781128168106},{x:-3.26727831363678,y:-4.289998114109039,z:.610744327306747},{x:-3.261187076568604,y:-4.289999663829803,z:.692457914352417},{x:-3.261051177978516,y:-4.289999723434448,z:1.757929265499115},{x:-3.256848394870758,y:-4.289999723434448,z:1.818717181682587},{x:-3.229984223842621,y:-4.289999723434448,z:1.883813917636871},{x:-3.184131443500519,y:-4.289999723434448,z:1.917410910129547},{x:-3.130300283432007,y:-4.289999723434448,z:1.930044710636139},{x:-2.958511352539062,y:-4.289999723434448,z:1.932102382183075},{x:-2.918978691101074,y:-4.280713021755219,z:1.922793090343475},{x:-2.903079032897949,y:-4.266063988208771,z:1.905421793460846},{x:-2.893978714942932,y:-4.247407138347626,z:1.877242267131805},{x:-2.889093399047852,y:-4.224928855895996,z:1.829813897609711},{x:-2.888426899909973,y:-4.210444569587708,z:1.776969015598297},{x:-2.865102589130402,y:-4.203882813453674,z:1.733411937952042},{x:-2.865102589130402,y:-4.259996056556702,z:1.733411937952042},{x:-2.865102589130402,y:-4.259996056556702,z:1.639999777078629},{x:-2.865102589130402,y:-4.139990448951721,z:1.639999777078629},{x:-2.865102589130402,y:-4.139990448951721,z:1.620638519525528},{x:-2.865102589130402,y:-4.130960640907288,z:1.620638519525528},{x:-2.699747622013092,y:-4.070960640907288,z:1.620638519525528},{x:-2.699747622013092,y:-4.070960640907288,z:1.640003591775894},{x:-2.699747622013092,y:-4.259997487068176,z:1.640003591775894},{x:-2.699747622013092,y:-4.259997487068176,z:1.733412176370621},{x:-2.699747622013092,y:-4.20388662815094,z:1.733412176370621},{x:-2.727161467075348,y:-4.20388662815094,z:1.733412176370621},{x:-2.7298544049263,y:-4.207239270210266,z:1.772449404001236},{x:-2.737078964710236,y:-4.212733864784241,z:1.792122036218643},{x:-2.750616848468781,y:-4.227006077766418,z:1.820151954889297},{x:-2.772007763385773,y:-4.250569462776184,z:1.84524217247963},{x:-2.798147737979889,y:-4.277900338172913,z:1.858846336603165},{x:-3.066250622272491,y:-4.29199230670929,z:1.861291319131851},{x:-3.139780819416046,y:-4.292004227638245,z:1.84716859459877},{x:-3.184505760669708,y:-4.291984677314758,z:1.809616953134537},{x:-3.196346580982208,y:-4.292001366615295,z:1.757503896951675},{x:-3.196342289447784,y:-4.291998028755188,z:-.259055227041245},{x:-3.203122437000275,y:-4.292007565498352,z:-.295279920101166},{x:-3.232372581958771,y:-4.291996598243713,z:-.319645196199417},{x:-3.271632969379425,y:-4.291999459266663,z:-.330097436904907},{x:-3.271760761737823,y:-4.291999936103821,z:-.330105692148209},{x:-3.892899811267853,y:-4.291997075080872,z:-.330097168684006},{x:-3.942090809345245,y:-4.290989518165588,z:-.341021448373795},{x:-3.979786217212677,y:-4.286325573921204,z:-.391498267650604},{x:-3.993961155414581,y:-4.281528115272522,z:-.447230041027069},{x:-3.99768191576004,y:-4.278071999549866,z:-.512150675058365},{x:-3.997580826282501,y:-4.27802574634552,z:-.60449030995369},{x:-3.99761039018631,y:-4.256709218025208,z:-.850464254617691},{x:-3.997735798358917,y:-4.224671483039856,z:-.946656554937363},{x:-3.997978985309601,y:-4.184295296669006,z:-1.004832118749619},{x:-3.998110115528107,y:-4.121495842933655,z:-1.042436808347702},{x:-3.997706234455109,y:-4.00120222568512,z:-1.058009713888168},{x:-3.996916115283966,y:3.173462748527527,z:-1.058071941137314},{x:-3.97529536485672,y:3.232723116874695,z:-1.058707445859909},{x:-3.914099037647247,y:3.280303835868835,z:-1.059515923261642},{x:-3.834421455860138,y:3.299513697624207,z:-1.059967368841171},{x:-3.766604721546173,y:3.300480246543884,z:-1.060003131628036},{x:-3.365127384662628,y:3.300480246543884,z:-1.060014694929123},{x:2.132759749889374,y:3.299185633659363,z:-1.059971541166306},{x:2.248222768306732,y:3.290591597557068,z:-1.059821337461472},{x:2.334081828594208,y:3.268103003501892,z:-1.059526890516281},{x:2.371764361858368,y:3.244827151298523,z:-1.059292763471603},{x:2.399714887142181,y:3.2108553647995,z:-1.059020489454269},{x:2.420067965984344,y:3.143057703971863,z:-1.058639258146286},{x:2.42648047208786,y:3.066469550132751,z:-1.058347672224045},{x:2.425027072429657,y:2.067585825920105,z:-1.055868953466415},{x:2.425049722194672,y:1.937475323677063,z:-1.02729269862175},{x:2.424963176250458,y:1.857954382896423,z:-.968167155981064},{x:2.424832999706268,y:1.80798351764679,z:-.872166365385056},{x:2.424777925014496,y:1.790816187858582,z:-.783266872167587},{x:2.424850642681122,y:1.784553408622742,z:-.658567756414413},{x:2.425103604793549,y:1.784666180610657,z:-.543854206800461},{x:2.425199449062347,y:1.777981877326965,z:-.495611041784286},{x:2.425229966640472,y:1.741746306419373,z:-.463577002286911},{x:2.425195872783661,y:1.664206624031067,z:-.447784662246704},{x:2.425078094005585,y:1.565107464790344,z:-.437292009592056},{x:2.421487987041473,y:1.519769787788391,z:-.43005046248436},{x:2.398598849773407,y:1.480193734169006,z:-.414321064949036},{x:2.367536008358002,y:1.46999990940094,z:-.409999400377274},{x:2.277247369289398,y:1.469995856285095,z:-.410003632307053},{x:2.243814408779144,y:1.472996115684509,z:-.413348644971848},{x:2.217745721340179,y:1.499904990196228,z:-.436071574687958},{x:2.209999978542328,y:1.542956709861755,z:-.450029134750366},{x:2.209900081157684,y:1.752755045890808,z:-.450015187263489},{x:2.203860700130463,y:1.791478276252747,z:-.450161814689636},{x:2.181096255779266,y:1.81657612323761,z:-.450068026781082},{x:2.138950049877167,y:1.819908976554871,z:-.449999898672104},{x:.396389305591583,y:1.818939566612244,z:-.449425131082535},{x:.353012382984161,y:1.809605479240417,z:-.44452178478241},{x:.319854915142059,y:1.784406065940857,z:-.433582246303558},{x:.309005558490753,y:1.383446574211121,z:-.403270989656448}],L2curve:[{x:4.399394512176514,y:-6.999615669250488,z:-.975804269313812},{x:.980447292327881,y:-6.998896598815918,z:-.975804269313812},{x:.654083251953125,y:-6.918123245239258,z:-.975804269313812},{x:.455363512039185,y:-6.736568450927734,z:-.975804209709167},{x:.351336717605591,y:-6.496802568435669,z:-.975804209709167},{x:.3003830909729,y:-6.132636070251465,z:-.975804328918457},{x:.3003830909729,y:-.639558553695679,z:-.975804328918457},{x:.300575256347656,y:-.511218070983887,z:-.946162521839142},{x:.300466299057007,y:-.436589241027832,z:-.884741127490997},{x:.300231695175171,y:-.393918514251709,z:-.758549928665161},{x:.300252914428711,y:-.389065027236938,z:-.643972158432007},{x:.312697410583496,y:-.380251169204712,z:-.585494369268417},{x:.367207288742065,y:-.337880373001099,z:-.522798508405685},{x:.404756307601929,y:-.304841279983521,z:-.491636693477631},{x:.446137666702271,y:-.250781536102295,z:-.466701537370682},{x:.482885599136353,y:-.178738117218018,z:-.452140897512436},{x:.491179466247559,y:-.000434160232544,z:-.449945598840714},{x:.48701000213623,y:.804702520370483,z:-.44626373052597},{x:.487806558609009,y:.894631385803223,z:-.447209417819977},{x:.50513219833374,y:.965517997741699,z:-.479811280965805},{x:.528412818908691,y:1.000422477722168,z:-.507905244827271},{x:.568336963653564,y:1.002151250839233,z:-.541445463895798},{x:.610221862792969,y:.972482681274414,z:-.570936679840088},{x:.665188550949097,y:.912683010101318,z:-.606624037027359},{x:.712686061859131,y:.829841136932373,z:-.628292232751846},{x:.770309448242188,y:.682448863983154,z:-.643391788005829},{x:.813606739044189,y:.542074203491211,z:-.647960335016251},{x:.846774578094482,y:.416178226470947,z:-.647946089506149},{x:.880290985107422,y:.277063131332397,z:-.649848997592926},{x:.913794279098511,y:.149195909500122,z:-.651791214942932},{x:.94135570526123,y:.059818506240845,z:-.650623708963394},{x:.997615337371826,y:-.073131322860718,z:-.636273860931396},{x:1.05269193649292,y:-.134649753570557,z:-.584306478500366},{x:1.090001583099365,y:-.155509948730469,z:-.536353886127472},{x:1.132032871246338,y:-.158596515655518,z:-.474282503128052},{x:1.149754047393799,y:-.15064263343811,z:-.446141719818115},{x:1.178016185760498,y:-.099530696868896,z:-.399436414241791},{x:1.181423664093018,y:-.019682645797729,z:-.394853010773659},{x:1.181417942047119,y:-.008246183395386,z:-.394403889775276},{x:1.179545402526855,y:.163590431213379,z:-.385862693190575},{x:1.180020809173584,y:.659232616424561,z:-.378778234124184},{x:1.180029392242432,y:.817305088043213,z:-.378777623176575},{x:1.180176734924316,y:.884767532348633,z:-.398168712854385},{x:1.196671962738037,y:.941170215606689,z:-.431603282690048},{x:1.275557041168213,y:.997338771820068,z:-.448385953903198},{x:1.371974945068359,y:1.017935276031494,z:-.452032834291458},{x:1.5694899559021,y:1.023613691329956,z:-.455537110567093},{x:1.689213752746582,y:1.00290846824646,z:-.449651211500168},{x:1.827765464782715,y:.971513271331787,z:-.435635477304459},{x:1.908994197845459,y:.93484354019165,z:-.417344361543655},{x:1.948444366455078,y:.884518146514893,z:-.391055956482887},{x:1.950880527496338,y:.817442655563354,z:-.378808125853539},{x:1.950897693634033,y:.656679248809814,z:-.38972679376602},{x:1.950814723968506,y:.480301856994629,z:-.391000181436539},{x:1.950799465179443,y:.084068298339844,z:-.391000002622604},{x:1.950799465179443,y:.085041999816895,z:-.206999991089106},{x:1.950799465179443,y:.020289897918701,z:-.206999991089106},{x:1.950799465179443,y:-.028599739074707,z:-.256999835371971},{x:1.950799465179443,y:-.069999694824219,z:-.256999835371971},{x:2.495999813079834,y:-.069999694824219,z:-.256999999284744},{x:2.495999813079834,y:-.028599739074707,z:-.256999999284744},{x:2.495999813079834,y:.020291805267334,z:-.207000013440847},{x:2.495999813079834,y:.085030317306519,z:-.206993445754051},{x:2.495999813079834,y:.149914741516113,z:-.391004502773285},{x:2.496027946472168,y:.337237358093262,z:-.390977114439011},{x:2.496583461761475,y:1.084879398345947,z:-.390228182077408},{x:2.508129596710205,y:1.117398023605347,z:-.384438842535019},{x:2.534849643707275,y:1.127470970153809,z:-.371914833784103},{x:2.56577730178833,y:1.138196468353271,z:-.360618233680725},{x:2.574019908905029,y:1.164000034332275,z:-.361999988555908},{x:2.574406147003174,y:1.533051490783691,z:-.428886830806732},{x:2.574059963226318,y:1.636434078216553,z:-.438359141349792},{x:2.573783397674561,y:1.706686496734619,z:-.441515743732452},{x:2.573911666870117,y:1.76512622833252,z:-.46076163649559},{x:2.574088096618652,y:1.788777351379395,z:-.500816762447357},{x:2.573899269104004,y:1.796265125274658,z:-.638449370861053},{x:2.573809146881104,y:1.800352096557617,z:-.775198459625244},{x:2.573876857757568,y:1.818849563598633,z:-.873340964317322},{x:2.574002742767334,y:1.86864709854126,z:-.962242245674133},{x:2.574073791503906,y:1.94135570526123,z:-1.01210081577301},{x:2.574044704437256,y:2.072307586669922,z:-1.039222061634064},{x:2.574390888214111,y:3.184593200683594,z:-1.041000008583069},{x:2.562583446502686,y:3.275914669036865,z:-1.041000008583069},{x:2.547600269317627,y:3.31512451171875,z:-1.041000008583069},{x:2.522019386291504,y:3.348457813262939,z:-1.041000008583069},{x:2.484515190124512,y:3.373823642730713,z:-1.041000008583069},{x:2.442025184631348,y:3.389990329742432,z:-1.040999948978424},{x:2.338545799255371,y:3.405647277832031,z:-1.041000008583069},{x:2.205415725708008,y:3.410888195037842,z:-1.041000008583069},{x:-6.677358150482178,y:3.410999774932861,z:-1.041003346443176},{x:-6.7187819480896,y:3.405745506286621,z:-1.041042149066925},{x:-6.741822719573975,y:3.381607532501221,z:-1.041203618049622},{x:-6.757553815841675,y:3.336602210998535,z:-1.041227519512177},{x:-6.761001110076904,y:3.294939041137695,z:-1.040998518466949},{x:-6.760998725891113,y:-6.467456817626953,z:-1.041001915931702},{x:-6.773133754730225,y:-6.532126665115356,z:-1.047921121120453},{x:-6.814113616943359,y:-6.57861328125,z:-1.071534097194672},{x:-6.945733547210693,y:-6.653245449066162,z:-1.147536516189575},{x:-7.06036376953125,y:-6.720702171325684,z:-1.213671803474426},{x:-7.090274810791016,y:-6.749517440795898,z:-1.230877637863159},{x:-7.116530418395996,y:-6.798862457275391,z:-1.245878458023071},{x:-7.121701240539551,y:-6.853480339050293,z:-1.248464822769165},{x:-7.121625900268555,y:-6.928765773773193,z:-1.246939063072205},{x:-7.121602535247803,y:-7.003173351287842,z:-1.244563341140747},{x:-7.122413158416748,y:-7.119347095489502,z:-1.232884407043457},{x:-7.125990390777588,y:-7.181005001068115,z:-1.203943729400635},{x:-7.130663394927979,y:-7.231815338134766,z:-1.162191569805145},{x:-7.14271354675293,y:-7.26130199432373,z:-1.091111361980438},{x:-7.159038543701172,y:-7.264970779418945,z:-1.035244882106781},{x:-7.175289630889893,y:-7.256222724914551,z:-.986584007740021},{x:-7.180503368377686,y:-7.239480018615723,z:-.97199672460556},{x:-7.180499076843262,y:-7.089219093322754,z:-.971897959709167},{x:-7.180500507354736,y:-7,z:-.971999943256378},{x:-7.21999979019165,y:-7,z:-.971999943256378},{x:-7.220000267028809,y:-7.000000476837158,z:-.73017805814743},{x:-7.28129243850708,y:-7.121237277984619,z:-.665122866630554},{x:-7.28129243850708,y:-8.18473196029663,z:-.702091157436371},{x:-7.28129243850708,y:-8.287760257720947,z:-.673342764377594},{x:-7.28129243850708,y:-8.371987342834473,z:-.601753383874893},{x:-7.28129243850708,y:-8.434554100036621,z:-.512094348669052},{x:-7.282518863677979,y:-8.456243991851807,z:-.411026045680046},{x:-7.345242500305176,y:-8.456243515014648,z:.092359215021133},{x:-7.392615795135498,y:-8.456243991851807,z:.482042968273163},{x:-7.42140531539917,y:-8.456244468688965,z:.815353333950043},{x:-7.432523727416992,y:-8.45571517944336,z:1.578142046928406},{x:-7.402056217193604,y:-8.454168319702148,z:1.861554145812988},{x:-7.343657493591309,y:-8.453200817108154,z:2.098555088043213},{x:-7.268442630767822,y:-8.454078674316406,z:2.395122766494751},{x:-7.211127758026123,y:-8.455881118774414,z:2.662330389022827},{x:-7.191863059997559,y:-8.457529067993164,z:2.886730909347534},{x:-7.234898090362549,y:-8.458643436431885,z:3.071099042892456},{x:-7.379565238952637,y:-8.45915937423706,z:3.245129823684692},{x:-7.534282207489014,y:-8.459315299987793,z:3.339492082595825},{x:-7.969772815704346,y:-8.458343029022217,z:3.455363750457764},{x:-8.463397026062012,y:-8.457214832305908,z:3.488510131835938},{x:-9.413444519042969,y:-8.456243991851807,z:3.462936162948608},{x:-9.704480171203613,y:-8.456243991851807,z:3.504686117172241},{x:-10.163193702697754,y:-8.456243991851807,z:3.646656274795532},{x:-10.386556625366211,y:-8.456243991851807,z:3.678966045379639},{x:-10.565269470214844,y:-8.456243991851807,z:3.646533727645874},{x:-10.81335973739624,y:-8.456243991851807,z:3.509632349014282},{x:-11.095757007598877,y:-8.456243991851807,z:3.172203302383423},{x:-11.275255680084229,y:-8.456243991851807,z:2.830600738525391},{x:-11.403369426727295,y:-8.456243991851807,z:2.478066205978394},{x:-11.481069087982178,y:-8.456243991851807,z:2.18047046661377},{x:-11.541514873504639,y:-8.456243991851807,z:1.789495825767517},{x:-11.551957607269287,y:-8.456243991851807,z:1.481740713119507},{x:-11.52073621749878,y:-8.456243991851807,z:1.165355443954468},{x:-11.429942607879639,y:-8.456243991851807,z:.869915962219238},{x:-11.28185224533081,y:-8.456243991851807,z:.618709444999695},{x:-11.090506076812744,y:-8.456389427185059,z:.434082925319672},{x:-10.844728946685791,y:-8.456708908081055,z:.311378508806229},{x:-10.513279914855957,y:-8.457133769989014,z:.277893662452698},{x:-10.24413537979126,y:-8.45712661743164,z:.353926956653595},{x:-9.95735216140747,y:-8.456243991851807,z:.593848645687103},{x:-9.331133842468262,y:-8.45630693435669,z:1.486007690429688},{x:-9.331127643585205,y:-5.627434968948364,z:1.486002564430237},{x:-9.295978546142578,y:-5.545830726623535,z:1.460863828659058},{x:-9.295979499816895,y:-4.804326295852661,z:1.46086311340332},{x:-9.33112621307373,y:-4.670018196105957,z:1.486003398895264},{x:-9.331133842468262,y:-3.229885816574097,z:1.48600709438324},{x:-9.353906154632568,y:-3.229410827159882,z:1.502303957939148},{x:-9.353883266448975,y:-8.456298351287842,z:1.502289056777954},{x:-9.986315250396729,y:-8.456243515014648,z:.614732503890991},{x:-10.259687900543213,y:-8.457125663757324,z:.386381983757019},{x:-10.51702070236206,y:-8.457132816314697,z:.313722223043442},{x:-10.833979606628418,y:-8.456707954406738,z:.345826923847198},{x:-11.069591999053955,y:-8.456388473510742,z:.463257014751434},{x:-11.253432750701904,y:-8.456243515014648,z:.640434145927429},{x:-11.396888256072998,y:-8.456243515014648,z:.884331822395325},{x:-11.485368251800537,y:-8.456243515014648,z:1.172159552574158},{x:-11.515883922576904,y:-8.456243515014648,z:1.482975363731384},{x:-11.505640506744385,y:-8.456243515014648,z:1.786353826522827},{x:-11.445638179779053,y:-8.456243515014648,z:2.172903537750244},{x:-11.368974208831787,y:-8.456243515014648,z:2.467456102371216},{x:-11.242430210113525,y:-8.456243515014648,z:2.81633734703064},{x:-11.065218448638916,y:-8.456243515014648,z:3.153344869613647},{x:-10.790891647338867,y:-8.456243515014648,z:3.480889558792114},{x:-10.554258823394775,y:-8.456243515014648,z:3.612370491027832},{x:-10.386090278625488,y:-8.456243515014648,z:3.642360925674438},{x:-10.172117233276367,y:-8.456243515014648,z:3.612159252166748},{x:-9.712257385253906,y:-8.456243515014648,z:3.470036029815674},{x:-9.415262699127197,y:-8.456243515014648,z:3.426138639450073},{x:-8.4634428024292,y:-8.457215785980225,z:3.452013254165649},{x:-7.97606372833252,y:-8.458343982696533,z:3.420660734176636},{x:-7.549878120422363,y:-8.45931625366211,z:3.307128429412842},{x:-7.403585910797119,y:-8.459160327911377,z:3.217422008514404},{x:-7.267298221588135,y:-8.458644390106201,z:3.056012630462646},{x:-7.228044033050537,y:-8.457516193389893,z:2.88423490524292},{x:-7.246801853179932,y:-8.45591926574707,z:2.667510032653809},{x:-7.303309917449951,y:-8.454128742218018,z:2.403382539749146},{x:-7.377866268157959,y:-8.4531888961792,z:2.107893228530884},{x:-7.437475204467773,y:-8.454124450683594,z:1.868533611297607},{x:-7.469173431396484,y:-8.455708503723145,z:1.579506754875183},{x:-7.45796012878418,y:-8.456243515014648,z:.812884151935577},{x:-7.428930759429932,y:-8.456243515014648,z:.478243172168732},{x:-7.381263732910156,y:-8.456243515014648,z:.087040990591049},{x:-7.319143295288086,y:-8.456243515014648,z:-.411953881382942},{x:-7.3180251121521,y:-8.43480110168457,z:-.511533230543137},{x:-7.3180251121521,y:-8.372212886810303,z:-.601422101259232},{x:-7.3180251121521,y:-8.284822940826416,z:-.673342764377594},{x:-7.3180251121521,y:-8.184406757354736,z:-.702038407325745},{x:-7.3180251121521,y:-7.121237277984619,z:-.665122866630554},{x:-7.380000114440918,y:-7,z:-.73013699054718},{x:-7.380000114440918,y:-7,z:-.971999943256378},{x:-7.420218944549561,y:-7,z:-.971887290477753},{x:-7.420135974884033,y:-7.229792594909668,z:-.971999943256378},{x:-7.419116497039795,y:-7.271958827972412,z:-.997248589992523},{x:-7.416078090667725,y:-7.282677173614502,z:-1.027081370353699},{x:-7.404735088348389,y:-7.288216590881348,z:-1.080520868301392},{x:-7.381247997283936,y:-7.285863876342773,z:-1.1320641040802},{x:-7.331314086914062,y:-7.268835067749023,z:-1.186755537986755},{x:-7.255238056182861,y:-7.232258319854736,z:-1.243874311447144},{x:-7.190905094146729,y:-7.188028812408447,z:-1.275627493858337},{x:-7.15151834487915,y:-7.127361297607422,z:-1.288607120513916},{x:-7.120673656463623,y:-7.029222011566162,z:-1.29524838924408},{x:-7.110832691192627,y:-6.983821392059326,z:-1.290317416191101},{x:-7.105105400085449,y:-6.953314781188965,z:-1.280117034912109},{x:-7.098957538604736,y:-6.853044986724854,z:-1.242270469665527},{x:-7.094221115112305,y:-6.803412437438965,z:-1.238126754760742},{x:-7.071291446685791,y:-6.75865364074707,z:-1.225521802902222},{x:-7.047123908996582,y:-6.736278533935547,z:-1.212133288383484},{x:-6.938197612762451,y:-6.672951459884644,z:-1.151619255542755},{x:-6.799851179122925,y:-6.595724105834961,z:-1.074691653251648},{x:-6.752742290496826,y:-6.540746212005615,z:-1.04855865240097},{x:-6.738998651504517,y:-6.470964908599854,z:-1.041021645069122},{x:-6.739001035690308,y:3.29352331161499,z:-1.041018128395081},{x:-6.736780166625977,y:3.332046508789062,z:-1.041241466999054},{x:-6.724554538726807,y:3.371699333190918,z:-1.041218400001526},{x:-6.709434986114502,y:3.386856079101562,z:-1.041054844856262},{x:-6.677860260009766,y:3.388863086700439,z:-1.041023313999176},{x:2.20306396484375,y:3.388379096984863,z:-1.041020154953003},{x:2.336599349975586,y:3.383839130401611,z:-1.041020154953003},{x:2.434768199920654,y:3.369027137756348,z:-1.041020154953003},{x:2.473091125488281,y:3.355490684509277,z:-1.041020154953003},{x:2.506489276885986,y:3.332463264465332,z:-1.041020154953003},{x:2.527829647064209,y:3.3036208152771,z:-1.041020154953003},{x:2.540578365325928,y:3.270153522491455,z:-1.041020154953003},{x:2.551896095275879,y:3.185881614685059,z:-1.041020154953003},{x:2.551164627075195,y:2.074449062347412,z:-1.041000127792358},{x:2.551166534423828,y:1.939406871795654,z:-1.012125492095947},{x:2.551060199737549,y:1.868456840515137,z:-.962550401687622},{x:2.550971508026123,y:1.818828105926514,z:-.872255086898804},{x:2.550804615020752,y:1.803362369537354,z:-.774220049381256},{x:2.550955772399902,y:1.79634428024292,z:-.636418163776398},{x:2.551046848297119,y:1.788206100463867,z:-.500407159328461},{x:2.551033020019531,y:1.766407012939453,z:-.460740983486176},{x:2.550843715667725,y:1.707274436950684,z:-.440315991640091},{x:2.551224231719971,y:1.638169288635254,z:-.438664168119431},{x:2.55164098739624,y:1.535019397735596,z:-.432128399610519},{x:2.551371574401855,y:1.425973892211914,z:-.414328753948212},{x:2.547983169555664,y:1.342244148254395,z:-.403892233967781},{x:2.531129837036133,y:1.266393184661865,z:-.396573603153229},{x:2.512512683868408,y:1.229668617248535,z:-.393151789903641},{x:2.476953983306885,y:1.200707197189331,z:-.39049819111824},{x:2.422186374664307,y:1.195447206497192,z:-.389999896287918},{x:1.989051342010498,y:1.196392297744751,z:-.390082985162735},{x:1.9393310546875,y:1.207623481750488,z:-.391461938619614},{x:1.90177583694458,y:1.235888242721558,z:-.394597291946411},{x:1.880382537841797,y:1.271061897277832,z:-.398033499717712},{x:1.875892639160156,y:1.313468933105469,z:-.400532931089401},{x:1.875888347625732,y:1.41193380355835,z:-.404000163078308}],L3curve:[{x:4.399859428405762,y:-6.923367559909821,z:-1.049999952316284},{x:.984602689743042,y:-6.923367559909821,z:-1.049999952316284},{x:.932857751846313,y:-6.915172636508942,z:-1.049999952316284},{x:.690699338912964,y:-6.844363272190094,z:-1.049999952316284},{x:.518234491348267,y:-6.694782316684723,z:-1.049999952316284},{x:.420135021209717,y:-6.479503691196442,z:-1.049999952316284},{x:.378000259399414,y:-6.153543531894684,z:-1.049999952316284},{x:.374799966812134,y:-.636437475681305,z:-1.0500128865242},{x:.374998569488525,y:-.483923971652985,z:-1.032983541488647},{x:.374889612197876,y:-.361339867115021,z:-.923174977302551},{x:.374645471572876,y:-.320411026477814,z:-.764285728335381},{x:.374755859375,y:-.315717041492462,z:-.643848702311516},{x:.384811401367188,y:-.314442694187164,z:-.586533322930336},{x:.425046443939209,y:-.309343636035919,z:-.548675656318665},{x:.473874568939209,y:-.3027303814888,z:-.525919698178768},{x:.651332139968872,y:-.261769890785217,z:-.47755504399538},{x:.728565692901611,y:-.172101497650146,z:-.450844705104828},{x:.729644775390625,y:-.000905394554138,z:-.450084239244461},{x:.729371070861816,y:.116692900657654,z:-.450380846858025},{x:.728074550628662,y:.634676337242126,z:-.43947646021843},{x:.727365016937256,y:.816824078559875,z:-.44626373052597},{x:.728197574615479,y:.896473467350006,z:-.447203099727631},{x:.74551248550415,y:.965575814247131,z:-.479846820235252},{x:.769026756286621,y:1.000647902488708,z:-.508171990513802},{x:.809246063232422,y:1.001948237419128,z:-.541862264275551},{x:.851519584655762,y:.971582472324371,z:-.571577802300453},{x:.906085252761841,y:.911131083965302,z:-.607309177517891},{x:.948222637176514,y:.826168060302734,z:-.628844067454338},{x:.992669105529785,y:.673798620700836,z:-.643762037158012},{x:1.022046804428101,y:.530619382858276,z:-.648024678230286},{x:1.044399738311768,y:.402479410171509,z:-.647886902093887},{x:1.072404384613037,y:.262288689613342,z:-.650070756673813},{x:1.102819919586182,y:.133360266685486,z:-.651765882968903},{x:1.129710912704468,y:.042766451835632,z:-.650065138936043},{x:1.189256191253662,y:-.086867809295654,z:-.629071652889252},{x:1.243265867233276,y:-.141324043273926,z:-.574103713035583},{x:1.281912326812744,y:-.158320784568787,z:-.52218358963728},{x:1.304992914199829,y:-.160191059112549,z:-.488042555749416},{x:1.330265283584595,y:-.151646852493286,z:-.448381200432777},{x:1.359750986099243,y:-.101057291030884,z:-.399681493639946},{x:1.363327503204346,y:-.010706901550293,z:-.394515559077263},{x:1.360606670379639,y:.160287618637085,z:-.387145772576332},{x:1.3598473072052,y:.656590223312378,z:-.3787851780653},{x:1.359846115112305,y:.806366920471191,z:-.378778085112572},{x:1.360290050506592,y:.878993988037109,z:-.406490966677666},{x:1.371585845947266,y:.928542137145996,z:-.454204641282558},{x:1.437507152557373,y:.989764750003815,z:-.486682713031769},{x:1.532194137573242,y:1.015411794185638,z:-.492967002093792},{x:1.730168342590332,y:1.018061399459839,z:-.49293826520443},{x:1.84912109375,y:1.006421864032745,z:-.475128449499607},{x:1.9849534034729,y:.98447173833847,z:-.43938010931015},{x:2.099777221679688,y:.940209925174713,z:-.413789391517639},{x:2.129160404205322,y:.885046780109406,z:-.388460531830788},{x:2.130722522735596,y:.805697619915009,z:-.378786131739616},{x:2.130640506744385,y:.655606627464294,z:-.378787338733673},{x:2.130630493164062,y:.085000038146973,z:-.391000017523766},{x:2.130630493164062,y:.085041999816895,z:-.207000017166138},{x:2.130630493164062,y:.020289897918701,z:-.207000017166138},{x:2.130630493164062,y:-.028599739074707,z:-.307045698165894},{x:2.130630493164062,y:-.069999694824219,z:-.307045698165894},{x:2.677995681762695,y:-.069999694824219,z:-.307045698165894},{x:2.678016185760498,y:-.028600692749023,z:-.307045549154282},{x:2.677995681762695,y:.020291805267334,z:-.207000017166138},{x:2.677995681762695,y:.084958076477051,z:-.207000017166138},{x:2.677995681762695,y:.085000038146973,z:-.391000017523766},{x:2.677995204925537,y:.338016301393509,z:-.391000017523766},{x:2.677994728088379,y:.650000095367432,z:-.391000017523766},{x:2.677996158599854,y:.800341606140137,z:-.391000464558601},{x:2.678489208221436,y:1.10097074508667,z:-.390687674283981},{x:2.68785285949707,y:1.187073230743408,z:-.386384934186935},{x:2.695988655090332,y:1.269029140472412,z:-.390853434801102},{x:2.696004867553711,y:1.644940912723541,z:-.447284147143364},{x:2.695906162261963,y:1.750846087932587,z:-.453185349702835},{x:2.696043014526367,y:1.775441825389862,z:-.471555262804031},{x:2.696122169494629,y:1.791356027126312,z:-.51289027184248},{x:2.696022033691406,y:1.79644650220871,z:-.578256130218506},{x:2.695781707763672,y:1.798213183879852,z:-.754234030842781},{x:2.695905208587646,y:1.834252536296844,z:-.914694964885712},{x:2.696006298065186,y:1.881610572338104,z:-.977478563785553},{x:2.696060180664062,y:1.94292026758194,z:-1.013975143432617},{x:2.696066379547119,y:1.996061980724335,z:-1.030017197132111},{x:2.696034908294678,y:2.068780362606049,z:-1.039065837860107},{x:2.698402404785156,y:3.202660977840424,z:-1.041000008583069},{x:2.696795463562012,y:3.307228744029999,z:-1.041000008583069},{x:2.688758850097656,y:3.371052443981171,z:-1.041000008583069},{x:2.662899971008301,y:3.429063975811005,z:-1.041000008583069},{x:2.616544723510742,y:3.471314609050751,z:-1.041000008583069},{x:2.55638599395752,y:3.492538869380951,z:-1.041000068187714},{x:2.359962940216064,y:3.510318696498871,z:-1.041000008583069},{x:-6.781206130981445,y:3.511000096797943,z:-1.041002750396729},{x:-6.823827743530273,y:3.502249181270599,z:-1.041113555431366},{x:-6.851361274719238,y:3.460042655467987,z:-1.041313946247101},{x:-6.859833717346191,y:3.404084861278534,z:-1.041034460067749},{x:-6.85999870300293,y:-1.480720579624176,z:-1.04100239276886},{x:-6.868198394775391,y:-1.548273384571075,z:-1.048222661018372},{x:-6.903788566589355,y:-1.611000120639801,z:-1.079927206039429},{x:-6.963887214660645,y:-1.665094673633575,z:-1.133558630943298},{x:-7.037685394287109,y:-1.718928158283234,z:-1.199372589588165},{x:-7.093761444091797,y:-1.777069628238678,z:-1.249190092086792},{x:-7.113672256469727,y:-1.861726105213165,z:-1.257980465888977},{x:-7.132243156433105,y:-1.969486057758331,z:-1.228431582450867},{x:-7.14143180847168,y:-2.033042013645172,z:-1.210591971874237},{x:-7.145265579223633,y:-2.10785585641861,z:-1.193857192993164},{x:-7.139498710632324,y:-2.177504360675812,z:-1.185556530952454},{x:-7.134304046630859,y:-2.236004412174225,z:-1.170718133449554},{x:-7.133780479431152,y:-2.262111723423004,z:-1.151211023330688},{x:-7.139130592346191,y:-2.280353367328644,z:-1.094343245029449},{x:-7.145254135131836,y:-2.281299889087677,z:-1.028244733810425},{x:-7.149043083190918,y:-2.26273375749588,z:-.986003220081329},{x:-7.149993896484375,y:-2.237381756305695,z:-.975129961967468},{x:-7.150005340576172,y:-2.099997818470001,z:-.975000023841858},{x:-7.419699668884277,y:-2.099997103214264,z:-.974999904632568},{x:-7.419684410095215,y:-2.236846268177032,z:-.9752037525177},{x:-7.419767379760742,y:-2.259329617023468,z:-.983042240142822},{x:-7.421468734741211,y:-2.272916376590729,z:-1.005771934986115},{x:-7.432584762573242,y:-2.276800930500031,z:-1.070044040679932},{x:-7.452570915222168,y:-2.271225988864899,z:-1.127962946891785},{x:-7.484274864196777,y:-2.240243256092072,z:-1.181668162345886},{x:-7.51472282409668,y:-2.195526421070099,z:-1.222188651561737},{x:-7.537411689758301,y:-2.141366302967072,z:-1.247484982013702},{x:-7.540329933166504,y:-2.085682928562164,z:-1.248601615428925},{x:-7.534406661987305,y:-1.990567028522491,z:-1.24988579750061},{x:-7.521335601806641,y:-1.892578899860382,z:-1.253785729408264},{x:-7.53071117401123,y:-1.821498215198517,z:-1.254807710647583},{x:-7.54979133605957,y:-1.725555241107941,z:-1.252838134765625},{x:-7.553455352783203,y:-1.661163151264191,z:-1.249869346618652},{x:-7.534172058105469,y:-1.585470974445343,z:-1.244044482707977},{x:-7.494093894958496,y:-1.548558294773102,z:-1.239817678928375},{x:-7.44080638885498,y:-1.532608568668365,z:-1.237512707710266},{x:-7.184194564819336,y:-1.518912613391876,z:-1.17791211605072},{x:-7.057861328125,y:-1.495806992053986,z:-1.114509403705597},{x:-6.998339653015137,y:-1.471466362476349,z:-1.080130338668823},{x:-6.956676483154297,y:-1.429270565509796,z:-1.054293513298035},{x:-6.95000171661377,y:3.494308888912201,z:-1.049996733665466},{x:-6.945930480957031,y:3.552834212779999,z:-1.050254702568054},{x:-6.921992301940918,y:3.600732028484344,z:-1.0500767827034},{x:-6.887078285217285,y:3.611000001430511,z:-1.050000786781311},{x:-6.820026397705078,y:3.611000001430511,z:-1.050029337406158},{x:-4.253899574279785,y:3.612153232097626,z:-1.049999952316284},{x:-4.131292343139648,y:3.625780284404755,z:-1.049999952316284},{x:-4.048453807830811,y:3.669533669948578,z:-1.049999952316284},{x:-4.014104843139648,y:3.760717332363129,z:-1.049999952316284},{x:-4.011044502258301,y:6.450850427150726,z:-1.049078226089478},{x:-4.01105260848999,y:6.522915303707123,z:-1.042454302310944},{x:-4.011019229888916,y:6.581004083156586,z:-1.00744354724884},{x:-4.010987758636475,y:6.597197949886322,z:-.940395474433899},{x:-4.010993957519531,y:6.599951207637787,z:3.778403460979462},{x:-4.011044979095459,y:6.588649690151215,z:3.929041564464569},{x:-4.011033058166504,y:6.558999478816986,z:3.978542506694794},{x:-4.011752605438232,y:6.507899701595306,z:3.998572528362274},{x:-4.020821571350098,y:6.366156995296478,z:3.999378859996796},{x:-4.028229713439941,y:6.310823380947113,z:3.972304046154022},{x:-4.038546562194824,y:6.296244084835052,z:3.904556930065155},{x:-4.046140193939209,y:6.299639165401459,z:3.850844085216522},{x:-3.950986385345459,y:6.299736440181732,z:3.850976169109344},{x:-3.960681438446045,y:6.293348252773285,z:3.906794250011444},{x:-3.971282958984375,y:6.315432012081146,z:3.96275919675827},{x:-3.979856491088867,y:6.362042844295502,z:3.998181521892548},{x:-3.98866081237793,y:6.507559239864349,z:4.000096499919891},{x:-3.989032745361328,y:6.559115827083588,z:3.978542506694794},{x:-3.989044666290283,y:6.588579118251801,z:3.929064452648163},{x:-3.988994598388672,y:6.599787652492523,z:3.778547465801239},{x:-3.988988399505615,y:6.597857415676117,z:-.941858053207397},{x:-3.989019870758057,y:6.581214845180511,z:-1.007923126220703},{x:-3.989052295684814,y:6.522608697414398,z:-1.042552649974823},{x:-3.989044189453125,y:6.45083612203598,z:-1.04908150434494},{x:-3.993015766143799,y:3.762901246547699,z:-1.049999952316284},{x:-4.028622627258301,y:3.66196483373642,z:-1.049999952316284},{x:-4.121597290039062,y:3.607021987438202,z:-1.049999952316284},{x:-4.250211715698242,y:3.590464532375336,z:-1.049999952316284},{x:-6.820326805114746,y:3.588999688625336,z:-1.050029456615448},{x:-6.881821632385254,y:3.588999688625336,z:-1.050003111362457},{x:-6.907672882080078,y:3.584243714809418,z:-1.050069391727448},{x:-6.92558479309082,y:3.548551976680756,z:-1.05025988817215},{x:-6.92900276184082,y:3.492266356945038,z:-1.049995541572571},{x:-6.93754768371582,y:-1.43732362985611,z:-1.055103600025177},{x:-6.987850189208984,y:-1.489081203937531,z:-1.084057986736298},{x:-7.049393653869629,y:-1.515710175037384,z:-1.117289483547211},{x:-7.182780265808105,y:-1.540890753269196,z:-1.18011200428009},{x:-7.435961723327637,y:-1.554023563861847,z:-1.237442553043365},{x:-7.481127738952637,y:-1.567633926868439,z:-1.239528596401215},{x:-7.515913009643555,y:-1.598673164844513,z:-1.243456065654755},{x:-7.532358169555664,y:-1.66240793466568,z:-1.249224066734314},{x:-7.527997016906738,y:-1.724873840808868,z:-1.252832770347595},{x:-7.508397102355957,y:-1.816761314868927,z:-1.255263328552246},{x:-7.496356964111328,y:-1.865044176578522,z:-1.255512893199921},{x:-7.494962692260742,y:-1.891144812107086,z:-1.25551038980484},{x:-7.491802215576172,y:-1.946726620197296,z:-1.255584120750427},{x:-7.485087394714355,y:-2.010996878147125,z:-1.255866765975952},{x:-7.47447395324707,y:-2.051600277423859,z:-1.256403386592865},{x:-7.453775405883789,y:-2.071038067340851,z:-1.258236408233643},{x:-7.430595397949219,y:-2.07670122385025,z:-1.263089776039124},{x:-7.411248207092285,y:-2.058719217777252,z:-1.271114826202393},{x:-7.402570724487305,y:-2.03033834695816,z:-1.277187883853912},{x:-7.399425506591797,y:-1.986840546131134,z:-1.280487895011902},{x:-7.39940071105957,y:-1.917249977588654,z:-1.28051769733429},{x:-7.369999885559082,y:-1.917249977588654,z:-1.278999924659729},{x:-7.370016098022461,y:-1.988840162754059,z:-1.278986513614655},{x:-7.366660118103027,y:-2.031174957752228,z:-1.270763516426086},{x:-7.353988647460938,y:-2.061131298542023,z:-1.259976506233215},{x:-7.323026657104492,y:-2.083641827106476,z:-1.249505639076233},{x:-7.277103424072266,y:-2.093668758869171,z:-1.244809031486511},{x:-7.215006828308105,y:-2.098598778247833,z:-1.245804905891418},{x:-7.166905403137207,y:-2.091409027576447,z:-1.248595654964447},{x:-7.142803192138672,y:-2.077189028263092,z:-1.249862372875214},{x:-7.124029159545898,y:-2.025834858417511,z:-1.249838590621948},{x:-7.113452911376953,y:-1.967540800571442,z:-1.249918699264526},{x:-7.105180740356445,y:-1.91411954164505,z:-1.250048398971558},{x:-7.098714828491211,y:-1.868011295795441,z:-1.250184655189514},{x:-7.081409454345703,y:-1.792572319507599,z:-1.239543080329895},{x:-7.029647827148438,y:-1.739860355854034,z:-1.197267293930054},{x:-6.954715728759766,y:-1.688246548175812,z:-1.135801553726196},{x:-6.888460159301758,y:-1.629896461963654,z:-1.081420183181763},{x:-6.849555969238281,y:-1.561316311359406,z:-1.049549221992493},{x:-6.839000701904297,y:-1.491284668445587,z:-1.04100102186203},{x:-6.83900260925293,y:3.3954216837883,z:-1.040997445583344},{x:-6.833480834960938,y:3.446484506130219,z:-1.041260480880737},{x:-6.815448760986328,y:3.481260716915131,z:-1.041112959384918},{x:-6.784647941589355,y:3.489000260829926,z:-1.041002094745636},{x:2.355262756347656,y:3.48850816488266,z:-1.041000008583069},{x:2.547361373901367,y:3.473565757274628,z:-1.040999948978424},{x:2.602164745330811,y:3.45603483915329,z:-1.040999948978424},{x:2.645315647125244,y:3.419137179851532,z:-1.040999948978424},{x:2.669528961181641,y:3.365175426006317,z:-1.040999948978424},{x:2.676777362823486,y:3.305442988872528,z:-1.040999948978424},{x:2.677181720733643,y:3.202108800411224,z:-1.040999889373779},{x:2.674063205718994,y:2.068026483058929,z:-1.039019107818604},{x:2.674094200134277,y:1.99604743719101,z:-1.030014097690582},{x:2.674087524414062,y:1.942941725254059,z:-1.013984560966492},{x:2.674034595489502,y:1.882058560848236,z:-.977808952331543},{x:2.673934459686279,y:1.834635555744171,z:-.91543048620224},{x:2.673810005187988,y:1.798187673091888,z:-.753942117094994},{x:2.674051284790039,y:1.796440899372101,z:-.577377185225487},{x:2.67411470413208,y:1.79115754365921,z:-.512561157345772},{x:2.673990249633789,y:1.774934589862823,z:-.470576047897339},{x:2.673850059509277,y:1.750986754894257,z:-.451536037027836},{x:2.67402982711792,y:1.645438075065613,z:-.438844263553619},{x:2.67264986038208,y:1.361120223999023,z:-.419292330741882},{x:2.656121253967285,y:1.291545808315277,z:-.419459506869316},{x:2.615260124206543,y:1.248496651649475,z:-.419894009828568},{x:2.566339492797852,y:1.239913046360016,z:-.41999988257885},{x:2.106934547424316,y:1.240008056163788,z:-.420000076293945},{x:2.045400619506836,y:1.243436634540558,z:-.419103994965553},{x:1.995885372161865,y:1.260031700134277,z:-.415619522333145},{x:1.974996566772461,y:1.30180835723877,z:-.409835696220398},{x:1.9748854637146,y:1.385852098464966,z:-.403982251882553},{x:1.975000381469727,y:1.410000109672546,z:-.404000103473663}],curvePEN:[{x:1.975109100341797,y:1.450154781341553,z:-.399749279022217},{x:1.674444913864136,y:1.45020055770874,z:-.399735987186432},{x:1.674433946609497,y:1.156354427337646,z:-.402896761894226},{x:1.674285650253296,y:1.123975276947021,z:-.446797251701355},{x:1.674024820327759,y:1.109622478485107,z:-.524066209793091},{x:1.673762798309326,y:1.092142581939697,z:-.601712226867676},{x:1.673778057098389,y:1.027430057525635,z:-.63357937335968},{x:1.674458980560303,y:.948242664337158,z:-.634267330169678},{x:1.672293424606323,y:.470746517181396,z:-.646537244319916},{x:1.649238586425781,y:-.005110263824463,z:-.650041162967682},{x:1.63607120513916,y:-.120642185211182,z:-.627620339393616},{x:1.613790273666382,y:-.170610904693604,z:-.527283787727356},{x:1.60310959815979,y:-.161335468292236,z:-.453626990318298},{x:1.600183963775635,y:-.145364284515381,z:-.433908104896545},{x:1.594864845275879,y:-.084111213684082,z:-.399773180484772},{x:1.59018087387085,y:.95658540725708,z:-.377915024757385},{x:1.570576429367065,y:1.023446559906006,z:-.377937912940979},{x:1.488415718078613,y:1.070451259613037,z:-.377981424331665},{x:1.356881141662598,y:1.106175899505615,z:-.378023326396942},{x:1.219002246856689,y:1.137376308441162,z:-.384226381778717},{x:1.134584188461304,y:1.168566226959229,z:-.395223319530487},{x:1.100741863250732,y:1.227172374725342,z:-.40114551782608},{x:1.100101566314697,y:1.450467586517334,z:-.402056753635406},{x:1.000052452087402,y:1.450532428741455,z:-.40206378698349},{x:1.000591278076172,y:1.66503381729126,z:-.402113616466522},{x:.975833892822266,y:1.720706462860107,z:-.402114272117615},{x:.93983006477356,y:1.743028163909912,z:-.40212869644165},{x:.855257034301758,y:1.763801097869873,z:-.402172446250916},{x:.768351078033447,y:1.773732662200928,z:-.402218997478485},{x:.681400775909424,y:1.780871868133545,z:-.40226137638092},{x:.593052864074707,y:1.783113956451416,z:-.402300000190735},{x:.506013870239258,y:1.779454708099365,z:-.402333080768585},{x:.33228063583374,y:1.759775638580322,z:-.402379274368286},{x:.250042915344238,y:1.731275081634521,z:-.402373194694519},{x:.219569206237793,y:1.70270299911499,z:-.4023477435112},{x:.20839262008667,y:1.662374973297119,z:-.40230131149292},{x:.2089524269104,y:1.450339794158936,z:-.40205579996109},{x:.109495162963867,y:1.450175762176514,z:-.400475025177002},{x:.107523441314697,y:1.228339672088623,z:-.400654792785645},{x:.103112697601318,y:1.173289775848389,z:-.401923358440399},{x:.082475185394287,y:1.123198986053467,z:-.409242987632751},{x:.026890277862549,y:1.04707670211792,z:-.429312646389008},{x:.007436752319336,y:1.004042148590088,z:-.4361652135849},{x:-.000837802886963,y:-.001772403717041,z:-.448597550392151},{x:-.000683307647705,y:-.071982383728027,z:-.448936522006989},{x:.007554531097412,y:-.131604671478271,z:-.457245945930481},{x:.029209613800049,y:-.170911312103271,z:-.475950658321381},{x:.073417663574219,y:-.214624881744385,z:-.509572565555573},{x:.144690036773682,y:-.238526821136475,z:-.548260271549225},{x:.24558687210083,y:-.239830493927002,z:-.565111577510834},{x:.283886909484863,y:-.240631580352783,z:-.580869913101196},{x:.298157691955566,y:-.2409987449646,z:-.605200588703156},{x:.299984455108643,y:-.241348743438721,z:-.641759276390076},{x:.299856185913086,y:-.25062894821167,z:-.77294060587883},{x:.300070762634277,y:-.294997692108154,z:-.9605742841959},{x:.300149440765381,y:-.458833694458008,z:-1.118688787799329},{x:.299985408782959,y:-.633568286895752,z:-1.124872857821174},{x:.304381847381592,y:-6.122589230537415,z:-1.125025749206543},{x:.35413122177124,y:-6.495555102825165,z:-1.125025749206543},{x:.454161643981934,y:-6.736311197280884,z:-1.125025749206543},{x:.650850534439087,y:-6.920273706316948,z:-1.125025749206543},{x:.980686902999878,y:-7.000000476837158,z:-1.125025749206543},{x:4.3986902999878,y:-7.000000476837158,z:-1.125025749206543}],RCDFix:[{x:-5.2,y:-3.7,z:.385},{x:-3.7,y:-3.7,z:.385}],schematicsL1curveL:[{x:-1.98307466506958,y:-4.289193630218506,z:.21986508340342},{x:-2.124020576477051,y:-4.289193630218506,z:.220163725316525},{x:-2.13780677318573,y:-4.289193630218506,z:.208404844626784},{x:-2.153153121471405,y:-4.289193630218506,z:.200099827721715},{x:-2.16865462064743,y:-4.289193630218506,z:.195829199627042},{x:-2.184026062488556,y:-4.289193630218506,z:.193954477086663},{x:-2.184026122093201,y:-4.289193630218506,z:.193954475224018},{x:-2.184026122093201,y:-4.289193630218506,z:.193954475224018},{x:-2.199426651000977,y:-4.289193630218506,z:.195823632180691},{x:-2.214830875396729,y:-4.289193630218506,z:.200271455571055},{x:-2.230175495147705,y:-4.289193630218506,z:.208238443359733},{x:-2.244466245174408,y:-4.289193630218506,z:.219904165656772},{x:-2.394450843334198,y:-4.289193630218506,z:.219229251262732},{x:-2.394874632358551,y:-4.289193630218506,z:.225901075638831},{x:-2.494969099760056,y:-4.289193630218506,z:.218780323863029},{x:-2.645167678594589,y:-4.289193630218506,z:.216488716658205},{x:-2.659183979034424,y:-4.289193630218506,z:.204850016161799},{x:-2.674576163291931,y:-4.289193630218506,z:.196375785395503},{x:-2.689986944198608,y:-4.289193630218506,z:.192217841744423},{x:-2.70538803935051,y:-4.289193630218506,z:.190319195389748},{x:-2.720792979001999,y:-4.289193630218506,z:.192227268591523},{x:-2.736196979880333,y:-4.289193630218506,z:.196536997333169},{x:-2.751521930098534,y:-4.289193630218506,z:.204916345886886},{x:-2.766295537352562,y:-4.289193630218506,z:.216957480879501},{x:-2.76628340780735,y:-4.289193630218506,z:.218274642014876},{x:-2.853564336895943,y:-4.289193630218506,z:.218000701628625},{x:-2.853564336895943,y:-4.289193630218506,z:.561870813369751},{x:-2.64514696598053,y:-4.289193630218506,z:.562837541103363},{x:-2.644896388053894,y:-4.289193630218506,z:.556238979101181},{x:-2.545207351446152,y:-4.289193630218506,z:.562636882066727},{x:-2.464812338352203,y:-4.289193630218506,z:.5631203353405},{x:-2.464812338352203,y:-4.289193630218506,z:.691608101129532},{x:-2.714907437562943,y:-4.289193630218506,z:.691373139619827},{x:-2.714907437562943,y:-4.289193630218506,z:.81901216506958},{x:-2.645339488983154,y:-4.289193630218506,z:.819882214069366},{x:-2.645194381475449,y:-4.289193630218506,z:.81268972158432},{x:-2.544610142707825,y:-4.289193630218506,z:.81974995136261},{x:-2.384242653846741,y:-4.289193630218506,z:.820414245128632},{x:-2.381486296653748,y:-4.289193630218506,z:.820414245128632},{x:-2.192934155464172,y:-4.289193630218506,z:.820414245128632},{x:-2.192934155464172,y:-4.289193630218506,z:.79342395067215},{x:-2.192934155464172,y:-4.289193630218506,z:.744206368923187},{x:-1.533425569534302,y:-4.289193630218506,z:.744206368923187},{x:-1.533425569534302,y:-4.289193630218506,z:.494206368923187}],schematicsL1curveLN:[{x:-1.533425569534302,y:-4.289193630218506,z:.494206368923187},{x:-1.533425569534302,y:-4.289193630218506,z:-.282164454460144},{x:-2.164017975330353,y:-4.289193630218506,z:-.284068822860718},{x:-2.164017975330353,y:-4.289193630218506,z:-.207750022411346}],schematicsL1curveLPE:[{x:-1.533706307411194,y:-4.289201259613037,z:.488529951311648},{x:-1.613636553287506,y:-4.289201259613037,z:.488497657235712},{x:-1.619962155818939,y:-4.289201259613037,z:.490242644445971},{x:-1.643403708934784,y:-4.289201259613037,z:.385489344596863},{x:-1.643403708934784,y:-4.289201259613037,z:.154139637947083}],schematicsL1curveLRCD:[{x:-1.98307466506958,y:-4.289193630218506,z:.21986508340342},{x:-2.124020576477051,y:-4.289193630218506,z:.220163725316525},{x:-2.13780677318573,y:-4.289193630218506,z:.208404844626784},{x:-2.153153121471405,y:-4.289193630218506,z:.200099827721715},{x:-2.16865462064743,y:-4.289193630218506,z:.195829199627042},{x:-2.184026062488556,y:-4.289193630218506,z:.193954477086663},{x:-2.184026122093201,y:-4.289193630218506,z:.193954475224018},{x:-2.184026122093201,y:-4.289193630218506,z:.193954475224018},{x:-2.199426651000977,y:-4.289193630218506,z:.195823632180691},{x:-2.214830875396729,y:-4.289193630218506,z:.200271455571055},{x:-2.230175495147705,y:-4.289193630218506,z:.208238443359733},{x:-2.244466245174408,y:-4.289193630218506,z:.219904165656772},{x:-2.394450843334198,y:-4.289193630218506,z:.219229251262732},{x:-2.394874632358551,y:-4.289193630218506,z:.225901075638831},{x:-2.494969099760056,y:-4.289193630218506,z:.218780323863029},{x:-2.645167678594589,y:-4.289193630218506,z:.216488716658205},{x:-2.659183979034424,y:-4.289193630218506,z:.204850016161799},{x:-2.674576163291931,y:-4.289193630218506,z:.196375785395503},{x:-2.689986944198608,y:-4.289193630218506,z:.192217841744423},{x:-2.70538803935051,y:-4.289193630218506,z:.190319195389748},{x:-2.720792979001999,y:-4.289193630218506,z:.192227268591523},{x:-2.736196979880333,y:-4.289193630218506,z:.196536997333169},{x:-2.751521930098534,y:-4.289193630218506,z:.204916345886886},{x:-2.766295537352562,y:-4.289193630218506,z:.216957480879501},{x:-2.76628340780735,y:-4.289193630218506,z:.218274642014876},{x:-2.853564336895943,y:-4.289193630218506,z:.218000701628625},{x:-2.853564336895943,y:-4.289193630218506,z:.561870813369751},{x:-2.64514696598053,y:-4.289193630218506,z:.562837541103363},{x:-2.644896388053894,y:-4.289193630218506,z:.556238979101181},{x:-2.545207351446152,y:-4.289193630218506,z:.562636882066727},{x:-2.464812338352203,y:-4.289193630218506,z:.5631203353405},{x:-2.464776515960693,y:-4.289201259613037,z:.563135789707303},{x:-2.385114014148712,y:-4.289201259613037,z:.563477389514446},{x:-2.193146049976349,y:-4.289201259613037,z:.563477390445769},{x:-2.193146049976349,y:-4.289201259613037,z:.536791674792767},{x:-2.193146049976349,y:-4.289201259613037,z:.487792491912842},{x:-1.66655008494854,y:-4.289201259613037,z:.48990323394537},{x:-1.643415465950966,y:-4.289201259613037,z:.385484799742699},{x:-1.643415480852127,y:-4.289201259613037,z:.154172152280807}],schematicsL2curve:[{x:-2.005734920501709,y:-4.289193630218506,z:.153524398803711},{x:-2.124020576477051,y:-4.289193630218506,z:.153245709836483},{x:-2.13780677318573,y:-4.289193630218506,z:.141486829146743},{x:-2.153153121471405,y:-4.289193630218506,z:.133181812241673},{x:-2.16865462064743,y:-4.289193630218506,z:.128911184147},{x:-2.184026062488556,y:-4.289193630218506,z:.127036461606622},{x:-2.184026122093201,y:-4.289193630218506,z:.127036459743977},{x:-2.184026122093201,y:-4.289193630218506,z:.127036459743977},{x:-2.199426651000977,y:-4.289193630218506,z:.128905616700649},{x:-2.214830875396729,y:-4.289193630218506,z:.133353440091014},{x:-2.230175495147705,y:-4.289193630218506,z:.141320427879691},{x:-2.244466245174408,y:-4.289193630218506,z:.15298615017673},{x:-2.394450843334198,y:-4.289193630218506,z:.15231123578269},{x:-2.394874632358551,y:-4.289193630218506,z:.158983060158789},{x:-2.494969099760056,y:-4.289193630218506,z:.151862308382988},{x:-2.645167678594589,y:-4.289193630218506,z:.149570701178163},{x:-2.659183979034424,y:-4.289193630218506,z:.137932000681758},{x:-2.674576163291931,y:-4.289193630218506,z:.129457769915462},{x:-2.689986944198608,y:-4.289193630218506,z:.125299826264381},{x:-2.70538803935051,y:-4.289193630218506,z:.123401179909706},{x:-2.720792979001999,y:-4.289193630218506,z:.125309253111482},{x:-2.736196979880333,y:-4.289193630218506,z:.129618981853127},{x:-2.751521930098534,y:-4.289193630218506,z:.137998330406845},{x:-2.766295537352562,y:-4.289193630218506,z:.150039465399459},{x:-2.76628340780735,y:-4.289193630218506,z:.151356626534835},{x:-2.905770286917686,y:-4.289193630218506,z:.150581530760974},{x:-2.905676901340485,y:-4.289193630218506,z:-.543148279190063},{x:-2.645293623209,y:-4.289193630218506,z:-.542680680751801},{x:-2.349742293357849,y:-4.289193630218506,z:-.542462944984436},{x:-2.324701964855194,y:-4.289193630218506,z:-.542462587356567},{x:-2.32470291852951,y:-4.289193630218506,z:-.511915624141693},{x:-2.725022792816162,y:-4.289193630218506,z:-.511915624141693},{x:-2.725022792816162,y:-4.289193630218506,z:-.419385850429535},{x:-2.22464793920517,y:-4.289193630218506,z:-.41779887676239},{x:-2.22464793920517,y:-4.289193630218506,z:-.208345144987106}],schematicsL3curve:[{x:-1.982872724533081,y:-4.289193630218506,z:.086681976914406},{x:-2.124020576477051,y:-4.289193630218506,z:.086403287947178},{x:-2.13780677318573,y:-4.289193630218506,z:.074644407257438},{x:-2.153153121471405,y:-4.289193630218506,z:.066339390352368},{x:-2.16865462064743,y:-4.289193630218506,z:.062068762257695},{x:-2.184026062488556,y:-4.289193630218506,z:.060194039717317},{x:-2.184026122093201,y:-4.289193630218506,z:.060194037854671},{x:-2.184026122093201,y:-4.289193630218506,z:.060194037854671},{x:-2.199426651000977,y:-4.289193630218506,z:.062063194811344},{x:-2.214830875396729,y:-4.289193630218506,z:.066511018201709},{x:-2.230175495147705,y:-4.289193630218506,z:.074478005990386},{x:-2.244466245174408,y:-4.289193630218506,z:.086143728287425},{x:-2.394450843334198,y:-4.289193630218506,z:.085468813893385},{x:-2.394874632358551,y:-4.289193630218506,z:.092140638269484},{x:-2.494969099760056,y:-4.289193630218506,z:.085019886493683},{x:-2.645167678594589,y:-4.289193630218506,z:.082728279288858},{x:-2.659183979034424,y:-4.289193630218506,z:.071089578792453},{x:-2.674576163291931,y:-4.289193630218506,z:.062615348026156},{x:-2.689986944198608,y:-4.289193630218506,z:.058457404375076},{x:-2.70538803935051,y:-4.289193630218506,z:.056558758020401},{x:-2.720792979001999,y:-4.289193630218506,z:.058466831222177},{x:-2.736196979880333,y:-4.289193630218506,z:.062776559963822},{x:-2.751521930098534,y:-4.289193630218506,z:.07115590851754},{x:-2.766295537352562,y:-4.289193630218506,z:.083197043510154},{x:-2.76628340780735,y:-4.289193630218506,z:.084514204645529},{x:-2.853639587759972,y:-4.289193630218506,z:.083739108871669},{x:-2.853604912757874,y:-4.289193630218506,z:-.118445634841919},{x:-2.853604912757874,y:-4.289193630218506,z:-.117262646555901},{x:-2.84804912757874,y:-4.289193630218506,z:-.117262646555901},{x:-2.853754371404648,y:-4.289193630218506,z:-.218346431851387},{x:-2.853604912757874,y:-4.289193630218506,z:-.219829186797142},{x:-2.85354620218277,y:-4.289193630218506,z:-.311667218804359},{x:-2.682964473962784,y:-4.289193630218506,z:-.311199590563774},{x:-2.606422990560532,y:-4.289193630218506,z:-.31098185479641},{x:-2.284433305263519,y:-4.289193630218506,z:-.309831872582436},{x:-2.284434258937836,y:-4.289193630218506,z:-.207898750901222}],schematicsCurvePEN:[{x:-2.164015531539917,y:-4.289201259613037,z:-.207616254687309},{x:-2.344491243362427,y:-4.289201259613037,z:-.207616254687309},{x:-2.344491243362427,y:-4.289201259613037,z:-.130642428994179},{x:-2.344491243362427,y:-4.289201259613037,z:-.130642428994179},{x:-2.574891567230225,y:-4.289201259613037,z:-.130642428994179},{x:-2.574891567230225,y:-4.289201259613037,z:.007671430706978},{x:-2.494683086872101,y:-4.289201259613037,z:.00786329805851},{x:-2.395176708698273,y:-4.289201259613037,z:.015024736523628},{x:-2.395031273365021,y:-4.289201259613037,z:.00833560526371},{x:-1.643440127372742,y:-4.289201259613037,z:.010516837239265},{x:-1.643440127372742,y:-4.289201259613037,z:.154176816344261},{x:-1.802044868469238,y:-4.289201259613037,z:.154176816344261}]};function _n(s,e){for(let t=0;t<s.length-1;t++){const n=new C(s[t].x,s[t].y,s[t].z),i=new C(s[t+1].x,s[t+1].y,s[t+1].z),r=new rp(n,i);e.add(r)}}const Vn=new an,zi=new an,Ii=new an,ir=new an,Ts=new an,Ao=new an,Lo=new an,Gn=new an,Ni=new an,Di=new an,sr=new an,ws=new an,Co=new an,Ro=new an;_n(Se.L1curveL,Vn);_n(Se.L1curveLN,zi);_n(Se.L1curveLPE,Ii);_n(Se.L1curveLRCD,ir);_n(Se.L2curve,Ts);_n(Se.L3curve,Ao);_n(Se.curvePEN,Lo);_n(Se.schematicsL1curveL,Gn);_n(Se.schematicsL1curveLN,Ni);_n(Se.schematicsL1curveLPE,Di);_n(Se.schematicsL1curveLRCD,sr);_n(Se.schematicsL2curve,ws);_n(Se.schematicsL3curve,Co);_n(Se.schematicsCurvePEN,Ro);function i_(s,e,t,n,i,r,o,a=s.length-1,c,l){const h=[],u=[];for(let _=0;_<=a;_++){const m=s[_];h.push(m.x,m.y,m.z),u.push(1,1,1)}const d=new yp;d.setPositions(h),d.setColors(u);const p=new Du({color:e,linewidth:t,vertexColors:!0,depthTest:!1,depthWrite:!1,transparent:c,opacity:l}),g=new u6(d,p);return g.computeLineDistances(),g.scale.set(1,1,1),o.add(g),{speed:n,phase:i,visible:!0,update:_=>{const m=(_+i)%1,f=t+r*Math.sin(m*Math.PI*2);g.material.linewidth=f,g.material.needsUpdate=!0,g.material.color.set(e),g.material.opacity=l,g.visible=g.visible},setVisible:_=>{g.visible=_},setTransparent:_=>{g.material.transparent=_},setOpacity:_=>{g.material.opacity=_},updateInitialWidth:_=>{g.material.linewidth=_,g.material.needsUpdate=!0},updateWidthScale:_=>{r=_},updateColor:_=>{g.material.color.set(_),g.material.needsUpdate=!0},updateCurves:(_,m)=>{s===Se.schematicsL1curveLRCD?(s=_,d.setPositions(_.flatMap(f=>[f.x,f.y,f.z]))):s===Se.L1curveLRCD&&(s=m,d.setPositions(m.flatMap(f=>[f.x,f.y,f.z])))},updateConditions:()=>{El.forEach((_,m)=>{const f=ku[m].condition();_.setVisible(f)})},updateProperties:()=>{s===Se.L1curveL||s===Se.schematicsL1curveL||s===Se.L1curveLRCD||s===Se.schematicsL1curveLRCD?e=y.phaseL1Color:s===Se.L2curve||s===Se.schematicsL2curve?e=y.phaseL2Color:(s===Se.L3curve||s===Se.schematicsL3curve)&&(e=y.phaseL3Color),t=y.initialWidth,l=y.lineOpacity,n=y.sineSpeed,r=y.widthScale}}}let Wn=!1,Xn=!1,jn=!1,y={phaseL1Color:7224322,phaseL2Color:1973790,phaseL3Color:10395294,initialWidth:.005,sineSpeed:1e-4,widthScale:.002,phaseL1:Math.PI*4/3,phaseL2:Math.PI*2/3,phaseL3:0,lineTransparent:!0,lineOpacity:.2,sineSpeed:1e-4,hideL1:!1,hideL2:!1,hideL3:!1};const ku=[{curveData:Se.L1curveL,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:0,condition:()=>Wn,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L1curveL,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:39,condition:()=>It,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L1curveL,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:52,condition:()=>It&&He,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L1curveL,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:59,condition:()=>It&&He&&je,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L1curveL,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:119,condition:()=>It&&He&&je&&bt,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L1curveL,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:151,condition:()=>It&&He&&je&&bt&&Nt,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L1curveL,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:170,condition:()=>It&&He&&je&&bt&&Nt&&_s,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L1curveLRCD,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:172,condition:()=>It&&He&&je&&bt&&Nt&&!fn,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.RCDFix,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:1,condition:()=>It&&He&&je&&bt&&Nt&&!fn,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L1curveLRCD,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:141,condition:()=>It&&He&&je&&bt&&Nt&&fn,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L2curve,color:y.phaseL2Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL2,lineWidthScale:y.widthScale,endIndex:0,condition:()=>Xn,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L2curve,color:y.phaseL2Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL2,lineWidthScale:y.widthScale,endIndex:39,condition:()=>ln,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L2curve,color:y.phaseL2Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL2,lineWidthScale:y.widthScale,endIndex:52,condition:()=>ln&&He,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L2curve,color:y.phaseL2Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL2,lineWidthScale:y.widthScale,endIndex:64,condition:()=>ln&&He&&je,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L2curve,color:y.phaseL2Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL2,lineWidthScale:y.widthScale,endIndex:113,condition:()=>ln&&He&&je&&bn,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L2curve,color:y.phaseL2Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL2,lineWidthScale:y.widthScale,endIndex:157,condition:()=>ln&&He&&je&&bn&&Pi,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L2curve,color:y.phaseL2Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL2,lineWidthScale:y.widthScale,endIndex:160,condition:()=>ln&&He&&je&&bn&&Pi&&(Zs||Js),transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L3curve,color:y.phaseL2Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL2,lineWidthScale:y.widthScale,endIndex:0,condition:()=>jn,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L3curve,color:y.phaseL3Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL3,lineWidthScale:y.widthScale,endIndex:41,condition:()=>Tn,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L3curve,color:y.phaseL3Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL3,lineWidthScale:y.widthScale,endIndex:54,condition:()=>Tn&&He,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L3curve,color:y.phaseL3Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL3,lineWidthScale:y.widthScale,endIndex:65,condition:()=>Tn&&He&&je,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L3curve,color:y.phaseL3Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL3,lineWidthScale:y.widthScale,endIndex:110,condition:()=>Tn&&He&&je&&as,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.L3curve,color:y.phaseL3Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL3,lineWidthScale:y.widthScale,endIndex:153,condition:()=>Tn&&He&&je&&as&&xo,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL1curveL,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:0,condition:()=>Wn,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL1curveL,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:1,condition:()=>It,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL1curveL,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:12,condition:()=>It&&He,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL1curveL,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:15,condition:()=>It&&He&&je,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL1curveL,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:28,condition:()=>It&&He&&je&&bt,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL1curveL,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:34,condition:()=>It&&He&&je&&bt&&Nt,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL1curveL,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:38,condition:()=>It&&He&&je&&bt&&Nt&&_s,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL1curveLRCD,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:36,condition:()=>It&&He&&je&&bt&&Nt&&!fn,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL1curveLRCD,color:y.phaseL1Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL1,lineWidthScale:y.widthScale,endIndex:32,condition:()=>It&&He&&je&&bt&&Nt&&fn,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL2curve,color:y.phaseL2Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL2,lineWidthScale:y.widthScale,endIndex:0,condition:()=>Xn,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL2curve,color:y.phaseL2Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL2,lineWidthScale:y.widthScale,endIndex:1,condition:()=>ln,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL2curve,color:y.phaseL2Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL2,lineWidthScale:y.widthScale,endIndex:12,condition:()=>ln&&He,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL2curve,color:y.phaseL2Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL2,lineWidthScale:y.widthScale,endIndex:15,condition:()=>ln&&He&&je,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL2curve,color:y.phaseL2Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL2,lineWidthScale:y.widthScale,endIndex:27,condition:()=>ln&&He&&je&&bn,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL2curve,color:y.phaseL2Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL2,lineWidthScale:y.widthScale,endIndex:28,condition:()=>ln&&He&&je&&bn&&Pi,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL2curve,color:y.phaseL2Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL2,lineWidthScale:y.widthScale,endIndex:29,condition:()=>ln&&He&&je&&bn&&Pi&&(Zs||Js),transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL3curve,color:y.phaseL2Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL2,lineWidthScale:y.widthScale,endIndex:0,condition:()=>jn,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL3curve,color:y.phaseL3Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL3,lineWidthScale:y.widthScale,endIndex:1,condition:()=>Tn,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL3curve,color:y.phaseL3Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL3,lineWidthScale:y.widthScale,endIndex:12,condition:()=>Tn&&He,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL3curve,color:y.phaseL3Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL3,lineWidthScale:y.widthScale,endIndex:15,condition:()=>Tn&&He&&je,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL3curve,color:y.phaseL3Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL3,lineWidthScale:y.widthScale,endIndex:26,condition:()=>Tn&&He&&je&&as,transparent:y.lineTransparent,opacity:y.lineOpacity},{curveData:Se.schematicsL3curve,color:y.phaseL3Color,initialLineWidth:y.initialWidth,speed:y.sineSpeed,phase:y.phaseL3,lineWidthScale:y.widthScale,endIndex:32,condition:()=>Tn&&He&&je&&as&&xo,transparent:y.lineTransparent,opacity:y.lineOpacity}],El=ku.map(s=>i_(s.curveData,s.color,s.initialLineWidth,s.speed,s.phase,s.lineWidthScale,gn,s.endIndex,s.transparent,s.opacity));function As(){El.forEach(s=>{s.updateProperties()})}function s_(s,e){El.forEach(t=>{t.updateCurves(s,e)})}function d0(s,e,t,n,i){const r=s;e.forEach(o=>{if(o>=0&&o<r.length){const a=r[o];a?a.x=n+t/i:console.error(`Index ${o} is out of bounds for points array.`)}})}function f0(s,e,t,n,i,r){const o=s.curves;if(n<=8)return;const a=i-(23-n)*r;e.forEach(c=>{if(c>=0&&c<o.length){const l=o[c].v1;l?l.x=a:console.error(`Invalid start point at index ${c}.`)}else console.error(`Start index ${c} is out of bounds for curves array.`)}),t.forEach(c=>{if(c>=0&&c<o.length){const l=o[c].v2;l?l.x=a:console.error(`Invalid end point at index ${c}.`)}else console.error(`End index ${c} is out of bounds for curves array.`)}),Ft(Ui,Gn,zn),Ft(Oi,Vn,pn)}const r_=Vn.getLength(),o_=zi.getLength(),a_=Ii.getLength(),c_=ir.getLength(),l_=Ts.getLength(),h_=Ao.getLength(),u_=Lo.getLength(),d_=Gn.getLength(),f_=Ni.getLength(),p_=Di.getLength(),m_=sr.getLength(),g_=ws.getLength(),__=Co.getLength(),x_=Ro.getLength(),y_=.1,v_=20,xn=y_*v_,S_=Math.round(r_/xn),b_=Math.round(o_/xn),M_=Math.round(a_/xn),E_=Math.round(c_/xn),T_=Math.round(l_/xn),w_=Math.round(h_/xn),A_=Math.round(u_/xn),ar=1,L_=Number((d_/xn).toFixed(ar)),C_=Number((f_/xn).toFixed(ar)),R_=Number((p_/xn).toFixed(ar)),P_=Number((m_/xn).toFixed(ar)),z_=Number((g_/xn).toFixed(ar)),I_=Number((__/xn).toFixed(ar)),N_=Number((x_/xn).toFixed(ar)),nt={scale:.05,color:"#ff0000",depthTest:!1,depthWrite:!1,transparency:!0,opacity:1,alphaTest:.5},cr=.3,lr=5;let pn={...nt,segmentNumber:S_,particlesPerSegment:0,hideParticles:!1},qn={...nt,segmentNumber:b_,particlesPerSegment:0,hideParticles:!1},Yn={...nt,segmentNumber:M_,particlesPerSegment:0,hideParticles:!1},ki={...nt,segmentNumber:E_,particlesPerSegment:0,hideParticles:!1},Mn={...nt,segmentNumber:T_,particlesPerSegment:0,hideParticles:!1},ui={...nt,segmentNumber:w_,particlesPerSegment:.5,hideParticles:!1},Hi={...nt,segmentNumber:A_,particlesPerSegment:.5,hideParticles:!1},zn={...nt,segmentNumber:L_*lr,particlesPerSegment:0,hideParticles:!1,schemScale:cr},Kn={...nt,segmentNumber:C_*lr,particlesPerSegment:0,hideParticles:!1,schemScale:cr},$n={...nt,segmentNumber:R_*lr,particlesPerSegment:0,hideParticles:!1,schemScale:cr},Vi={...nt,segmentNumber:P_*lr,particlesPerSegment:0,hideParticles:!1,schemScale:cr},di={...nt,segmentNumber:z_*lr,particlesPerSegment:0,hideParticles:!1,schemScale:cr},xs={...nt,segmentNumber:I_*lr,particlesPerSegment:.5,hideParticles:!1,schemScale:cr},ys={...nt,segmentNumber:N_*lr,particlesPerSegment:.5,hideParticles:!1,schemScale:cr};const D_=new fp,O_=D_.load("circle.png"),zt=new J0({map:O_,color:new Be(nt.color),transparent:nt.transparency,opacity:nt.opacity,sizeAttenuation:!0,depthTest:!1,blending:js}),Oi=[],cs=[],ls=[],So=[],hr=[],Ha=[],Va=[],Ui=[],hs=[],us=[],bo=[],ur=[],Ga=[],Wa=[];function In(){zt.color.set(nt.color),zt.opacity=nt.opacity,zt.transparent=nt.transparency,zt.alphaTest=nt.alphaTest,Oi.forEach(s=>{s.material.copy(zt),s.visible=!pn.hideParticles}),cs.forEach(s=>{s.material.copy(zt),s.visible=!qn.hideParticles}),ls.forEach(s=>{s.material.copy(zt),s.visible=!Yn.hideParticles}),So.forEach(s=>{s.material.copy(zt),s.visible=!ki.hideParticles}),hr.forEach(s=>{s.material.copy(zt),s.visible=!Mn.hideParticles}),Ha.forEach(s=>{s.material.copy(zt),s.visible=!ui.hideParticles}),Va.forEach(s=>{s.material.copy(zt),s.visible=!Hi.hideParticles}),Ui.forEach(s=>{s.material.copy(zt),s.visible=!zn.hideParticles}),hs.forEach(s=>{s.material.copy(zt),s.visible=!Kn.hideParticles}),us.forEach(s=>{s.material.copy(zt),s.visible=!$n.hideParticles}),bo.forEach(s=>{s.material.copy(zt),s.visible=!Vi.hideParticles}),ur.forEach(s=>{s.material.copy(zt),s.visible=!di.hideParticles}),Ga.forEach(s=>{s.material.copy(zt),s.visible=!xs.hideParticles}),Wa.forEach(s=>{s.material.copy(zt),s.visible=!ys.hideParticles})}function Ft(s,e,t){s.forEach(i=>gn.remove(i)),s.length=0;const n=t.segmentNumber*t.particlesPerSegment;for(let i=0;i<n;i++){const r=new o9(zt);let o;t.hasOwnProperty("schemScale")?o=nt.scale*t.schemScale:o=nt.scale,r.scale.set(o,o,o),s.push(r),gn.add(r);const a=i/n,c=e.getPointAt(a);c?r.position.copy(c):console.error("pointOnPath is null for sprite at index",i)}}const U_=[{particles:Oi,curve:Vn,param:pn},{particles:cs,curve:zi,param:qn},{particles:ls,curve:Ii,param:Yn},{particles:So,curve:ir,param:ki},{particles:hr,curve:Ts,param:Mn},{particles:Ha,curve:Ao,param:ui},{particles:Va,curve:Lo,param:Hi},{particles:Ui,curve:Gn,param:zn},{particles:hs,curve:Ni,param:Kn},{particles:us,curve:Di,param:$n},{particles:bo,curve:sr,param:Vi},{particles:ur,curve:ws,param:di},{particles:Ga,curve:Co,param:xs},{particles:Wa,curve:Ro,param:ys}];U_.forEach(({particles:s,curve:e,param:t})=>{Ft(s,e,t)});const es=y.phaseL1,p0=y.phaseL2,m0=y.phaseL3;let Jt=.001;const hn=(s,e,t,n,i,r)=>{s.forEach((o,a)=>{const c=a/(t.segmentNumber*t.particlesPerSegment),l=Math.sin((c+n+i)*2*Math.PI);let h=(c+l*r)%1;h=h<0?1+h:h;const u=e.getPointAt(h);u?o.position.copy(u):console.error("pointOnPath is null for particle at index",a)}),In()},Pp=document.getElementById("gridCanvas"),F_=Pp.getContext("2d"),Ea=document.getElementById("sineWaveCanvas"),Yr=Ea.getContext("2d");function B_(s,e){s.lineWidth=3;const t=30;s.beginPath(),s.moveTo(t,0),s.lineTo(t,e.height),s.strokeStyle="black",s.stroke(),s.beginPath(),s.moveTo(e.width-t,0),s.lineTo(e.width-t,e.height),s.stroke(),s.beginPath(),s.moveTo(t,e.height/2),s.lineTo(e.width-t,e.height/2),s.stroke();const n=77.5;for(let d=t;d<=e.width-t;d+=n)s.beginPath(),s.moveTo(d,e.height/2-5),s.lineTo(d,e.height/2+5),s.stroke();const i=350,r=-350,o=75,a=-30;s.font="14px Arial",s.fillText("U[V]",0,10);for(let d=0;d>=r;d-=o)if(d!==r){const p=t+(e.height/2-d*(e.height/(i-r)))+a;s.beginPath(),s.moveTo(t-0,p),s.lineTo(t+5,p),s.stroke(),s.fillText(d,t-30,p+5)}for(let d=o;d<=i;d+=o)if(d!==i){const p=t+(e.height/2-d*(e.height/(i-r)))+a;s.beginPath(),s.moveTo(t-0,p),s.lineTo(t+5,p),s.stroke(),s.fillText(d,t-30,p+5)}const c=25,l=-25,h=5;s.font="14px Arial",s.fillText("I[A]",e.width-24,10);for(let d=0;d>=l;d-=h)if(d!==l){const p=t+(e.height/2-d*(e.height/(c-l)))+a;s.beginPath(),s.moveTo(e.width-t,p),s.lineTo(e.width-t-5,p),s.stroke(),s.fillText(d,e.width-25,p+5)}for(let d=h;d<=c;d+=h)if(d!==c){const p=t+(e.height/2-d*(e.height/(c-l)))+a;s.beginPath(),s.moveTo(e.width-t,p),s.lineTo(e.width-t-5,p),s.stroke(),s.fillText(d,e.width-25,p+5)}s.font="14px Arial",s.fillText("t",50,275),s.font="14px Arial",s.fillText("θ[°]",50,165);const u=10;s.lineWidth=1,s.beginPath(),s.moveTo(t,e.height+a+20),s.lineTo(e.width-t,e.height+a+20),s.stroke(),s.lineWidth=1,s.beginPath(),s.moveTo(e.width-t-u,e.height+a+20-u),s.lineTo(e.width-t,e.height+a+20),s.lineTo(e.width-t-u,e.height+a+20+u),s.stroke()}B_(F_,Pp);function k_(s,e="black"){const t=s*Ea.width%Ea.width;Yr.beginPath(),Yr.moveTo(t,0),Yr.lineTo(t,Ea.height),Yr.strokeStyle=e,Yr.stroke()}const dr=2,fl=.41,Hu=.29;class Po{constructor(e,t,n,i,r,o){this.amplitude=e,this.frequency=t,this.phase=n,this.zoom=i,this.color=r,this.hidden=o}draw(e,t){if(!this.hidden){e.strokeStyle=this.color||"blue",e.beginPath();const i=10;for(let r=0;r<=t.width;r+=i){const o=r/t.width*2*Math.PI*this.frequency+this.phase,a=t.height/2+this.amplitude*20*this.zoom*Math.sin(o);e.lineTo(r,a)}e.stroke()}}}function no(s,e,t){const n=i=>{const r=i.toString(16);return r.length===1?"0"+r:r};return typeof s<"u"&&typeof e<"u"&&typeof t<"u"?"#"+n(s)+n(e)+n(t):"#000000"}function io(s){const e=s>>16&255,t=s>>8&255,n=s&255;return{r:e,g:t,b:n}}const Th=io(y.phaseL1Color),H_=no(Th.r,Th.g,Th.b),wh=io(y.phaseL2Color),V_=no(wh.r,wh.g,wh.b),Ah=io(y.phaseL3Color),G_=no(Ah.r,Ah.g,Ah.b);let Fc=new Po(li,dr,0,fl,fl,nt.color,!1),Bc=new Po(Dn,dr,4*Math.PI/3,fl,nt.color,!1),kc=new Po(vo,dr,2*Math.PI/3,fl,nt.color,!1),Lh=new Po(23,dr,0,Hu,H_,!1),Ch=new Po(23,dr,4*Math.PI/3,Hu,V_,!1),Rh=new Po(23,dr,2*Math.PI/3,Hu,G_,!1);function W_(s,e,t){e.clearRect(0,0,t.width,t.height),e.lineWidth=2,s.forEach(n=>{n.draw(e,t)})}function X_(){Fc.amplitude=li,Fc.color=nt.color,Fc.hidden=pn.hideParticles,Bc.amplitude=Dn,Bc.color=nt.color,Bc.hidden=Mn.hideParticles,kc.amplitude=vo,kc.color=nt.color,kc.hidden=ui.hideParticles;const s=io(y.phaseL1Color);Lh.color=no(s.r,s.g,s.b),Lh.hidden=Wn;const e=io(y.phaseL2Color);Ch.color=no(e.r,e.g,e.b),Ch.hidden=Xn;const t=io(y.phaseL3Color);Rh.color=no(t.r,t.g,t.b),Rh.hidden=jn,W_([Fc,Bc,kc,Lh,Ch,Rh],Yr,Ea)}function et(s,e,t,n){t.particlesPerSegment=n,Ft(s,e,t)}function ts(){He===!1||je===!1||bn===!1||Pi===!1||Sa===!0?q_():He===!0&&je===!0&&bn===!0&&Zs===!0?Y_():He===!0&&je===!0&&bn===!0&&Js===!0&&K_()}function zp(s,e,t,n,i,r){const o=n*(Math.PI/180),a=i*(Math.PI/180),c=r*(Math.PI/180),l=Math.sqrt(s**2+e**2+t**2);let h;s===0&&e===0?h=240:h=Math.acos((s*Math.cos(o)+e*Math.cos(a)+t*Math.cos(c*2))/l)*(180/Math.PI);const u=Math.round(Math.cos(o)*1e12)/1e12,d=Math.round(Math.cos(a)*1e12)/1e12,p=Math.round(Math.cos(c)*1e12)/1e12;return{totalCurrent:l,phaseAngle:h,sinPhi:Math.sin(h*(Math.PI/180)),cosThetaAB:u,cosThetaBC:d,cosThetaCA:p}}let Ip,Np;function Tt(){He&&je&&bt&&Nt&&_s?ba||fn?li=rl:Ma&&(li=rl/2):li=0;const s=li!==0||Dn!==0||vo!==0,e=zp(li,Dn,vo,120,240,0),t=s?e.totalCurrent:0,n=s?t:0;et(Va,Lo,Hi,n),et(Wa,Ro,ys,n)}function j_(){const s=zp(li,Dn,vo,0,120,240),t=s.phaseAngle*Math.PI/180;Ip=s.totalCurrent,Np=s.phaseAngle,hn(Va,Lo,Hi,Wt,t,Jt),hn(Wa,Ro,ys,Wt,t,Jt*2)}function q_(){Dn=0,et(hr,Ts,Mn,0),et(ur,ws,di,0)}function Y_(){Dn=1,et(hr,Ts,Mn,Dn),et(ur,ws,di,Dn)}function K_(){Dn=2,et(hr,Ts,Mn,Dn),et(ur,ws,di,Dn)}function ua(){const s=He&&je&&as&&xo,e=s?.5:0;vo=s?.5:0,et(Ha,Ao,ui,e),et(Ga,Co,xs,e)}function Bt(){const s=He&&je&&bt&&Nt&&_s&&(ba||fn),e=He&&je&&bt&&Nt&&_s&&Ma,t=He&&je&&bt&&Nt&&fn,n=10,i=28,r=10,o=28,a=s||e?Math.round(r+(Pn-n)/(i-n)*(o-r)):0;et(Oi,Vn,pn,a),et(cs,zi,qn,a),et(ls,Ii,Yn,0),et(Ui,Gn,zn,a),et(hs,Ni,Kn,a),et(us,Di,$n,0),s&&Pn>16&&setTimeout(()=>{bt=!1,Bt()},1e3),s&&Pn>25&&setTimeout(()=>{bt=!1,He=!1,Bt()},1e3),e&&(et(Oi,Vn,pn,a),et(cs,zi,qn,a/2),et(ls,Ii,Yn,a/2),et(Ui,Gn,zn,a),et(hs,Ni,Kn,a/2),et(us,Di,$n,a/2),setTimeout(()=>{je=!1,Bt()},1e3)),e&&Pn>16&&(et(Oi,Vn,pn,a),et(cs,zi,qn,a/2),et(ls,Ii,Yn,a/2),et(Ui,Gn,zn,a),et(hs,Ni,Kn,a/2),et(us,Di,$n,a/2),setTimeout(()=>{je=!1,bt=!1,Bt()},1e3)),e&&Pn>25&&(et(Oi,Vn,pn,a),et(cs,zi,qn,a/2),et(ls,Ii,Yn,a/2),et(Ui,Gn,zn,a),et(hs,Ni,Kn,a/2),et(us,Di,$n,a/2),setTimeout(()=>{je=!1,bt=!1,He=!1,Bt()},1e3)),t?(et(So,ir,ki,.5),et(bo,sr,Vi,.5)):(et(So,ir,ki,0),et(bo,sr,Vi,0)),t&&yo>.003&&setTimeout(()=>{je=!1,Bt()},1e3),ra(),ua(),ts()}const vs=bl.addFolder("General Parameters"),dt={speed:.01,estimatedFrequency:0,highlight:!1,"Consumer Unit":!1,Schematics:!1,Graph:!1};let g0=!1;vs.add(dt,"highlight").name("Interactables").onChange(()=>{_t=!0,g0||(w8(),g0=!0),E8(),T8()});vs.add(dt,"speed",.001,.07).name("Sim Speed");const Dp=vs.add(dt,"estimatedFrequency").name("Frequency Estimation").listen().onChange(()=>{Dp.domElement.innerText=` ${dt.estimatedFrequency.toFixed(2)} Hz`});function Tl(){const s=document.getElementById("consumer-unit"),e=document.getElementById("schematics"),t=document.getElementById("graph");dt.Graph?dt["Consumer Unit"]=!1:dt["Consumer Unit"]&&(dt.Graph=!1),s.style.display=dt["Consumer Unit"]?"block":"none",e.style.display=dt.Schematics?"block":"none",t.style.display=dt.Graph?"block":"none"}vs.add(dt,"Schematics").onChange(Tl);let so=!1;vs.add(dt,"Consumer Unit").onChange(()=>{so||(so=!0,dt.Graph=!1,vs.__controllers.find(s=>s.property==="Graph").setValue(!1),Tl(),so=!1)});vs.add(dt,"Graph").onChange(()=>{so||(so=!0,dt["Consumer Unit"]=!1,vs.__controllers.find(s=>s.property==="Consumer Unit").setValue(!1),Tl(),so=!1)});Tl();const mi=bl.addFolder("Voltage Controls"),$_=mi.addColor(y,"phaseL1Color").name("Phase L1 Color"),Z_=mi.addColor(y,"phaseL2Color").name("Phase L2 Color"),J_=mi.addColor(y,"phaseL3Color").name("Phase L3 Color"),Op=mi.add(y,"hideL1").name("Hide L1 Voltage"),Up=mi.add(y,"hideL2").name("Hide L2 Voltage"),Fp=mi.add(y,"hideL3").name("Hide L3 Voltage"),Q_=mi.add(y,"initialWidth",0,.01).name("Line Width").onChange(Bp),Oa=mi.add(y,"widthScale",0,.01).name("Line Amplitude").onChange(Bp);function Bp(){Oa.max(y.initialWidth)}let da=y.lineOpacity;const e8=mi.add(y,"lineTransparent").name("Transparent").onChange(kp),ks=mi.add(y,"lineOpacity",0,1).name("Line Opacity");function t8(s){y.phaseL1Color=s,As()}function n8(s){y.phaseL2Color=s,As()}function i8(s){y.phaseL3Color=s,As()}function s8(s){const e=y.widthScale;y.initialWidth=s,Oa.max(y.initialWidth),e>y.initialWidth&&(y.widthScale=y.initialWidth,Oa.setValue(y.initialWidth)),As()}function r8(s){y.widthScale=s,y.widthScale>y.initialWidth&&(y.widthScale=y.initialWidth,Oa.setValue(y.initialWidth)),As()}function kp(s){s?(ks.__li.style.pointerEvents="auto",ks.__li.style.color="",da!==1&&(y.lineOpacity=da,ks.setValue(da))):(ks.__li.style.pointerEvents="none",ks.__li.style.color="#808080",da=y.lineOpacity,y.lineOpacity=1,ks.setValue(1)),As()}function o8(s){s!==1&&(da=s),y.lineOpacity=s,As()}function a8(s){Wn=!Wn,It=!Wn,_t=!0}function c8(s){Xn=!Xn,ln=!Xn,_t=!0}function l8(s){jn=!jn,Tn=!jn,_t=!0}$_.onChange(t8);Z_.onChange(n8);J_.onChange(i8);Q_.onChange(s8);Oa.onChange(r8);e8.onChange(kp);ks.onChange(o8);Op.onChange(a8);Up.onChange(c8);Fp.onChange(l8);const Wi=bl.addFolder("Current Controls"),h8=Wi.addColor(nt,"color").name("Particle Color"),Hp=Wi.add(pn,"hideParticles").name("Hide L1 particles"),Vp=Wi.add(Mn,"hideParticles").name("Hide L2 particles"),Gp=Wi.add(ui,"hideParticles").name("Hide L3 particles"),Wp=Wi.add(Hi,"hideParticles").name("Hide N particles");Wi.add({sineAmplitude:Jt},"sineAmplitude",1e-4,.01).name("Amplitude").onChange(p8);const u8=Wi.add(nt,"scale",.01,.2).name("Particle Scale");let Hc=nt.opacity;const d8=Wi.add(nt,"transparency").name("Transparent").onChange(Xp),is=Wi.add(nt,"opacity",.4,1).name("Particle Opacity");u8.onChange(()=>{Ft(Oi,Vn,pn),Ft(cs,zi,qn),Ft(ls,Ii,Yn),Ft(So,ir,ki),Ft(Va,Lo,Hi),Ft(hr,Ts,Mn),Ft(Ha,Ao,ui),Ft(Ui,Gn,zn),Ft(hs,Ni,Kn),Ft(us,Di,$n),Ft(bo,sr,Vi),Ft(ur,ws,di),Ft(Ga,Co,xs),Ft(Wa,Ro,ys)});h8.onChange(()=>{As()});is.onChange(()=>In());function Xp(s){s?(is.__li.style.pointerEvents="auto",is.__li.style.color="",Hc!==1&&(nt.opacity=Hc,is.setValue(Hc),In())):(is.__li.style.pointerEvents="none",is.__li.style.color="#808080",Hc=nt.opacity,nt.opacity=1,is.setValue(1),In())}d8.onChange(Xp);is.onChange(f8);function f8(){}Hp.onChange(function(s){pn.hideParticles=s,qn.hideParticles=s,Yn.hideParticles=s,ki.hideParticles=s,zn.hideParticles=s,Kn.hideParticles=s,$n.hideParticles=s,Vi.hideParticles=s,_t=!0,za=!za,In()});Vp.onChange(function(s){Mn.hideParticles=s,di.hideParticles=s,_t=!0,Ia=!Ia,In()});Gp.onChange(function(s){ui.hideParticles=s,xs.hideParticles=s,_t=!0,Na=!Na,In()});Wp.onChange(function(s){Hi.hideParticles=s,ys.hideParticles=s,_t=!0,Da=!Da,In()});function p8(s){Jt=s}let m8=new d6;function zo(s,e,t,n,i,r=1){let o,a=!1,c,l="";m8.load("helvetiker_regular.typeface.json",function(u){o=u;const d=n(),p=i()?"":" (potential)",g=s+" = "+d.toFixed(r)+" "+e+p,_=new e0(g,{font:o,size:.03,height:.01,curveSegments:1,bevelEnabled:!1,bevelThickness:.1,bevelSize:.1,bevelOffset:0,bevelSegments:5}),m=new Ri({color:0});c=new sn(_,m),c.position.set(t.x,t.y,t.z),c.rotation.set(-Math.PI/2,0,0),gn.add(c),a=!0});function h(){if(!c||!a)return;const u=n(),d=i()?"":" (potential)",p=s+" = "+u.toFixed(r)+" "+e+d;l!==p&&(c.geometry.dispose(),c.geometry=new e0(p,{font:o,size:.03,height:.01,curveSegments:1,bevelEnabled:!1,bevelThickness:.1,bevelSize:.1,bevelOffset:0,bevelSegments:5}),l=p)}return{updateText:h}}const g8=zo("I","A",{x:-2.1,y:-4.3,z:.82},()=>Pn,()=>He&&je&&bt&&Nt&&_s,2),_8=zo("I","A",{x:-2.1,y:-4.3,z:.56},()=>yo,()=>He&&je&&bt&&Nt&&fn,4),x8=zo("R","Ω",{x:-2.39,y:-4.3,z:.92},()=>Gr,()=>!0,1),y8=zo("R","Ω",{x:-2.39,y:-4.3,z:.65},()=>oa,()=>!0,0),v8=zo("In","A",{x:-2.2,y:-4.3,z:-.02},()=>Ip,()=>!0,2),S8=zo("θ","°",{x:-1.9,y:-4.3,z:-.02},()=>Np,()=>!0,2);let ea=.001;const b8=s=>{Sa?ea=0:He&&je&&bn&&Pi&&Zs?ea=2*s:He&&je&&bn&&Pi&&Js?ea=6*s:ea=0,su&&su.rotateZ(ea)},St=[],M8=[],pl=new Be(16711935);new fo({color:6684927,emissive:0,emissiveIntensity:0});function E8(){_t&&St.forEach(s=>{if(s.mesh)if(!s.mesh.children||s.mesh.children.length===0){const e=s.mesh.material;e.emissive=dt.highlight?pl:new Be(0)}else s.mesh.children.forEach(e=>{if(e.isMesh){const t=e.material;t.emissive=dt.highlight?pl:new Be(0)}})})}function T8(){St.forEach(s=>{if(s.mesh)if(!s.mesh.children||s.mesh.children.length===0){const e=s.mesh.material;e.emissive=dt.highlight?pl:new Be(0)}else s.mesh.children.forEach(e=>{if(e.isMesh){const t=e.material;t.emissive=dt.highlight?pl:new Be(0)}})})}function w8(){St.push({name:"mainsSwitch",mesh:Gs}),St.push({name:"mcbL1Switch",mesh:Ws}),St.push({name:"mcbL2Switch",mesh:Us}),St.push({name:"mcbL3Switch",mesh:Fs}),St.push({name:"rcdSwitch",mesh:Xs}),St.push({name:"fanOffBtnh",mesh:Wr}),St.push({name:"fanOn1",mesh:Xr}),St.push({name:"fanOn2",mesh:jr}),St.push({name:"wallSocketFrame",mesh:qc}),St.push({name:"wallSocketInnards",mesh:Yc}),St.push({name:"wallSwitchKey",mesh:aa}),St.push({name:"wallSwitchFrame",mesh:du}),St.push({name:"L1Pen",mesh:fu}),St.push({name:"L1PenSwitch",mesh:ca}),St.push({name:"L1LN",mesh:pu}),St.push({name:"L1LNSwitch",mesh:la}),St.push({name:"PenSwitchHandle",mesh:ha}),St.push({name:"PenSwitch",mesh:Rp}),St.push({name:"rheostatLNWiper",mesh:qr}),St.push({name:"rheostatLPeWiper",mesh:Bs}),St.forEach(s=>{M8.push({name:s.name,materials:[]})})}function A8(){_t&&(He?(Gs.rotation.x=0,ru.position.z=0):(Gs.rotation.x=Math.PI/4,ru.position.z=-.015),bt?(Ws.rotation.x=0,ou.position.z=0):(Ws.rotation.x=Math.PI/4,ou.position.z=-.015),je?(Xs.rotation.x=0,au.position.z=0,cu.rotation.y=0,lu.rotation.y=0,hu.rotation.y=0,uu.rotation.y=0):(Xs.rotation.x=Math.PI/4,au.position.z=.015,cu.rotation.y=-Math.PI/16,lu.rotation.y=-Math.PI/16,hu.rotation.y=-Math.PI/16,uu.rotation.y=-Math.PI/16),Wn?ol.visible=!0:ol.visible=!1,Xn?al.visible=!0:al.visible=!1,jn?cl.visible=!0:cl.visible=!1,za?ll.visible=!0:ll.visible=!1,Ia?hl.visible=!0:hl.visible=!1,Na?ul.visible=!0:ul.visible=!1,Da?dl.visible=!0:dl.visible=!1)}async function L8(){Nt=!0,await Ph(500),fn=!0,await Ph(500),Nt=!1,fn=!1,await Ph(500)}function Ph(s){return new Promise(e=>setTimeout(e,s))}L8();let _0=Pn,x0=yo;performance.now();dt.speed;let Wt=0,zh=0,Vc=0,y0=0;const jp=()=>{const s=performance.now();y0+=.02;const e=0,t=1,n=_l.lerp(e,t,(Math.sin(y0)+1)/2);St.forEach(r=>{r.mesh&&(r.mesh.children&&r.mesh.children.length>0?r.mesh.children.forEach(o=>{o.isMesh&&o.material instanceof fo&&(dt.highlight?(o.material.emissiveIntensity=n,o.material.emissive=new Be(16711935)):(o.material.emissiveIntensity=0,o.material.emissive=new Be(0)))}):r.mesh.material instanceof fo&&(dt.highlight?(r.mesh.material.emissiveIntensity=n,r.mesh.material.emissive=new Be(16711935)):(r.mesh.material.emissiveIntensity=0,r.mesh.material.emissive=new Be(0))))}),Wt=(Wt+dt.speed)%1,zh=(zh+dt.speed/dr)%1,hn(Oi,Vn,pn,Wt,es,Jt),hn(cs,zi,qn,Wt,es,Jt),hn(ls,Ii,Yn,Wt,es,Jt),hn(So,ir,ki,Wt,es,Jt),hn(hr,Ts,Mn,Wt,p0,Jt),hn(Ha,Ao,ui,Wt,m0,Jt),hn(hs,Ni,Kn,Wt,es,2*Jt),hn(Ui,Gn,zn,Wt,es,2*Jt),hn(us,Di,$n,Wt,es,2*Jt),hn(bo,sr,Vi,Wt,es,2*Jt),hn(ur,ws,di,Wt,p0,2*Jt),hn(Ga,Co,xs,Wt,m0,2*Jt),b8(dt.speed),El.forEach((r,o)=>{r.setVisible(ku[o].condition()),r.update(Wt)}),Pn!==_0&&(Bt(),_0=Pn),yo!==x0&&(Bt(),x0=yo),A8(),g8.updateText(),_8.updateText(),x8.updateText(),y8.updateText(),v8.updateText(),S8.updateText(),Tt(),j_(),X_(),k_(zh),Fi.render(gn,ss),Ml.render(gn,rs),_o.render(gn,kn);const i=performance.now()-s;if(Vc>=1/dt.speed){const o=1/(i*Vc/1e3);Dp.setValue(o),Vc=0}else Vc++;requestAnimationFrame(jp)};jp();
