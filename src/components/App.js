import logo from '../images/logo.png';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import getDataFromApi from '../services/getDataFromApi';

console.log(getDataFromApi());

function App() {
  /* const [character, setCharacters] = useState([]);
  const [name, setName] = useState('');
  useEffect(()=> {
    getDataFromApi().then(data => setCharacters(data));
  }, []); */
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
