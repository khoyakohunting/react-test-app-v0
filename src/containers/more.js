import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import store from "../store";
import { setDetails, setPageError } from "../reducer/redirect";
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
    setDetails: (phone,email) => dispatch(setDetails(phone,email)),
    setPageError: (message) => dispatch(setPageError(message))
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
    this.handlePageError = this.handlePageError.bind(this);
  }
  handleSubmit(event) {
    if(this.state.email){
     var isEmailValid = this.state.email.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);

      this.setState({isEmailValue: true});
      if(isEmailValid){
        this.setState({ isValidEmail: true });
      }
      else{
        this.setState({ email_error: "Please Enter Valid Email"});
      }
    }
    else{
      this.setState({ email_error: "You must enter email to continure"});
    }
    if(this.state.phone){
     var isPhoneValid = this.state.phone.match(/^(\+\d{1,3}[- ]?)?\d{10}$/);
      this.setState({isPhoneValue: true});
      if(isPhoneValid){
        this.setState({ isValidPhone: true });
      }
      else{
        this.setState({ email_error: "Please Enter Valid Phone"});
      }
    }
    else{
      this.setState({ email_error: "You must enter phone to continure"});
    }

    if(this.state.isValidPhone && this.state.isValidEmail){
      this.setState({ isValidMore: true })
      this.props.setDetails(this.state.phone, this.state.email);
      store.dispatch(push('/final'));
    }
    event.preventDefault();
  }
  handlePageError(message){
      this.props.setPageError(message)
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    // if(this.state.isValue && this.state.isValid){
    //     return this.state.changePage()
    // }
    if (!this.state.state.redirect.isValidHome) {
      this.handlePageError('Opps! You missed First page')
      return <Redirect to="/" />;
    }
    return (
      <div className="multi-input">
        <div className="page_error">{this.state.state.redirect.pageError}</div>
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
          <label>{ this.state.phoneError }</label>
        </div>
        <div className="form-group-label">
        <label className="label">Email</label>

        <p>
          <input
            className="input circular"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          ></input>
        </p>
        <label>{ this.state.emailError }</label>
        </div>
        
        <label className="error_message">{this.state.email_error}</label>
        <a className="button circular" onClick={this.handleSubmit}>
          Done
        </a>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(More);
