// rotating-primitives.js
// Three.js scene: rotating primitives with dramatic lighting and blue fog

(function() {
  // Scene, camera, renderer setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 800 / 400, 0.1, 50);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(800, 400);
  renderer.setClearColor(0xe6f3ff); // Background matches fog color

  document.getElementById('threejs-container-3').appendChild(renderer.domElement);

  // Add light pastel blue fog - following Three.js manual pattern
  scene.fog = new THREE.Fog(0xe6f3ff, 3, 15); // Light pastel blue fog starting at 3, ending at 15

// rotating-primitives.js
// Three.js scene: animated Klein bottle with orbit controls and pastel fog

(function () {
  // Scene, camera, renderer setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 800 / 400, 0.1, 50);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(800, 400);
  renderer.setClearColor(0xe6f3ff); // Background color

  document.getElementById('threejs-container-3').appendChild(renderer.domElement);

  // Fog: soft blue
  scene.fog = new THREE.Fog(0xe6f3ff, 3, 15);

  // Color palette
  const pink = 0xff69b4;

  // Klein bottle geometry
  const slices = 25;
  const stacks = 25;

  function klein(v, u, target) {
    u *= Math.PI;
    v *= 2 * Math.PI;
    u = u * 2;

    let x, z;

    if (u < Math.PI) {
      x = 3 * Math.cos(u) * (1 + Math.sin(u)) +
          (2 * (1 - Math.cos(u) / 2)) * Math.cos(u) * Math.cos(v);
      z = -8 * Math.sin(u) -
          2 * (1 - Math.cos(u) / 2) * Math.sin(u) * Math.cos(v);
    } else {
      x = 3 * Math.cos(u) * (1 + Math.sin(u)) +
          (2 * (1 - Math.cos(u) / 2)) * Math.cos(v + Math.PI);
      z = -8 * Math.sin(u);
    }

    const y = -2 * (1 - Math.cos(u) / 2) * Math.sin(v);
    target.set(x, y, z).multiplyScalar(0.75);
  }

  const kleinBottle = new THREE.Mesh(
    new THREE.ParametricGeometry(klein, slices, stacks),
    new THREE.MeshBasicMaterial({
      color: pink,
      wireframe: true,
    })
  );
  kleinBottle.position.set(0, 2, 0);
  scene.add(kleinBottle);

  // Camera setup
  camera.position.set(-10, 8, 4);
  camera.lookAt(0, 2, 0);

  // OrbitControls
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.screenSpacePanning = false;
  controls.minDistance = 8;
  controls.maxDistance = 40;
  controls.target.set(0, 2, 0);

  // Animation loop: rotate Klein bottle
  function animate() {
    requestAnimationFrame(animate);

    kleinBottle.rotation.y += 0.02;
    kleinBottle.rotation.x += 0.01;

    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}
