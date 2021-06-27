import React, {ChangeEvent, FC, useEffect, useState} from "react";
import styled from "styled-components";
import {Colors} from "../styledHelpers/Colors";
import {useDispatch, useSelector} from "react-redux";
import {getComments, getUsers} from "../../actions/userActions";
import {fontSize} from "../styledHelpers/FontSizes";
import {IState} from "../../reducers";
import {IUsersReducer} from "../../reducers/usersReducers";
import ReactPaginate from 'react-paginate';
import useDropdown from "react-dropdown-hook";
import {workspacesTagData} from "./ResumeWorkData";

type GetUsers = ReturnType<typeof getUsers>
type GetComments = ReturnType<typeof getComments>

const Wrapper = styled.div`
    .pagination {
        color: ${Colors.blue};
        cursor: pointer;
        .active {
            font-weight: bold;
        }
        .break-me{
        }
        .page{
        }
        .next{
        }
        .previous{
        }
    }
`;

const ResumeWorkContent = styled.div``;

const ResumeWorkTop = styled.div`
  margin: 30px 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ResumeWorkTopTitle = styled.div`
  h2 {
    padding: 5px 0 5px 15px;
    font-weight: 600;
  }
`;

const ResumeWorkTopActions = styled.div`
   display: flex;
   align-items: center;
   padding: 5px 15px 5px 0;
`;

const StyledSearch = styled.div`
    border: 1px solid ${Colors.grey};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 100%;
    height: 35px;
    background-color: white;
    input {
        border: none;
        width: 100%;
        padding: 8px;
        background-color: transparent;
    &:focus {
      outline: none;
      }
    &:hover {
      outline: none;
      }
    }
    img {
        padding: 8px;
        height: 30px;
    }
`;

const StyledFollowed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 60px;
  position: relative;
  cursor:pointer;
  img,span {
    margin: 0 5px;
  }
  span {
    color: ${Colors.blue3};
  }
`;

const CustomImg = styled.img`
  cursor: pointer;
`;

const ResumeContentBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};
  padding: 15px 0 15px 15px;
  margin-bottom: 10px;
  border-radius: 6px;
  div {
    margin: 5px 0;
  }
`;

const ResumeBoxTitle = styled.div`
  color: ${Colors.blue3};
  font-weight: 600;
`;

const ResumeBoxDescription = styled.div`
  font-size: ${fontSize[14]};
`;

const ResumeBoxTags = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fontSize[12]};
    div {
        margin-right: 5px;
        display: flex;
        align-items: center;
        &:nth-of-type(1) {
          img {
            border-radius: 50%;
          }
        }
    }
    img {
      height: 10px;
      margin-right: 10px;
    }
`;

const StyledPagination = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      margin: 25px 15px;
      color: ${Colors.blue3};
    }
  }
`;

const BlackDot = styled.div`
    margin-top: 5px;
    div{
      margin-left: 5px;
      height: 5px;
      width: 5px;
      border-radius: 50%;
      background-color: ${Colors.black};
    }
`;

const AllDropdownStyle = styled.ul`
  position: absolute;
  width: 100%;
  z-index: 999;
  top: 28px;
  left: 0;
  border-radius: 6px;
  cursor:pointer;
  background-color: ${Colors.grey};
  li {
    cursor: pointer;
    padding: 5px;
    color: ${Colors.blue3};
    &:last-of-type {
    border-radius: 6px;
    }
  }
`;

const WorkspacesTagsFilter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  img {
    margin-right: 5px;
    width: 10px;
  }
`;

const WorkspacesTagBox = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 5px 10px;
  font-size: ${fontSize[14]};
  margin-right: 40px;
  background-color: ${Colors.white};
  cursor: pointer;
