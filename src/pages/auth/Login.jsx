import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { notification } from "antd";
import { Form } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import login_banner from "../../assets/images/login_banner.png";
import { doc, getDoc } from "firebase/firestore";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      console.log(response.user, "response");

      const user = response.user;
      const adminSnap = await getDoc(doc(db, "users", user.uid));

      const userData = adminSnap.data();
      if (userData?.role === "admin") {
        navigate("/adminDashboard");
      } else {
        navigate("/");
      }

      notification.success({
        message: "Success",
        description: "Login Successfully ✅",
      });
    } catch (error) {
      let errormsg = "Something Wrong";
      if (error.code === "auth/invalid-credential") {
        errormsg = "Invalid email or password";
      }
      notification.error({
        message: "Login Failed",
        description: errormsg || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="h-screen flex" style={{ background: "#1a1a1a" }}>
      {/* Left Panel */}
      <div className="w-[60%] hidden md:flex items-center justify-center">
        <img className="h-full w-full object-cover" src={login_baanner} alt="" />
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
            Login
          </h1>

          <p className="text-sm mb-8" style={{ color: "#888888" }}>
            Enter your credentials to rejoin the expedition.
          </p>

          <Form
            name="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
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

                  <input
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
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label
                  className="text-xs font-semibold tracking-widest uppercase"
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

                  <input
                    type={showPassword ? "text" : "password"}
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
                    👁
                  </button>
                </div>
              </Form.Item>
            </div>

            {/* Submit */}
            <Form.Item style={{ marginBottom: 0 }}>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg py-4 text-base font-bold transition-all"
                style={{
                  background: loading ? "#b35a15" : "#e8711a",
                  color: "#ffffff",
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "Authorizing..." : "Authorize Access"}
              </button>
            </Form.Item>
          </Form>
          <div className="text-white pt-4">
            <Link to="/signup">Create new account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
