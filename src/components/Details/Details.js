import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class Details extends Component {
    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_SELECTED_MOVIE', payload: this.props.match.params })
    }
    handleEdit = (id) => {
        this.props.history.push('/edit/' + id)
    }
    render() {
        return (
            <div className="Details">

                <Link to='/'><button>Back to List</button></Link>
                <button onClick={() => this.handleEdit(this.props.reduxStore.movieDetails[0].id)}>Edit</button>
                <h3>{this.props.reduxStore.movieDetails[0].title}</h3>
                <img
                    src={this.props.reduxStore.movieDetails[0].poster}
                    alt={this.props.reduxStore.movieDetails[0].title}
                    onClick={this.seeDetails}
                />
                <p>{this.props.reduxStore.movieDetails[0].description}</p>
                <h4>Genres:</h4>
                <ul>
                    {this.props.reduxStore.movieDetails.map(movie => {
                        return <li>{movie.name}</li>
                    })}
                </ul> 
            </div> 
        );
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
})
export default connect(mapStateToProps)(Details);