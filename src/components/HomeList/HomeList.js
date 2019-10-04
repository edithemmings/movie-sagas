import React, { Component } from 'react';
import HomeListItem from '../HomeListItem/HomeListItem'
import { connect } from 'react-redux'

class HomeList extends Component {
    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_MOVIES'})
    }
    seeDetails = (movie) => {
        this.props.dispatch({ type: 'GET_SELECTED_MOVIE', payload: movie })
        this.props.history.push('/details/1')
    }
    render() {
        return (
            <div className="HomeList">
                {this.props.reduxStore.movies.map(movie => {
                    return <HomeListItem 
                        key={movie.id}
                        movie={movie} 
                        seeDetails={this.seeDetails}
                    />
                })}
            </div>
        );
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
})
export default connect(mapStateToProps)(HomeList);