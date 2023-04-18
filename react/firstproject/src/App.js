import logo from './banner.gif';
import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      inputText : 'ankit',
      inputList : [],
    }
  }
  handleInput=(e)=>{
      this.setState({inputText: e.target.val})
  }
  render(){
    const val = this.state.inputText
    return (
       <div className="App">
          <header className="App-header">
            <p className='bg-black'>
             <input 
             type='text'
             placeholder='Enter Your Text'
             value={val}
             onChange={this.handleInput}
             />
            </p>
          </header>
       </div> 
    )
  }
}

export default App;


