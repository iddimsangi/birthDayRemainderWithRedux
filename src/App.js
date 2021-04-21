import React, { useState } from 'react'
import {connect} from 'react-redux'
import data from './data'
import List from './List'
function App(props) {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{props.people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

const mapStateToProps = state =>{
  return{
    people: state.people
  }
 
}
const mapDispatchToProps = (dispatch) =>{
  return{
    onClearList:dispatch({type:'CLEAR_LIST',})
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
