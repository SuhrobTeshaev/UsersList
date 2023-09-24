import "./style.css";
const Users = () => {
  return (
    <div className="code">
      <input type="text" placeholder="name" />
      <input type="number" placeholder="age" />
      <p></p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <div className="action">
        <h3>By page:</h3>
        <select>
          <option>1</option>
          <option>2</option>
          <option>2</option>
          <option>2</option>
        </select>
        <button>prev</button>
        <h3>page:</h3>
        <button>next</button>
      </div>
    </div>
  );
};
export default Users;
