import Label from "./Label";

import Input from "./Input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { title, name, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name} title={title} />
      <Input type={type} name={name} placeholder={placeholder} ref={ref}></Input>
    </div>
  );
});

export default InputForm;
