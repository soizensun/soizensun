import React from 'react'
import './App.css'
import SlideOne from './components/SlideOne'
import SlideTwo from './components/SlideTwo'
import SlideThree from './components/SlideThree'
import SlideFour from './components/SlideFour'
import SlideFive from './components/SlideFive'

export default function App() {

  return (
    <div className="container">
      <div className="outer-wrapper">
        <div className="wrapper">
          <div className="slide one"><SlideOne/></div>
          <div className="slide two"><SlideTwo/></div>
          <div className="slide three"><SlideThree/></div>
          <div className="slide four"><SlideFour/></div>
          <div className="slide five"><SlideFive/></div>
        </div>
      </div>
    </div>


  );
}
