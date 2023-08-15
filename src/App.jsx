
import { FileDrop } from 'react-file-drop';
import './Demo.css';






function App() {

  const styles = { border: '1px solid black', width: 600, color: 'black', padding: 20 };
  return (
    <>
      <div>
        <h1>React File Drop demo</h1>
        <div style={styles}>
          <FileDrop





            onDrop={(files, event) => console.log('onDrop!', files, event)}
          >
            Drop some files here!
          </FileDrop>
        </div>

        <div className="">
          <h1>this is video section</h1>
          <video src="https://www.dropbox.com/scl/fi/mjf6qpivs0betomcd8a83/42fd923b99447661c1f8ee6eadcb24e9.mp4?rlkey=a19vi1fotvbxzyy59xe1ilg1m&dl=0"></video>
        </div>
      </div>
    </>
  )
}

export default App
