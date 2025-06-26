"use client";

import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
    const[count, setCount] = useState(0);
    function changeCount(){
        setCount(count + 1);
    }
 useEffect(()=>{
    // alert("Count Initialized")// yo harek count ma pop hune vo so aba ,[] yo halo vane chia first time matra hunza
    setInterval(()=>{
        setCount(count+1)
    },1000)
 },[count])//api bata data lyayera show garda or notification harko lagi useEffect use garne
  return (
<main>
    <p>Count: {count}</p>
          <button
        type="button"
        className="btn btn-outline-dark"
        onClick={changeCount}
      >
        Add
      </button>
</main>
  );
}
