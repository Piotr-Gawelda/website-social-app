import React, {FC, useEffect, useState} from "react";
import styled from "styled-components";
import {Colors} from "../styledHelpers/Colors";
import {fontSize} from "../styledHelpers/FontSizes";
import {entitiesData, filterData} from "./EntitiesData";
import useDropdown from "react-dropdown-hook";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../reducers";
import {IUsersReducer} from "../../reducers/usersReducers";
import {getPhotos} from "../../actions/userActions";
import swal from 'sweetalert';

type GetPhotos = ReturnType<typeof getPhotos>

const Wrapper = styled.div`
  background-color: ${Colors.white};
  padding: 20px;
  border-radius: 6px;
  margin-bottom: 40px;
  .fullScreen {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 99vw;
    z-index: 9999;
    background-color: ${Colors.white};  
    padding: 30px;
    transition: 1s;
  }
  .defaultScreen {
    position: static;
    background-color: transparent;
    height: auto;
    transition: 1s;
  }
`;

const EntitiesContent = styled.div`
  position: relative;
  
  .disableMosaic { 
    display: block;
  }
  .setMosaic {
  }
  .showFilter {
    display: block;
    margin-top: 10px;
    padding: 20px;

  }
  .disableFilter {
    display: none;
  }
`;

const EntitiesLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EntitiesAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
  }
`;

const FilterBox = styled.div`
 font-size: ${fontSize[14]};
`;

const FilterBoxTitle = styled.div`
  color: ${Colors.grey3};
`;

const FilterBoxFields = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

const FilterBoxSingleField = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 8px 0 0;
  img {
    width: 10px;
    height: 8px;
    margin-right: 12px;
  }
  input {
    margin-left: 10px;
    border-radius: 4px;
    padding: 5px;
    border: none;
  }
  &:nth-of-type(1) {
    margin-right: 35px;
  }
`;

const FilterBoxActions = styled.div`
  display: flex;
  align-items: center;
  color: ${Colors.blue3};
  padding-left: 10px;
  margin-top: 10px;
  div {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-right: 12px;
  }
  div:nth-of-type(1) {
    cursor:pointer;
    img {
      margin-left: 0;
      margin-right: 10px;
      width: 12px;
    }
  }
  div:nth-of-type(2) {
  cursor:pointer;
    img {
      width: 10px;
    }
  }
`;


const AllDropdown = styled.div`
  color: ${Colors.blue3};
  position: relative;
  cursor:pointer;
  background-color: ${Colors.blueBg};
  padding: 7px;
  border-radius: 4px;
  margin-right: 21px;
  div {
    cursor: pointer;
  }
  img { 
    height: 7px;
  }
`;

const AllDropdownStyle = styled.ul`
  position: absolute;
  background-color: ${Colors.blueBg};
  width: 100%;
  z-index: 999;
  top: 28px;
  left: 0;
  border-radius: 6px;
  li {
    background-color: ${Colors.blueBg};
    padding: 5px;
    &:last-of-type {
    border-radius: 6px;
    }
  }
`;

const SortEntities = styled.div`
  color: ${Colors.grey3};
  padding: 7px;
  border-radius: 4px;
  cursor: pointer;
  img {
    margin-right: 15px;
  }
`;

const FilterEntities = styled.div`
  color: ${Colors.grey3};
  padding: 7px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 20px;
  img {
    margin-right: 15px;
  }
`;

const SizeEntities = styled.div`
  color: ${Colors.grey3};
  padding: 7px;
  border-radius: 4px;
  cursor: pointer;
  img {
    margin-right: 15px;
  }
`;

const ShareEntities = styled.div`
  color: ${Colors.grey3};
  padding: 7px;
  border-radius: 4px;
  cursor: pointer;
  img {
    margin-right: 15px;
  }
`;

const StyledSearch = styled.div`
    border: 1px solid ${Colors.grey};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 150px;
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
        width: auto;
        margin-left: 0;
    }
`;

const StyledFollowed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  border: 1px solid ${Colors.blue3};
  border-radius: 4px;
  padding: 6px;
  position: relative;
  cursor:pointer;
  img,span {
    margin: 0 5px;
  }
  img {
    height: auto;
    width: auto;
  }
  span {
    color: ${Colors.blue3};
    font-size: ${fontSize[14]};
    font-weight: bold;
  }
