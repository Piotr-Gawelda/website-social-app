import React, {FC} from "react";
import styled from "styled-components";
import {Colors} from "../styledHelpers/Colors";

const SettingsWrapper = styled.div`
  height: 40vh;
  background-color: ${Colors.white};
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 200px;
`;

const Settings: FC = () => {
    return(
        <SettingsWrapper>Settings</SettingsWrapper>
    )
}

export default Settings
