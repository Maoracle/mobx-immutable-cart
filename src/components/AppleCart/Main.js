import { observer } from 'mobx-react-lite';
import { useAppleListStore } from '../../store/AppleListStore';
import Apple from './Apple';
import styles from './style.module.css';

function Main() {
  const appleListStore = useAppleListStore();
  const { applesInCart } = appleListStore;

  return (
    <ul className="apple-list">
      {applesInCart.length ? (
        applesInCart.map((apple) => <Apple apple={apple} key={apple.id} />)
      ) : (
        <li className={styles.empty}>
          <p>苹果篮子空空如也</p>
        </li>
      )}
    </ul>
  );
}

export default observer(Main);
