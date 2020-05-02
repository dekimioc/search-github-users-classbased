import {
    GET_NAME,
    GET_USER_NAME,
    GET_USER_DESCRIPTION,
    GET_USER_AVATAR,
    GET_USER_REPO_LINK,
    GET_USER_REPOS,
    GET_INPUT_VALUE,
    GET_ERROR,
    RESSET,
    ERROR_MESSAGE
} from './action.types';

export const initialState = {
    name: '',
    userName: '',
    userDescription: '',
    avatar: '',
    userRepoLink: '',
    userRepos: [],
    inputValue: '',
    error: null,
    errorMessage: ''
}

const apiDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.e
            }
        case GET_USER_DESCRIPTION:
            return {
                ...state,
                userRepos: [],
                userDescription: action.userDescription
            }
        case GET_USER_AVATAR:
            return {
                ...state,
                avatar: action.avatar
            }
        case GET_NAME:
            return {
                ...state,
                name: action.user
            }
        case GET_USER_NAME:
            return {
                ...state,
                userName: action
            }
        case GET_USER_REPO_LINK:
            return {
                ...state,
                userRepoLink: action.repoLink
            }
        case GET_ERROR:
            return {
                ...state,
                error: true,
                // errorMessage: 'Something went wrong! Please try again!'
            }
        case GET_USER_REPOS:
            return {
                ...state,
                userRepos: [...action.repos]
            }
        case RESSET:
            return {
                ...state,
                name: '',
                userName: '',
                userDescription: '',
                avatar: '',
                userRepoLink: '',
                userRepos: [],
                inputValue: '',
                error: null,
                errorMessage: ''
            }
        case ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: action.error
            }
        }
        default: return state
    }
}
export default apiDataReducer;
