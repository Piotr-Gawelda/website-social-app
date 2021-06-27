import React, {FC, useEffect} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Colors} from "../styledHelpers/Colors";
import { getPhotos, getUsers} from "../../actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../reducers";
import {IUsersReducer} from "../../reducers/usersReducers";
import {fontSize} from "../styledHelpers/FontSizes";

type GetPhotos = ReturnType<typeof getPhotos>
type GetUsers = ReturnType<typeof getUsers>

const StyledContainer = styled.div`
  background-color: ${Colors.white};
  margin-bottom: 20px;
  width: 250px;
  border-radius: 6px;
  a {
    text-decoration: none;
    color: ${Colors.black};;
  }
`;

const CustomImg = styled.img`
  width: 18px;
  margin-right: 5px;
`;

const StyledUserPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
`;

const StyledPhoto = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: contain;
`;

const UserTools = styled.div`
  border-top: 1px solid ${Colors.grey3};
  padding: 20px 20px 0 20px;
  div {
    padding-bottom: 7px;
  }
`;

const UserName =  styled.div`
  margin-bottom: 9px;
  margin-top: 8px;
  color: ${Colors.blue3};
  font-weight: 600;
`;

const UserJob =  styled.div`
   font-size: ${fontSize[14]};
`;

const Options = styled.div`
 a {
   display: flex;
  align-items: center;
  justify-content: space-between;
 }
`;

const CustomBorderImg = styled.div`
  img {
    border: 1px solid ${Colors.black};
    padding: 3px 6px;
    height: 20px;
    width: 27px;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const Profile: FC = () => {

    const {usersList, photos } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
    }, [dispatch]);

    return (
        <StyledContainer>
            <Link to="/userProfile">
                <StyledUserPhoto>
                    <StyledPhoto src={photos[8]?.url} alt=""/>
                    <UserName>{usersList[9]?.name}</UserName>
                    <UserJob>{usersList[2]?.company.name}</UserJob>
                </StyledUserPhoto>
            </Link>
            <UserTools>
                <Options>
                    <Link to="/userProfile">
                        <div>
                            <CustomImg src="./media/icons/people.png"/>
                            Your network
                        </div>
                        <CustomBorderImg>
                            <CustomImg src="./media/icons/user-plus.png"/>
                        </CustomBorderImg>
                    </Link>
                </Options>
                <Options>
                    <Link to="/publications">
                        <div>
                            <CustomImg src="./media/icons/publications.png"/>
                            Your publications
                        </div>
                        <CustomBorderImg>
                            <CustomImg src="./media/icons/plus.png"/>
                        </CustomBorderImg>
                    </Link>
                </Options>
            </UserTools>
        </StyledContainer>
    )
};

export default Profile
