import React from "react";

export class Button extends React.Component{
     render(): React.ReactNode {
         return (
            <div>
                <button onClick={(e)=>e.preventDefault()}>
                    Click here!!!
                </button>
            </div>
         )
     }
}