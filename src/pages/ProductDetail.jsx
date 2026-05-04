import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { db } from "../config/firebase";
import { notification, Image } from "antd";

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

  if (!product) return <p className="text-white p-6">Loading...</p>;

  return (
    <div className="bg-black text-white p-8 grid md:grid-cols-2 gap-8">

      {/* LEFT IMAGE */}
      <div className=" p-4 rounded-xl">
        {/* <img
          src={product.image}
          alt={product.name}
          className="rounded-xl w-full object-cover"
        /> */}
        <Image
          className="rounded-[4px] w-full object-cover"
          alt={product.name}
          src={product.image}
        />
      </div>

      {/* RIGHT DETAILS */}
      <div className="space-y-5">

        {/* Tag */}
        <p className="text-xs text-orange-400 uppercase tracking-wide">
          Limited Edition
        </p>

        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight">
          {product.name}
        </h1>

        {/* Price */}
        <p className="text-2xl text-orange-500 font-semibold">
          ₹ {product.price}
        </p>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {product.description ||
            "Engineered for explorers. Built with durability and comfort to handle every terrain."}
        </p>

        {/* Features */}
        <div className="flex gap-4 text-xs text-gray-400">
          <span>✔ Sustainable Build</span>
          <span>✔ Lifetime Durability</span>
        </div>


        {/* Secondary Button */}
        <button className="w-full border border-gray-700 py-3 rounded-lg text-gray-400 hover:text-white">
          ADD TO CART
        </button>

      </div>
    </div>
  );
}