import React from 'react';
import "../styles.css"
import {API} from "../backend"
import Base from "./Base"
import Card from './Card';


export default function App(){
  
  

  return(
    <Base title='Home Page' description='Welcome to the Store'>
      <div className='row text-center'>
        <div className='col-4'>
            <Card/>
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