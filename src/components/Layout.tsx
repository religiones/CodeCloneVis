// import GoldenLayout from "golden-layout";
// components
import Panel from './panel'
import ControlPanel from './ControlPanel'

import './css/layout.css'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
window.React = React
window.ReactDOM = ReactDOM
const $ = require("jquery")
const GoldenLayout = require("golden-layout")
// import 'golden-layout/src/css/goldenlayout-base.css'
// import 'golden-layout/src/css/goldenlayout-dark-theme.css'
interface layoutState{
  name: string,
  id: number
}

const config: any = {
  settings: {
    showPopoutIcon: true,
    showMaximiseIcon: true,
    showCloseIcon: true,
  },
  content: [
    {
      width: 100,
      height: 100,
      type: "row",
      content: [
        {
          width: 30,
          type: "column",
          content: [
            {
              height: 20,
              type: 'react-component',
              componentName: 'ControlPanel',
              component: 'ControlPanel',
              title: "Control Panel",
              isClosable: true
            },
            {
              height: 40,
              type: 'react-component',
              componentName: 'Panel',
              component: 'Panel',
              title: "Code One",
              isClosable: true
            },
            {
              height: 40,
              type: 'react-component',
              componentName: 'Panel',
              component: 'Panel',
              title: "Code Two",
              isClosable: true
            }
          ]
        },
        {
          width: 50,
          type: "column",
          content: [
            {
              height: 60,
              type: 'react-component',
              componentName: 'Panel',
              component: 'Panel',
              title: "Dataset Clone",
              isClosable: true
            },
            {
              height: 40,
              type: 'react-component',
              componentName: 'Panel',
              component: 'Panel',
              title: "Clone AST",
              isClosable: true
            }
          ]
        },
        {
          width: 20,
          type: 'react-component',
          componentName: 'Panel',
          component: 'Panel',
          title: "Clone Analyse",
          isClosable: true
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
            layout.registerComponent('Panel',Panel);
            layout.registerComponent('ControlPanel',ControlPanel);
            layout.init();
        })
    }

}

export default Layout