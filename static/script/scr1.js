"use strict";

window.onload = function() {
    // size of canvas = size of window
    let width = window.innerWidth;
    let height = window.innerHeight;
    let canvas = document.getElementById('canvas');

    canvas.setAttribute('width',width);
    canvas.setAttribute('height',height);

    // creating renderer and place for images
    let renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setClearColor(0x003300);

    // creating scene
    let scene = new THREE.Scene();

    // creating camera (field of vision, width / height, min, max)
    let camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);

    // position of camera (x,y, z)
    camera.position.set(0, 0, 1000);

    // turn on light
    let light = new THREE.AmbientLight(0xEEFFEE);

    // add light to scene
    scene.add(light);

    // geometry
    // plane (w, h, number of pieces)
    // let geometry = new THREE.PlaneGeometry(300, 300, 12, 12);

    // sphere (r, number of pieces)
    let geometry = new THREE.SphereGeometry(300, 12, 12);

    // material (color, borders)
    let material = new THREE.MeshBasicMaterial({color: 0x00FF00, wireframe: true})

    // mesh
    let mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // for rendering
    function loop() {
        // moving mesh
        mesh.position.x += 1;

        renderer.render(scene, camera);

        // max frequency of frame (on browser ready)
        requestAnimationFrame(function () {
            loop();
        })
    }

    loop();
}