import React from 'react';
// import { useState, } from 'react';
import Review from './components/Review';

// don't change the Component name "App"
function App() {
  const [studentName, setStudentName] = React.useState('');
  const [feedback, setFeedback] = React.useState('');

  function handleChangeName(event) {
    setStudentName(event.target.value);
 
  }
 
  function handleChangeFeedback(event) {
    setFeedback(event.target.value);
  }
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea onChange={handleChangeFeedback} value={feedback} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" onChange={handleChangeName} value={studentName} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>
 
        <Review feedback={feedback} student={studentName} />
 
        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;