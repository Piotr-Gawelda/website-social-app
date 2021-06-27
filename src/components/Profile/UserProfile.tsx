import React, {ChangeEvent, FC, useEffect, useState} from "react";
import styled from "styled-components";
import {Wrapper, HrLine} from "../styledHelpers/Components";
import {Colors} from "../styledHelpers/Colors";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../reducers";
import {IUsersReducer} from "../../reducers/usersReducers";
import {getPhotos, getUsers} from "../../actions/userActions";
import {fontSize} from "../styledHelpers/FontSizes";

type GetPhotos = ReturnType<typeof getPhotos>
type GetUsers = ReturnType<typeof getUsers>

const UserProfileWrapper = styled(Wrapper)`
  color: ${Colors.black};
  background-color: ${Colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 6px;
  margin-bottom: 20px;
  padding: 20px;
`;

const UserProfileData = styled.div`

`;
const TopLinksMedia = styled.div`
  display: flex;
  justify-content: flex-end;
  div {
    margin: 10px;
  }
`;

const MediaLinks = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
`;

const UserDataBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const UserPhoto = styled.div`
  display: flex;
  margin-right: 50px;
`;

const UserPhotoBox = styled.div`
  margin-right: 40px;
  p {
    color: ${Colors.blue3};
    margin-top: 10px;
  }
`;
const UserPhotoData = styled.div`
  div {
  margin-bottom: 10px;
  &:nth-of-type(1) {
    font-weight: 600;
    color: ${Colors.blue3};
  }
    p {
      margin-bottom: 7px;
    }
  }
`;

const CustomUserImg = styled.div`
margin: 0 auto;
   img {
    width: 60px !important;
    height: 60px;
    margin-right: 10px;
    border-radius: 50%;
  }
`;

const CustomImg = styled.img`
  
`;
const UserContact = styled.div`
  p:nth-of-type(1) {
    margin-bottom: 10px;
  }
`;

const SelectContent = styled.div`

`;

const PanelInfoText = styled.div`
  margin-bottom: 20px;
  margin-top: 5px;
`;

const AttachmentBox = styled.div`
  color: ${Colors.blue3};
  background-color: ${Colors.grey};
  border-radius: 6px;
  padding: 5px 10px;
  margin-top: -5px;
  display: flex;
  align-items: center;
  img { 
    margin-right: 12px;
  }
`;

const SelectContentTitle = styled.div`
  font-size: ${fontSize[14]};
  color: ${Colors.grey3};
  margin-bottom: 10px;
`;

const SelectedElementBox = styled.div`
  display: flex;
  div {
    margin-right: 15px;
  }
`;

const SelectedElement = styled.div`
  color: ${Colors.blue3};
  background-color: ${Colors.lightblue};
  font-size: ${fontSize[14]};
  padding: 5px 10px;
  border-radius: 6px;
  width: max-content;
`;

const Expertize = styled.div`
  margin-top: 15px;
`;

const Specialties = styled.div`
  margin-top: 15px;
`;

const Admission = styled.div`
  margin-top: 15px;
`;

const Counties = styled.div`
  margin-top: 15px;
`;

const PanelInformation = styled.div`

`;

const PanelInfoBox = styled.div`

`;

const PanelInfoTitle = styled.div`
  color: ${Colors.blue3};
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const ServicesProjectsBox = styled.div`

`;

const InternalCorres = styled.div`

`;

const InternalUserData = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Colors.grey};
  border-radius: 6px;
  padding: 5px 10px;
  margin-bottom: 5px;
`;

const InternalUserName = styled.div`
  margin-right: 70px;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${Colors.blue3};
`;

const CustomUserInternalImg = styled.div`
  img {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }
`;

const InternalUserIcons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  img {
    margin-right: 10px;
  }
`;

const Proposals = styled.div`
  margin-top: 20px;
`;

const InternalReviews = styled.div`
  margin-top: 20px;
`;

const AmountOfFees = styled.div`
  margin-top: 20px;
`;

