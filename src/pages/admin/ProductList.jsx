import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Image, Table } from "antd";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (image) => <Image alt="Product Image" src={image} width={80} />,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (price) => `₹${price}`,
    },
    {
      title: "Discount",
      dataIndex: "discount",
      render: (discount) => (discount ? `${discount}% OFF` : "No Discount"),
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "category",
      dataIndex: "category",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#121212] text-white p-6">
        <div className="mb-6">
          <div>
            <h1 className="text-3xl font-bold">PRODUCT LIST</h1>
            <p className="text-gray-400 text-sm">NEW ITEMS ADDED</p>
          </div>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={products}
            pagination={false}
            rowKey="id"
          />
        </div>
      </div>
    </>
  );
};

export default ProductList;
