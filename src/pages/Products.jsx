import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../config/firebase";
import { Card } from "antd";
import { Checkbox, Button } from "antd";
import Navbar from "../components/layout/Navbar";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

const categories = [
  "EXPEDITION SERIES",
  "URBAN RUNNERS",
  "TECH SANDALS",
  "HERITAGE LEATHER",
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (checkedValues) => {
    console.log("Selected Categories:", checkedValues);
    setSelected(checkedValues);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const data = querySnapshot.docs.map((doc) => {
        const raw = doc.data();
        return {
          id: doc.id,
          ...raw,
          created: raw.created?.toDate().toISOString(), // ✅ convert
        };
      });
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-black text-white px-6 md:px-16 py-12 md:py-20">
        <div className="m-auto container">
          {/* Header */}
          <div className="mb-10">
            <p className="text-xs md:text-lg tracking-widest text-gray-400 mb-2">
              GEAR FOR THE JOURNEY
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              EXPLORE EVERY TERRAIN
            </h1>
            <p className="text-gray-400 max-w-xl text-sm md:text-base">
              Engineered for every path you take — from city streets to rugged
              trails. Built for comfort, durability, and performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Sidebar */}
            <aside className="md:col-span-1 mt-11">
              <div className="bg-neutral-900 !text-white p-5 rounded-[4px] shadow-lg border-none">
                {/* Heading */}
                <h3 className="text-lg md:text-2xl font-semibold mb-6 tracking-wide">
                  CATEGORIES
                </h3>

                {/* Checkbox Group */}
                <Checkbox.Group
                  value={selected}
                  onChange={onChange}
                  className="flex flex-col gap-3"
                >
                  {categories.map((cat) => (
                    <Checkbox key={cat} value={cat}>
                      <span className="text-gray-400 text-lg pl-2 hover:text-white transition">
                        {cat}
                      </span>
                    </Checkbox>
                  ))}
                </Checkbox.Group>
              </div>
            </aside>
            <div className="md:col-span-3">
              {/* Top Bar */}
              <div className="flex justify-end items-center mb-4 text-lg text-gray-400">
                <span>ALL PRODUCTS {`(${products.length})`}</span>
              </div>

              <div className="flex flex-wrap gap-11">
                {products.map((item) => (
                  <Card
                    key={item.id}
                    hoverable
                    cover={
                      <img
                        onClick={() => {
                          navigate(`/product/${item.id}`);
                        }}
                        src={item.image}
                        alt={item.name}
                        className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
                      />
                    }
                    className="bg-neutral-900 rounded-[4px] overflow-hidden group w-[350px]"
                  >
                    {/* Info */}
                    <div className="">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm md:text-xl font-semibold">
                          {item.name}
                        </h3>
                        <span className="text-sm md:text-xl font-semibold tracking-wide text-orange-400">{`₹${item.price}`}</span>
                      </div>
                      <p className="text-xs md:text-[16px] text-gray-400 h-11 my-2">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex gap-2 mt-3">
                        <span className="text-md font-bold text-white bg-orange-400 text-black px-2 py-1 rounded">
                          {item.discount
                            ? `${item.discount}% OFF`
                            : "No Discount"}
                        </span>
                        <span className="text-md font-bold text-white bg-orange-400 text-black px-2 py-1 rounded">
                          {item.category}
                        </span>
                        <Button
                          onClick={() => {
                            console.log("ADDING:", item);
                            dispatch(addToCart(item));
                            notification.success({
                              message: "Success",
                              description: "Added in cart",
                            });
                          }}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
