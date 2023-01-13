import { React, useState } from "react";
import { Card, Button, Modal } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import axios from "axios";

function CustomCard(props) {
  const deleteCardHandler = () => {
    axios
      .delete(`https://convin-backend-melr.onrender.com/${props.cardid}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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

  const clickHandler = () => {
    showModal();
    axios
      .post(`https://convin-backend-melr.onrender.com/addHistory`, {
        title: props.title,
        url: props.url,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Card
        title={props.title}
        style={{
          width: 300,
        }}
        className="hover:shadow-lg hover:bg-blue-100 m-2"
        key={props.key}
        onClick={clickHandler}
      >
        <div>
          <p className="text-blue-500 truncate">{props.url}</p>
        </div>
        <p className="bg-blue-400 rounded-lg text-white">{props.bucket}</p>
        <div>
          <Button
            type="text"
            className="float-right"
            onClick={deleteCardHandler}
          >
            <DeleteTwoTone className=" text-xl " twoToneColor="#eb2f96" />
          </Button>
        </div>
      </Card>
      <Modal
        title={props.title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <iframe
          src={props.url}
          title={props.title}
          frameborder="0"
          allow="fullscreen; autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Modal>
    </>
  );
}

export default CustomCard;
