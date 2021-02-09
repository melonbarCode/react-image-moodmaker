import { useGlobalContext } from "./context/globalContext";
import axios from "axios";
// import styled from "styled-components";
import { useState } from "react";

const Card = (props) => {
  const [state, actions] = useGlobalContext();
  const { imageFile } = state;
  const { funcButtonLabel, funcType } = props;

  const [uploadImgUrl, setUploadImgUrl] = useState(null);

  const handlePictureFunction = (type) => async () => {
    const URL = "https://master-hi-dt-psi1104.endpoint.ainize.ai/predict";
    const formData = new FormData();

    formData.append("daytime", type);
    formData.append("source", imageFile);
    formData.append("inference_size", "1024");

    const response = await axios.post(URL, formData, {
      headers: {
        Accept: "images/*",
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    });

    const reader = new FileReader();
    reader.readAsDataURL(response.data);
    reader.onload = function () {
      const imageDataUrl = reader.result;
      setUploadImgUrl(imageDataUrl);
    };
  };

  return (
    <div className="card">
      <button onClick={handlePictureFunction(funcType)}>
        {funcButtonLabel}
      </button>
      {uploadImgUrl && <img className="img-container" src={uploadImgUrl} />}
    </div>
  );
};

export default Card;

// const CardsStyledWrapper = styled.div`
//   .img-container {
//     position: relative;
//     width: 100%;
//     height: 150px;
//     object-fit: cover;
//   }

//   .card {
//     height: 200px;
//     width: 200px;
//     margin: 10px;
//     padding: 10px;
//     border: rgba(0, 0, 0, 0.12) solid 0.5px;
//     box-sizing: border-box;
//     background-color: #ffffff;
//     box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
//     transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
//   }

//   .card:hover {
//     box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.2);
//   }
// `;
