import React, {Component} from 'react';
import Healin from './components/Healin'
import './App.css';

const healins = [
  {
  'id':'1',
  'name':'최지영',
  'birth':'940412',
  'gender':'여자',
  'height':'169cm',
  'weight':'55kg'
  },
  {
    'id':'2',
    'name':'최지영',
    'birth':'940412',
    'gender':'여자',
    'height':'169cm',
    'weight':'55kg'
  },
  {
    'id':'3',
    'name':'최지영',
    'birth':'940412',
    'gender':'여자',
    'height':'169cm',
    'weight':'55kg'
  } 
]

function App() {
  return (
    <div>
      {healins.map(c=>{
        return <Healin key = {c.id} id = {c.id} name = {c.name} 
                       birth = {c.birth} gender = {c.gender}
                       height = {c.height} weight = {c.weight}/>
      })}         
    </div>
  );
}

export default App;
