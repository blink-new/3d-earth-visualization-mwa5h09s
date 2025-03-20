import { Canvas } from '@react-three/fiber';
import { Earth } from './components/Earth';
import { Suspense } from 'react';

function App() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;