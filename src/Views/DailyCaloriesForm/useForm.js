import { useState } from "react";

const useForm = (callback, validate) => {
  const [bludType, setBludType] = useState(null);
  const [values, setValues] = useState({
    height: "",
    age: "",
    currentWeight: "",
    targetWeight: "",
    bloodType: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors({
      ...validate(values),
    });

    setValues({
      height: "",
      age: "",
      currentWeight: "",
      targetWeight: "",
      bloodType: "",
    });
    setBludType(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: Number(value),
    });
  };

  const handleBludChange = (e) => {
    setBludType(e.target.value);
    values.bloodType = Number(e.target.value);
  };

  return {
    handleChange,
    handleSubmit,
    handleBludChange,
    bludType,
    values,
    errors,
  };
};

export default useForm;
