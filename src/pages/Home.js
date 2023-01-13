import { React, useState } from "react";

// import { PlusCircleTwoTone } from "@ant-design/icons";
// import { Col, Divider, Row } from "antd";
import CustomCard from "../Components/CustomCard";
import { Button, Modal, Space } from "antd";
import AddCard from "../Components/AddCard";
import CardList from "../Components/CardList";

// const style = {
//   background: "#0092ff",
//   padding: "8px 0",
// };

function Home() {
  return (
    <>
      <div className="mx-4">
        {/* <div className="ml-auto text-end">
          <PlusCircleTwoTone
            style={{ fontSize: "4em" }}
            className={"p-2"}
            twoToneColor="#52c41a"
            height="20px"
            width="20px"
          />
        </div> */}
        <AddCard />
        <CardList />
      </div>
    </>
  );
}

export default Home;
