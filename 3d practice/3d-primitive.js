// three-sketch.js
// This script creates a Three.js scene with three rotating cones on a wireframe grid

(function () {
  // Scene, camera, renderer setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 800 / 400, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(800, 400);
  renderer.setClearColor(0xf0f0f0); // Light gray background

  document.getElementById('threejs-container-1').appendChild(renderer.domElement);

  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 10, 7);
  scene.add(directionalLight);

  // Create a wireframe grid
  const gridHelper = new THREE.GridHelper(20, 40, 0x888888, 0x888888);
  scene.add(gridHelper);

  // Cone parameters
  const radius = 2;
  const height = 5;
  const radialSegments = 16;
  const heightSegments = 2;
  const openEnded = true;
  const thetaStart = Math.PI * 0.25;
  const thetaLength = Math.PI * 1.5;

  const geometry = new THREE.ConeGeometry(
    radius,
    height,
    radialSegments,
    heightSegments,
    openEnded,
    thetaStart,
    thetaLength
  );
  const material = new THREE.MeshStandardMaterial({ color: 0xff5533, wireframe: true });

  // Create and position three cones
  const cone1 = new THREE.Mesh(geometry, material);
  const cone2 = new THREE.Mesh(geometry, material.clone());
  const cone3 = new THREE.Mesh(geometry, material.clone());

  cone1.position.set(-6, height / 2, 0);
  cone2.position.set(0, height / 2, 0);
  cone3.position.set(6, height / 2, 0);

  scene.add(cone1, cone2, cone3);

  // Position the camera
  camera.position.set(0, 5, 15);
  camera.lookAt(0, height / 2, 0);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    cone1.rotation.x += 0.01;
    cone1.rotation.y += 0.01;

    cone2.rotation.x += 0.01;
    cone2.rotation.y += 0.01;

    cone3.rotation.x += 0.01;
    cone3.rotation.y += 0.01;

    renderer.render(scene, camera);
  }
  animate();
})();