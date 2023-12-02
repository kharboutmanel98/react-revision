// import PropTypes from "prop-types";

const UserInfo = ({ name, age, location, phone }) => {
  return (
    <div>
      <ul>
        <li>name: {name}</li>
        <li>age: {age}</li>
        <li>location: {location}</li>
        <li>phone: {phone}</li>
      </ul>
    </div>
  );
};

// UserInfo.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.string,
//   location: PropTypes.string,
//   phone: PropTypes.string,
// };

export default UserInfo;
