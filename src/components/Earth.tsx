import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { Sphere, useTexture } from '@react-three/drei'

export function Earth() {
  const earthRef = useRef<THREE.Mesh>(null!)
  
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'
  ])

  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group>
      {/* Atmosphere glow */}
      <Sphere args={[2.005, 32, 32]}>
        <meshPhongMaterial
          color="#4040ff"
          opacity={0.2}
          transparent
          depthWrite={false}
        />
      </Sphere>

      {/* Earth */}
      <Sphere ref={earthRef} args={[2, 32, 32]}>
        <meshPhongMaterial
          map={colorMap}
          normalMap={normalMap}
          specularMap={specularMap}
          shininess={5}
        />
      </Sphere>

      {/* Clouds */}
      <Sphere args={[2.01, 32, 32]}>
        <meshPhongMaterial
          map={cloudsMap}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </Sphere>
    </group>
  )
}