import React, { Component } from "react";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { connect } from "react-redux";
// import action
import { fetchSmurf, addNew } from "../actions/index";

class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  componentDidMount() {
    // call our action
    this.props.fetchSmurf();
  }

  changeHandle = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  addNew = event => {
    event.preventDefault();

    const newText = this.state;
    // Calling the action creator
    this.props.addNew(newText);
    // resetting the form after it submits
    this.setState({
      name: "",
      age: "",
      height: ""
    });
    console.log({ newText });
  };

  render() {
    if (this.props.fetchingSmurfs) {
      return <h2>Retrieving smurf, please wait...</h2>;
    }
    return (
      <div className='App'>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => (
          <p>
            Name:{smurf.name} <br /> Age:{smurf.age} <br /> Height:
            {smurf.height}
          </p>
        ))}

        {/* // add smurf */}
        <form>
          <input
            type='text'
            name='name'
            onChange={this.changeHandle}
            value={this.state.name}
            placeholder='smurf name'
          />
          <input
            type='text'
            name='age'
            onChange={this.changeHandle}
            value={this.state.age}
            placeholder='smurf age'
          />
          <input
            type='text'
            name='height'
            onChange={this.changeHandle}
            value={this.state.height}
            placeholder='smurf height'
          />
          <button className='add-btn' onClick={this.addNew}>
            Add to List
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurf, addNew }
)(App);
