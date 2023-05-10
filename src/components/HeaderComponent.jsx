import React, { Component } from "react";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="https://www.imdev-test.net" className="navbar-brand">
                MANAGEMENT - jenkins test!!!
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
