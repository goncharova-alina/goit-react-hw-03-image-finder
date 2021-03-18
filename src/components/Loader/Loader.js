import { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Loader.css";

class LoaderSpin extends Component {
  state = {};
  render() {
    return (
      <div className="loader">
        <Loader type="BallTriangle" color="#3f51b5" height={60} />
      </div>
    );
  }
}

export default LoaderSpin;
