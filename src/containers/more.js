import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import store from "../store";
import { setDetails } from "../reducer/redirect";
import { Redirect } from "react-router-dom";

// const mapDispatchToProps = dispatch => bindActionCreators({
//   setName,
//   changePage: () => push('/about-us')

// }, dispatch)

// const mapStateToProps = state => {
//   return {

//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    setDetails: (phone,email) => dispatch(setDetails(phone,email))
  };
}
const mapStateToProps = state => {
  return {
    state: state
  };
};

class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    this.props.setDetails(this.state.phone, this.state.email);

    // var isNameValid = this.state.name.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
    // var isNameValid = this.state.name.match(
    //   /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/
    // );

    // if (this.state.name) {
    //   this.setState({ isValue: true });
    //   // alert('A name entered is:' + this.state.name);
    //   if (isNameValid) {
    //     this.setState({ isValid: true });
    //     this.setState({ firstPage: true });
    //   } else {
    //     this.setState({ error: "Please Enter valid name" });
    //   }
    // } else {
    //   this.setState({ error: "You must enter name to continue" });
    // }
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    // if(this.state.isValue && this.state.isValid){
    //     return this.state.changePage()
    // }
    if (!this.state.state.redirect.isValidHome) {
      return <Redirect to="/" />;
    }
    return (
      <div className="multi-input">
        <div className="form-group-label">
          <label className="label">Mobile Number</label>
          <p>
            <input
              className="input circular"
              placeholder="Phone Number"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            ></input>
          </p>
        </div>
        <div className="form-group-label">
        <label className="label">Address</label>

        <p>
          <input
            className="input circular"
            placeholder="Address"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          ></input>
        </p>
        </div>
        
        <label className="error_message">{this.state.error}</label>
        <a className="button circular" onClick={this.handleSubmit}>
          Continue
        </a>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(More);
