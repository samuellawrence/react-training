import React from 'react'

class Customer extends React.Component {
   render() {
      return (
         <li>
            {this.props.name}
         </li>
      )
   }
}

export default Customer