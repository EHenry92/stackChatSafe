import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { writeNewChannel, fetchNewChannel } from '../store';


function NewChannelEntry (props) {
  return (
    <form onSubmit={props.submitHandler}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input value={props.newChannelEntry} onChange={props.handleChange} className="form-control" type="text" name="channelName" placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
const mapStateToProps = function (state, ownProps) {
  return {
    newChannelEntry: state.newChannelEntry,
    history: ownProps.history
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChange (evt) {
      dispatch(writeNewChannel(evt.target.value))
    },
    submitHandler (evt) {
      evt.preventDefault();
      const name = evt.target.channelName.value;
      dispatch(fetchNewChannel({ name }, ownProps.history))
      dispatch(writeNewChannel(''))
    }
  };
};

const NewChannelEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);

export default NewChannelEntryContainer;
