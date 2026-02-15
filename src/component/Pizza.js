function Pizza({ pizza }) {
  return (
    <div className="Pizza">
      <img src={`/pizzas/${pizza.photoName}.jpg`} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
      <span>${pizza.price}</span>
      {pizza.soldOut && <span className="sold-out">SOLD OUT</span>}
    </div>
  );
}

export default Pizza;
