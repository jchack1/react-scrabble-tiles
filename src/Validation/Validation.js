import React from 'react';

const validation = (props) => {
    if(props.inputLength >= 5){
        return (
            <div>
                <p>Text long enough.</p>
            </div>
        )
    }else{
        return (
            <div>
                <p>Text too short, please input 5 or more characters.</p>
            </div>
        )
    }

}

export default validation;