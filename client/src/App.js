import React, {Component} from 'react';
import Healin from './components/Healin'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import './App.css';


class App extends Component {
  state = {
    healins: ''
  } 
  componentDidMount() {
    this.callApi()
    .then(res => this.setState({healins: res}))
    .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/healins');
    const body = await response.json();
    return body;
  }
  render(){ 
    return (
      <div>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>키</TableCell>
              <TableCell>몸무게</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.state.healins ? this.state.healins.map(c=>{
            return <Healin key = {c.id} id = {c.id} name = {c.name} 
                          birth = {c.birth} gender = {c.gender}
                          height = {c.height} weight = {c.weight}/>
          }):''}        
          </TableBody> 
        </Table>
      </Paper>
      </div>
    );
  }
}

export default App;
