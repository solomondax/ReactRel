import { Component } from 'react'

import './App.css'

class App extends Component {

    state = {
        count: 0,
        
    }
    
      
    onIncrement = () => {
        const randomNumber = Math.ceil(Math.random() * 100)
        this.setState({count:randomNumber})
    }
    

    //  reSet = () => {
    //      let dax = "close"
         
    //     this.setState(prevState => ({count:prevState.count+dax}))
    // }
    
    
    
    render() {
        const {count} =this.state
        
           const displayText = count % 2 === 0 ?'Even':'Odd'
        
        return (
            <div className="app-container">
                <div className = "container">
                    <h1> Count :{count}</h1>
                    <p className="para-number">Count is {displayText}</p>
                    <button onClick={this.onIncrement} className="sd"> Increment</button>

                    <p className="down">Increment By Random Numbers</p>
                    {/* <button  onClick={this.reSet} >reset</button> */}

                </div>    
            
            </div>
        )
            
    }
}
    export default App
    
            
       


        
            


            
      
     
        
     
