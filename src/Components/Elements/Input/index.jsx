import Label from "./Label";

import Input from "./Input";

const InputForm = (props) => {
  const { title, name, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name} title={title} />
      <Input type={type} name={name} placeholder={placeholder}></Input>
    </div>
  );
};

export default InputForm;
