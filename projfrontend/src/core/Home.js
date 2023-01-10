import React from 'react';
import "../styles.css"
import {API} from "../backend"
import Base from "./Base"

export default function App(){
  console.log("API IS:", API);
  return(
    <Base>
      <h1 className="text-white">Hello front end!!</h1>
    </Base>
  )
}