import api from "../../apis/api";

async function MatchDelete(matchId, setMatchCreated) {
  const result = await api.delete(`/matches/${matchId}`);

  setMatchCreated(true);

  return result;
}

export default MatchDelete;