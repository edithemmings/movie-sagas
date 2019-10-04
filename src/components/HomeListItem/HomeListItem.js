import React, { Component } from 'react';
import { connect } from 'react-redux'


class HomeListItem extends Component {
    render() {
        return (
            <div className="HomeListItem">
                <img 
                    src={this.props.movie.poster} 
                    alt={this.props.movie.title}
                    onClick={()=>this.props.seeDetails(this.props.movie)}
                />
                <h3>{this.props.movie.title}</h3>
            </div>
        );
    }
}

export default connect()(HomeListItem);