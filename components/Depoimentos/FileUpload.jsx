import React from "react";
import axios from "axios";

const calculatePercetn = (value, total) => {
  Math.round((value / total) * 100);
};

export default class FileUpload extends React.Component {
  state = {
    files: null,
    percetn: 0,
    loading: false,
    submitted: false,
  };

  handleChange = (event) => {
    console.log(
      "FileUpload.handleChange event.target.files",
      event.target.files
    );

    this.setState({ files: event.target.files[0], submitted: false });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, submitted: true });

    console.log("FileUpload.handleSubmit this.state.files", this.state.files);

    const data = new FormData();
    data.append("files", this.state.files);

    const uploas_res = await axios({
      method: "POST",
      url: "https://joanita-api.herokuapp.com/upload",
      data,
      onUploadProgress: (progress) =>
        this.setState({
          percetn: calculatePercetn(progress.loaded, progress.total),
        }),
    });
    this.setState({ loading: false });
    console.log("FileUpload.handleSubmit uploas_res", uploas_res);
  };

  render() {
    const { percetn, loading, submitted } = this.state;
    console.log("FileUpload.render percetn", percetn);
    return (
      <form
        onSubmit={this.handleSubmit}
        className="w-full space-y-2"
      >
        <div className="py-4 border rounded-lg border-gray-200 text-center ">
          <input
            onChange={this.handleChange}
            className="rounded-md font-light"
            type="file"
          />
          {submitted && (
            <div className="h-[3px] w-3/4 mx-auto bg-gray-500 m-4">
              <div
                className="h-[3px] bg-red-800"
                style={{ width: `${percetn}%` }}
              ></div>
            </div>
          )}
          {loading && <p className="animate-pulse">Uploading...</p>}
        </div>
        {/*  */}
        <div className="bg-blue-800 rounded-lg py-2 text-center ">
          <button className="font-Nunito text-white tracking-wider">
            Enviar foto
          </button>
        </div>
      </form>
    );
  }
}
