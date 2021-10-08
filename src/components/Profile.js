import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../components/Navbar";
import MatchCard from "../components/Matches/MatchCard";
import MatchCreate from "../components/Matches/MatchCreate";
import MatchDelete from "../components/Matches/MatchDelete";
import MatchEdit from "../components/Matches/MatchEdit";
import TeamDetail from "../components/Teams/TeamDetail";
import TeamCreate from "../components/Teams/TeamCreate";
import TeamEdit from "../components/Teams/TeamEdit";
import TeamList from "../components/Teams/TeamList";
import "bootstrap/dist/css/bootstrap.min.css";

function Profile() {
  return (
    <div>
    <NavBar />
    <div></div>
      <Switch>
        <Route path="/profile/matches/matchcard" component={MatchCard} />
        <Route path="/profile/matches/matchcreate" component={MatchCreate} />
        <Route path="/profile/matches/matchdelete" component={MatchDelete} />
        <Route path="/profile/matches/matchedit" component={MatchEdit} />
        <Route path="/profile/team/teamdetail/:id" component={TeamDetail} />
        <Route path="/profile/team/teamcreate" component={TeamCreate} />
        <Route path="/profile/team/teamedit" component={TeamEdit} />
        <Route path="/profile/team/teamlist" component={TeamList} />
      </Switch>
    </div>
  );
}

export default Profile;
