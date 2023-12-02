import { UserInfo, Container, UserForm } from "./components";

const userData = [
  {
    id: 1,
    name: "Yasmine",
    age: "06",
    location: "France",
    phone: "2154862",
  },
  {
    id: 2,
    name: "Yahia",
    age: "08",
    location: "England",
    phone: "584862",
  },
  {
    id: 3,
    name: "Youssef",
    age: "09",
    location: "US",
    phone: "2154862",
  },
];

const App = () => {
  const userList = userData.map((user) => (
    <UserInfo
      key={user.id}
      name={user.name}
      age={user.age}
      location={user.location}
      phone={user.location}
    />
  ));
  return (
    <div>
      <Container>
        <UserForm></UserForm>
      </Container>
      <Container>{userList}</Container>
    </div>
  );
};

export default App;
