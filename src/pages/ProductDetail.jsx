import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { db } from "../config/firebase";
import { notification } from "antd";
import { message } from "antd";
import Navbar from "../components/layout/Navbar";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
    <Navbar/>
    <div className="p-6 grid md:grid-cols-2 gap-6">
      <img src={product.image} alt={product.name} className="rounded-xl" />

      <div>
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-lg mt-2">₹ {product.price}</p>

        <Button
          type="primary"
          className="mt-4"
          onClick={() => {
            dispatch(addToCart(product))
            notification.success({
              message: "Added in cart",
              description: "Sucessfully added",
            })
          }}
          
        >
          Add to Cart
        </Button>
      </div>
    </div>
    </>
  );
}