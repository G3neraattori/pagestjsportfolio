import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import {CSS3DObject, CSS3DRenderer} from "three/examples/jsm/renderers/CSS3DRenderer.js";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {VertexNormalsHelper} from "three/examples/jsm/helpers/VertexNormalsHelper.js";
import {RGBELoader} from "three/examples/jsm/loaders/RGBELoader.js";
import {gsap} from "gsap";
import {MathUtils} from "three";
import {func} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements.js";


let CSSrenderer, camera, scene, renderer, raycaster, controls;
let laptop, cup, cssobject, notebook, layout;
let mixer, action1;
let clock = new THREE.Clock();
let notemode = false;
const mouse = {
    x: undefined,
    y: undefined
}

function init() {
    const container = document.getElementById('container');
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 5000)


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
    renderer.shadowMap.enabled = true;
    CSSrenderer.domElement.appendChild(renderer.domElement)
    renderer.setPixelRatio(devicePixelRatio * 1.5)
    //container.appendChild(renderer.domElement)

    controls = new OrbitControls(camera, CSSrenderer.domElement)
    controls.enabled = false;
    camera.position.set(340, 90, 760);



    const light = new THREE.DirectionalLight(0xFFFFFF, 1)
    //const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5)
    //scene.add(ambientLight)
    light.position.set(1000, 400, 600)
    light.castShadow = true;
    light.shadow.camera.top = 200;
    light.shadow.camera.bottom = - 500;
    light.shadow.camera.left = - 1200;
    light.shadow.camera.right = 200;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 1000;
    light.shadow.bias = -0.01
    light.rotateY((Math.PI / 180) * -90)
    //scene.add( new THREE.CameraHelper( light.shadow.camera ) );
    //scene.add( new THREE.DirectionalLightHelper( light, 500));

    scene.add(light)

    const loadingManager = new THREE.LoadingManager();

    const progressBar = document.getElementById('outer');
    const loadingBarText = document.getElementById('loading-progress');

    loadingManager.onProgress = function (url, loaded, total) {
        //progressBar.value = (loaded / total) * 100;
        progressBar.style.background = `conic-gradient(purple ${ (loaded / total) * 100 * 3.6}deg, rgba(1,1,1, 0.30) 4deg)`;
        loadingBarText.textContent = (String)(((loaded / total)* 100).toFixed(0) )+'%';
        ////console.log(loaded)

    }
    const loadingBarContainer = document.querySelector('.loading-container');
    loadingManager.onLoad = function () {
        loadingBarContainer.style.display = 'none';
        container.appendChild(CSSrenderer.domElement)

        onWindowResize()
        moveCamera2()

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
    iframe.src = '/pagestjsportfolio/desktop.html';
    div.appendChild(iframe);
    cssobject = new CSS3DObject(div);
    //cssobject.position.set( 0, 1, 0 );




    //cssobject.rotation.x = 0.245;

    const screenSizeMult = 0.027
    cssobject.scale.set(screenSizeMult * 1.2, screenSizeMult, 0.1)


    let gltf
    gltfLoader.load('/pagestjsportfolio/models/laptop.gltf', (gltfScene) => {
        laptop = gltfScene.scene
        gltfScene.scene.scale.set(12, 12, 12)
        gltfScene.scene.position.set(340, 90, 760)
        gltfScene.scene.rotateY((Math.PI / 180) * 200)

        scene.add(gltfScene.scene)
        //This is a mess. Requires normals etc to align it with screen vertices. Maybe fix later
        cssobject.position.set(laptop.position.x+5.5, 102.6, laptop.position.z+15)
        cssobject.rotation.set(laptop.rotation.x, laptop.rotation.y, laptop.rotation.z)
        cssobject.rotateX(-0.25)
        camera.rotation.set(laptop.position)
        ////console.log(gltfScene)
        //console.log(laptop.children[0].children[3])
        //cssobject.position.set(gltf.children[0].children[3].x, gltf.children[0].children[3].position.y, gltf.children[0].children[3].position.z);
        //cssobject.rotation.set(gltf.children[0].children[3].x, gltf.children[0].children[3].y, gltf.children[0].children[3].z);
    })
    //console.log('laptop'+ laptop)
    gltfLoader.load('/pagestjsportfolio/models/cup.glb', (gltfScene) => {
        cup = gltfScene.scene
        gltfScene.scene.scale.set(4, 4, 4)
        gltfScene.scene.position.set(305, 91, 760)
        gltfScene.scene.rotateY(Math.PI / 2 * 90)

        scene.add(gltfScene.scene)
        //cssobject.position.set(gltf.children[0].children[3].x, gltf.children[0].children[3].position.y, gltf.children[0].children[3].position.z);
        //cssobject.rotation.set(gltf.children[0].children[3].x, gltf.children[0].children[3].y, gltf.children[0].children[3].z);
    })
    gltfLoader.load('/pagestjsportfolio/models/layout_baked2.glb', (gltfScene) => {
        layout = gltfScene.scene
        gltfScene.scene.scale.set(100, 100, 100)
        gltfScene.scene.traverse( function( node ) {

            if ( node.isMesh ) {
                //console.log('asdasd')
                node.castShadow = true;
                node.receiveShadow = true;
            }

        } );
        scene.add(gltfScene.scene)
        //console.log(gltf)
        //console.log(gltf)
        //console.log(gltf.children[0].children[3])
        //cssobject.position.set(gltf.children[0].children[3].x, gltf.children[0].children[3].position.y, gltf.children[0].children[3].position.z);
        //cssobject.rotation.set(gltf.children[0].children[3].x, gltf.children[0].children[3].y, gltf.children[0].children[3].z);
    })
    gltfLoader.load('/pagestjsportfolio/models/notebook4.glb', (gltfScene) => {
        notebook = gltfScene.scene
        scene.add(gltfScene.scene)
        gltfScene.scene.scale.set(2.5, 2.5, 2.5)
        gltfScene.scene.position.set(293, 91, 750)
        gltfScene.scene.rotateY(Math.PI / 180 * 160)
        console.log(gltfScene)
        mixer = new THREE.AnimationMixer(notebook);
        action1 = mixer.clipAction(gltfScene.animations[1]);

        action1.reset();
        action1.clampWhenFinished = true;
        action1.timeScale = 1;
        action1.setLoop(THREE.LoopOnce, 1);
        action1.play();

        //action1.play().reset();
        //cssobject.position.set(gltf.children[0].children[3].x, gltf.children[0].children[3].position.y, gltf.children[0].children[3].position.z);
        //cssobject.rotation.set(gltf.children[0].children[3].x, gltf.children[0].children[3].y, gltf.children[0].children[3].z);
    })




    //Weird color inaccuracy problems. Unnoticeable if you haven't seen the original hdr though
    new RGBELoader(loadingManager).load('/pagestjsportfolio/models/lakeside_4k.hdr', function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture;
        scene.environment = texture;
    });



    addEventListener('resize', onWindowResize);
    addEventListener('mousemove', (event) =>{
        mouse.x = (event.clientX / innerWidth) * 2 - 1
        mouse.y = -(event.clientY / innerHeight) * 2 + 1
    })
    renderer.domElement.addEventListener('mousedown', onObjectClick, false);

}