`;

const FollowedDropdownStyle = styled.ul`
  position: absolute;
  border: 1px solid ${Colors.blue3};
  border-top: none;
  width: 102%;
  z-index: 999;
  top: 21px;
  left: -1px;
  border-radius: 6px;
  cursor:pointer;
  li {
    background-color: ${Colors.white};
    color: ${Colors.blue3};
    padding: 8px;
    &:last-of-type {
    border-radius: 6px;
    }
  }
`;

const EntitiesData = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const EntitiesDataBox = styled.div`
  border: 1px solid ${Colors.grey2};
  border-radius: 6px;
  display: flex;
  width: max-content;
  padding: 5px;
  margin-top: 20px;
`;

const EntitiesDataImg = styled.div`
  width: 30%;
  background-color: ${Colors.grey2};
  border-radius: 6px;
  margin-right: 18px;
  position: relative;
  img {
    border-radius: 6px;
    position: absolute;
    top: 21%;
    left: 25%;
    margin-left: 0;
    height: 40px;
    width: 40px;
  }
`;

const EntitiesDataText = styled.div`
  width: 70%;
`;

const EntitiesDataTitle = styled.div`
  color: ${Colors.blue3};
  font-weight: bold;
`;

const EntitiesDataDescription = styled.div`
  font-size: ${fontSize[14]};
  color: ${Colors.grey3};
  margin-top: 15px;
  line-height: 18px;
`;


const EntitiesTitle = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const EntitiesView = styled.div`
`;

const Mosaic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.blue3};
  background-color: ${Colors.blueBg};
  border-radius: 4px;
  font-weight: bold;
  padding: 7px 15px 7px 0;
  cursor:pointer;
  img {
    margin-right: 10px;
  }
`;

const CustomImg = styled.img`
  width: 15px;
  margin-left: 15px;
`;

const ViewChange = styled.div`
`;

const VerticalLine = styled.div`
  width: 1px;
  height: 20px;
  background-color: ${Colors.grey3};
`;

