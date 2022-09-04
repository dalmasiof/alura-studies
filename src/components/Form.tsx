import React, { Component } from "react";
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
              <button type="submit" onClick={(e) => e.preventDefault()}>
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
