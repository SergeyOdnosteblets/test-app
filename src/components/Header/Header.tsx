import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import arrow from "../../assets/arrow.svg";
import avocado from "../../assets/avocado.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => navigate(-1)

  return (
    <div className={styles.header}>
      <div
        className={styles.arrow}
        onClick={location.pathname === "/" ? undefined : goBack}
        style={{
          cursor: location.pathname === "/" ? "not-allowed" : "pointer",
        }}
      >
        <img src={arrow} alt='Arrow' />
      </div>
      <div className={styles.logo}>
        <img src={avocado} alt='logo' />
      </div>
      <p className={styles.title}>Food Mentor</p>
    </div>
  );
};
export default Header;
