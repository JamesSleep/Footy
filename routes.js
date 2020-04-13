const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

const MATCHES = "/matches";
const MATCH_DETAIL = "/:id";
const ADD_MATCH = "/add-match"
const EDIT_MATCH = "/:id/edit";

const PLAYERS = "/players";
const PLAYER_DETAIL = "/:id";
const ADD_PLAYER = "/add-player";
const EDIT_PLAYER = "/:id/edit";

const routes = {
    home : HOME,
    join : JOIN,
    login : LOGIN,
    logout : LOGOUT,
    search : SEARCH,
    users : USERS,
    userDetail : USER_DETAIL,
    editProfile : EDIT_PROFILE,
    changePassword : CHANGE_PASSWORD,
    matches : MATCHES,
    matchDetail : MATCH_DETAIL,
    addMatch : ADD_MATCH,
    editMatch : EDIT_MATCH,
    players : PLAYERS,
    playerDetail : PLAYER_DETAIL,
    addPlayer : ADD_PLAYER,
    editPlayer : EDIT_PLAYER
}

export default routes;