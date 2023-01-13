import axios from "axios";
import React, { useEffect, useState } from "react";
import { Space } from "antd";
import History from "./History";

function HistoryList() {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3008/getHistory")
      .then((res) => {
        setHistoryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
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
