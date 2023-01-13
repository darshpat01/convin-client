import { React, useState } from "react";
import { Button, Modal, Checkbox, Form, Input } from "antd";
import axios from "axios";

function AddCard() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [bucket, setBucket] = useState("");

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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

  const clickHandler = (e) => {
    e.preventDefault();
    const data = {
      title,
      url,
      bucket,
    };

    //send request to addCard
    axios
      .post("https://convin-backend-melr.onrender.com/addCard", data)
      .then((res) => {
        console.log(res.data);
        setIsModalOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="text-start mt-2 py-5">
        <Button type="primary" onClick={showModal}>
          Add Card
        </Button>
      </div>

      <Modal
        title="Add New Card"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input Title!",
              },
            ]}
          >
            <Input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item
            label="URL"
            name="url"
            rules={[
              {
                required: true,
                message: "Please input url",
              },
            ]}
          >
            <Input
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item
            label="Bucket"
            name="bucket"
            rules={[
              {
                required: true,
                message: "Please input bucket",
              },
            ]}
          >
            <Input
              value={bucket}
              onChange={(e) => {
                setBucket(e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" onClick={clickHandler}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddCard;
