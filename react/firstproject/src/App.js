import logo from './banner.gif';
import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      inputText : '',
      inputList : [],
    }
  }
  handleInput=(e)=>{
      this.setState({inputText: e.target.value})
  }
  handleInputListUpdate=()=>{
      const inputText =  this.state.inputText
      const inputList = this.state.inputList
      this.setState({inputList : [...inputList,inputText],inputText : ''})
  }

  render(){
    const {inputText,inputList} = this.state
    return (
       <div className="App">
          <header className="App-header">
            <p className='bg-black'>
             <input 
             type='text'
             placeholder='Enter Your Text'
             value={inputText}
             onChange={this.handleInput}
             />
             <button onClick={this.handleInputListUpdate}>Submit</button>
             {inputList.map((value,key)=>{
                    return  (
                      <p className= {this.props.color}>Here is value: {value}</p>
                    )
                })
              }
            </p>
               
          </header>
       </div> 
    )
  }
}

export default App;


