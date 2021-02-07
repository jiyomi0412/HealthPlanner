import React, {Component} from 'react';
import Healin from './components/Healin'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

const styles = theme => ({
  root: { 
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});
  
class App extends Component {
  state = {
    healins: '',
    completed : 0
  } 
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({healins: res}))
    .catch(err => console.log(err));
  }
  componentWillUnmount() {
    clearInterval(this.timer);  
  }
 
  callApi = async () => {
    const response = await fetch('/api/healins');
    const body = await response.json();
    return body;
  }
  progress = () => {
    const { completed } = this.state;  
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };
  render(){ 
    const { classes } = this.props;
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
              return <Healin key = {c.ID} ID = {c.ID} HNAME = {c.HNAME} 
                            BIRTH = {c.BIRTH} GENDER = {c.GENDER}
                            HEIGHT = {c.HEIGHT} WEIGHT = {c.WEIGHT}/>
            }):
            <TableRow>
              <TableCell colSpan="6" align="center">
              <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
              </TableCell>
              </TableRow>
            }        
          </TableBody> 
        </Table>
      </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);


