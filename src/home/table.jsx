import React from "react";
import { Table, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { ExclamationCircleFilled } from "@ant-design/icons";
const { confirm } = Modal;
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Date Time",
    dataIndex: "date_time",
  },
  {
    title: "Technology",
    dataIndex: "technology",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: (record) => (
      <DeleteOutlined
        onClick={() => {
          showDeleteConfirm();
        }}
      />
    ),
  },
];
const showDeleteConfirm = () => {
  confirm({
    title: "Are you sure delete this row",
    icon: <ExclamationCircleFilled />,
    content: "Delete this row",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    centered: true,
  });
};
function TableData({ data }) {
  if (data.length) {
    return <Table columns={columns} dataSource={data} />;
  }
}
export default TableData;
