import React, { Component } from "react";
import "../css/banner.css";

class Banner extends Component {
  constructor() {
    super();
    this.state = { testMessage: "TEST" };
  }

  componentDidMount() {
    console.log("Banner Component Mounted!");
    fetch("/api/test")
      .then((res) => res.json())
      .then((incomingTestMessage) =>
        this.setState({ testMessage: incomingTestMessage }, () =>
          console.log("Skills fetched...", this.state.testMessage)
        )
      );
  }

  showServer() {
    return <p>{this.state.testMessage}</p>;
  }

  render() {
    return (
      <div className="banner">
        <p>We Are</p>
        <h1>Streamline LLC.</h1>
        <div className="banner-divider"></div>
        <p>This site is still under construction</p>
        <p>Check back later for updates</p>
        {this.showServer()}
        <button
          onClick={() => {
            console.log("Button Clicked");
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default Banner;
