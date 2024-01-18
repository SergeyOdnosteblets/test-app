import { useNavigate } from 'react-router-dom';
import styles from './FirstBlock.module.scss';
import { FirstBlockProps } from '../../types/types';
import { goalsList } from '../../assets/info';


const FirstBlock = ({ goal, setGoal }: FirstBlockProps) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    setGoal(id);
    navigate("/2");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>The Goal</p>
        <p className={styles.description}>
          Focus on the health benefits you need.
        </p>
        <p className={styles.description}>
          Balanced nutrition will let you achieve them
        </p>
      </div>
      <p className={styles.title}>What are your goals?</p>
      <div className={styles.cards}>
        {goalsList.map((item) => {
          return (
            <div
              onClick={() => handleClick(item.id)}
              key={item.id}
              className={`${styles.card} ${
                goal === item.id ? styles.card__active : ""
              }`}
            >
              <p className={styles.desc}>{item.desc}</p>
              <img src={item.img} alt={item.desc} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FirstBlock