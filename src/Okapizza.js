import './App.css';
import { pizzasData } from './pizzas';
import Header from './component/Header';
import Footer from './component/Footer';
import Pizza from './component/Pizza'
import Menu from './component/Menu'

function PizzaApp() {
  return (
    <div>
      <div className="menu-header">
        <Header />
        <h2>OUR MENU</h2>
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
      </div>

      <Menu />
      <Footer />
    </div>
  );
}




export default PizzaApp;
