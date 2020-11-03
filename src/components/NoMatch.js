import React from 'react'

class NoMatch extends React.Component {

    render(){
        return (
            <div style={{fontSize: "80px", color: "#e9c46a", textAlign: "center", paddingTop: "10%"}}>
               Error 404 - Path does not exist.
            </div>
        )
    }
}

export default NoMatch