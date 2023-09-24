type UsersListProps = {
  users: {
    name: string;
    age: number;
  };
};
const UserList = (props: UsersListProps) => {
  return (
    <div>
      {props.users.map((users) => {
        return (
          <h3 key={users.id}>
            {users.name},{users.age}
          </h3>
        );
      })}
    </div>
  );
};
export default UserList;
