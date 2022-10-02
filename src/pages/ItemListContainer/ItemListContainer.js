import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../../firebase/firebase";
import Loader from "../../components/Loader/Loader";
import ItemList from "../../components/ItemList/ItemList";

import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  const getProducts = () => {
    const querySnapshot = collection(db, "items");
    if (category) {
      const queryFilter = query(querySnapshot, where("category", "==", category));
      getDocs(queryFilter)
        .then((response) => {
          const data = response.docs.map((item) => {
            return { id: item.id, ...item.data() };
          });
          setList(data);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      getDocs(querySnapshot)
        .then((response) => {
          const data = response.docs.map((item) => {
            return { id: item.id, ...item.data() };
          });
          setList(data);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="products">
          <ItemList list={list} />
        </section>
      )}
    </>
  );
};

export default ItemListContainer;