const TableData = styled.table`
  width: 100%;
  margin-bottom: 10px;
  thead {
    border-bottom: 2px solid ${Colors.grey2};
    tr {
      th {
          text-align: left;
          border-collapse: collapse;
          padding: 10px;
          font-weight: bold;
          color: ${Colors.blue3};
      }
    }
  }
  tbody {
    tr {
      td {
        padding: 10px;
        font-size: ${fontSize[14]};
      }
    }
  }
`;

const UserProfile: FC = () => {

    const { usersList, photos } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
    }, [dispatch ]);

    return (
        <UserProfileWrapper>
            <UserProfileData>
                <TopLinksMedia>
                    <MediaLinks>
                        <CustomImg src="./media/icons/comments.png"/>
                        <p>message</p>
                    </MediaLinks>
                    <MediaLinks>
                        <CustomImg src="./media/icons/comments.png"/>
                        <p>create request</p>
                    </MediaLinks>
                    <MediaLinks>
                        <CustomImg src="./media/icons/comments.png"/>
                        <p>add to a cluster</p>
                    </MediaLinks>
                </TopLinksMedia>
                <UserDataBox>
                    <UserPhoto>
                        <UserPhotoBox>
                            <CustomUserImg>
                                <CustomImg src={photos[8]?.url} alt=""/>
                            </CustomUserImg>
                            <p>See more</p>
                        </UserPhotoBox>
                        <UserPhotoData>
                            <div>
                                <p>{usersList[9]?.name}</p>
                                <p>{usersList[2]?.company.name}</p>
                            </div>
                            <div>
                                <p>New York</p>
                                <p>Partner</p>
                            </div>
                        </UserPhotoData>
                    </UserPhoto>
                    <UserContact>
                        <p>{usersList[2]?.email}</p>
                        <p>+66 666 666 666</p>
                    </UserContact>
                </UserDataBox>
            </UserProfileData>
            <HrLine/>
            <SelectContent>
                <Expertize>
                    <SelectContentTitle>
                        Expertize
                    </SelectContentTitle>
                    <SelectedElementBox>
                        <SelectedElement>
                            Merges and acquisition
                        </SelectedElement>
                    </SelectedElementBox>
                </Expertize>
                <Specialties>
                    <SelectContentTitle>
                        Specialties
                    </SelectContentTitle>
                    <SelectedElementBox>
                        <SelectedElement>
                            Cross border operation
                        </SelectedElement>
                        <SelectedElement>
                            Transaction over 500M$
                        </SelectedElement>
                    </SelectedElementBox>
                </Specialties>
                <Admission>
                    <SelectContentTitle>
                        Admission to practice law
                    </SelectContentTitle>
                    <SelectedElementBox>
                        <SelectedElement>
                            Paris bar association
                        </SelectedElement>
                        <SelectedElement>
                            Tunisian bar association
                        </SelectedElement>
                    </SelectedElementBox>
                </Admission>
                <Counties>
                    <SelectContentTitle>
                        Counties
                    </SelectContentTitle>
                    <SelectedElementBox>
                        <SelectedElement>
                            Tunisia
                        </SelectedElement>
                    </SelectedElementBox>
                </Counties>
            </SelectContent>
            <HrLine/>
            <PanelInformation>
                <PanelInfoBox>
                    <PanelInfoTitle>
                        Panel Informations
                    </PanelInfoTitle>
                    <SelectContentTitle>
                        Hourly fee
                    </SelectContentTitle>
                    <PanelInfoText>
                        610$/hour (Negociated)
                    </PanelInfoText>
                    <SelectContentTitle>
                        Terms & Conditions
                    </SelectContentTitle>
                    <PanelInfoText>
                        Monthly 10k$ retainer - see with Jeanny Smith
                    </PanelInfoText>
                    <AttachmentBox>
                        <CustomImg src="./media/icons/comments.png"/>
                        Attachment_lorem-ipsum25425.jpg
                    </AttachmentBox>
                </PanelInfoBox>
                <ServicesProjectsBox>
                    <PanelInfoTitle>
                        Services & Projects
                    </PanelInfoTitle>
                    <PanelInfoText>
                        Corporate M&A and international acquisitions
                    </PanelInfoText>
                </ServicesProjectsBox>
                <InternalCorres>
                    <PanelInfoTitle>
                        Internal correspondants
                    </PanelInfoTitle>
                    <InternalUserData>
                        <InternalUserName>
                            <CustomUserInternalImg>
                                <CustomImg src={photos[8]?.url} alt=""/>
                            </CustomUserInternalImg>
                            {usersList[9]?.name}
                        </InternalUserName>
                        <InternalUserIcons>
                            <CustomImg src="./media/icons/comments.png"/>
                            Messages
                        </InternalUserIcons>
                        <InternalUserIcons>
                            <CustomImg src="./media/icons/people.png"/>
                            Profile
                        </InternalUserIcons>
                    </InternalUserData>
                    <InternalUserData>
                        <InternalUserName>
                            <CustomUserInternalImg>
                                <CustomImg src={photos[8]?.url} alt=""/>
                            </CustomUserInternalImg>
                            {usersList[9]?.name}
                        </InternalUserName>
                        <InternalUserIcons>
                            <CustomImg src="./media/icons/comments.png"/>
                            Messages
                        </InternalUserIcons>
                        <InternalUserIcons>
                            <CustomImg src="./media/icons/people.png"/>
                            Profile
                        </InternalUserIcons>
                    </InternalUserData>
                </InternalCorres>
            </PanelInformation>
            <HrLine/>
            <Proposals>
                <PanelInfoTitle>
                    Proposals
                </PanelInfoTitle>
                <TableData>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Entity</th>
                        <th>Location</th>
                        <th>Expertise</th>
                        <th>Date</th>
                        <th>Firm</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Operation Ti...</td>
                        <td>Renault Co...</td>
                        <td>France</td>
                        <td>#Tax</td>
                        <td>20/01/2018</td>
                        <td>Racine</td>
                    </tr>
                    <tr>
                        <td>Op. Prometh..</td>
                        <td>Renault HQ</td>
                        <td>USA</td>
                        <td>#M&A</td>
                        <td>20/01/2019</td>
                        <td>Clifford chance</td>
                    </tr>
                    <tr>
                        <td>Op. Latandre</td>
                        <td>Renault Br...</td>
                        <td>Italia</td>
                        <td>#Social</td>
                        <td>20/01/2019</td>
                        <td>SVZ</td>
                    </tr>
                    </tbody>
                </TableData>
            </Proposals>
            <HrLine/>
            <InternalReviews>
                <PanelInfoTitle>
                    Internal reviews
                </PanelInfoTitle>
                <TableData>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Entity</th>
                        <th>Location</th>
                        <th>Expertise</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Operation Ti...</td>
                        <td>Renault Co...</td>
                        <td>France</td>
                        <td>#Tax</td>
                        <td>20/01/2018</td>
                    </tr>
                    <tr>
                        <td>Op. Prometh..</td>
                        <td>Renault HQ</td>
                        <td>USA</td>
                        <td>#M&A</td>
                        <td>20/01/2019</td>
                    </tr>
                    <tr>
                        <td>Op. Latandre</td>
                        <td>Renault Br...</td>
                        <td>Italia</td>
                        <td>#Social</td>
                        <td>20/01/2019</td>
                    </tr>
                    </tbody>
                </TableData>
            </InternalReviews>
            <HrLine/>
            <AmountOfFees>
                <PanelInfoTitle>
                    Amount of fees
                </PanelInfoTitle>
                <TableData>
                    <thead>
                    <tr>
                        <th>Year</th>
                        <th>Cost center</th>
                        <th>Total amount</th>
                        <th>Law firm</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2019</td>
                        <td>CS 153</td>
                        <td>3500$</td>
                        <td>Clifford chance</td>
                    </tr>
                    <tr>
                        <td>2018</td>
                        <td>CS 153</td>
                        <td>9500$</td>
                        <td>Linklaters</td>
                    </tr>
                    <tr>
                        <td>2017</td>
                        <td>CS 47</td>
                        <td>10 500$</td>
                        <td>Linklaters</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>CS 153</td>
                        <td>18 500$</td>
                        <td>Linklaters</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>CS 32</td>
                        <td>15 500$</td>
                        <td>Linklaters</td>
                    </tr>
                    </tbody>
                </TableData>
            </AmountOfFees>
        </UserProfileWrapper>
    )
};

export default UserProfile
