import './App.css';
import { VRCanvas, DefaultXRControllers } from '@react-three/xr'

function App() {
  return (
    <div className="App">
      hi
      <VRCanvas>
        {/* All your regular react-three-fiber elements go here */}
        <DefaultXRControllers />
      </VRCanvas>
    </div>
  );
}

export default App;
