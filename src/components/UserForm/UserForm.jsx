import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
const { classForm } = styles;
import { v4 as uuidv4 } from "uuid";

const intState = {
  id: uuidv4(),
  name: "",
  age: "",
  location: "",
  phone: "",
};

const UserForm = ({ addUser }) => {
  const [form, setForm] = useState(intState);
  const focusInput = useRef("test");

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  const formHandler = (e) => {
    e.preventDefault();
    addUser(form);
    setForm(intState);
    // console.log(testInput.current.value)
  };

  return (
    <div className={classForm}>
      <form onSubmit={formHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={(e) => handleChangeInput(e)}
          ref={focusInput}
        />

        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          value={form.age}
          onChange={(e) => handleChangeInput(e)}
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={(e) => handleChangeInput(e)}
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={(e) => handleChangeInput(e)}
        />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default UserForm;
