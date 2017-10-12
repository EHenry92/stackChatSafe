import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import { connect } from 'react-redux';


// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
// const RANDOM_CHANNEL = '/channels/1';
// const GENERAL_CHANNEL = '/channels/2';
// const DOGS_CHANNEL = '/channels/3';
// const LUNCH_CHANNEL = '/channels/4';

class ChannelList extends Component {

  constructor () {
    super();
    this.state = store.getState();
  }

  // replaced by mapStateToProps
  // componentDidMount () {
  //   this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  // }
  //
  // componentWillUnmount () {
  //   this.unsubscribe();
  // }

  render () {

    const { messages } = this.state;

    return (
      <ul>
        this.state.channels.map(channel => {

          <li>
            console.log(channels)
            <NavLink to={RANDOM_CHANNEL} activeClassName="active">
              <span>really_random</span>
              <span className="badge">{ messages.filter(message => message.channelId === 1).length }</span>
            </NavLink>
          </li>
        })

      </ul>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    channels: state.channels,
    messages: state.messages
  };
};

/** Write your `connect` component below! **/
export default ChannelListContainer = connect(mapStateToProps)(ChannelList);
