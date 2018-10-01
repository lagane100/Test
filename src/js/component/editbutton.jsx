import React from 'react';


class SignIn extends React.Component{
  constructor(props){
    super(props)
    this.closebutton = this.closebutton.bind(this);
  }

  closebutton(){
    
  }


  render(){
    const {visible} = this.props;
    return visible &&
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-title">123</div>
        <div className="modal-content">456</div>
        <div className="modal-operator">
          <button className="modal-operator-confirm">確認</button>
          <button className="modal-operator-close" onClick={this.closebutton}>取消</button>
        </div>
      </div>
      <div className="mask"></div>
    </div>
  }
}

export default SignIn;