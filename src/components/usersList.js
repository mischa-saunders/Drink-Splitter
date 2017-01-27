const React = require('react')
const { connect } = require('react-redux')
const { link } = require('react-router')
const _ = require('lodash')
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import { VictoryBar, VictoryChart } from 'victory';

const UsersList = (props) => {

  const users = props.users
  const data = [
    {days: 1, people: 5},
    {days: 2, people: 20},
    {days: 3, people: 12},
    {days: 4, people: 15},
    {days: 5, people: 8},
    {days: 6, people: 4},
    {days: 7, people: 9}
  ]
  return (
    <div>
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
    <div className='barChart'>
    <VictoryChart>
        <VictoryBar
          data={data}
          x="days"
          y="people"
        />
      </VictoryChart>
      </div>
    </div>
  )
}

module.exports = connect((state) => state)(UsersList)
