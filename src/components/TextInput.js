import classNames from "classnames";

function TextInput(props) {
  const { className, id, name, label, placeholder, value, onChange } = props;

  return (
    <div className={classNames("relative", className)}>
      <label
        htmlFor={id || name}
        className="absolute -top-5 block text-sm font-medium text-secandary"
      >
        {label}
      </label>
      <div className="rounded-md shadow-sm">
        <input
          type="text"
          name={name}
          id={id || name}
          className="focus:ring-primary 
            focus:border-primary block w-full px-4 
            border-secondary whitespace-nowrap overflow-hidden 
            text-ellipsis rounded-md"
          placeholder={placeholder}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default TextInput;
