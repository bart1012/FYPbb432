import { Color, Group, Line, LineBasicMaterial } from 'three';
import { BufferAttribute, Points, Vector3, BufferGeometry, ShaderMaterial } from 'three';
import { MeshSurfaceSampler } from 'three/addons/math/MeshSurfaceSampler.js';
import * as THREE from 'three';



class GLBConverter {
  constructor(obj) {
    this.pointPos = null;
    this.obj = obj;
    this.custom_shader = new ShaderMaterial({
      transparent: true,
      opacity: 0.4,
      vertexShader: `
        varying vec3 vUv;
        void main() {
          vUv = position;
          vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 10.0;
          gl_Position = projectionMatrix * modelViewPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vUv;
        void main() {
          float radius = 0.1;
          vec2 uv = gl_PointCoord - vec2(0.5);
          if (length(uv) > radius) {
            discard;
          }
          gl_FragColor = vec4(0.8, 0.5, 0.2, 1.0);
        }
      `,
      uniforms: {
        pointSize: { value: 0.05 },
      }
    });
  }

  convert() {
    // Sample points on the surface of the sphere
    const points = [];
    const numPoints = 500;
    for (let i = 0; i < numPoints; i++) {
        const point = new Vector3();
        point.random().normalize().multiplyScalar(1);
        points.push(point);
    }

    // Create lines between nearest neighbors
    const linePositions = [];
    const lineThreshold = 0.1; // Adjust threshold as needed
    for (let i = 0; i < numPoints; i++) {
        const vertex1 = points[i];
        for (let j = i + 1; j < numPoints; j++) {
            const vertex2 = points[j];
            const distance = vertex1.distanceTo(vertex2);
            if (distance < lineThreshold) {
                linePositions.push(vertex1.x, vertex1.y, vertex1.z);
                linePositions.push(vertex2.x, vertex2.y, vertex2.z);
            }
        }
    }

    // Create line geometry and material
    const linesGeometry = new BufferGeometry();
    linesGeometry.setAttribute('position', new BufferAttribute(new Float32Array(linePositions), 3));
    const linesMaterial = new LineBasicMaterial({ color: new Color(0.678, 0.847, 0.902), transparent: true, opacity: 0.0 });

    // Create the line mesh
    const lines = new Line(linesGeometry, linesMaterial);

    // Create the points mesh
    const pointsGeometry = new BufferGeometry().setFromPoints(points);
    const pointObj = new Points(pointsGeometry, this.custom_shader);

    // Create a group to hold both points and lines
    const networkGroup = new Group();
    networkGroup.add(pointObj, lines);

    return networkGroup;
}

convertLineSphere(){
  const points = [];
  const numPoints = 2000;
  for (let i = 0; i < numPoints; i++) {
      const u = Math.random(); // Random value between 0 and 1
      const v = Math.random(); // Random value between 0 and 1

      const theta = 2 * Math.PI * u; // Azimuthal angle
      const phi = Math.acos(2 * v - 1); // Polar angle

      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);

      const point = new THREE.Vector3(x, y, z);
      points.push(point);
  }

    // Create lines between nearest neighbors
    const linePositions = [];
const lineThreshold = 0.05; // Adjust threshold as needed
for (let i = 0; i < numPoints; i++) {
    const vertex1 = points[i];
    let minDistance = Infinity;
    let closestVertexIndex = -1;

    // Find the nearest neighbor for vertex1
    for (let j = 0; j < numPoints; j++) {
        if (i !== j) {
            const vertex2 = points[j];
            const distance = vertex1.distanceTo(vertex2);
            if (distance < minDistance) {
                minDistance = distance;
                closestVertexIndex = j;
            }
        }
    }

    // If the distance is within the threshold, connect the vertices
    if (minDistance < lineThreshold) {
        const vertex2 = points[closestVertexIndex];
        linePositions.push(vertex1.x, vertex1.y, vertex1.z);
        linePositions.push(vertex2.x, vertex2.y, vertex2.z);
    }
}
    // Create line geometry and material
    const linesGeometry = new BufferGeometry();
    linesGeometry.setAttribute('position', new BufferAttribute(new Float32Array(linePositions), 3));
    const linesMaterial = new LineBasicMaterial({ color: new Color(0.678, 0.847, 0.902), transparent: true, opacity: 0.0});

    // Create the line mesh
    const lines = new Line(linesGeometry, linesMaterial);

    // Create the points mesh
    const pointsGeometry = new BufferGeometry().setFromPoints(points);
    const pointObj = new Points(pointsGeometry, this.custom_shader);

    // Create a group to hold both points and lines
    const networkGroup = new Group();
    networkGroup.add(pointObj);

    return networkGroup;
}

  tick(){
  }
}

export { GLBConverter };
