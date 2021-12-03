import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopBar from "./components/topBar/TopBar";
import HomePage from "./pages/homePage/HomePage";
import SinglePostContainer from "./pages/singlePostPage/SinglePostContainer";
import Write from "./components/writePost/WritePost.jsx";
import Settings from "./pages/settingsPage/Settings";
import Login from "./pages/loginPage/Login.jsx";
import Register from "./pages/registerPage/Register.jsx";
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
  const { user } = useContext(Context);
  // const user = false;

  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/register"
            element={user ? <HomePage /> : <Register />}
          />
          <Route
            exact
            path="/login"
            element={user ? <HomePage /> : <Login />}
          />
          <Route
            exact
            path="/write"
            element={user ? <Write /> : <Register />}
          />
          <Route
            exact
            path="/settings"
            element={user ? <Settings /> : <Register />}
          />
          <Route
            exact
            path="/singlePost/:postId"
            element={<SinglePostContainer />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
