# Mesh2Heightfield

Generate a cannonjs heightfield from glb/gltf terrain created in Blender


## How To Use

- Evenly subdivide the terrain in blender, you have to scale it within Edit Mode while selecting all faces.
- There's currently problems if you lower the side edges of the terrain, it won't correctly read the mesh distance.
- Give it a material
- Export as glb/gltf and upload to Mesh2Heightfield
- Select the correct point distance, best if under 10.


## Quickstart

```
npm install
npm run dev

![Terrain](https://i.ibb.co/RYG7y17/landscape.png)
```

## Credit

- [OffroadJS](https://github.com/tomo0613/offroadJS)
- [GLTF-Viewer](https://github.com/donmccurdy/three-gltf-viewer)


