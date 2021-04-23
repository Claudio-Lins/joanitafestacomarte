import React from "react";
// import {useForm} from 'react-hook-form';
import axios from "axios";

const calculatePercetn = (value, total) => {
  Math.round((value / total) * 100);
};

export default class FormDepoimentos extends React.Component {
    

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

    // console.log("FileUpload.handleSubmit this.state.files", this.state.files);

    const data = new FormData();
    data.append("files", this.state.files);

    const uploas_res = await axios({
      method: "POST",
      url: "https://stark-plains-02404.herokuapp.com/upload",
      data,
      onUploadProgress: (progress) =>
        this.setState({
          percetn: calculatePercetn(progress.loaded, progress.total),
        }),
    });
    this.setState({ loading: false });
    // console.log("FileUpload.handleSubmit uploas_res", uploas_res);
  };

  render() {
    const { percetn, loading, submitted } = this.state;
    // console.log("FileUpload.render percetn", percetn);
    return (
      <form
        onSubmit={this.handleSubmit}
        className="w-full space-y-2 md:space-y-4"
      >
        <div className="flex items-center justify-between pl-3 border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <input
            type="text"
            name="nome"
            className="text-sm font-light outline-none h-12 w-11/12 text-red-800 placeholder-red-800"
            placeholder="Nome"
          />
        </div>

        <div className="flex items-center justify-between pl-3 border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <input
            type="email"
            name="email"
            className="text-sm font-light outline-none h-12 w-11/12 text-red-800 placeholder-red-800"
            placeholder="E-mail"
          />
        </div>

        <div className="flex items-center justify-between pl-3 border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <textarea
            className="text-sm font-light outline-none h-24 w-full py-2 text-red-800 placeholder-red-800"
            placeholder="Depoimento"
          />
        </div>
        {/* File Upload */}
        <div className="flex justify-center">
          <label class="w-64 flex flex-col items-center px-4 py-4 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue hover:text-black">
            <svg
              class="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span class="mt-2 text-base leading-normal">
              Selecione uma foto
            </span>
            <input onChange={this.handleChange} type="file" class="hidden" />
            {submitted && (
              <div className="h-[3px] w-3/4 mx-auto bg-gray-500 m-4">
                <div
                  className="h-[3px] bg-red-800"
                  style={{ width: `${percetn}%` }}
                ></div>
              </div>
            )}
            {loading && <p className="animate-pulse">Uploading...</p>}
          </label>
        </div>
        {/*  */}
        {/* <div className="py-4 border rounded-lg border-gray-200">
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
        </div> */}
        {/*  */}
        <div className="bg-red-800 rounded-lg py-2">
          <button className="w-full text-base font-Nunito text-white tracking-wider hover:font-bold hover:text-xl">
            Enviar
          </button>
        </div>
      </form>
    );
  }
}
