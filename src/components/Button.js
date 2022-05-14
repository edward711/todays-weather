import classNames from "classnames";

const BUTTON_TYPES_MAPS = {
  primary: 'bg-primary text-light',
  secondary: 'bg-secondary text-light',
  dark: 'bg-dark text-light',
  light: 'bg-light text-dark border'
};

function Button(props) {
  const { className, type, children, onClick } = props;

  return (
    <button className={classNames("rounded-md border active:translate-y-px border-secondary shadow-sm px-2", BUTTON_TYPES_MAPS[type], className)} onClick={onClick}>{children}</button>
  )
}

export default Button;