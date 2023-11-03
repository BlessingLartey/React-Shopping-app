// import "../App.css";
import { Link } from "react-router-dom";

// import Home from "./Home";
import Navbar from "../components/navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login-body">
        <div className="login-container">
          <h2>Login</h2>
          <form className="login-form">
            <input
              className="form-input"
              type="text"
              placeholder="Username"
              name="username"
              required
            />
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              name="password"
              required
            />

            <button className="form-button" type="submit">
              <Link to="/">Login</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
