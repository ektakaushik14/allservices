import React from "react";
import "./login.css";
export default function Login() {
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
            <div>
              <h4>email</h4>
              <input type="email" />
            </div>
            <div>
              <h4>password</h4>
              <input type="password" />
            </div>
          </div>
          <div className="forgot-password">
            <div>
              <input type="checkbox" /> remember me
            </div>
            <div>Forgot Password?</div>
          </div>
          <div className="login-button">
            <button>Login</button>
          </div>
          <div className="login-divider">
            <div></div>
            <div>or</div>
            <div></div>
          </div>
          <div className="googleLogin">
            <button>
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
