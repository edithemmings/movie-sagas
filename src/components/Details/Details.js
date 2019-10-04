import React, { Component } from 'react';
import { connect } from 'react-redux'

class Details extends Component {
    render() {
        return (
            <div className="Details">
                <p>edith</p>
                <h3>{this.props.reduxStore.movieDetails.title}</h3>
                <img
                    src={this.props.reduxStore.movieDetails.poster}
                    alt={this.props.reduxStore.movieDetails.title}
                    onClick={this.seeDetails}
                />
                <p>{this.props.reduxStore.movieDetails.description}</p>
            </div>
        );
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
})
export default connect(mapStateToProps)(Details);