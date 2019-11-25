import React from 'react';

export class Details extends React.Component{

  constructor(props){
    super(props);

  }

    render(){
      const detail=this.props.detail;
      return(
        <React.Fragment>
         <table >
         <tr ><th  >
                       ID
                    </th>
                    <th  >
                      Name
                    </th>
                    <th  >
                      Gender
                    </th>
                    <th  >
                       Class
                    </th> </tr>
        {
          detail?
           detail.map(
                (empDetails,iIndex)=><tr key={iIndex}>
                    <td  >
                        {empDetails.ID} 
                    </td>
                    <td  >
                        {empDetails.Name} 
                    </td>
                    <td  >
                        {empDetails.Gender} 
                    </td>
                    <td  >
                        {empDetails.Class} 
                    </td>

                </tr>
            ):<>Wipro</>
        }
    </table>
          
        </React.Fragment>
      );
    }
}