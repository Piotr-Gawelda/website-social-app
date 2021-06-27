import React, {FC} from "react";
import styled from "styled-components";
import SinglePageWorkspace from "./SinglePageWorkspace";

const SupplierContractWrapper = styled.div``;

const SupplierContract: FC = () => {
    return(
        <SupplierContractWrapper>
            <SinglePageWorkspace
                background="./media/slider3.jpg"
                title="Supplier Contract"
                image="./media/icons/entities.png"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis cum excepturi fugit hic maxime nobis quibusdam sequi? Beatae blanditiis consectetur dolorem ea laborum molestiae officia? Dicta explicabo illum quae?"/>
        </SupplierContractWrapper>
    )
};

export default SupplierContract
