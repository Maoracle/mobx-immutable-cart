import { observer } from 'mobx-react-lite';
import imgUrl from '../../images/apple.png';
import styles from './style.module.css';

function Apple({ apple }) {
  const { eat } = apple;

  return (
    <li>
      <div className={styles.apple}>
        <div className={styles.appleHeader}>
          <img src={imgUrl} alt={`${apple.name} - ${apple.id}号`} />
          <div className={styles.appleNameContainer}>
            <p className={styles.appleName}>
              {apple.name} - {apple.id}号
            </p>
            <p>{apple.weight}克</p>
          </div>
        </div>

        <button className={styles.btnPrimary} onClick={eat}>
          吃掉
        </button>
      </div>
    </li>
  );
}

export default observer(Apple);
