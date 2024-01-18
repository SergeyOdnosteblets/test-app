import styles from './FourthBlock.module.scss';
import { FourthBlockProps } from '../../types/types';

import activeGirl from "../../assets/activeGirl.svg";
import { exercisesList } from '../../assets/info';

const FourthBlock = ({
  chosenExercise,
  setChosenExercise,
}: FourthBlockProps) => {
  const handleChosenClick = (id: number) => {
    setChosenExercise((prevChosenCard) => (prevChosenCard === id ? 0 : id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Physical exercise</p>
        <p className={styles.description}>
          Physical exercise means a lot for a woman who wants to lose kilos and
          works at the office
        </p>
      </div>
      <p className={styles.title}>How active are you during the day?</p>
      <div className={styles.content}>
        <img src={activeGirl} alt='activeGirl' />
        <div className={styles.cards}>
          {exercisesList.map((item) => {
            return (
              <div
                onClick={() => handleChosenClick(item.id)}
                key={item.id}
                className={`${styles.card} ${
                  chosenExercise === item.id ? styles.card__active : ""
                }`}
              >
                <p className={styles.desc}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default FourthBlock