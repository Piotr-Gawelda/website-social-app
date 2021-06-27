import React, {FC} from "react";
import styled from "styled-components";
import SinglePageWorkspace from "./SinglePageWorkspace";

const RealStateContractsWrapper = styled.div``;

const RealStateContracts: FC = () => {
    return(
        <RealStateContractsWrapper>
            <SinglePageWorkspace
                background="./media/slider1.jpg"
                title="Real State Contracts"
                image="./media/icons/entities.png"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis cum excepturi fugit hic maxime nobis quibusdam sequi? Beatae blanditiis consectetur dolorem ea laborum molestiae officia? Dicta explicabo illum quae?"/>
        </RealStateContractsWrapper>
    )
};

export default RealStateContracts

