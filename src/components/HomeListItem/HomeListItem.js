import React, { Component } from 'react';

class HomeListItem extends Component {
    render() {
        return (
            <div className="HomeListItem">
                <h3>{this.props.movie.title}</h3>
                <img src={this.props.movie.poster} />
                <p>{this.props.movie.description}</p>
            </div>
        );
    }
}

export default HomeListItem;