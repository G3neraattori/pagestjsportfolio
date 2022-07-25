import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import {CSS3DObject, CSS3DRenderer} from "three/examples/jsm/renderers/CSS3DRenderer.js";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {VertexNormalsHelper} from "three/examples/jsm/helpers/VertexNormalsHelper.js";
import {RGBELoader} from "three/examples/jsm/loaders/RGBELoader.js";
import {gsap} from "gsap";


let CSSrenderer, camera, scene, renderer, raycaster, laptop, cssobject;
const mouse = {
    x: undefined,
    y: undefined
}

function init() {
    const container = document.getElementById('container');
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, innerWidth / innerHeight, 0.1, 5000)

    CSSrenderer = new CSS3DRenderer();
    CSSrenderer.setSize(innerWidth, innerHeight)
    CSSrenderer.domElement.style.position = 'absolute';
    CSSrenderer.domElement.style.top = 0;
    CSSrenderer.domElement.style.margin = 0;
    CSSrenderer.domElement.style.padding = 0;
    //CSSrenderer.domElement.appendChild(document.getElementById('cum'))

    raycaster = new THREE.Raycaster();
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(innerWidth, innerHeight)
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = 0;
    renderer.domElement.style.zIndex = -1;
    CSSrenderer.domElement.appendChild(renderer.domElement)
    renderer.setPixelRatio(devicePixelRatio)
    //container.appendChild(renderer.domElement)

    //new OrbitControls(camera, CSSrenderer.domElement)
    camera.position.set(200, 150, 200);
    camera.rotation.set(0, 90, 0)


    const light = new THREE.DirectionalLight(0xFFFFFF, 1)
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5)
    scene.add(ambientLight)
    light.position.set(0, 0, 1)
    scene.add(light)

    const loadingManager = new THREE.LoadingManager();

    const progressBar = document.getElementById('progress-bar');
    loadingManager.onProgress = function (url, loaded, total) {
        progressBar.value = (loaded / total) * 100;
        console.log(loaded)

    }
    const loadingBarContainer = document.querySelector('.loading-container');
    loadingManager.onLoad = function () {
        loadingBarContainer.style.display = 'none';
        container.appendChild(CSSrenderer.domElement)
        //moveCamera()
    }

    const gltfLoader = new GLTFLoader(loadingManager);


    const div = document.createElement('div');
    div.style.width = '1080px';
    div.style.height = '810px';
    //div.style.backgroundColor = '#820909';
    const iframe = document.createElement('iframe');
    iframe.style.width = '1080px';
    iframe.style.height = '810px';
    iframe.style.border = '0px';
    iframe.src = '/desktop.html';
    div.appendChild(iframe);
    cssobject = new CSS3DObject(div);
    //cssobject.position.set( 0, 1, 0 );



    cssobject.position.set(340, 102.6, 776)
    cssobject.rotation.y = 3.14159265
    cssobject.rotation.x = 0.245;
    const screenSizeMult = 0.027
    cssobject.scale.set(screenSizeMult * 1.2, screenSizeMult, 0.1)


    let gltf
    gltfLoader.load('./models/laptop.gltf', (gltfScene) => {
        laptop = gltfScene.scene
        gltfScene.scene.scale.set(12, 12, 12)
        gltfScene.scene.position.set(340, 90, 760)
        gltfScene.scene.rotateY(Math.PI / 2 * 90)

        scene.add(gltfScene.scene)
        console.log(laptop)
        console.log(laptop.children[0].children[3])
        //cssobject.position.set(gltf.children[0].children[3].x, gltf.children[0].children[3].position.y, gltf.children[0].children[3].position.z);
        //cssobject.rotation.set(gltf.children[0].children[3].x, gltf.children[0].children[3].y, gltf.children[0].children[3].z);
    })
    gltfLoader.load('./models/layout_shaded.glb', (gltfScene) => {
        gltf = gltfScene.scene
        gltfScene.scene.scale.set(100, 100, 100)
        scene.add(gltfScene.scene)
        console.log(gltf)
        console.log(gltf.children[0].children[3])
        //cssobject.position.set(gltf.children[0].children[3].x, gltf.children[0].children[3].position.y, gltf.children[0].children[3].position.z);
        //cssobject.rotation.set(gltf.children[0].children[3].x, gltf.children[0].children[3].y, gltf.children[0].children[3].z);
    })





    new RGBELoader(loadingManager).load('./models/lakeside_4k.hdr', function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture;
        scene.environment = texture;
    });



    addEventListener('resize', onWindowResize);
    addEventListener('mousemove', (event) =>{
        mouse.x = (event.clientX / innerWidth) * 2 - 1
        mouse.y = -(event.clientY / innerHeight) * 2 + 1
    })
    renderer.domElement.addEventListener('click', onObjectClick, false);
}

function onWindowResize() {

    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    CSSrenderer.setSize(innerWidth, innerHeight);
}

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    CSSrenderer.render(scene, camera)
    raycaster.setFromCamera(mouse, camera)

    const intersects = raycaster.intersectObject(laptop, true)

    if(intersects.length > 0){
        laptop.children[0].children[0].material.color.b = 1
        laptop.children[0].children[0].material.color.g = 1
        laptop.children[0].children[0].material.color.r = 1

    }else{
        laptop.children[0].children[0].material.color.b = 0.31081438064575195
        laptop.children[0].children[0].material.color.g = 0.31081438064575195
        laptop.children[0].children[0].material.color.r = 0.31081438064575195
    }

}

function moveCamera(){
    gsap.timeline()
        .to(camera.position, {
            x: 100,
            y: 150,
            z: 0,

            duration: 2.2,
            onUpdate: function () {
                camera.lookAt(100, 150, 770);
            }
        })
        .to(camera.position, {
            x: 100,
            y: 150,
            z: 720,

            duration: 1.2,
            ease: "none",

        })
        .to(camera.rotation, {
            y: -1.3,
            duration: 1.2,
            ease: "none",
        })
        .to(camera.position, {
            x: 323,
            y: 106,
            z: 670,
            ease: "none",
            duration: 1.2,
        })
        .to(camera.rotation, {
            y: 0.08,
            ease: "none",
            duration: 1.2,
        })
    /*
        .to(camera.position, {
        x: 340,
        y: 102,
        z: 755,

        duration: 2.2,
        onUpdate: function (){
            camera.lookAt(340,100,770);
        }
    })

     */
}
function onObjectClick() {
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObject(laptop, true)
    if (intersects.length > 0) {
        gsap.to(camera.position, {
            x: 340,
            y: 110,
            z: 730,

            duration: 2.2,
            onUpdate: function (){
                camera.lookAt(340,100,770);
                scene.add(cssobject);
            }
        })

    }else {
        gsap.to(camera.position, {
            x: 323,
            y: 106,
            z: 670,
            ease: "none",
            duration: 1.2,
            onUpdate: function () {
                camera.lookAt(330, 106, 770);
                scene.remove(cssobject)
            }
        })

    }
}

function divClick() {
        gsap.to(camera.position, {
            x: 323,
            y: 106,
            z: 670,
            ease: "none",
            duration: 1.2,
            onUpdate: function () {
                camera.lookAt(330, 106, 770);
                scene.remove(cssobject)
            }
        })


}
document.getElementById('arrow-down').addEventListener('click', divClick);


init()
animate()




