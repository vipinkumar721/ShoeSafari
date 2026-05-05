import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import {
  Image,
  Table,
  Button,
  Modal,
  Input,
  Form,
  Select,
  notification,
} from "antd";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;
const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [form] = Form.useForm();
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const showModal = (record) => {
    setSelectedProduct(record);
    setOpen(true);
    form.setFieldsValue(record);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
  };

  const handleUpdate = async (values) => {
    if (!selectedProduct) return;

    try {
      await updateDoc(doc(db, "products", selectedProduct.id), values);

      notification.success({
        message: "Product Updated ✅",
      });

      setOpen(false);

      setProducts((prev) =>
        prev.map((item) =>
          item.id === selectedProduct.id ? { ...item, ...values } : item,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (image) => (
        <Image
          className="object-cover"
          alt="Product Image"
          src={image}
          height={80}
          width={80}
        />
      ),
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
    {
      title: "Actions",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "12px" }}>
          <Button
            onClick={() => showModal(record)}
            className="!bg-[#d3582b] !rounded-[4px] !px-8 !border-none !text-white !font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300 ease-in-out transform"
          >
            Edit
          </Button>
          <Button
            onClick={() => handleDelete(record.id)}
            className="!bg-transparent !rounded-[4px] !px-8 !border-gray-500 !text-black !font-semibold hover:scale-105 transition-all duration-300 ease-in-out transform"
          >
            Delete
          </Button>
        </div>
      ),
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
            rowKey="id"zz
          />
        </div>
      </div>

      <Modal
        open={open}
        onOk={handleOk}
        footer={null}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        className="custom-modal"
      >
        <div className="w-full max-w-3xl !bg-[#1a1a1a] rounded-xl p-6 shadow-lg">
          {/* Header */}
          <h2 className="text-white text-lg font-semibold border-l-4 border-orange-500 pl-3 mb-6">
            EDIT PRODUCT DETAILS
          </h2>

          <Form
            form={form}
            layout="vertical"
            autoComplete="off"
            onFinish={handleUpdate}
          >
            {/* Name */}
            <div className="mb-5 flex flex-col">
              <label className="text-xs text-gray-400 uppercase mb-2">
                Gear
              </label>
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Enter product name" }]}
                className="!mb-0"
              >
                <Input
                  placeholder="Product Name"
                  className="!bg-[#2a2a2a] !border-none !text-white placeholder:!text-gray-500 !rounded-lg h-10"
                />
              </Form.Item>
            </div>

            {/* Price */}
            <div className="mb-5 flex flex-col">
              <label className="text-xs text-gray-400 uppercase mb-2">
                Price
              </label>
              <Form.Item
                name="price"
                rules={[{ required: true, message: "Enter price" }]}
                className="mb-0"
              >
                <Input
                  type="number"
                  placeholder="Enter price"
                  className="!bg-[#2a2a2a] !border-none !text-white placeholder:!text-gray-500 !rounded-lg h-10"
                />
              </Form.Item>
            </div>

            {/* Discount */}
            <div className="mb-5 flex flex-col">
              <label className="text-xs text-gray-400 uppercase mb-2">
                Discount (%)
              </label>
              <Form.Item name="discount" className="mb-0">
                <Input
                  type="number"
                  placeholder="Optional"
                  className="!bg-[#2a2a2a] !border-none !text-white placeholder:!text-gray-500 !rounded-lg h-10"
                />
              </Form.Item>
            </div>

            {/* Category */}
            <div className="mb-5 flex flex-col">
              <label className="text-xs text-gray-400 uppercase mb-2">
                Category
              </label>
              <Form.Item
                name="category"
                className="mb-0"
                rules={[{ required: true, message: "Select Category" }]}
              >
                <Select
                  options={[
                    { label: "Sneakers", value: "Sneakers" },
                    { label: "Casual", value: "Casual" },
                    { label: "Sports", value: "Sports" },
                    { label: "Premium", value: "Premium" },
                  ]}
                  className="custom-select !bg-[#2a2a2a] !border-none !text-white !rounded-lg h-10"
                />
              </Form.Item>
            </div>

            {/* Image */}
            <div className="mb-5 flex flex-col">
              <label className="text-xs text-gray-400 uppercase mb-2">
                Image URL
              </label>
              <Form.Item
                name="image"
                rules={[{ required: true, message: "Enter image URL" }]}
                className="mb-0"
              >
                <Input
                  placeholder="Paste image link"
                  className="!bg-[#2a2a2a] !border-none !text-white placeholder:!text-gray-500 !rounded-lg h-10"
                />
              </Form.Item>
            </div>

            {/* Description */}
            <div className="mb-5 flex flex-col">
              <label className="text-xs text-gray-400 uppercase mb-2">
                Expedition Narrative
              </label>
              <Form.Item
                name="description"
                className="mb-0"
                rules={[{ required: true, message: "Enter Discription" }]}
              >
                <TextArea
                  rows={5}
                  placeholder="Describe the gear advantages..."
                  className="!bg-[#2a2a2a] !border-none !text-white placeholder:!text-gray-500 !rounded-lg"
                />
              </Form.Item>
            </div>

            {/* Buttons */}

            <div className="flex justify-end gap-3 mt-6">
              <Button
              onClick={handleCancel}
                type="primary"
                size="large"
                className="!bg-transparent !rounded-[4px] !border-gray-500 !text-white !font-semibold hover:scale-105 transition-all duration-300 ease-in-out transform"
              >
                DISCARD
              </Button>
              <Button
                loading={confirmLoading}
                type="primary"
                size="large"
                htmlType="submit"
                className="!bg-[#d3582b] !rounded-[4px] !border-none !text-white !font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300 ease-in-out transform"
              >
                SAVE
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ProductList;
