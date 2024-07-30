import { Button, DatePicker, Divider, Form, Input, Select, Space } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

let index = 0;

function FormBody() {
  const [items, setItems] = useState([
    "Artificial intelligence",
    "3D printing",
  ]);
  const [value, setValue] = useState("");

  const onNameChange = (event) => {
    setValue(event.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, value || `New item ${index++}`]);
    setValue("");
  };
  return (
    <>
      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Date Time"
        name="date_time"
        rules={[{ required: true }]}
      >
        <DatePicker
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item label="Status" name="status" rules={[{ required: true }]}>
        <Select
          showSearch
          placeholder="Select a status"
          optionFilterProp="label"
          options={[
            {
              value: "Not Started",
              label: "Not Started",
            },
            {
              value: "In progress",
              label: "In progress",
            },
            {
              value: "Completed",
              label: "Completed",
            },
            {
              value: "Upcoming",
              label: "Upcoming",
            },
          ]}
        />
      </Form.Item>
      <Form.Item
        label="Technologies"
        name="technology"
        rules={[{ required: true }]}
      >
        <Select
          placeholder="Technologies"
          dropdownRender={(menu) => (
            <>
              {menu}
              <Divider
                style={{
                  margin: "8px 0",
                }}
              />
              <Space
                style={{
                  padding: "0 8px 4px",
                }}
              >
                <Input
                  placeholder="Please enter item"
                  value={value}
                  onChange={onNameChange}
                  onKeyDown={(e) => e.stopPropagation()}
                />
                <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                  Add item
                </Button>
              </Space>
            </>
          )}
          options={items.map((item) => ({
            label: item,
            value: item,
          }))}
        />
      </Form.Item>
    </>
  );
}
export default FormBody;
