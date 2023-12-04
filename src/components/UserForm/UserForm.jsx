import { useState } from "react";
import styles from "./styles.module.css";

const { classForm } = styles;

const UserForm = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    location: "",
    phone: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;

    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className={classForm}>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={inputHandler}
        />

        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          value={form.age}
          onChange={inputHandler}
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={inputHandler}
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={inputHandler}
        />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default UserForm;
