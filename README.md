# Mesh2Heightfield

Generate a cannonjs heightfield from glb/gltf terrain created in Blender


## How To Use

- Evenly subdivide the terrain in blender, you have to scale it within Edit Mode while selecting all faces.
- There's currently problems if you lower the side edges of the terrain, it won't correctly read the mesh distance.
- Give it a material
- Export as glb/gltf and upload to Mesh2Heightfield
- Select the correct point distance, best if under 10.

## But how to actually use?

- Copy the matrix output from the textbox, or from the console:
![obj](https://user-images.githubusercontent.com/29487929/128610013-2f3f8f7d-ee7a-4822-8a2b-1c037c994bef.png)
- Plug it into your CANNON.Heightfield body as the matrix, use the same point distance as specified on Mesh2Heightfield
- ....
- Done, though you still might have to adjust the height of the CANNON.Heightfield and the imported THREE.Mesh


## Quickstart

```
npm install
npm run dev

```

## Warning

- If the terrain is very big (e.g 1000x1000) it will take some time to generate the heightfield matrix,
  You can experiment with the point distance input to make it faster.
- The window must be open for the entire duration, otherwise it won't generate.
  

## Credit

- [OffroadJS](https://github.com/tomo0613/offroadJS)
- [GLTF-Viewer](https://github.com/donmccurdy/three-gltf-viewer)

![landscape](https://user-images.githubusercontent.com/29487929/128609620-27c0d49e-e1b5-4927-9073-005a183cbd5d.png)


