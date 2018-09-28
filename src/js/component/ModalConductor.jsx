import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../../data/actions.js';

import SignInModal from './editbutoontest';


const ModalConductor = props => {
  switch (props.currentModal) {
    
    case 'SOCIAL_SIGN_IN':
      return <SignInModal {...props}/>;

    
    default:
      return null;
  }
};

export default connect(state => state, () => actions)(ModalConductor);