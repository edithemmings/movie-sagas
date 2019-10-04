import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Edit extends Component {
    state = {
        title: this.props.reduxStore.movieDetails.title,
        description: this.props.reduxStore.movieDetails.description

    }
    componentDidMount = () => {

    }
    handleInputChange = (event, input) => {
        this.setState({
            ...this.state,
            [input]: event.target.value
        })
    }
    handleSave = () => {
        Axios.put(`/movies/${this.props.reduxStore.movieDetails.id}`, this.state)
            .then(response => {
                this.props.dispatch({ type: 'GET_SELECTED_MOVIE', payload: {id: this.props.reduxStore.movieDetails.id}})
                this.props.history.push('/details/1')
            }).catch(error => {
                console.log('error updating movie', error)
            })
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
                <Link to='/details/1'><button>Cancel</button></Link>
            </div>
        );
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
})
export default connect(mapStateToProps)(Edit);