import "./App.css";
import Buttons from "./Components/AllStages/Buttons";
import LineChart from "./Components/Graphs/LineChart";
import Profile from "./Components/Profile/Profile";
import Select from "./Components/Select.js/Select";
import Funnel from "./Funnel";
// import Funnel from "./Funnel";
function App() {
  return (
    <div className="App">
      <Select />
      {/*  */}
      <div className="box">
        <Profile />
        <Funnel />
      </div>
      <Buttons />
      <LineChart />
    </div>
  );
}

export default App;

/*
 
*/
