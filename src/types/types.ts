export interface FirstBlockProps {
  goal: number;
  setGoal: (value: number) => void;
}

export interface SecondBlockProps {
  toggle: number;
  setToggle: (value: number) => void;
  inputHeight: string;
  setInputHeight: (value: string) => void;
  inputWeight: string;
  setInputWeight: (value: string) => void;
}

export interface ThirdBlockProps {
  chosenBehaviors: number[];
  setChosenBehaviors: React.Dispatch<React.SetStateAction<number[]>>;
}   

export interface FourthBlockProps {
  chosenExercise: number;
  setChosenExercise: React.Dispatch<React.SetStateAction<number>>;
}   

export interface ButtonProps {
  isButtonActive: boolean;
  handleOptionClick: () => void;
}
