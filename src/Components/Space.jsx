import { useEffect, useRef } from "react";
import * as THREE from "three";

const SpaceWarp = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x040015);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const mount = mountRef.current;
    mount.appendChild(renderer.domElement);

    // Create stars
    const starGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 600; i++) {
      starVertices.push((Math.random() - 0.5) * 10);
      starVertices.push((Math.random() - 0.5) * 10);
      starVertices.push((Math.random() - 0.5) * 10);
    }
    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    renderer.render(scene, camera);

    return () => {
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
};

export default SpaceWarp;
