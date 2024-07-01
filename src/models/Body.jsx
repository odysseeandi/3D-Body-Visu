import {useEffect, useRef} from 'react';
import bodyScene from '../assets/3d/body.glb';
import {useGLTF } from '@react-three/drei'; 

const body = ({currentScale}) => {
    const ref = useRef();
    const {scene} = useGLTF(bodyScene);
    // const {scene, animations } = useGLTF(bodyScene);
    // const {actions} = useAnimations(animations, ref);

    // useEffect(() => {
    //   if(isRotating){
    //     actions['Take 001'].play();
    //   }
    //   else{
    //     actions['Take 001'].stop();
    //   }
    // }, [actions, isRotating])

  return (
    <mesh ref={ref} scale={(currentScale/180)} position={[0, -3, 0]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default body