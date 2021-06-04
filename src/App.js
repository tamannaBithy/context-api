import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  var person1 = {
    name : 'mahfuz',
    job : 'singer'
  }
  var style = {
    color : 'red',
    backgroundColor : 'yellow'
  }
  const nayok = ['rubel', 'alamgir', 'salman shah', 'shuvo', 'nirob']
const product = [
  {name : 'photoshop', price : '$99'},
  {name : 'illustrator', price : '$60'},
  {name : 'PDF', price : '$6'},
]
  return (
    <div className="App">
      <header className="App-header">

        <h2 style= {style}>my heading : {person1.name + ' ' + person1.job}</h2>
        <p>My first react paragraph</p>

        <Counter></Counter>

        <Users></Users>

        <ul>
          {
            nayok.map (nayok => <li>{nayok}</li>)
          }
          {
            product.map (product => <li>{product.name}</li>)
          }
        </ul>
        {
          product.map (pd => <Product product = {pd}></Product>)
        }
     
        {/* <Person name = {nayok[2]} nayika = 'moushumi'></Person>
        <Person name = 'bapparaz' nayika = 'sabnur'></Person> */}

        {/* <Product product = {product[0]} ></Product>
        <Product product = {product[1]}></Product> */}
      </header>
    </div>
  );
}

function Person (props){
  return (<div style = {{border : '2px solid yellow', margin : '10px'}}>
    <h1>nayok : {props.name}</h1>
    <h3>hero of {props.nayika}</h3>
  </div>
  )
}

function Product (props){
  const productStyle = {
    border : '1px solid gray',
    borderRadius : '5px',
    backgroundColor : 'lightgrey',
    height : '200px',
    width : '200px',
    float : 'left'
  }
  const {name, price} = props.product;
  return (
    <div style = {productStyle}>
       <h4> {name} </h4>
       <h3> {price} </h3>
       <button>Buy Now</button>
    </div>
  )
}

function Counter (){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h4>Count : {count}</h4>
      <button onClick = {() => setCount(count -1)}>decrease</button>
      <button onClick = {() => setCount(count + 1)}>increase</button>
    </div>
  )
}

function Users (){
  const [users, setUsers] = useState([]);

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
