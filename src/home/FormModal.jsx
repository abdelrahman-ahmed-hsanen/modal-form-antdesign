import { Modal } from "antd";
import { Divider } from "antd";
import { Button, Form, Input } from "antd";
import FormBody from "./FormBody";
import TableData from "./table";
import { useState } from "react";
function FormModal({ open, handleCancel }) {
  const [form] = Form.useForm();

  const [data, setData] = useState([]);
  const onSubmit = (value) => {
    const formattedValue = {
      ...value,
      date_time: value.date_time.format("YYYY-MM-DD"),
      key: data.length + 1,
    };

    setData([...data, formattedValue]);
    form.resetFields();
  };

  return (
    <Modal
      footer={null}
      width={1000}
      title="Form Modal"
      open={open}
      onCancel={handleCancel}
    >
      <Divider />
      <Form onFinish={onSubmit} labelAlign="center" labelWrap colon={false}>
        <FormBody />

        <TableData data={data} />
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}
        >
          <Button onClick={handleCancel}>Cancel</Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
export default FormModal;
