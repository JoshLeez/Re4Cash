import { Link } from "react-router-dom";
import "./styles/button.css";

const Button = ({ type, children, ...props }) => {
  const BUTTON_TYPE = {
    PRIMARY: "btn-primary",
    SECONDARY: "btn-secondary",
    PRIMARY_GREEN: "btn-primary-green",
    SECONDARY_GREEN: "btn-secondary-green",
    PRIMARY_LONG : "btn-primary-long",
    SECONDARY_LONG : "btn-secondary-long",
    BUTTON_TERTIARY : "btn-tertiary",
    BUTTON_MODEL : "btn-model-product",

    AKSI_EDIT : "btn-aksi-edit",
    AKSI_HAPUS : "btn-aksi-hapus",
    BUTTON_BATAL : "btn-batal",
    BUTTON_UBAH : "btn-ubah"
  };

  return (
    <button className={BUTTON_TYPE[type || "PRIMARY"]} {...props}>
      {children}
    </button>
  );
};

export const LinkButton = ({type, children, ...props}) => {
    const BUTTON_TYPE = {
      PRIMARY: "btn-primary",
      SECONDARY: "btn-secondary",
      PRIMARY_GREEN: "btn-primary-green",
      SECONDARY_GREEN: "btn-secondary-green",
      PRIMARY_LONG : "btn-primary-long",
      SECONDARY_LONG : "btn-secondary-long",
      BUTTON_TERTIARY : "btn-tertiary",
      BUTTON_MODEL : "btn-model-product",

      AKSI_EDIT : "btn-aksi-edit",
      AKSI_HAPUS : "btn-aksi-hapus",
      BUTTON_BATAL : "btn-batal",
      BUTTON_UBAH : "btn-ubah"
        };
    return (
    <Link className={BUTTON_TYPE[type || "PRIMARY"]} {...props}>
      {children}
    </Link>
  );
};

export default Button;
