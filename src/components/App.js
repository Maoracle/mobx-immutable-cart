import AppleContainer from './AppleCart/Container';
import { AppleListStoreProvider } from '../store/AppleListStore';

function App() {
  return (
    <AppleListStoreProvider>
      <AppleContainer />
    </AppleListStoreProvider>
  );
}

export default App