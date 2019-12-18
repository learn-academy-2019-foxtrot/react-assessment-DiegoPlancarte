// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc.

import React from 'react';

class NewComponent extends React.Component{
  constructor(){
    super()
    this.state ={
      info: "I am a component!"
    }
  }

  render(){
    return(
        <div>
          <h1>{ this.state.info }</h1>
        </div>
      )
  }
}

export default NewComponent;

// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same.

var names = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

for(let i=0; i<names.length; i++){
  console.log(`${names[i]} is ${names[i].length} characters long.`)
}

names.map((value, i) => {
  console.log(`${value} is ${value[i].length} characters long.`)
})

// 3. Destructure the following variables out of state.

this.state = {
  name: "Dracula",
  home: "Transylvania",
  dislikes: ["mirrors", "garlic", "wooden stakes"]
}

let { name, home, dislike } = this.state

// 4. Write a React method that would add one and update the state of the count each time the method is called.

this.state = {
  count: 0
}

const increment = () => {
  const { count } = this.state
  let newCount = count++
  this.setState({count: newCount})
}


// 5. There are four mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

class Recipes extends Component{
  constructor(props){
    super(props)
    this.state = {
      recipes:[
        {name: 'Meatballs'},
        {name: 'Mac & Cheese'}
      ]
    }
  }

  render() {
    let { recipes } = this.state
    let recipe = recipes.map(recipe => {
      return(
        <li key={recipe.name}>{recipe.name}</li>
      )
    })
    return(
      <div>
        <ul>
          { recipe }
        </ul>
      </div>
    )
  }
}
export default Recipes;