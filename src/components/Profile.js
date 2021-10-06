import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../components/Navbar";
import MatchCard from "../components/Matches/MatchCard";
import MatchCreate from "../components/Matches/MatchCreate";
import MatchDelete from "../components/Matches/MatchDelete";
import MatchEdit from "../components/Matches/MatchEdit";
import MatchForm from "../components/Matches/MatchForm";
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
        {/* <Route path="/matches/matchcard" component={MatchCard} />
        <Route path="/matches/matchcreate" component={MatchCreate} />
        <Route path="/matches/matchdelete" component={MatchDelete} />
        <Route path="/matches/matchedit" component={MatchEdit} /> */}
        <Route path="/profile/matches/matchform" component={MatchForm} />
        <Route path="/profile/team/teamcreate" component={TeamCreate} />
        <Route path="/profile/team/teamedit" component={TeamEdit} />
        <Route path="/profile/team/teamlist" component={TeamList} />
      </Switch>
    </div>
  );
}

export default Profile;
