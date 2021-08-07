# Mesh2Heightfield

Generate a cannonjs heightfield from glb/gltf terrain created in Blender


## How To Use

- Evenly subdivide the terrain in blender, you have to scale it within Edit Mode while selecting all faces.
- There's currently problems if you lower the side edges of the terrain, it won't correctly read the mesh distance.
- Give it a material
- Export as glb/gltf and upload to Mesh2Heightfield
- Select the correct point distance, best if under 10.

![landscape](https://user-images.githubusercontent.com/29487929/128609620-27c0d49e-e1b5-4927-9073-005a183cbd5d.png)

## Quickstart

```
npm install
npm run dev

```

## Credit

- [OffroadJS](https://github.com/tomo0613/offroadJS)
- [GLTF-Viewer](https://github.com/donmccurdy/three-gltf-viewer)


