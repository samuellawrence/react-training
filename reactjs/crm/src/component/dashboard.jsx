import React from 'react'

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <div className="jumbotron">
                    <h1>Dashboard</h1>
                    <p> 
                        This system is used by IT Administrators.
                        It is the backend syste that allows to manage the products and customers
                    </p>
                </div>
            </div>
        );
    }
}

export default Dashboard;