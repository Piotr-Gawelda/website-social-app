import React, {FC} from "react";
import styled from "styled-components";
import Slider from "react-slick";
import {Colors} from "../styledHelpers/Colors";
import {fontSize} from "../styledHelpers/FontSizes";
import {Link} from "react-router-dom";
import {sliderBoxData} from "./WorkspacesData";

const Wrapper = styled.div`  
`;

const SliderBox = styled.div`
  height: 200px;
  width: 260px !important;
  background-color: ${Colors.white};
  border-radius: 6px;
  a {
    text-decoration: none;
    color: ${Colors.black};
  }
`;

const StyledCustomBg = styled.div`
    height: 44%;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`;

const SliderBoxContent = styled.div`
  height: 50%;
`;

const BoxTitle = styled.div`
  position: relative;
  margin-bottom: 29px;
  div:nth-of-type(2) {
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    padding-top: 10px;
    font-weight: 600;
  }
`;

const StyledBoxIconBg = styled.div`
  position: absolute;
  top: -40px;
  left: 10px;
  height: 80px;
  width: 83px;
  background-color: ${Colors.white};
  border-radius: 6px;
  border: 1px solid ${Colors.grey2};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBoxImg = styled.img`
  height: 40px;
  width: 40px;
`;

const BoxContent = styled.div`
  display: flex;
  margin: 14px 13px;
  div {
    font-size: ${fontSize[14]};
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
`;

const StyledDot = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: ${Colors.black};
  margin-top: 3px;
`;

const LastUpdate = styled.div`
  font-size: ${fontSize[12]};
  margin: 10px 13px;
`;

const CustomImg = styled.img`
  width: 18px;
  margin-right: 5px;
`;

const WorkspacesSlider: FC = () => {

    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <Wrapper>
            <Slider {...settings}>
                {
                    sliderBoxData.map((item) => (
                        <SliderBox key={item.id}>
                            <Link to={item.link}>
                                <StyledCustomBg>
                                    <StyledImg src={item.background}/>
                                </StyledCustomBg>
                                <SliderBoxContent>
                                    <BoxTitle>
                                        <StyledBoxIconBg>
                                            <StyledBoxImg src="./media/icons/entities2.png"/>
                                        </StyledBoxIconBg>
                                        <div>{item.title}</div>
                                    </BoxTitle>
                                    <BoxContent>
                                        <div>
                                            <CustomImg src="./media/icons/people.png"/>
                                            {item.contact}
                                        </div>
                                        <StyledDot/>
                                        <div>
                                            <CustomImg src="./media/icons/people.png"/>
                                            {item.users}
                                        </div>
                                    </BoxContent>
                                    <LastUpdate>
                                        {item.lastUpdate}
                                    </LastUpdate>
                                </SliderBoxContent>
                            </Link>
                        </SliderBox>
                    ))
                }
            </Slider>
        </Wrapper>
    );
};

export default WorkspacesSlider
