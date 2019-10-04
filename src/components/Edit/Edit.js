import React, { Component } from 'react';
import { connect } from 'react-redux'
import Axios from 'axios';

class Edit extends Component {
    state = {
        movie: this.props.reduxStore.movieDetails[0]
    }
    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_SELECTED_MOVIE', payload: this.props.match.params })
        this.setState({
            movie: this.props.reduxStore.movieDetails[0]
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
    handleCancel = () => {
        this.props.history.push('/details/' + this.props.reduxStore.movieDetails[0].id)
    }
    render() {
        return (
            <div className="Edit">
                <p>Title</p>
                <input 
                    value={this.state.movie.title}
                    onChange={(e)=>this.handleInputChange(e, 'title')}
                />
                <p>Description</p>
                <textarea 
                    value={this.state.movie.description} 
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