import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

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

class Tags extends Component {

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
        <div style={{display: 'inline-flex', alignItems:'center', height: '100vh', 'flex-direction': 'column',  marginLeft: '40%'}}>
          <h2 style={{color: '#6646EE'}}>Tags</h2>
          <input type="text" placeholder="Search" value={this.state.search} onChange={this.handleChangeTag} style={{width: '100%', borderRadius: 8 , height: 30}} />
          <h6>Tap on what you're interested in, </h6>
          <h6>and we'll do the rest!</h6>
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
      )
  }

}
export default Tags;
