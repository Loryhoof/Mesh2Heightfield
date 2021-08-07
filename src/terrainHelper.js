import * as CANNON from 'cannon';
import * as THREE from 'three';

const groundMaterial = new CANNON.Material('groundMaterial');

export async function generateHeightfieldFromMesh(mesh/*: Mesh*/, pointDistance/*: number*/) {
    // https://threejs.org/docs/index.html#api/en/core/Raycaster
    const rayCaster = new THREE.Raycaster();
    const rayCasterPosition = new THREE.Vector3();
    const upAxis = new THREE.Vector3(0, 1, 0);

    const heightMap = [];

    const progressBar = document.getElementById("progress");

    const geometry = findGeometry(mesh);
    geometry.computeBoundingBox();
    const {
        min: {x: minX, y: minY, z: minZ},
        max: {x: maxX, z: maxZ},
    } = geometry.boundingBox;

    const width = maxX - minX;
    const length = maxZ - minZ;
    console.log(width, length);
    const totalX = width / pointDistance + 1;
    const totalZ = length / pointDistance + 1;
    const totalSteps = totalX * totalZ;
    let currentStep = 0;

    for (let x = minX; x <= maxX; x += pointDistance) {
        const heightDataRow = [];
        heightMap.push(heightDataRow);

        for (let z = maxZ; z >= minZ; z -= pointDistance) {
            rayCasterPosition.set(x, minY, z);
            rayCaster.set(rayCasterPosition, upAxis);

            const y = await calculateMeshSurfaceDistanceByRayCast();

            heightDataRow.push(y);
        }
    }

   
    document.getElementById("txtArea").innerHTML = JSON.stringify(heightMap);
    var position = [minX, 0, maxZ];
    document.getElementById("txtArea2").innerHTML = JSON.stringify(position);
    document.getElementById("txtArea3").innerHTML = JSON.stringify(pointDistance);


     console.log({
         pointDistance,
         position: [minX, 0, maxZ],
         heightMap,
     });

    const terrainShape = new CANNON.Heightfield(heightMap, {elementSize: pointDistance});
    const heightfield = new CANNON.Body({ mass: 0, shape: terrainShape });
    heightfield.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    heightfield.position.set(minX, 0, maxZ);

    return heightfield;

    
    function calculateMeshSurfaceDistanceByRayCast() {
        return new Promise((resolve) => {
            window.setTimeout(() => {
                currentStep++;

                progressBar.innerHTML = `Generating height field... ${Math.floor(100 / totalSteps * currentStep)}%`;

                const [result] = rayCaster.intersectObject(mesh, true);

                resolve(result.distance);
            });
        });
    }
}

function findGeometry(mesh) {
    let geometry;

    mesh.traverse((child) => {
        if (!geometry && child.type === 'Mesh' && child.geometry) {
            geometry = child.geometry;
        }
    });

    return geometry;
}

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

