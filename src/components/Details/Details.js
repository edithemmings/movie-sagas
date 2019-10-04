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
                <div className='detail-buttons'>
                    <Link to='/'><button>Back to List</button></Link>
                    <button onClick={() => this.handleEdit(this.props.reduxStore.movieDetails[0].id)}>Edit</button>
                </div>
                <h2>{this.props.reduxStore.movieDetails[0].title}</h2>
                <div className='details-content'>
                    <img
                        src={this.props.reduxStore.movieDetails[0].poster}
                        alt={this.props.reduxStore.movieDetails[0].title}
                        onClick={this.seeDetails}
                    />
                    <p>{this.props.reduxStore.movieDetails[0].description}</p>
                </div>
            <div className='flex'>
                <ul>
                    {this.props.reduxStore.movieDetails.map(movie => {
                        return <li>{movie.name}</li>
                    })}
                </ul>
            </div>
            </div > 
        );
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
})
export default connect(mapStateToProps)(Details);