import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const onInputFileChange = (e) => {
    const fileTypes = ["image/jpeg", "image/png"];
    const selected = e.target.files[0];
    if (fileTypes.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select image file.");
    }
    console.log(selected);
  };

  return (
    <form>
      <label>
        <input type="file" onChange={onInputFileChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
