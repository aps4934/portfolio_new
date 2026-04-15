import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Canvas3D = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Adding particles
        const particleCount = 5000;
        const particles = new THREE.Geometry();
        const pMaterial = new THREE.PointCloudMaterial({ color: 0xFFFFFF, size: 0.1 });

        for (let p = 0; p < particleCount; p++) {
            const pX = Math.random() * 2000 - 1000;
            const pY = Math.random() * 2000 - 1000;
            const pZ = Math.random() * 2000 - 1000;
            particles.vertices.push(new THREE.Vector3(pX, pY, pZ));
        }

        const particleSystem = new THREE.PointCloud(particles, pMaterial);
        scene.add(particleSystem);

        // Rotating Cube
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Camera position
        camera.position.z = 5;

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            particleSystem.rotation.y += 0.002;
            renderer.render(scene, camera);
        };
        animate();

        // Mouse tracking
        const mouse = new THREE.Vector2();
        window.addEventListener('mousemove', (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            // Update particle system position based on mouse
            particleSystem.position.x = mouse.x * 5;
            particleSystem.position.y = mouse.y * 5;
        });

        // Resize handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', null);
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default Canvas3D;
