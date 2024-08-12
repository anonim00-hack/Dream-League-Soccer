const canvas = document.querySelector('.threejs'); // выбираем ваш canvas элемент
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: canvas });

// Обработка изменения размеров окна
window.addEventListener('resize', () => {
    const width = window.innerWidth - 220;
    const height = window.innerHeight - 100;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
});


// Добавление освещения
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

loader.load('/ball/scene.gltf', (gltf) => {
    const steve = gltf.scene;
    steve.scale.set(2, 2, 2);
    steve.position.y = 3;
    scene.add(steve);
});

// Создание геометрии сферы
const sphereGeometry = new THREE.SphereGeometry(25, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.3 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

camera.position.z = 10; // Изменение позиции камеры для лучшего обзора
camera.position.y = 5;
camera.lookAt(scene.position);

// Добавление орбитальных контроллеров
const controls = new THREE.OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Обновление орбитальных контроллеров
    renderer.render(scene, camera);
}
animate();