import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";


export const Register = ({ setRegister }) => {
  const menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setRegister(false);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <div className="overlay-container">
      <div ref={menuRef} className="form-login-register">
        <div className="register-container">
          <form className="register-content">
            <h3>Daftar Akun Re4Cash</h3>
            <div className="input-login-register">
              <iconify-icon icon="ph:user" />
              <input type="text" placeholder="Nama Lengkap" />
            </div>
            <div className="input-login-register">
              <iconify-icon icon="carbon:email" />
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-login-register">
              <iconify-icon icon="codicon:lock" />
              <input type="text" placeholder="Password" />
            </div>
            <div className="input-login-register">
              <iconify-icon icon="codicon:lock" />
              <input type="text" placeholder="Confirm Password" />
            </div>
            <p>
              Dengan mendaftar menjadi pengelola, Anda bertanggung jawab atas
              akun tersebut sesuai dengan <span>Ketentuan</span> &{" "}
              <span>Kebijakan Privasi.</span>
            </p>
            <Button className="btn-sign">Daftar</Button>
            <div className="garis-content">
              <div className="garis" />
              <p>atau daftar dengan</p>
              <div className="garis" />
            </div>
            <div className="register-gf">
              <button>
                <iconify-icon icon="logos:google-icon"></iconify-icon>Login
                Google
              </button>
              <button>
                <iconify-icon icon="logos:facebook"></iconify-icon>Login
                Facebook
              </button>
            </div>
            <h6>
              Sudah punya akun? <Link>Masuk</Link>
            </h6>
          </form>
        </div>
        <div className="form-login-register-img">
          <img src="Re4CashWhite.svg" />
        </div>
      </div>
    </div>
  );
};

export const Login = ({ setLogin }) => {
  const menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setLogin(false);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);
  return (
    <div className="overlay-container">
      <div ref={menuRef} className="form-login-register login">
        <div className="form-login-register-img">
          <img src="Re4CashWhite.svg" />
        </div>
        <form className="login-container">
          <h2>Masuk Akun Re4Cash</h2>
          <div className="input-login-user">
            <div className="input-login-register">
              <iconify-icon icon="carbon:email" />
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-login-register">
              <iconify-icon icon="codicon:lock" />
              <input type="text" placeholder="Password" />
            </div>
            <div className="remember-me-forgot-password">
              <label className="checkbox-remember-me">
                <input type="checkbox" />
                <span>Keep me logged in</span>
              </label>
              <button>Forgot Password</button>
            </div>
          </div>
          <div className="bot-masuk-dengan">
            <div className="garis-content">
              <div className="garis" />
              <p>atau masuk dengan</p>
              <div className="garis" />
            </div>
            <div className="register-gf">
              <button>
                <iconify-icon icon="logos:google-icon"></iconify-icon>Login
                Google
              </button>
              <button>
                <iconify-icon icon="logos:facebook"></iconify-icon>Login
                Facebook
              </button>
            </div>
            <button className="login-btn-masuk">
              Masuk
            </button>
          </div>
          <span>Belum punya akun? <button>Daftar</button></span>
        </form>
      </div>
    </div>
  );
};
