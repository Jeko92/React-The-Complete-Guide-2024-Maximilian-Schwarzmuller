import { useState, useRef } from "react";

import Workout from "./components/Workout";
import Input from "./components/Input";
import Form from "./components/Form";
import Toast from "./components/Toast";

// eslint-disable-next-line react-refresh/only-export-components
export const userData = {
  name: "",
  email: "",
};

const workouts = [
  {
    title: "Pushups",
    description: "Do 30 pushups",
    time: 1000 * 60 * 1,
  },
  {
    title: "Squats",
    description: "Do 30 squats",
    time: 1000 * 60 * 2,
  },
  {
    title: "Pullups",
    description: "Do 10 pullups",
    time: 1000 * 60 * 3,
  },
];

function App() {
  const name = useRef();
  const email = useRef();

  const form = useRef();

  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  const [toastVisible, setToastVisible] = useState(false);

  function handleWorkoutComplete(workoutTitle) {
    setCompletedWorkouts((prevCompletedWorkouts) => [
      ...prevCompletedWorkouts,
      workoutTitle,
    ]);
  }

  function handleSaveData() {
    const enteredName = name.current.value;
    const enteredEmail = email.current.value;

    userData.name = enteredName;
    userData.email = enteredEmail;

    console.log(userData);
  }

  function handleRestart() {
    form.current.clear();
  }

  function handleEnrol() {
    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  }

  return (
    <main>
      <section>
        <h2>Choose a workout</h2>
        <ul>
          {workouts.map((workout) => (
            <li key={workout.title}>
              <Workout
                {...workout}
                onComplete={() => handleWorkoutComplete(workout.title)}
              />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Completed workouts</h2>
        <ul>
          {completedWorkouts.map((workoutTitle, index) => (
            <li key={index}>{workoutTitle}</li>
          ))}
        </ul>
      </section>
      <div>
        <Input type="text" label="Your Name" ref={name} />
        <Input type="email" label="Your E-Mail" ref={email} />
        <p id="actions">
          <button onClick={handleSaveData}>Save Data</button>
        </p>
      </div>
      <div>
        <button onClick={handleRestart}>Restart</button>
        <Form ref={form} />
      </div>
      <div id="toast" className="toast-parent">
        {toastVisible && <Toast message="Enrolled successfully!" />}
        <article>
          <h2>React Course</h2>
          <p>
            A course that teaches you React from the ground up and in great
            depth!
          </p>
          <button onClick={handleEnrol}>Enrol</button>
        </article>
      </div>
    </main>
  );
}

export default App;
