import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
// const RANDOM_CHANNEL = '/channels/1';
// const GENERAL_CHANNEL = '/channels/2';
// const DOGS_CHANNEL = '/channels/3';
// const LUNCH_CHANNEL = '/channels/4';

class ChannelList extends Component {

  constructor (props) {
    super(props);
    // this.state = store.getState();
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

    const { messages, channels } = this.props;
    return (
      <ul>
        {
        channels.length && channels.map(channel => {
          return (
          <li key={channel.id}>
            <NavLink to={`/channels/${channel.id}`} activeClassName="active">
              <span># {channel.name}</span>
              <span className="badge">{ messages.filter(message => message.channelId === 1).length }</span>
            </NavLink>
          </li>
          )
        })
      }
        <li>
          <NavLink to="/new-channel">Create a channel...</NavLink>
        </li>
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

const channelListWithRouter = withRouter(ChannelList);


const ChannelListContainer = connect(mapStateToProps)(ChannelList);
export default withRouter(ChannelListContainer)
