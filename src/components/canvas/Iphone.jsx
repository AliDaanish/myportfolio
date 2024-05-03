import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Iphone = ({ isMobile }) => {
  const iPhone = useGLTF('./iPhone15/scene.gltf')

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
        object={iPhone.scene}
        scale={isMobile ? 12 : 24}
        position={isMobile ? [0, -0.8, 0] : [0, -1.20, 0]}
        rotation={[0, -1.9, -0.1]}
      />
    </mesh>
  )
}

const IphoneCanvas = () => {
  const [isMobile, setisMobile] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
  
    setisMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setisMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)
    
    return() => {
      mediaQuery,removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  return(
    <Canvas 
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className=''>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Iphone isMobile={isMobile} />
        <Iphone />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default IphoneCanvas