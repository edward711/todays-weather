import classNames from "classnames";

function TextInput(props) {
  const { className, id, name, label, placeholder } = props;

  return (
    <div className={classNames("relative" ,className)}>
      <label htmlFor={id || name} className="absolute -top-5 block text-sm font-medium text-secandary">
        {label}
      </label>
      <div className="rounded-md shadow-sm">
        <input
          type="text"
          name={name}
          id={id || name}
          className="focus:ring-primary focus:border-primary block w-full pl-7 pr-12 border-secondary rounded-md"
          placeholder={placeholder}   
          autocomplete="off"       
        />
      </div>
    </div>
  );
}

export default TextInput;
