import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const MyLogo = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor="black" />
      <pointLight intensity={4} />
      <spotLight 
        position={[-3, -1.2, -2]} 
        angle={1}
        penumbra={1}
        intensity={15}
        castShadow
        shadow-mapSize={1024}
      
      />
      <primitive
        object={earth.scene}
        scale={0.12}
        position-y={-0.7}
        position-z={0}
        position-x={0}
        rotation-y={-1}
        rotation-x={0}
        rotation-z={0}
      />
    </mesh>
  )
}

const MyLogoCanvas = () => {
  return(
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true}}
      camera={{
        fov: 20,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MyLogo />
      </Suspense>

    </Canvas>
  )
}

export default MyLogoCanvas