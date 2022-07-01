import AppleFooter from './Footer';
import AppleHeader from './Header';
import AppleMain from './Main';
import styles from './style.module.css';

function Container() {
  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <AppleHeader />
        <AppleMain />
        <AppleFooter />
      </div>
    </div>
  );
}

export default Container;
