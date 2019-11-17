import React, { Component } from 'react';
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Navbar from "./Navbar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { FixedSizeList } from 'react-window';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const Tag = ({
               tagger,
               index,
               onClick,
               color,
             }) => (
  <ListItem index={index}>
    <Button variant="contained" style={{backgroundColor: color, color: '#FFFFFF', width: '100%'}} onClick={onClick}  >
      {tagger}
    </Button>
  </ListItem>
);

class Search extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      names: [{'name':'Electronics' , 'color': '#1F1F1F'}, {'name':'WoodWorking', 'color': '#1F1F1F'}, {'name':'Circuits', 'color': '#1F1F1F'}, {'name':'Radio Telescopes', 'color': '#1F1F1F'}, {'name':'Baking', 'color': '#1F1F1F'}, {'name':'Cats', 'color': '#1F1F1F'}, {'name':'Coffee', 'color': '#1F1F1F'}, {'name':'Sleep', 'color': '#1F1F1F'}, {'name':'Functional Programming', 'color': '#1F1F1F'}, {'name':'Iphones', 'color': '#1F1F1F'}, {'name':'Android', 'color': '#1F1F1F'}, {'name':'Motts Applesauce', 'color': '#1F1F1F'}, {'name':'Fishing', 'color': '#1F1F1F'}, {'name':'Hunting', 'color': '#1F1F1F'}, {'name':'Knitting', 'color': '#1F1F1F'}, {'name':'Crafts', 'color': '#1F1F1F'} ],
      color: '#1F1F1F',
      search: ''
    }
    this.handleChangeTag = this.handleChangeTag.bind(this);
  }

  handlePush = name =>{
    if(name.color === '#1F1F1F'){
      name.color = '#6646EE';
    }
    else{
      name.color = '#1F1F1F';
    }
    this.forceUpdate();
  };

  handleChangeTag(event) {
    this.setState({search: event.target.value});
  }

  render(){
    return (
      <div style={{ textAlign: 'center'}}>
        <Navbar> </Navbar>
        
        <div style={{display: 'inline-flex', alignItems:'center', height: '100vh', 'flex-direction': 'column', fontFamily: 'Roboto, sans-serif'}}>
          
          <h1 style={{color: '#6646EE', fontSize: '50px'}}>Tags</h1>
          <h6 style={{marginTop: '0px', fontFamilyL: 'Roboto, sans-serif', color: '#646464', fontSize: '14px'}}>Tap on what you're interested in, <br></br>and we'll do the rest!</h6>
                <List style={{height:'50%', overflow: 'auto'}}>
            {this.state.names.map((name, index) => {
              return (
                <Tag
                  tagger={name.name}
                  index={index}
                  color={name.color}
                  onClick={() => this.handlePush(name)}
                />)
            })}
          </List>
          <Button variant="contained" style={{backgroundColor: '#6646EE', color: '#FFFFFF', width: '100%', marginTop: 10}} href={'/home'}  >
            Finished!
          </Button>
        </div>
      </div>
    )
  }

}
export default Search;
