import React, {ChangeEvent, FC, useState} from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";
import ExpandedMenu from "./ExpandedMenu";
import {Colors} from "../styledHelpers/Colors";
import {Link} from "react-router-dom";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  background-color: ${Colors.white};
`;

const LeftTopSide = styled.div`
  display: flex;
  width: 30%;
  div {
      margin: 5px;
  }
`;

const RightTopSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
  overflow: hidden !important;
   div {
      margin: 5px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  div:nth-of-type(2), div:nth-of-type(3) {
    background-color: ${Colors.grey2};
    border-radius: 50%;
    position: relative;
    &:before {
      content: "4";
      position: absolute;
      top: -4px;
      right: -2px;
      height: 14px;
      width: 20px;
      background-color: ${Colors.blue};
      color: ${Colors.white};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      font-size: 10px;
    }
  }
`;

const CustomImg = styled.img`
  cursor: pointer;
`;

const CustomImgLogo = styled.div`
    img {
        width: 30px;
        height: 35px;
    }
`;

const SearchWrapper = styled.div`
  border: 1px solid ${Colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 30%;
  height: 35px;
      input {
        border: none;
        width: 100%;
        padding: 8px;
        &:focus {
          outline: none;
        }
        &:hover {
          outline: none;
        }
        ::-webkit-input-placeholder {
           text-align: center;
        }
        :-moz-placeholder {
           text-align: center;  
        }
        ::-moz-placeholder {
           text-align: center;  
        }
        :-ms-input-placeholder {  
           text-align: center; 
        }
      }
      img {
        padding: 8px;
      }
`;

const MenuWrapper = styled.div`
  width: 250px;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    margin-right: 15px;
  }
  img:nth-of-type(2) {
    margin-right: 0;
  }
  span {
    margin-right: 66px;
  }
`;

const TopBar: FC = () => {

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    const [title, setTitle] = useState("Home");

    const menuHandler = () => {
        toggleDropdown();
    };

    return (
        <>
            <StyledContainer>
                <LeftTopSide>
                    <CustomImgLogo>
                        <Link to="/"><CustomImg src="./media/logo.png"/></Link>
                    </CustomImgLogo>
                    <MenuWrapper ref={wrapperRef}>
                        <LeftSide onClick={menuHandler}>
                            <CustomImg src="./media/icons/house.png"/>
                            <span>{title}</span>
                            <CustomImg src="./media/icons/arrow-down.png"/>
                            {dropdownOpen &&
                                <ExpandedMenu/>}
                        </LeftSide>
                    </MenuWrapper>
                </LeftTopSide>
                <SearchWrapper>
                    <input type="text" placeholder="Search Legalcluster"/>
                    <CustomImg src="./media/icons/search.png"/>
                </SearchWrapper>
                <RightTopSide>
                    <div>
                        <Link to="/"><CustomImg src="./media/icons/house.png"/></Link>
                    </div>
                    <div>
                        <Link to="/messages"><CustomImg src="./media/icons/comments.png"/></Link>
                    </div>
                    <div>
                        <Link to="/notifications"><CustomImg src="./media/icons/bell.png"/></Link>
                    </div>
                </RightTopSide>
            </StyledContainer>
        </>
    )
};

export default TopBar
