import React from 'react'
import './App.css'
import PreSlide from './components/PreSlide'
import SlideOne from './components/SlideOne'
import SlideTwo from './components/SlideTwo'
import SlideThree from './components/SlideThree'
import SlideFour from './components/SlideFour'
import SlideFive from './components/SlideFive'
import SlideSix from './components/SlideSix'

export default function App() {

  return (
    <div className="container">
      <div className="outer-wrapper">
        <div className="wrapper">
          <div className="preSlide slide"><PreSlide/></div>
          <div className="slide one"><SlideOne/></div>
          <div className="slide two"><SlideTwo/></div>
          <div className="slide three"><SlideThree/></div>
          <div className="slide four"><SlideFour/></div>
          <div className="slide five"><SlideFive/></div>
          <div className="slide six"><SlideSix/></div>
        </div>
      </div>
    </div>


  );
}
