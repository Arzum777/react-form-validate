import logo from './logo.svg';
import './App.css';
import {SignIn} from "./components/sign-in/sign-in";
import {Routes,Route} from "react-router-dom";
import {SignUp} from "./components/sign-up/sign-up";
import {Home} from "./components/Home/home-page";
import {ErrorPage} from "./components/ErrorPage/Error-page";


function App() {
  return (
          <div className="App">
              <Routes>
                  <Route exact path="*" element={<ErrorPage />} />
                  <Route exact path="/" element={<Home />} />
                  <Route  path="/sign-in" element={<SignIn />} />
                  <Route path="/sign-up" element={<SignUp />} />
              </Routes>
          </div>
  );
}

export default App;
