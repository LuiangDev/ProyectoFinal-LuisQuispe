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
    <div className="flex flex-col items-center justify-center mx-auto py-2">
      <h1 className="text-3xl text-cyan-700 font-bold gap-4 py-4" >{item.title}</h1>
      <img src={item.imageUrl} alt="" className="max-w-sm my-6 border-1 rounded-3xl"/>
      <Counter item={item} />
    </div>
  );
};

export default ItemDetail;