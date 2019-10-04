import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


class HomeListItem extends Component {
    render() {
        return (
            <div className="HomeListItem">
                <h3>{this.props.movie.title}</h3>
                <img 
                    src={this.props.movie.poster} 
                    alt={this.props.movie.title}
                    onClick={()=>this.props.seeDetails(this.props.movie)}
                />
                <p>{this.props.movie.description}</p>
            </div>
        );
    }
}

export default connect()(HomeListItem);