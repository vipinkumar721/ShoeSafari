import { Button, Input, Form, Select, notification } from "antd";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

const AddProduct = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(values);
    try {
      await addDoc(collection(db, "products"), {
        name: values.name,
        price: Number(values.price),
        discount :values.discount ? Number(values.discount) : null,
        description: values.description,
        category: values.category,
        image: values.image,
        created: new Date(),
      });

      notification.success({
        message: "Success",
        description: "Product Added Successfully",
      });

      navigate("/adminDashboard/product-list");
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Something went wrong!",
      });
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl text-white font-bold">ADD PRODUCT</h1>
            <p className="text-gray-400 text-sm">EXPEDITION REGISTRY</p>
          </div>

          {/* <div className="flex gap-3">
            <Button className="!bg-gray-700 !px-10 !py-5 !text-white !border-none">
              DISCARD
            </Button>
            <Button
              type="primary"
              className="!bg-orange-500 !border-none !px-10 !py-5 !text-white"
            >
              ARCHIVE & SAVE
            </Button>
          </div> */}
        </div>
      <div className="w-full max-w-3xl bg-[#1a1a1a] rounded-xl p-6 shadow-lg">

        {/* Header */}
        <h2 className="text-white text-lg font-semibold border-l-4 border-orange-500 pl-3 mb-6">
          PRODUCT DETAILS
        </h2>

        <Form layout="vertical" onFinish={onFinish} autoComplete="off">

          {/* Name */}
          <div className="mb-5 flex flex-col">
            <label className="text-xs text-gray-400 uppercase mb-2">
              Gear Nomenclature
            </label>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Enter product name" }]}
              className="!mb-0"
            >
              <Input
                placeholder="e.g. Summit Pro 73 Heritage Boot"
                className="!bg-[#2a2a2a] !border-none !text-white placeholder:!text-gray-500 !rounded-lg h-10"
              />
            </Form.Item>
          </div>

          {/* Price */}
          <div className="mb-5 flex flex-col">
            <label className="text-xs text-gray-400 uppercase mb-2">Price</label>
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
            <Form.Item name="category" className="mb-0"
            rules={[{ required: true, message: "Select Category" }]}
            >
              <Select
                options={[
                  { label: "Demo1", value: "demo1" },
                  { label: "Demo2", value: "demo2" },
                  { label: "Demo3", value: "demo3" },
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
            <Form.Item name="description" className="mb-0"
            rules={[{ required: true, message: "Enter Discription" }]}
            >
              <TextArea
                rows={5}
                placeholder="Describe the tactical advantages..."
                className="!bg-[#2a2a2a] !border-none !text-white placeholder:!text-gray-500 !rounded-lg"
              />
            </Form.Item>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <Button onClick={() => navigate("/adminDashboard/product-list")} className="!bg-gray-700 !text-white !border-none px-6">
              DISCARD
            </Button>

            <Button
              htmlType="submit"
              className="!bg-orange-500 !text-white !border-none px-6"
            >
              SAVE
            </Button>
          </div>

        </Form>
      </div>
    </div>
  );
};

export default AddProduct;