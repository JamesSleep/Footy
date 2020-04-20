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
const ADD_MATCH = "/addMatch"
const EDIT_MATCH = "/:id/edit";

const routes = {
    home : HOME,
    join : JOIN,
    login : LOGIN,
    logout : LOGOUT,
    search : SEARCH,
    users : USERS,
    userDetail : (id) => {
        if(id) {
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    editProfile : EDIT_PROFILE,
    changePassword : CHANGE_PASSWORD,
    matches : MATCHES,
    matchDetail : (id) => {
        if(id) {
            return `/matches/${id}`;
        } else {
            return MATCH_DETAIL;
        }
    },
    addMatch : ADD_MATCH,
    editMatch : (id) => {
        if (id) {
            return `/matches/${id}/edit`;
        } else {
            return EDIT_MATCH;
        }
    }
};

export default routes;