import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {

 const navigate =  useNavigate();
  
  const onFinish = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      alert("UserCreated Succesfully");
      navigate("login");
    } catch (error) {
      alert(error.message);
      navigate("/");
    }
  };
  const onFinishFailed = (errorInfo) => {
    alert("Please fill email or password properly");
  };


  return (
    <div>
      <h1>Sign Up here</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

<Link to="/">Already have an accont?</Link>
    
    </div>
  );
};

export default Signup;
