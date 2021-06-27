import React, {FC} from "react";
import styled from "styled-components";
import {Colors} from "../styledHelpers/Colors";

const Wrapper = styled.div`
  height: 40vh;
  background-color: ${Colors.white};
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 200px;
`;

const People: FC = () => (
    <>
        <Wrapper>
            <h2>People</h2>
        </Wrapper>
    </>
);

export default People
