import { Row } from "antd";
import React, { useEffect } from "react";
import CustomCard from "./CustomCard";
import axios from "axios";

function CardList() {
  const [cardList, setCardList] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://convin-backend-melr.onrender.com/getAllCards")
      .then((res) => {
        console.log(res.data);
        setCardList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Row>
        {cardList.map((card) => (
          <CustomCard
            key={card.id}
            title={card.title}
            url={card.url}
            bucket={card.bucket}
            cardid={card._id}
          />
        ))}
      </Row>
    </>
  );
}

export default CardList;
