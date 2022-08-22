import { useState } from "react";
import styled from "styled-components";
import TextPop from "./TextPop";
import Image from "next/image";

import lightTheme from "../styles/theme/light";

import chaleDentro from "../public/img/chale/dentro.jpg";
import chaleFora from "../public/img/chale/fora.jpg";
import LareiraExterna from "../public/img/icones/LareiraExterna.png";
import LareiraInterna from "../public/img/icones/LareiraInterna.png";
import banheira from "../public/img/icones/Banheira.png";
import Cama from "../public/img/icones/Cama.png";
import Frigobar from "../public/img/icones/Frigobar.png";
import Area from "../public/img/icones/Area.png";
import Ar from "../public/img/icones/Ar.png";

export default function Boxchale(props) {
  const [sliderActive, setsliderActive] = useState(1);
  const ImageNumber = 2;

  function toggleSlider(index) {
    let result = sliderActive + index;
    if (result > ImageNumber) {
      result = 1;
    } else if (result < 1) {
      result = ImageNumber;
    }
    setsliderActive(result);
  }
  function BtnChanger() {
    return (
      <BtnBox id="btn_box">
        <Btn
          id="btn_previus"
          onClick={() => {
            toggleSlider(-1);
          }}
        >
          <i className="fa-solid fa-angles-left fa-2xl"></i>
        </Btn>
        <Btn
          id="btn_next"
          onClick={() => {
            toggleSlider(1);
          }}
        >
          <i className="fa-solid fa-angles-right fa-2xl"></i>
        </Btn>
      </BtnBox>
    );
  }

  return (
    <Container id="Container_chale">
      <Carrosel id="carr_chale">
        <BtnChanger id="chale_BtnChanger"></BtnChanger>
        <Image
          src={chaleDentro}
          layout={sliderActive === 1 ? "fill" : ""}
          objectFit="cover"
        />
        <Image
          src={chaleFora}
          layout={sliderActive === 2 ? "fill" : ""}
          objectFit="cover"
        />
      </Carrosel>
      <Description id="descript_chale">
        <Title>Chalé Podocarpo</Title>
        <Text>
          Um chalé isolado com lareiras interna e externa para aproveitar a
          vista de tirar o fôlego.
        </Text>
        <Subtitle> Estrutura:</Subtitle>
        <Infra id="infra_chale">
          <TextPop id="pop_Cama" src={Cama} title="Cama Queen Size" />
          <TextPop
            id="pop_LareiraInterna"
            src={LareiraInterna}
            title="Lareira Interna"
          />
          <TextPop
            id="pop_LareiraExterna"
            src={LareiraExterna}
            title="Lareira Externa"
          />
          <TextPop id="pop_Area" src={Area} title="Area Privativa Externa" />
          <TextPop id="pop_Frigobar" src={Frigobar} title="Frigobar" />
        </Infra>
        <ReservaBtn>Reserve Agora</ReservaBtn>
      </Description>
    </Container>
  );
}
const Container = styled.div`
  width: 450px;
  height: 600px;
  border: solid 1px ${lightTheme.colors.laranja};
  background-color: ${lightTheme.colors.branco};
  display: grid;
  grid-template-rows: 300px 300px;
`;
const Carrosel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  img {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .active-slide {
  }
  .slide {
    display: none;
  }
`;
const BtnBox = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Btn = styled.button`
  background-color: transparent;
  color: ${lightTheme.colors.branco};
  border: none;
  cursor: pointer;
`;
const Description = styled.div`
  display: grid;
  grid-template-rows: 36px 78px 23px 40px 43px;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  gap: 10px;
`;
const Text = styled.p`
  font-family: ${lightTheme.font.secundary};
  font-weight: 300;
  font-size: ${lightTheme.fontSize.small};
  color: ${lightTheme.colors.marrom};
  margin: 0;
  text-align: justify;
`;
const Title = styled.h1`
  margin: 0;
  font-family: ${lightTheme.font.primary};
  font-size: ${lightTheme.fontSize.medium};
  color: ${lightTheme.colors.laranja};
`;
const Subtitle = styled.h2`
  font-family: ${lightTheme.font.secundary};
  font-weight: 500;
  font-size: ${lightTheme.fontSize.smaller};
  color: ${lightTheme.colors.laranja};
  margin: 0;
  text-align: justify;
`;
const Infra = styled.span`
  display: flex;
  gap: 20px;

  align-items: center;
  color: ${lightTheme.colors.marrom};
  img {
    width: 32px;
    height: 32px;
  }
`;
const ReservaBtn = styled.button`
  background-color: ${lightTheme.transparencias.laranja};
  width: 100%;
  padding: 10px;
  font-family: ${lightTheme.font.secundary};
  font-size: ${lightTheme.fontSize.small};
  color: ${lightTheme.colors.marrom};
  border: none;
  cursor: pointer;
`;
