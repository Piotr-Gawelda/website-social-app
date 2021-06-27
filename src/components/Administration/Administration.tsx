import React from "react";
import styled from "styled-components";
import {Colors} from "../styledHelpers/Colors";

const Wrapper = styled.div`
  height: 40vh;
  background-color: ${Colors.white};
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 200px;
`;

const Administration = () => (
    <>
        <Wrapper>
            <h2>Administration</h2>
        </Wrapper>
    </>
);

export default Administration