`;


const ResumeWork: FC<{showFilter: string, title: string}> = ({showFilter, title}) => {
    const {usersComment, usersList, photos} = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const dispatch = useDispatch();

    const [posts, setPost] = useState<any>([]);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [inputText, setInputText] = useState<any>("");
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetComments>(getComments());
        setPost(usersComment);
    }, [dispatch, usersComment]);

    const menuHandler = () => {
        toggleDropdown();
    };

    const handlePageClick = (data: any) => {
        const selected = data.selected;
        setPageNumber(selected);
    };

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text: string = e.target.value;
        setInputText(text);
    };
    const postPerPage = 10;
    const pageVisited = pageNumber * postPerPage;

    const displayPost = posts.slice(pageVisited, pageVisited + postPerPage).map((post: any) => (
        <ResumeContentBox key={post.id}>
            <ResumeBoxTitle>
                {post.name}
            </ResumeBoxTitle>
            <ResumeBoxDescription>
                {post.body}
            </ResumeBoxDescription>
            <ResumeBoxTags>
                <div>
                    <CustomImg src={photos[5]?.url} alt=""/>
                    {usersList[5].name}
                </div>
                <BlackDot>
                    <div></div>
                </BlackDot>
                <div>
                    <CustomImg src="./media/icons/entities2.png"/>
                    Corporate
                </div>
                <BlackDot>
                    <div></div>
                </BlackDot>
                <div>Updated 3 days ago by {usersList[5].name}</div>
            </ResumeBoxTags>
        </ResumeContentBox>
    ));

    return (
        <Wrapper>
            <ResumeWorkTop>
                <ResumeWorkTopTitle>
                    <h2>
                        {title}
                    </h2>
                </ResumeWorkTopTitle>
                <ResumeWorkTopActions>
                    <StyledSearch>
                        <input type="text" placeholder="Filter by title..." value={inputText} onChange={inputHandler}/>
                        <CustomImg src="./media/icons/search.png"/>
                    </StyledSearch>
                    <StyledFollowed onClick={menuHandler}>
                        <span>Followed</span>
                        <CustomImg src="./media/icons/arrow-down.png"/>
                        {dropdownOpen &&
                        <AllDropdownStyle>
                            <li>1</li>
                            <li>2</li>
                        </AllDropdownStyle>
                        }
                    </StyledFollowed>
                </ResumeWorkTopActions>
            </ResumeWorkTop>
            <WorkspacesTagsFilter style={{display: `${showFilter}`}}>
                {
                    workspacesTagData.map((item) => (
                        <WorkspacesTagBox key={item.id} style={{backgroundColor: `${item.bgColor}`, color: `${item.color}`}}>
                            <CustomImg src={item.icon}/>
                            {item.text}
                        </WorkspacesTagBox>
                    ))
                }
                <WorkspacesTagBox>
                    ...
                </WorkspacesTagBox>
            </WorkspacesTagsFilter>
            <ResumeWorkContent>
                {inputText === "" ? displayPost
                    : posts.filter((posts: any) => {
                        if (posts.name.toLowerCase().includes(inputText.toLowerCase())) {
                            return posts
                        } else {
                            return null;
                        }
                    }).map((posts: any) => (
                        <ResumeContentBox key={posts.id}>
                            <ResumeBoxTitle>
                                {posts.name}
                            </ResumeBoxTitle>
                            <ResumeBoxDescription>
                                {posts.body}
                            </ResumeBoxDescription>
                            <ResumeBoxTags>
                                <div>
                                    <CustomImg src={photos[5]?.url} alt=""/>
                                    {usersList[5].name}
                                </div>
                                <BlackDot>
                                    <div></div>
                                </BlackDot>
                                <div>
                                    <CustomImg src="./media/icons/entities2.png"/>
                                    Corporate
                                </div>
                                <BlackDot>
                                    <div></div>
                                </BlackDot>
                                <div>Updated 3 days ago by {usersList[5].name}</div>
                            </ResumeBoxTags>
                        </ResumeContentBox>
                    ))
                }
                <StyledPagination>
                    <ReactPaginate
                        previousLabel={'PREVIOUS'}
                        nextLabel={'NEXT'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={posts.length}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        pageClassName={'page'}
                        previousClassName={'previous'}
                        nextClassName={'next'}
                    />
                </StyledPagination>
            </ResumeWorkContent>
        </Wrapper>
    )
};

export default ResumeWork
