import { ButtonProps } from '../../types/types'
import styles from  './Button.module.scss'

const Button = ({isButtonActive, handleOptionClick}:ButtonProps) => {
  return (
   <button
        onClick={handleOptionClick}
        disabled={!isButtonActive}
        className={`${styles.button} ${isButtonActive && styles.button_active}`}
      >
        Continue
   </button>
  )
}
export default Button