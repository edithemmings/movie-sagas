import React, { Component } from 'react';
import { connect } from 'react-redux'
import Axios from 'axios';

class Edit extends Component {
    state = {
        movie: {}
    }
    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_MOVIES' })
        this.props.reduxStore.movies.forEach(movie => {
            if (movie.id == this.props.match.params.id){
                this.setState({
                    movie: movie
                })
            }
        })
    }
    handleInputChange = (event, input) => {
        this.setState({
            movie: {
                ...this.state.movie,
                [input]: event.target.value
            } 
        })
    }
    handleSave = () => {
        Axios.put(`/movies/${this.state.movie.id}`, this.state.movie)
            .then(response => {
                let thisId = this.state.movie.id
                this.props.dispatch({ type: 'GET_SELECTED_MOVIE', payload: {id: thisId}})
                this.props.history.push('/details/' + thisId)
            }).catch(error => {
                console.log('error updating movie', error)
            })
    }
    handleCancel = (id) => {
        this.props.history.push('/details/'+id)
    }
    render() {
        return (
            <div className="Edit">
                <p>Title</p>
                <input 
                    value={ this.state.title}
                    onChange={(e)=>this.handleInputChange(e, 'title')}
                />
                <p>Description</p>
                <textarea 
                    value={this.state.description} 
                    onChange={(e) => this.handleInputChange(e, 'description')}
                />
                <br/>
                <button onClick={this.handleSave}>Save</button>
                <button onClick={this.handleCancel}>Cancel</button>
            </div>
        );
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
})
export default connect(mapStateToProps)(Edit);