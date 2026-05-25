import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { notification } from "antd";
import login_banner from "../../assets/images/login_banner.png";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const userCreadentails = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );

      const user = userCreadentails.user;

      await setDoc(doc(db, "users", user.uid), {
        email: values.email,
        role: "user",
      });

      notification.success({
        title: "Sign Up Completed",
        description: "UserCreated Succesfully",
      });
      navigate("/");
    } catch (error) {
      if (error === "auth/email-already-in-use") {
        notification.error({
          title: "Something Wrong!",
          description: "Already have an account create new or login!",
        });
      }
      notification.error({
        title: "Something Wrong!",
        description: error?.message || "Please try again later.",
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    notification.error({
      title: "Something Wrong!",
      description: "Please fill email or password properly",
    });
  };

  return (
    <div className="h-screen flex" style={{ background: "#1a1a1a" }}>
      {/* Left Panel */}
      <div className="w-[60%] hidden md:flex items-center justify-center">
        <img
          className="h-full w-full object-cover"
          src={login_banner}
          alt=""
        />
        {/* <img className="h-full w-full object-cover" src="https://res.cloudinary.com/dwngo5vya/image/upload/q_auto/f_auto/v1777890582/nike_shoe_etvhnc.jpg" alt="" /> */}
      </div>

      {/* Right Panel */}
      <div
        className="sm:w-[40%] w-full flex items-center justify-center p-8"
        style={{ background: "#1e1e1e" }}
      >
        <div className="w-full max-w-sm">
          <h1
            className="text-4xl font-bold leading-tight mb-2"
            style={{ color: "#ffffff" }}
          >
            Sign Up
          </h1>

          <p className="text-sm mb-8" style={{ color: "#888888" }}>
            Enter your Details
          </p>

          <Form
            name="basic"
            layout="vertical"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            {/* Email */}
            <div className="mb-4">
              <label
                className="block text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: "#aaaaaa" }}
              >
                Email Address
              </label>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Enter a valid email!" },
                ]}
                style={{ marginBottom: 0 }}
              >
                <div className="relative">
                  <span
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sm"
                    style={{ color: "#555555" }}
                  >
                    ✉
                  </span>

                  <Input
                    type="email"
                    placeholder="explorer@equipt.com"
                    className="w-full rounded-lg pl-9 pr-3 py-3 text-sm outline-none transition-colors"
                    style={{
                      background: "#2a2a2a",
                      border: "1px solid #3a3a3a",
                      color: "#cccccc",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#e8711a")}
                    onBlur={(e) => (e.target.style.borderColor = "#3a3a3a")}
                  />
                </div>
              </Form.Item>
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                className="block text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: "#aaaaaa" }}
              >
                Password
              </label>
            </div>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              style={{ marginBottom: 0 }}
            >
              <div className="relative">
                <span
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-sm"
                  style={{ color: "#555555" }}
                >
                  🔒
                </span>

                <Input.Password
                  placeholder="••••••••"
                  className="w-full rounded-lg pl-9 pr-10 py-3 text-sm outline-none transition-colors"
                  style={{
                    background: "#2a2a2a",
                    border: "1px solid #3a3a3a",
                    color: "#cccccc",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#e8711a")}
                  onBlur={(e) => (e.target.style.borderColor = "#3a3a3a")}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
                  style={{
                    color: "#555555",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                </button>
              </div>
            </Form.Item>

            {/* Remember Me */}
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox style={{ color: "#aaaaaa" }}>Remember me</Checkbox>
            </Form.Item>

            {/* Submit */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{
                  background: "#e8711a",
                  border: "none",
                  height: "50px",
                  fontWeight: "bold",
                  borderRadius: "8px",
                }}
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>

          <div className="text-white pt-4">
            <Link to="/login">Already have an accont?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
