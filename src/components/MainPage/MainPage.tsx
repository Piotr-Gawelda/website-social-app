import React, {FC, useEffect} from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import TopBar from "../TopBar/TopBar";
import LeftMenu from "../LeftMenu/LeftMenu";
import LastPublications from "../Publications/LastPublications";
import Workspaces from "../Workspaces/Workspaces";
import UserProfile from "../Profile/UserProfile";
import Publications from "../Publications/Publications";
import People from "../People/People";
import Entities from "../Entities/Entities";
import Administration from "../Administration/Administration";
import {Colors} from "../styledHelpers/Colors";
import ResumeWork from "../ResumeWork/ResumeWork";
import SinglePageWorkspace from "../Workspaces/SinglePageWorkspace";
import ClientCorporate from "../Workspaces/ClientCorporate";
import ClientContract from "../Workspaces/ClientContract";
import SupplierContract from "../Workspaces/SupplierContract";
import Privacy from "../AccountSettings/Privacy";
import Settings from "../AccountSettings/Settings";
import Ecosystem from "../Ecosystem/Ecosystem";
import GroupNorms from "../Workspaces/GroupNorms";
import RealStateContracts from "../Workspaces/RealStateContracts";
import Notifications from "../Notifications/Notifications";
import Messages from "../Notifications/Messages";

const Wrapper = styled.div`
 background-color: ${Colors.grey};
 height: 100%;
 overflow: hidden;
`;

const Content = styled.div`
  //max-width: 1540px;
  display: flex;
  margin: 0 auto;
  padding-right: 20px;
  padding-top: 20px;
`;

const TopBarWrapper = styled.div`
  width: 100vw;
`;

const MainContent = styled.div`
  width: 79vw;
`;

const MainPage: FC = () => {

    return(
        <Router>
            <Wrapper>
                <TopBarWrapper>
                    <TopBar/>
                </TopBarWrapper>
                <Content>
                    <LeftMenu/>
                    <MainContent>
                        <Switch>
                            <Route path="/" component={MainContent} exact>
                                <LastPublications/>
                                <Workspaces/>
                                <ResumeWork showFilter="none" title="Resume your work"/>
                            </Route>
                            <Route path="/userProfile" component={UserProfile} exact>
                                <UserProfile/>
                            </Route>
                            <Route path="/publications" component={Publications} exact>
                                <Publications/>
                            </Route>
                            <Route path="/people" component={People} exact>
                                <People/>
                            </Route>
                            <Route path="/entities" component={Entities} exact>
                                <Entities/>
                            </Route>
                            <Route path="/administration" component={Administration} exact>
                                <Administration/>
                            </Route>
                            <Route path="/single-page-workspace" component={SinglePageWorkspace} exact>
                                <SinglePageWorkspace
                                    background="./media/slider1.jpg"
                                    title="Client Contract"
                                    image="./media/icons/entities.png"
                                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis cum excepturi fugit hic maxime nobis quibusdam sequi? Beatae blanditiis consectetur dolorem ea laborum molestiae officia? Dicta explicabo illum quae?"/>
                            </Route>
                            <Route path="/client-corporate" component={ClientCorporate} exact>
                                <ClientCorporate/>
                            </Route>
                            <Route path="/client-contract" component={ClientContract} exact>
                                <ClientContract/>
                            </Route>
                            <Route path="/supplier-contract" component={SupplierContract} exact>
                                <SupplierContract/>
                            </Route>
                            <Route path="/group-norms" component={GroupNorms} exact>
                                <GroupNorms/>
                            </Route>
                            <Route path="/real-state-contracts" component={RealStateContracts} exact>
                                <RealStateContracts/>
                            </Route>
                            <Route path="/privacy" component={Privacy} exact>
                                <Privacy/>
                            </Route>
                            <Route path="/settings" component={Settings} exact>
                                <Settings/>
                            </Route>
                            <Route path="/ecosystem" component={Ecosystem} exact>
                                <Ecosystem/>
                            </Route>
                            <Route path="/notifications" component={Notifications} exact>
                                <Notifications/>
                            </Route>
                            <Route path="/messages" component={Messages} exact>
                                <Messages/>
                            </Route>
                        </Switch>
                    </MainContent>
                </Content>
            </Wrapper>
        </Router>
    )
};

export default MainPage
