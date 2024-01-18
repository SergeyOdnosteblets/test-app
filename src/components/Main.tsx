import { Routes, Route } from "react-router-dom";
import FirstBlock from '../pages/FirstBlock/FirstBlock';
import SecondBlock from '../pages/SecondBlock/SecondBlock';
import ThirdBlock from '../pages/ThirdBlock/ThirdBlock';
import FourthBlock from '../pages/FourthBlock/FourthBlock';
import { useState } from 'react';


const Main = () => {
     const [goal, setGoal] = useState(0);
     const [toggle, setToggle] = useState(1);
     const [inputHeight, setInputHeight] = useState("");
     const [inputWeight, setInputWeight] = useState("");
     const [chosenBehaviors, setChosenBehaviors] = useState<number[]>([]);
     const [chosenExercise, setChosenExercise] = useState(0);
  return (
    <Routes>
      <Route
        path='/test-app'
        element={<FirstBlock goal={goal} setGoal={setGoal} />}
      />
      <Route
        path='/2'
        element={
          <SecondBlock
            toggle={toggle}
            setToggle={setToggle}
            inputHeight={inputHeight}
            setInputHeight={setInputHeight}
            inputWeight={inputWeight}
            setInputWeight={setInputWeight}
          />
        }
      />
      <Route
        path='/3'
        element={
          <ThirdBlock
            chosenBehaviors={chosenBehaviors}
            setChosenBehaviors={setChosenBehaviors}
          />
        }
      />
      <Route
        path='/4'
        element={
          <FourthBlock
            chosenExercise={chosenExercise}
            setChosenExercise={setChosenExercise}
          />
        }
      />
    </Routes>
  );
};

export default Main;
