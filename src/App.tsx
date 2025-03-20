import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Earth } from './components/Earth'
import { Suspense } from 'react'

function App() {
  return (
    <>
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <color attach="background" args={['#000814']} />
          <ambientLight intensity={0.1} />
          <pointLight position={[100, 10, -50]} intensity={20} />
          <pointLight position={[-100, -10, 50]} intensity={20} />
          
          <Suspense fallback={null}>
            <Earth />
            <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} />
          </Suspense>
          
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minDistance={5}
            maxDistance={15}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>
      
      <div className="controls">
        <button onClick={() => window.location.reload()}>Reset View</button>
      </div>
    </>
  )
}

export default App