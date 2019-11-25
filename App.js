import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App'
ReactDOM.render(<App companyName="new technologies" companyLocation="new" />, document.getElementById('root'));



import React from 'react';

class App extends React.Component {
   render() {
     return (
        <div>
           <h1>{this.props.companyName}</h1>
           <h2>{this.props.companyLocation}</h2>
        </div>
     );
   }
}
App.defaultProps = {
   companyName: "WIPRO",
   companyLocation:"Bangalore"
}
export default App;
