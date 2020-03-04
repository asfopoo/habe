import React, { Component } from 'react';
import Navbar from "../../components/Navbar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "./styles";
import axios from 'axios';

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
      search: '',
    }
    this.handleChangeTag = this.handleChangeTag.bind(this);
    this.finished = this.finished.bind(this);
  }

  async finished () {
    let token = localStorage.getItem("token");
    let userId = localStorage.getItem("userId");
    let interests = [];
    // eslint-disable-next-line array-callback-return
    this.state.names.map(name => {
      if(name.color === "#6646EE"){
        interests.push(name);
      }
    });
    if(interests) {
      await axios.post('http://localhost:3333/interests', {
        userId: userId,
        interests: interests,
        jwt: token,
      })
        .then(response => {
          window.location = '/home';
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else{
      window.location = '/home';
    }
  };

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
      <div style={styles.mainContainer}>
        <Navbar> </Navbar>

        <div style={styles.container}>

          <h1 style={styles.h1}>Tags</h1>
          <h6 style={styles.h6}>Tap on what you're interested in, <br></br>and we'll do the rest!</h6>
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
          <Button variant="contained" style={styles.button} onClick={this.finished}  >
            Finished!
          </Button>
        </div>
      </div>
    )
  }

}
export default Search;
