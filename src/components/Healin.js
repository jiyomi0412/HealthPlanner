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
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birth}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.height}</TableCell>
                <TableCell>{this.props.weight}</TableCell>
            </TableRow>
        )
    }
}
class HealinInfo extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.id}. {this.props.name}</h2>
            </div>
        )
    }
}
class HealinProf extends React.Component{
    render(){
        return(
            <div>
                <p>생년월일 : {this.props.birth} </p>
                <p>성별 :    {this.props.gender}</p> 
                <p>신장 : {this.props.height}</p>                
                <p>몸무게 : {this.props.weight}</p>                
            </div>
        )
    }
}
export default Healin;