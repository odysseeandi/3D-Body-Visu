import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber';
import Loader from './components/Loader';
import Body from './models/Body';
import { OrbitControls } from '@react-three/drei';


import './App.css'

const App = () => {
  const [currentScale, setCurrentScale] = useState(180);

  return(
    <section className='w-full h-dvh relative '>
      <div className='myStyle'>
        <h1>3D Körper Visualizer</h1>
        <input type='number'
         value={currentScale}
         onChange={(e) => setCurrentScale(e.target.value)}/>
      </div>
      <Canvas className='w-full h-dvh relative '>
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={2}/>
          <OrbitControls enableZoom={false}/>
          <Body currentScale={currentScale}/>
        </Suspense>
      </Canvas>
    </section>
  )
}

export default App
