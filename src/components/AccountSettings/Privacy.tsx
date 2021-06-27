import React, {FC} from "react";
import styled from "styled-components";
import {Colors} from "../styledHelpers/Colors";

const PrivacyWrapper = styled.div`
  height: 40vh;
  background-color: ${Colors.white};
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 200px;
`;

const Privacy: FC = () => {
    return(
        <PrivacyWrapper>Privacy</PrivacyWrapper>
    )
}

export default Privacy
