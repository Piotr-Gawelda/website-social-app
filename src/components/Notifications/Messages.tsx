import React, {FC} from "react";
import styled from "styled-components";
import {Colors} from "../styledHelpers/Colors";

const MessagesWrapper = styled.div`
  height: 40vh;
  background-color: ${Colors.white};
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 200px;
`;

const Messages: FC = () => {
    return(
        <MessagesWrapper>
           Messages
        </MessagesWrapper>
    )
};

export default Messages
