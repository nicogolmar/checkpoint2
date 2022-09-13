import {Routes,Route} from "react-router-dom";
import Menu from "./components/Menu";
import Form from "./components/Form";
import Rick from "./components/Rick";
import Users from "./components/Users";


function App() {
  return (
    <div className="App">
    
      
      <Routes>

      <Route path="/" element={<Menu />}/>
      <Route path="form" element={<Form />} />
      <Route path="/rick" element={<Rick />}/>
      <Route path="/users" element={<Users/>} />

      </Routes>

       </div>
  );
}

export default App;
