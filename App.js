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
