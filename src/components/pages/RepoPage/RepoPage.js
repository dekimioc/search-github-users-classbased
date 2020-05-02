import React, { Component } from 'react';
import RepoCard from '../../components/RepoCard/RepoCard';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserRepos } from '../../redux/actions';

import './RepoPage.scss';
class RepoPage extends Component {

    componentDidMount() {
        this.props.onGetRepo();
    }

    render() {
        return (
            <div className="repoPageMainContainer">
                <h1>{this.props.userRepos.length === 0 ? 'No repositories' : "Repositories for selected user"}</h1>
                <div className="reposCardContainer">
                    {this.props.userRepos && this.props.userRepos.map(repo => <RepoCard
                        repoDescription={repo.description}
                        dateCreated={repo.created_at}
                        forks={repo.forks_count}
                        link={repo.html_url}
                        key={repo.id}
                        licenceType={repo.license}
                        repoName={repo.name}
                        stargazers={repo.stargazers_count}
                        watchers={repo.watchers_count} />
                    )
                    }
                </div>
                <Link to="/search-github-users-classbased" className="back-button">Back to Search Page</Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userRepos: state.userRepos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetRepo: (e) => dispatch(getUserRepos()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RepoPage);