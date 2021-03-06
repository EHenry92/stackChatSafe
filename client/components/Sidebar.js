import React, { Component } from 'react';
import ChannelList from './ChannelList';
import store from '../store';

export default class Sidebar extends Component {

  render () {
    return (
      <sidebar>
        <div className="sidebar-header">
          <h3 href="#">
            <div>Stack Chat</div>
            <i alt="Brand" className="glyphicon glyphicon-comment">
            </i>
          </h3>
        </div>
        <h5>Channels</h5>
        <ChannelList />
      </sidebar>
    );
  }
}
