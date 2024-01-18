import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { SecondBlockProps } from '../../types/types';

import styles from "./SecondBlock.module.scss";


const SecondBlock = (props: SecondBlockProps) => {
  const {
    toggle,
    setToggle,
    inputHeight,
    setInputHeight,
    inputWeight,
    setInputWeight,
  } = props;
  const [isButtonActive, setIsButtonActive] = useState(false);

  const navigate = useNavigate();
  const handleNavigateClick = () => {
    navigate("/3");
  };

  const handleInputChange = (inputNumber: number, value: number) => {
    if (inputNumber === 1) {
      setInputHeight(String(value));
    } else if (inputNumber === 2) {
      setInputWeight(String(value));
    }
  };

  const handleToggleClick = (value: number) => {
    setToggle(value);
  };

  useEffect(() => {
    if (Number(inputHeight) > 0 && Number(inputWeight) > 0) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [inputHeight, inputWeight]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.toggle}>
          <p
            className={`${styles.toggle__item} ${
              toggle === 1 ? styles.toggle__active : ""
            }`}
            onClick={() => handleToggleClick(1)}
          >
            Imperial
          </p>
          <p
            className={`${styles.toggle__item} ${
              toggle === 2 ? styles.toggle__active : ""
            }`}
            onClick={() => handleToggleClick(2)}
          >
            Metric
          </p>
        </div>
        <input
          type='number'
          value={inputHeight}
          onChange={(e) => handleInputChange(1, Number(e.target.value))}
          placeholder='Height(ft)'
        />
        <input
          type='number'
          value={inputWeight}
          onChange={(e) => handleInputChange(2, Number(e.target.value))}
          placeholder='Current Weight(ft)'
        />
        <p className={styles.title}>Measure Yourself</p>
        <p className={styles.desc}>What are your height and body weight? </p>
      </div>

      <Button
        handleOptionClick={handleNavigateClick}
        isButtonActive={isButtonActive}
      />
    </div>
  );
};
export default SecondBlock;
