import "./ItemCount.css";

const ItemCount = ({ count, setCount, stock }) => {
  const disabledButton = {
    cursor: "not-allowed",
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  return (
    <div className="card__counter">
      {count === 1 ? (
        <i className="fa-solid fa-circle-minus" onClick={decrease} style={disabledButton}></i>
      ) : (
        <i className="fa-solid fa-circle-minus" onClick={decrease}></i>
      )}
      <p className="card__counter--display">{count}</p>
      {count === stock ? (
        <i className="fa-solid fa-circle-plus" onClick={increase} style={disabledButton}></i>
      ) : (
        <i className="fa-solid fa-circle-plus" onClick={increase}></i>
      )}
    </div>
  );
};

export default ItemCount;
