import "./ItemCount.css";

const ItemCount = ({ count, setCount, stock }) => {
  const decrease = () => {
    if (!count <= 0) setCount(count - 1);
  };

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  return (
    <div className="card__counter">
      <i className="fa-solid fa-circle-minus" onClick={decrease}></i>
      <p className="card__counter--display">{count}</p>
      <i className="fa-solid fa-circle-plus" onClick={increase}></i>
    </div>
  );
};

export default ItemCount;
