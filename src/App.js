import "./App.css";
import VideoFrame from "./components/VideoFrame";
import GPSExpenseTracker from "./components/title/GPSExpenseTracker";

function App() {
  return (
    <div className="App">
      <div className="header">
        <GPSExpenseTracker />
      </div>
      <VideoFrame />
    </div>
  );
}

export default App;
