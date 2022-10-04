import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase/firebase";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loader from "../../components/Loader/Loader";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getProduct = () => {
    const queryDoc = doc(db, "items", id);

    getDoc(queryDoc)
      .then((response) => {
        setItem({ id: response.id, ...response.data() });
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return <>{isLoading ? <Loader /> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
