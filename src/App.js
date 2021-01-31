import axios from "axios";

function App() {
  const triggerFunc = async () => {
    // This isn't the right way to trigger a cloud function
    const data = await axios.get("https://us-central1-pmsox-92af4.cloudfunctions.net/helloWorld");
    console.log("This is the data from inside triggerFunc", data);
  };
  const sendMessage = () => {
    // this is the right way to trigger a callable cloud function
    var addMessage = firebase.functions().httpsCallable("addMessage");
    addMessage("wassaaaap");
  };
  return (
    <div className="App">
      <h1>The official PMsox app</h1>
      <button onClick={triggerFunc}>Trigger hello world cloud func</button>
      <button onClick={sendMessage}>Trigger sendMessage cloud func</button>
    </div>
  );
}

export default App;
