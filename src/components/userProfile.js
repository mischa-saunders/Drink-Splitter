const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { FlatButton } = require('material-ui')

const ShowPastNights = require('./showPastNights')


const UserProfile = (props) => {
  const { userName, amountOwed, amountOwing, showingPastNights } = props
  return (
    <div>
      <h1>
        {userName + "'s"} profile
      </h1>
      <FlatButton>
        + Start New Night
      </FlatButton>
      <div>
        Amount Owed: ${amountOwed/100}<br/><br/>
        Amount Owing: ${amountOwing/100}
      </div>
      <ShowPastNights showingPastNights={showingPastNights} />
    </div>
  )
}


module.exports = connect((state) => state)(UserProfile)
