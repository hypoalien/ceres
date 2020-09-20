import React from 'react';
import './App.css';
import ForceGraph3D from 'react-force-graph-3d';
import myData from './datasets/allneo.json';



function App() {
  
  const { useRef, useCallback,useEffect  } = React;
  const fgRef = useRef();
  const handleClick = useCallback(node => {

    // Aim at node from outside it
    const distance = 40;
    const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);

    fgRef.current.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      node, // lookAt ({ x, y, z })
      3000  // ms transition duration
    );
  }, [fgRef]);





  return (
    <div className="App">
       <ForceGraph3D
        nodeLabel="html"
        

        ref={fgRef}
        enableNodeDrag="false"
        enablePointerInteraction="false"  
       // onNodeClick={handleClick}
        
        graphData={myData}
        //nodeVal="earthsize"
        nodeAutoColorBy="group"
  />
  <div>TEAM HYPOALIEN</div>
    </div>
  );
}

export default App;
