import React, {FC} from "react";
import styled from "styled-components";
import LastPublications from "./LastPublications";

const Wrapper = styled.div`
  margin-bottom: 200px;
`;

const Publications: FC = () => (
    <>
        <Wrapper>
            <LastPublications/>
        </Wrapper>
    </>
);

export default Publications
