import {
    GET_NAME,
    GET_USER_NAME,
    GET_USER_DESCRIPTION,
    GET_USER_AVATAR,
    GET_USER_REPO_LINK,
    GET_USER_REPOS,
    GET_INPUT_VALUE,
    GET_ERROR,
    ERROR_MESSAGE,
    RESSET
} from './action.types';

// import { useHistory } from 'react-router-dom';
// const history = useHistory();

export const setName = user => {
    return {
        type: GET_NAME,
        user: user
    }
}

export const setUserDescription = userDescription => {
    return {
        type: GET_USER_DESCRIPTION,
        userDescription: userDescription
    }
}

export const setUserName = userName => {
    return {
        type: GET_USER_NAME,
        user: userName
    }
}

export const setUserAvatar = avatar => {
    return {
        type: GET_USER_AVATAR,
        avatar: avatar
    }
}

export const setRepoLink = repoLink => {
    return {
        type: GET_USER_REPO_LINK,
        repoLink: repoLink
    }
}

export const setRepos = repos => {
    return {
        type: GET_USER_REPOS,
        repos: repos
    }
}

export const setError = error => {
    return {
        type: GET_ERROR,
        error: error.message
    }
}

export const ressetError = error => {
    return {
        type: RESSET,
        error: error
    }
}
export const errorMessage = errorMsg => {
    return {
        type: ERROR_MESSAGE,
        error: errorMsg
    }
}

export const fetchUser = () => {
    return (dispatch, getState) => {
        fetch(`https://api.github.com/users/${getState().inputValue}`)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else if (res.status === 404) {
                    dispatch(setError(""))
                } else {
                    dispatch(setError(""))
                }
            })
            .then(data => {
                dispatch(setName(data.name))
                dispatch(setUserDescription(data.bio))
                dispatch(setUserName(data.login))
                dispatch(setUserAvatar(data.avatar_url))
                dispatch(setRepoLink(data.repos_url))
            })
            .catch((err) => dispatch(errorMessage('Something went wrong! Please try again!'))
            );
    }
}

export const getUserRepos = () => {
    return (dispatch, getState) => {
        fetch(`${getState().userRepoLink}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setRepos(data));
            })
            .catch((err) => (console.log(err.message)))
    }
}

export const inputHandler = e => {
    return {
        type: GET_INPUT_VALUE,
        e: e
    };
};