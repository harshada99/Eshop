import {createStore} from 'redux';
import productReducer from './products/productReducer';

const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8000/store");
    setUser(result.data);
  }

const store = createStore(productReducer)



export default store;