function onWindowResize() {
    /*let SCREEN_WIDTH = window.innerWidth;
    let SCREEN_HEIGHT = window.innerHeight;

    SCREEN_WIDTH = innerWidth; //Re-declaring variables so they are updated based on current sizes.
    SCREEN_HEIGHT = innerHeight;

    if(SCREEN_WIDTH < 720){
        camera.fov = SCREEN_WIDTH / 9; //This is your scale ratio.
    }else{
        camera.fov = 40
    }

    /*if(SCREEN_HEIGHT > testRatop && SCREEN_HEIGHT < testRatop){
        camera.fov = SCREEN_HEIGHT / testRatop; //This is your scale ratio for height, it could be same as window.innerWidth if you wanted.
    }*/


    camera.aspect = innerWidth / innerHeight;
    fixAspect(1)

    renderer.setSize(innerWidth, innerHeight);
    CSSrenderer.setSize(innerWidth, innerHeight);
    camera.updateProjectionMatrix();

}

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    CSSrenderer.render(scene, camera)
    raycaster.setFromCamera(mouse, camera)

    //FIXME: This will cause several errors on boot. Add error collection?
    const intersects = raycaster.intersectObject(laptop, true)
    const intersectsNote = raycaster.intersectObject(notebook, true)

    if(intersects.length > 0){
        laptop.children[0].children[0].material.color.b = 1
        laptop.children[0].children[0].material.color.g = 1
        laptop.children[0].children[0].material.color.r = 1

    }else{
        laptop.children[0].children[0].material.color.b = 0.31081438064575195
        laptop.children[0].children[0].material.color.g = 0.31081438064575195
        laptop.children[0].children[0].material.color.r = 0.31081438064575195
    }

    if(intersectsNote.length > 0 && notemode !== true){
        notebook.children[0].children[1].material.color.b = 1
        notebook.children[0].children[1].material.color.g = 1
        notebook.children[0].children[1].material.color.r = 1

    }else{
        notebook.children[0].children[1].material.color.b = 0
        notebook.children[0].children[1].material.color.g = 0
        notebook.children[0].children[1].material.color.r = 0
    }

    let dt = clock.getDelta()
    mixer.update(dt);

}
//Unused
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
        }).to(camera.position, {
        x: 323,
        y: 106,
        z: 670,
        ease: "none",
        duration: 1.2,
        onUpdate: function () {
            //console.log(cup.position)
            camera.lookAt(cup.position);
            //330, 106, 770
            //TODO error handling for this
            scene.remove(cssobject)
        }
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

function moveCamera2(){
    gsap.timeline()
        .to(camera.position, {
            x: 313,
            y: 116,
            z: 670,

            duration: 2.2,
            onUpdate: function () {
                camera.lookAt(cup.position);
            }
        });
}
function onObjectClick() {
    raycaster.setFromCamera(mouse, camera)
    //FIXME?: Might cause errors on boot. Add catch clauses etc
    const intersects = raycaster.intersectObject(laptop, true)
    const intersectsNote = raycaster.intersectObject(notebook, true)
    const intersectsPainting = raycaster.intersectObject(layout.children[21], true)
    if (intersects.length > 0) {
        gsap.to(camera.position, {
            x: 335.5,
            y: 105,
            z: 745,

            duration: 2.2,
            onUpdate: function (){
                camera.lookAt(cssobject.position);


            },
            onComplete: function () {
                scene.add(cssobject)
                fixAspect(0.8)
                camera.updateProjectionMatrix();
            }
        })
    //FIXME: The camera is in the wrong position, snaps too aggressively, and is slightly wonky.
        //Is a paint to setup though because the opening animation AND lookAt is dependant on the origin of the object.
    }else if (intersectsNote.length > 0) {
        gsap.to(camera.position, {
            x: notebook.position.x-2,
            y: 110,
            z: notebook.position.z - 10,
            //295, 91, 750
            duration: 2.2,
            onUpdate: function (){
                camera.lookAt(notebook.position.x-6.5, notebook.position.y, notebook.position.z-2);

                action1.timeScale = -1;
                action1.paused = false;

            },
            onComplete: function () {
                notemode = true;

                fixAspect(1.2)
                camera.updateProjectionMatrix();
            }
        })
    //FIXME: Doesn't work on some Firefox versions
    }else if (intersectsPainting.length > 0) {
        controls.enabled = controls.enabled === false;
        divClick();

    }/*else {
        gsap.to(camera.position, {
            x: 313,
            y: 116,
            z: 670,
            ease: "none",
            duration: 1.2,
            onUpdate: function () {
                camera.lookAt(cup.position);
                scene.remove(cssobject)
            }
        })

    }*/
}

function divClick() {
    //TODO error handling for this
    gsap.to(camera.position, {
        x: 313,
        y: 116,
        z: 670,
        ease: "none",
        duration: 1.2,
        onStart: function () {
            scene.remove(cssobject)
            notemode = false;
        },
        onUpdate: function () {
            camera.lookAt(cup.position);
            action1.timeScale = 1;
            action1.paused = false;

            //330, 106, 770


            //340, 102.6, 776)
            //cssobject.rotateOnWorldAxis(new THREE.Vector3(cssobject.matrixWorld),0.25)


        }
    })


}
function start(){
    const loading = document.getElementById('loading');
    //FIXME?: Doesn't work without the if clause but doesn't work only with if stament? Why, it doesn't even seem to get called?
    if (loading.style.display === "none") {

        document.getElementById("desktop").style.display = "none";
        loading.style.display = "block";
        document.getElementById('controls').style.display = "block";
        document.getElementById("arrow-down").style.display = "block";
    }
    document.getElementById("desktop").style.display = "none";
    loading.style.display = "flex";
    document.getElementById('controls').style.display = "flex";
    document.getElementById("arrow-down").style.display = "flex";
    init()
    animate()
}

//Replaced by reloading the page.
function leave(){
    document.getElementById("desktop").style.display = "flex";
    document.getElementById('controls').style.display = "none";
    document.getElementById("arrow-down").style.display = "none";
    container.removeChild(CSSrenderer.domElement);
    container.removeChild(renderer.domElement);

}

function fixAspect(mult){
    if (camera.aspect > (16/9)) {
        camera.fov = 50*mult;
    } else {
        const cameraHeight = Math.tan(MathUtils.degToRad(50*mult / 2));
        const ratio = camera.aspect / (16/9);
        const newCameraHeight = cameraHeight / ratio;
        camera.fov = MathUtils.radToDeg(Math.atan(newCameraHeight)) * 2;
    }
}
document.getElementById('arrow-down').addEventListener('click', divClick);
document.getElementById('meButton').addEventListener('click', start);
document.getElementById('startup3').addEventListener('click', start);





