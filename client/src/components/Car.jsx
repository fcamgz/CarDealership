import React from 'react'
import {
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Title = styled.div`
  font-family: "Pushster", Times, serif;
  font-size: 20px;
`;

export default function Car({item}) {
    return (
        <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Title>{item.brand.toUpperCase()}</Title>
            <Title>{item.model.toUpperCase()}</Title>
            <Title>{item.year}</Title>
          </div>
          <Icon>
            <Link to={`/car/${item._id}`}>
            <SearchOutlined />
            </Link>
          </Icon>
        </Info>
      </Container>
    )
}
