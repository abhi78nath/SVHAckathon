import "./App.css";
import ProfileDetails from "./components/profileForm/profileData";
import Auth from "./components/Auth/Login";
import Profile from "./components/profileUi/profileUi";
import Home from "./components/Home/Home";
import Results from "./components/Results/ResultsUi";
function App() {
  return (
    <div className="App">
      {/* <ProfileDetails /> */}
      {/* <Auth/> */}
      {/* <Profile/> */}
      {/* <Home/> */}
      <Results />
    </div>
  );
}

export default App;
