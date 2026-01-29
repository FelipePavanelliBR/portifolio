# 3D Models Directory

Place your 3D model files here.

## Supported Formats
- `.glb` (recommended) - Binary GLTF with embedded textures
- `.gltf` - GLTF with separate files

## How to Add Models

1. Export your 3D models from Blender, Maya, or other 3D software as GLB/GLTF
2. **IMPORTANT**: Make sure to embed/pack textures in the GLB file
3. Place the files in this directory (e.g., `character.glb`)
4. Update the model paths in `/src/pages/ThreeDModeling.jsx`

## Blender Export Settings (Recommended)
When exporting to GLB from Blender:
1. File → Export → glTF 2.0 (.glb/.gltf)
2. Format: **glTF Binary (.glb)**
3. Check: **✓ Remember Export Settings**
4. Include: **✓ Limit to Selected Objects** (if needed)
5. Geometry: **✓ Apply Modifiers**
6. Materials: **✓ Materials**
7. **CRITICAL**: Check **✓ Export with Packed Images** or ensure textures are embedded
8. Click "Export glTF 2.0"

## If Your Model Has Missing Textures
If you see texture errors in the console:
1. Re-export the model with embedded textures (see above)
2. Or copy texture images to `/public/models/textures/` and update texture paths
3. The viewer will show a gray fallback if textures fail to load

## Example:
```javascript
{
  id: 1,
  title: "My Character",
  description: "Character design for game",
  modelUrl: "/models/character.glb"
}
```

## Tips for Optimization
- Keep models under 10MB for fast loading
- Use compressed textures when possible
- Consider using Draco compression for GLB files
- Test loading times in browser before deploying

## Free 3D Models for Testing
If you need placeholder models to test:
- https://sketchfab.com (many free models)
- https://poly.pizza (simple, optimized models)
- https://market.pmnd.rs/ (React Three Fiber compatible)
