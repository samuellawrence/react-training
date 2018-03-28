import React from 'react';


class Menu extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        
                        <div className="navbar-header">
                            <span className="navbar-brand">My Company Sdn. Bhd.</span>
                        </div>

                        <ul className="nav navbar-nav">
                            <li className="active"><a href="/">Home</a></li>
                            <li><a href="/customers">Customers</a></li>
                            <li><a href="/products">Products</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu