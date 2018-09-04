import React from 'react'

const validationComponent = (props) =>{

    if(props.length < 5){
       return (
             <div>
                 Text too short
             </div>
        )
    } 
    return(
            <div>
                Text long enough
            </div>
    )
    
}

export default validationComponent;