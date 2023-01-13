import axios from "axios";
import React, { useEffect, useState } from "react";
import { Space, Button } from "antd";
import History from "./History";

function HistoryList() {
  const [historyList, setHistoryList] = useState([]);

  const deleteHistoryhandler = () => {
    axios
      .delete("https://convin-backend-melr.onrender.com/deleteHistory")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setHistoryList([]);

    console.log(historyList);
  };

  useEffect(() => {
    axios
      .get("https://convin-backend-melr.onrender.com/getHistory")
      .then((res) => {
        setHistoryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [historyList]);
  return (
    <>
      <div className="text-start mt-2 py-5 px-4">
        <Button type="primary" onClick={deleteHistoryhandler}>
          Delete History
        </Button>
      </div>
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: "flex",
          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
        {historyList.reverse().map((card) => (
          <History
            key={card.id}
            title={card.title}
            url={card.url}
            time={card.createdAt}
          />
        ))}
      </Space>
    </>
  );
}

export default HistoryList;
