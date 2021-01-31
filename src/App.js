import axios from "axios";

function App() {
  const triggerFunc = async () => {
    const data = await axios.get("https://us-central1-pmsox-92af4.cloudfunctions.net/helloWorld");
    console.log("This is the data from inside triggerFunc", data);
  };
  return (
    <div className="App">
      <h1>The official PMsox app</h1>
      <button onClick={triggerFunc}>Hit this button to trigger cloud func</button>
    </div>
  );
}

export default App;
