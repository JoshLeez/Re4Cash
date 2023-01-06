import Button from "./Button";

export const Login = ({ setLayout, layout }) => {
  return (
    <>
    <div className="backdrop" onClick={() => setLayout(!layout)} />
      <div className="overlay-container" >
        <div className="form-login">
          <div className="login-container">
            <div className="login-content">
              <h3>Daftar Akun Re4Cash</h3>
              <input placeholder="Nama Lengkap" />
              <input placeholder="Email" />
              <input placeholder="Password" />
              <input placeholder="Confirm Password" />
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
              <div className="login-gf">
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
                Sudah punya akun? <span>Masuk</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
