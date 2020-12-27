import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {

  const events = timelineData.events;
  console.log(events);
  
  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{timelineData.person} social media feed</h1>
      </header>
      <main className="App-main">
      </main>
    </div>
  );
}

export default App;
