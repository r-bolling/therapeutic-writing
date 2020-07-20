import axios from "axios";
import React, { Component } from "react";
// import { connect } from "react-redux";
// // // const UPLOAD_PATH = path.resolve(__dirname, "./uploads");

class PhotoUpload extends Component {
  constructor(props) {
    super(props);
  }

  upload = () => {
    const file = document.getElementById("file");
    const formData = new FormData();
    formData.append("image", file[0]);
    axios
      .post("http://localhost:3000/upload", formData, {})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="file-upload">
        <button
          onClick={() => {
            const file = document.getElementById("file");
            console.log(file);
          }}
        >
          log
        </button>
        <input type="file" id="file" />
        <button onClick={this.upload} className="upload-button">
          Upload
        </button>
        <hr />
      </div>
    );
  }
}

export default PhotoUpload;
