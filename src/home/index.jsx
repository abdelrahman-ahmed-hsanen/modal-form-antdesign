import { Button } from "antd";
import FormModal from "./FormModal";
import { useState } from "react";

function HomePage() {
  const [open, setOpen] = useState(false);
  const handleCancel = () => {
    setOpen(false);
  };
  const showModal = () => {
    setOpen(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Button onClick={showModal} type="primary">
        open form
      </Button>

      <FormModal open={open} handleCancel={handleCancel} />
    </div>
  );
}
export default HomePage;
