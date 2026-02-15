import Pizza from "./Pizza";
import { pizzasData } from "../pizzas";

function Menu() {
  return (
    <div className="Card">
      {pizzasData.map((pizza) => (
        <Pizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}

export default Menu;
