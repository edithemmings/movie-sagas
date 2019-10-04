import React, { Component } from 'react';
import HomeListItem from '../HomeListItem/HomeListItem'
import { connect } from 'react-redux'

class HomeList extends Component {
    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_MOVIES'})
    }
    render() {
        return (
            <div className="HomeList">
                {this.props.reduxStore.movies.map(movie => {
                    return <HomeListItem movie = {movie} />
                })}
            </div>
        );
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
})
export default connect(mapStateToProps)(HomeList);