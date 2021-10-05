import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "../components/Navbar";
import matchcard from "../components/Matches/MatchCard";
import matchcreate from "../components/Matches/MatchCreate";
import matchdelete from "../components/Matches/MatchDelete";
import matchedit from "../components/Matches/MatchEdit";
import matchform from "../components/Matches/MatchForm";
import teamcreate from "../components/Teams/TeamCreate";
import teamedit from "../components/Teams/TeamEdit";
import teamform from "../components/Teams/TeamForm";
import teamlist from "../components/Teams/TeamList";
import "bootstrap/dist/css/bootstrap.min.css";

function Profile() {
  return <div>
  <BrowserRouter>
    <Switch>
    <NavBar/>
      <Route path="/matches/matchcard" component={matchcard} />
      <Route path="/matches/matchcreate" component={matchcreate} />
      <Route path="/matches/matchdelete" component={matchdelete} />
      <Route path="/matches/matchedit" component={matchedit} />
      <Route path="/matches/matchform" component={matchform} />
      <Route path="/teams/teamcreate" component={teamcreate} />
      <Route path="/teams/teamedit" component={teamedit} />
      <Route path="/teams/teamform" component={teamform} />
      <Route path="/teams/teamlist" component={teamlist} />
    </Switch>
  </BrowserRouter>
  </div>;
}

export default Profile;
