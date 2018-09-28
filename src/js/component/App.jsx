import React from 'react';
import Test from './test';
import Hr from './hrtest';
import Modal from './ModalConductor'

class App extends React.Component{
   
    
    render() {
        
        //const {name} = this.state
       // const {somethng} = this.proop
            return (
                <div className="message">
                    <h1>123</h1><h2>456</h2>
                    
                    
                    <Test/>
                    <Hr/>
                    <Modal/>
                </div>
            )
        
        
    }
}



export default App
      
