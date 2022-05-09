//style
import './Home.css';

//custom hooks
import { useFetch } from '../hooks/useFetch.jsx';

const Home = () => {
  const url = 'https://vitejs-vite-qmpd45--8000.local.webcontainer.io/products';
  const { data: items } = useFetch(url);

  return (
    <div>
      <ul className="products-list">
        {items &&
          items.map((item) => (
            <li>
              {item.name}: R${item.price}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
