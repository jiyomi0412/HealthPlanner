import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

class Healin extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.ID}</TableCell>
                <TableCell>{this.props.HNAME}</TableCell>
                <TableCell>{this.props.BIRTH}</TableCell>
                <TableCell>{this.props.GENDER}</TableCell>
                <TableCell>{this.props.HEIGHT}</TableCell>
                <TableCell>{this.props.WEIGHT}</TableCell>
            </TableRow>
        )
    }
}
class HealinInfo extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.ID}. {this.props.HNAME}</h2>
            </div>
        )
    }
}
class HealinProf extends React.Component{
    render(){
        return(
            <div>
                <p>생년월일 : {this.props.BIRTH} </p>
                <p>성별 :    {this.props.GENDER}</p> 
                <p>신장 : {this.props.HEIGHT}</p>                
                <p>몸무게 : {this.props.WEIGHT}</p>                
            </div>
        )
    }
}
export default Healin;