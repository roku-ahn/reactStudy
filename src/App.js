//import logo from './logo.svg';
import './App.css';

//import TodaysPlan from './Todaysplan';
//import MyComponent from './ComponetPractice';
//import ChildComponet from './ChildComponent';
//import { render } from '@testing-library/react';
//import { Component } from 'react';
import ChildComponet2 from './ChildComponet2';



function App() {
 // class App extends Component{
  //const array = [1,2,3];
//const obj2 ={name : 'subject ', age : 32};
 // const node =  <h1>Node</h1>;
  //const func = () => {console.log("hello");};
    return (
/*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React          
          </a>
          Start react!!
        </header>
        <fragment>
        <body className='App-body'>
          <div>
            <TodaysPlan />                       
          </div>
          <p>
            Div Add  src/App.js 
          </p>
          
          <div>
          <MyComponent name = " do it react "> </MyComponent>  
          </div>
           
          <div>
            <ChildComponet 
             boolValue = {true}
             numValue = {100}
             arrayValue = {[1,2,3]}
             objValue = {{name : 'subject ', age : 32}}
             nodeVlaue = {<h1>Node</h1>}
             funcValue = {() => {console.log("hello");}}
            />
          </div>
          
        </body>
  
        </fragment>
      </div>
      */
     /*
      <div>
      <ChildComponet 
        boolValue = {true}
        numValue = {100}
        arrayValue = {[1,2,3]}
        objValue = {{name : 'subject ', age : 32}}
        nodeValue = {<h1>Node</h1>}
        funcValue = { () => {alert('Hi');  <h1>Console/log </h1> }}
      />
    </div>
    */
   <div>
      <ChildComponet2 
      objVal = {{name : 'ajr', age : 32}}
      requiredStringVal = 'requiredStringVal!!!!'
      />
   </div>
    );
  
  }


export default App;
