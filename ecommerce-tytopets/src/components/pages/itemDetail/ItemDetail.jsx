import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);

    const getProduct =getDoc(refDoc);
    getProduct.then((res) => {
      setItem({ id: res.id, ...res.data() });
    })
    .catch((error) => console.log(error));
    
  }, [id]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "20px" }}>
      <h1 className="text-2xl text-cyan-700 font-semibold gap-4 py-4" >{item.title}</h1>
      <img src={item.imageUrl} alt="" style={{width:300}}/>
      <Counter item={item} />
    </div>
  );
};

export default ItemDetail;