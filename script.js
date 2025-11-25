import * as THREE from 'three';

window.addEventListener("resize", onWindowResize);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
renderer.setClearColor(0xffffff, 0.0);

var container = document.getElementById("canvas");
container.appendChild(renderer.domElement);



import cube_fs from './glsl/cube.frag';
import cube_vs from './glsl/cube.vert';

const cube_material = new THREE.ShaderMaterial({

    fragmentShader: cube_fs,
    vertexShader: cube_vs,
});

const cube_geometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(cube_geometry, cube_material);
scene.add(cube);

camera.translateZ(4);

function animate() {

    renderer.clear();
    cube.rotateY(0.001);
    cube.rotateZ(0.001);
    renderer.render(scene, camera);
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}