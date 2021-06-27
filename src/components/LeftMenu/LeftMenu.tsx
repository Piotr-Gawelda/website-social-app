import React, {FC} from "react";
import styled from "styled-components";
import Profile from "../Profile/Profile";
import {Link} from "react-router-dom";
import {Colors} from "../styledHelpers/Colors";

const StyledContainer = styled.div`
    padding: 0 20px;
`;

const CustomImg = styled.img`
  width: 18px;
  margin-right: 12px;
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 20px;
  a {
    text-decoration: none;
    color: ${Colors.black};
  }
`;


const LeftMenu: FC = () => (
    <>
        <StyledContainer>
            <Profile/>
            <div>
                <Options>
                    <CustomImg src="./media/icons/publications.png"/>
                    <Link to="/publications">Publications</Link>
                </Options>
                <Options>
                    <CustomImg src="./media/icons/ecosystem.png"/>
                    <Link to="/ecosystem">Ecosystem</Link>
                </Options>
                <Options>
                    <CustomImg src="./media/icons/entities2.png"/>
                    <Link to="/entities">Entities</Link>
                </Options>
            </div>
        </StyledContainer>
    </>
);

export default LeftMenu
