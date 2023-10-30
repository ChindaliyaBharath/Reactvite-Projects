// import { MdMessage } from "react-icons/md";
import styles from './Button.module.css';

const Button = ({ isOutline , icon , text , ...rest}) => {

  return (
    <button 
    {...rest}
    className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
      {/* VIA SUPPORT CHAT */}
      </button>
  )
}

export default Button;