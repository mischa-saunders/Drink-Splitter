const React = require('react')
const { connect } = require('react-redux')
const { link } = require('react-router')
const _ = require('lodash')
const request = require('superagent')
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

class UsersList extends React.Component {
  render(){
    const { users } = this.props


    return (

      <Table>
      <TableHeader>
      <TableRow>
      <TableHeaderColumn>ID</TableHeaderColumn>
      <TableHeaderColumn>Name</TableHeaderColumn>
      <TableHeaderColumn>Latest night out</TableHeaderColumn>
      <TableHeaderColumn>Number of nights out</TableHeaderColumn>
      <TableHeaderColumn>Total owed</TableHeaderColumn>
      <TableHeaderColumn>Total owing</TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody>
      {_.map(users, (user) => {
        return (
          <TableRow>
          <TableRowColumn>{user.id}</TableRowColumn>
          <TableRowColumn>{user.name}</TableRowColumn>
          <TableRowColumn>01/01/2017</TableRowColumn>
          <TableRowColumn>10</TableRowColumn>
          <TableRowColumn>100 $</TableRowColumn>
          <TableRowColumn>0 $</TableRowColumn>
          </TableRow>
        )
      })}
      </TableBody>
      </Table>
    )

  }
}

module.exports = connect((state) => state)(UsersList)
