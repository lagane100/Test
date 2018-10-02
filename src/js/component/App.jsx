import React from 'react';
import Test from './test';
import Hr from './hrtest';
import Playground from './playground';
import App2 from './App2';
import Timer from './Timer';
import MarkDown from './MarkDown';
import Testconst from './Testconst';

export default class App extends React.Component{ 
    render() {
        //const {name} = this.state
        //const {somethng} = this.props
        return (         
            <div>
                <h1>123</h1><h2>456</h2>
               <Test/>
               <Hr/>
               <Playground/>
               <App2 />
               <Timer />
               <MarkDown />
               <Testconst name="World"/>
            </div>
        )       
    }
}
