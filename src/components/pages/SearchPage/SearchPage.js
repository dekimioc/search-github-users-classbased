import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import UserCard from '../../components/UserCard/UserCard';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import { connect } from 'react-redux';
import { inputHandler, fetchUser, ressetError, getUserRepos } from '../../redux/actions';

import './SearchPage.scss';

class SearchPage extends Component {
    render() {
        return (
            <div>
                {this.props.error && <ErrorModal onClose={this.props.onCloseError} messageErr={this.props.errorMessage} />}
                <SearchForm
                    inputValue={this.props.input}
                    submitForm={this.props.onFetchUser}
                    changedValue={e => this.props.onInputChange(e)}
                    disabledButton={false} />
                <UserCard
                    avatar={this.props.avatar}
                    name={this.props.name}
                    description={this.props.description}
                    getRepo={this.props.onGetRepos}
                    loginData={this.props.userName} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        input: state.inputValue,
        name: state.name,
        userName: state.userName,
        description: state.userDescription,
        avatar: state.avatar,
        repoLink: state.userRepoLink,
        userReposList: state.userRepoLink,
        error: state.error,
        errorMessage: state.errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInputChange: (e) => dispatch(inputHandler(e.target.value)),
        onFetchUser: (e) => dispatch(fetchUser(e.preventDefault())),
        onCloseError: () => dispatch(ressetError()),
        onGetRepos: () => dispatch(getUserRepos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);