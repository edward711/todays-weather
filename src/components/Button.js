import classNames from "classnames";

const BUTTON_TYPES_MAPS = {
  primary: "bg-primary text-light",
  secondary: "bg-secondary text-light",
  dark: "bg-dark text-light",
  light: "bg-light text-dark border",
};

function Button(props) {
  const { className, type, children, onClick, disabled } = props;

  return (
    <button
      className={classNames(
        "rounded-md border border-secondary shadow-sm px-2 disabled:opacity-75 disabled:cursor-not-allowed",
        {
          "active:translate-y-px": !disabled,
        },
        BUTTON_TYPES_MAPS[type],
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
