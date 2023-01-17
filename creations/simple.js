// To render anything, you need a scene, a camera, and a renderer.
const t = THREE;

const scene = new t.Scene();
const camera = new t.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new t.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


// now we can create an object with geometry and material
const geometry = new t.BoxGeometry(1, 1, 1);
const material = new t.MeshBasicMaterial( {color: 0x00ffff } );

const cube = new t.Mesh(geometry, material);

// and add the object to the scene
scene.add(cube);

camera.position.z = 5;

// the scene does't actually render at this point since it needs an animation loop
// we can use requestAnimationFrame recursively to achieve this
function render() {
    requestAnimationFrame(render);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}


render();


