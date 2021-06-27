import React, {FC, useEffect, useState} from "react";
import styled from "styled-components";
import {Colors} from "../styledHelpers/Colors";
import {fontSize} from "../styledHelpers/FontSizes";
import {getComments, getPosts, getPhotos, getUsers} from "../../actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../reducers";
import {IUsersReducer} from "../../reducers/usersReducers";
import {Link} from "react-router-dom";

type GetPhotos = ReturnType<typeof getPhotos>
type GetUsers = ReturnType<typeof getUsers>
type GetComments = ReturnType<typeof getComments>
type GetPosts = ReturnType<typeof getPosts>

const Wrapper = styled.div`
   display: flex;
   background-color: ${Colors.white};
   border-radius: 6px;
`;

const LeftPublicationSide = styled.div`
  max-width: 550px;
  position: relative;
`;

const OverlayBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99%;
  border-bottom-left-radius: 6px;
  opacity: .6;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(204,204,204,1) 19%, rgba(181,181,181,1) 32%, rgba(120,120,120,1) 58%, rgba(0,0,0,1) 100%);
`;

const CustomBg = styled.img`
  max-width: 550px;
  max-height: 340px;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
`;

const StyledSinglePublication = styled.div`
  position: absolute;
  bottom: 17px;
  left: 0;
  padding: 0 20px;
  > div {
    margin-bottom: 14px;
    p {
      line-height: 1.2;
      color: ${Colors.white};
    }
  }
  div:nth-of-type(2) {
    display: flex;
    align-items: center;
    p {
      margin-right: 10px;
       font-size: ${fontSize[14]};
    }
  }
`;

const RightPublicationSide = styled.div`
  padding: 10px;
`;


const StyledTitlePublications = styled.div`
  margin-bottom: 20px;
  padding-top: 5px;
  h2 {
    font-weight: 600;
  }
`;

const PublicationWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  &:nth-of-type(2) {
    img {
      width: 149px !important;
    }
    &:nth-of-type(2) {
      div {
          img {
            width: 20px !important;
            height: 20px;
            margin-right: 10px;
            border-radius: 50%;
      }
      }
    }
  }
`;

const CustomImg = styled.img`
  background-color: ${Colors.blue2};
  height: 76px;
  width: 120px !important;
  border-radius: 6px;
`;

const ContainerDataWrapper = styled.div`
  margin: 0 10px;
  div:nth-of-type(1) {
    line-height: 1.5;
    font-size: ${fontSize[14]};
  }
`;

const UserData = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  div:nth-of-type(2) {
    margin-left: 10px;
    font-size: ${fontSize[14]}!important;
  }
  div:nth-of-type(3) {
    font-size: ${fontSize[14]};
  }
`;

const CustomUserImg = styled.div`
  img {
    width: 20px !important;
    height: 20px;
    margin-right: 10px;
    border-radius: 50%;
  }
`;

const SeeMorePublications = styled.div`
  a {
    padding-top: 5px;
    padding-bottom: 0;
    color: ${Colors.blue3};
    text-decoration: none;
  }
`;

const LastPublications: FC = () => {

    const { photos, usersList, usersComment, usersPost } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const dispatch = useDispatch();

    const [ post, setPost ] = useState<any>([]);

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetComments>(getComments());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetPosts>(getPosts());
        setPost(usersPost);
    }, [dispatch, usersPost]);

    return (
        <Wrapper>
            <LeftPublicationSide>
                <OverlayBg/>
                <CustomBg src={photos[5]?.url} alt=""/>
                <StyledSinglePublication>
                    <div>
                        <p>{usersComment[5]?.body}</p>
                    </div>
                    <div>
                        <p>7 jan.2020</p>
                        <CustomUserImg>
                            <CustomImg src={photos[8]?.url} alt=""/>
                        </CustomUserImg>
                        <p>{usersList[5]?.name}</p>
                    </div>
                </StyledSinglePublication>
            </LeftPublicationSide>
            <RightPublicationSide>
                <StyledTitlePublications>
                    <h2>Latest publications</h2>
                </StyledTitlePublications>
                <div>
                    {
                        post.slice(0, 3).map((post: any) => {
                            return (
                            <PublicationWrapper key={post.id}>
                                <CustomImg src={photos[5]?.url} alt=""/>
                                <ContainerDataWrapper>
                                    <div>
                                    {post.body}
                                    </div>
                                <UserData>
                                    <div>7 Jan 2020</div>
                                    <CustomUserImg>
                                        <CustomImg src={photos[7]?.url} alt=""/>
                                    </CustomUserImg>
                                    <div>{usersList[5].name}</div>
                                </UserData>
                                </ContainerDataWrapper>
                            </PublicationWrapper>
                            )
                        })
                        }
                    <SeeMorePublications>
                        <Link to="/publications">See more publications</Link>
                    </SeeMorePublications>
                </div>
            </RightPublicationSide>
        </Wrapper>
    )
}

export default LastPublications
