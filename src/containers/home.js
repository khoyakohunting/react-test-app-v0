import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import store from '../store'
import { setName } from '../reducer/redirect'
import { Redirect } from 'react-router-dom'


// const mapDispatchToProps = dispatch => bindActionCreators({
//   setName,
//   changePage: () => push('/about-us')

// }, dispatch)

// const mapStateToProps = state => {
//   return {

//   };
// }

function mapDispatchToProps(dispatch){
    return{
        setName: name => dispatch(setName(name))
    }
}
const mapStateToProps = state =>{
    return{
        state: state
    }
}


class Home extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          name: '',
          isValue: false,
          isValid: false,
          isValidHome: false,
          error: 'eg. Prakash Gharti'
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event){
      // var isNameValid = this.state.name.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
      var isNameValid = this.state.name.match(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/);

      if(this.state.name){
          this.setState({isValue: true});
          // alert('A name entered is:' + this.state.name);
          if(isNameValid){
              this.setState({isValid: true});
              this.setState({firstPage: true});
              this.props.setName(this.state.name);
              store.dispatch(push('/more'));
          }
          else{
              this.setState({error: 'Please Enter valid name'});
          }
      }
      else{
          this.setState({error: 'You must enter name to continue'});
      }
      event.preventDefault();
  }
  handleChange(event){
      this.setState({name: event.target.value});
  }
  render(){
      // if(this.state.isValue && this.state.isValid){
      //     return this.state.changePage()
      // }
      console.log(this.props)

      return (
          <div>
            <div className="page_error">{this.props.state.redirect.pageError}</div>
              <label className="label">Your Name</label>

              <div className="form-group">
                  <p>
                    <input className="input rounded" placeholder="Please enter your name" name="name" value={this.state.name} onChange={this.handleChange}></input>

                  </p>
              <a className="button rounded" onClick={this.handleSubmit}>Continue</a> 
              </div>             
              <label className="error_message">{this.state.error}</label>
          </div>
      );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)