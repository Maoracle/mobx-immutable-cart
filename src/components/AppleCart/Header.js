import { observer } from 'mobx-react-lite';
import { useAppleListStore } from '../../store/AppleListStore';
import styles from './style.module.css';

function Header() {
  const appleListStore = useAppleListStore();
  const { applesInCart, applesEaten } = appleListStore;

  return (
    <div className={styles.header}>
      <p className={styles.title}>苹果篮子</p>
      <div className={styles.stats}>
        <div className={styles.statsItem}>
          <p className={styles.statsItemTitle}>当前</p>
          <p>
            {applesInCart.length}个苹果，
            {applesInCart.reduce(
              (weight, apple) => (weight += apple.weight),
              0
            )}
            克
          </p>
        </div>
        <div className={styles.statsItem}>
          <p className={styles.statsItemTitle}>已吃掉</p>
          <p>
            {applesEaten.length}个苹果，
            {applesEaten.reduce((weight, apple) => (weight += apple.weight), 0)}
            克
          </p>
        </div>
      </div>
    </div>
  );
}

export default observer(Header);
