import { Link } from "react-router-dom";
import "./styles/button.css";
import { useState, useEffect } from "react";

const Button = ({ tipe, children, ...props }) => {
  const BUTTON_TYPE = {
    PRIMARY: "btn-primary",
    SECONDARY: "btn-secondary",
    PRIMARY_GREEN: "btn-primary-green",
    SECONDARY_GREEN: "btn-secondary-green",
    PRIMARY_LONG: "btn-primary-long",
    SECONDARY_LONG: "btn-secondary-long",
    BUTTON_TERTIARY: "btn-tertiary",
    BUTTON_MODEL: "btn-model-product",

    AKSI_EDIT: "btn-aksi-edit",
    AKSI_HAPUS: "btn-aksi-hapus",
    BUTTON_BATAL: "btn-batal",
    BUTTON_UBAH: "btn-ubah",

    AKSI_DETAIL: "btn-aksi-detail",
    PRIMARY_LONG_GREEN: "btn-primary-long-green",
    BUTTON_TAMBAH: "btn-tambah",
  };

  return (
    <button className={BUTTON_TYPE[tipe || "PRIMARY"]} {...props}>
      {children}
    </button>
  );
};

export const LinkButton = ({ type, children, ...props }) => {
  const BUTTON_TYPE = {
    PRIMARY: "btn-primary",
    SECONDARY: "btn-secondary",
    PRIMARY_GREEN: "btn-primary-green",
    SECONDARY_GREEN: "btn-secondary-green",
    PRIMARY_LONG: "btn-primary-long",
    SECONDARY_LONG: "btn-secondary-long",
    BUTTON_TERTIARY: "btn-tertiary",
    BUTTON_MODEL: "btn-model-product",

    AKSI_EDIT: "btn-aksi-edit",
    AKSI_HAPUS: "btn-aksi-hapus",
    BUTTON_BATAL: "btn-batal",
    BUTTON_UBAH: "btn-ubah",

    AKSI_DETAIL: "btn-aksi-detail",
    PRIMARY_LONG_GREEN: "btn-primary-long-green",
    BUTTON_TAMBAH: "btn-tambah",
  };
  return (
    <Link className={BUTTON_TYPE[type || "PRIMARY"]} {...props}>
      {children}
    </Link>
  );
};

export default Button;

export const ButtonNumber = () => {
  const [item, setItem] = useState(1);
  const [disabled, setDisabled] = useState(null);

  const inputHandler = (e) => {
    e.preventDefault();
    setItem(parseInt(e.target.value) || 1);
  };

  const Increment = () => {
    setItem((prevState) => prevState + 1);
  };

  const Decrement = () => {
    setItem((prevState) => prevState - 1);
  };

  useEffect(() => {
    item === 1 ? setDisabled(true) : setDisabled(false);
  }, [item]);

  return (
    <div className="card-incre-decre">
      <button
        disabled={item === 1}
        className={disabled ? "negev disabled" : "negev"}
        onClick={Decrement}
      >
        -
      </button>
      <input
        disabled={item === 1}
        type="text"
        value={item}
        onChange={inputHandler}
      />
      <button className="posit" onClick={Increment}>
        +
      </button>
    </div>
  );
};
