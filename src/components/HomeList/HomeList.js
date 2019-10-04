import React, { Component } from 'react';
import HomeListItem from '../HomeListItem/HomeListItem'
import { connect } from 'react-redux'

class HomeList extends Component {
    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_MOVIES'})
    }
    seeDetails = (movie) => {
        this.props.dispatch({ type: 'GET_SELECTED_MOVIE', payload: movie })
        this.props.history.push('/details/'+ movie.id)
    }
    render() {
        return (
            <div className="HomeList">
                <h1>Movie Sagas</h1>
                <div className='flex'>
                    {this.props.reduxStore.movies.map(movie => {
                        return <HomeListItem 
                            key={movie.id}
                            movie={movie} 
                            seeDetails={this.seeDetails}
                        />
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
})
export default connect(mapStateToProps)(HomeList);