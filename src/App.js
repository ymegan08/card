import './App.css';
import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';
import 'animate.css';

function App() {
  const [showCard, setShowCard] = useState(false);
  const getData = (showCard) => {
    setShowCard(showCard);
  }
  return (
    <div className="App">
      <div className={showCard ? 'animate__animated animate__bounceOutUp' : 'home'}>
        <div className="title">
          ARE YOU EXCITED FOR YOUR BIRTHDAY TODAY?
        </div>
        <div className="buttons">
          <Button type="NO" />
          <Button type="YES" sendDataToApp={getData}/>
        </div>
      </div>
        {showCard ?
          <div className='card'>
              <div className='animate__animated animate__bounceInUp'>
                <Card sendDataToApp={getData} />
              </div>
          </div>
           : null}
    </div>
  );
}

export default App;
