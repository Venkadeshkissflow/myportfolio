import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {HomeScreen} from "../src/screens/homescreen/index";
import {ProjectScreen} from "../src/screens/projects/index";
import {AboutScreen} from "../src/screens/aboutscreen/index";
import {HeaderComponent} from "../src/components/header/index";
import {ContactScreen} from "../src/screens/contacts/index"

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      {/* <Router>
      <Routes>
          <Route path='/' element={<HomeScreen />} />
      </Routes>
      <Routes>
          <Route path='/projects' element={<ProjectScreen />} />
      </Routes>
      <Routes>
          <Route path='/about' element={<AboutScreen />} />
      </Routes>
      <Routes>
          <Route path='/contact' element={<ContactScreen />} />
      </Routes>
      </Router> */}
      <HomeScreen />
      <ProjectScreen />
      <AboutScreen />
      <ContactScreen />
    </div>
  );
}

export default App;
