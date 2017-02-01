const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const { RaisedButton } = require('material-ui')
const request = require('superagent')

const AuthErr = require('./AuthErr')




class Login extends React.Component {

  handleClick() {
    const { dispatch } = this.props

    const email = this.refs.email.value
    const password = this.refs.passwordEntry.value

    request.post('api/v1/users/login')
      .send({ email, password })
      .end((err, response) => {
        if (err) {
          dispatch({type: 'AUTH_ERR', payload: 'Invalid email/password'})
        } else if(response.body.login){
          this.props.router.push(`users/${response.body.id}/profile`)
        }else{
          dispatch({type: 'AUTH_ERR', payload: response.body.error})
        }
      })
  }


  render() {
    const { dispatch } = this.props

    return (
      <div>
        <form>
          <div>
              Email:
              <input className='homePageButton' type='text' ref='email' placeholder='Email' />
              Password:
              <input className='homePageButton' type='password' ref='passwordEntry' placeholder='Password' />
          </div>
          <RaisedButton onClick={this.handleClick.bind(this)} >Login </RaisedButton>
          <AuthErr  {...this.props} />
        </form>
      </div>
    )
  }
}

module.exports = connect((state) => state)(Login)
// const Login = (props) => {
//   const { dispatch } = props
//   return (
//     <div>
//       <form>
//         <div>
//             Name:
//             <input className='homePageButton' type='text' ref='loginName' placeholder='User Name' />
//             Password:
//             <input className='homePageButton' type='text' placeholder='Password' />
//         </div>
//         <RaisedButton onClick={() => dispatch({type: 'LOGIN', payload: this.refs.loginName})} >Login </RaisedButton>
//       </form>                                                            ^
//     </div>                                                              can't use this.refs with stateless component (functional)
//   )
// }

// const Login = React.createClass({
//   render: function () {
//     const { dispatch } = this.props
//
//     return (
//       <div>
//         <form>
//           <div>
//               Name:
//               <input className='homePageButton' type='text' ref='loginName' placeholder='User Name' />
//               Password:
//               <input className='homePageButton' type='text' placeholder='Password' />
//           </div>
//           <RaisedButton onClick={() => dispatch({type: 'LOGIN', payload: this.refs.loginName.value})} >Login </RaisedButton>
//         </form>
//       </div>
//     )
//   }
// })
