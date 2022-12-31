import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Loader from "../../Images/loader.png";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
export default function Login() {
  const navigate = useNavigate();

  const [loginSignUp, setLoginSignUp] = useState(1);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    setLoading(true);
    if (loginSignUp === 1) {
      signInWithEmailAndPassword(auth, username, password)
        .then((creds) => {
          console.log(creds);
          setLoading(false);
          setError("");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          const errorMessage = err.message;
          setError(errorMessage);
          setLoading(false);
        });
    } else {
      createUserWithEmailAndPassword(auth, username, password)
        .then((creds) => {
          console.log(creds);
          setLoading(false);
          setError("");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          const errorMessage = err.message;
          setError(errorMessage);
          setLoading(false);
        });
    }
  };

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigate("/");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  useEffect(() => {
    setError("");
  }, [loginSignUp, name, username, password]);

  return (
    <div className="login-page">
      <div className="login-left-side">
        <div className="backgroundLines"></div>
        <div className="login-left-side-content">
          <div>Lorem ipsum dolor sit amet.</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            nemo veniam deserunt velit quia adipisci? Ex accusantium facere
            suscipit illum?
          </p>
        </div>
      </div>
      <div className="login-right-side">
        <div className="login-right-side-content">
          <div id="login-logo">logo</div>
          <div className="login-right-side-heading">
            <div>hey</div>
            <div>Lorem ipsum dolor sit amet.</div>
          </div>
          <div className="login-form">
            {loginSignUp != 1 && (
              <div>
                <h4>Name</h4>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                />
              </div>
            )}
            <div>
              <h4>email</h4>
              <input
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                type="email"
              />
            </div>
            <div>
              <h4>password</h4>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>
          </div>
          {error.length > 0 && (
            <div className="error-message">
              {error.includes("email-already-in-use")
                ? "Email is already in use please Login"
                : error}
            </div>
          )}
          <div className="forgot-password">
            <div>
              <input type="checkbox" /> remember me
            </div>
            <div>Forgot Password?</div>
          </div>
          <div onClick={handleLogin} className="login-button">
            <button>
              {loading ? (
                <img src={Loader} />
              ) : loginSignUp === 1 ? (
                "Login"
              ) : (
                "Sign Up"
              )}{" "}
            </button>
          </div>
          {loginSignUp === 1 ? (
            <div>
              Don't have an account?{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => setLoginSignUp(2)}
              >
                Sign Up
              </span>
            </div>
          ) : (
            <div>
              Already have an account?{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => setLoginSignUp(1)}
              >
                Login
              </span>
            </div>
          )}
          <div className="login-divider">
            <div></div>
            <div>or</div>
            <div></div>
          </div>
          <div className="googleLogin">
            <button onClick={signInWithGoogle}>
              {" "}
              <img
                src="https://img.icons8.com/fluency/512/google-logo.png"
                alt=""
              />{" "}
              Sign in with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
