"use client";

import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  const [named, setName] = useState("Aryush"); // defining state variables, so now its a array state variable so actual value chai named[0] ma hunxa

  function changeName() {
    setName("Ritisha");
  }
  const [isOn, setIsOn] = useState(true);
  const toggle = () => setIsOn(!isOn);

  const [person, setPerson] = useState({
    name:"Aryush",
    age:20,
    email:"khatriaryush@gmail.com"
  })
  function changeAge(){
    // setPerson({name:person.name,age:person.age+1,email:person.email})
    setPerson((prev)=>({...prev,age:person.age+1}))
  }

  const [count, setCount] = useState(0)
  function changeCount(){
    // setPerson({name:person.name,age:person.age+1,email:person.email})
    setCount(count => count+1)
  }
  return (
    <main>
      <h1>Welcome to my Todo Application!</h1>
      <h3>hello {named}</h3>
      <p>Hello My name is {person.name}. I am {person.age}. My email is {person.email}</p>
      <span>Count: <br />
      {count}</span><br />
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={changeName}
      >
        Change name
      </button>
      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={changeAge}
      >
        Change age
      </button>
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={changeCount}
      >
        Add
      </button>

      <button className="btn btn-danger" onClick={toggle}>
        {isOn ? "ON" : "OFF"}
      </button>
    </main>
  );
}