const Entities: FC = () => {

    const [mosaic, setMosaic] = useState(false);
    const [mosaicView, setMosaicView] = useState(false);
    const [mosaicIcon, setMosaicIcon] = useState(false);
    const [inputText, setInputText] = useState<any>("");
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    const [size, setSize] = useState(false);
    const [filter, setFilter] = useState(false);
    // const [sort, setSort] = useState<number>(1);
    const [wrapperRefFollowed, dropdownOpenFollowed, toggleDropdownFollowed] = useDropdown();
    const { photos } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetPhotos>(getPhotos());
    }, [dispatch]);
    const menuHandler = () => {
        toggleDropdown();
    };

    const menuFollowed = () => {
        toggleDropdownFollowed();
    };

    const handleClick = () => {
        setMosaic(!mosaic);
        setMosaicView(!mosaicView);
        setMosaicIcon(!mosaicIcon);
    };

    const handleSort = () => {
    };

    const handleSize = () => {
        setSize(!size);
    };

    const handleClipboard = () => {
        navigator.clipboard.writeText('http://localhost:3000/entities');
        swal("Dobra robota", "Zawartość skopiowano do schowka", "success");
    };

    const handleFilter = () => {
        setFilter(!filter)
    };

    return (
        <>
            <Wrapper>
                <EntitiesContent className={`${size ? 'fullScreen' : 'defaultScreen'}`}>
                    <EntitiesLabel>
                        <EntitiesTitle>
                            Entities
                            <CustomImg src="./media/icons/cog.png"/>
                        </EntitiesTitle>
                        <EntitiesView>
                            <Mosaic onClick={handleClick}>
                                <CustomImg src={mosaicIcon ? "./media/icons/three_lines.svg" : "./media/icons/mosaic.svg"}/>
                                {mosaicView ? "List" : "Mosaic"}
                            </Mosaic>
                            <ViewChange/>
                        </EntitiesView>
                    </EntitiesLabel>
                    <EntitiesAction>
                        <div ref={wrapperRef}>
                            <AllDropdown onClick={menuHandler}>
                                All
                                <CustomImg src="./media/icons/arrow-down.svg"/>
                                {dropdownOpen &&
                                <AllDropdownStyle>
                                    <li>1</li>
                                    <li>2</li>
                                </AllDropdownStyle>
                                }
                            </AllDropdown>
                            <VerticalLine/>
                            <SortEntities onClick={handleSort}>
                                <CustomImg src="./media/icons/sort.png"/>
                                Sort
                            </SortEntities>
                            <FilterEntities onClick={handleFilter}>
                                <CustomImg src="./media/icons/filter.png"/>
                                Filter
                            </FilterEntities>
                            <VerticalLine/>
                            <SizeEntities onClick={handleSize}>
                                <CustomImg src="./media/icons/resize.png"/>
                            </SizeEntities>
                            <VerticalLine/>
                            <ShareEntities onClick={handleClipboard}>
                                <CustomImg src="./media/icons/share.png"/>
                                Share
                            </ShareEntities>
                        </div>
                        <div>
                            <StyledSearch>
                                <input type="text" placeholder="Search ..."
                                       onChange={(e) => setInputText(e.target.value)}/>
                                <CustomImg src="./media/icons/search.png"/>
                            </StyledSearch>
                            <StyledFollowed onClick={menuFollowed}>
                                <span>Followed</span>
                                {dropdownOpenFollowed &&
                                <FollowedDropdownStyle>
                                    <li>1</li>
                                    <li>2</li>
                                </FollowedDropdownStyle>
                                }
                                <CustomImg src="./media/icons/arrow-down.svg"/>
                            </StyledFollowed>
                        </div>
                    </EntitiesAction>
                    <FilterBox className={`${filter ? 'showFilter' : 'disableFilter'}`}>
                        <FilterBoxTitle>
                            Rows are filtered by the following conditions starting from the top.
                        </FilterBoxTitle>
                        <FilterBoxFields>
                            <FilterBoxSingleField>
                                <CustomImg src="./media/icons/arrow-down.svg"/>
                                Where
                            </FilterBoxSingleField>
                            <FilterBoxSingleField>
                                Company
                                <CustomImg src="./media/icons/arrow-down.svg"/>
                            </FilterBoxSingleField>
                            <FilterBoxSingleField>
                                Contains
                                <CustomImg src="./media/icons/arrow-down.svg"/>
                            </FilterBoxSingleField>
                            <FilterBoxSingleField>
                                <input type="text" disabled placeholder="Type..."/>
                            </FilterBoxSingleField>
                        </FilterBoxFields>
                        {
                            filterData.map((item) => (
                                <FilterBoxFields>
                                    <FilterBoxSingleField key={item.id}>
                                        <CustomImg src={item.icon}/>
                                        {item.field1}
                                    </FilterBoxSingleField>
                                    <FilterBoxSingleField>
                                        {item.field2}
                                        <CustomImg src={item.icon}/>
                                    </FilterBoxSingleField>
                                    <FilterBoxSingleField>
                                        {item.field3}
                                        <CustomImg src={item.icon}/>
                                    </FilterBoxSingleField>
                                    <FilterBoxSingleField>
                                        <input type="text" disabled placeholder="Type..."/>
                                    </FilterBoxSingleField>
                                    <FilterBoxSingleField >
                                        {item.field4}
                                        <CustomImg src={item.icon}/>
                                    </FilterBoxSingleField>
                                    <FilterBoxSingleField>
                                        <input type="text" disabled placeholder="Type..."/>
                                    </FilterBoxSingleField>
                                </FilterBoxFields>
                            ))
                        }
                        <FilterBoxActions>
                            <div>
                                <CustomImg src="./media/icons/plus.png"/>
                                Add filter
                            </div>
                            <div>
                                choose property
                                <CustomImg src="./media/icons/arrow-down.svg"/>
                            </div>
                        </FilterBoxActions>
                    </FilterBox>
                    <EntitiesData className={`${mosaic ? 'disableMosaic' : 'setMosaic'}`}>
                        {
                            entitiesData.filter((val) => {
                                if(inputText === "") {
                                    return val
                                } else if (val.title.toLowerCase().includes(inputText.toLowerCase())) {
                                    return val
                                }
                            }).map((post) => (
                                <>
                                    <EntitiesDataBox key={post.id}>
                                        <EntitiesDataImg>
                                            <CustomImg src={photos[post.img]?.url}/>
                                        </EntitiesDataImg>
                                        <EntitiesDataText>
                                            <EntitiesDataTitle>
                                                {post.title}
                                            </EntitiesDataTitle>
                                            <EntitiesDataDescription>
                                                {post.description}
                                            </EntitiesDataDescription>
                                        </EntitiesDataText>
                                    </EntitiesDataBox>
                                </>
                            ))
                        }
                    </EntitiesData>
                </EntitiesContent>
            </Wrapper>
        </>
    )
};

export default Entities
