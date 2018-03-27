import React from 'react'


class Header extends React.Component{
    
    render(){
        return (
            <div>
                <h1>{this.props.companyName}</h1>
                <h4>{this.props.companyMoto}</h4>
                <hr/>
            </div>
        );
    };
}

export default Header;