var lf=Object.defineProperty;var cf=(a,e,t)=>e in a?lf(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var fe=(a,e,t)=>(cf(a,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fl="142",hs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uf=0,nc=1,hf=2,oh=1,df=2,mr=3,ks=0,Mn=1,Qi=2,ff=1,yi=0,Ns=1,ic=2,sc=3,rc=4,pf=5,Cs=100,mf=101,gf=102,oc=103,ac=104,_f=200,xf=201,yf=202,vf=203,ah=204,lh=205,Mf=206,Sf=207,bf=208,wf=209,Tf=210,Ef=0,Af=1,Cf=2,Ua=3,Rf=4,Lf=5,If=6,Pf=7,ch=0,Df=1,Nf=2,Jn=0,Ff=1,Of=2,zf=3,Uf=4,kf=5,uh=300,Bs=301,Vs=302,Mo=303,ka=304,Oo=306,Gs=1e3,Vt=1001,So=1002,yt=1003,Ba=1004,Va=1005,ut=1006,hh=1007,rs=1008,es=1009,Bf=1010,Vf=1011,dh=1012,Gf=1013,Vi=1014,yn=1015,$n=1016,Hf=1017,Wf=1018,Fs=1020,Xf=1021,jf=1022,vn=1023,qf=1024,Yf=1025,qi=1026,Hs=1027,Kf=1028,$f=1029,Zf=1030,Jf=1031,Qf=1033,qo=33776,Yo=33777,Ko=33778,$o=33779,lc=35840,cc=35841,uc=35842,hc=35843,ep=36196,dc=37492,fc=37496,pc=37808,mc=37809,gc=37810,_c=37811,xc=37812,yc=37813,vc=37814,Mc=37815,Sc=37816,bc=37817,wc=37818,Tc=37819,Ec=37820,Ac=37821,Cc=36492,fh=2200,tp=2201,np=2202,Tr=2300,Ws=2301,Zo=2302,Rs=2400,Ls=2401,bo=2402,pl=2500,ph=2501,ip=1,mh=2,Si=3e3,We=3001,sp=3200,rp=3201,ml=0,op=1,jn="srgb",Gi="srgb-linear",Jo=7680,ap=519,Ga=35044,Rc="300 es",Ha=1035;class Ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lc=1234567;const vr=Math.PI/180,Er=180/Math.PI;function Sn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[a&255]+bt[a>>8&255]+bt[a>>16&255]+bt[a>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function vt(a,e,t){return Math.max(e,Math.min(t,a))}function gl(a,e){return(a%e+e)%e}function lp(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function cp(a,e,t){return a!==e?(t-a)/(e-a):0}function Mr(a,e,t){return(1-t)*a+t*e}function up(a,e,t,n){return Mr(a,e,1-Math.exp(-t*n))}function hp(a,e=1){return e-Math.abs(gl(a,e*2)-e)}function dp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function fp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function pp(a,e){return a+Math.floor(Math.random()*(e-a+1))}function mp(a,e){return a+Math.random()*(e-a)}function gp(a){return a*(.5-Math.random())}function _p(a){a!==void 0&&(Lc=a);let e=Lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xp(a){return a*vr}function yp(a){return a*Er}function Wa(a){return(a&a-1)===0&&a!==0}function gh(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function wo(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function vp(a,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+n)/2),u=r((e+n)/2),h=s((e-n)/2),d=r((e-n)/2),m=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":a.set(o*u,l*h,l*d,o*c);break;case"YZY":a.set(l*d,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*d,o*u,o*c);break;case"XZX":a.set(o*u,l*g,l*m,o*c);break;case"YXY":a.set(l*m,o*u,l*g,o*c);break;case"ZYZ":a.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mp(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Sp(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var To=Object.freeze({__proto__:null,DEG2RAD:vr,RAD2DEG:Er,generateUUID:Sn,clamp:vt,euclideanModulo:gl,mapLinear:lp,inverseLerp:cp,lerp:Mr,damp:up,pingpong:hp,smoothstep:dp,smootherstep:fp,randInt:pp,randFloat:mp,randFloatSpread:gp,seededRandom:_p,degToRad:xp,radToDeg:yp,isPowerOfTwo:Wa,ceilPowerOfTwo:gh,floorPowerOfTwo:wo,setQuaternionFromProperEuler:vp,normalize:Sp,denormalize:Mp});class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,r,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],f=i[0],p=i[3],_=i[6],v=i[1],M=i[4],S=i[7],x=i[2],w=i[5],C=i[8];return s[0]=r*f+o*v+l*x,s[3]=r*p+o*M+l*w,s[6]=r*_+o*S+l*C,s[1]=c*f+u*v+h*x,s[4]=c*p+u*M+h*w,s[7]=c*_+u*S+h*C,s[2]=d*f+m*v+g*x,s[5]=d*p+m*M+g*w,s[8]=d*_+m*S+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*o*c-n*s*u+n*o*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*r-o*c,d=o*l-u*s,m=c*s-r*l,g=t*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return e[0]=h*f,e[1]=(i*c-u*n)*f,e[2]=(o*n-i*r)*f,e[3]=d*f,e[4]=(u*t-i*l)*f,e[5]=(i*s-o*t)*f,e[6]=m*f,e[7]=(n*l-c*t)*f,e[8]=(r*t-n*s)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],r=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*r+n*c,i[6]=t*o+n*u,i[1]=-n*s+t*l,i[4]=-n*r+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function _h(a){for(let e=a.length-1;e>=0;--e)if(a[e]>65535)return!0;return!1}function Ar(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Yi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function go(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Qo={[jn]:{[Gi]:Yi},[Gi]:{[jn]:go}},fn={legacyMode:!0,get workingColorSpace(){return Gi},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(Qo[e]&&Qo[e][t]!==void 0){const n=Qo[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ct={r:0,g:0,b:0},pn={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function ea(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function Xr(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,fn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Gi){return this.r=e,this.g=t,this.b=n,fn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Gi){if(e=gl(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=ea(r,s,e+1/3),this.g=ea(r,s,e),this.b=ea(r,s,e-1/3)}return fn.toWorkingColorSpace(this,i),this}setStyle(e,t=jn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,fn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,fn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,fn.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,fn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=jn){const n=xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return fn.fromWorkingColorSpace(Xr(this,ct),e),vt(ct.r*255,0,255)<<16^vt(ct.g*255,0,255)<<8^vt(ct.b*255,0,255)<<0}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gi){fn.fromWorkingColorSpace(Xr(this,ct),t);const n=ct.r,i=ct.g,s=ct.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=u<=.5?h/(r+o):h/(2-r-o),r){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Gi){return fn.fromWorkingColorSpace(Xr(this,ct),t),e.r=ct.r,e.g=ct.g,e.b=ct.b,e}getStyle(e=jn){return fn.fromWorkingColorSpace(Xr(this,ct),e),e!==jn?`color(${e} ${ct.r} ${ct.g} ${ct.b})`:`rgb(${ct.r*255|0},${ct.g*255|0},${ct.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(pn),pn.h+=e,pn.s+=t,pn.l+=n,this.setHSL(pn.h,pn.s,pn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pn),e.getHSL(Wr);const n=Mr(pn.h,Wr.h,t),i=Mr(pn.s,Wr.s,t),s=Mr(pn.l,Wr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Se.NAMES=xh;let fs;class yh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fs===void 0&&(fs=Ar("canvas")),fs.width=e.width,fs.height=e.height;const n=fs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Yi(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yi(t[n]/255)*255):t[n]=Yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class vh{constructor(e=null){this.isSource=!0,this.uuid=Sn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(ta(i[r].image)):s.push(ta(i[r]))}else s=ta(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ta(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?yh.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bp=0;class zt extends Ei{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=Vt,i=Vt,s=ut,r=rs,o=vn,l=es,c=1,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Sn(),this.name="",this.source=new vh(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gs:e.x=e.x-Math.floor(e.x);break;case Vt:e.x=e.x<0?0:1;break;case So:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gs:e.y=e.y-Math.floor(e.y);break;case Vt:e.y=e.y<0?0:1;break;case So:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=uh;class Xe{constructor(e=0,t=0,n=0,i=1){Xe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],f=l[2],p=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+f)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,S=(m+1)/2,x=(_+1)/2,w=(u+d)/4,C=(h+f)/4,y=(g+p)/4;return M>S&&M>x?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=C/n):S>x?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=y/i):x<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(x),n=C/s,i=y/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(h-f)*(h-f)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(h-f)/v,this.z=(d-u)/v,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ts extends Ei{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ut,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mh extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wp extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ot{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,r,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[r+0],m=s[r+1],g=s[r+2],f=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=f;return}if(h!==f||l!==d||c!==m||u!==g){let p=1-o;const _=l*d+c*m+u*g+h*f,v=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const x=Math.sqrt(M),w=Math.atan2(x,_*v);p=Math.sin(p*w)/x,o=Math.sin(o*w)/x}const S=o*v;if(l=l*p+d*S,c=c*p+m*S,u=u*p+g*S,h=h*p+f*S,p===1-o){const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[r],d=s[r+1],m=s[r+2],g=s[r+3];return e[t]=o*g+u*h+l*m-c*d,e[t+1]=l*g+u*d+c*h-o*m,e[t+2]=c*g+u*m+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(r-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(r-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*o+i*c-s*l,this._y=i*u+r*l+s*o-n*c,this._z=s*u+r*c+n*l-i*o,this._w=r*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=l*t+r*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-r*t,d=-s*t-r*n-o*i;return this.x=c*l+d*-s+u*-o-h*-r,this.y=u*l+d*-r+h*-s-c*-o,this.z=h*l+d*-o+c*-r-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new P,Ic=new Ot;class Js{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>r&&(r=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>r&&(r=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)Ri.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(Ri)}else n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox),ia.applyMatrix4(e.matrixWorld),this.union(ia);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),jr.subVectors(this.max,lr),ps.subVectors(e.a,lr),ms.subVectors(e.b,lr),gs.subVectors(e.c,lr),ri.subVectors(ms,ps),oi.subVectors(gs,ms),Li.subVectors(ps,gs);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Li.z,Li.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Li.z,0,-Li.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Li.y,Li.x,0];return!sa(t,ps,ms,gs,jr)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,ps,ms,gs,jr))?!1:(qr.crossVectors(ri,oi),t=[qr.x,qr.y,qr.z],sa(t,ps,ms,gs,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ri.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new P,new P,new P,new P,new P,new P,new P,new P],Ri=new P,ia=new Js,ps=new P,ms=new P,gs=new P,ri=new P,oi=new P,Li=new P,lr=new P,jr=new P,qr=new P,Ii=new P;function sa(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Ii.fromArray(a,s);const o=i.x*Math.abs(Ii.x)+i.y*Math.abs(Ii.y)+i.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),u=n.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Tp=new Js,Pc=new P,Yr=new P,ra=new P;class Qs{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ra.subVectors(e,this.center);const t=ra.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(ra.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Yr.set(0,0,1).multiplyScalar(e.radius):Yr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Pc.copy(e.center).add(Yr)),this.expandByPoint(Pc.copy(e.center).sub(Yr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new P,oa=new P,Kr=new P,ai=new P,aa=new P,$r=new P,la=new P;class zo{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.direction).multiplyScalar(t).add(this.origin),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){oa.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(oa);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Kr),o=ai.dot(this.direction),l=-ai.dot(Kr),c=ai.lengthSq(),u=Math.abs(1-r*r);let h,d,m,g;if(u>0)if(h=r*l-o,d=r*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const f=1/u;h*=f,d*=f,m=h*(h+r*d+2*o)+d*(r*h+d+2*l)+c}else d=s,h=Math.max(0,-(r*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(r*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-r*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(r*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=r>0?-s:s,h=Math.max(0,-(r*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Kr).multiplyScalar(d).add(oa),m}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,r=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,r=(e.min.y-d.y)*u),n>r||s>i||((s>n||n!==n)&&(n=s),(r<i||i!==i)&&(i=r),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,s){aa.subVectors(t,e),$r.subVectors(n,e),la.crossVectors(aa,$r);let r=this.direction.dot(la),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ai.subVectors(this.origin,e);const l=o*this.direction.dot($r.crossVectors(ai,$r));if(l<0)return null;const c=o*this.direction.dot(aa.cross(ai));if(c<0||l+c>r)return null;const u=-o*ai.dot(la);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,r,o,l,c,u,h,d,m,g,f,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=r,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=m,_[7]=g,_[11]=f,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),r=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=r*u,m=r*h,g=o*u,f=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=d-f*c,t[9]=-o*l,t[2]=f-d*c,t[6]=g+m*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,g=c*u,f=c*h;t[0]=d+f*o,t[4]=g*o-m,t[8]=r*c,t[1]=r*h,t[5]=r*u,t[9]=-o,t[2]=m*o-g,t[6]=f+d*o,t[10]=r*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,g=c*u,f=c*h;t[0]=d-f*o,t[4]=-r*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=r*u,t[9]=f-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const d=r*u,m=r*h,g=o*u,f=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+f,t[1]=l*h,t[5]=f*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,m=r*c,g=o*l,f=o*c;t[0]=l*u,t[4]=f-d*h,t[8]=g*h+m,t[1]=h,t[5]=r*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=d-f*h}else if(e.order==="XZY"){const d=r*l,m=r*c,g=o*l,f=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+f,t[5]=r*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=f*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ep,e,Ap)}lookAt(e,t,n){const i=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),li.crossVectors(n,Kt),li.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),li.crossVectors(n,Kt)),li.normalize(),Zr.crossVectors(Kt,li),i[0]=li.x,i[4]=Zr.x,i[8]=Kt.x,i[1]=li.y,i[5]=Zr.y,i[9]=Kt.y,i[2]=li.z,i[6]=Zr.z,i[10]=Kt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],f=n[6],p=n[10],_=n[14],v=n[3],M=n[7],S=n[11],x=n[15],w=i[0],C=i[4],y=i[8],b=i[12],N=i[1],I=i[5],K=i[9],W=i[13],D=i[2],U=i[6],O=i[10],V=i[14],H=i[3],B=i[7],j=i[11],J=i[15];return s[0]=r*w+o*N+l*D+c*H,s[4]=r*C+o*I+l*U+c*B,s[8]=r*y+o*K+l*O+c*j,s[12]=r*b+o*W+l*V+c*J,s[1]=u*w+h*N+d*D+m*H,s[5]=u*C+h*I+d*U+m*B,s[9]=u*y+h*K+d*O+m*j,s[13]=u*b+h*W+d*V+m*J,s[2]=g*w+f*N+p*D+_*H,s[6]=g*C+f*I+p*U+_*B,s[10]=g*y+f*K+p*O+_*j,s[14]=g*b+f*W+p*V+_*J,s[3]=v*w+M*N+S*D+x*H,s[7]=v*C+M*I+S*U+x*B,s[11]=v*y+M*K+S*O+x*j,s[15]=v*b+M*W+S*V+x*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],f=e[7],p=e[11],_=e[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*m-n*l*m)+f*(+t*l*m-t*c*d+s*r*d-i*r*m+i*c*u-s*l*u)+p*(+t*c*h-t*o*m-s*r*h+n*r*m+s*o*u-n*c*u)+_*(-i*o*u-t*l*h+t*o*d+i*r*h-n*r*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],f=e[13],p=e[14],_=e[15],v=h*p*c-f*d*c+f*l*m-o*p*m-h*l*_+o*d*_,M=g*d*c-u*p*c-g*l*m+r*p*m+u*l*_-r*d*_,S=u*f*c-g*h*c+g*o*m-r*f*m-u*o*_+r*h*_,x=g*h*l-u*f*l-g*o*d+r*f*d+u*o*p-r*h*p,w=t*v+n*M+i*S+s*x;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=v*C,e[1]=(f*d*s-h*p*s-f*i*m+n*p*m+h*i*_-n*d*_)*C,e[2]=(o*p*s-f*l*s+f*i*c-n*p*c-o*i*_+n*l*_)*C,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*m-n*l*m)*C,e[4]=M*C,e[5]=(u*p*s-g*d*s+g*i*m-t*p*m-u*i*_+t*d*_)*C,e[6]=(g*l*s-r*p*s-g*i*c+t*p*c+r*i*_-t*l*_)*C,e[7]=(r*d*s-u*l*s+u*i*c-t*d*c-r*i*m+t*l*m)*C,e[8]=S*C,e[9]=(g*h*s-u*f*s-g*n*m+t*f*m+u*n*_-t*h*_)*C,e[10]=(r*f*s-g*o*s+g*n*c-t*f*c-r*n*_+t*o*_)*C,e[11]=(u*o*s-r*h*s-u*n*c+t*h*c+r*n*m-t*o*m)*C,e[12]=x*C,e[13]=(u*f*i-g*h*i+g*n*d-t*f*d-u*n*p+t*h*p)*C,e[14]=(g*o*i-r*f*i-g*n*l+t*f*l+r*n*p-t*o*p)*C,e[15]=(r*h*i-u*o*i+u*n*l-t*h*l-r*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,u=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*r,0,c*l-i*o,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,u=r+r,h=o+o,d=s*c,m=s*u,g=s*h,f=r*u,p=r*h,_=o*h,v=l*c,M=l*u,S=l*h,x=n.x,w=n.y,C=n.z;return i[0]=(1-(f+_))*x,i[1]=(m+S)*x,i[2]=(g-M)*x,i[3]=0,i[4]=(m-S)*w,i[5]=(1-(d+_))*w,i[6]=(p+v)*w,i[7]=0,i[8]=(g+M)*C,i[9]=(p-v)*C,i[10]=(1-(d+f))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=_s.set(i[0],i[1],i[2]).length();const r=_s.set(i[4],i[5],i[6]).length(),o=_s.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],mn.copy(this);const c=1/s,u=1/r,h=1/o;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r){r===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(r+s)/(r-s),m=-2*r*s/(r-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(r-s),h=(t+e)*l,d=(n+i)*c,m=(r+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _s=new P,mn=new Pe,Ep=new P(0,0,0),Ap=new P(1,1,1),li=new P,Zr=new P,Kt=new P,Dc=new Pe,Nc=new Ot;class kr{constructor(e=0,t=0,n=0,i=kr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-vt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}kr.DefaultOrder="XYZ";kr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class _l{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cp=0;const Fc=new P,xs=new Ot,Bn=new Pe,Jr=new P,cr=new P,Rp=new P,Lp=new Ot,Oc=new P(1,0,0),zc=new P(0,1,0),Uc=new P(0,0,1),Ip={type:"added"},kc={type:"removed"};class nt extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DefaultUp.clone();const e=new P,t=new kr,n=new Ot,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Ht}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=nt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(zc,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Fc.copy(e).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(zc,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jr.copy(e):Jr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(cr,Jr,this.up):Bn.lookAt(Jr,cr,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(Bn),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ip)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(kc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,Rp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Lp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),h=r(e.shapes),d=r(e.skeletons),m=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}nt.DefaultUp=new P(0,1,0);nt.DefaultMatrixAutoUpdate=!0;const gn=new P,Vn=new P,ca=new P,Gn=new P,ys=new P,vs=new P,Bc=new P,ua=new P,ha=new P,da=new P;class Kn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gn.subVectors(e,t),i.cross(gn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){gn.subVectors(i,t),Vn.subVectors(n,t),ca.subVectors(e,t);const r=gn.dot(gn),o=gn.dot(Vn),l=gn.dot(ca),c=Vn.dot(Vn),u=Vn.dot(ca),h=r*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(c*l-o*u)*d,g=(r*u-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gn),Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getUV(e,t,n,i,s,r,o,l){return this.getBarycoord(e,t,n,i,Gn),l.set(0,0),l.addScaledVector(s,Gn.x),l.addScaledVector(r,Gn.y),l.addScaledVector(o,Gn.z),l}static isFrontFacing(e,t,n,i){return gn.subVectors(n,t),Vn.subVectors(e,t),gn.cross(Vn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),gn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Kn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;ys.subVectors(i,n),vs.subVectors(s,n),ua.subVectors(e,n);const l=ys.dot(ua),c=vs.dot(ua);if(l<=0&&c<=0)return t.copy(n);ha.subVectors(e,i);const u=ys.dot(ha),h=vs.dot(ha);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(n).addScaledVector(ys,r);da.subVectors(e,s);const m=ys.dot(da),g=vs.dot(da);if(g>=0&&m<=g)return t.copy(s);const f=m*c-l*g;if(f<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(vs,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Bc.subVectors(s,i),o=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(Bc,o);const _=1/(p+f+d);return r=f*_,o=d*_,t.copy(n).addScaledVector(ys,r).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Pp=0;class Nn extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=Ns,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ah,this.blendDst=lh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jo,this.stencilZFail=Jo,this.stencilZPass=Jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===ff;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==ks&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hi extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new P,Qr=new ve;class en{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Ga,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),r=new Se),t[n++]=r.r,t[n++]=r.g,t[n++]=r.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),r=new ve),t[n++]=r.x,t[n++]=r.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),r=new P),t[n++]=r.x,t[n++]=r.y,t[n++]=r.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),r=new Xe),t[n++]=r.x,t[n++]=r.y,t[n++]=r.z,t[n++]=r.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ga&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Sh extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bh extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qn extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dp=0;const on=new Pe,fa=new nt,Ms=new P,$t=new Js,ur=new Js,dt=new P;class Fn extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_h(e)?bh:Sh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors($t.min,ur.min),$t.expandByPoint(dt),dt.addVectors($t.max,ur.max),$t.expandByPoint(dt)):($t.expandByPoint(ur.min),$t.expandByPoint(ur.max))}$t.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(dt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)dt.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(e,c),dt.add(Ms)),i=Math.max(i,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let N=0;N<o;N++)c[N]=new P,u[N]=new P;const h=new P,d=new P,m=new P,g=new ve,f=new ve,p=new ve,_=new P,v=new P;function M(N,I,K){h.fromArray(i,N*3),d.fromArray(i,I*3),m.fromArray(i,K*3),g.fromArray(r,N*2),f.fromArray(r,I*2),p.fromArray(r,K*2),d.sub(h),m.sub(h),f.sub(g),p.sub(g);const W=1/(f.x*p.y-p.x*f.y);!isFinite(W)||(_.copy(d).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(W),v.copy(m).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(W),c[N].add(_),c[I].add(_),c[K].add(_),u[N].add(v),u[I].add(v),u[K].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let N=0,I=S.length;N<I;++N){const K=S[N],W=K.start,D=K.count;for(let U=W,O=W+D;U<O;U+=3)M(n[U+0],n[U+1],n[U+2])}const x=new P,w=new P,C=new P,y=new P;function b(N){C.fromArray(s,N*3),y.copy(C);const I=c[N];x.copy(I),x.sub(C.multiplyScalar(C.dot(I))).normalize(),w.crossVectors(y,I);const W=w.dot(u[N])<0?-1:1;l[N*4]=x.x,l[N*4+1]=x.y,l[N*4+2]=x.z,l[N*4+3]=W}for(let N=0,I=S.length;N<I;++N){const K=S[N],W=K.start,D=K.count;for(let U=W,O=W+D;U<O;U+=3)b(n[U+0]),b(n[U+1]),b(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,r=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),f=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,p),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const r=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,r.length-c);for(let h=0,d=c;h<u;h++,d++)r[d]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let f=0,p=l.length;f<p;f++){o.isInterleavedBufferAttribute?m=l[f]*o.data.stride+o.offset:m=l[f]*u;for(let _=0;_<u;_++)d[g++]=c[m++]}return new en(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vc=new Pe,Ss=new zo,pa=new Qs,ci=new P,ui=new P,hi=new P,ma=new P,ga=new P,_a=new P,eo=new P,to=new P,no=new P,io=new ve,so=new ve,ro=new ve,xa=new P,oo=new P;class Dn extends nt{constructor(e=new Fn,t=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),e.ray.intersectsSphere(pa)===!1)||(Vc.copy(s).invert(),Ss.copy(e.ray).applyMatrix4(Vc),n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,m=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let f=0,p=m.length;f<p;f++){const _=m[f],v=i[_.materialIndex],M=Math.max(_.start,g.start),S=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let x=M,w=S;x<w;x+=3){const C=o.getX(x),y=o.getX(x+1),b=o.getX(x+2);r=ao(this,v,e,Ss,l,c,u,h,d,C,y,b),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const f=Math.max(0,g.start),p=Math.min(o.count,g.start+g.count);for(let _=f,v=p;_<v;_+=3){const M=o.getX(_),S=o.getX(_+1),x=o.getX(_+2);r=ao(this,i,e,Ss,l,c,u,h,d,M,S,x),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let f=0,p=m.length;f<p;f++){const _=m[f],v=i[_.materialIndex],M=Math.max(_.start,g.start),S=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let x=M,w=S;x<w;x+=3){const C=x,y=x+1,b=x+2;r=ao(this,v,e,Ss,l,c,u,h,d,C,y,b),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const f=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=f,v=p;_<v;_+=3){const M=_,S=_+1,x=_+2;r=ao(this,i,e,Ss,l,c,u,h,d,M,S,x),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Np(a,e,t,n,i,s,r,o){let l;if(e.side===Mn?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side!==Qi,o),l===null)return null;oo.copy(o),oo.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(oo);return c<t.near||c>t.far?null:{distance:c,point:oo.clone(),object:a}}function ao(a,e,t,n,i,s,r,o,l,c,u,h){ci.fromBufferAttribute(i,c),ui.fromBufferAttribute(i,u),hi.fromBufferAttribute(i,h);const d=a.morphTargetInfluences;if(s&&d){eo.set(0,0,0),to.set(0,0,0),no.set(0,0,0);for(let g=0,f=s.length;g<f;g++){const p=d[g],_=s[g];p!==0&&(ma.fromBufferAttribute(_,c),ga.fromBufferAttribute(_,u),_a.fromBufferAttribute(_,h),r?(eo.addScaledVector(ma,p),to.addScaledVector(ga,p),no.addScaledVector(_a,p)):(eo.addScaledVector(ma.sub(ci),p),to.addScaledVector(ga.sub(ui),p),no.addScaledVector(_a.sub(hi),p)))}ci.add(eo),ui.add(to),hi.add(no)}a.isSkinnedMesh&&(a.boneTransform(c,ci),a.boneTransform(u,ui),a.boneTransform(h,hi));const m=Np(a,e,t,n,ci,ui,hi,xa);if(m){o&&(io.fromBufferAttribute(o,c),so.fromBufferAttribute(o,u),ro.fromBufferAttribute(o,h),m.uv=Kn.getUV(xa,ci,ui,hi,io,so,ro,new ve)),l&&(io.fromBufferAttribute(l,c),so.fromBufferAttribute(l,u),ro.fromBufferAttribute(l,h),m.uv2=Kn.getUV(xa,ci,ui,hi,io,so,ro,new ve));const g={a:c,b:u,c:h,normal:new P,materialIndex:0};Kn.getNormal(ci,ui,hi,g.normal),m.face=g}return m}class Br extends Fn{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Qn(c,3)),this.setAttribute("normal",new Qn(u,3)),this.setAttribute("uv",new Qn(h,2));function g(f,p,_,v,M,S,x,w,C,y,b){const N=S/C,I=x/y,K=S/2,W=x/2,D=w/2,U=C+1,O=y+1;let V=0,H=0;const B=new P;for(let j=0;j<O;j++){const J=j*I-W;for(let Q=0;Q<U;Q++){const Z=Q*N-K;B[f]=Z*v,B[p]=J*M,B[_]=D,c.push(B.x,B.y,B.z),B[f]=0,B[p]=0,B[_]=w>0?1:-1,u.push(B.x,B.y,B.z),h.push(Q/C),h.push(1-j/y),V+=1}}for(let j=0;j<y;j++)for(let J=0;J<C;J++){const Q=d+J+U*j,Z=d+J+U*(j+1),he=d+(J+1)+U*(j+1),pe=d+(J+1)+U*j;l.push(Q,Z,pe),l.push(Z,he,pe),H+=6}o.addGroup(m,H,b),m+=H,d+=V}}static fromJSON(e){return new Br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(a){const e={};for(let t=0;t<a.length;t++){const n=Xs(a[t]);for(const i in n)e[i]=n[i]}return e}const Fp={clone:Xs,merge:wt};var Op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ns extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Op,this.fragmentShader=zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wh extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ft extends wh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bs=90,ws=1;class Up extends nt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Ft(bs,ws,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new P(1,0,0)),this.add(i);const s=new Ft(bs,ws,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new P(-1,0,0)),this.add(s);const r=new Ft(bs,ws,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new P(0,1,0)),this.add(r);const o=new Ft(bs,ws,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new P(0,-1,0)),this.add(o);const l=new Ft(bs,ws,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,1)),this.add(l);const c=new Ft(bs,ws,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new P(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Jn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Th extends zt{constructor(e,t,n,i,s,r,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,n,i,s,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kp extends ts{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Th(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Br(5,5,5),s=new ns({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:yi});s.uniforms.tEquirect.value=t;const r=new Dn(i,s),o=t.minFilter;return t.minFilter===rs&&(t.minFilter=ut),new Up(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const ya=new P,Bp=new P,Vp=new Ht;class Ni{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ya.subVectors(n,t).cross(Bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ya),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vp.getNormalMatrix(e),i=this.coplanarPoint(ya).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new Qs,lo=new P;class xl{constructor(e=new Ni,t=new Ni,n=new Ni,i=new Ni,s=new Ni,r=new Ni){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],m=n[9],g=n[10],f=n[11],p=n[12],_=n[13],v=n[14],M=n[15];return t[0].setComponents(o-i,h-l,f-d,M-p).normalize(),t[1].setComponents(o+i,h+l,f+d,M+p).normalize(),t[2].setComponents(o+s,h+c,f+m,M+_).normalize(),t[3].setComponents(o-s,h-c,f-m,M-_).normalize(),t[4].setComponents(o-r,h-u,f-g,M-v).normalize(),t[5].setComponents(o+r,h+u,f+g,M+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSprite(e){return Ts.center.set(0,0,0),Ts.radius=.7071067811865476,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(lo.x=i.normal.x>0?e.max.x:e.min.x,lo.y=i.normal.y>0?e.max.y:e.min.y,lo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eh(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function Gp(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,m=a.createBuffer();a.bindBuffer(u,m),a.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,m=u.updateRange;a.bindBuffer(h,c),m.count===-1?a.bufferSubData(h,0,d):(t?a.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):a.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:r,remove:o,update:l}}class yl extends Fn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,m=[],g=[],f=[],p=[];for(let _=0;_<u;_++){const v=_*d-r;for(let M=0;M<c;M++){const S=M*h-s;g.push(S,-v,0),f.push(0,0,1),p.push(M/o),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<o;v++){const M=v+c*_,S=v+c*(_+1),x=v+1+c*(_+1),w=v+1+c*_;m.push(M,S,w),m.push(S,x,w)}this.setIndex(m),this.setAttribute("position",new Qn(g,3)),this.setAttribute("normal",new Qn(f,3)),this.setAttribute("uv",new Qn(p,2))}static fromJSON(e){return new yl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp="vec3 transformed = vec3( position );",$p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Jp=`#ifdef USE_IRIDESCENCE
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
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
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
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Qp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lm=`#define PI 3.141592653589793
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
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,um=`vec3 transformedNormal = objectNormal;
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
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",gm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_m=`#ifdef USE_ENVMAP
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
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Em=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Am=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rm=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Lm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Im=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Om=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,zm=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Um=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,km=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Vm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jm=`#ifdef USE_MORPHNORMALS
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
#endif`,Qm=`#ifdef USE_MORPHTARGETS
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
#endif`,eg=`#ifdef USE_MORPHTARGETS
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
#endif`,tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ng=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,og=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yg=`#ifdef USE_SHADOWMAP
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
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,vg=`#ifdef USE_SHADOWMAP
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
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
#endif`,Mg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Sg=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
}`,bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wg=`#ifdef USE_SKINNING
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
#endif`,Tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,Ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ig=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Pg=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Dg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ng=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Fg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Og=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,zg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ug=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wg=`#include <common>
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
}`,Xg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jg=`#define DISTANCE
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
}`,qg=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$g=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
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
}`,Qg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
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
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`#define MATCAP
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
}`,i_=`#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,o_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,a_=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,c_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,h_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,g_=`uniform float rotation;
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
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Re={alphamap_fragment:Hp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:jp,aomap_fragment:qp,aomap_pars_fragment:Yp,begin_vertex:Kp,beginnormal_vertex:$p,bsdfs:Zp,iridescence_fragment:Jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:em,clipping_planes_pars_fragment:tm,clipping_planes_pars_vertex:nm,clipping_planes_vertex:im,color_fragment:sm,color_pars_fragment:rm,color_pars_vertex:om,color_vertex:am,common:lm,cube_uv_reflection_fragment:cm,defaultnormal_vertex:um,displacementmap_pars_vertex:hm,displacementmap_vertex:dm,emissivemap_fragment:fm,emissivemap_pars_fragment:pm,encodings_fragment:mm,encodings_pars_fragment:gm,envmap_fragment:_m,envmap_common_pars_fragment:xm,envmap_pars_fragment:ym,envmap_pars_vertex:vm,envmap_physical_pars_fragment:Im,envmap_vertex:Mm,fog_vertex:Sm,fog_pars_vertex:bm,fog_fragment:wm,fog_pars_fragment:Tm,gradientmap_pars_fragment:Em,lightmap_fragment:Am,lightmap_pars_fragment:Cm,lights_lambert_vertex:Rm,lights_pars_begin:Lm,lights_toon_fragment:Pm,lights_toon_pars_fragment:Dm,lights_phong_fragment:Nm,lights_phong_pars_fragment:Fm,lights_physical_fragment:Om,lights_physical_pars_fragment:zm,lights_fragment_begin:Um,lights_fragment_maps:km,lights_fragment_end:Bm,logdepthbuf_fragment:Vm,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Hm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:jm,map_particle_fragment:qm,map_particle_pars_fragment:Ym,metalnessmap_fragment:Km,metalnessmap_pars_fragment:$m,morphcolor_vertex:Zm,morphnormal_vertex:Jm,morphtarget_pars_vertex:Qm,morphtarget_vertex:eg,normal_fragment_begin:tg,normal_fragment_maps:ng,normal_pars_fragment:ig,normal_pars_vertex:sg,normal_vertex:rg,normalmap_pars_fragment:og,clearcoat_normal_fragment_begin:ag,clearcoat_normal_fragment_maps:lg,clearcoat_pars_fragment:cg,iridescence_pars_fragment:ug,output_fragment:hg,packing:dg,premultiplied_alpha_fragment:fg,project_vertex:pg,dithering_fragment:mg,dithering_pars_fragment:gg,roughnessmap_fragment:_g,roughnessmap_pars_fragment:xg,shadowmap_pars_fragment:yg,shadowmap_pars_vertex:vg,shadowmap_vertex:Mg,shadowmask_pars_fragment:Sg,skinbase_vertex:bg,skinning_pars_vertex:wg,skinning_vertex:Tg,skinnormal_vertex:Eg,specularmap_fragment:Ag,specularmap_pars_fragment:Cg,tonemapping_fragment:Rg,tonemapping_pars_fragment:Lg,transmission_fragment:Ig,transmission_pars_fragment:Pg,uv_pars_fragment:Dg,uv_pars_vertex:Ng,uv_vertex:Fg,uv2_pars_fragment:Og,uv2_pars_vertex:zg,uv2_vertex:Ug,worldpos_vertex:kg,background_vert:Bg,background_frag:Vg,cube_vert:Gg,cube_frag:Hg,depth_vert:Wg,depth_frag:Xg,distanceRGBA_vert:jg,distanceRGBA_frag:qg,equirect_vert:Yg,equirect_frag:Kg,linedashed_vert:$g,linedashed_frag:Zg,meshbasic_vert:Jg,meshbasic_frag:Qg,meshlambert_vert:e_,meshlambert_frag:t_,meshmatcap_vert:n_,meshmatcap_frag:i_,meshnormal_vert:s_,meshnormal_frag:r_,meshphong_vert:o_,meshphong_frag:a_,meshphysical_vert:l_,meshphysical_frag:c_,meshtoon_vert:u_,meshtoon_frag:h_,points_vert:d_,points_frag:f_,shadow_vert:p_,shadow_frag:m_,sprite_vert:g_,sprite_frag:__},le={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ht},uv2Transform:{value:new Ht},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ht}}},Ln={basic:{uniforms:wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.fog,le.lights,{emissive:{value:new Se(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:wt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:wt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Se(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:wt([le.points,le.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:wt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:wt([le.common,le.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:wt([le.sprite,le.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},cube:{uniforms:wt([le.envmap,{opacity:{value:1}}]),vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:wt([le.common,le.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:wt([le.lights,le.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Ln.physical={uniforms:wt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ve(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};function x_(a,e,t,n,i,s){const r=new Se(0);let o=i===!0?0:1,l,c,u=null,h=0,d=null;function m(f,p){let _=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=e.get(v));const M=a.xr,S=M.getSession&&M.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?g(r,o):v&&v.isColor&&(g(v,1),_=!0),(a.autoClear||_)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Oo)?(c===void 0&&(c=new Dn(new Br(1,1,1),new ns({name:"BackgroundCubeMaterial",uniforms:Xs(Ln.cube.uniforms),vertexShader:Ln.cube.vertexShader,fragmentShader:Ln.cube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||h!==v.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,d=a.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Dn(new yl(2,2),new ns({name:"BackgroundMaterial",uniforms:Xs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||d!==a.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,d=a.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function g(f,p){t.buffers.color.setClear(f.r,f.g,f.b,p,s)}return{getClearColor:function(){return r},setClearColor:function(f,p=1){r.set(f),o=p,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(f){o=f,g(r,o)},render:m}}function y_(a,e,t,n){const i=a.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(D,U,O,V,H){let B=!1;if(r){const j=f(V,O,U);c!==j&&(c=j,m(c.object)),B=_(D,V,O,H),B&&v(D,V,O,H)}else{const j=U.wireframe===!0;(c.geometry!==V.id||c.program!==O.id||c.wireframe!==j)&&(c.geometry=V.id,c.program=O.id,c.wireframe=j,B=!0)}H!==null&&t.update(H,34963),(B||u)&&(u=!1,y(D,U,O,V),H!==null&&a.bindBuffer(34963,t.get(H).buffer))}function d(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?a.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?a.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function f(D,U,O){const V=O.wireframe===!0;let H=o[D.id];H===void 0&&(H={},o[D.id]=H);let B=H[U.id];B===void 0&&(B={},H[U.id]=B);let j=B[V];return j===void 0&&(j=p(d()),B[V]=j),j}function p(D){const U=[],O=[],V=[];for(let H=0;H<i;H++)U[H]=0,O[H]=0,V[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:V,object:D,attributes:{},index:null}}function _(D,U,O,V){const H=c.attributes,B=U.attributes;let j=0;const J=O.getAttributes();for(const Q in J)if(J[Q].location>=0){const he=H[Q];let pe=B[Q];if(pe===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor)),he===void 0||he.attribute!==pe||pe&&he.data!==pe.data)return!0;j++}return c.attributesNum!==j||c.index!==V}function v(D,U,O,V){const H={},B=U.attributes;let j=0;const J=O.getAttributes();for(const Q in J)if(J[Q].location>=0){let he=B[Q];he===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(he=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(he=D.instanceColor));const pe={};pe.attribute=he,he&&he.data&&(pe.data=he.data),H[Q]=pe,j++}c.attributes=H,c.attributesNum=j,c.index=V}function M(){const D=c.newAttributes;for(let U=0,O=D.length;U<O;U++)D[U]=0}function S(D){x(D,0)}function x(D,U){const O=c.newAttributes,V=c.enabledAttributes,H=c.attributeDivisors;O[D]=1,V[D]===0&&(a.enableVertexAttribArray(D),V[D]=1),H[D]!==U&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,U),H[D]=U)}function w(){const D=c.newAttributes,U=c.enabledAttributes;for(let O=0,V=U.length;O<V;O++)U[O]!==D[O]&&(a.disableVertexAttribArray(O),U[O]=0)}function C(D,U,O,V,H,B){n.isWebGL2===!0&&(O===5124||O===5125)?a.vertexAttribIPointer(D,U,O,H,B):a.vertexAttribPointer(D,U,O,V,H,B)}function y(D,U,O,V){if(n.isWebGL2===!1&&(D.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const H=V.attributes,B=O.getAttributes(),j=U.defaultAttributeValues;for(const J in B){const Q=B[J];if(Q.location>=0){let Z=H[J];if(Z===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){const he=Z.normalized,pe=Z.itemSize,q=t.get(Z);if(q===void 0)continue;const it=q.buffer,Ee=q.type,be=q.bytesPerElement;if(Z.isInterleavedBufferAttribute){const de=Z.data,ze=de.stride,Ce=Z.offset;if(de.isInstancedInterleavedBuffer){for(let _e=0;_e<Q.locationSize;_e++)x(Q.location+_e,de.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let _e=0;_e<Q.locationSize;_e++)S(Q.location+_e);a.bindBuffer(34962,it);for(let _e=0;_e<Q.locationSize;_e++)C(Q.location+_e,pe/Q.locationSize,Ee,he,ze*be,(Ce+pe/Q.locationSize*_e)*be)}else{if(Z.isInstancedBufferAttribute){for(let de=0;de<Q.locationSize;de++)x(Q.location+de,Z.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let de=0;de<Q.locationSize;de++)S(Q.location+de);a.bindBuffer(34962,it);for(let de=0;de<Q.locationSize;de++)C(Q.location+de,pe/Q.locationSize,Ee,he,pe*be,pe/Q.locationSize*de*be)}}else if(j!==void 0){const he=j[J];if(he!==void 0)switch(he.length){case 2:a.vertexAttrib2fv(Q.location,he);break;case 3:a.vertexAttrib3fv(Q.location,he);break;case 4:a.vertexAttrib4fv(Q.location,he);break;default:a.vertexAttrib1fv(Q.location,he)}}}}w()}function b(){K();for(const D in o){const U=o[D];for(const O in U){const V=U[O];for(const H in V)g(V[H].object),delete V[H];delete U[O]}delete o[D]}}function N(D){if(o[D.id]===void 0)return;const U=o[D.id];for(const O in U){const V=U[O];for(const H in V)g(V[H].object),delete V[H];delete U[O]}delete o[D.id]}function I(D){for(const U in o){const O=o[U];if(O[D.id]===void 0)continue;const V=O[D.id];for(const H in V)g(V[H].object),delete V[H];delete O[D.id]}}function K(){W(),u=!0,c!==l&&(c=l,m(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:W,dispose:b,releaseStatesOfGeometry:N,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:S,disableUnusedAttributes:w}}function v_(a,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,u){a.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,m;if(i)d=a,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,h),t.update(u,s,h)}this.setMode=r,this.render=o,this.renderInstances=l}function M_(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),d=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),f=a.getParameter(34921),p=a.getParameter(36347),_=a.getParameter(36348),v=a.getParameter(36349),M=d>0,S=r||e.has("OES_texture_float"),x=M&&S,w=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:M,floatFragmentTextures:S,floatVertexTextures:x,maxSamples:w}}function S_(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Ni,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,m){const g=h.length!==0||d||n!==0||i;return i=d,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,m){const g=h.clippingPlanes,f=h.clipIntersection,p=h.clipShadows,_=a.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const v=s?0:n,M=v*4;let S=_.clippingState||null;l.value=S,S=u(g,d,M,m);for(let x=0;x!==M;++x)S[x]=t[x];_.clippingState=S,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const f=h!==null?h.length:0;let p=null;if(f!==0){if(p=l.value,g!==!0||p===null){const _=m+f*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<_)&&(p=new Float32Array(_));for(let M=0,S=m;M!==f;++M,S+=4)r.copy(h[M]).applyMatrix4(v,o),r.normal.toArray(p,S),p[S+3]=r.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,p}}function b_(a){let e=new WeakMap;function t(r,o){return o===Mo?r.mapping=Bs:o===ka&&(r.mapping=Vs),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===Mo||o===ka)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new kp(l.height/2);return c.fromEquirectangularTexture(a,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class vl extends wh{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Is=4,Gc=[.125,.215,.35,.446,.526,.582],ki=20,va=new vl,Hc=new Se;let Ma=null;const Fi=(1+Math.sqrt(5))/2,Es=1/Fi,Wc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Fi,Es),new P(0,Fi,-Es),new P(Es,0,Fi),new P(-Es,0,Fi),new P(Fi,Es,0),new P(-Fi,Es,0)];class Xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ma=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ma),e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ma=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ut,minFilter:ut,generateMipmaps:!1,type:$n,format:vn,encoding:Si,depthBuffer:!1},i=jc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w_(s)),this._blurMaterial=T_(s,e,t)}return i}_compileMaterial(e){const t=new Dn(this._lodPlanes[0],e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,n,i){const o=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Hc),u.toneMapping=Jn,u.autoClear=!1;const m=new Hi({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),g=new Dn(new Br,m);let f=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,f=!0):(m.color.copy(Hc),f=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):v===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const M=this._cubeSize;co(i,v*M,_>2?M:0,M,M),u.setRenderTarget(i),f&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Bs||e.mapping===Vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Dn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;co(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Wc[(i-1)%Wc.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Dn(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ki-1),f=s/g,p=isFinite(s)?1+Math.floor(u*f):ki;p>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ki}`);const _=[];let v=0;for(let C=0;C<ki;++C){const y=C/f,b=Math.exp(-y*y/2);_.push(b),C===0?v+=b:C<p&&(v+=2*b)}for(let C=0;C<_.length;C++)_[C]=_[C]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=_,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const S=this._sizeLods[i],x=3*S*(i>M-Is?i-M+Is:0),w=4*(this._cubeSize-S);co(t,x,w,3*S,2*S),l.setRenderTarget(t),l.render(h,va)}}function w_(a){const e=[],t=[],n=[];let i=a;const s=a-Is+1+Gc.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>a-Is?l=Gc[r-a+Is-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,f=3,p=2,_=1,v=new Float32Array(f*g*m),M=new Float32Array(p*g*m),S=new Float32Array(_*g*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,y=w>2?0:-1,b=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];v.set(b,f*g*w),M.set(d,p*g*w);const N=[w,w,w,w,w,w];S.set(N,_*g*w)}const x=new Fn;x.setAttribute("position",new en(v,f)),x.setAttribute("uv",new en(M,p)),x.setAttribute("faceIndex",new en(S,_)),e.push(x),i>Is&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jc(a,e,t){const n=new ts(a,e,t);return n.texture.mapping=Oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function T_(a,e,t){const n=new Float32Array(ki),i=new P(0,1,0);return new ns({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function qc(){return new ns({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Yc(){return new ns({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Ml(){return`

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
	`}function E_(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mo||l===ka,u=l===Bs||l===Vs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Xc(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Xc(a));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function A_(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function C_(a,e,t,n){const i={},s=new WeakMap;function r(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const m=h.morphAttributes;for(const g in m){const f=m[g];for(let p=0,_=f.length;p<_;p++)e.update(f[p],34962)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let f=0;if(m!==null){const v=m.array;f=m.version;for(let M=0,S=v.length;M<S;M+=3){const x=v[M+0],w=v[M+1],C=v[M+2];d.push(x,w,w,C,C,x)}}else{const v=g.array;f=g.version;for(let M=0,S=v.length/3-1;M<S;M+=3){const x=M+0,w=M+1,C=M+2;d.push(x,w,w,C,C,x)}}const p=new(_h(d)?bh:Sh)(d,1);p.version=f;const _=s.get(h);_&&e.remove(_),s.set(h,p)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function R_(a,e,t,n){const i=n.isWebGL2;let s;function r(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){a.drawElements(s,m,o,d*l),t.update(m,s,1)}function h(d,m,g){if(g===0)return;let f,p;if(i)f=a,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,m,o,d*l,g),t.update(m,s,g)}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=h}function L_(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function I_(a,e){return a[0]-e[0]}function P_(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Sa(a,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),a.divideScalar(t)}function D_(a,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new Xe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=f!==void 0?f.length:0;let _=s.get(u);if(_===void 0||_.count!==p){let O=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",O)};var g=O;_!==void 0&&_.texture.dispose();const S=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let N=0;S===!0&&(N=1),x===!0&&(N=2),w===!0&&(N=3);let I=u.attributes.position.count*N,K=1;I>e.maxTextureSize&&(K=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const W=new Float32Array(I*K*4*p),D=new Mh(W,I,K,p);D.type=yn,D.needsUpdate=!0;const U=N*4;for(let V=0;V<p;V++){const H=C[V],B=y[V],j=b[V],J=I*K*4*V;for(let Q=0;Q<H.count;Q++){const Z=Q*U;S===!0&&(r.fromBufferAttribute(H,Q),H.normalized===!0&&Sa(r,H),W[J+Z+0]=r.x,W[J+Z+1]=r.y,W[J+Z+2]=r.z,W[J+Z+3]=0),x===!0&&(r.fromBufferAttribute(B,Q),B.normalized===!0&&Sa(r,B),W[J+Z+4]=r.x,W[J+Z+5]=r.y,W[J+Z+6]=r.z,W[J+Z+7]=0),w===!0&&(r.fromBufferAttribute(j,Q),j.normalized===!0&&Sa(r,j),W[J+Z+8]=r.x,W[J+Z+9]=r.y,W[J+Z+10]=r.z,W[J+Z+11]=j.itemSize===4?r.w:1)}}_={count:p,texture:D,size:new ve(I,K)},s.set(u,_),u.addEventListener("dispose",O)}let v=0;for(let S=0;S<m.length;S++)v+=m[S];const M=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(a,"morphTargetBaseInfluence",M),d.getUniforms().setValue(a,"morphTargetInfluences",m),d.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const f=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==f){p=[];for(let x=0;x<f;x++)p[x]=[x,0];n[u.id]=p}for(let x=0;x<f;x++){const w=p[x];w[0]=x,w[1]=m[x]}p.sort(P_);for(let x=0;x<8;x++)x<f&&p[x][1]?(o[x][0]=p[x][0],o[x][1]=p[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(I_);const _=u.morphAttributes.position,v=u.morphAttributes.normal;let M=0;for(let x=0;x<8;x++){const w=o[x],C=w[0],y=w[1];C!==Number.MAX_SAFE_INTEGER&&y?(_&&u.getAttribute("morphTarget"+x)!==_[C]&&u.setAttribute("morphTarget"+x,_[C]),v&&u.getAttribute("morphNormal"+x)!==v[C]&&u.setAttribute("morphNormal"+x,v[C]),i[x]=y,M+=y):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),v&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const S=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(a,"morphTargetBaseInfluence",S),d.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function N_(a,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const Ah=new zt,Ch=new Mh,Rh=new wp,Lh=new Th,Kc=[],$c=[],Zc=new Float32Array(16),Jc=new Float32Array(9),Qc=new Float32Array(4);function er(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=Kc[i];if(s===void 0&&(s=new Float32Array(i),Kc[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function Ut(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function kt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Uo(a,e){let t=$c[e];t===void 0&&(t=new Int32Array(e),$c[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function F_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function O_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;a.uniform2fv(this.addr,e),kt(t,e)}}function z_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;a.uniform3fv(this.addr,e),kt(t,e)}}function U_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;a.uniform4fv(this.addr,e),kt(t,e)}}function k_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,n))return;Qc.set(n),a.uniformMatrix2fv(this.addr,!1,Qc),kt(t,n)}}function B_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,n))return;Jc.set(n),a.uniformMatrix3fv(this.addr,!1,Jc),kt(t,n)}}function V_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,n))return;Zc.set(n),a.uniformMatrix4fv(this.addr,!1,Zc),kt(t,n)}}function G_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function H_(a,e){const t=this.cache;Ut(t,e)||(a.uniform2iv(this.addr,e),kt(t,e))}function W_(a,e){const t=this.cache;Ut(t,e)||(a.uniform3iv(this.addr,e),kt(t,e))}function X_(a,e){const t=this.cache;Ut(t,e)||(a.uniform4iv(this.addr,e),kt(t,e))}function j_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function q_(a,e){const t=this.cache;Ut(t,e)||(a.uniform2uiv(this.addr,e),kt(t,e))}function Y_(a,e){const t=this.cache;Ut(t,e)||(a.uniform3uiv(this.addr,e),kt(t,e))}function K_(a,e){const t=this.cache;Ut(t,e)||(a.uniform4uiv(this.addr,e),kt(t,e))}function $_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ah,i)}function Z_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rh,i)}function J_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Lh,i)}function Q_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ch,i)}function e0(a){switch(a){case 5126:return F_;case 35664:return O_;case 35665:return z_;case 35666:return U_;case 35674:return k_;case 35675:return B_;case 35676:return V_;case 5124:case 35670:return G_;case 35667:case 35671:return H_;case 35668:case 35672:return W_;case 35669:case 35673:return X_;case 5125:return j_;case 36294:return q_;case 36295:return Y_;case 36296:return K_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return Q_}}function t0(a,e){a.uniform1fv(this.addr,e)}function n0(a,e){const t=er(e,this.size,2);a.uniform2fv(this.addr,t)}function i0(a,e){const t=er(e,this.size,3);a.uniform3fv(this.addr,t)}function s0(a,e){const t=er(e,this.size,4);a.uniform4fv(this.addr,t)}function r0(a,e){const t=er(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function o0(a,e){const t=er(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function a0(a,e){const t=er(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function l0(a,e){a.uniform1iv(this.addr,e)}function c0(a,e){a.uniform2iv(this.addr,e)}function u0(a,e){a.uniform3iv(this.addr,e)}function h0(a,e){a.uniform4iv(this.addr,e)}function d0(a,e){a.uniform1uiv(this.addr,e)}function f0(a,e){a.uniform2uiv(this.addr,e)}function p0(a,e){a.uniform3uiv(this.addr,e)}function m0(a,e){a.uniform4uiv(this.addr,e)}function g0(a,e,t){const n=e.length,i=Uo(t,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Ah,i[s])}function _0(a,e,t){const n=e.length,i=Uo(t,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Rh,i[s])}function x0(a,e,t){const n=e.length,i=Uo(t,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Lh,i[s])}function y0(a,e,t){const n=e.length,i=Uo(t,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Ch,i[s])}function v0(a){switch(a){case 5126:return t0;case 35664:return n0;case 35665:return i0;case 35666:return s0;case 35674:return r0;case 35675:return o0;case 35676:return a0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return u0;case 35669:case 35673:return h0;case 5125:return d0;case 36294:return f0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return y0}}class M0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=e0(t.type)}}class S0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=v0(t.type)}}class b0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function eu(a,e){a.seq.push(e),a.map[e.id]=e}function w0(a,e,t){const n=a.name,i=n.length;for(ba.lastIndex=0;;){const s=ba.exec(n),r=ba.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){eu(t,c===void 0?new M0(o,a,e):new S0(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new b0(o),eu(t,h)),t=h}}}class _o{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);w0(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function tu(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let T0=0;function E0(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function A0(a){switch(a){case Si:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function nu(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+E0(a.getShaderSource(e),r)}else return i}function C0(a,e){const t=A0(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function R0(a,e){let t;switch(e){case Ff:t="Linear";break;case Of:t="Reinhard";break;case zf:t="OptimizedCineon";break;case Uf:t="ACESFilmic";break;case kf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function L0(a){return[a.extensionDerivatives||!!a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gr).join(`
`)}function I0(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function P0(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function gr(a){return a!==""}function iu(a,e){return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function su(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const D0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(a){return a.replace(D0,N0)}function N0(a,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Xa(t)}const F0=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,O0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(a){return a.replace(O0,Ih).replace(F0,z0)}function z0(a,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Ih(a,e,t,n)}function Ih(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ou(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function U0(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===oh?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===df?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===mr&&(e="SHADOWMAP_TYPE_VSM"),e}function k0(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Bs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B0(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function V0(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case ch:e="ENVMAP_BLENDING_MULTIPLY";break;case Df:e="ENVMAP_BLENDING_MIX";break;case Nf:e="ENVMAP_BLENDING_ADD";break}return e}function G0(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function H0(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=U0(t),c=k0(t),u=B0(t),h=V0(t),d=G0(t),m=t.isWebGL2?"":L0(t),g=I0(s),f=i.createProgram();let p,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(gr).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(gr).join(`
`),_.length>0&&(_+=`
`)):(p=[ou(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),_=[m,ou(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?Re.tonemapping_pars_fragment:"",t.toneMapping!==Jn?R0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,C0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),r=Xa(r),r=iu(r,t),r=su(r,t),o=Xa(o),o=iu(o,t),o=su(o,t),r=ru(r),o=ru(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=v+p+r,S=v+_+o,x=tu(i,35633,M),w=tu(i,35632,S);if(i.attachShader(f,x),i.attachShader(f,w),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),a.debug.checkShaderErrors){const b=i.getProgramInfoLog(f).trim(),N=i.getShaderInfoLog(x).trim(),I=i.getShaderInfoLog(w).trim();let K=!0,W=!0;if(i.getProgramParameter(f,35714)===!1){K=!1;const D=nu(i,x,"vertex"),U=nu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+b+`
`+D+`
`+U)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(N===""||I==="")&&(W=!1);W&&(this.diagnostics={runnable:K,programLog:b,vertexShader:{log:N,prefix:p},fragmentShader:{log:I,prefix:_}})}i.deleteShader(x),i.deleteShader(w);let C;this.getUniforms=function(){return C===void 0&&(C=new _o(i,f)),C};let y;return this.getAttributes=function(){return y===void 0&&(y=P0(i,f)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=T0++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=x,this.fragmentShader=w,this}let W0=0;class X0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new j0(e);t.set(e,n)}return t.get(e)}}class j0{constructor(e){this.id=W0++,this.code=e,this.usedTimes=0}}function q0(a,e,t,n,i,s,r){const o=new _l,l=new X0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y,b,N,I,K){const W=I.fog,D=K.geometry,U=y.isMeshStandardMaterial?I.environment:null,O=(y.isMeshStandardMaterial?t:e).get(y.envMap||U),V=!!O&&O.mapping===Oo?O.image.height:null,H=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const B=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,j=B!==void 0?B.length:0;let J=0;D.morphAttributes.position!==void 0&&(J=1),D.morphAttributes.normal!==void 0&&(J=2),D.morphAttributes.color!==void 0&&(J=3);let Q,Z,he,pe;if(H){const ze=Ln[H];Q=ze.vertexShader,Z=ze.fragmentShader}else Q=y.vertexShader,Z=y.fragmentShader,l.update(y),he=l.getVertexShaderID(y),pe=l.getFragmentShaderID(y);const q=a.getRenderTarget(),it=y.alphaTest>0,Ee=y.clearcoat>0,be=y.iridescence>0;return{isWebGL2:u,shaderID:H,shaderName:y.type,vertexShader:Q,fragmentShader:Z,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:d,outputEncoding:q===null?a.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:Si,map:!!y.map,matcap:!!y.matcap,envMap:!!O,envMapMode:O&&O.mapping,envMapCubeUVHeight:V,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===op,tangentSpaceNormalMap:y.normalMapType===ml,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===We,clearcoat:Ee,clearcoatMap:Ee&&!!y.clearcoatMap,clearcoatRoughnessMap:Ee&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Ee&&!!y.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!y.iridescenceMap,iridescenceThicknessMap:be&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Ns,alphaMap:!!y.alphaMap,alphaTest:it,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!D.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!W,useFog:y.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:h,skinning:K.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:J,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:a.shadowMap.enabled&&N.length>0,shadowMapType:a.shadowMap.type,toneMapping:y.toneMapped?a.toneMapping:Jn,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qi,flipSided:y.side===Mn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)b.push(N),b.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(_(b,y),v(b,y),b.push(a.outputEncoding)),b.push(y.customProgramCacheKey),b.join()}function _(y,b){y.push(b.precision),y.push(b.outputEncoding),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.combine),y.push(b.vertexUvs),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.map&&o.enable(4),b.matcap&&o.enable(5),b.envMap&&o.enable(6),b.lightMap&&o.enable(7),b.aoMap&&o.enable(8),b.emissiveMap&&o.enable(9),b.bumpMap&&o.enable(10),b.normalMap&&o.enable(11),b.objectSpaceNormalMap&&o.enable(12),b.tangentSpaceNormalMap&&o.enable(13),b.clearcoat&&o.enable(14),b.clearcoatMap&&o.enable(15),b.clearcoatRoughnessMap&&o.enable(16),b.clearcoatNormalMap&&o.enable(17),b.iridescence&&o.enable(18),b.iridescenceMap&&o.enable(19),b.iridescenceThicknessMap&&o.enable(20),b.displacementMap&&o.enable(21),b.specularMap&&o.enable(22),b.roughnessMap&&o.enable(23),b.metalnessMap&&o.enable(24),b.gradientMap&&o.enable(25),b.alphaMap&&o.enable(26),b.alphaTest&&o.enable(27),b.vertexColors&&o.enable(28),b.vertexAlphas&&o.enable(29),b.vertexUvs&&o.enable(30),b.vertexTangents&&o.enable(31),b.uvsVertexOnly&&o.enable(32),b.fog&&o.enable(33),y.push(o.mask),o.disableAll(),b.useFog&&o.enable(0),b.flatShading&&o.enable(1),b.logarithmicDepthBuffer&&o.enable(2),b.skinning&&o.enable(3),b.morphTargets&&o.enable(4),b.morphNormals&&o.enable(5),b.morphColors&&o.enable(6),b.premultipliedAlpha&&o.enable(7),b.shadowMapEnabled&&o.enable(8),b.physicallyCorrectLights&&o.enable(9),b.doubleSided&&o.enable(10),b.flipSided&&o.enable(11),b.useDepthPacking&&o.enable(12),b.dithering&&o.enable(13),b.specularIntensityMap&&o.enable(14),b.specularColorMap&&o.enable(15),b.transmission&&o.enable(16),b.transmissionMap&&o.enable(17),b.thicknessMap&&o.enable(18),b.sheen&&o.enable(19),b.sheenColorMap&&o.enable(20),b.sheenRoughnessMap&&o.enable(21),b.decodeVideoTexture&&o.enable(22),b.opaque&&o.enable(23),y.push(o.mask)}function M(y){const b=g[y.type];let N;if(b){const I=Ln[b];N=Fp.clone(I.uniforms)}else N=y.uniforms;return N}function S(y,b){let N;for(let I=0,K=c.length;I<K;I++){const W=c[I];if(W.cacheKey===b){N=W,++N.usedTimes;break}}return N===void 0&&(N=new H0(a,b,y,s),c.push(N)),N}function x(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function w(y){l.remove(y)}function C(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:M,acquireProgram:S,releaseProgram:x,releaseShaderCache:w,programs:c,dispose:C}}function Y0(){let a=new WeakMap;function e(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function t(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function K0(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function au(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function lu(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(h,d,m,g,f,p){let _=a[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:f,group:p},a[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=f,_.group=p),e++,_}function o(h,d,m,g,f,p){const _=r(h,d,m,g,f,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(h,d,m,g,f,p){const _=r(h,d,m,g,f,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||K0),n.length>1&&n.sort(d||au),i.length>1&&i.sort(d||au)}function u(){for(let h=e,d=a.length;h<d;h++){const m=a[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function $0(){let a=new WeakMap;function e(n,i){let s;return a.has(n)===!1?(s=new lu,a.set(n,[s])):i>=a.get(n).length?(s=new lu,a.get(n).push(s)):s=a.get(n)[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Z0(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Se};break;case"SpotLight":t={position:new P,direction:new P,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new P,halfWidth:new P,halfHeight:new P};break}return a[e.id]=t,t}}}function J0(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Q0=0;function ex(a,e){return(e.castShadow?1:0)-(a.castShadow?1:0)}function tx(a,e){const t=new Z0,n=J0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new P);const s=new P,r=new Pe,o=new Pe;function l(u,h){let d=0,m=0,g=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,p=0,_=0,v=0,M=0,S=0,x=0,w=0;u.sort(ex);const C=h!==!0?Math.PI:1;for(let b=0,N=u.length;b<N;b++){const I=u[b],K=I.color,W=I.intensity,D=I.distance,U=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=K.r*W*C,m+=K.g*W*C,g+=K.b*W*C;else if(I.isLightProbe)for(let O=0;O<9;O++)i.probe[O].addScaledVector(I.sh.coefficients[O],W);else if(I.isDirectionalLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*C),I.castShadow){const V=I.shadow,H=n.get(I);H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=U,i.directionalShadowMatrix[f]=I.shadow.matrix,S++}i.directional[f]=O,f++}else if(I.isSpotLight){const O=t.get(I);if(O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(K).multiplyScalar(W*C),O.distance=D,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,I.castShadow){const V=I.shadow,H=n.get(I);H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=U,i.spotShadowMatrix[_]=I.shadow.matrix,w++}i.spot[_]=O,_++}else if(I.isRectAreaLight){const O=t.get(I);O.color.copy(K).multiplyScalar(W),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=O,v++}else if(I.isPointLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*C),O.distance=I.distance,O.decay=I.decay,I.castShadow){const V=I.shadow,H=n.get(I);H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,i.pointShadow[p]=H,i.pointShadowMap[p]=U,i.pointShadowMatrix[p]=I.shadow.matrix,x++}i.point[p]=O,p++}else if(I.isHemisphereLight){const O=t.get(I);O.skyColor.copy(I.color).multiplyScalar(W*C),O.groundColor.copy(I.groundColor).multiplyScalar(W*C),i.hemi[M]=O,M++}}v>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const y=i.hash;(y.directionalLength!==f||y.pointLength!==p||y.spotLength!==_||y.rectAreaLength!==v||y.hemiLength!==M||y.numDirectionalShadows!==S||y.numPointShadows!==x||y.numSpotShadows!==w)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=v,i.point.length=p,i.hemi.length=M,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotShadowMatrix.length=w,y.directionalLength=f,y.pointLength=p,y.spotLength=_,y.rectAreaLength=v,y.hemiLength=M,y.numDirectionalShadows=S,y.numPointShadows=x,y.numSpotShadows=w,i.version=Q0++)}function c(u,h){let d=0,m=0,g=0,f=0,p=0;const _=h.matrixWorldInverse;for(let v=0,M=u.length;v<M;v++){const S=u[v];if(S.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),d++}else if(S.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),g++}else if(S.isRectAreaLight){const x=i.rectArea[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),o.identity(),r.copy(S.matrixWorld),r.premultiply(_),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),f++}else if(S.isPointLight){const x=i.point[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),m++}else if(S.isHemisphereLight){const x=i.hemi[p];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function cu(a,e){const t=new tx(a,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function nx(a,e){let t=new WeakMap;function n(s,r=0){let o;return t.has(s)===!1?(o=new cu(a,e),t.set(s,[o])):r>=t.get(s).length?(o=new cu(a,e),t.get(s).push(o)):o=t.get(s)[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class ix extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sx extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
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
}`;function ax(a,e,t){let n=new xl;const i=new ve,s=new ve,r=new Xe,o=new ix({depthPacking:rp}),l=new sx,c={},u=t.maxTextureSize,h={0:Mn,1:ks,2:Qi},d=new ns({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:rx,fragmentShader:ox}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Fn;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Dn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oh,this.render=function(S,x,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const C=a.getRenderTarget(),y=a.getActiveCubeFace(),b=a.getActiveMipmapLevel(),N=a.state;N.setBlending(yi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let I=0,K=S.length;I<K;I++){const W=S[I],D=W.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const U=D.getFrameExtents();if(i.multiply(U),s.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/U.x),i.x=s.x*U.x,D.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/U.y),i.y=s.y*U.y,D.mapSize.y=s.y)),D.map===null){const V=this.type!==mr?{minFilter:yt,magFilter:yt}:{};D.map=new ts(i.x,i.y,V),D.map.texture.name=W.name+".shadowMap",D.camera.updateProjectionMatrix()}a.setRenderTarget(D.map),a.clear();const O=D.getViewportCount();for(let V=0;V<O;V++){const H=D.getViewport(V);r.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),N.viewport(r),D.updateMatrices(W,V),n=D.getFrustum(),M(x,w,D.camera,W,this.type)}D.isPointLightShadow!==!0&&this.type===mr&&_(D,w),D.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(C,y,b)};function _(S,x){const w=e.update(f);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ts(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(x,null,w,d,f,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(x,null,w,m,f,null)}function v(S,x,w,C,y,b){let N=null;const I=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0?N=I:N=w.isPointLight===!0?l:o,a.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const K=N.uuid,W=x.uuid;let D=c[K];D===void 0&&(D={},c[K]=D);let U=D[W];U===void 0&&(U=N.clone(),D[W]=U),N=U}return N.visible=x.visible,N.wireframe=x.wireframe,b===mr?N.side=x.shadowSide!==null?x.shadowSide:x.side:N.side=x.shadowSide!==null?x.shadowSide:h[x.side],N.alphaMap=x.alphaMap,N.alphaTest=x.alphaTest,N.clipShadows=x.clipShadows,N.clippingPlanes=x.clippingPlanes,N.clipIntersection=x.clipIntersection,N.displacementMap=x.displacementMap,N.displacementScale=x.displacementScale,N.displacementBias=x.displacementBias,N.wireframeLinewidth=x.wireframeLinewidth,N.linewidth=x.linewidth,w.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(w.matrixWorld),N.nearDistance=C,N.farDistance=y),N}function M(S,x,w,C,y){if(S.visible===!1)return;if(S.layers.test(x.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===mr)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);const I=e.update(S),K=S.material;if(Array.isArray(K)){const W=I.groups;for(let D=0,U=W.length;D<U;D++){const O=W[D],V=K[O.materialIndex];if(V&&V.visible){const H=v(S,V,C,w.near,w.far,y);a.renderBufferDirect(w,null,I,H,S,O)}}}else if(K.visible){const W=v(S,K,C,w.near,w.far,y);a.renderBufferDirect(w,null,I,W,S,null)}}const N=S.children;for(let I=0,K=N.length;I<K;I++)M(N[I],x,w,C,y)}}function lx(a,e,t){const n=t.isWebGL2;function i(){let L=!1;const ie=new Xe;let te=null;const ge=new Xe(0,0,0,0);return{setMask:function(ce){te!==ce&&!L&&(a.colorMask(ce,ce,ce,ce),te=ce)},setLocked:function(ce){L=ce},setClear:function(ce,me,se,Me,Ve){Ve===!0&&(ce*=Me,me*=Me,se*=Me),ie.set(ce,me,se,Me),ge.equals(ie)===!1&&(a.clearColor(ce,me,se,Me),ge.copy(ie))},reset:function(){L=!1,te=null,ge.set(-1,0,0,0)}}}function s(){let L=!1,ie=null,te=null,ge=null;return{setTest:function(ce){ce?pe(2929):q(2929)},setMask:function(ce){ie!==ce&&!L&&(a.depthMask(ce),ie=ce)},setFunc:function(ce){if(te!==ce){if(ce)switch(ce){case Ef:a.depthFunc(512);break;case Af:a.depthFunc(519);break;case Cf:a.depthFunc(513);break;case Ua:a.depthFunc(515);break;case Rf:a.depthFunc(514);break;case Lf:a.depthFunc(518);break;case If:a.depthFunc(516);break;case Pf:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);te=ce}},setLocked:function(ce){L=ce},setClear:function(ce){ge!==ce&&(a.clearDepth(ce),ge=ce)},reset:function(){L=!1,ie=null,te=null,ge=null}}}function r(){let L=!1,ie=null,te=null,ge=null,ce=null,me=null,se=null,Me=null,Ve=null;return{setTest:function(Ge){L||(Ge?pe(2960):q(2960))},setMask:function(Ge){ie!==Ge&&!L&&(a.stencilMask(Ge),ie=Ge)},setFunc:function(Ge,Lt,wn){(te!==Ge||ge!==Lt||ce!==wn)&&(a.stencilFunc(Ge,Lt,wn),te=Ge,ge=Lt,ce=wn)},setOp:function(Ge,Lt,wn){(me!==Ge||se!==Lt||Me!==wn)&&(a.stencilOp(Ge,Lt,wn),me=Ge,se=Lt,Me=wn)},setLocked:function(Ge){L=Ge},setClear:function(Ge){Ve!==Ge&&(a.clearStencil(Ge),Ve=Ge)},reset:function(){L=!1,ie=null,te=null,ge=null,ce=null,me=null,se=null,Me=null,Ve=null}}}const o=new i,l=new s,c=new r;let u={},h={},d=new WeakMap,m=[],g=null,f=!1,p=null,_=null,v=null,M=null,S=null,x=null,w=null,C=!1,y=null,b=null,N=null,I=null,K=null;const W=a.getParameter(35661);let D=!1,U=0;const O=a.getParameter(7938);O.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(O)[1]),D=U>=1):O.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),D=U>=2);let V=null,H={};const B=a.getParameter(3088),j=a.getParameter(2978),J=new Xe().fromArray(B),Q=new Xe().fromArray(j);function Z(L,ie,te){const ge=new Uint8Array(4),ce=a.createTexture();a.bindTexture(L,ce),a.texParameteri(L,10241,9728),a.texParameteri(L,10240,9728);for(let me=0;me<te;me++)a.texImage2D(ie+me,0,6408,1,1,0,6408,5121,ge);return ce}const he={};he[3553]=Z(3553,3553,1),he[34067]=Z(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pe(2929),l.setFunc(Ua),at(!1),ht(nc),pe(2884),Ce(yi);function pe(L){u[L]!==!0&&(a.enable(L),u[L]=!0)}function q(L){u[L]!==!1&&(a.disable(L),u[L]=!1)}function it(L,ie){return h[L]!==ie?(a.bindFramebuffer(L,ie),h[L]=ie,n&&(L===36009&&(h[36160]=ie),L===36160&&(h[36009]=ie)),!0):!1}function Ee(L,ie){let te=m,ge=!1;if(L)if(te=d.get(ie),te===void 0&&(te=[],d.set(ie,te)),L.isWebGLMultipleRenderTargets){const ce=L.texture;if(te.length!==ce.length||te[0]!==36064){for(let me=0,se=ce.length;me<se;me++)te[me]=36064+me;te.length=ce.length,ge=!0}}else te[0]!==36064&&(te[0]=36064,ge=!0);else te[0]!==1029&&(te[0]=1029,ge=!0);ge&&(t.isWebGL2?a.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function be(L){return g!==L?(a.useProgram(L),g=L,!0):!1}const de={[Cs]:32774,[mf]:32778,[gf]:32779};if(n)de[oc]=32775,de[ac]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(de[oc]=L.MIN_EXT,de[ac]=L.MAX_EXT)}const ze={[_f]:0,[xf]:1,[yf]:768,[ah]:770,[Tf]:776,[bf]:774,[Mf]:772,[vf]:769,[lh]:771,[wf]:775,[Sf]:773};function Ce(L,ie,te,ge,ce,me,se,Me){if(L===yi){f===!0&&(q(3042),f=!1);return}if(f===!1&&(pe(3042),f=!0),L!==pf){if(L!==p||Me!==C){if((_!==Cs||S!==Cs)&&(a.blendEquation(32774),_=Cs,S=Cs),Me)switch(L){case Ns:a.blendFuncSeparate(1,771,1,771);break;case ic:a.blendFunc(1,1);break;case sc:a.blendFuncSeparate(0,769,0,1);break;case rc:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ns:a.blendFuncSeparate(770,771,1,771);break;case ic:a.blendFunc(770,1);break;case sc:a.blendFuncSeparate(0,769,0,1);break;case rc:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,M=null,x=null,w=null,p=L,C=Me}return}ce=ce||ie,me=me||te,se=se||ge,(ie!==_||ce!==S)&&(a.blendEquationSeparate(de[ie],de[ce]),_=ie,S=ce),(te!==v||ge!==M||me!==x||se!==w)&&(a.blendFuncSeparate(ze[te],ze[ge],ze[me],ze[se]),v=te,M=ge,x=me,w=se),p=L,C=null}function _e(L,ie){L.side===Qi?q(2884):pe(2884);let te=L.side===Mn;ie&&(te=!te),at(te),L.blending===Ns&&L.transparent===!1?Ce(yi):Ce(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const ge=L.stencilWrite;c.setTest(ge),ge&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Yt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?pe(32926):q(32926)}function at(L){y!==L&&(L?a.frontFace(2304):a.frontFace(2305),y=L)}function ht(L){L!==uf?(pe(2884),L!==b&&(L===nc?a.cullFace(1029):L===hf?a.cullFace(1028):a.cullFace(1032))):q(2884),b=L}function xt(L){L!==N&&(D&&a.lineWidth(L),N=L)}function Yt(L,ie,te){L?(pe(32823),(I!==ie||K!==te)&&(a.polygonOffset(ie,te),I=ie,K=te)):q(32823)}function lt(L){L?pe(3089):q(3089)}function Be(L){L===void 0&&(L=33984+W-1),V!==L&&(a.activeTexture(L),V=L)}function sn(L,ie){V===null&&Be();let te=H[V];te===void 0&&(te={type:void 0,texture:void 0},H[V]=te),(te.type!==L||te.texture!==ie)&&(a.bindTexture(L,ie||he[L]),te.type=L,te.texture=ie)}function rn(){const L=H[V];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function R(){try{a.compressedTexImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function T(){try{a.texSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{a.texSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{a.texStorage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{a.texStorage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{a.texImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function E(){try{a.texImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(L){J.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),J.copy(L))}function oe(L){Q.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),Q.copy(L))}function ne(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},V=null,H={},h={},d=new WeakMap,m=[],g=null,f=!1,p=null,_=null,v=null,M=null,S=null,x=null,w=null,C=!1,y=null,b=null,N=null,I=null,K=null,J.set(0,0,a.canvas.width,a.canvas.height),Q.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:pe,disable:q,bindFramebuffer:it,drawBuffers:Ee,useProgram:be,setBlending:Ce,setMaterial:_e,setFlipSided:at,setCullFace:ht,setLineWidth:xt,setPolygonOffset:Yt,setScissorTest:lt,activeTexture:Be,bindTexture:sn,unbindTexture:rn,compressedTexImage2D:R,texImage2D:xe,texImage3D:E,texStorage2D:re,texStorage3D:ue,texSubImage2D:T,texSubImage3D:X,compressedTexSubImage2D:ee,scissor:$,viewport:oe,reset:ne}}function cx(a,e,t,n,i,s,r){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,T){return _?new OffscreenCanvas(R,T):Ar("canvas")}function M(R,T,X,ee){let re=1;if((R.width>ee||R.height>ee)&&(re=ee/Math.max(R.width,R.height)),re<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ue=T?wo:Math.floor,xe=ue(re*R.width),E=ue(re*R.height);f===void 0&&(f=v(xe,E));const $=X?v(xe,E):f;return $.width=xe,$.height=E,$.getContext("2d").drawImage(R,0,0,xe,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+xe+"x"+E+")."),$}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function S(R){return Wa(R.width)&&Wa(R.height)}function x(R){return o?!1:R.wrapS!==Vt||R.wrapT!==Vt||R.minFilter!==yt&&R.minFilter!==ut}function w(R,T){return R.generateMipmaps&&T&&R.minFilter!==yt&&R.minFilter!==ut}function C(R){a.generateMipmap(R)}function y(R,T,X,ee,re=!1){if(o===!1)return T;if(R!==null){if(a[R]!==void 0)return a[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue=T;return T===6403&&(X===5126&&(ue=33326),X===5131&&(ue=33325),X===5121&&(ue=33321)),T===33319&&(X===5126&&(ue=33328),X===5131&&(ue=33327),X===5121&&(ue=33323)),T===6408&&(X===5126&&(ue=34836),X===5131&&(ue=34842),X===5121&&(ue=ee===We&&re===!1?35907:32856),X===32819&&(ue=32854),X===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function b(R,T,X){return w(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==yt&&R.minFilter!==ut?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function N(R){return R===yt||R===Ba||R===Va?9728:9729}function I(R){const T=R.target;T.removeEventListener("dispose",I),W(T),T.isVideoTexture&&g.delete(T)}function K(R){const T=R.target;T.removeEventListener("dispose",K),U(T)}function W(R){const T=n.get(R);if(T.__webglInit===void 0)return;const X=R.source,ee=p.get(X);if(ee){const re=ee[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&D(R),Object.keys(ee).length===0&&p.delete(X)}n.remove(R)}function D(R){const T=n.get(R);a.deleteTexture(T.__webglTexture);const X=R.source,ee=p.get(X);delete ee[T.__cacheKey],r.memory.textures--}function U(R){const T=R.texture,X=n.get(R),ee=n.get(T);if(ee.__webglTexture!==void 0&&(a.deleteTexture(ee.__webglTexture),r.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)a.deleteFramebuffer(X.__webglFramebuffer[re]),X.__webglDepthbuffer&&a.deleteRenderbuffer(X.__webglDepthbuffer[re]);else{if(a.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&a.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&a.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let re=0;re<X.__webglColorRenderbuffer.length;re++)X.__webglColorRenderbuffer[re]&&a.deleteRenderbuffer(X.__webglColorRenderbuffer[re]);X.__webglDepthRenderbuffer&&a.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let re=0,ue=T.length;re<ue;re++){const xe=n.get(T[re]);xe.__webglTexture&&(a.deleteTexture(xe.__webglTexture),r.memory.textures--),n.remove(T[re])}n.remove(T),n.remove(R)}let O=0;function V(){O=0}function H(){const R=O;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),O+=1,R}function B(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.encoding),T.join()}function j(R,T){const X=n.get(R);if(R.isVideoTexture&&sn(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(X,R,T);return}}t.activeTexture(33984+T),t.bindTexture(3553,X.__webglTexture)}function J(R,T){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Ee(X,R,T);return}t.activeTexture(33984+T),t.bindTexture(35866,X.__webglTexture)}function Q(R,T){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Ee(X,R,T);return}t.activeTexture(33984+T),t.bindTexture(32879,X.__webglTexture)}function Z(R,T){const X=n.get(R);if(R.version>0&&X.__version!==R.version){be(X,R,T);return}t.activeTexture(33984+T),t.bindTexture(34067,X.__webglTexture)}const he={[Gs]:10497,[Vt]:33071,[So]:33648},pe={[yt]:9728,[Ba]:9984,[Va]:9986,[ut]:9729,[hh]:9985,[rs]:9987};function q(R,T,X){if(X?(a.texParameteri(R,10242,he[T.wrapS]),a.texParameteri(R,10243,he[T.wrapT]),(R===32879||R===35866)&&a.texParameteri(R,32882,he[T.wrapR]),a.texParameteri(R,10240,pe[T.magFilter]),a.texParameteri(R,10241,pe[T.minFilter])):(a.texParameteri(R,10242,33071),a.texParameteri(R,10243,33071),(R===32879||R===35866)&&a.texParameteri(R,32882,33071),(T.wrapS!==Vt||T.wrapT!==Vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(R,10240,N(T.magFilter)),a.texParameteri(R,10241,N(T.minFilter)),T.minFilter!==yt&&T.minFilter!==ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(T.type===yn&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===$n&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(a.texParameterf(R,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function it(R,T){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",I));const ee=T.source;let re=p.get(ee);re===void 0&&(re={},p.set(ee,re));const ue=B(T);if(ue!==R.__cacheKey){re[ue]===void 0&&(re[ue]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,X=!0),re[ue].usedTimes++;const xe=re[R.__cacheKey];xe!==void 0&&(re[R.__cacheKey].usedTimes--,xe.usedTimes===0&&D(T)),R.__cacheKey=ue,R.__webglTexture=re[ue].texture}return X}function Ee(R,T,X){let ee=3553;T.isDataArrayTexture&&(ee=35866),T.isData3DTexture&&(ee=32879);const re=it(R,T),ue=T.source;if(t.activeTexture(33984+X),t.bindTexture(ee,R.__webglTexture),ue.version!==ue.__currentVersion||re===!0){a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const xe=x(T)&&S(T.image)===!1;let E=M(T.image,xe,!1,u);E=rn(T,E);const $=S(E)||o,oe=s.convert(T.format,T.encoding);let ne=s.convert(T.type),L=y(T.internalFormat,oe,ne,T.encoding,T.isVideoTexture);q(ee,T,$);let ie;const te=T.mipmaps,ge=o&&T.isVideoTexture!==!0,ce=ue.__currentVersion===void 0||re===!0,me=b(T,E,$);if(T.isDepthTexture)L=6402,o?T.type===yn?L=36012:T.type===Vi?L=33190:T.type===Fs?L=35056:L=33189:T.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===qi&&L===6402&&T.type!==dh&&T.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Vi,ne=s.convert(T.type)),T.format===Hs&&L===6402&&(L=34041,T.type!==Fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Fs,ne=s.convert(T.type))),ce&&(ge?t.texStorage2D(3553,1,L,E.width,E.height):t.texImage2D(3553,0,L,E.width,E.height,0,oe,ne,null));else if(T.isDataTexture)if(te.length>0&&$){ge&&ce&&t.texStorage2D(3553,me,L,te[0].width,te[0].height);for(let se=0,Me=te.length;se<Me;se++)ie=te[se],ge?t.texSubImage2D(3553,se,0,0,ie.width,ie.height,oe,ne,ie.data):t.texImage2D(3553,se,L,ie.width,ie.height,0,oe,ne,ie.data);T.generateMipmaps=!1}else ge?(ce&&t.texStorage2D(3553,me,L,E.width,E.height),t.texSubImage2D(3553,0,0,0,E.width,E.height,oe,ne,E.data)):t.texImage2D(3553,0,L,E.width,E.height,0,oe,ne,E.data);else if(T.isCompressedTexture){ge&&ce&&t.texStorage2D(3553,me,L,te[0].width,te[0].height);for(let se=0,Me=te.length;se<Me;se++)ie=te[se],T.format!==vn?oe!==null?ge?t.compressedTexSubImage2D(3553,se,0,0,ie.width,ie.height,oe,ie.data):t.compressedTexImage2D(3553,se,L,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?t.texSubImage2D(3553,se,0,0,ie.width,ie.height,oe,ne,ie.data):t.texImage2D(3553,se,L,ie.width,ie.height,0,oe,ne,ie.data)}else if(T.isDataArrayTexture)ge?(ce&&t.texStorage3D(35866,me,L,E.width,E.height,E.depth),t.texSubImage3D(35866,0,0,0,0,E.width,E.height,E.depth,oe,ne,E.data)):t.texImage3D(35866,0,L,E.width,E.height,E.depth,0,oe,ne,E.data);else if(T.isData3DTexture)ge?(ce&&t.texStorage3D(32879,me,L,E.width,E.height,E.depth),t.texSubImage3D(32879,0,0,0,0,E.width,E.height,E.depth,oe,ne,E.data)):t.texImage3D(32879,0,L,E.width,E.height,E.depth,0,oe,ne,E.data);else if(T.isFramebufferTexture){if(ce)if(ge)t.texStorage2D(3553,me,L,E.width,E.height);else{let se=E.width,Me=E.height;for(let Ve=0;Ve<me;Ve++)t.texImage2D(3553,Ve,L,se,Me,0,oe,ne,null),se>>=1,Me>>=1}}else if(te.length>0&&$){ge&&ce&&t.texStorage2D(3553,me,L,te[0].width,te[0].height);for(let se=0,Me=te.length;se<Me;se++)ie=te[se],ge?t.texSubImage2D(3553,se,0,0,oe,ne,ie):t.texImage2D(3553,se,L,oe,ne,ie);T.generateMipmaps=!1}else ge?(ce&&t.texStorage2D(3553,me,L,E.width,E.height),t.texSubImage2D(3553,0,0,0,oe,ne,E)):t.texImage2D(3553,0,L,oe,ne,E);w(T,$)&&C(ee),ue.__currentVersion=ue.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function be(R,T,X){if(T.image.length!==6)return;const ee=it(R,T),re=T.source;if(t.activeTexture(33984+X),t.bindTexture(34067,R.__webglTexture),re.version!==re.__currentVersion||ee===!0){a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const ue=T.isCompressedTexture||T.image[0].isCompressedTexture,xe=T.image[0]&&T.image[0].isDataTexture,E=[];for(let se=0;se<6;se++)!ue&&!xe?E[se]=M(T.image[se],!1,!0,c):E[se]=xe?T.image[se].image:T.image[se],E[se]=rn(T,E[se]);const $=E[0],oe=S($)||o,ne=s.convert(T.format,T.encoding),L=s.convert(T.type),ie=y(T.internalFormat,ne,L,T.encoding),te=o&&T.isVideoTexture!==!0,ge=re.__currentVersion===void 0||ee===!0;let ce=b(T,$,oe);q(34067,T,oe);let me;if(ue){te&&ge&&t.texStorage2D(34067,ce,ie,$.width,$.height);for(let se=0;se<6;se++){me=E[se].mipmaps;for(let Me=0;Me<me.length;Me++){const Ve=me[Me];T.format!==vn?ne!==null?te?t.compressedTexSubImage2D(34069+se,Me,0,0,Ve.width,Ve.height,ne,Ve.data):t.compressedTexImage2D(34069+se,Me,ie,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?t.texSubImage2D(34069+se,Me,0,0,Ve.width,Ve.height,ne,L,Ve.data):t.texImage2D(34069+se,Me,ie,Ve.width,Ve.height,0,ne,L,Ve.data)}}}else{me=T.mipmaps,te&&ge&&(me.length>0&&ce++,t.texStorage2D(34067,ce,ie,E[0].width,E[0].height));for(let se=0;se<6;se++)if(xe){te?t.texSubImage2D(34069+se,0,0,0,E[se].width,E[se].height,ne,L,E[se].data):t.texImage2D(34069+se,0,ie,E[se].width,E[se].height,0,ne,L,E[se].data);for(let Me=0;Me<me.length;Me++){const Ge=me[Me].image[se].image;te?t.texSubImage2D(34069+se,Me+1,0,0,Ge.width,Ge.height,ne,L,Ge.data):t.texImage2D(34069+se,Me+1,ie,Ge.width,Ge.height,0,ne,L,Ge.data)}}else{te?t.texSubImage2D(34069+se,0,0,0,ne,L,E[se]):t.texImage2D(34069+se,0,ie,ne,L,E[se]);for(let Me=0;Me<me.length;Me++){const Ve=me[Me];te?t.texSubImage2D(34069+se,Me+1,0,0,ne,L,Ve.image[se]):t.texImage2D(34069+se,Me+1,ie,ne,L,Ve.image[se])}}}w(T,oe)&&C(34067),re.__currentVersion=re.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function de(R,T,X,ee,re){const ue=s.convert(X.format,X.encoding),xe=s.convert(X.type),E=y(X.internalFormat,ue,xe,X.encoding);n.get(T).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,E,T.width,T.height,T.depth,0,ue,xe,null):t.texImage2D(re,0,E,T.width,T.height,0,ue,xe,null)),t.bindFramebuffer(36160,R),Be(T)?d.framebufferTexture2DMultisampleEXT(36160,ee,re,n.get(X).__webglTexture,0,lt(T)):a.framebufferTexture2D(36160,ee,re,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(R,T,X){if(a.bindRenderbuffer(36161,R),T.depthBuffer&&!T.stencilBuffer){let ee=33189;if(X||Be(T)){const re=T.depthTexture;re&&re.isDepthTexture&&(re.type===yn?ee=36012:re.type===Vi&&(ee=33190));const ue=lt(T);Be(T)?d.renderbufferStorageMultisampleEXT(36161,ue,ee,T.width,T.height):a.renderbufferStorageMultisample(36161,ue,ee,T.width,T.height)}else a.renderbufferStorage(36161,ee,T.width,T.height);a.framebufferRenderbuffer(36160,36096,36161,R)}else if(T.depthBuffer&&T.stencilBuffer){const ee=lt(T);X&&Be(T)===!1?a.renderbufferStorageMultisample(36161,ee,35056,T.width,T.height):Be(T)?d.renderbufferStorageMultisampleEXT(36161,ee,35056,T.width,T.height):a.renderbufferStorage(36161,34041,T.width,T.height),a.framebufferRenderbuffer(36160,33306,36161,R)}else{const ee=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let re=0;re<ee.length;re++){const ue=ee[re],xe=s.convert(ue.format,ue.encoding),E=s.convert(ue.type),$=y(ue.internalFormat,xe,E,ue.encoding),oe=lt(T);X&&Be(T)===!1?a.renderbufferStorageMultisample(36161,oe,$,T.width,T.height):Be(T)?d.renderbufferStorageMultisampleEXT(36161,oe,$,T.width,T.height):a.renderbufferStorage(36161,$,T.width,T.height)}}a.bindRenderbuffer(36161,null)}function Ce(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const ee=n.get(T.depthTexture).__webglTexture,re=lt(T);if(T.depthTexture.format===qi)Be(T)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,re):a.framebufferTexture2D(36160,36096,3553,ee,0);else if(T.depthTexture.format===Hs)Be(T)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,re):a.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function _e(R){const T=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ce(T.__webglFramebuffer,R)}else if(X){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]=a.createRenderbuffer(),ze(T.__webglDepthbuffer[ee],R,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=a.createRenderbuffer(),ze(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(36160,null)}function at(R,T,X){const ee=n.get(R);T!==void 0&&de(ee.__webglFramebuffer,R,R.texture,36064,3553),X!==void 0&&_e(R)}function ht(R){const T=R.texture,X=n.get(R),ee=n.get(T);R.addEventListener("dispose",K),R.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=a.createTexture()),ee.__version=T.version,r.memory.textures++);const re=R.isWebGLCubeRenderTarget===!0,ue=R.isWebGLMultipleRenderTargets===!0,xe=S(R)||o;if(re){X.__webglFramebuffer=[];for(let E=0;E<6;E++)X.__webglFramebuffer[E]=a.createFramebuffer()}else{if(X.__webglFramebuffer=a.createFramebuffer(),ue)if(i.drawBuffers){const E=R.texture;for(let $=0,oe=E.length;$<oe;$++){const ne=n.get(E[$]);ne.__webglTexture===void 0&&(ne.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Be(R)===!1){const E=ue?T:[T];X.__webglMultisampledFramebuffer=a.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let $=0;$<E.length;$++){const oe=E[$];X.__webglColorRenderbuffer[$]=a.createRenderbuffer(),a.bindRenderbuffer(36161,X.__webglColorRenderbuffer[$]);const ne=s.convert(oe.format,oe.encoding),L=s.convert(oe.type),ie=y(oe.internalFormat,ne,L,oe.encoding),te=lt(R);a.renderbufferStorageMultisample(36161,te,ie,R.width,R.height),a.framebufferRenderbuffer(36160,36064+$,36161,X.__webglColorRenderbuffer[$])}a.bindRenderbuffer(36161,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=a.createRenderbuffer(),ze(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,ee.__webglTexture),q(34067,T,xe);for(let E=0;E<6;E++)de(X.__webglFramebuffer[E],R,T,36064,34069+E);w(T,xe)&&C(34067),t.unbindTexture()}else if(ue){const E=R.texture;for(let $=0,oe=E.length;$<oe;$++){const ne=E[$],L=n.get(ne);t.bindTexture(3553,L.__webglTexture),q(3553,ne,xe),de(X.__webglFramebuffer,R,ne,36064+$,3553),w(ne,xe)&&C(3553)}t.unbindTexture()}else{let E=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?E=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(E,ee.__webglTexture),q(E,T,xe),de(X.__webglFramebuffer,R,T,36064,E),w(T,xe)&&C(E),t.unbindTexture()}R.depthBuffer&&_e(R)}function xt(R){const T=S(R)||o,X=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ee=0,re=X.length;ee<re;ee++){const ue=X[ee];if(w(ue,T)){const xe=R.isWebGLCubeRenderTarget?34067:3553,E=n.get(ue).__webglTexture;t.bindTexture(xe,E),C(xe),t.unbindTexture()}}}function Yt(R){if(o&&R.samples>0&&Be(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],X=R.width,ee=R.height;let re=16384;const ue=[],xe=R.stencilBuffer?33306:36096,E=n.get(R),$=R.isWebGLMultipleRenderTargets===!0;if($)for(let oe=0;oe<T.length;oe++)t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,E.__webglFramebuffer),a.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,E.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,E.__webglFramebuffer);for(let oe=0;oe<T.length;oe++){ue.push(36064+oe),R.depthBuffer&&ue.push(xe);const ne=E.__ignoreDepthValues!==void 0?E.__ignoreDepthValues:!1;if(ne===!1&&(R.depthBuffer&&(re|=256),R.stencilBuffer&&(re|=1024)),$&&a.framebufferRenderbuffer(36008,36064,36161,E.__webglColorRenderbuffer[oe]),ne===!0&&(a.invalidateFramebuffer(36008,[xe]),a.invalidateFramebuffer(36009,[xe])),$){const L=n.get(T[oe]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,L,0)}a.blitFramebuffer(0,0,X,ee,0,0,X,ee,re,9728),m&&a.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),$)for(let oe=0;oe<T.length;oe++){t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+oe,36161,E.__webglColorRenderbuffer[oe]);const ne=n.get(T[oe]).__webglTexture;t.bindFramebuffer(36160,E.__webglFramebuffer),a.framebufferTexture2D(36009,36064+oe,3553,ne,0)}t.bindFramebuffer(36009,E.__webglMultisampledFramebuffer)}}function lt(R){return Math.min(h,R.samples)}function Be(R){const T=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function sn(R){const T=r.render.frame;g.get(R)!==T&&(g.set(R,T),R.update())}function rn(R,T){const X=R.encoding,ee=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Ha||X!==Si&&(X===We?o===!1?e.has("EXT_sRGB")===!0&&ee===vn?(R.format=Ha,R.minFilter=ut,R.generateMipmaps=!1):T=yh.sRGBToLinear(T):(ee!==vn||re!==es)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),T}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=J,this.setTexture3D=Q,this.setTextureCube=Z,this.rebindTextures=at,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Be}function ux(a,e,t){const n=t.isWebGL2;function i(s,r=null){let o;if(s===es)return 5121;if(s===Hf)return 32819;if(s===Wf)return 32820;if(s===Bf)return 5120;if(s===Vf)return 5122;if(s===dh)return 5123;if(s===Gf)return 5124;if(s===Vi)return 5125;if(s===yn)return 5126;if(s===$n)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Xf)return 6406;if(s===vn)return 6408;if(s===qf)return 6409;if(s===Yf)return 6410;if(s===qi)return 6402;if(s===Hs)return 34041;if(s===Kf)return 6403;if(s===jf)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Ha)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===$f)return 36244;if(s===Zf)return 33319;if(s===Jf)return 33320;if(s===Qf)return 36249;if(s===qo||s===Yo||s===Ko||s===$o)if(r===We)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===qo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===qo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ko)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$o)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===lc||s===cc||s===uc||s===hc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===lc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===uc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ep)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===dc||s===fc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===dc)return r===We?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===fc)return r===We?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===pc||s===mc||s===gc||s===_c||s===xc||s===yc||s===vc||s===Mc||s===Sc||s===bc||s===wc||s===Tc||s===Ec||s===Ac)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===pc)return r===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mc)return r===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gc)return r===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_c)return r===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xc)return r===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yc)return r===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vc)return r===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mc)return r===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sc)return r===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bc)return r===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wc)return r===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Tc)return r===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ec)return r===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ac)return r===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Cc)return r===We?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Fs?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class hx extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wi extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dx={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const f of e.hand.values()){const p=t.getJointPose(f,n);if(c.joints[f.jointName]===void 0){const v=new Wi;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[f.jointName]=v,c.add(v)}const _=c.joints[f.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}}class fx extends zt{constructor(e,t,n,i,s,r,o,l,c,u){if(u=u!==void 0?u:qi,u!==qi&&u!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qi&&(n=Vi),n===void 0&&u===Hs&&(n=Fs),super(null,i,s,r,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1}}class px extends Ei{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=null,c=null,u=null,h=null,d=null,m=null;const g=t.getContextAttributes();let f=null,p=null;const _=[],v=[],M=new Ft;M.layers.enable(1),M.viewport=new Xe;const S=new Ft;S.layers.enable(2),S.viewport=new Xe;const x=[M,S],w=new hx;w.layers.enable(1),w.layers.enable(2);let C=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=_[B];return j===void 0&&(j=new wa,_[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=_[B];return j===void 0&&(j=new wa,_[B]=j),j.getGripSpace()},this.getHand=function(B){let j=_[B];return j===void 0&&(j=new wa,_[B]=j),j.getHandSpace()};function b(B){const j=v.indexOf(B.inputSource);if(j===-1)return;const J=_[j];J!==void 0&&J.dispatchEvent({type:B.type,data:B.inputSource})}function N(){i.removeEventListener("select",b),i.removeEventListener("selectstart",b),i.removeEventListener("selectend",b),i.removeEventListener("squeeze",b),i.removeEventListener("squeezestart",b),i.removeEventListener("squeezeend",b),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",I);for(let B=0;B<_.length;B++){const j=v[B];j!==null&&(v[B]=null,_[B].disconnect(j))}C=null,y=null,e.setRenderTarget(f),d=null,h=null,u=null,i=null,p=null,H.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",b),i.addEventListener("selectstart",b),i.addEventListener("selectend",b),i.addEventListener("squeeze",b),i.addEventListener("squeezestart",b),i.addEventListener("squeezeend",b),i.addEventListener("end",N),i.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:d}),p=new ts(d.framebufferWidth,d.framebufferHeight,{format:vn,type:es,encoding:e.outputEncoding})}else{let j=null,J=null,Q=null;g.depth&&(Q=g.stencil?35056:33190,j=g.stencil?Hs:qi,J=g.stencil?Fs:Vi);const Z={colorFormat:32856,depthFormat:Q,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(Z),i.updateRenderState({layers:[h]}),p=new ts(h.textureWidth,h.textureHeight,{format:vn,type:es,depthTexture:new fx(h.textureWidth,h.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const he=e.properties.get(p);he.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,r=await i.requestReferenceSpace(o),H.setContext(i),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(B){for(let j=0;j<B.removed.length;j++){const J=B.removed[j],Q=v.indexOf(J);Q>=0&&(v[Q]=null,_[Q].dispatchEvent({type:"disconnected",data:J}))}for(let j=0;j<B.added.length;j++){const J=B.added[j];let Q=v.indexOf(J);if(Q===-1){for(let he=0;he<_.length;he++)if(he>=v.length){v.push(J),Q=he;break}else if(v[he]===null){v[he]=J,Q=he;break}if(Q===-1)break}const Z=_[Q];Z&&Z.dispatchEvent({type:"connected",data:J})}}const K=new P,W=new P;function D(B,j,J){K.setFromMatrixPosition(j.matrixWorld),W.setFromMatrixPosition(J.matrixWorld);const Q=K.distanceTo(W),Z=j.projectionMatrix.elements,he=J.projectionMatrix.elements,pe=Z[14]/(Z[10]-1),q=Z[14]/(Z[10]+1),it=(Z[9]+1)/Z[5],Ee=(Z[9]-1)/Z[5],be=(Z[8]-1)/Z[0],de=(he[8]+1)/he[0],ze=pe*be,Ce=pe*de,_e=Q/(-be+de),at=_e*-be;j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(at),B.translateZ(_e),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const ht=pe+_e,xt=q+_e,Yt=ze-at,lt=Ce+(Q-at),Be=it*q/xt*ht,sn=Ee*q/xt*ht;B.projectionMatrix.makePerspective(Yt,lt,Be,sn,ht,xt)}function U(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;w.near=S.near=M.near=B.near,w.far=S.far=M.far=B.far,(C!==w.near||y!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),C=w.near,y=w.far);const j=B.parent,J=w.cameras;U(w,j);for(let Z=0;Z<J.length;Z++)U(J[Z],j);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),B.position.copy(w.position),B.quaternion.copy(w.quaternion),B.scale.copy(w.scale),B.matrix.copy(w.matrix),B.matrixWorld.copy(w.matrixWorld);const Q=B.children;for(let Z=0,he=Q.length;Z<he;Z++)Q[Z].updateMatrixWorld(!0);J.length===2?D(w,M,S):w.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(B){h!==null&&(h.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)};let O=null;function V(B,j){if(c=j.getViewerPose(l||r),m=j,c!==null){const J=c.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Q=!1;J.length!==w.cameras.length&&(w.cameras.length=0,Q=!0);for(let Z=0;Z<J.length;Z++){const he=J[Z];let pe=null;if(d!==null)pe=d.getViewport(he);else{const it=u.getViewSubImage(h,he);pe=it.viewport,Z===0&&(e.setRenderTargetTextures(p,it.colorTexture,h.ignoreDepthValues?void 0:it.depthStencilTexture),e.setRenderTarget(p))}let q=x[Z];q===void 0&&(q=new Ft,q.layers.enable(Z),q.viewport=new Xe,x[Z]=q),q.matrix.fromArray(he.transform.matrix),q.projectionMatrix.fromArray(he.projectionMatrix),q.viewport.set(pe.x,pe.y,pe.width,pe.height),Z===0&&w.matrix.copy(q.matrix),Q===!0&&w.cameras.push(q)}}for(let J=0;J<_.length;J++){const Q=v[J],Z=_[J];Q!==null&&Z!==void 0&&Z.update(Q,j,l||r)}O&&O(B,j),m=null}const H=new Eh;H.setAnimationLoop(V),this.setAnimationLoop=function(B){O=B},this.dispose=function(){}}}function mx(a,e){function t(f,p){f.fogColor.value.copy(p.color),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,_,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),u(f,p)):p.isMeshPhongMaterial?(i(f,p),c(f,p)):p.isMeshStandardMaterial?(i(f,p),h(f,p),p.isMeshPhysicalMaterial&&d(f,p,M)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),g(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&r(f,p)):p.isPointsMaterial?o(f,p,_,v):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===Mn&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===Mn&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const S=a.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix));let M;p.aoMap?M=p.aoMap:p.lightMap&&(M=p.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uv2Transform.value.copy(M.matrix))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function r(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function o(f,p,_,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*_,f.scale.value=v*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let M;p.map?M=p.map:p.alphaMap&&(M=p.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uvTransform.value.copy(M.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,_){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Mn&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function gx(){const a=Ar("canvas");return a.style.display="block",a}function Ph(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:gx(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,r=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let h=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Si,this.physicallyCorrectLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const f=this;let p=!1,_=0,v=0,M=null,S=-1,x=null;const w=new Xe,C=new Xe;let y=null,b=e.width,N=e.height,I=1,K=null,W=null;const D=new Xe(0,0,b,N),U=new Xe(0,0,b,N);let O=!1;const V=new xl;let H=!1,B=!1,j=null;const J=new Pe,Q=new ve,Z=new P,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return M===null?I:1}let q=t;function it(A,z){for(let G=0;G<A.length;G++){const k=A[G],Y=e.getContext(k,z);if(Y!==null)return Y}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fl}`),e.addEventListener("webglcontextlost",L,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",te,!1),q===null){const z=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&z.shift(),q=it(z,A),q===null)throw it(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ee,be,de,ze,Ce,_e,at,ht,xt,Yt,lt,Be,sn,rn,R,T,X,ee,re,ue,xe,E,$;function oe(){Ee=new A_(q),be=new M_(q,Ee,a),Ee.init(be),E=new ux(q,Ee,be),de=new lx(q,Ee,be),ze=new L_,Ce=new Y0,_e=new cx(q,Ee,de,Ce,be,E,ze),at=new b_(f),ht=new E_(f),xt=new Gp(q,be),$=new y_(q,Ee,xt,be),Yt=new C_(q,xt,ze,$),lt=new N_(q,Yt,xt,ze),re=new D_(q,be,_e),T=new S_(Ce),Be=new q0(f,at,ht,Ee,be,$,T),sn=new mx(f,Ce),rn=new $0,R=new nx(Ee,be),ee=new x_(f,at,de,lt,u,r),X=new ax(f,lt,be),ue=new v_(q,Ee,ze,be),xe=new R_(q,Ee,ze,be),ze.programs=Be.programs,f.capabilities=be,f.extensions=Ee,f.properties=Ce,f.renderLists=rn,f.shadowMap=X,f.state=de,f.info=ze}oe();const ne=new px(f,q);this.xr=ne,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=Ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(A){A!==void 0&&(I=A,this.setSize(b,N,!1))},this.getSize=function(A){return A.set(b,N)},this.setSize=function(A,z,G){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=A,N=z,e.width=Math.floor(A*I),e.height=Math.floor(z*I),G!==!1&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(b*I,N*I).floor()},this.setDrawingBufferSize=function(A,z,G){b=A,N=z,I=G,e.width=Math.floor(A*G),e.height=Math.floor(z*G),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(D)},this.setViewport=function(A,z,G,k){A.isVector4?D.set(A.x,A.y,A.z,A.w):D.set(A,z,G,k),de.viewport(w.copy(D).multiplyScalar(I).floor())},this.getScissor=function(A){return A.copy(U)},this.setScissor=function(A,z,G,k){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,z,G,k),de.scissor(C.copy(U).multiplyScalar(I).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(A){de.setScissorTest(O=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){W=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(A=!0,z=!0,G=!0){let k=0;A&&(k|=16384),z&&(k|=256),G&&(k|=1024),q.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",te,!1),rn.dispose(),R.dispose(),Ce.dispose(),at.dispose(),ht.dispose(),lt.dispose(),$.dispose(),Be.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Ve),ne.removeEventListener("sessionend",Ge),j&&(j.dispose(),j=null),Lt.stop()};function L(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const A=ze.autoReset,z=X.enabled,G=X.autoUpdate,k=X.needsUpdate,Y=X.type;oe(),ze.autoReset=A,X.enabled=z,X.autoUpdate=G,X.needsUpdate=k,X.type=Y}function te(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ge(A){const z=A.target;z.removeEventListener("dispose",ge),ce(z)}function ce(A){me(A),Ce.remove(A)}function me(A){const z=Ce.get(A).programs;z!==void 0&&(z.forEach(function(G){Be.releaseProgram(G)}),A.isShaderMaterial&&Be.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,G,k,Y,ye){z===null&&(z=he);const we=Y.isMesh&&Y.matrixWorld.determinant()<0,Ae=rf(A,z,G,k,Y);de.setMaterial(k,we);let Te=G.index;const He=G.attributes.position;if(Te===null){if(He===void 0||He.count===0)return}else if(Te.count===0)return;let Ne=1;k.wireframe===!0&&(Te=Yt.getWireframeAttribute(G),Ne=2),$.setup(Y,k,Ae,G,Te);let Fe,et=ue;Te!==null&&(Fe=xt.get(Te),et=xe,et.setIndex(Fe));const Ci=Te!==null?Te.count:He.count,ls=G.drawRange.start*Ne,cs=G.drawRange.count*Ne,Tn=ye!==null?ye.start*Ne:0,Ue=ye!==null?ye.count*Ne:1/0,us=Math.max(ls,Tn),st=Math.min(Ci,ls+cs,Tn+Ue)-1,En=Math.max(0,st-us+1);if(En!==0){if(Y.isMesh)k.wireframe===!0?(de.setLineWidth(k.wireframeLinewidth*pe()),et.setMode(1)):et.setMode(4);else if(Y.isLine){let si=k.linewidth;si===void 0&&(si=1),de.setLineWidth(si*pe()),Y.isLineSegments?et.setMode(1):Y.isLineLoop?et.setMode(2):et.setMode(3)}else Y.isPoints?et.setMode(0):Y.isSprite&&et.setMode(4);if(Y.isInstancedMesh)et.renderInstances(us,En,Y.count);else if(G.isInstancedBufferGeometry){const si=Math.min(G.instanceCount,G._maxInstanceCount);et.renderInstances(us,En,si)}else et.render(us,En)}},this.compile=function(A,z){d=R.get(A),d.init(),g.push(d),A.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights(f.physicallyCorrectLights),A.traverse(function(G){const k=G.material;if(k)if(Array.isArray(k))for(let Y=0;Y<k.length;Y++){const ye=k[Y];Wo(ye,A,G)}else Wo(k,A,G)}),g.pop(),d=null};let se=null;function Me(A){se&&se(A)}function Ve(){Lt.stop()}function Ge(){Lt.start()}const Lt=new Eh;Lt.setAnimationLoop(Me),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(A){se=A,ne.setAnimationLoop(A),A===null?Lt.stop():Lt.start()},ne.addEventListener("sessionstart",Ve),ne.addEventListener("sessionend",Ge),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(z),z=ne.getCamera()),A.isScene===!0&&A.onBeforeRender(f,A,z,M),d=R.get(A,g.length),d.init(),g.push(d),J.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),V.setFromProjectionMatrix(J),B=this.localClippingEnabled,H=T.init(this.clippingPlanes,B,z),h=rn.get(A,m.length),h.init(),m.push(h),wn(A,z,0,f.sortObjects),h.finish(),f.sortObjects===!0&&h.sort(K,W),H===!0&&T.beginShadows();const G=d.state.shadowsArray;if(X.render(G,A,z),H===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(h,A),d.setupLights(f.physicallyCorrectLights),z.isArrayCamera){const k=z.cameras;for(let Y=0,ye=k.length;Y<ye;Y++){const we=k[Y];ec(h,A,we,we.viewport)}}else ec(h,A,z);M!==null&&(_e.updateMultisampleRenderTarget(M),_e.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(f,A,z),$.resetDefaultState(),S=-1,x=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function wn(A,z,G,k){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||V.intersectsSprite(A)){k&&Z.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);const we=lt.update(A),Ae=A.material;Ae.visible&&h.push(A,we,Ae,G,Z.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==ze.render.frame&&(A.skeleton.update(),A.skeleton.frame=ze.render.frame),!A.frustumCulled||V.intersectsObject(A))){k&&Z.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);const we=lt.update(A),Ae=A.material;if(Array.isArray(Ae)){const Te=we.groups;for(let He=0,Ne=Te.length;He<Ne;He++){const Fe=Te[He],et=Ae[Fe.materialIndex];et&&et.visible&&h.push(A,we,et,G,Z.z,Fe)}}else Ae.visible&&h.push(A,we,Ae,G,Z.z,null)}}const ye=A.children;for(let we=0,Ae=ye.length;we<Ae;we++)wn(ye[we],z,G,k)}function ec(A,z,G,k){const Y=A.opaque,ye=A.transmissive,we=A.transparent;d.setupLightsView(G),ye.length>0&&nf(Y,z,G),k&&de.viewport(w.copy(k)),Y.length>0&&Hr(Y,z,G),ye.length>0&&Hr(ye,z,G),we.length>0&&Hr(we,z,G),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function nf(A,z,G){const k=be.isWebGL2;j===null&&(j=new ts(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?$n:es,minFilter:rs,samples:k&&s===!0?4:0})),f.getDrawingBufferSize(Q),k?j.setSize(Q.x,Q.y):j.setSize(wo(Q.x),wo(Q.y));const Y=f.getRenderTarget();f.setRenderTarget(j),f.clear();const ye=f.toneMapping;f.toneMapping=Jn,Hr(A,z,G),f.toneMapping=ye,_e.updateMultisampleRenderTarget(j),_e.updateRenderTargetMipmap(j),f.setRenderTarget(Y)}function Hr(A,z,G){const k=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,ye=A.length;Y<ye;Y++){const we=A[Y],Ae=we.object,Te=we.geometry,He=k===null?we.material:k,Ne=we.group;Ae.layers.test(G.layers)&&sf(Ae,z,G,Te,He,Ne)}}function sf(A,z,G,k,Y,ye){A.onBeforeRender(f,z,G,k,Y,ye),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(f,z,G,k,A,ye),Y.transparent===!0&&Y.side===Qi?(Y.side=Mn,Y.needsUpdate=!0,f.renderBufferDirect(G,z,k,Y,A,ye),Y.side=ks,Y.needsUpdate=!0,f.renderBufferDirect(G,z,k,Y,A,ye),Y.side=Qi):f.renderBufferDirect(G,z,k,Y,A,ye),A.onAfterRender(f,z,G,k,Y,ye)}function Wo(A,z,G){z.isScene!==!0&&(z=he);const k=Ce.get(A),Y=d.state.lights,ye=d.state.shadowsArray,we=Y.state.version,Ae=Be.getParameters(A,Y.state,ye,z,G),Te=Be.getProgramCacheKey(Ae);let He=k.programs;k.environment=A.isMeshStandardMaterial?z.environment:null,k.fog=z.fog,k.envMap=(A.isMeshStandardMaterial?ht:at).get(A.envMap||k.environment),He===void 0&&(A.addEventListener("dispose",ge),He=new Map,k.programs=He);let Ne=He.get(Te);if(Ne!==void 0){if(k.currentProgram===Ne&&k.lightsStateVersion===we)return tc(A,Ae),Ne}else Ae.uniforms=Be.getUniforms(A),A.onBuild(G,Ae,f),A.onBeforeCompile(Ae,f),Ne=Be.acquireProgram(Ae,Te),He.set(Te,Ne),k.uniforms=Ae.uniforms;const Fe=k.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=T.uniform),tc(A,Ae),k.needsLights=af(A),k.lightsStateVersion=we,k.needsLights&&(Fe.ambientLightColor.value=Y.state.ambient,Fe.lightProbe.value=Y.state.probe,Fe.directionalLights.value=Y.state.directional,Fe.directionalLightShadows.value=Y.state.directionalShadow,Fe.spotLights.value=Y.state.spot,Fe.spotLightShadows.value=Y.state.spotShadow,Fe.rectAreaLights.value=Y.state.rectArea,Fe.ltc_1.value=Y.state.rectAreaLTC1,Fe.ltc_2.value=Y.state.rectAreaLTC2,Fe.pointLights.value=Y.state.point,Fe.pointLightShadows.value=Y.state.pointShadow,Fe.hemisphereLights.value=Y.state.hemi,Fe.directionalShadowMap.value=Y.state.directionalShadowMap,Fe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Fe.spotShadowMap.value=Y.state.spotShadowMap,Fe.spotShadowMatrix.value=Y.state.spotShadowMatrix,Fe.pointShadowMap.value=Y.state.pointShadowMap,Fe.pointShadowMatrix.value=Y.state.pointShadowMatrix);const et=Ne.getUniforms(),Ci=_o.seqWithValue(et.seq,Fe);return k.currentProgram=Ne,k.uniformsList=Ci,Ne}function tc(A,z){const G=Ce.get(A);G.outputEncoding=z.outputEncoding,G.instancing=z.instancing,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function rf(A,z,G,k,Y){z.isScene!==!0&&(z=he),_e.resetTextureUnits();const ye=z.fog,we=k.isMeshStandardMaterial?z.environment:null,Ae=M===null?f.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Si,Te=(k.isMeshStandardMaterial?ht:at).get(k.envMap||we),He=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ne=!!k.normalMap&&!!G.attributes.tangent,Fe=!!G.morphAttributes.position,et=!!G.morphAttributes.normal,Ci=!!G.morphAttributes.color,ls=k.toneMapped?f.toneMapping:Jn,cs=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Tn=cs!==void 0?cs.length:0,Ue=Ce.get(k),us=d.state.lights;if(H===!0&&(B===!0||A!==x)){const An=A===x&&k.id===S;T.setState(k,A,An)}let st=!1;k.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==us.state.version||Ue.outputEncoding!==Ae||Y.isInstancedMesh&&Ue.instancing===!1||!Y.isInstancedMesh&&Ue.instancing===!0||Y.isSkinnedMesh&&Ue.skinning===!1||!Y.isSkinnedMesh&&Ue.skinning===!0||Ue.envMap!==Te||k.fog===!0&&Ue.fog!==ye||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==T.numPlanes||Ue.numIntersection!==T.numIntersection)||Ue.vertexAlphas!==He||Ue.vertexTangents!==Ne||Ue.morphTargets!==Fe||Ue.morphNormals!==et||Ue.morphColors!==Ci||Ue.toneMapping!==ls||be.isWebGL2===!0&&Ue.morphTargetsCount!==Tn)&&(st=!0):(st=!0,Ue.__version=k.version);let En=Ue.currentProgram;st===!0&&(En=Wo(k,z,Y));let si=!1,or=!1,Xo=!1;const It=En.getUniforms(),ar=Ue.uniforms;if(de.useProgram(En.program)&&(si=!0,or=!0,Xo=!0),k.id!==S&&(S=k.id,or=!0),si||x!==A){if(It.setValue(q,"projectionMatrix",A.projectionMatrix),be.logarithmicDepthBuffer&&It.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),x!==A&&(x=A,or=!0,Xo=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const An=It.map.cameraPosition;An!==void 0&&An.setValue(q,Z.setFromMatrixPosition(A.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&It.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||Y.isSkinnedMesh)&&It.setValue(q,"viewMatrix",A.matrixWorldInverse)}if(Y.isSkinnedMesh){It.setOptional(q,Y,"bindMatrix"),It.setOptional(q,Y,"bindMatrixInverse");const An=Y.skeleton;An&&(be.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),It.setValue(q,"boneTexture",An.boneTexture,_e),It.setValue(q,"boneTextureSize",An.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const jo=G.morphAttributes;return(jo.position!==void 0||jo.normal!==void 0||jo.color!==void 0&&be.isWebGL2===!0)&&re.update(Y,G,k,En),(or||Ue.receiveShadow!==Y.receiveShadow)&&(Ue.receiveShadow=Y.receiveShadow,It.setValue(q,"receiveShadow",Y.receiveShadow)),or&&(It.setValue(q,"toneMappingExposure",f.toneMappingExposure),Ue.needsLights&&of(ar,Xo),ye&&k.fog===!0&&sn.refreshFogUniforms(ar,ye),sn.refreshMaterialUniforms(ar,k,I,N,j),_o.upload(q,Ue.uniformsList,ar,_e)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(_o.upload(q,Ue.uniformsList,ar,_e),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&It.setValue(q,"center",Y.center),It.setValue(q,"modelViewMatrix",Y.modelViewMatrix),It.setValue(q,"normalMatrix",Y.normalMatrix),It.setValue(q,"modelMatrix",Y.matrixWorld),En}function of(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function af(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,z,G){Ce.get(A.texture).__webglTexture=z,Ce.get(A.depthTexture).__webglTexture=G;const k=Ce.get(A);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){const G=Ce.get(A);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,G=0){M=A,_=z,v=G;let k=!0;if(A){const Te=Ce.get(A);Te.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),k=!1):Te.__webglFramebuffer===void 0?_e.setupRenderTarget(A):Te.__hasExternalTextures&&_e.rebindTextures(A,Ce.get(A.texture).__webglTexture,Ce.get(A.depthTexture).__webglTexture)}let Y=null,ye=!1,we=!1;if(A){const Te=A.texture;(Te.isData3DTexture||Te.isDataArrayTexture)&&(we=!0);const He=Ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Y=He[z],ye=!0):be.isWebGL2&&A.samples>0&&_e.useMultisampledRTT(A)===!1?Y=Ce.get(A).__webglMultisampledFramebuffer:Y=He,w.copy(A.viewport),C.copy(A.scissor),y=A.scissorTest}else w.copy(D).multiplyScalar(I).floor(),C.copy(U).multiplyScalar(I).floor(),y=O;if(de.bindFramebuffer(36160,Y)&&be.drawBuffers&&k&&de.drawBuffers(A,Y),de.viewport(w),de.scissor(C),de.setScissorTest(y),ye){const Te=Ce.get(A.texture);q.framebufferTexture2D(36160,36064,34069+z,Te.__webglTexture,G)}else if(we){const Te=Ce.get(A.texture),He=z||0;q.framebufferTextureLayer(36160,36064,Te.__webglTexture,G||0,He)}S=-1},this.readRenderTargetPixels=function(A,z,G,k,Y,ye,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae){de.bindFramebuffer(36160,Ae);try{const Te=A.texture,He=Te.format,Ne=Te.type;if(He!==vn&&E.convert(He)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ne===$n&&(Ee.has("EXT_color_buffer_half_float")||be.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ne!==es&&E.convert(Ne)!==q.getParameter(35738)&&!(Ne===yn&&(be.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-k&&G>=0&&G<=A.height-Y&&q.readPixels(z,G,k,Y,E.convert(He),E.convert(Ne),ye)}finally{const Te=M!==null?Ce.get(M).__webglFramebuffer:null;de.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(A,z,G=0){const k=Math.pow(2,-G),Y=Math.floor(z.image.width*k),ye=Math.floor(z.image.height*k);_e.setTexture2D(z,0),q.copyTexSubImage2D(3553,G,0,0,A.x,A.y,Y,ye),de.unbindTexture()},this.copyTextureToTexture=function(A,z,G,k=0){const Y=z.image.width,ye=z.image.height,we=E.convert(G.format),Ae=E.convert(G.type);_e.setTexture2D(G,0),q.pixelStorei(37440,G.flipY),q.pixelStorei(37441,G.premultiplyAlpha),q.pixelStorei(3317,G.unpackAlignment),z.isDataTexture?q.texSubImage2D(3553,k,A.x,A.y,Y,ye,we,Ae,z.image.data):z.isCompressedTexture?q.compressedTexSubImage2D(3553,k,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,we,z.mipmaps[0].data):q.texSubImage2D(3553,k,A.x,A.y,we,Ae,z.image),k===0&&G.generateMipmaps&&q.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(A,z,G,k,Y=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=A.max.x-A.min.x+1,we=A.max.y-A.min.y+1,Ae=A.max.z-A.min.z+1,Te=E.convert(k.format),He=E.convert(k.type);let Ne;if(k.isData3DTexture)_e.setTexture3D(k,0),Ne=32879;else if(k.isDataArrayTexture)_e.setTexture2DArray(k,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,k.flipY),q.pixelStorei(37441,k.premultiplyAlpha),q.pixelStorei(3317,k.unpackAlignment);const Fe=q.getParameter(3314),et=q.getParameter(32878),Ci=q.getParameter(3316),ls=q.getParameter(3315),cs=q.getParameter(32877),Tn=G.isCompressedTexture?G.mipmaps[0]:G.image;q.pixelStorei(3314,Tn.width),q.pixelStorei(32878,Tn.height),q.pixelStorei(3316,A.min.x),q.pixelStorei(3315,A.min.y),q.pixelStorei(32877,A.min.z),G.isDataTexture||G.isData3DTexture?q.texSubImage3D(Ne,Y,z.x,z.y,z.z,ye,we,Ae,Te,He,Tn.data):G.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Ne,Y,z.x,z.y,z.z,ye,we,Ae,Te,Tn.data)):q.texSubImage3D(Ne,Y,z.x,z.y,z.z,ye,we,Ae,Te,He,Tn),q.pixelStorei(3314,Fe),q.pixelStorei(32878,et),q.pixelStorei(3316,Ci),q.pixelStorei(3315,ls),q.pixelStorei(32877,cs),Y===0&&k.generateMipmaps&&q.generateMipmap(Ne),de.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?_e.setTextureCube(A,0):A.isData3DTexture?_e.setTexture3D(A,0):A.isDataArrayTexture?_e.setTexture2DArray(A,0):_e.setTexture2D(A,0),de.unbindTexture()},this.resetState=function(){_=0,v=0,M=null,de.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class _x extends Ph{}_x.prototype.isWebGL1Renderer=!0;class xx extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class yx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ga,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pt=new P;class Sl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const uu=new P,hu=new Xe,du=new Xe,vx=new P,fu=new Pe;class Mx extends Dn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Xe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;hu.fromBufferAttribute(i.attributes.skinIndex,e),du.fromBufferAttribute(i.attributes.skinWeight,e),uu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=du.getComponent(s);if(r!==0){const o=hu.getComponent(s);fu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(vx.copy(uu).applyMatrix4(fu),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Dh extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Nh extends zt{constructor(e=null,t=1,n=1,i,s,r,o,l,c=yt,u=yt,h,d){super(null,r,o,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pu=new Pe,Sx=new Pe;class bl{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:Sx;pu.multiplyMatrices(o,t[s]),pu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new bl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=gh(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Nh(t,e,e,vn,yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Dh),this.bones.push(r),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Fh extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mu=new P,gu=new P,_u=new Pe,Ta=new zo,uo=new Qs;class wl extends nt{constructor(e=new Fn,t=new Fh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)mu.fromBufferAttribute(t,i-1),gu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=mu.distanceTo(gu);e.setAttribute("lineDistance",new Qn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(i),uo.radius+=s,e.ray.intersectsSphere(uo)===!1)return;_u.copy(i).invert(),Ta.copy(e.ray).applyMatrix4(_u);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,u=new P,h=new P,d=new P,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const _=Math.max(0,r.start),v=Math.min(g.count,r.start+r.count);for(let M=_,S=v-1;M<S;M+=m){const x=g.getX(M),w=g.getX(M+1);if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,w),Ta.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,r.start),v=Math.min(p.count,r.start+r.count);for(let M=_,S=v-1;M<S;M+=m){if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,M+1),Ta.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const xu=new P,yu=new P;class bx extends wl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)xu.fromBufferAttribute(t,i),yu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xu.distanceTo(yu);e.setAttribute("lineDistance",new Qn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wx extends wl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Oh extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vu=new Pe,ja=new zo,ho=new Qs,fo=new P;class Tx extends nt{constructor(e=new Fn,t=new Oh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(i),ho.radius+=s,e.ray.intersectsSphere(ho)===!1)return;vu.copy(i).invert(),ja.copy(e.ray).applyMatrix4(vu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let g=d,f=m;g<f;g++){const p=c.getX(g);fo.fromBufferAttribute(h,p),Mu(fo,p,l,i,e,t,this)}}else{const d=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let g=d,f=m;g<f;g++)fo.fromBufferAttribute(h,g),Mu(fo,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Mu(a,e,t,n,i,s,r){const o=ja.distanceSqToPoint(a);if(o<t){const l=new P;ja.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:r})}}class ko extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class os extends ko{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Ke={arraySlice:function(a,e,t){return Ke.isTypedArray(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)},convertArray:function(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){function e(i,s){return a[i]-a[s]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(a,e,t){const n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[r++]=a[o+l]}return i},flattenJSON:function(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)},subclip:function(a,e,t,n,i=30){const s=a.clone();s.name=e;const r=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let m=0;m<c.times.length;++m){const g=c.times[m]*i;if(!(g<t||g>=n)){h.push(c.times[m]);for(let f=0;f<u;++f)d.push(c.values[m*u+f])}}h.length!==0&&(c.times=Ke.convertArray(h,c.times.constructor),c.values=Ke.convertArray(d,c.values.constructor),r.push(c))}s.tracks=r;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(a,e=0,t=a,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let r=0;r<i;++r){const o=t.tracks[r],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=a.tracks.find(function(_){return _.name===o.name&&_.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const m=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=m/3);const g=o.times.length-1;let f;if(s<=o.times[0]){const _=u,v=h-u;f=Ke.arraySlice(o.values,_,v)}else if(s>=o.times[g]){const _=g*h+u,v=_+h-u;f=Ke.arraySlice(o.values,_,v)}else{const _=o.createInterpolant(),v=u,M=h-u;_.evaluate(s),f=Ke.arraySlice(_.resultBuffer,v,M)}l==="quaternion"&&new Ot().fromArray(f).normalize().conjugate().toArray(f);const p=c.times.length;for(let _=0;_<p;++_){const v=_*m+d;if(l==="quaternion")Ot.multiplyQuaternionsFlat(c.values,v,f,0,c.values,v);else{const M=m-d*2;for(let S=0;S<M;++S)c.values[v+S]-=f[S]}}}return a.blendMode=ph,a}};class Vr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ex extends Vr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rs,endingEnd:Rs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ls:s=e,o=2*t-n;break;case bo:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ls:r=e,l=2*n-t;break;case bo:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),f=g*g,p=f*g,_=-d*p+2*d*f-d*g,v=(1+d)*p+(-1.5-2*d)*f+(-.5+d)*g+1,M=(-1-m)*p+(1.5+m)*f+.5*g,S=m*p-m*f;for(let x=0;x!==o;++x)s[x]=_*r[u+x]+v*r[c+x]+M*r[l+x]+S*r[h+x];return s}}class zh extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=r[c+d]*h+r[l+d]*u;return s}}class Ax extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class On{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ke.convertArray(t,this.TimeBufferType),this.values=Ke.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ke.convertArray(e.times,Array),values:Ke.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ax(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ex(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case Zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return Zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=Ke.arraySlice(n,s,r),this.values=Ke.arraySlice(this.values,s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&Ke.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Ke.arraySlice(this.times),t=Ke.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Zo,s=e.length-1;let r=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,m=h+n;for(let g=0;g!==n;++g){const f=t[h+g];if(f!==t[d+g]||f!==t[m+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];const h=o*n,d=r*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=Ke.arraySlice(e,0,r),this.values=Ke.arraySlice(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=Ke.arraySlice(this.times,0),t=Ke.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Ws;class tr extends On{}tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Tr;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Uh extends On{}Uh.prototype.ValueTypeName="color";class Cr extends On{}Cr.prototype.ValueTypeName="number";class Cx extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Ot.slerpFlat(s,0,r,c-o,r,c,l);return s}}class is extends On{InterpolantFactoryMethodLinear(e){return new Cx(this.times,this.values,this.getValueSize(),e)}}is.prototype.ValueTypeName="quaternion";is.prototype.DefaultInterpolation=Ws;is.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends On{}nr.prototype.ValueTypeName="string";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Tr;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Rr extends On{}Rr.prototype.ValueTypeName="vector";class qa{constructor(e,t=-1,n,i=pl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Lx(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(On.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Ke.getKeyframeOrder(l);l=Ke.sortedArray(l,1,u),c=Ke.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Cr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,m,g,f){if(m.length!==0){const p=[],_=[];Ke.flattenJSON(m,p,_,g),p.length!==0&&f.push(new h(d,p,_))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let f=0;f<d[g].morphTargets.length;f++)m[d[g].morphTargets[f]]=-1;for(const f in m){const p=[],_=[];for(let v=0;v!==d[g].morphTargets.length;++v){const M=d[g];p.push(M.time),_.push(M.morphTarget===f?1:0)}i.push(new Cr(".morphTargetInfluence["+f+"]",p,_))}l=m.length*r}else{const m=".bones["+t[h].name+"]";n(Rr,m+".position",d,"pos",i),n(is,m+".quaternion",d,"rot",i),n(Rr,m+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Rx(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cr;case"vector":case"vector2":case"vector3":case"vector4":return Rr;case"color":return Uh;case"quaternion":return is;case"bool":case"boolean":return tr;case"string":return nr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Lx(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Rx(a.type);if(a.times===void 0){const t=[],n=[];Ke.flattenJSON(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const js={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class kh{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,o),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Ix=new kh;class ir{constructor(e){this.manager=e!==void 0?e:Ix,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Hn={};class Tl extends ir{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=js.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Hn[e]!==void 0){Hn[e].push({onLoad:t,onProgress:n,onError:i});return}Hn[e]=[],Hn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Hn[e],h=c.body.getReader(),d=c.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0;let f=0;const p=new ReadableStream({start(_){v();function v(){h.read().then(({done:M,value:S})=>{if(M)_.close();else{f+=S.byteLength;const x=new ProgressEvent("progress",{lengthComputable:g,loaded:f,total:m});for(let w=0,C=u.length;w<C;w++){const y=u[w];y.onProgress&&y.onProgress(x)}_.enqueue(S),v()}})}}});return new Response(p)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{js.add(e,c);const u=Hn[e];delete Hn[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Hn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Hn[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Px extends ir{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=js.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=Ar("img");function l(){u(),js.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Dx extends ir{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new Nh,o=new Tl(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){const c=s.parse(l);!c||(c.image!==void 0?r.image=c.image:c.data!==void 0&&(r.image.width=c.width,r.image.height=c.height,r.image.data=c.data),r.wrapS=c.wrapS!==void 0?c.wrapS:Vt,r.wrapT=c.wrapT!==void 0?c.wrapT:Vt,r.magFilter=c.magFilter!==void 0?c.magFilter:ut,r.minFilter=c.minFilter!==void 0?c.minFilter:ut,r.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(r.encoding=c.encoding),c.flipY!==void 0&&(r.flipY=c.flipY),c.format!==void 0&&(r.format=c.format),c.type!==void 0&&(r.type=c.type),c.mipmaps!==void 0&&(r.mipmaps=c.mipmaps,r.minFilter=rs),c.mipmapCount===1&&(r.minFilter=ut),c.generateMipmaps!==void 0&&(r.generateMipmaps=c.generateMipmaps),r.needsUpdate=!0,t&&t(r,c))},n,i),r}}class Nx extends ir{constructor(e){super(e)}load(e,t,n,i){const s=new zt,r=new Px(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class El extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Su=new Pe,bu=new P,wu=new P;class Al{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xl,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(bu),wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wu),t.updateMatrixWorld(),Su.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Su),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fx extends Al{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Er*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ox extends El{constructor(e,t,n=0,i=Math.PI/3,s=0,r=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DefaultUp),this.updateMatrix(),this.target=new nt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.shadow=new Fx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Tu=new Pe,hr=new P,Ea=new P;class zx extends Al{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),hr.setFromMatrixPosition(e.matrixWorld),n.position.copy(hr),Ea.copy(n.position),Ea.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ea),n.updateMatrixWorld(),i.makeTranslation(-hr.x,-hr.y,-hr.z),Tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu)}}class Ux extends El{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new zx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kx extends Al{constructor(){super(new vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bh extends El{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DefaultUp),this.updateMatrix(),this.target=new nt,this.shadow=new kx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ki{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Bx extends ir{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=js.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){js.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class Vx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Eu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Eu(){return(typeof performance>"u"?Date:performance).now()}class Gx{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let o=0;o!==i;++o)n[s+o]=n[o];r=t}else{r+=t;const o=t/r;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){Ot.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const r=this._workIndex*s;Ot.multiplyQuaternionsFlat(e,r,e,t,e,n),Ot.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){const r=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*r+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){const o=t+r;e[o]=e[o]+e[n+r]*i}}}const Cl="\\[\\]\\.:\\/",Hx=new RegExp("["+Cl+"]","g"),Rl="[^"+Cl+"]",Wx="[^"+Cl.replace("\\.","")+"]",Xx=/((?:WC+[\/:])*)/.source.replace("WC",Rl),jx=/(WCOD+)?/.source.replace("WCOD",Wx),qx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl),Yx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl),Kx=new RegExp("^"+Xx+jx+qx+Yx+"$"),$x=["material","materials","bones"];class Zx{constructor(e,t,n){const i=n||ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ke{constructor(e,t,n){this.path=t,this.parsedPath=n||ke.parseTrackName(t),this.node=ke.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ke.Composite(e,t,n):new ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hx,"")}static parseTrackName(e){const t=Kx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);$x.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ke.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ke.Composite=Zx;ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray];ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Jx{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,r=s.length,o=new Array(r),l={endingStart:Rs,endingEnd:Rs};for(let c=0;c!==r;++c){const u=s[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=tp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,r=s/i,o=i/s;e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,r=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/r,c[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const r=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ph:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(r),c[u].accumulateAdditive(o);break;case pl:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(r),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const r=n===np;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===fh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ls,i.endingEnd=Ls):(e?i.endingStart=this.zeroSlopeAtStart?Ls:Rs:i.endingStart=bo,t?i.endingEnd=this.zeroSlopeAtEnd?Ls:Rs:i.endingEnd=bo)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const o=r.parameterPositions,l=r.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}const Qx=new Float32Array(1);class ey extends Ei{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=i[h],m=d.name;let g=u[m];if(g!==void 0)++g.referenceCount,r[h]=g;else{if(g=r[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,m));continue}const f=t&&t._propertyBindings[h].binding.parsedPath;g=new Gx(ke.create(n,m,f),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,m),r[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,o=r[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,o=r[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new zh(new Float32Array(2),new Float32Array(2),1,Qx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let r=typeof e=="string"?qa.findByName(i,e):e;const o=r!==null?r.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(r!==null?n=r.blendMode:n=pl),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const u=new Jx(this,r,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?qa.findByName(n,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,r);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let o=0,l=r.length;o!==l;++o){const c=r[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const o=n[r].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const r in s){const o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class ty{constructor(e,t,n=0,i=1/0){this.ray=new zo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new _l,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ya(e,this,n,t),n.sort(Au),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ya(e[i],this,n,t);return n.sort(Au),n}}function Au(a,e){return a.distance-e.distance}function Ya(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let s=0,r=i.length;s<r;s++)Ya(i[s],e,t,!0)}}class Cu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const{floatView:Vh,uint32View:Gh,baseTable:ny,shiftTable:iy,mantissaTable:sy,exponentTable:ry,offsetTable:oy}=ay();function ay(){const a=new ArrayBuffer(4),e=new Float32Array(a),t=new Uint32Array(a),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),r=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:r,offsetTable:o}}function ly(a){Math.abs(a)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),a=vt(a,-65504,65504),Vh[0]=a;const e=Gh[0],t=e>>23&511;return ny[t]+((e&8388607)>>iy[t])}function cy(a){const e=a>>10;return Gh[0]=sy[oy[e]+(a&1023)]+ry[e],Vh[0]}var po=Object.freeze({__proto__:null,toHalfFloat:ly,fromHalfFloat:cy});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);const Ru={type:"change"},Aa={type:"start"},Lu={type:"end"};class uy extends Ei{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hs.ROTATE,MIDDLE:hs.DOLLY,RIGHT:hs.PAN},this.touches={ONE:ds.ROTATE,TWO:ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",rn),this._domElementKeyEvents=E},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ru),n.update(),s=i.NONE},this.update=function(){const E=new P,$=new Ot().setFromUnitVectors(e.up,new P(0,1,0)),oe=$.clone().invert(),ne=new P,L=new Ot,ie=2*Math.PI;return function(){const ge=n.object.position;E.copy(ge).sub(n.target),E.applyQuaternion($),o.setFromVector3(E),n.autoRotate&&s===i.NONE&&b(C()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ce=n.minAzimuthAngle,me=n.maxAzimuthAngle;return isFinite(ce)&&isFinite(me)&&(ce<-Math.PI?ce+=ie:ce>Math.PI&&(ce-=ie),me<-Math.PI?me+=ie:me>Math.PI&&(me-=ie),ce<=me?o.theta=Math.max(ce,Math.min(me,o.theta)):o.theta=o.theta>(ce+me)/2?Math.max(ce,o.theta):Math.min(me,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),E.setFromSpherical(o),E.applyQuaternion(oe),ge.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ne.distanceToSquared(n.object.position)>r||8*(1-L.dot(n.object.quaternion))>r?(n.dispatchEvent(Ru),ne.copy(n.object.position),L.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",X),n.domElement.removeEventListener("pointerdown",at),n.domElement.removeEventListener("pointercancel",Yt),n.domElement.removeEventListener("wheel",sn),n.domElement.removeEventListener("pointermove",ht),n.domElement.removeEventListener("pointerup",xt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",rn)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,o=new Cu,l=new Cu;let c=1;const u=new P;let h=!1;const d=new ve,m=new ve,g=new ve,f=new ve,p=new ve,_=new ve,v=new ve,M=new ve,S=new ve,x=[],w={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function b(E){l.theta-=E}function N(E){l.phi-=E}const I=function(){const E=new P;return function(oe,ne){E.setFromMatrixColumn(ne,0),E.multiplyScalar(-oe),u.add(E)}}(),K=function(){const E=new P;return function(oe,ne){n.screenSpacePanning===!0?E.setFromMatrixColumn(ne,1):(E.setFromMatrixColumn(ne,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(oe),u.add(E)}}(),W=function(){const E=new P;return function(oe,ne){const L=n.domElement;if(n.object.isPerspectiveCamera){const ie=n.object.position;E.copy(ie).sub(n.target);let te=E.length();te*=Math.tan(n.object.fov/2*Math.PI/180),I(2*oe*te/L.clientHeight,n.object.matrix),K(2*ne*te/L.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(oe*(n.object.right-n.object.left)/n.object.zoom/L.clientWidth,n.object.matrix),K(ne*(n.object.top-n.object.bottom)/n.object.zoom/L.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(E){n.object.isPerspectiveCamera?c/=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*E)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(E){n.object.isPerspectiveCamera?c*=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/E)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(E){d.set(E.clientX,E.clientY)}function V(E){v.set(E.clientX,E.clientY)}function H(E){f.set(E.clientX,E.clientY)}function B(E){m.set(E.clientX,E.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const $=n.domElement;b(2*Math.PI*g.x/$.clientHeight),N(2*Math.PI*g.y/$.clientHeight),d.copy(m),n.update()}function j(E){M.set(E.clientX,E.clientY),S.subVectors(M,v),S.y>0?D(y()):S.y<0&&U(y()),v.copy(M),n.update()}function J(E){p.set(E.clientX,E.clientY),_.subVectors(p,f).multiplyScalar(n.panSpeed),W(_.x,_.y),f.copy(p),n.update()}function Q(E){E.deltaY<0?U(y()):E.deltaY>0&&D(y()),n.update()}function Z(E){let $=!1;switch(E.code){case n.keys.UP:W(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:W(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:W(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:W(-n.keyPanSpeed,0),$=!0;break}$&&(E.preventDefault(),n.update())}function he(){if(x.length===1)d.set(x[0].pageX,x[0].pageY);else{const E=.5*(x[0].pageX+x[1].pageX),$=.5*(x[0].pageY+x[1].pageY);d.set(E,$)}}function pe(){if(x.length===1)f.set(x[0].pageX,x[0].pageY);else{const E=.5*(x[0].pageX+x[1].pageX),$=.5*(x[0].pageY+x[1].pageY);f.set(E,$)}}function q(){const E=x[0].pageX-x[1].pageX,$=x[0].pageY-x[1].pageY,oe=Math.sqrt(E*E+$*$);v.set(0,oe)}function it(){n.enableZoom&&q(),n.enablePan&&pe()}function Ee(){n.enableZoom&&q(),n.enableRotate&&he()}function be(E){if(x.length==1)m.set(E.pageX,E.pageY);else{const oe=xe(E),ne=.5*(E.pageX+oe.x),L=.5*(E.pageY+oe.y);m.set(ne,L)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const $=n.domElement;b(2*Math.PI*g.x/$.clientHeight),N(2*Math.PI*g.y/$.clientHeight),d.copy(m)}function de(E){if(x.length===1)p.set(E.pageX,E.pageY);else{const $=xe(E),oe=.5*(E.pageX+$.x),ne=.5*(E.pageY+$.y);p.set(oe,ne)}_.subVectors(p,f).multiplyScalar(n.panSpeed),W(_.x,_.y),f.copy(p)}function ze(E){const $=xe(E),oe=E.pageX-$.x,ne=E.pageY-$.y,L=Math.sqrt(oe*oe+ne*ne);M.set(0,L),S.set(0,Math.pow(M.y/v.y,n.zoomSpeed)),D(S.y),v.copy(M)}function Ce(E){n.enableZoom&&ze(E),n.enablePan&&de(E)}function _e(E){n.enableZoom&&ze(E),n.enableRotate&&be(E)}function at(E){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",ht),n.domElement.addEventListener("pointerup",xt)),ee(E),E.pointerType==="touch"?R(E):lt(E))}function ht(E){n.enabled!==!1&&(E.pointerType==="touch"?T(E):Be(E))}function xt(E){re(E),x.length===0&&(n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",ht),n.domElement.removeEventListener("pointerup",xt)),n.dispatchEvent(Lu),s=i.NONE}function Yt(E){re(E)}function lt(E){let $;switch(E.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case hs.DOLLY:if(n.enableZoom===!1)return;V(E),s=i.DOLLY;break;case hs.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;H(E),s=i.PAN}else{if(n.enableRotate===!1)return;O(E),s=i.ROTATE}break;case hs.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;O(E),s=i.ROTATE}else{if(n.enablePan===!1)return;H(E),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Aa)}function Be(E){if(n.enabled!==!1)switch(s){case i.ROTATE:if(n.enableRotate===!1)return;B(E);break;case i.DOLLY:if(n.enableZoom===!1)return;j(E);break;case i.PAN:if(n.enablePan===!1)return;J(E);break}}function sn(E){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(E.preventDefault(),n.dispatchEvent(Aa),Q(E),n.dispatchEvent(Lu))}function rn(E){n.enabled===!1||n.enablePan===!1||Z(E)}function R(E){switch(ue(E),x.length){case 1:switch(n.touches.ONE){case ds.ROTATE:if(n.enableRotate===!1)return;he(),s=i.TOUCH_ROTATE;break;case ds.PAN:if(n.enablePan===!1)return;pe(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ds.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;it(),s=i.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ee(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Aa)}function T(E){switch(ue(E),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;be(E),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;de(E),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(E),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(E),n.update();break;default:s=i.NONE}}function X(E){n.enabled!==!1&&E.preventDefault()}function ee(E){x.push(E)}function re(E){delete w[E.pointerId];for(let $=0;$<x.length;$++)if(x[$].pointerId==E.pointerId){x.splice($,1);return}}function ue(E){let $=w[E.pointerId];$===void 0&&($=new ve,w[E.pointerId]=$),$.set(E.pageX,E.pageY)}function xe(E){const $=E.pointerId===x[0].pointerId?x[1]:x[0];return w[$.pointerId]}n.domElement.addEventListener("contextmenu",X),n.domElement.addEventListener("pointerdown",at),n.domElement.addEventListener("pointercancel",Yt),n.domElement.addEventListener("wheel",sn,{passive:!1}),this.update()}}const Iu=new P,hy=new Ot,Pu=new P;class dy extends nt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const Cn=new Pe,fy=new Pe;class py{constructor(e={}){const t=this;let n,i,s,r;const o={camera:{fov:0,style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformStyle="preserve-3d",c.style.pointerEvents="none",l.appendChild(c),this.getSize=function(){return{width:n,height:i}},this.render=function(g,f){const p=f.projectionMatrix.elements[5]*r;o.camera.fov!==p&&(l.style.perspective=f.isPerspectiveCamera?p+"px":"",o.camera.fov=p),g.autoUpdate===!0&&g.updateMatrixWorld(),f.parent===null&&f.updateMatrixWorld();let _,v;f.isOrthographicCamera&&(_=-(f.right+f.left)/2,v=(f.top+f.bottom)/2);const S=(f.isOrthographicCamera?"scale("+p+")translate("+u(_)+"px,"+u(v)+"px)"+h(f.matrixWorldInverse):"translateZ("+p+"px)"+h(f.matrixWorldInverse))+"translate("+s+"px,"+r+"px)";o.camera.style!==S&&(c.style.transform=S,o.camera.style=S),m(g,g,f)},this.setSize=function(g,f){n=g,i=f,s=n/2,r=i/2,l.style.width=g+"px",l.style.height=f+"px",c.style.width=g+"px",c.style.height=f+"px"};function u(g){return Math.abs(g)<1e-10?0:g}function h(g){const f=g.elements;return"matrix3d("+u(f[0])+","+u(-f[1])+","+u(f[2])+","+u(f[3])+","+u(f[4])+","+u(-f[5])+","+u(f[6])+","+u(f[7])+","+u(f[8])+","+u(-f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(-f[13])+","+u(f[14])+","+u(f[15])+")"}function d(g){const f=g.elements,p="matrix3d("+u(f[0])+","+u(f[1])+","+u(f[2])+","+u(f[3])+","+u(-f[4])+","+u(-f[5])+","+u(-f[6])+","+u(-f[7])+","+u(f[8])+","+u(f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(f[13])+","+u(f[14])+","+u(f[15])+")";return"translate(-50%,-50%)"+p}function m(g,f,p,_){if(g.isCSS3DObject){const v=g.visible===!0&&g.layers.test(p.layers)===!0;if(g.element.style.display=v===!0?"":"none",v===!0){g.onBeforeRender(t,f,p);let M;g.isCSS3DSprite?(Cn.copy(p.matrixWorldInverse),Cn.transpose(),g.rotation2D!==0&&Cn.multiply(fy.makeRotationZ(g.rotation2D)),g.matrixWorld.decompose(Iu,hy,Pu),Cn.setPosition(Iu),Cn.scale(Pu),Cn.elements[3]=0,Cn.elements[7]=0,Cn.elements[11]=0,Cn.elements[15]=1,M=d(Cn)):M=d(g.matrixWorld);const S=g.element,x=o.objects.get(g);if(x===void 0||x.style!==M){S.style.transform=M;const w={style:M};o.objects.set(g,w)}S.parentNode!==c&&c.appendChild(S),g.onAfterRender(t,f,p)}}for(let v=0,M=g.children.length;v<M;v++)m(g.children[v],f,p)}}}class my extends ir{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vy(t)}),this.register(function(t){return new Ay(t)}),this.register(function(t){return new Cy(t)}),this.register(function(t){return new Sy(t)}),this.register(function(t){return new by(t)}),this.register(function(t){return new wy(t)}),this.register(function(t){return new Ty(t)}),this.register(function(t){return new yy(t)}),this.register(function(t){return new Ey(t)}),this.register(function(t){return new My(t)}),this.register(function(t){return new _y(t)}),this.register(function(t){return new Ry(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=Ki.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Tl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={};if(typeof e=="string")s=e;else if(Ki.decodeText(new Uint8Array(e,0,4))===Hh){try{r[Le.KHR_BINARY_GLTF]=new Ly(e)}catch(h){i&&i(h);return}s=r[Le.KHR_BINARY_GLTF].content}else s=Ki.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Hy(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,r[h.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const h=l.extensionsUsed[u],d=l.extensionsRequired||[];switch(h){case Le.KHR_MATERIALS_UNLIT:r[h]=new xy;break;case Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:r[h]=new Dy;break;case Le.KHR_DRACO_MESH_COMPRESSION:r[h]=new Iy(l,this.dracoLoader);break;case Le.KHR_TEXTURE_TRANSFORM:r[h]=new Py;break;case Le.KHR_MESH_QUANTIZATION:r[h]=new Ny;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function gy(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Le={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class _y{constructor(e){this.parser=e,this.name=Le.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Se(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Bh(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ux(u),c.distance=h;break;case"spot":c=new Ox(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class xy{constructor(){this.name=Le.KHR_MATERIALS_UNLIT}getMaterialType(){return Hi}extendParams(e,t,n){const i=[];e.color=new Se(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,We))}return Promise.all(i)}}class yy{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class vy{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:os}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ve(o,o)}return Promise.all(s)}}class My{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:os}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Sy{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:os}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,We)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class by{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:os}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class wy{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:os}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Se(o[0],o[1],o[2]),Promise.all(s)}}class Ty{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:os}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Ey{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:os}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Se(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,We)),Promise.all(s)}}class Ay{constructor(e){this.parser=e,this.name=Le.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class Cy{constructor(e){this.parser=e,this.name=Le.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ry{constructor(e){this.name=Le.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,r.ready]).then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new ArrayBuffer(u*h),m=new Uint8Array(o[0],l,c);return r.decodeGltfBuffer(new Uint8Array(d),u,h,m,i.mode,i.filter),d})}else return null}}const Hh="glTF",dr=12,Du={JSON:1313821514,BIN:5130562};class Ly{constructor(e){this.name=Le.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,dr);if(this.header={magic:Ki.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-dr,i=new DataView(e,dr);let s=0;for(;s<n;){const r=i.getUint32(s,!0);s+=4;const o=i.getUint32(s,!0);if(s+=4,o===Du.JSON){const l=new Uint8Array(e,dr+s,r);this.content=Ki.decodeText(l)}else if(o===Du.BIN){const l=dr+s;this.body=e.slice(l,l+r)}s+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Iy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Le.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(const u in r){const h=$a[u]||u.toLowerCase();o[h]=r[u]}for(const u in e.attributes){const h=$a[u]||u.toLowerCase();if(r[u]!==void 0){const d=n.accessors[e.attributes[u]],m=Lr[d.componentType];c[h]=m,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const m in d.attributes){const g=d.attributes[m],f=l[m];f!==void 0&&(g.normalized=f)}h(d)},o,c)})})}}class Py{constructor(){this.name=Le.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ka extends ko{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),r=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new Se().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const c in o)l.uniforms[c]=o[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",r)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class Dy{constructor(){this.name=Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Ka}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new Se(1,1,1),e.opacity=1;const s=[];if(Array.isArray(i.diffuseFactor)){const r=i.diffuseFactor;e.color.fromArray(r),e.opacity=r[3]}if(i.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",i.diffuseTexture,We)),e.emissive=new Se(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new Se(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const r=i.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",r)),s.push(n.assignTexture(e,"specularMap",r,We))}return Promise.all(s)}createMaterial(e){const t=new Ka(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=ml,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class Ny{constructor(){this.name=Le.KHR_MESH_QUANTIZATION}}class Wh extends Vr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,m=d*h,g=e*c,f=g-c,p=-2*m+3*d,_=m-d,v=1-p,M=_-d+h;for(let S=0;S!==o;S++){const x=r[f+S+o],w=r[f+S+l]*u,C=r[g+S+o],y=r[g+S]*u;s[S]=v*x+M*w+p*C+_*y}return s}}const Fy=new Ot;class Oy extends Wh{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Fy.fromArray(s).normalize().toArray(s),s}}const Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Lr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nu={9728:yt,9729:ut,9984:Ba,9985:hh,9986:Va,9987:rs},Fu={33071:Vt,33648:So,10497:Gs},Ou={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$a={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zy={CUBICSPLINE:void 0,LINEAR:Ws,STEP:Tr},Ca={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Uy(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new ko({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ks})),a.DefaultMaterial}function fr(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Oi(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ky(a,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);const r=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):a.attributes.position;r.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):a.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):a.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(a.morphAttributes.position=u),i&&(a.morphAttributes.normal=h),s&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function By(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Vy(a){const e=a.extensions&&a.extensions[Le.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+zu(e.attributes):t=a.indices+":"+zu(a.attributes)+":"+a.mode,t}function zu(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Za(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Gy(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class Hy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gy,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Nx(this.options.manager):this.textureLoader=new Bx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};fr(s,o,i),Oi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[c,u]of r.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Le.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Ki.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],l=Ou[i.type],c=Lr[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let f,p;if(m&&m!==h){const _=Math.floor(d/m),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let M=t.cache.get(v);M||(f=new c(o,_*m,i.count*m/u),M=new yx(f,m/u),t.cache.add(v,M)),p=new Sl(M,l,d%m/u,g)}else o===null?f=new c(i.count*l):f=new c(o,d,i.count*l),p=new en(f,l,g);if(i.sparse!==void 0){const _=Ou.SCALAR,v=Lr[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,x=new v(r[1],M,i.sparse.count*_),w=new c(r[2],S,i.sparse.count*l);o!==null&&(p=new en(p.array.slice(),p.itemSize,p.normalized));for(let C=0,y=x.length;C<y;C++){const b=x[C];if(p.setX(b,w[C*l]),l>=2&&p.setY(b,w[C*l+1]),l>=3&&p.setZ(b,w[C*l+2]),l>=4&&p.setW(b,w[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,r.name&&(u.name=r.name);const d=(s.samplers||{})[r.sampler]||{};return u.magFilter=Nu[d.magFilter]||ut,u.minFilter=Nu[d.minFilter]||rs,u.wrapS=Fu[d.wrapS]||Gs,u.wrapT=Fu[d.wrapT]||Gs,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const r=i.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:r.mimeType});return l=o.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(f){const p=new zt(f);p.needsUpdate=!0,d(p)}),t.load(Ki.resolveURL(h,s.path),g,void 0,m)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=r.mimeType||Gy(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Le.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Le.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(r);r=s.extensions[Le.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,l)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Oh,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Fh,Nn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return ko}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},l=s.extensions||{},c=[];if(l[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=i[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];r=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else if(l[Le.KHR_MATERIALS_UNLIT]){const h=i[Le.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,We)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Qi);const u=s.alphaMode||Ca.OPAQUE;if(u===Ca.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ca.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Hi&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ve(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&r!==Hi&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Hi&&(o.emissive=new Se().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==Hi&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,We)),Promise.all(c).then(function(){let h;return r===Ka?h=i[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):h=new r(o),s.name&&(h.name=s.name),Oi(h,s),t.associations.set(h,{materials:e}),s.extensions&&fr(i,h,s),h})}createUniqueName(e){const t=ke.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Le.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Uu(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=Vy(c),h=i[u];if(h)r.push(h.promise);else{let d;c.extensions&&c.extensions[Le.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Uu(new Fn,c,t),i[u]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){const u=r[l].material===void 0?Uy(this.cache):this.getDependency("material",r[l].material);o.push(u)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let m=0,g=u.length;m<g;m++){const f=u[m],p=r[m];let _;const v=c[m];if(p.mode===Wn.TRIANGLES||p.mode===Wn.TRIANGLE_STRIP||p.mode===Wn.TRIANGLE_FAN||p.mode===void 0)_=s.isSkinnedMesh===!0?new Mx(f,v):new Dn(f,v),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),p.mode===Wn.TRIANGLE_STRIP?_.geometry=ku(_.geometry,ip):p.mode===Wn.TRIANGLE_FAN&&(_.geometry=ku(_.geometry,mh));else if(p.mode===Wn.LINES)_=new bx(f,v);else if(p.mode===Wn.LINE_STRIP)_=new wl(f,v);else if(p.mode===Wn.LINE_LOOP)_=new wx(f,v);else if(p.mode===Wn.POINTS)_=new Tx(f,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(_.geometry.morphAttributes).length>0&&By(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),Oi(_,s),p.extensions&&fr(i,_,p),t.assignFinalMaterial(_),h.push(_)}for(let m=0,g=h.length;m<g;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return h[0];const d=new Wi;t.associations.set(d,{meshes:e});for(let m=0,g=h.length;m<g;m++)d.add(h[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(To.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new vl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Oi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],d=n.samplers[h.sampler],m=h.target,g=m.node!==void 0?m.node:m.id,f=n.parameters!==void 0?n.parameters[d.input]:d.input,p=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",f)),r.push(this.getDependency("accessor",p)),o.push(d),l.push(m)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2],m=c[3],g=c[4],f=[];for(let _=0,v=u.length;_<v;_++){const M=u[_],S=h[_],x=d[_],w=m[_],C=g[_];if(M===void 0)continue;M.updateMatrix(),M.matrixAutoUpdate=!0;let y;switch(di[C.path]){case di.weights:y=Cr;break;case di.rotation:y=is;break;case di.position:case di.scale:default:y=Rr;break}const b=M.name?M.name:M.uuid,N=w.interpolation!==void 0?zy[w.interpolation]:Ws,I=[];di[C.path]===di.weights?M.traverse(function(W){W.morphTargetInfluences&&I.push(W.name?W.name:W.uuid)}):I.push(b);let K=x.array;if(x.normalized){const W=Za(K.constructor),D=new Float32Array(K.length);for(let U=0,O=K.length;U<O;U++)D[U]=K[U]*W;K=D}for(let W=0,D=I.length;W<D;W++){const U=new y(I[W]+"."+di[C.path],S.array,K,N);w.interpolation==="CUBICSPLINE"&&(U.createInterpolant=function(V){const H=this instanceof is?Oy:Wh;return new H(this.times,this.values,this.getValueSize()/3,V)},U.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),f.push(U)}}const p=n.name?n.name:"animation_"+e;return new qa(p,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(!!o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"";return function(){const o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let l;if(s.isBone===!0?l=new Dh:o.length>1?l=new Wi:o.length===1?l=o[0]:l=new nt,l!==o[0])for(let c=0,u=o.length;c<u;c++)l.add(o[c]);if(s.name&&(l.userData.name=s.name,l.name=r),Oi(l,s),s.extensions&&fr(n,l,s),s.matrix!==void 0){const c=new Pe;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],s=this,r=new Wi;i.name&&(r.name=s.createUniqueName(i.name)),Oi(r,i),i.extensions&&fr(n,r,i);const o=i.nodes||[],l=[];for(let c=0,u=o.length;c<u;c++)l.push(Xh(o[c],r,t,s));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[d,m]of s.associations)(d instanceof Nn||d instanceof zt)&&h.set(d,m);return u.traverse(d=>{const m=s.associations.get(d);m!=null&&h.set(d,m)}),h};return s.associations=c(r),r})}}function Xh(a,e,t,n){const i=t.nodes[a];return n.getDependency("node",a).then(function(s){if(i.skin===void 0)return s;let r;return n.getDependency("skin",i.skin).then(function(o){r=o;const l=[];for(let c=0,u=r.joints.length;c<u;c++)l.push(n.getDependency("node",r.joints[c]));return Promise.all(l)}).then(function(o){return s.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let h=0,d=o.length;h<d;h++){const m=o[h];if(m){c.push(m);const g=new Pe;r.inverseBindMatrices!==void 0&&g.fromArray(r.inverseBindMatrices.array,h*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',r.joints[h])}l.bind(new bl(c,u),l.matrixWorld)}),s})}).then(function(s){e.add(s);const r=[];if(i.children){const o=i.children;for(let l=0,c=o.length;l<c;l++){const u=o[l];r.push(Xh(u,s,t,n))}}return Promise.all(r)})}function Wy(a,e,t){const n=e.attributes,i=new Js;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const u=Za(Lr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new P,l=new P;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){const f=Za(Lr[d.componentType]);l.multiplyScalar(f)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new Qs;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function Uu(a,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(const r in n){const o=$a[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return Oi(a,e),Wy(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ky(a,e.targets,t):a})}function ku(a,e){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===mh)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(i),s}const BM=new P,VM=new P,GM=new Ht;class Xy extends Dx{constructor(e){super(e),this.type=$n}parse(e){const o=function(M,S){switch(M){case 1:console.error("THREE.RGBELoader Read Error: "+(S||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(S||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(S||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(S||""))}return-1},h=`
`,d=function(M,S,x){S=S||1024;let C=M.pos,y=-1,b=0,N="",I=String.fromCharCode.apply(null,new Uint16Array(M.subarray(C,C+128)));for(;0>(y=I.indexOf(h))&&b<S&&C<M.byteLength;)N+=I,b+=I.length,C+=128,I+=String.fromCharCode.apply(null,new Uint16Array(M.subarray(C,C+128)));return-1<y?(x!==!1&&(M.pos+=b+y+1),N+I.slice(0,y)):!1},m=function(M){const S=/^#\?(\S+)/,x=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*FORMAT=(\S+)\s*$/,y=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,b={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let N,I;if(M.pos>=M.byteLength||!(N=d(M)))return o(1,"no header found");if(!(I=N.match(S)))return o(3,"bad initial token");for(b.valid|=1,b.programtype=I[1],b.string+=N+`
`;N=d(M),N!==!1;){if(b.string+=N+`
`,N.charAt(0)==="#"){b.comments+=N+`
`;continue}if((I=N.match(x))&&(b.gamma=parseFloat(I[1])),(I=N.match(w))&&(b.exposure=parseFloat(I[1])),(I=N.match(C))&&(b.valid|=2,b.format=I[1]),(I=N.match(y))&&(b.valid|=4,b.height=parseInt(I[1],10),b.width=parseInt(I[2],10)),b.valid&2&&b.valid&4)break}return b.valid&2?b.valid&4?b:o(3,"missing image size specifier"):o(3,"missing format specifier")},g=function(M,S,x){const w=S;if(w<8||w>32767||M[0]!==2||M[1]!==2||M[2]&128)return new Uint8Array(M);if(w!==(M[2]<<8|M[3]))return o(3,"wrong scanline width");const C=new Uint8Array(4*S*x);if(!C.length)return o(4,"unable to allocate buffer space");let y=0,b=0;const N=4*w,I=new Uint8Array(4),K=new Uint8Array(N);let W=x;for(;W>0&&b<M.byteLength;){if(b+4>M.byteLength)return o(1);if(I[0]=M[b++],I[1]=M[b++],I[2]=M[b++],I[3]=M[b++],I[0]!=2||I[1]!=2||(I[2]<<8|I[3])!=w)return o(3,"bad rgbe scanline format");let D=0,U;for(;D<N&&b<M.byteLength;){U=M[b++];const V=U>128;if(V&&(U-=128),U===0||D+U>N)return o(3,"bad scanline data");if(V){const H=M[b++];for(let B=0;B<U;B++)K[D++]=H}else K.set(M.subarray(b,b+U),D),D+=U,b+=U}const O=w;for(let V=0;V<O;V++){let H=0;C[y]=K[V+H],H+=w,C[y+1]=K[V+H],H+=w,C[y+2]=K[V+H],H+=w,C[y+3]=K[V+H],y+=4}W--}return C},f=function(M,S,x,w){const C=M[S+3],y=Math.pow(2,C-128)/255;x[w+0]=M[S+0]*y,x[w+1]=M[S+1]*y,x[w+2]=M[S+2]*y,x[w+3]=1},p=function(M,S,x,w){const C=M[S+3],y=Math.pow(2,C-128)/255;x[w+0]=po.toHalfFloat(Math.min(M[S+0]*y,65504)),x[w+1]=po.toHalfFloat(Math.min(M[S+1]*y,65504)),x[w+2]=po.toHalfFloat(Math.min(M[S+2]*y,65504)),x[w+3]=po.toHalfFloat(1)},_=new Uint8Array(e);_.pos=0;const v=m(_);if(v!==-1){const M=v.width,S=v.height,x=g(_.subarray(_.pos),M,S);if(x!==-1){let w,C,y;switch(this.type){case yn:y=x.length/4;const b=new Float32Array(y*4);for(let I=0;I<y;I++)f(x,I*4,b,I*4);w=b,C=yn;break;case $n:y=x.length/4;const N=new Uint16Array(y*4);for(let I=0;I<y;I++)p(x,I*4,N,I*4);w=N,C=$n;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:M,height:S,data:w,header:v.string,gamma:v.gamma,exposure:v.exposure,type:C}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(r,o){switch(r.type){case yn:case $n:r.encoding=Si,r.minFilter=ut,r.magFilter=ut,r.generateMipmaps=!1,r.flipY=!0;break}t&&t(r,o)}return super.load(e,s,n,i)}}function qn(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function jh(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qs={duration:.5,overwrite:!1,delay:0},Ll,cn=1e8,qe=1/cn,Ja=Math.PI*2,jy=Ja/4,qy=0,qh=Math.sqrt,Yy=Math.cos,Ky=Math.sin,_t=function(e){return typeof e=="string"},gt=function(e){return typeof e=="function"},ni=function(e){return typeof e=="number"},Il=function(e){return typeof e>"u"},ii=function(e){return typeof e=="object"},Xt=function(e){return e!==!1},Yh=function(){return typeof window<"u"},mo=function(e){return gt(e)||_t(e)},Kh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rt=Array.isArray,Qa=/(?:-?\.?\d|\.)+/gi,$h=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ra=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zh=/[+-]=-?[.\d]+/,Jh=/[^,'"\[\]\s]+/gi,$y=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Je,Rn,el,Pl,nn={},Eo={},Qh,ed=function(e){return(Eo=ss(e,nn))&&bn},Dl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ao=function(e,t){return!t&&console.warn(e)},td=function(e,t){return e&&(nn[e]=t)&&Eo&&(Eo[e]=t)||nn},Ir=function(){return 0},Nl={},vi=[],tl={},nd,Jt={},La={},Bu=30,xo=[],Fl="",Ol=function(e){var t=e[0],n,i;if(ii(t)||gt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=xo.length;i--&&!xo[i].targetTest(t););n=xo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new wd(e[i],n)))||e.splice(i,1);return e},$i=function(e){return e._gsap||Ol(un(e))[0]._gsap},id=function(e,t,n){return(n=e[t])&&gt(n)?e[t]():Il(n)&&e.getAttribute&&e.getAttribute(t)||n},jt=function(e,t){return(e=e.split(",")).forEach(t)||e},tt=function(e){return Math.round(e*1e5)/1e5||0},At=function(e){return Math.round(e*1e7)/1e7||0},Os=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Zy=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Co=function(){var e=vi.length,t=vi.slice(0),n,i;for(tl={},vi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},sd=function(e,t,n,i){vi.length&&Co(),e.render(t,n,i),vi.length&&Co()},rd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Jh).length<2?t:_t(e)?e.trim():e},od=function(e){return e},dn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Jy=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ss=function(e,t){for(var n in t)e[n]=t[n];return e},Vu=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ii(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},Ro=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Sr=function(e){var t=e.parent||Je,n=e.keyframes?Jy(Rt(e.keyframes)):dn;if(Xt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Qy=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ad=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e[i],o;if(s)for(o=t[s];r&&r[s]>o;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=r,t.parent=t._dp=e,t},Bo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,r=t._next;s?s._next=r:e[n]===t&&(e[n]=r),r?r._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ei=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Zi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ev=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},tv=function a(e){return!e||e._ts&&a(e.parent)},Gu=function(e){return e._repeat?Ys(e._tTime,e=e.duration()+e._rDelay)*e:0},Ys=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Lo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Vo=function(e){return e._end=At(e._start+(e._tDur/Math.abs(e._ts||e._rts||qe)||0))},zl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=At(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Vo(e),n._dirty||Zi(n,e)),e},ld=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Lo(e.rawTime(),t),(!t._dur||Gr(0,t.totalDuration(),n)-t._tTime>qe)&&t.render(n,!0)),Zi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-qe}},Pn=function(e,t,n,i){return t.parent&&ei(t),t._start=At((ni(n)?n:n||e!==Je?an(e,n,t):e._time)+t._delay),t._end=At(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ad(e,t,"_first","_last",e._sort?"_start":0),nl(t)||(e._recent=t),i||ld(e,t),e},cd=function(e,t){return(nn.ScrollTrigger||Dl("scrollTrigger",t))&&nn.ScrollTrigger.create(t,e)},ud=function(e,t,n,i){if(kl(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&nd!==Qt.frame)return vi.push(e),e._lazy=[t,i],1},nv=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},nl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},iv=function(e,t,n,i){var s=e.ratio,r=t<0||!t&&(!e._start&&nv(e)&&!(!e._initted&&nl(e))||(e._ts<0||e._dp._ts<0)&&!nl(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Gr(0,e._tDur,t),u=Ys(l,o),e._yoyo&&u&1&&(r=1-r),u!==Ys(e._tTime,o)&&(s=1-r,e.vars.repeatRefresh&&e._initted&&e.invalidate())),r!==s||i||e._zTime===qe||!t&&e._zTime){if(!e._initted&&ud(e,t,i,n))return;for(h=e._zTime,e._zTime=t||(n?qe:0),n||(n=t&&!h),e.ratio=r,e._from&&(r=1-r),e._time=0,e._tTime=l,c=e._pt;c;)c.r(r,c.d),c=c._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!n&&hn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&hn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===r&&(r&&ei(e,1),n||(hn(e,r?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},sv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ks=function(e,t,n,i){var s=e._repeat,r=At(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=r/e._dur),e._dur=r,e._tDur=s?s<0?1e10:At(r*(s+1)+e._rDelay*s):r,o>0&&!i?zl(e,e._tTime=e._tDur*o):e.parent&&Vo(e),n||Zi(e.parent,e),e},Hu=function(e){return e instanceof Gt?Zi(e):Ks(e,e._dur)},rv={_start:0,endTime:Ir,totalDuration:Ir},an=function a(e,t,n){var i=e.labels,s=e._recent||rv,r=e.duration()>=cn?s.endTime(!1):e._dur,o,l,c;return _t(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=r),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Rt(n)?n[0]:n).totalDuration()),o>1?a(e,t.substr(0,o-1),n)+l:r+l)):t==null?r:+t},br=function(e,t,n){var i=ni(t[1]),s=(i?2:1)+(e<2?0:1),r=t[s],o,l;if(i&&(r.duration=t[1]),r.parent=n,e){for(o=r,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Xt(l.vars.inherit)&&l.parent;r.immediateRender=Xt(o.immediateRender),e<2?r.runBackwards=1:r.startAt=t[s-1]}return new pt(t[0],r,t[s+1])},Ai=function(e,t){return e||e===0?t(e):t},Gr=function(e,t,n){return n<e?e:n>t?t:n},Ct=function(e,t){return!_t(e)||!(t=$y.exec(e))?"":t[1]},ov=function(e,t,n){return Ai(n,function(i){return Gr(e,t,i)})},il=[].slice,hd=function(e,t){return e&&ii(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ii(e[0]))&&!e.nodeType&&e!==Rn},av=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return _t(i)&&!t||hd(i,1)?(s=n).push.apply(s,un(i)):n.push(i)})||n},un=function(e,t,n){return _t(e)&&!n&&(el||!$s())?il.call((t||Pl).querySelectorAll(e),0):Rt(e)?av(e,n):hd(e)?il.call(e,0):e?[e]:[]},lv=function(e){return e=un(e)[0]||Ao("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return un(t,n.querySelectorAll?n:n===e?Ao("Invalid scope")||Pl.createElement("div"):e)}},dd=function(e){return e.sort(function(){return .5-Math.random()})},fd=function(e){if(gt(e))return e;var t=ii(e)?e:{each:e},n=Ji(t.ease),i=t.from||0,s=parseFloat(t.base)||0,r={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return _t(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,m,g){var f=(g||t).length,p=r[f],_,v,M,S,x,w,C,y,b;if(!p){if(b=t.grid==="auto"?0:(t.grid||[1,cn])[1],!b){for(C=-cn;C<(C=g[b++].getBoundingClientRect().left)&&b<f;);b--}for(p=r[f]=[],_=l?Math.min(b,f)*u-.5:i%b,v=b===cn?0:l?f*h/b-.5:i/b|0,C=0,y=cn,w=0;w<f;w++)M=w%b-_,S=v-(w/b|0),p[w]=x=c?Math.abs(c==="y"?S:M):qh(M*M+S*S),x>C&&(C=x),x<y&&(y=x);i==="random"&&dd(p),p.max=C-y,p.min=y,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(b>f?f-1:c?c==="y"?f/b:b:Math.max(b,f/b))||0)*(i==="edges"?-1:1),p.b=f<0?s-f:s,p.u=Ct(t.amount||t.each)||0,n=n&&f<0?Md(n):n}return f=(p[d]-p.min)/p.max||0,At(p.b+(n?n(f):f)*p.v)+p.u}},sl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Math.round(parseFloat(n)/e)*e*t;return(i-i%1)/t+(ni(n)?0:Ct(n))}},pd=function(e,t){var n=Rt(e),i,s;return!n&&ii(e)&&(i=n=e.radius||cn,e.values?(e=un(e.values),(s=!ni(e[0]))&&(i*=i)):e=sl(e.increment)),Ai(t,n?gt(e)?function(r){return s=e(r),Math.abs(s-r)<=i?s:r}:function(r){for(var o=parseFloat(s?r.x:r),l=parseFloat(s?r.y:0),c=cn,u=0,h=e.length,d,m;h--;)s?(d=e[h].x-o,m=e[h].y-l,d=d*d+m*m):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:r,s||u===r||ni(r)?u:u+Ct(r)}:sl(e))},md=function(e,t,n,i){return Ai(Rt(e)?!t:n===!0?!!(n=0):!i,function(){return Rt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},cv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,r){return r(s)},i)}},uv=function(e,t){return function(n){return e(parseFloat(n))+(t||Ct(n))}},hv=function(e,t,n){return _d(e,t,0,1,n)},gd=function(e,t,n){return Ai(n,function(i){return e[~~t(i)]})},dv=function a(e,t,n){var i=t-e;return Rt(e)?gd(e,a(0,e.length),t):Ai(n,function(s){return(i+(s-e)%i)%i+e})},fv=function a(e,t,n){var i=t-e,s=i*2;return Rt(e)?gd(e,a(0,e.length-1),t):Ai(n,function(r){return r=(s+(r-e)%s)%s||0,e+(r>i?s-r:r)})},Pr=function(e){for(var t=0,n="",i,s,r,o;~(i=e.indexOf("random(",t));)r=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,r-i-7).match(o?Jh:Qa),n+=e.substr(t,i-t)+md(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=r+1;return n+e.substr(t,e.length-t)},_d=function(e,t,n,i,s){var r=t-e,o=i-n;return Ai(s,function(l){return n+((l-e)/r*o||0)})},pv=function a(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var r=_t(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),r)e={p:e},t={p:t};else if(Rt(e)&&!Rt(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(a(e[c-1],e[c]));h--,s=function(g){g*=h;var f=Math.min(d,~~g);return u[f](g-f)},n=t}else i||(e=ss(Rt(e)?[]:{},e));if(!u){for(l in t)Ul.call(o,e,l,"get",t[l]);s=function(g){return Gl(g,o)||(r?e.p:e)}}}return Ai(n,s)},Wu=function(e,t,n){var i=e.labels,s=cn,r,o,l;for(r in i)o=i[r]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=r,s=o);return l},hn=function(e,t,n){var i=e.vars,s=i[t],r,o;if(!!s)return r=i[t+"Params"],o=i.callbackScope||e,n&&vi.length&&Co(),r?s.apply(o,r):s.call(o)},_r=function(e){return ei(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&hn(e,"onInterrupt"),e},Ds,mv=function(e){e=!e.name&&e.default||e;var t=e.name,n=gt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ir,render:Gl,add:Ul,kill:Iv,modifier:Lv,rawVars:0},r={targetTest:0,get:0,getSetter:Vl,aliases:{},register:0};if($s(),e!==i){if(Jt[t])return;dn(i,dn(Ro(e,s),r)),ss(i.prototype,ss(s,Ro(e,r))),Jt[i.prop=t]=i,e.targetTest&&(xo.push(i),Nl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}td(t,i),e.register&&e.register(bn,i,qt)},je=255,xr={aqua:[0,je,je],lime:[0,je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,je],navy:[0,0,128],white:[je,je,je],olive:[128,128,0],yellow:[je,je,0],orange:[je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[je,0,0],pink:[je,192,203],cyan:[0,je,je],transparent:[je,je,je,0]},Ia=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*je+.5|0},xd=function(e,t,n){var i=e?ni(e)?[e>>16,e>>8&je,e&je]:0:xr.black,s,r,o,l,c,u,h,d,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),xr[e])i=xr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),r=e.charAt(2),o=e.charAt(3),e="#"+s+s+r+r+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&je,i&je,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&je,e&je]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Qa),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,r=u<=.5?u*(c+1):u+c-u*c,s=u*2-r,i.length>3&&(i[3]*=1),i[0]=Ia(l+1/3,s,r),i[1]=Ia(l,s,r),i[2]=Ia(l-1/3,s,r);else if(~e.indexOf("="))return i=e.match($h),n&&i.length<4&&(i[3]=1),i}else i=e.match(Qa)||xr.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/je,r=i[1]/je,o=i[2]/je,h=Math.max(s,r,o),d=Math.min(s,r,o),u=(h+d)/2,h===d?l=c=0:(m=h-d,c=u>.5?m/(2-h-d):m/(h+d),l=h===s?(r-o)/m+(r<o?6:0):h===r?(o-s)/m+2:(s-r)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},yd=function(e){var t=[],n=[],i=-1;return e.split(Mi).forEach(function(s){var r=s.match(Ps)||[];t.push.apply(t,r),n.push(i+=r.length+1)}),t.c=n,t},Xu=function(e,t,n){var i="",s=(e+i).match(Mi),r=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=xd(d,t,1))&&r+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=yd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Mi,"1").split(Ps),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||r+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Mi),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},Mi=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in xr)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),gv=/hsl[a]?\(/,vd=function(e){var t=e.join(" "),n;if(Mi.lastIndex=0,Mi.test(t))return n=gv.test(t),e[1]=Xu(e[1],n),e[0]=Xu(e[0],n,yd(e[1])),!0},Dr,Qt=function(){var a=Date.now,e=500,t=33,n=a(),i=n,s=1e3/240,r=s,o=[],l,c,u,h,d,m,g=function f(p){var _=a()-i,v=p===!0,M,S,x,w;if(_>e&&(n+=_-t),i+=_,x=i-n,M=x-r,(M>0||v)&&(w=++h.frame,d=x-h.time*1e3,h.time=x=x/1e3,r+=M+(M>=s?4:s-M),S=1),v||(l=c(f)),S)for(m=0;m<o.length;m++)o[m](x,d,w,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Qh&&(!el&&Yh()&&(Rn=el=window,Pl=Rn.document||{},nn.gsap=bn,(Rn.gsapVersions||(Rn.gsapVersions=[])).push(bn.version),ed(Eo||Rn.GreenSockGlobals||!Rn.gsap&&Rn||{}),u=Rn.requestAnimationFrame),l&&h.sleep(),c=u||function(p){return setTimeout(p,r-h.time*1e3+1|0)},Dr=1,g(2))},sleep:function(){(u?Rn.cancelAnimationFrame:clearTimeout)(l),Dr=0,c=Ir},lagSmoothing:function(p,_){e=p||1/qe,t=Math.min(_,e,0)},fps:function(p){s=1e3/(p||240),r=h.time*1e3+s},add:function(p,_,v){var M=_?function(S,x,w,C){p(S,x,w,C),h.remove(M)}:p;return h.remove(p),o[v?"unshift":"push"](M),$s(),M},remove:function(p,_){~(_=o.indexOf(p))&&o.splice(_,1)&&m>=_&&m--},_listeners:o},h}(),$s=function(){return!Dr&&Qt.wake()},Ie={},_v=/^[\d.\-M][\d.\-,\s]/,xv=/["']/g,yv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,r=n.length,o,l,c;s<r;s++)l=n[s],o=s!==r-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(xv,"").trim():+c,i=l.substr(o+1).trim();return t},vv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Mv=function(e){var t=(e+"").split("("),n=Ie[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[yv(t[1])]:vv(e).split(",").map(rd)):Ie._CE&&_v.test(e)?Ie._CE("",e):n},Md=function(e){return function(t){return 1-e(1-t)}},Sd=function a(e,t){for(var n=e._first,i;n;)n instanceof Gt?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ji=function(e,t){return e&&(gt(e)?e:Ie[e]||Mv(e))||t},as=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},r;return jt(e,function(o){Ie[o]=nn[o]=s,Ie[r=o.toLowerCase()]=n;for(var l in s)Ie[r+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ie[o+"."+l]=s[l]}),s},bd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Pa=function a(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),r=s/Ja*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Ky((u-r)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:bd(o);return s=Ja/s,l.config=function(c,u){return a(e,c,u)},l},Da=function a(e,t){t===void 0&&(t=1.70158);var n=function(r){return r?--r*r*((t+1)*r+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:bd(n);return i.config=function(s){return a(e,s)},i};jt("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;as(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ie.Linear.easeNone=Ie.none=Ie.Linear.easeIn;as("Elastic",Pa("in"),Pa("out"),Pa());(function(a,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?a*o*o:o<n?a*Math.pow(o-1.5/e,2)+.75:o<i?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};as("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);as("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});as("Circ",function(a){return-(qh(1-a*a)-1)});as("Sine",function(a){return a===1?1:-Yy(a*jy)+1});as("Back",Da("in"),Da("out"),Da());Ie.SteppedEase=Ie.steps=nn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,r=1-qe;return function(o){return((i*Gr(0,r,o)|0)+s)*n}}};qs.ease=Ie["quad.out"];jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Fl+=a+","+a+"Params,"});var wd=function(e,t){this.id=qy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:id,this.set=t?t.getSetter:Vl},Nr=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ks(this,+t.duration,1,1),this.data=t.data,Dr||Qt.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ks(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if($s(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(zl(this,n),!s._dp||s.parent||ld(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===qe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),sd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Gu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Gu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ys(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-qe?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Lo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-qe?0:this._rts,this.totalTime(Gr(-this._delay,this._tDur,i),!0),Vo(this),ev(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($s(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==qe&&(this._tTime-=qe)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Pn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Xt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Lo(i.rawTime(n),this):this._tTime:this._tTime},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Hu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Hu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(an(this,n),Xt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Xt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-qe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-qe,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-qe)},e.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},e.then=function(n){var i=this;return new Promise(function(s){var r=gt(n)?n:od,o=function(){var c=i.then;i.then=null,gt(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=c),s(r),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){_r(this)},a}();dn(Nr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-qe,_prom:0,_ps:!1,_rts:1});var Gt=function(a){jh(e,a);function e(n,i){var s;return n===void 0&&(n={}),s=a.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Xt(n.sortChildren),Je&&Pn(n.parent||Je,qn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&cd(qn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,r){return br(0,arguments,this),this},t.from=function(i,s,r){return br(1,arguments,this),this},t.fromTo=function(i,s,r,o){return br(2,arguments,this),this},t.set=function(i,s,r){return s.duration=0,s.parent=this,Sr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new pt(i,s,an(this,r),1),this},t.call=function(i,s,r){return Pn(this,pt.delayedCall(0,i,s),r)},t.staggerTo=function(i,s,r,o,l,c,u){return r.duration=s,r.stagger=r.stagger||o,r.onComplete=c,r.onCompleteParams=u,r.parent=this,new pt(i,r,an(this,l)),this},t.staggerFrom=function(i,s,r,o,l,c,u){return r.runBackwards=1,Sr(r).immediateRender=Xt(r.immediateRender),this.staggerTo(i,s,r,o,l,c,u)},t.staggerFromTo=function(i,s,r,o,l,c,u,h){return o.startAt=r,Sr(o).immediateRender=Xt(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,r){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:At(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,m,g,f,p,_,v,M,S,x,w,C;if(this!==Je&&u>l&&i>=0&&(u=l),u!==this._tTime||r||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,S=this._start,M=this._ts,_=!M,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,r);if(d=At(u%p),u===l?(f=this._repeat,d=c):(f=~~(u/p),f&&f===u/p&&(d=c,f--),d>c&&(d=c)),x=Ys(this._tTime,p),!o&&this._tTime&&x!==f&&(x=f),w&&f&1&&(d=c-d,C=1),f!==x&&!this._lock){var y=w&&x&1,b=y===(w&&f&1);if(f<x&&(y=!y),o=y?0:c,this._lock=1,this.render(o||(C?0:At(f*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&hn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=y?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Sd(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=sv(this,At(o),At(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!s&&(hn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||d>=m._start)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,s,r);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,r),d!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=-qe);break}}m=g}else{m=this._last;for(var N=i<0?i:d;m;){if(g=m._prev,(m._act||N<=m._end)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,s,r);if(m.render(m._ts>0?(N-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(N-m._start)*m._ts,s,r),d!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=N?-qe:qe);break}}m=g}}if(v&&!s&&(this.pause(),v.render(d>=o?0:-qe)._zTime=d>=o?1:-1,this._ts))return this._start=S,Vo(this),this.render(i,s,r);this._onUpdate&&!s&&hn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ei(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(hn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var r=this;if(ni(s)||(s=an(this,s,i)),!(i instanceof Nr)){if(Rt(i))return i.forEach(function(o){return r.add(o,s)}),this;if(_t(i))return this.addLabel(i,s);if(gt(i))i=pt.delayedCall(0,i);else return this}return this!==i?Pn(this,i,s):this},t.getChildren=function(i,s,r,o){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=-cn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof pt?s&&l.push(c):(r&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,r)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},t.remove=function(i){return _t(i)?this.removeLabel(i):gt(i)?this.killTweensOf(i):(Bo(this,i),i===this._recent&&(this._recent=this._last),Zi(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=At(Qt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=an(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,r){var o=pt.delayedCall(0,s||Ir,r);return o.data="isPause",this._hasPause=1,Pn(this,o,an(this,i))},t.removePause=function(i){var s=this._first;for(i=an(this,i);s;)s._start===i&&s.data==="isPause"&&ei(s),s=s._next},t.killTweensOf=function(i,s,r){for(var o=this.getTweensOf(i,r),l=o.length;l--;)pi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var r=[],o=un(i),l=this._first,c=ni(s),u;l;)l instanceof pt?Zy(l._targets,o)&&(c?(!pi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&r.push(l):(u=l.getTweensOf(o,s)).length&&r.push.apply(r,u),l=l._next;return r},t.tweenTo=function(i,s){s=s||{};var r=this,o=an(r,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,m,g=pt.to(r,dn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale())||qe,onStart:function(){if(r.pause(),!m){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale());g._dur!==p&&Ks(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,r){return this.tweenTo(s,dn({startAt:{time:an(this,i)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Wu(this,an(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Wu(this,an(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+qe)},t.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var o=this._first,l=this.labels,c;o;)o._start>=r&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=r&&(l[c]+=i);return Zi(this)},t.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return a.prototype.invalidate.call(this)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Zi(this)},t.totalDuration=function(i){var s=0,r=this,o=r._last,l=cn,c,u,h;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(h=r.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&r._sort&&o._ts&&!r._lock?(r._lock=1,Pn(r,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!r._dp||h&&h.smoothChildTiming)&&(r._start+=u/r._ts,r._time-=u,r._tTime-=u),r.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ks(r,r===Je&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},e.updateRoot=function(i){if(Je._ts&&(sd(Je,Lo(i,Je)),nd=Qt.frame),Qt.frame>=Bu){Bu+=tn.autoSleep||120;var s=Je._first;if((!s||!s._ts)&&tn.autoSleep&&Qt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Qt.sleep()}}},e}(Nr);dn(Gt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Sv=function(e,t,n,i,s,r,o){var l=new qt(this._pt,e,t,0,1,Ld,null,s),c=0,u=0,h,d,m,g,f,p,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Pr(i)),r&&(v=[n,i],r(v,e,t),n=v[0],i=v[1]),d=n.match(Ra)||[];h=Ra.exec(i);)g=h[0],f=i.substring(c,h.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:f||u===1?f:",",s:p,c:g.charAt(1)==="="?Os(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=Ra.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Zh.test(i)||_)&&(l.e=0),this._pt=l,l},Ul=function(e,t,n,i,s,r,o,l,c){gt(i)&&(i=i(s||0,e,r));var u=e[t],h=n!=="get"?n:gt(u)?c?e[t.indexOf("set")||!gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=gt(u)?c?Av:Cd:Bl,m;if(_t(i)&&(~i.indexOf("random(")&&(i=Pr(i)),i.charAt(1)==="="&&(m=Os(h,i)+(Ct(h)||0),(m||m===0)&&(i=m))),h!==i||rl)return!isNaN(h*i)&&i!==""?(m=new qt(this._pt,e,t,+h||0,i-(h||0),typeof u=="boolean"?Rv:Rd,0,d),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!u&&!(t in e)&&Dl(t,i),Sv.call(this,e,t,h,i,d,l||tn.stringFilter,c))},bv=function(e,t,n,i,s){if(gt(e)&&(e=wr(e,s,t,n,i)),!ii(e)||e.style&&e.nodeType||Rt(e)||Kh(e))return _t(e)?wr(e,s,t,n,i):e;var r={},o;for(o in e)r[o]=wr(e[o],s,t,n,i);return r},Td=function(e,t,n,i,s,r){var o,l,c,u;if(Jt[e]&&(o=new Jt[e]).init(s,o.rawVars?t[e]:bv(t[e],i,s,r,n),n,i,r)!==!1&&(n._pt=l=new qt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ds))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},pi,rl,kl=function a(e,t){var n=e.vars,i=n.ease,s=n.startAt,r=n.immediateRender,o=n.lazy,l=n.onUpdate,c=n.onUpdateParams,u=n.callbackScope,h=n.runBackwards,d=n.yoyoEase,m=n.keyframes,g=n.autoRevert,f=e._dur,p=e._startAt,_=e._targets,v=e.parent,M=v&&v.data==="nested"?v.parent._targets:_,S=e._overwrite==="auto"&&!Ll,x=e.timeline,w,C,y,b,N,I,K,W,D,U,O,V,H;if(x&&(!m||!i)&&(i="none"),e._ease=Ji(i,qs.ease),e._yEase=d?Md(Ji(d===!0?i:d,qs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!x&&!!n.runBackwards,!x||m&&!n.stagger){if(W=_[0]?$i(_[0]).harness:0,V=W&&n[W.prop],w=Ro(n,Nl),p&&(ei(p.render(-1,!0)),p._lazy=0),s)if(ei(e._startAt=pt.set(_,dn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:Xt(o),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:u,stagger:0},s))),t<0&&!r&&!g&&e._startAt.render(-1,!0),r){if(t>0&&!g&&(e._startAt=0),f&&t<=0){t&&(e._zTime=t);return}}else g===!1&&(e._startAt=0);else if(h&&f){if(p)!g&&(e._startAt=0);else if(t&&(r=!1),y=dn({overwrite:!1,data:"isFromStart",lazy:r&&Xt(o),immediateRender:r,stagger:0,parent:v},w),V&&(y[W.prop]=V),ei(e._startAt=pt.set(_,y)),t<0&&e._startAt.render(-1,!0),e._zTime=t,!r)a(e._startAt,qe);else if(!t)return}for(e._pt=e._ptCache=0,o=f&&Xt(o)||o&&!f,C=0;C<_.length;C++){if(N=_[C],K=N._gsap||Ol(_)[C]._gsap,e._ptLookup[C]=U={},tl[K.id]&&vi.length&&Co(),O=M===_?C:M.indexOf(N),W&&(D=new W).init(N,V||w,e,O,M)!==!1&&(e._pt=b=new qt(e._pt,N,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(B){U[B]=b}),D.priority&&(I=1)),!W||V)for(y in w)Jt[y]&&(D=Td(y,w,e,O,N,M))?D.priority&&(I=1):U[y]=b=Ul.call(e,N,y,"get",w[y],O,M,0,n.stringFilter);e._op&&e._op[C]&&e.kill(N,e._op[C]),S&&e._pt&&(pi=e,Je.killTweensOf(N,U,e.globalTime(t)),H=!e.parent,pi=0),e._pt&&o&&(tl[K.id]=1)}I&&Id(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!H,m&&t<=0&&x.render(cn,!0,!0)},wv=function(e,t,n,i,s,r,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,h=e._targets.length;h--;){if(c=u[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t;)c=c._next;if(!c)return rl=1,e.vars[t]="+=0",kl(e,o),rl=0,1;l.push(c)}for(h=l.length;h--;)c=l[h],c.s=(i||i===0)&&!s?i:c.s+(i||0)+r*c.c,c.c=n-c.s,c.e&&(c.e=tt(n)+Ct(c.e)),c.b&&(c.b=c.s+Ct(c.b))},Tv=function(e,t){var n=e[0]?$i(e[0]).harness:0,i=n&&n.aliases,s,r,o,l;if(!i)return t;s=ss({},t);for(r in i)if(r in s)for(l=i[r].split(","),o=l.length;o--;)s[l[o]]=s[r];return s},Ev=function(e,t,n,i){var s=t.ease||i||"power1.inOut",r,o;if(Rt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(r in t)o=n[r]||(n[r]=[]),r==="ease"||o.push({t:parseFloat(e),v:t[r],e:s})},wr=function(e,t,n,i,s){return gt(e)?e.call(t,n,i,s):_t(e)&&~e.indexOf("random(")?Pr(e):e},Ed=Fl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ad={};jt(Ed+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Ad[a]=1});var pt=function(a){jh(e,a);function e(n,i,s,r){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=a.call(this,r?i:Sr(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,m=l.overwrite,g=l.keyframes,f=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,v=i.parent||Je,M=(Rt(n)||Kh(n)?ni(n[0]):"length"in i)?[n]:un(n),S,x,w,C,y,b,N,I;if(o._targets=M.length?Ol(M):Ao("GSAP target "+n+" not found. https://greensock.com",!tn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||d||mo(c)||mo(u)){if(i=o.vars,S=o.timeline=new Gt({data:"nested",defaults:f||{}}),S.kill(),S.parent=S._dp=qn(o),S._start=0,d||mo(c)||mo(u)){if(C=M.length,N=d&&fd(d),ii(d))for(y in d)~Ed.indexOf(y)&&(I||(I={}),I[y]=d[y]);for(x=0;x<C;x++)w=Ro(i,Ad),w.stagger=0,_&&(w.yoyoEase=_),I&&ss(w,I),b=M[x],w.duration=+wr(c,qn(o),x,b,M),w.delay=(+wr(u,qn(o),x,b,M)||0)-o._delay,!d&&C===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),S.to(b,w,N?N(x,b,M):0),S._ease=Ie.none;S.duration()?c=u=0:o.timeline=0}else if(g){Sr(dn(S.vars.defaults,{ease:"none"})),S._ease=Ji(g.ease||i.ease||"none");var K=0,W,D,U;if(Rt(g))g.forEach(function(O){return S.to(M,O,">")});else{w={};for(y in g)y==="ease"||y==="easeEach"||Ev(y,g[y],w,g.easeEach);for(y in w)for(W=w[y].sort(function(O,V){return O.t-V.t}),K=0,x=0;x<W.length;x++)D=W[x],U={ease:D.e,duration:(D.t-(x?W[x-1].t:0))/100*c},U[y]=D.v,S.to(M,U,K),K+=U.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return m===!0&&!Ll&&(pi=qn(o),Je.killTweensOf(M),pi=0),Pn(v,qn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===At(v._time)&&Xt(h)&&tv(qn(o))&&v.data!=="nested")&&(o._tTime=-qe,o.render(Math.max(0,-u))),p&&cd(qn(o),p),o}var t=e.prototype;return t.render=function(i,s,r){var o=this._time,l=this._tDur,c=this._dur,u=i>l-qe&&i>=0?l:i<qe?0:i,h,d,m,g,f,p,_,v,M;if(!c)iv(this,i,s,r);else if(u!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=i<0){if(h=u,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,r);if(h=At(u%g),u===l?(m=this._repeat,h=c):(m=~~(u/g),m&&m===u/g&&(h=c,m--),h>c&&(h=c)),p=this._yoyo&&m&1,p&&(M=this._yEase,h=c-h),f=Ys(this._tTime,g),h===o&&!r&&this._initted)return this._tTime=u,this;m!==f&&(v&&this._yEase&&Sd(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=r=1,this.render(At(g*m),!0).invalidate()._lock=0))}if(!this._initted){if(ud(this,i<0?i:h,r,s))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,r)}if(this._tTime=u,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(M||this._ease)(h/c),this._from&&(this.ratio=_=1-_),h&&!o&&!s&&(hn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(_,d.d),d=d._next;v&&v.render(i<0?i:!h&&p?-qe:v._dur*v._ease(h/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(i<0&&this._startAt&&this._startAt.render(i,!0,r),hn(this,"onUpdate")),this._repeat&&m!==f&&this.vars.onRepeat&&!s&&this.parent&&hn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(i<0&&this._startAt&&!this._onUpdate&&this._startAt.render(i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ei(this,1),!s&&!(i<0&&!o)&&(u||o)&&(hn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),a.prototype.invalidate.call(this)},t.resetTo=function(i,s,r,o){Dr||Qt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||kl(this,l),c=this._ease(l/this._dur),wv(this,i,s,r,o,c,l)?this.resetTo(i,s,r,o):(zl(this,0),this.parent||ad(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?_r(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,pi&&pi.vars.overwrite!==!0)._first||_r(this),this.parent&&r!==this.timeline.totalDuration()&&Ks(this,this._dur*this.timeline._tDur/r,0,1),this}var o=this._targets,l=i?un(i):o,c=this._ptLookup,u=this._pt,h,d,m,g,f,p,_;if((!s||s==="all")&&Qy(o,l))return s==="all"&&(this._pt=0),_r(this);for(h=this._op=this._op||[],s!=="all"&&(_t(s)&&(f={},jt(s,function(v){return f[v]=1}),s=f),s=Tv(o,s)),_=o.length;_--;)if(~l.indexOf(o[_])){d=c[_],s==="all"?(h[_]=s,g=d,m={}):(m=h[_]=h[_]||{},g=s);for(f in g)p=d&&d[f],p&&((!("kill"in p.d)||p.d.kill(f)===!0)&&Bo(this,p,"_pt"),delete d[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&u&&_r(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return br(1,arguments)},e.delayedCall=function(i,s,r,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:o})},e.fromTo=function(i,s,r){return br(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,r){return Je.killTweensOf(i,s,r)},e}(Nr);dn(pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});jt("staggerTo,staggerFrom,staggerFromTo",function(a){pt[a]=function(){var e=new Gt,t=il.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Bl=function(e,t,n){return e[t]=n},Cd=function(e,t,n){return e[t](n)},Av=function(e,t,n,i){return e[t](i.fp,n)},Cv=function(e,t,n){return e.setAttribute(t,n)},Vl=function(e,t){return gt(e[t])?Cd:Il(e[t])&&e.setAttribute?Cv:Bl},Rd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Rv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ld=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Gl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Lv=function(e,t,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(e,t,n),s=r},Iv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Bo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Pv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Id=function(e){for(var t=e._pt,n,i,s,r;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:r)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:r=t,t=n}e._pt=s},qt=function(){function a(t,n,i,s,r,o,l,c,u){this.t=n,this.s=s,this.c=r,this.p=i,this.r=o||Rd,this.d=l||this,this.set=c||Bl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Pv,this.m=n,this.mt=s,this.tween=i},a}();jt(Fl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Nl[a]=1});nn.TweenMax=nn.TweenLite=pt;nn.TimelineLite=nn.TimelineMax=Gt;Je=new Gt({sortChildren:!1,defaults:qs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});tn.stringFilter=vd;var Io={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return mv(i)})},timeline:function(e){return new Gt(e)},getTweensOf:function(e,t){return Je.getTweensOf(e,t)},getProperty:function(e,t,n,i){_t(e)&&(e=un(e)[0]);var s=$i(e||{}).get,r=n?od:rd;return n==="native"&&(n=""),e&&(t?r((Jt[t]&&Jt[t].get||s)(e,t,n,i)):function(o,l,c){return r((Jt[o]&&Jt[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=un(e),e.length>1){var i=e.map(function(u){return bn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var r=Jt[t],o=$i(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=r?function(u){var h=new r;Ds._pt=0,h.init(e,n?u+n:u,Ds,0,[e]),h.render(1,h),Ds._pt&&Gl(1,Ds)}:o.set(e,l);return r?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=bn.to(e,ss((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),r=function(l,c,u){return s.resetTo(t,l,c,u)};return r.tween=s,r},isTweening:function(e){return Je.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ji(e.ease,qs.ease)),Vu(qs,e||{})},config:function(e){return Vu(tn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,r=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Jt[o]&&!nn[o]&&Ao(t+" effect requires "+o+" plugin.")}),La[t]=function(o,l,c){return n(un(o),dn(l||{},s),c)},r&&(Gt.prototype[t]=function(o,l,c){return this.add(La[t](o,ii(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ie[e]=Ji(t)},parseEase:function(e,t){return arguments.length?Ji(e,t):Ie},getById:function(e){return Je.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Gt(e),i,s;for(n.smoothChildTiming=Xt(e.smoothChildTiming),Je.remove(n),n._dp=0,n._time=n._tTime=Je._time,i=Je._first;i;)s=i._next,(t||!(!i._dur&&i instanceof pt&&i.vars.onComplete===i._targets[0]))&&Pn(n,i,i._start-i._delay),i=s;return Pn(Je,n,0),n},utils:{wrap:dv,wrapYoyo:fv,distribute:fd,random:md,snap:pd,normalize:hv,getUnit:Ct,clamp:ov,splitColor:xd,toArray:un,selector:lv,mapRange:_d,pipe:cv,unitize:uv,interpolate:pv,shuffle:dd},install:ed,effects:La,ticker:Qt,updateRoot:Gt.updateRoot,plugins:Jt,globalTimeline:Je,core:{PropTween:qt,globals:td,Tween:pt,Timeline:Gt,Animation:Nr,getCache:$i,_removeLinkedListItem:Bo,suppressOverwrites:function(e){return Ll=e}}};jt("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Io[a]=pt[a]});Qt.add(Gt.updateRoot);Ds=Io.to({},{duration:0});var Dv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Nv=function(e,t){var n=e._targets,i,s,r;for(i in t)for(s=n.length;s--;)r=e._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=Dv(r,i)),r&&r.modifier&&r.modifier(t[i],e,n[s],i))},Na=function(e,t){return{name:e,rawVars:1,init:function(i,s,r){r._onInit=function(o){var l,c;if(_t(s)&&(l={},jt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Nv(o,s)}}}},bn=Io.registerPlugin({name:"attr",init:function(e,t,n,i,s){var r,o;for(r in t)o=this.add(e,"setAttribute",(e.getAttribute(r)||0)+"",t[r],i,s,0,0,r),o&&(o.op=r),this._props.push(r)}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n])}},Na("roundProps",sl),Na("modifiers"),Na("snap",pd))||Io;pt.version=Gt.version=bn.version="3.10.4";Qh=1;Yh()&&$s();Ie.Power0;Ie.Power1;Ie.Power2;Ie.Power3;Ie.Power4;Ie.Linear;Ie.Quad;Ie.Cubic;Ie.Quart;Ie.Quint;Ie.Strong;Ie.Elastic;Ie.Back;Ie.SteppedEase;Ie.Bounce;Ie.Sine;Ie.Expo;Ie.Circ;/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ju,mi,zs,Hl,Xi,qu,Fv=function(){return typeof window<"u"},bi={},zi=180/Math.PI,Us=Math.PI/180,As=Math.atan2,Yu=1e8,Pd=/([A-Z])/g,Ov=/(left|right|width|margin|padding|x)/i,zv=/[\s,\(]\S/,gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Dd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Uv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Bv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Nd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Fd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Vv=function(e,t,n){return e.style[t]=n},Gv=function(e,t,n){return e.style.setProperty(t,n)},Hv=function(e,t,n){return e._gsap[t]=n},Wv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Xv=function(e,t,n,i,s){var r=e._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},jv=function(e,t,n,i,s){var r=e._gsap;r[t]=n,r.renderTransform(s,r)},Mt="transform",wi=Mt+"Origin",Od,ol=function(e,t){var n=mi.createElementNS?mi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):mi.createElement(e);return n.style?n:mi.createElement(e)},ti=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Pd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,Zs(t)||t,1)||""},Ku="O,Moz,ms,Ms,Webkit".split(","),Zs=function(e,t,n){var i=t||Xi,s=i.style,r=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(Ku[r]+e in s););return r<0?null:(r===3?"ms":r>=0?Ku[r]:"")+e},al=function(){Fv()&&window.document&&(ju=window,mi=ju.document,zs=mi.documentElement,Xi=ol("div")||{style:{}},ol("div"),Mt=Zs(Mt),wi=Mt+"Origin",Xi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Od=!!Zs("perspective"),Hl=1)},Fa=function a(e){var t=ol("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,r;if(zs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),zs.removeChild(t),this.style.cssText=s,r},$u=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},zd=function(e){var t;try{t=e.getBBox()}catch{t=Fa.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Fa||(t=Fa.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+$u(e,["x","cx","x1"])||0,y:+$u(e,["y","cy","y1"])||0,width:0,height:0}:t},Ud=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zd(e))},Fr=function(e,t){if(t){var n=e.style;t in bi&&t!==wi&&(t=Mt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Pd,"-$1").toLowerCase())):n.removeAttribute(t)}},_i=function(e,t,n,i,s,r){var o=new qt(e._pt,t,n,0,1,r?Fd:Nd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Zu={deg:1,rad:1,turn:1},Ti=function a(e,t,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",o=Xi.style,l=Ov.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",m=i==="%",g,f,p,_;return i===r||!s||Zu[i]||Zu[r]?s:(r!=="px"&&!d&&(s=a(e,t,n,"px")),_=e.getCTM&&Ud(e),(m||r==="%")&&(bi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],tt(m?s/g*h:s/100*g)):(o[l?"width":"height"]=h+(d?r:i),f=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(f=(e.ownerSVGElement||{}).parentNode),(!f||f===mi||!f.appendChild)&&(f=mi.body),p=f._gsap,p&&m&&p.width&&l&&p.time===Qt.time?tt(s/p.width*h):((m||r==="%")&&(o.position=ti(e,"position")),f===e&&(o.position="static"),f.appendChild(Xi),g=Xi[u],f.removeChild(Xi),o.position="absolute",l&&m&&(p=$i(f),p.time=Qt.time,p.width=f[u]),tt(d?g*s/h:g&&s?h/g*s:0))))},Ui=function(e,t,n,i){var s;return Hl||al(),t in gi&&t!=="transform"&&(t=gi[t],~t.indexOf(",")&&(t=t.split(",")[0])),bi[t]&&t!=="transform"?(s=zr(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Do(ti(e,wi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Po[t]&&Po[t](e,t,n)||ti(e,t)||id(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ti(e,t,s,n)+n:s},qv=function(e,t,n,i){if(!n||n==="none"){var s=Zs(t,e,1),r=s&&ti(e,s,1);r&&r!==n?(t=s,n=r):t==="borderColor"&&(n=ti(e,"borderTopColor"))}var o=new qt(this._pt,e.style,t,0,1,Ld),l=0,c=0,u,h,d,m,g,f,p,_,v,M,S,x;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=ti(e,t)||i,e.style[t]=n),u=[n,i],vd(u),n=u[0],i=u[1],d=n.match(Ps)||[],x=i.match(Ps)||[],x.length){for(;h=Ps.exec(i);)p=h[0],v=i.substring(l,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(f=d[c++]||"")&&(m=parseFloat(f)||0,S=f.substr((m+"").length),p.charAt(1)==="="&&(p=Os(m,p)+S),_=parseFloat(p),M=p.substr((_+"").length),l=Ps.lastIndex-M.length,M||(M=M||tn.units[t]||S,l===i.length&&(i+=M,o.e+=M)),S!==M&&(m=Ti(e,t,f,M)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Fd:Nd;return Zh.test(i)&&(o.e=0),this._pt=o,o},Ju={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Yv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ju[n]||n,t[1]=Ju[i]||i,t.join(" ")},Kv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,r=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],bi[o]&&(l=1,o=o==="transformOrigin"?wi:Mt),Fr(n,o);l&&(Fr(n,Mt),r&&(r.svg&&n.removeAttribute("transform"),zr(n,1),r.uncache=1))}},Po={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var r=e._pt=new qt(e._pt,t,n,0,0,Kv);return r.u=i,r.pr=-10,r.tween=s,e._props.push(n),1}}},Or=[1,0,0,1,0,0],kd={},Bd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qu=function(e){var t=ti(e,Mt);return Bd(t)?Or:t.substr(7).match($h).map(tt)},Wl=function(e,t){var n=e._gsap||$i(e),i=e.style,s=Qu(e),r,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Or:s):(s===Or&&!e.offsetParent&&e!==zs&&!n.svg&&(l=i.display,i.display="block",r=e.parentNode,(!r||!e.offsetParent)&&(c=1,o=e.nextSibling,zs.appendChild(e)),s=Qu(e),l?i.display=l:Fr(e,"display"),c&&(o?r.insertBefore(e,o):r?r.appendChild(e):zs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ll=function(e,t,n,i,s,r){var o=e._gsap,l=s||Wl(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,m=l[0],g=l[1],f=l[2],p=l[3],_=l[4],v=l[5],M=t.split(" "),S=parseFloat(M[0])||0,x=parseFloat(M[1])||0,w,C,y,b;n?l!==Or&&(C=m*p-g*f)&&(y=S*(p/C)+x*(-f/C)+(f*v-p*_)/C,b=S*(-g/C)+x*(m/C)-(m*v-g*_)/C,S=y,x=b):(w=zd(e),S=w.x+(~M[0].indexOf("%")?S/100*w.width:S),x=w.y+(~(M[1]||M[0]).indexOf("%")?x/100*w.height:x)),i||i!==!1&&o.smooth?(_=S-c,v=x-u,o.xOffset=h+(_*m+v*f)-_,o.yOffset=d+(_*g+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=x,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[wi]="0px 0px",r&&(_i(r,o,"xOrigin",c,S),_i(r,o,"yOrigin",u,x),_i(r,o,"xOffset",h,o.xOffset),_i(r,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+x)},zr=function(e,t){var n=e._gsap||new wd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,r="px",o="deg",l=ti(e,wi)||"0",c,u,h,d,m,g,f,p,_,v,M,S,x,w,C,y,b,N,I,K,W,D,U,O,V,H,B,j,J,Q,Z,he;return c=u=h=g=f=p=_=v=M=0,d=m=1,n.svg=!!(e.getCTM&&Ud(e)),w=Wl(e,n.svg),n.svg&&(O=(!n.uncache||l==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),ll(e,O||l,!!O||n.originIsAbsolute,n.smooth!==!1,w)),S=n.xOrigin||0,x=n.yOrigin||0,w!==Or&&(N=w[0],I=w[1],K=w[2],W=w[3],c=D=w[4],u=U=w[5],w.length===6?(d=Math.sqrt(N*N+I*I),m=Math.sqrt(W*W+K*K),g=N||I?As(I,N)*zi:0,_=K||W?As(K,W)*zi+g:0,_&&(m*=Math.abs(Math.cos(_*Us))),n.svg&&(c-=S-(S*N+x*K),u-=x-(S*I+x*W))):(he=w[6],Q=w[7],B=w[8],j=w[9],J=w[10],Z=w[11],c=w[12],u=w[13],h=w[14],C=As(he,J),f=C*zi,C&&(y=Math.cos(-C),b=Math.sin(-C),O=D*y+B*b,V=U*y+j*b,H=he*y+J*b,B=D*-b+B*y,j=U*-b+j*y,J=he*-b+J*y,Z=Q*-b+Z*y,D=O,U=V,he=H),C=As(-K,J),p=C*zi,C&&(y=Math.cos(-C),b=Math.sin(-C),O=N*y-B*b,V=I*y-j*b,H=K*y-J*b,Z=W*b+Z*y,N=O,I=V,K=H),C=As(I,N),g=C*zi,C&&(y=Math.cos(C),b=Math.sin(C),O=N*y+I*b,V=D*y+U*b,I=I*y-N*b,U=U*y-D*b,N=O,D=V),f&&Math.abs(f)+Math.abs(g)>359.9&&(f=g=0,p=180-p),d=tt(Math.sqrt(N*N+I*I+K*K)),m=tt(Math.sqrt(U*U+he*he)),C=As(D,U),_=Math.abs(C)>2e-4?C*zi:0,M=Z?1/(Z<0?-Z:Z):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Bd(ti(e,Mt)),O&&e.setAttribute("transform",O))),Math.abs(_)>90&&Math.abs(_)<270&&(s?(d*=-1,_+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,_+=_<=0?180:-180)),t=t||n.uncache,n.x=c-((n.xPercent=c&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+r,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+r,n.z=h+r,n.scaleX=tt(d),n.scaleY=tt(m),n.rotation=tt(g)+o,n.rotationX=tt(f)+o,n.rotationY=tt(p)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=M+r,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[wi]=Do(l)),n.xOffset=n.yOffset=0,n.force3D=tn.force3D,n.renderTransform=n.svg?Zv:Od?Vd:$v,n.uncache=0,n},Do=function(e){return(e=e.split(" "))[0]+" "+e[1]},Oa=function(e,t,n){var i=Ct(t);return tt(parseFloat(t)+parseFloat(Ti(e,"x",n+"px",i)))+i},$v=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Vd(e,t)},Pi="0deg",pr="0px",Di=") ",Vd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,m=n.skewY,g=n.scaleX,f=n.scaleY,p=n.transformPerspective,_=n.force3D,v=n.target,M=n.zOrigin,S="",x=_==="auto"&&e&&e!==1||_===!0;if(M&&(h!==Pi||u!==Pi)){var w=parseFloat(u)*Us,C=Math.sin(w),y=Math.cos(w),b;w=parseFloat(h)*Us,b=Math.cos(w),r=Oa(v,r,C*b*-M),o=Oa(v,o,-Math.sin(w)*-M),l=Oa(v,l,y*b*-M+M)}p!==pr&&(S+="perspective("+p+Di),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(x||r!==pr||o!==pr||l!==pr)&&(S+=l!==pr||x?"translate3d("+r+", "+o+", "+l+") ":"translate("+r+", "+o+Di),c!==Pi&&(S+="rotate("+c+Di),u!==Pi&&(S+="rotateY("+u+Di),h!==Pi&&(S+="rotateX("+h+Di),(d!==Pi||m!==Pi)&&(S+="skew("+d+", "+m+Di),(g!==1||f!==1)&&(S+="scale("+g+", "+f+Di),v.style[Mt]=S||"translate(0, 0)"},Zv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,m=n.target,g=n.xOrigin,f=n.yOrigin,p=n.xOffset,_=n.yOffset,v=n.forceCSS,M=parseFloat(r),S=parseFloat(o),x,w,C,y,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Us,c*=Us,x=Math.cos(l)*h,w=Math.sin(l)*h,C=Math.sin(l-c)*-d,y=Math.cos(l-c)*d,c&&(u*=Us,b=Math.tan(c-u),b=Math.sqrt(1+b*b),C*=b,y*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),x*=b,w*=b)),x=tt(x),w=tt(w),C=tt(C),y=tt(y)):(x=h,y=d,w=C=0),(M&&!~(r+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(M=Ti(m,"x",r,"px"),S=Ti(m,"y",o,"px")),(g||f||p||_)&&(M=tt(M+g-(g*x+f*C)+p),S=tt(S+f-(g*w+f*y)+_)),(i||s)&&(b=m.getBBox(),M=tt(M+i/100*b.width),S=tt(S+s/100*b.height)),b="matrix("+x+","+w+","+C+","+y+","+M+","+S+")",m.setAttribute("transform",b),v&&(m.style[Mt]=b)},Jv=function(e,t,n,i,s){var r=360,o=_t(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?zi:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=r,c!==c%(r/2)&&(c+=c<0?r:-r)),h==="cw"&&c<0?c=(c+r*Yu)%r-~~(c/r)*r:h==="ccw"&&c>0&&(c=(c-r*Yu)%r-~~(c/r)*r)),e._pt=d=new qt(e._pt,t,n,i,c,Uv),d.e=u,d.u="deg",e._props.push(n),d},eh=function(e,t){for(var n in t)e[n]=t[n];return e},Qv=function(e,t,n){var i=eh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,o,l,c,u,h,d,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),r[Mt]=t,o=zr(n,1),Fr(n,Mt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Mt],r[Mt]=t,o=zr(n,1),r[Mt]=c);for(l in bi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Ct(c),g=Ct(u),h=m!==g?Ti(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new qt(e._pt,o,l,h,d-h,Dd),e._pt.u=g||0,e._props.push(l));eh(o,i)};jt("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",s="Left",r=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?a+o:"border"+o+a});Po[e>1?"border"+a:a]=function(o,l,c,u,h){var d,m;if(arguments.length<4)return d=r.map(function(g){return Ui(o,g,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},r.forEach(function(g,f){return m[g]=d[f]=d[f]||d[(f-1)/2|0]}),o.init(l,m,h)}});var Gd={name:"css",register:al,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var r=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,m,g,f,p,_,v,M,S,x,w,C;Hl||al();for(f in t)if(f!=="autoRound"&&(u=t[f],!(Jt[f]&&Td(f,t,n,i,e,s)))){if(m=typeof u,g=Po[f],m==="function"&&(u=u.call(n,i,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Pr(u)),g)g(this,e,f,u,n)&&(C=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(f)+"").trim(),u+="",Mi.lastIndex=0,Mi.test(c)||(p=Ct(c),_=Ct(u)),_?p!==_&&(c=Ti(e,f,c,_)+_):p&&(u+=p),this.add(o,"setProperty",c,u,i,s,0,0,f),r.push(f);else if(m!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(n,i,e,s):l[f],_t(c)&&~c.indexOf("random(")&&(c=Pr(c)),Ct(c+"")||(c+=tn.units[f]||Ct(Ui(e,f))||""),(c+"").charAt(1)==="="&&(c=Ui(e,f))):c=Ui(e,f),d=parseFloat(c),v=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),f in gi&&(f==="autoAlpha"&&(d===1&&Ui(e,"visibility")==="hidden"&&h&&(d=0),_i(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),f!=="scale"&&f!=="transform"&&(f=gi[f],~f.indexOf(",")&&(f=f.split(",")[0]))),M=f in bi,M){if(S||(x=e._gsap,x.renderTransform&&!t.parseTransform||zr(e,t.parseTransform),w=t.smoothOrigin!==!1&&x.smooth,S=this._pt=new qt(this._pt,o,Mt,0,1,x.renderTransform,x,0,-1),S.dep=1),f==="scale")this._pt=new qt(this._pt,x,"scaleY",x.scaleY,(v?Os(x.scaleY,v+h):h)-x.scaleY||0),r.push("scaleY",f),f+="X";else if(f==="transformOrigin"){u=Yv(u),x.svg?ll(e,u,0,w,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==x.zOrigin&&_i(this,x,"zOrigin",x.zOrigin,_),_i(this,o,f,Do(c),Do(u)));continue}else if(f==="svgOrigin"){ll(e,u,1,w,0,this);continue}else if(f in kd){Jv(this,x,f,d,v?Os(d,v+u):u);continue}else if(f==="smoothOrigin"){_i(this,x,"smooth",x.smooth,u);continue}else if(f==="force3D"){x[f]=u;continue}else if(f==="transform"){Qv(this,u,e);continue}}else f in o||(f=Zs(f)||f);if(M||(h||h===0)&&(d||d===0)&&!zv.test(u)&&f in o)p=(c+"").substr((d+"").length),h||(h=0),_=Ct(u)||(f in tn.units?tn.units[f]:p),p!==_&&(d=Ti(e,f,c,_)),this._pt=new qt(this._pt,M?x:o,f,d,(v?Os(d,v+h):h)-d,!M&&(_==="px"||f==="zIndex")&&t.autoRound!==!1?Bv:Dd),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=kv);else if(f in o)qv.call(this,e,f,c,v?v+u:u);else if(f in e)this.add(e,f,c||e[f],v?v+u:u,i,s);else{Dl(f,u);continue}r.push(f)}}C&&Id(this)},get:Ui,aliases:gi,getSetter:function(e,t,n){var i=gi[t];return i&&i.indexOf(",")<0&&(t=i),t in bi&&t!==wi&&(e._gsap.x||Ui(e,"x"))?n&&qu===n?t==="scale"?Wv:Hv:(qu=n||{})&&(t==="scale"?Xv:jv):e.style&&!Il(e.style[t])?Vv:~t.indexOf("-")?Gv:Vl(e,t)},core:{_removeProperty:Fr,_getMatrix:Wl}};bn.utils.checkPrefix=Zs;(function(a,e,t,n){var i=jt(a+","+e+","+t,function(s){bi[s]=1});jt(e,function(s){tn.units[s]="deg",kd[s]=1}),gi[i[13]]=a+","+e,jt(n,function(s){var r=s.split(":");gi[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){tn.units[a]="px"});bn.registerPlugin(Gd);var Ur=bn.registerPlugin(Gd)||bn;Ur.core.Tween;const th={Vertex:"vertex",Fragment:"fragment"},Xl={None:"none",Frame:"frame",Object:"object"},eM=a=>{const e=[];for(const t in a){const n=a[t];n&&n.isNode===!0&&e.push(t)}return e},nh=a=>typeof a=="number"?"float":typeof a=="boolean"?"bool":(a==null?void 0:a.isVector2)===!0?"vec2":(a==null?void 0:a.isVector3)===!0?"vec3":(a==null?void 0:a.isVector4)===!0?"vec4":(a==null?void 0:a.isMatrix3)===!0?"mat3":(a==null?void 0:a.isMatrix4)===!0?"mat4":(a==null?void 0:a.isColor)===!0?"color":null,cl=(a,...e)=>{const t=a==null?void 0:a.slice(-4);return a==="color"?new Se(...e):t==="vec2"?new ve(...e):t==="vec3"?new P(...e):t==="vec4"?new Xe(...e):t==="mat3"?new Ht(...e):t==="mat4"?new Pe(...e):a==="bool"?!1:a==="float"||a==="int"||a==="uint"?0:null};let tM=0;class Qe{constructor(e=null){this.isNode=!0,this.nodeType=e,this.updateType=Xl.None,this.uuid=To.generateUUID(),Object.defineProperty(this,"id",{value:tM++})}get type(){return this.constructor.name}getChildren(){const e=[];for(const t in this){const n=this[t];if(Array.isArray(n)===!0)for(const i of n)(i==null?void 0:i.isNode)===!0&&e.push(i);else(n==null?void 0:n.isNode)===!0&&e.push(n)}return e}getHash(){return this.uuid}getUpdateType(){return this.updateType}getNodeType(){return this.nodeType}getConstructHash(){return this.uuid}getReference(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}construct(e){const t=e.getNodeProperties(this);for(const n of this.getChildren())t["_node"+n.id]=n;return null}analyze(e){const t=e.getDataFromNode(this);if(t.dependenciesCount=t.dependenciesCount===void 0?1:t.dependenciesCount+1,t.dependenciesCount===1){const n=e.getNodeProperties(this);for(const i of Object.values(n))(i==null?void 0:i.isNode)===!0&&i.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if((n==null?void 0:n.isNode)===!0)return n.build(e,t)}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getReference(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addStack(this);let i=null;const s=e.getBuildStage();if(s==="construct"){const r=e.getNodeProperties(this);if(r.initialized!==!0||e.context.tempRead===!1){r.initialized=!0,r.outputNode=this.construct(e);for(const o of Object.values(r))(o==null?void 0:o.isNode)===!0&&o.build(e)}}else if(s==="analyze")this.analyze(e);else if(s==="generate")if(this.generate.length===1){const o=this.getNodeType(e),l=e.getDataFromNode(this);i=l.snippet,i===void 0&&(i=this.generate(e)||"",l.snippet=i),i=e.format(i,o,t)}else i=this.generate(e,t)||"";return e.removeStack(this),i}serialize(e){const t=eM(this);if(t.length>0){const n={};for(const i of t)n[i]=this[i].toJSON(e.meta).uuid;e.inputNodes=n}}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes){const i=e.inputNodes[n];this[n]=t[i]}}}toJSON(e){const{uuid:t,type:n}=this,i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{},nodes:{}});let s=e.nodes[t];s===void 0&&(s={uuid:t,type:n,meta:e,metadata:{version:4.5,type:"Node",generator:"Node.toJSON"}},e.nodes[s.uuid]=s,this.serialize(s),delete s.meta);function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}if(i){const o=r(e.textures),l=r(e.images),c=r(e.nodes);o.length>0&&(s.textures=o),l.length>0&&(s.images=l),c.length>0&&(s.nodes=c)}return s}}class Zn extends Qe{constructor(e,t=null){super(),this.node=e,this.name=t}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.getNodeType(e),n=this.node,i=this.name,s=e.getVaryFromNode(this,t);i!==null&&(s.name=i);const r=e.getPropertyName(s,th.Vertex);return e.flowNodeFromShaderStage(th.Vertex,n,t,r),e.getPropertyName(s)}}class jl extends Qe{constructor(e,t=null){super(t),this._attributeName=e}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e),i=e.geometry.getAttribute(n);t=e.getTypeFromLength(i.itemSize)}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=e.getAttribute(this.getAttributeName(e),this.getNodeType(e));return e.isShaderStage("vertex")?t.name:new Zn(this).build(e,t.type)}}class nM extends Qe{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e,t){const n=this.callNode.build(e,"void");return n!==""&&e.addFlowCode(n),this.outputNode.build(e,t)}}class iM extends Qe{constructor(e="",t="code"){super(t),this.isCodeNode=!0,this.code=e,this._includes=[]}setIncludes(e){return this._includes=e,this}getIncludes(){return this._includes}generate(e){const t=this.getIncludes(e);for(const i of t)i.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}}class yo extends Qe{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}construct(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const i=this.node.build(e,t);return e.setContext(n),i}}class Go extends Qe{constructor(e){super(e),this.isTempNode=!0}build(e,t){if(e.getBuildStage()==="generate"){const i=e.getVectorType(this.getNodeType(e,t)),s=e.getDataFromNode(this);if(e.context.tempRead!==!1&&s.propertyName!==void 0)return e.format(s.propertyName,i,t);if(e.context.tempWrite!==!1&&i!=="void "&&t!=="void"&&s.dependenciesCount>1){const r=super.build(e,i),o=e.getVarFromNode(this,i),l=e.getPropertyName(o);return e.addFlowCode(`${l} = ${r}`),s.snippet=r,s.propertyName=l,e.format(s.propertyName,i,t)}}return super.build(e,t)}}class ul extends Go{constructor(e="",t="void"){super(t),this.snipped=e}generate(e){const t=this.getNodeType(e),n=this.snipped;if(t==="void")e.addFlowCode(n);else return`( ${n} )`}}class sM extends Go{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,i=n.getInputs(e),s=this.parameters;for(const o of i){const l=s[o.name];if(l!==void 0)t.push(l.build(e,o.type));else throw new Error(`FunctionCallNode: Input '${o.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}class rM extends Qe{constructor(){super("uint"),this.isInstanceIndexNode=!0}generate(e){return e.getInstanceIndex()}}class sr extends Qe{constructor(e=null,t="vec4"){super(t),this.name=e}getHash(e){return this.name||super.getHash(e)}generate(e){const t=e.getVarFromNode(this,this.getNodeType(e)),n=this.name;return n!==null&&(t.name=n),e.getPropertyName(t)}}class Hd extends Qe{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e}getNodeType(){return this.nodeType===null?nh(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}serialize(e){var t,n;super.serialize(e),e.value=((n=(t=this.value)==null?void 0:t.toArray)==null?void 0:n.call(t))||this.value,e.valueType=nh(this.value),e.nodeType=this.nodeType}deserialize(e){var t,n;super.deserialize(e),this.nodeType=e.nodeType,this.value=cl(e.valueType),this.value=((n=(t=this.value)==null?void 0:t.fromArray)==null?void 0:n.call(t,e.value))||e.value}generate(){console.warn("Abstract function.")}}class ql extends Hd{constructor(e,t=null){super(e,t),this.isUniformNode=!0}getUniformHash(e){return this.getHash(e)}generate(e,t){const n=this.getNodeType(e),i=this.getUniformHash(e);let s=e.getNodeFromHash(i);s===void 0&&(e.setHashNode(this,i),s=this);const r=s.getInputType(e),o=e.getUniformFromNode(s,e.shaderStage,r),l=e.getPropertyName(o);return e.format(l,n,t)}}class Oe extends Go{constructor(e,t,n,...i){if(super(),this.op=e,i.length>0){let s=n;for(let r=0;r<i.length;r++)s=new Oe(e,s,i[r]);n=s}this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,i=this.aNode,s=this.bNode,r=i.getNodeType(e),o=s.getNodeType(e);if(r==="void"||o==="void")return"void";if(n==="="||n==="%")return r;if(n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return"int";if(n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const l=e.getTypeLength(t);return l>1?`bvec${l}`:"bool"}else return r==="float"&&e.isMatrix(o)?o:e.isMatrix(r)&&e.isVector(o)?e.getVectorFromMatrix(r):e.isVector(r)&&e.isMatrix(o)?e.getVectorFromMatrix(o):e.getTypeLength(o)>e.getTypeLength(r)?o:r}generate(e,t){const n=this.op,i=this.aNode,s=this.bNode,r=this.getNodeType(e,t);let o=null,l=null;r!=="void"?(o=i.getNodeType(e),l=s.getNodeType(e),n==="="?l=o:n==="<"||n===">"||n==="<="||n===">="?e.isVector(o)?l=o:o=l="float":e.isMatrix(o)&&e.isVector(l)?l=e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(l)?o=e.getVectorFromMatrix(l):o=l=r):o=l=r;const c=i.build(e,o),u=s.build(e,l),h=e.getTypeLength(t);if(t!=="void")return n==="="?(e.addFlowCode(`${c} ${this.op} ${u}`),c):n===">"&&h>1?e.format(`${e.getMethod("greaterThan")}( ${c}, ${u} )`,r,t):n==="<="&&h>1?e.format(`${e.getMethod("lessThanEqual")}( ${c}, ${u} )`,r,t):e.format(`( ${c} ${this.op} ${u} )`,r,t);if(o!=="void")return e.format(`${c} ${this.op} ${u}`,r,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}class Wd extends Qe{constructor(e,t=null){super(),this.node=e,this.name=t}op(e,...t){return this.node=new Oe(e,this.node,...t),this}assign(...e){return this.op("=",...e)}add(...e){return this.op("+",...e)}sub(...e){return this.op("-",...e)}mul(...e){return this.op("*",...e)}div(...e){return this.op("/",...e)}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node,n=this.name;if(n===null&&t.isTempNode===!0)return t.build(e);const i=e.getVectorType(this.getNodeType(e)),s=t.build(e,i),r=e.getVarFromNode(this,i);n!==null&&(r.name=n);const o=e.getPropertyName(r);return e.addFlowCode(`${o} = ${s}`),o}}const ft=class extends Qe{constructor(e=ft.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=Xl.Object,this._uniformNode=new ql(null)}getNodeType(){const e=this.scope;if(e===ft.WORLD_MATRIX||e===ft.VIEW_MATRIX)return"mat4";if(e===ft.NORMAL_MATRIX)return"mat3";if(e===ft.POSITION||e===ft.VIEW_POSITION)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,i=this.scope;if(i===ft.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(i===ft.NORMAL_MATRIX)n.value=t.normalMatrix;else if(i===ft.WORLD_MATRIX)n.value=t.matrixWorld;else if(i===ft.POSITION)n.value.setFromMatrixPosition(t.matrixWorld);else if(i===ft.VIEW_POSITION){const s=e.camera;n.value=n.value||new P,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(s.matrixWorldInverse)}}generate(e){const t=this.scope;return t===ft.WORLD_MATRIX||t===ft.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===ft.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===ft.POSITION||t===ft.VIEW_POSITION)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}};let Yn=ft;fe(Yn,"VIEW_MATRIX","viewMatrix"),fe(Yn,"NORMAL_MATRIX","normalMatrix"),fe(Yn,"WORLD_MATRIX","worldMatrix"),fe(Yn,"POSITION","position"),fe(Yn,"VIEW_POSITION","viewPosition");const Bi=class extends Yn{constructor(e=Bi.POSITION){super(e)}getNodeType(e){return this.scope===Bi.PROJECTION_MATRIX?"mat4":super.getNodeType(e)}update(e){const t=e.camera,n=this._uniformNode,i=this.scope;i===Bi.PROJECTION_MATRIX?n.value=t.projectionMatrix:i===Bi.VIEW_MATRIX?n.value=t.matrixWorldInverse:(this.object3d=t,super.update(e))}generate(e){return this.scope===Bi.PROJECTION_MATRIX&&(this._uniformNode.nodeType="mat4"),super.generate(e)}};let St=Bi;fe(St,"PROJECTION_MATRIX","projectionMatrix");class oM extends Qe{constructor(e,t,n=null){super(),this.property=e,this.uniformType=t,this.object=n,this.node=null,this.updateType=Xl.Object,this.setNodeType(t)}setNodeType(e){this.node=new ql(null,e),this.nodeType=e,e==="color"?this.nodeType="vec3":e==="texture"&&(this.nodeType="vec4")}getNodeType(){return this.uniformType}update(e){const n=(this.object!==null?this.object:e.object)[this.property];this.node.value=n}generate(e){return this.node.build(e,this.getNodeType(e))}}class Xn extends oM{constructor(e,t,n=null){super(e,t,n),this.material=n}update(e){this.object=this.material!==null?this.material:e.material,super.update(e)}}class aM extends jl{constructor(e=0){super(null,"vec2"),this.isUVNode=!0,this.index=e}getAttributeName(){const e=this.index;return"uv"+(e>0?e+1:"")}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}class yr extends ql{constructor(e,t=new aM,n=null){super(e,"vec4"),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n}getUniformHash(){return this.value.uuid}getInputType(){return"texture"}generate(e,t){const n=this.value;if(!n||n.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const i=super.generate(e,"texture");if(t==="sampler")return i+"_sampler";if(e.isReference(t))return i;{const s=e.getDataFromNode(this);let r=s.snippet;if(r===void 0){const o=this.uvNode.build(e,"vec2"),l=this.levelNode;if(l!==null){const c=l.build(e,"float");r=e.getTextureLevel(i,o,c)}else r=e.getTexture(i,o);s.snippet=r}return e.format(r,"vec4",t)}}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}}const lM=["x","y","z","w"],rr=new Map;rr.set(1,"float");rr.set(2,"vec2");rr.set(3,"vec3");rr.set(4,"vec4");rr.set(9,"mat3");rr.set(16,"mat4");const cM="xyzw";class ji extends Qe{constructor(e,t="x"){super(),this.node=e,this.components=t}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(lM.indexOf(t)+1,e);return e}getNodeType(e){return e.getTypeFromLength(this.components.length)}generate(e,t){const n=this.node,i=e.getTypeLength(n.getNodeType(e));let s=null;if(i>1){let r=null;this.getVectorLength()>=i&&(r=e.getTypeFromLength(this.getVectorLength()));const l=n.build(e,r);this.components.length===i&&this.components===cM.slice(0,this.components.length)?s=e.format(l,r,t):s=e.format(`${l}.${this.components}`,this.getNodeType(e),t)}else s=n.build(e,t);return s}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}const Tt=class extends Qe{constructor(e=Tt.COLOR){super(),this.scope=e}getNodeType(e){const t=this.scope,n=e.context.material;if(t===Tt.COLOR)return n.map!==null?"vec4":"vec3";if(t===Tt.OPACITY||t===Tt.ROTATION)return"float";if(t===Tt.EMISSIVE)return"vec3";if(t===Tt.ROUGHNESS||t===Tt.METALNESS)return"float"}generate(e,t){var r,o,l,c,u;const n=e.context.material,i=this.scope;let s=null;if(i===Tt.ALPHA_TEST)s=new Xn("alphaTest","float");else if(i===Tt.COLOR){const h=new Xn("color","color");if(((r=n.map)==null?void 0:r.isTexture)===!0){const d=new yr(n.map);s=new Oe("*",h,d)}else s=h}else if(i===Tt.OPACITY){const h=new Xn("opacity","float");((o=n.alphaMap)==null?void 0:o.isTexture)===!0?s=new Oe("*",h,new Xn("alphaMap","texture")):s=h}else if(i===Tt.ROUGHNESS){const h=new Xn("roughness","float");((l=n.roughnessMap)==null?void 0:l.isTexture)===!0?s=new Oe("*",h,new ji(new yr(n.roughnessMap),"g")):s=h}else if(i===Tt.METALNESS){const h=new Xn("metalness","float");((c=n.metalnessMap)==null?void 0:c.isTexture)===!0?s=new Oe("*",h,new ji(new yr(n.metalnessMap),"b")):s=h}else if(i===Tt.EMISSIVE){const h=new Xn("emissive","color");((u=n.emissiveMap)==null?void 0:u.isTexture)===!0?s=new Oe("*",h,new yr(n.emissiveMap)):s=h}else if(i===Tt.ROTATION)s=new Xn("rotation","float");else{const h=this.getNodeType(e);s=new Xn(i,h)}return s.build(e,t)}};let Ze=Tt;fe(Ze,"ALPHA_TEST","alphaTest"),fe(Ze,"COLOR","color"),fe(Ze,"OPACITY","opacity"),fe(Ze,"ROUGHNESS","roughness"),fe(Ze,"METALNESS","metalness"),fe(Ze,"EMISSIVE","emissive"),fe(Ze,"ROTATION","rotation");class ot extends Yn{constructor(e=ot.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}class Xd extends Qe{constructor(e=[]){super(),this.nodes=e}getNodeType(e){return e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),i=this.nodes,s=[];for(const o of i){const l=o.build(e);s.push(l)}const r=`${e.getType(n)}( ${s.join(", ")} )`;return e.format(r,n,t)}}const Ye=class extends Go{constructor(e,t,n=null,i=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=i}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,i=this.cNode?this.cNode.getNodeType(e):null,s=e.isMatrix(t)?0:e.getTypeLength(t),r=e.isMatrix(n)?0:e.getTypeLength(n),o=e.isMatrix(i)?0:e.getTypeLength(i);return s>r&&s>o?t:r>o?n:o>s?i:t}getNodeType(e){const t=this.method;return t===Ye.LENGTH||t===Ye.DISTANCE||t===Ye.DOT?"float":t===Ye.CROSS?"vec3":this.getInputType(e)}generate(e,t){const n=this.method,i=this.getNodeType(e),s=this.getInputType(e),r=this.aNode,o=this.bNode,l=this.cNode,c=e.renderer.isWebGLRenderer===!0;if(c&&(n===Ye.DFDX||n===Ye.DFDY)&&t==="vec3")return new Xd([new Ye(n,new ji(r,"x")),new Ye(n,new ji(r,"y")),new Ye(n,new ji(r,"z"))]).build(e);if(n===Ye.TRANSFORM_DIRECTION){let u=r,h=o;e.isMatrix(u.getNodeType(e))?h=new ul(`${e.getType("vec4")}( ${h.build(e,"vec3")}, 0.0 )`,"vec4"):u=new ul(`${e.getType("vec4")}( ${u.build(e,"vec3")}, 0.0 )`,"vec4");const d=new ji(new Oe("*",u,h),"xyz");return new Ye(Ye.NORMALIZE,d).build(e)}else{if(n===Ye.SATURATE)return e.format(`clamp( ${r.build(e,s)}, 0.0, 1.0 )`,i,t);if(n===Ye.NEGATE)return e.format("( -"+r.build(e,s)+" )",i,t);if(n===Ye.INVERT)return e.format("( 1.0 - "+r.build(e,s)+" )",i,t);{const u=[];return n===Ye.CROSS?u.push(r.build(e,i),o.build(e,i)):n===Ye.STEP?u.push(r.build(e,e.getTypeLength(r.getNodeType(e))===1?"float":s),o.build(e,s)):c&&(n===Ye.MIN||n===Ye.MAX)||n===Ye.MOD?u.push(r.build(e,s),o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":s)):n===Ye.REFRACT?u.push(r.build(e,s),o.build(e,s),l.build(e,"float")):n===Ye.MIX?u.push(r.build(e,s),o.build(e,s),l.build(e,e.getTypeLength(l.getNodeType(e))===1?"float":s)):(u.push(r.build(e,s)),l!==null?u.push(o.build(e,s),l.build(e,s)):o!==null&&u.push(o.build(e,s))),e.format(`${e.getMethod(n)}( ${u.join(", ")} )`,i,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}};let F=Ye;fe(F,"RADIANS","radians"),fe(F,"DEGREES","degrees"),fe(F,"EXP","exp"),fe(F,"EXP2","exp2"),fe(F,"LOG","log"),fe(F,"LOG2","log2"),fe(F,"SQRT","sqrt"),fe(F,"INVERSE_SQRT","inversesqrt"),fe(F,"FLOOR","floor"),fe(F,"CEIL","ceil"),fe(F,"NORMALIZE","normalize"),fe(F,"FRACT","fract"),fe(F,"SIN","sin"),fe(F,"COS","cos"),fe(F,"TAN","tan"),fe(F,"ASIN","asin"),fe(F,"ACOS","acos"),fe(F,"ATAN","atan"),fe(F,"ABS","abs"),fe(F,"SIGN","sign"),fe(F,"LENGTH","length"),fe(F,"NEGATE","negate"),fe(F,"INVERT","invert"),fe(F,"DFDX","dFdx"),fe(F,"DFDY","dFdy"),fe(F,"SATURATE","saturate"),fe(F,"ROUND","round"),fe(F,"ATAN2","atan2"),fe(F,"MIN","min"),fe(F,"MAX","max"),fe(F,"MOD","mod"),fe(F,"STEP","step"),fe(F,"REFLECT","reflect"),fe(F,"DISTANCE","distance"),fe(F,"DOT","dot"),fe(F,"CROSS","cross"),fe(F,"POW","pow"),fe(F,"TRANSFORM_DIRECTION","transformDirection"),fe(F,"MIX","mix"),fe(F,"CLAMP","clamp"),fe(F,"REFRACT","refract"),fe(F,"SMOOTHSTEP","smoothstep"),fe(F,"FACEFORWARD","faceforward");const Et=class extends Qe{constructor(e=Et.LOCAL){super("vec3"),this.scope=e}getHash(){return`position-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===Et.GEOMETRY)n=new jl("position","vec3");else if(t===Et.LOCAL)n=new Zn(new Et(Et.GEOMETRY));else if(t===Et.WORLD){const i=new F(F.TRANSFORM_DIRECTION,new ot(ot.WORLD_MATRIX),new Et(Et.LOCAL));n=new Zn(i)}else if(t===Et.VIEW){const i=new Oe("*",new ot(ot.VIEW_MATRIX),new Et(Et.LOCAL));n=new Zn(i)}else if(t===Et.VIEW_DIRECTION){const i=new F(F.NEGATE,new Et(Et.VIEW));n=new F(F.NORMALIZE,new Zn(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}};let mt=Et;fe(mt,"GEOMETRY","geometry"),fe(mt,"LOCAL","local"),fe(mt,"WORLD","world"),fe(mt,"VIEW","view"),fe(mt,"VIEW_DIRECTION","viewDirection");class uM extends Qe{constructor(e=new mt){super("vec4"),this.position=e}generate(e){const t=this.position,n=new Oe("*",new St(St.PROJECTION_MATRIX),new ot(ot.VIEW_MATRIX));return new Oe("*",n,t).build(e)}}const Zt=class extends Qe{constructor(e=Zt.LOCAL){super("vec3"),this.scope=e}getHash(){return`normal-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===Zt.GEOMETRY)n=new jl("normal","vec3");else if(t===Zt.LOCAL)n=new Zn(new Zt(Zt.GEOMETRY));else if(t===Zt.VIEW){const i=new Oe("*",new ot(ot.NORMAL_MATRIX),new Zt(Zt.LOCAL));n=new F(F.NORMALIZE,new Zn(i))}else if(t===Zt.WORLD){const i=new F(F.TRANSFORM_DIRECTION,new Zt(Zt.VIEW),new St(St.VIEW_MATRIX));n=new F(F.NORMALIZE,new Zn(i))}return n.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}};let Bt=Zt;fe(Bt,"GEOMETRY","geometry"),fe(Bt,"LOCAL","local"),fe(Bt,"WORLD","world"),fe(Bt,"VIEW","view");class hM extends Qe{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}class dM extends Qe{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){return e.getFrontFacing()}}class fM extends Qe{constructor(e,t,n){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e),n=this.elseNode.getNodeType(e);return e.getTypeLength(n)>e.getTypeLength(t)?n:t}generate(e){const t=this.getNodeType(e),n={tempWrite:!1},i=new sr(null,t).build(e),s=new yo(this.condNode).build(e,"bool"),r=new yo(this.ifNode,n).build(e,t),o=new yo(this.elseNode,n).build(e,t);return e.addFlowCode(`if ( ${s} ) {

		${i} = ${r};

	} else {

		${i} = ${o};

	}`),i}}class jd extends Qe{constructor(e,t){super(),this.node=e,this.indexNode=t}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}class ih extends Qe{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(){return this.convertTo}generate(e,t){const n=this.convertTo,i=this.node,s=this.getNodeType(e);let r=null;if(e.isReference(n)===!1){const o=i.build(e,n);r=e.format(o,s,n)}else r=i.build(e,n);return e.format(r,s,t)}}class zn extends Hd{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.getConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}const qd={construct(a,e){const t=e.shift();return a(Yd(t),...e)},get:function(a,e){if(typeof e=="string"&&a[e]===void 0){if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=e.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),Wt(new ji(a,e));if(/^\d+$/.test(e)===!0)return Wt(new jd(a,new zn(Number(e),"uint")))}return a[e]}},za=new WeakMap,pM=function(a){const e=typeof a;if(e==="number"||e==="boolean")return Wt($d(a));if(e==="object"&&(a==null?void 0:a.isNode)===!0){let t=za.get(a);return t===void 0&&(t=new Proxy(a,qd),za.set(a,t),za.set(t,t)),t}return a},mM=function(a){for(const e in a)a[e]=Wt(a[e]);return a},gM=function(a){const e=a.length;for(let t=0;t<e;t++)a[t]=Wt(a[t]);return a},_M=function(a,e=null,t=null){return e===null?(...n)=>Wt(new a(...vo(n))):t===null?(...n)=>Wt(new a(e,...vo(n))):(t=Wt(t),(...n)=>Wt(new a(e,...vo(n),t)))},xM=function(a,...e){return Wt(new a(...vo(e)))},yM=function(a){const e={build:t=>(e.call({},t),""),call:(t,n)=>(t=Yd(t),Wt(a(t,n)))};return e};new Proxy(yM,qd);const Wt=a=>pM(a),Yd=a=>new mM(a),vo=a=>new gM(a),ae=(...a)=>new _M(...a),De=(...a)=>new xM(...a),vM=[!1,!0],MM=[0,1,2,3],SM=[-1,-2],Kd=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],Yl=new Map;for(const a of vM)Yl.set(a,new zn(a));const Kl=new Map;for(const a of MM)Kl.set(a,new zn(a,"uint"));const $l=new Map([...Kl].map(a=>new zn(a.value,"int")));for(const a of SM)$l.set(a,new zn(a,"int"));const Ho=new Map([...$l].map(a=>new zn(a.value)));for(const a of Kd)Ho.set(a,new zn(a));for(const a of Kd)Ho.set(-a,new zn(-a));const bM={bool:Yl,uint:Kl,ints:$l,float:Ho},sh=new Map([...Yl,...Ho]),$d=a=>sh.has(a)?sh.get(a):a.isNode===!0?a:new zn(a),wM=function(a,e=null){return(...t)=>{if(t.length===0)return Wt(new zn(cl(a),a));{if(a==="color"&&t[0].isNode!==!0&&(t=[cl(a,...t)]),t.length===1&&e!==null&&e.has(t[0]))return e.get(t[0]);const n=t.map($d);return n.length===1?Wt(n[0].nodeType===a?n[0]:new ih(n[0],a)):Wt(new ih(new Xd(n),a))}}},Zl=new wM("float",bM.float);ae(nM);ae(iM);ae(yo);ae(ul);ae(sM);De(rM);ae(Wd);ae(Zn);De(St,St.PROJECTION_MATRIX);const TM=De(St,St.VIEW_MATRIX);De(St,St.NORMAL_MATRIX);De(St,St.WORLD_MATRIX);De(St,St.POSITION);De(Ze,Ze.ALPHA_TEST);De(Ze,Ze.COLOR);De(Ze,Ze.EMISSIVE);De(Ze,Ze.OPACITY);De(Ze,Ze.ROUGHNESS);De(Ze,Ze.METALNESS);De(Ze,Ze.ROTATION);De(sr,"DiffuseColor","vec4");De(sr,"Roughness","float");De(sr,"Metalness","float");De(sr,"AlphaTest","float");De(sr,"SpecularColor","color");ae(uM);De(Bt,Bt.GEOMETRY);De(Bt,Bt.LOCAL);De(Bt,Bt.WORLD);const EM=De(Bt,Bt.VIEW),Zd=De(Wd,EM,"TransformedNormalView");De(ot,ot.VIEW_MATRIX);De(ot,ot.NORMAL_MATRIX);De(ot,ot.WORLD_MATRIX);De(ot,ot.POSITION);De(ot,ot.VIEW_POSITION);De(mt,mt.GEOMETRY);De(mt,mt.LOCAL);De(mt,mt.WORLD);De(mt,mt.VIEW);const AM=De(mt,mt.VIEW_DIRECTION);ae(yr);De(hM);Zl(1e-6);Zl(1e6);ae(fM);ae(Oe,"+");const CM=ae(Oe,"-"),RM=ae(Oe,"*");ae(Oe,"/");ae(Oe,"%");ae(Oe,"==");ae(Oe,"=");ae(Oe,"<");ae(Oe,">");ae(Oe,"<=");ae(Oe,">=");ae(Oe,"&&");ae(Oe,"||");ae(Oe,"^^");ae(Oe,"&");ae(Oe,"|");ae(Oe,"^");ae(Oe,"<<");ae(Oe,">>");ae(F,F.RADIANS);ae(F,F.DEGREES);ae(F,F.EXP);ae(F,F.EXP2);ae(F,F.LOG);ae(F,F.LOG2);ae(F,F.SQRT);ae(F,F.INVERSE_SQRT);ae(F,F.FLOOR);ae(F,F.CEIL);const LM=ae(F,F.NORMALIZE);ae(F,F.FRACT);ae(F,F.SIN);ae(F,F.COS);ae(F,F.TAN);ae(F,F.ASIN);ae(F,F.ACOS);ae(F,F.ATAN);ae(F,F.ABS);ae(F,F.SIGN);ae(F,F.LENGTH);ae(F,F.NEGATE);ae(F,F.INVERT);ae(F,F.DFDX);ae(F,F.DFDY);const IM=ae(F,F.SATURATE);ae(F,F.ROUND);ae(F,F.ATAN2);ae(F,F.MIN);ae(F,F.MAX);ae(F,F.MOD);ae(F,F.STEP);ae(F,F.REFLECT);ae(F,F.DISTANCE);const PM=ae(F,F.DOT);ae(F,F.CROSS);ae(F,F.POW);ae(F,F.POW,2);ae(F,F.POW,3);ae(F,F.POW,4);const DM=ae(F,F.TRANSFORM_DIRECTION);ae(F,F.MIX);ae(F,F.CLAMP);ae(F,F.REFRACT);ae(F,F.SMOOTHSTEP);ae(F,F.FACEFORWARD);const NM=De(dM);CM(RM(Zl(NM),2),1);ae(jd);IM(PM(Zd,AM));LM(DM(Zd,TM));let _n,$e,ln,xn,xi,No,Dt,Jl,fi,Nt,Jd,hl,In,FM=new Vx,Ql=!1;const Fo={x:void 0,y:void 0};function OM(){const a=document.getElementById("container");ln=new xx,$e=new Ft(60,innerWidth/innerHeight,.1,5e3),_n=new py,_n.setSize(innerWidth,innerHeight),_n.domElement.style.position="absolute",_n.domElement.style.top=0,_n.domElement.style.margin=0,_n.domElement.style.padding=0,xi=new ty,xn=new Ph,xn.setSize(innerWidth,innerHeight),xn.domElement.style.position="absolute",xn.domElement.style.top=0,xn.domElement.style.zIndex=-1,xn.shadowMap.enabled=!0,_n.domElement.appendChild(xn.domElement),xn.setPixelRatio(devicePixelRatio*1.5),No=new uy($e,_n.domElement),No.enabled=!1,$e.position.set(340,90,760);const e=new Bh(16777215,1);e.position.set(1e3,400,600),e.castShadow=!0,e.shadow.camera.top=200,e.shadow.camera.bottom=-500,e.shadow.camera.left=-1200,e.shadow.camera.right=200,e.shadow.camera.near=.1,e.shadow.camera.far=1e3,e.shadow.bias=-.01,e.rotateY(Math.PI/180*-90),ln.add(e);const t=new kh,n=document.getElementById("outer"),i=document.getElementById("loading-progress");t.onProgress=function(u,h,d){n.style.background=`conic-gradient(purple ${h/d*100*3.6}deg, rgba(1,1,1, 0.30) 4deg)`,i.textContent=String((h/d*100).toFixed(0))+"%"};const s=document.querySelector(".loading-container");t.onLoad=function(){s.style.display="none",a.appendChild(_n.domElement),rh(),zM()};const r=new my(t),o=document.createElement("div");o.style.width="1080px",o.style.height="810px";const l=document.createElement("iframe");l.style.width="1080px",l.style.height="810px",l.style.border="0px",l.src="/pagestjsportfolio/desktop.html",o.appendChild(l),fi=new dy(o);const c=.027;fi.scale.set(c*1.2,c,.1),r.load("/pagestjsportfolio/models/laptop.gltf",u=>{Dt=u.scene,u.scene.scale.set(12,12,12),u.scene.position.set(340,90,760),u.scene.rotateY(Math.PI/180*200),ln.add(u.scene),fi.position.set(Dt.position.x+5.5,102.6,Dt.position.z+15),fi.rotation.set(Dt.rotation.x,Dt.rotation.y,Dt.rotation.z),fi.rotateX(-.25),$e.rotation.set(Dt.position)}),r.load("/pagestjsportfolio/models/cup.glb",u=>{Jl=u.scene,u.scene.scale.set(4,4,4),u.scene.position.set(305,91,760),u.scene.rotateY(Math.PI/2*90),ln.add(u.scene)}),r.load("/pagestjsportfolio/models/layout_baked2.glb",u=>{Jd=u.scene,u.scene.scale.set(100,100,100),u.scene.traverse(function(h){h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0)}),ln.add(u.scene)}),r.load("/pagestjsportfolio/models/notebook4.glb",u=>{Nt=u.scene,ln.add(u.scene),u.scene.scale.set(2.5,2.5,2.5),u.scene.position.set(293,91,750),u.scene.rotateY(Math.PI/180*160),console.log(u),hl=new ey(Nt),In=hl.clipAction(u.animations[1]),In.reset(),In.clampWhenFinished=!0,In.timeScale=1,In.setLoop(fh,1),In.play()}),new Xy(t).load("/pagestjsportfolio/models/lakeside_4k.hdr",function(u){u.mapping=Mo,ln.background=u,ln.environment=u}),addEventListener("resize",rh),addEventListener("mousemove",u=>{Fo.x=u.clientX/innerWidth*2-1,Fo.y=-(u.clientY/innerHeight)*2+1}),xn.domElement.addEventListener("mousedown",UM,!1)}function rh(){$e.aspect=innerWidth/innerHeight,dl(1),xn.setSize(innerWidth,innerHeight),_n.setSize(innerWidth,innerHeight),$e.updateProjectionMatrix()}function Qd(){requestAnimationFrame(Qd),xn.render(ln,$e),_n.render(ln,$e),xi.setFromCamera(Fo,$e);const a=xi.intersectObject(Dt,!0),e=xi.intersectObject(Nt,!0);a.length>0?(Dt.children[0].children[0].material.color.b=1,Dt.children[0].children[0].material.color.g=1,Dt.children[0].children[0].material.color.r=1):(Dt.children[0].children[0].material.color.b=.31081438064575195,Dt.children[0].children[0].material.color.g=.31081438064575195,Dt.children[0].children[0].material.color.r=.31081438064575195),e.length>0&&Ql!==!0?(Nt.children[0].children[1].material.color.b=1,Nt.children[0].children[1].material.color.g=1,Nt.children[0].children[1].material.color.r=1):(Nt.children[0].children[1].material.color.b=0,Nt.children[0].children[1].material.color.g=0,Nt.children[0].children[1].material.color.r=0);let t=FM.getDelta();hl.update(t)}function zM(){Ur.timeline().to($e.position,{x:313,y:116,z:670,duration:2.2,onUpdate:function(){$e.lookAt(Jl.position)}})}function UM(){xi.setFromCamera(Fo,$e);const a=xi.intersectObject(Dt,!0),e=xi.intersectObject(Nt,!0),t=xi.intersectObject(Jd.children[21],!0);a.length>0?Ur.to($e.position,{x:335.5,y:105,z:745,duration:2.2,onUpdate:function(){$e.lookAt(fi.position)},onComplete:function(){ln.add(fi),dl(.8),$e.updateProjectionMatrix()}}):e.length>0?Ur.to($e.position,{x:Nt.position.x-2,y:110,z:Nt.position.z-10,duration:2.2,onUpdate:function(){$e.lookAt(Nt.position.x-6.5,Nt.position.y,Nt.position.z-2),In.timeScale=-1,In.paused=!1},onComplete:function(){Ql=!0,dl(1.2),$e.updateProjectionMatrix()}}):t.length>0&&(No.enabled=No.enabled===!1,ef())}function ef(){Ur.to($e.position,{x:313,y:116,z:670,ease:"none",duration:1.2,onStart:function(){ln.remove(fi),Ql=!1},onUpdate:function(){$e.lookAt(Jl.position),In.timeScale=1,In.paused=!1}})}function tf(){const a=document.getElementById("loading");a.style.display==="none"&&(document.getElementById("desktop").style.display="none",a.style.display="block",document.getElementById("controls").style.display="block",document.getElementById("arrow-down").style.display="block"),document.getElementById("desktop").style.display="none",a.style.display="flex",document.getElementById("controls").style.display="flex",document.getElementById("arrow-down").style.display="flex",OM(),Qd()}function dl(a){if($e.aspect>16/9)$e.fov=50*a;else{const e=Math.tan(To.degToRad(50*a/2)),t=$e.aspect/(16/9),n=e/t;$e.fov=To.radToDeg(Math.atan(n))*2}}document.getElementById("arrow-down").addEventListener("click",ef);document.getElementById("meButton").addEventListener("click",tf);document.getElementById("startup3").addEventListener("click",tf);
