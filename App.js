import React from 'react';
import './App.css';


class App extends React.Component {

    state = {
    input: "",
    previousNumber : "",
    currentNumber : "",
    operation : "",
    operationDisplay:"",
    firstValue:"",
    secondValue:"",
    isSecondValue:false,
    result:""
  };

  addToInput= val =>{
    if(this.state.isSecondValue){
      this.setState({ secondValue:this.state.secondValue + val});
    }else{
      this.setState({ firstValue:this.state.firstValue + val});
    }
  };

  operation=(val)=>{
  this.setState({
  isSecondValue:true,
  operation:val
})
  }
getResult=()=>{
  let result
  if(this.state.operation ==="x"){
    result = parseInt(this.state.firstValue)*parseInt(this.state.secondValue)
  }else if(this.state.operation ==="+"){
    result = parseInt(this.state.firstValue)+parseInt(this.state.secondValue)
  }else if(this.state.operation==="-"){
    result = parseInt(this.state.firstValue)-parseInt(this.state.secondValue)
  }else if(this.state.operation==="/"){
    result = parseInt(this.state.firstValue)/parseInt(this.state.secondValue)
  }else if(this.state.operation==="%"){
    result = (parseInt(this.state.firstValue)*1)/100
  }
  this.setState({
    result
  })
}
clearAll=()=>{
  this.setState({
    firstValue:'',
    secondValue:'',
    isSecondValue:false,
    result:"",
    operation:''
  })
}
  render () {
  return (
    <div className="App">
      <div className='calc-wrapper'>
        <div className='result'>
          <div className = 'history'>
  <p id='history-value'>{this.state.firstValue +" "+this.state.operation+" "+ this.state.secondValue}</p>

          </div>
          <div className='output'>
  <p id='output-value'>{this.state.result}</p>
          </div>
        </div>
          <div className='keyboard'>
            <button className="operator" id='clear' onClick={this.clearAll} >C</button>
            <button className="operator" id='plminus' >+/-</button>
            <button className="operator" id='percent'onClick={(e)=>this.operation("%")} >%</button>
            <button className="operator" id='divide'onClick={(e)=>this.operation("/")}>/</button>
            <button className="number" id='7' onClick={(e)=>this.addToInput("7")}>7</button>
            <button className="number" id='8' onClick={(e)=>this.addToInput("8")}>8</button>
            <button className="number" id='9' onClick={(e)=>this.addToInput("9")}>9</button>
            <button className="operator" id='multiply' onClick={(e)=>this.operation("x")}>x</button>
          
            <button className="number" id='4' onClick={(e)=>this.addToInput("4")}>4</button>
            <button className="number" id='5' onClick={(e)=>this.addToInput("5")}>5</button>
            <button className="number" id='6' onClick={(e)=>this.addToInput("6")}>6</button>
            <button className="operator" id='minus' onClick={(e)=>this.operation("-")}>-</button>
            
            <button className="number" id='1' onClick={(e)=>this.addToInput("1")}>1</button>
            <button className="number" id='2' onClick={(e)=>this.addToInput("2")}>2</button>
            <button className="number" id='3' onClick={(e)=>this.addToInput("3")}>3</button>
            <button className="operator" id='plus' onClick={(e)=>this.operation("+")}>+</button>
            
            <button className="number" id='0' onClick={(e)=>this.addToInput(0)}>0</button>
            <button className="operator" id='.' onClick={(e)=>this.addToInput(".")}>.</button>
            <button className="operator" id='equal' onClick={this.getResult} >=</button>
            </div>
      </div>
    </div>
  );
}
}


export default App;
