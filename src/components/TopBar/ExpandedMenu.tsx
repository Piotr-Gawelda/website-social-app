import React, {ChangeEvent, FC, useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Colors} from "../styledHelpers/Colors";
import {fontSize} from "../styledHelpers/FontSizes";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../reducers";
import {IUsersReducer} from "../../reducers/usersReducers";
import {getPhotos, getUsers} from "../../actions/userActions";

type GetPhotos = ReturnType<typeof getPhotos>
type GetUsers = ReturnType<typeof getUsers>


const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 !important;
  cursor: pointer;
`;

const StyledUlBox = styled.div`
    position: absolute;
    top: 20px;
    left: -165px;
    width: 200px;
    height: 460px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: ${Colors.white};
    font-size: ${fontSize[14]};
    border: 1px solid ${Colors.grey2};
`;

const StyledUl = styled.ul`
    background-color: ${Colors.white};
    padding: 3px;
    height: 290px;
    overflow: scroll;
    overflow-x: hidden;
    border-bottom: 1px solid ${Colors.grey2};
    li {
      margin: 13px 5px;
      display: flex;
      align-items: center;
        a, &:visited {
          text-decoration: none;
          color: ${Colors.black};
        }
    }
`;

const TitleLi = styled.li`
  p {
    font-size: ${fontSize[12]};
    color: ${Colors.grey3};
  }
`;

const SearchWrapper = styled.div`
  border: 1px solid ${Colors.grey2};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  margin: 0 7px 0 0 !important;
   input {
        border: none;
        width: 100%;
        padding: 8px;
        &:focus {
          outline: none;
        }
        &:hover {
          outline: none;
        }
      }
`;

const CustomImg = styled.img`
  cursor: pointer;
  height: 20px;
`;

const StyledSecUl = styled.ul`
   background-color: ${Colors.white};
   border-bottom: 1px solid ${Colors.grey2};
    li {
      display: flex;
      align-items: center;
      margin: 10px 5px;
        a, &:visited {
          text-decoration: none;
          color: ${Colors.black};
        }
        &:nth-of-type(1) {
          margin: 5px;
        }
    }
    div {
      margin: 0 5px;
      white-space: nowrap;
    }
`;

const UserLi = styled.div`
  display: flex;
  align-items: center;
  div {
    a {
      text-decoration: none;
      &:visited {
       color: ${Colors.blue3}; 
      }
    }
  }
  img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 0 !important;
  }
  div:nth-of-type(1) {
    color: ${Colors.black};
    margin-bottom: 3px;
  }
  div:nth-of-type(2) {
    font-size: ${fontSize[12]};
    color: ${Colors.blue3};
  }
`;

const Logout = styled.div`
  background-color: ${Colors.white};
  color: ${Colors.grey3};
  font-size: ${fontSize[16]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  img {
    height: 15px;
    margin-right: 10px;
  }
`;

const ExpandedMenu: FC = () => {
    const [searchText, setSearchText] = useState<string>('');

    const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setSearchText(text);
        e.stopPropagation();
    };

    const {usersList, photos} = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
    }, [dispatch]);

    return (
        <Wrapper>
            <StyledUlBox>
                <StyledUl>

                        <SearchWrapper>
                            <input type="text" value={searchText}
                                   onChange={searchHandler}
                                   placeholder="Filter..."
                                   onClick={e => e.stopPropagation()}/>
                        </SearchWrapper>

                    <TitleLi>
                        <p>Platform</p>
                    </TitleLi>
                    {'Home'.toLocaleLowerCase().includes(searchText.toLowerCase()) &&
                    <li>
                        <CustomImg src="./media/icons/house2.png" style={{height: `15px`}}/>
                        <Link to="/">Home</Link>
                    </li>
                    }
                    {'Publications'.toLocaleLowerCase().includes(searchText.toLowerCase()) &&
                    <li>
                        <CustomImg src="./media/icons/publications.png" style={{height: `12px`}}/>
                        <Link to="/publications">Publications</Link>
                    </li>
                    }
                    {'People'.toLocaleLowerCase().includes(searchText.toLowerCase()) &&
                    <li>
                        <CustomImg src="./media/icons/people.png" style={{height: `12px`}}/>
                        <Link to="/people">People</Link>
                    </li>
                    }
                    {'Entities'.toLocaleLowerCase().includes(searchText.toLowerCase()) &&
                    <li>
                        <CustomImg src="./media/icons/entities.png"/>
                        <Link to="/entities">Entities</Link>
                    </li>
                    }
                    {'Administration'.toLocaleLowerCase().includes(searchText.toLowerCase()) &&
                    <li>
                        <CustomImg src="./media/icons/administration.png"/>
                        <Link to="/administration">Administration</Link>
                    </li>
                    }
                    <TitleLi>
                        <p>Workspaces</p>
                    </TitleLi>
                    {'Client contract'.toLocaleLowerCase().includes(searchText.toLowerCase()) &&
                    <li>

                        <CustomImg src="./media/icons/contract.svg"/>
                        <Link to="/client-contract">Client contract</Link>
                    </li>
                    }
                    {'SupplierContact'.toLocaleLowerCase().includes(searchText.toLowerCase()) &&
                    <li>
                        <CustomImg src="./media/icons/contract.svg"/>
                        <Link to="/supplier-contract">Supplier contact</Link>
                    </li>
                    }
                    {'Corporate'.toLocaleLowerCase().includes(searchText.toLowerCase()) &&
                    <li>
                        <CustomImg src="./media/icons/entities2.png"/>
                        <Link to="/client-corporate">Corporate</Link>
                    </li>
                    }
                    {'GroupNorms'.toLocaleLowerCase().includes(searchText.toLowerCase()) &&
                    <li>

                        <CustomImg src="./media/icons/administration.png"/>
                        <Link to="/group-norms">Group Norms</Link>
                    </li>
                    }
                    {'RealStateContracts'.toLocaleLowerCase().includes(searchText.toLowerCase()) &&
                    <li>
                        <CustomImg src="./media/icons/contract.svg"/>
                        <Link to="/real-state-contracts">Real state contracts</Link>
                    </li>
                    }
                </StyledUl>
                <StyledSecUl>
                    <li>
                        <TitleLi>
                            <p>Account</p>
                        </TitleLi>
                    </li>
                    <UserLi>
                        <CustomImg src={photos[8]?.url}/>
                        <div>
                            <Link to="/userProfile">
                                <div>{usersList[9]?.name}</div>
                                <div>
                                    See profile
                                </div>
                            </Link>
                        </div>
                    </UserLi>
                    {'Privacy'.toLocaleLowerCase().includes(searchText.toLowerCase()) &&
                    <li>
                        <CustomImg src="./media/icons/privacy.png"/>
                        <Link to="/privacy">Privacy</Link>
                    </li>
                    }
                    {'Settings'.toLocaleLowerCase().includes(searchText.toLowerCase()) &&
                    <li>
                        <CustomImg src="./media/icons/settings.png"/>
                        <Link to="/settings">Settings</Link>
                    </li>
                    }
                    <Logout>
                        <CustomImg src="./media/icons/logout.png"/>
                        Logout
                    </Logout>
                </StyledSecUl>
            </StyledUlBox>
        </Wrapper>
    )
};

export default ExpandedMenu
