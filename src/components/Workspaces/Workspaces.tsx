import React, {FC} from "react";
import styled from "styled-components";
import WorkspacesSlider from "./Slider"

const Wrapper = styled.div`
  
`;

const WorkspacesTitle = styled.div`
  margin: 12px 0;
  h2 {
    padding: 5px 0 5px 15px;
    font-weight: 600;
  }  
`;

const SliderWrapper = styled.div`
`;

const SliderBox = styled.div`

`;

const Workspaces: FC = () => (
    <>
        <Wrapper>
            <WorkspacesTitle>
                <h2>Workspaces</h2>
            </WorkspacesTitle>
            <SliderWrapper>
                <SliderBox>
                    <WorkspacesSlider/>
                </SliderBox>
            </SliderWrapper>
        </Wrapper>
    </>
);

export default Workspaces
