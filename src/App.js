import React from 'react'
import { OrbitControls, Box } from 'drei'
import { VRCanvas } from 'react-xr'
import './index.css'

function App() {
  return (
    <div className="App">
      <VRCanvas>
        <ambientLight />
        <spotLight />

        <OrbitControls />

        <Box position={[0, 0.8, -1]} scale={[0.3, 0.3, 0.3]}>
          <meshStandardMaterial color="#e23" />
        </Box>
      </VRCanvas>
    </div>
  );
}

export default App;
