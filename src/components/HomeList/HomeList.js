import React, { Component } from 'react';
import HomeListItem from '../HomeListItem/HomeListItem'

class HomeList extends Component {
    render() {
        return (
            <div className="HomeList">
                <HomeListItem/>
            </div>
        );
    }
}

export default HomeList;