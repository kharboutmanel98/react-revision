// UserForm.js
import { useState } from "react";
import styles from "./styles.module.css";
import InputForm from "./InputForm";
import { v4 as uuidv4 } from "uuid";

const { classForm } = styles;

const intState = {
  id: uuidv4(),
  name: "",
  age: "",
  location: "",
  phone: "",
};



const UserForm = ({ addUser }) => {
  const [form, setForm] = useState(intState);

  const handleChangeInput = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formHandler = (e) => {
    e.preventDefault();
    addUser(form);
    setForm(intState);
    
  };
  
  const inputFields = [
    { label: "Name", name: "name" },
    { label: "Age", name: "age" },
    { label: "Location", name: "location" },
    { label: "Phone", name: "phone" },
  ];

  return (
    <div className={classForm}>
      <form onSubmit={formHandler}>
        {inputFields.map((field) => (
          <InputForm
            key={field.name}
            label={field.label}
            name={field.name}
            value={field.value}
            onChange={handleChangeInput}
          />
        ))}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserForm;
