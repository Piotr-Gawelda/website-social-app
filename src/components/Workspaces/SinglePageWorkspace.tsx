import React, {FC, useState} from "react";
import styled from "styled-components";
import {Colors} from "../styledHelpers/Colors";
import {fontSize} from "../styledHelpers/FontSizes";
import ResumeWork from "../ResumeWork/ResumeWork";
import {exploreSectionData} from "./WorkspacesData";

const SinglePageWrapper = styled.div`
`;

const WorkspacesHeader = styled.div`
  background-color: ${Colors.white};
  border-radius: 6px;
`;

const StyledCustomBg = styled.div`
    height: 120px;
`;

const WorkspacesHeaderBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`;

const WorkspacesHeaderData = styled.div`
  display: flex;
  padding: 20px;
`;

const WorkspacesHeaderIcon = styled.div`
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40px;
  }
`;

const WorkspacesHeaderContent = styled.div`
  width: 92%;
`;

const WorkspacesHeaderTitle = styled.div`
  font-weight: bold;
  margin-bottom: 15px;
`;

const WorkspacesHeaderDesc = styled.div`
  font-size: ${fontSize[14]};
  line-height: 18px;
`;

const ExploreSectionWrapper = styled.div`
  background-color: ${Colors.grey2};
  border-radius: 6px;
  margin-top: 24px;
`;

const ExploreSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 15px;
`;

const ExploreActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${Colors.grey3};
  font-size: ${fontSize[14]};
  padding: 15px 20px 15px 20px;
  div:nth-of-type(2) {
    cursor:pointer;
  }
`;

const ExploreBox = styled.div`
  background-color: ${Colors.white};
  padding: 20px;
  margin: 20px 10px 30px 0;
  border-radius: 6px;
  position: relative;
  &:nth-of-type(3) {
    margin-right: 0;
  }
`;

const CustomBg = styled.div`
  position: absolute;
  bottom: 20px;
  right: 10px;
  background-image: url("../media/icons/entities.png");
  height: 120px;
  width: 120px;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: .1;
`;

const ExploreBoxTitle = styled.div`
  font-size: ${fontSize[16]};
  margin-bottom: 15px;
  span {
    font-weight: bold;
  }
`;

const ExploreBoxDescription = styled.div`
  font-size: ${fontSize[14]};
  line-height: 18px;
`;

const CustomImg = styled.img`
  margin-bottom: 10px;
`;


const SinglePageWorkspace: FC<{ background: string, title: string, image: string, description: string }> = ({background, title, image, description}) => {

    const [hideExploreSection, setHideExploreSection] = useState(true);

    const handleClick = () => {
        setHideExploreSection(!hideExploreSection);
    };

    return (
        <SinglePageWrapper>
            <SinglePageWrapper>
                <WorkspacesHeader>
                    <StyledCustomBg>
                        <WorkspacesHeaderBg src={background}/>
                    </StyledCustomBg>
                    <WorkspacesHeaderData>
                        <WorkspacesHeaderIcon>
                            <CustomImg src={image}/>
                        </WorkspacesHeaderIcon>
                        <WorkspacesHeaderContent>
                            <WorkspacesHeaderTitle>{title}</WorkspacesHeaderTitle>
                            <WorkspacesHeaderDesc>{description}</WorkspacesHeaderDesc>
                        </WorkspacesHeaderContent>
                    </WorkspacesHeaderData>
                </WorkspacesHeader>
                <ExploreSectionWrapper>
                    <ExploreActions>
                        <div>
                            Start working on corporate matters
                        </div>
                        <div onClick={handleClick}>
                            Hide
                        </div>
                    </ExploreActions>
                    {
                        hideExploreSection &&
                        <ExploreSection>
                            {
                                exploreSectionData.map((item) => (
                                    <ExploreBox key={item.id}>
                                        <CustomBg style={{backgroundImage: `url(${item.image})`}}/>
                                        <CustomImg src={item.image}/>
                                        <ExploreBoxTitle>
                                            {item.title} <span>{item.boldSpan}</span>
                                        </ExploreBoxTitle>
                                        <ExploreBoxDescription>
                                            {item.description}
                                        </ExploreBoxDescription>
                                    </ExploreBox>
                                ))
                            }
                        </ExploreSection>
                    }
                </ExploreSectionWrapper>
                <ResumeWork showFilter="flex" title="Latest update"/>
            </SinglePageWrapper>
        </SinglePageWrapper>
    )
};

export default SinglePageWorkspace
