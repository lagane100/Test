import React from 'react';
import Test from './test';
import Hr from './hrtest';

export default class App extends React.Component{ 
    render() {
        //const {name} = this.state
        //const {somethng} = this.props
        return (         
            <div>
                <h1>123</h1><h2>456</h2>
               <Test/>
               <Hr/>
            </div>
        )       
    }
}
      
