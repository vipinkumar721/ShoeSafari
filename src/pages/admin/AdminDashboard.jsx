import Navbar from "../../components/layout/Navbar";
import { useAuth } from "../../context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { Button, Modal } from "antd";

const AdminDashboard = () => {
  const { user } = useAuth();
  const auth = getAuth();

  const handleSignout = async () => {
    await signOut(auth);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex bg-red-400 h-screen">
        <aside className="bg-green-300 w-[16%]">
          <h2>Admin</h2>
          <h3>{user?.email}</h3>
          <Button onClick={handleSignout}>SignOut</Button>
        </aside>
        <div className="bg-green-400 w-[84%] flex justify-between">
          <div>
            <h2>Admin Dashboard</h2>
          </div>

          <div>
            <Button type="primary" onClick={showModal}>
              Open Modal
            </Button>
            <Modal
              title="Basic Modal"
              closable={{ "aria-label": "Custom Close Button" }}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
