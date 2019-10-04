import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class Details extends Component {
    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_MOVIES' })
    }
    handleEdit = (id) => {
        this.props.history.push('/edit/' + id)
    }
    render() {
        return (
            <div className="Details">
                
                {this.props.reduxStore.movies.map(movie => {
                    console.log(movie)
                    if (movie.id == this.props.match.params.id){
                        return <div>
                            <Link to='/'><button>Back to List</button></Link>
                            <button onClick={this.handleEdit(movie.id)}>Edit</button>
                            <h3>{movie.title}</h3>
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                onClick={this.seeDetails}
                            />
                            <p>{movie.description}</p>
                            <p>Genres: {movie.name}</p>

                        </div>
                    }
                })}
            </div>
        );
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
})
export default connect(mapStateToProps)(Details);