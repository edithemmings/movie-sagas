import React, { Component } from 'react';

class HomeListItem extends Component {
    seeDetails = () => {
        this.props.history.push('/movies/' + this.props.movie.id)
    }
    render() {
        return (
            <div className="HomeListItem">
                <h3>{this.props.movie.title}</h3>
                <img 
                    src={this.props.movie.poster} 
                    alt={this.props.movie.title}
                    onClick={this.seeDetails}
                />
                <p>{this.props.movie.description}</p>
            </div>
        );
    }
}

export default HomeListItem;