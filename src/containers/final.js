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


class More extends React.Component{
  constructor(props){
      super(props);
      this.state = props;
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
      console.log(this.state.state.redirect.isValidHome);
      if(this.state.state.redirect.isValidMore){
        if(!this.state.state.redirect.isValidMore){
          return <Redirect to='/more' />
        }
      }
      else{
        return <Redirect to='/' />
      }
      
      return (
          <div>
              <input name="name" value={this.state.name} onChange={this.handleChange}></input>
              <input name="email" value={this.state.email} onChange={this.handleChange}></input>
              <label>{this.state.error}</label>
              <button onClick={this.handleSubmit}>Continue</button>
          </div>
      );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(More)