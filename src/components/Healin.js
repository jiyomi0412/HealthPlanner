import React from 'react';

class Healin extends React.Component{
    render(){
        return(
            <div>
                <HealinInfo id = {this.props.id} 
                            name = {this.props.name}/>
                <HealinProf birth = {this.props.birth} 
                            gender = {this.props.gender} 
                            height = {this.props.height}
                            weight = {this.props.weight} />
            </div>
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