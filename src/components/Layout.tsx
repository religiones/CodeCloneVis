import GoldenLayout from "golden-layout";
import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-dark-theme.css'
// components
import Panel from './panel';


import './css/layout.css'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
window.React = React;
window.ReactDOM = ReactDOM;
const $ = require("jquery")


interface layoutState{
  name: string,
  id: number
}

const config: any = {
  content: [
    {
      width: 100,
      type: "column",
      content: [
        {
            height: 20,
            type: 'react-component',
            componentName: 'Panel',
            component: 'Panel',
            isClosable: false,
        },
        {
            height: 50,
            type: 'react-component',
            componentName: 'Panel',
            component: 'Panel',
            isClosable: false,
        },
        {
            height: 30,
            type: 'react-component',
            componentName: 'Panel',
            component: 'Panel',
            isClosable: false,
        },
      ],
    }
  ]
};

class Layout extends Component<any, layoutState> {
  constructor(props: any){
    super(props);
    this.state = {
      name : "hello",
      id: 1
    }
  }

  render(){
      return (
        <div id="container" className="container"></div>
      )
  }

  componentDidMount(){
    setTimeout(()=>{
      const layout = new GoldenLayout(config, $("#container"));
      layout.registerComponent('Panel',Panel)
      layout.init()
    }, 0)
  }

}

export default Layout