import React from "react";

export class Button extends React.Component{
     render(): React.ReactNode {
        const style = {
            color:'white',
            backgroundColor:'red'
        }
         return (
            <div>
                <button style={style} onClick={(e)=>e.preventDefault()}>
                    Click here!!!
                </button>
            </div>
         )
     }
}