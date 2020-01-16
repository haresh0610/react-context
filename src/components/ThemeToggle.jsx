import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return (
      <button type="button" className="btn btn-secondary" onClick={toggleTheme}>
        Toggle Theme
      </button>
    );
  }
}

export default ThemeToggle;
