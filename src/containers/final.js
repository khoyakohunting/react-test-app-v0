import React from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { resetState, setPageError } from '../reducer/redirect'
import { Redirect } from 'react-router-dom'
import store from "../store";




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
        resetState: name => dispatch(resetState()),
    setPageError: (message) => dispatch(setPageError(message))

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
      this.startTimer = this.startTimer.bind(this);
    this.handlePageError = this.handlePageError.bind(this);

    //   this.countDown = this.countDown.bind(this);
      
  }

  startTimer(event){
      if(!this.state.secondsLeft){
        this.setState({
            secondsLeft: 10
          });
      
      this.incrementer = setInterval(() => {
        this.setState({
          secondsLeft: (this.state.secondsLeft - 1)
        });
        if (this.state.secondsLeft === 0) {
          clearInterval(this.incrementer);
                  this.props.resetState()
        store.dispatch(push('/'));
        }
      }, 1000);
      event.preventDefault();
    }
  }
  handlePageError(message){
    this.props.setPageError(message)
}

  render(){
      
        if(!this.state.state.redirect.isValidMore){
        this.handlePageError('Opps! You missed More Info page')
          return <Redirect to='/more' />
        }

      return (
          <div>
              <div className="card">
                  <p>
                      <label>Full Name</label>
                      <h2>{this.state.state.redirect.name}</h2>
                  </p>
                  <p>
                      <label>Mobile Number</label>
                      <h2>{this.state.state.redirect.phone}</h2>
                  </p>
                  <p>
                      <label>Email Address</label>
                      <h2>{this.state.state.redirect.email}</h2>
                  </p>
                <a className="button circular" onClick={this.startTimer}>{this.state.secondsLeft} {this.state.secondsLeft>0 ? 'Seconds To Finish' : 'Finish'}</a>
              </div>
          </div>
      );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(More)