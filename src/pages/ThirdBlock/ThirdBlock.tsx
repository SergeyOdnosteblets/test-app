import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import { ThirdBlockProps } from '../../types/types';
import styles from "./ThirdBlock.module.scss";
import { behaviorsList } from '../../assets/info';

const ThirdBlock = ({
  chosenBehaviors,
  setChosenBehaviors,
}: ThirdBlockProps) => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const navigate = useNavigate();
  const handleNavigateClick = () => {
    navigate("/4");
  };

  const handleChoose = (id: number) => {
    const isAlreadyChosen = chosenBehaviors.includes(id);

    if (isAlreadyChosen) {
      const updatedList = chosenBehaviors.filter((chosenId) => chosenId !== id);
      setChosenBehaviors(updatedList);
    } else {
      setChosenBehaviors([...chosenBehaviors, id]);
    }
  };

  useEffect(() => {
    chosenBehaviors.length ? setIsButtonActive(true) : setIsButtonActive(false);
  }, [chosenBehaviors]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Destructive behaviors</p>
        <p className={styles.description}>We all have them! Which are yours?</p>
      </div>
      <div className={styles.cards}>
        {behaviorsList.map((item) => {
          const isActive = chosenBehaviors.includes(item.id);
          return (
            <div
              onClick={() => handleChoose(item.id)}
              key={item.id}
              className={`${styles.card} ${
                isActive ? styles.card__active : ""
              }`}
            >
              <div className={styles.img}>
                <img src={item.img} alt={item.desc} />
              </div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          );
        })}
      </div>
      <Button
        handleOptionClick={handleNavigateClick}
        isButtonActive={isButtonActive}
      />
    </div>
  );
};
export default ThirdBlock;