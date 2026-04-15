import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';

const Hero: React.FC = () => {
    return (
        <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <OrbitControls />
                {/* Add 3D animated background objects here */}
                {/* Example: <mesh>...</mesh> */}
            </Canvas>
            <div style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                textAlign: 'center',
                color: 'white'
            }}>
                <h1>Your Name</h1>
                <h2>Your Title</h2>
                <div>
                    <button style={{ margin: '10px', padding: '10px 20px' }}>Action 1</button>
                    <button style={{ margin: '10px', padding: '10px 20px' }}>Action 2</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;