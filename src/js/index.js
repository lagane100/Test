import 'normalize.css';
import 'Scss/index.scss';
import { Provider } from 'react-redux';
import store from 'Js/store';
import App from 'Component/App';

ReactDom.render(
    <Provider store={store}>
        <App></App>
    </Provider>
    , document.getElementById('app')
);