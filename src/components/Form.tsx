import React, { Component } from "react";
import { Button } from "./Botao";

import "../style/form.css";
export default class Form extends Component {
  render() {
    return (
      <div>
        <div className="form">
          <form>
            <div>
              <input placeholder="Name" />
            </div>
            <div>
              <input placeholder="Age" />
            </div>
            <div>
             <Button/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
