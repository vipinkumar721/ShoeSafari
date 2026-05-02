import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../config/firebase";
import { Card } from "antd";
import EquipNavbar from "../components/EquipNavbar";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="h-screen bg-[#ccc]">
        <EquipNavbar/>
        <div className="flex mt-20 justify-center gap-10">
          {products.map((item) => {
            return (
              <Card
              className="h-[340px] w-[240px]"
                key={item.id}
                hoverable
                cover={
                  <img className="object-cover h-40 w-24" draggable={false} alt={item.name} src={item.image} />
                }
              >
                <h2>Name {item.name}</h2>
                <p>Price{item.price}</p>
                <span>Category{item.category}</span>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
