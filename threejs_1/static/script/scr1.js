"use strict";

class ball {
    constructor() {
        this.rotation = 0;
    }

    setRotation(n) {
        this.rotation = n;
        console.log(this.returnRotation());
    }

    returnRotation() {
        return this.rotation;
    }
}

class ElemByClassName {
    takeElement(s) {
        s = s.toString();

        let elArr = document.getElementsByClassName(s);
        let myEl = elArr[0];

        console.log()

        return myEl;
    }
}

class MainClass {

}

window.onload = function() {
    // size of canvas = size of window
    let width = window.innerWidth;
    let height = window.innerHeight;
    let canvas = document.getElementById('canvas');

    canvas.setAttribute('width',width);
    canvas.setAttribute('height',height);

    // creating renderer and place for images
    let renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setClearColor(0x003377);

    // creating scene
    let scene = new THREE.Scene();

    // creating camera (field of vision, width / height, min, max)
    let camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);

    // position of camera (x,y, z)
    camera.position.set(0, 0, 1000);

    // turn on light
    let light = new THREE.AmbientLight(0x00FF00);

    // add light to scene
    scene.add(light);

    // sphere (r, number of pieces)
    let geometry = new THREE.SphereGeometry(300, 12, 12);

    // material (color, borders)
    // we should open all color for material or only one color
    let material = new THREE.MeshBasicMaterial({color: 0x00FF00, vertexColors: THREE.FaceColors});

    for (let i = 0; i < geometry.faces.length; i++) {
        geometry.faces[i].color.setRGB(Math.random(), Math.random(), Math.random());
    }

    // mesh
    let mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let ballObj = new ball();
    let rot = new ElemByClassName().takeElement("main-box__range-element");

    // for rendering
    function loop() {
        // moving mesh
        // mesh.rotation.y += Math.PI / 500;

        // регулировка скоростью вращения через класс ball
        console.log("rot = " + rot);
        ballObj.setRotation(rot.value / 1000);
        mesh.rotation.y += ballObj.returnRotation();

        renderer.render(scene, camera);

        // max frequency of frame (on browser ready)
        requestAnimationFrame(function () {
            loop();
        })
    }

    loop();
};
