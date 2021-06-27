import React, {FC} from "react";
import styled from "styled-components";
import SinglePageWorkspace from "./SinglePageWorkspace";

const ClientCorporateWrapper = styled.div``;

const ClientCorporate: FC = () => {
    return(
        <ClientCorporateWrapper>
            <SinglePageWorkspace
                background="./media/slider2.jpg"
                title="Client Corporate"
                image="./media/icons/entities.png"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis cum excepturi fugit hic maxime nobis quibusdam sequi? Beatae blanditiis consectetur dolorem ea laborum molestiae officia? Dicta explicabo illum quae?"/>
        </ClientCorporateWrapper>
    )
};

export default ClientCorporate
