import { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Register = ({ setRegister }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const menuRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setRegister(false);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

  const onSubmit = async (value) => {
    try {
      setRegister(false);
      await axios.post(`${import.meta.env.VITE_REACT_APP_API}/users`, value);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <div className="overlay-container">
      <div ref={menuRef} className="form-login-register">
        <div className="register-container">
          <form onSubmit={handleSubmit(onSubmit)} className="register-content">
            <h3>Daftar Akun Re4Cash</h3>
            <div className="container-input-login-register">
              <div className="input-login-register">
                <iconify-icon icon="ph:user" />
                <input
                  type="text"
                  {...register("fullname", { required: true })}
                  placeholder="Nama Lengkap"
                />
              </div>
              {(errors.fullname && (
                <span className="error-message">Nama tidak boleh kosong</span>
              )) || <span className="error-message">{errorMessage}</span>}
            </div>
            <div className="container-input-login-register">
              <div className="input-login-register">
                <iconify-icon icon="carbon:email" />
                <input
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                  placeholder="Email"
                />
              </div>
              {errors.email && (
                <span className="error-message">Format Email Salah</span>
              )}
            </div>
            <div className="container-input-login-register">
              <div className="input-login-register">
                <iconify-icon icon="codicon:lock" />
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Password"
                />
              </div>
              {(errors.password && (
                <span className="error-message">
                  Password tidak boleh kosong
                </span>
              )) || <span className="error-message">{errorMessage}</span>}
            </div>
            <div className="container-input-login-register">
              <div className="input-login-register">
                <iconify-icon icon="codicon:lock" />
                <input
                  type="password"
                  {...register("confirm_password", {
                    required: true,
                    validate: (val) => {
                      if (watch("password") != val) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                  placeholder="Password"
                />
              </div>
              {(errors.confirm_password && (
                <span className="error-message">Password tidak cocok</span>
              )) || <span className="error-message">{errorMessage}</span>}
            </div>
            <p>
              Dengan mendaftar menjadi pengelola, Anda bertanggung jawab atas
              akun tersebut sesuai dengan <span>Ketentuan</span> &{" "}
              <span>Kebijakan Privasi.</span>
            </p>
            <button className="btn-sign" type="submit">
              Daftar
            </button>
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const menuRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setLogin(false);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

  const onSubmit = async (value) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API}/login`,
        value
      );
      if (data.Authorization) {
        localStorage.setItem(
          import.meta.env.VITE_REACT_APP_AUTH,
          data.Authorization
        );
      }
      setLogin(false);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <div className="overlay-container">
      <div ref={menuRef} className="form-login-register login">
        <div className="form-login-register-img">
          <img src="Re4CashWhite.svg" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="login-container">
          <h2>Masuk Akun Re4Cash</h2>
          <div className="input-login-user">
            <div className="container-input-login-register">
              <div className="input-login-register">
                <iconify-icon icon="carbon:email" />
                <input
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                  placeholder="Email"
                />
              </div>
              {errors.email && (
                <span className="error-message">Format Email Salah</span>
              )}
            </div>
            <div className="container-input-login-register">
              <div className="input-login-register">
                <iconify-icon icon="codicon:lock" />
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Password"
                />
              </div>
              {(errors.password && (
                <span className="error-message">
                  Password tidak boleh kosong
                </span>
              )) || <span className="error-message">{errorMessage}</span>}
            </div>
            <div className="remember-me-forgot-password">
              <label className="checkbox-remember-me">
                <input type="checkbox" />
                <span>Keep me logged in</span>
              </label>
              <button type="button">Forgot Password</button>
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
            <button className="login-btn-masuk" type="submit">
              Masuk
            </button>
          </div>
          <span>
            Belum punya akun? <button>Daftar</button>
          </span>
        </form>
      </div>
    </div>
  );
};
