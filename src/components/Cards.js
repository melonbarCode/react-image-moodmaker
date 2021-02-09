import { useGlobalContext } from "./context/globalContext";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import Card from "./Card";

const FUNCTION_LIST = [
  {
    funcButtonLabel: "day1",
    funcType: "day1",
  },
  {
    funcButtonLabel: "day2",
    funcType: "day2",
  },
  {
    funcButtonLabel: "day3",
    funcType: "day3",
  },
  {
    funcButtonLabel: "day4",
    funcType: "day4",
  },
  {
    funcButtonLabel: "sunset1",
    funcType: "sunset1",
  },
  {
    funcButtonLabel: "sunset2",
    funcType: "sunset2",
  },
  {
    funcButtonLabel: "sunset3",
    funcType: "sunset3",
  },
  {
    funcButtonLabel: "sunset4",
    funcType: "sunset4",
  },
  {
    funcButtonLabel: "bluehour1",
    funcType: "bluehour1",
  },
  {
    funcButtonLabel: "bluehour2",
    funcType: "bluehour2",
  },
  {
    funcButtonLabel: "night1",
    funcType: "night1",
  },
  {
    funcButtonLabel: "night2",
    funcType: "night2",
  },
  {
    funcButtonLabel: "night3",
    funcType: "night3",
  },
  {
    funcButtonLabel: "night4",
    funcType: "night4",
  },
  {
    funcButtonLabel: "night5",
    funcType: "night5",
  },
  {
    funcButtonLabel: "night6",
    funcType: "night6",
  },
];

const Cards = (props) => {
  return (
    <CardsStyledWrapper>
      <div className="flex-container">
        {FUNCTION_LIST.map((cardInfo) => (
          <Card
            key={cardInfo.funcType}
            funcType={cardInfo.funcType}
            funcButtonLabel={cardInfo.funcButtonLabel}
          />
        ))}
      </div>
    </CardsStyledWrapper>
  );
};

export default Cards;

const CardsStyledWrapper = styled.div`
  .flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px;
  }

  .img-container {
    margin: 5px auto;
    position: relative;
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .card {
    height: 200px;
    width: 200px;
    margin: 10px;
    padding: 10px;
    border: rgba(0, 0, 0, 0.12) solid 0.5px;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .card:hover {
    box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
