import React, { useEffect } from 'react'
import './App.css'
import SlideOne from './components/SlideOne'

export default function App() {

  return (
    <div className="container">
      <div className="outer-wrapper">
        <div className="wrapper">
          <div className="slide one"><SlideOne/></div>
          <div className="slide two"></div>
          <div className="slide three"></div>
          <div className="slide four"></div>
        </div>
      </div>
    </div>


  );
}
