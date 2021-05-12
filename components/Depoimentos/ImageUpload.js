import React from "react";

export default class ImageUpload extends React.Component {
  render() {
    return (
      <form>
        <input
          type="file"
          name="file"
          className="text-sm font-light outline-none h-12 w-11/12 text-red-800 placeholder-red-800"
        />
      </form>
    );
  }
}
