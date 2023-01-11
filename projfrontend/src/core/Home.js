import React from 'react';
import "../styles.css"
import {API} from "../backend"
import Base from "./Base"

export default function App(){
  console.log("API IS:", API);
  return(
    <Base title='Home Page' description='Welcome to the Store'>
      <div className='row'>
        <div className='col-4'>
            <button className='btn btn-success'>Test</button>
        </div>

        <div className='col-4'>
            <button className='btn btn-success'>Test</button>
        </div>

        <div className='col-4'>
            <button className='btn btn-success'>Test</button>
        </div>
      </div>
    </Base>
  )
}