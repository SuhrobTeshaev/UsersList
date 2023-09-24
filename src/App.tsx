import "./styles.css";
import './api';

import UserList from './//../src/'

export default function App() {
  const usersList={
    name:'Jack',
    age:10
  }
  return (
    <div className="App">
     <Users name={usersList}>
       <UserList/>
      
    </div>
  );
}

