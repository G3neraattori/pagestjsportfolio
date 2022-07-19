import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import {CSS3DObject, CSS3DRenderer} from "three/examples/jsm/renderers/CSS3DRenderer.js";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {VertexNormalsHelper} from "three/examples/jsm/helpers/VertexNormalsHelper.js";

const container = document.getElementById( 'container' );
//SCENE and DOM element for three
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 5000)

const CSSrenderer = new CSS3DRenderer();
CSSrenderer.setSize(innerWidth, innerHeight)
CSSrenderer.domElement.style.position	= 'absolute';
CSSrenderer.domElement.style.top	= 0;
CSSrenderer.domElement.style.margin	= 0;
CSSrenderer.domElement.style.padding	= 0;
container.appendChild(CSSrenderer.domElement)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(innerWidth, innerHeight)
renderer.domElement.style.position	= 'absolute';
renderer.domElement.style.top	= 0;
renderer.domElement.style.zIndex	= -1;
CSSrenderer.domElement.appendChild(renderer.domElement)
renderer.setPixelRatio(devicePixelRatio)


//container.appendChild(renderer.domElement)
new OrbitControls(camera, CSSrenderer.domElement)
camera.position.set( 500, 350, 750 );


const light = new THREE.DirectionalLight(0xFFFFFF, 1)
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1)
scene.add(ambientLight)
light.position.set(0, 0, 1)
scene.add(light)

const gltfLoader = new GLTFLoader();


const div = document.createElement( 'div' );
div.style.width = '480px';
div.style.height = '360px';
//div.style.backgroundColor = '#820909';
const iframe = document.createElement( 'iframe' );
iframe.style.width = '480px';
iframe.style.height = '360px';
iframe.style.border = '0px';
iframe.src = '/desktop.html';
div.appendChild( iframe );
const object = new CSS3DObject( div );
//object.position.set( 0, 1, 0 );

let gltf
scene.add(object)
gltfLoader.load('./models/laptop.gltf', (gltfScene) => {
    gltf = gltfScene.scene
    gltfScene.scene.scale.set(100,100,100)
    scene.add(gltfScene.scene)
    console.log(gltf)
    console.log(gltf.children[0].children[3])
    console.log(object)
    //object.position.set(gltf.children[0].children[3].x, gltf.children[0].children[3].position.y, gltf.children[0].children[3].position.z);
    //object.rotation.set(gltf.children[0].children[3].x, gltf.children[0].children[3].y, gltf.children[0].children[3].z);


})
object.position.setZ(-130)
object.position.setY(108)
object.rotation.x = -0.25;
let num = 0.55
object.scale.set(0.6, 0.5, num)


scene.background = new THREE.Color(0xFFFFFF)

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    CSSrenderer.render(scene, camera)

}

animate()


