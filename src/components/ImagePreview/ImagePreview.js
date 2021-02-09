import styled from "styled-components";
import { useGlobalContext } from "../context/globalContext";

const ImagePreview = () => {
  const [state, actions] = useGlobalContext();
  const { imageFile, imageUrl } = state;
  const { setImageFile, setImageUrl } = actions;

  console.log("imageUrl Check", imageUrl);

  return (
    <ImagePreviewStyledWrapper>
      <div className="image-preview-container">
        <div className="image-preview-example">
          <span className="image-preview-example-title">preview</span>
        </div>
        {imageUrl && (
          <img className="image-site" alt={"preview image"} src={imageUrl} />
        )}
      </div>
    </ImagePreviewStyledWrapper>
  );
};

const ImagePreviewStyledWrapper = styled.div`
  /* margin: 20px; */
  margin: 30px auto;
  width: 80%;

  .image-preview-container {
    position: relative;
    text-align: center;
    /* left: 50%; */
    padding: 10px;
    margin: 10px auto;
    width: 80%;
    height: 20vmax;
  }

  .image-preview-example {
    display: table;
    position: absolute;
    box-sizing: border-box;
    background-color: #beb9b5;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  .image-site {
    display: table;
    position: absolute;
    box-sizing: border-box;
    text-align: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-preview-example-title {
    vertical-align: middle;
    display: table-cell;
  }
`;

export default ImagePreview;
