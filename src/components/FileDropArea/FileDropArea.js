import { useRef } from "react";
import { FileDrop } from "react-file-drop";
import styled from "styled-components";
import { useGlobalContext } from "../context/globalContext";

const FileDropArea = () => {
  const fileInputRef = useRef(null);
  const [state, actions] = useGlobalContext();
  const { setImageFile, setImageUrl, setImageBinary } = actions;

  const handleFileInputChange = (event) => {
    const { files } = event.target;

    let reader = new FileReader();
    reader.onloadend = () => {
      const data = reader.result.split(",")[1];
      const binaryBlob = atob(data);
      setImageUrl(reader.result);
      setImageFile(files[0]);
      setImageBinary(binaryBlob);
    };
    
    reader.readAsDataURL(files[0]);
    // do something with your files...
  };

  const handleClickTarget = () => {
    fileInputRef.current.click();
  };

  return (
    <FileDropAreaStyledWrapper>
      <div>
        <FileDrop
          //   onFrameDragEnter={(event) => console.log("onFrameDragEnter", event)}
          //   onFrameDragLeave={(event) => console.log("onFrameDragLeave", event)}
          //   onFrameDrop={(event) => console.log("onFrameDrop", event)}
          //   onDragOver={(event) => console.log("onDragOver", event)}
          //   onDragLeave={(event) => console.log("onDragLeave", event)}
          onDrop={(files, event) => {
            setImageFile(files[0]);
            let reader = new FileReader();
            reader.onloadend = () => {
              const data = reader.result.split(",")[1];
              const binaryBlob = atob(data);
              setImageUrl(reader.result);
              setImageFile(files[0]);
              setImageBinary(binaryBlob);
            };
            reader.readAsDataURL(files[0]);
          }}
          onTargetClick={handleClickTarget}
        >
          이미지를 넣어주세요
        </FileDrop>
        <input
          onChange={handleFileInputChange}
          ref={fileInputRef}
          type="file"
          className="hidden"
        />
      </div>
    </FileDropAreaStyledWrapper>
  );
};

const FileDropAreaStyledWrapper = styled.div`
  /* margin: auto 16px; */
  margin: 10px auto;
  width: 80%;

  .file-drop {
    /* relatively position the container bc the contents are absolute */
    position: relative;
    height: 150px;
    background-color: #fff;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .file-drop:hover {
    /* overlay a black mask when dragging over the frame */
    box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.2);
  }

  .file-drop > .file-drop-target {
    /* basic styles */
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 2px;

    /* horizontally and vertically center all content */
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;

    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;

    align-items: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;

    justify-content: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;

    align-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;

    text-align: center;
    transition: background-color 1s, color 1s;
    border: #000000 1px dashed;
  }

  .file-drop > .file-drop-target.file-drop-dragging-over-frame {
    /* overlay a black mask when dragging over the frame */
    border: none;
    background-color: rgba(0, 0, 0, 0.65);
    box-shadow: none;
    z-index: 50;
    opacity: 1;

    /* typography */
    color: white;
  }

  .file-drop > .file-drop-target.file-drop-dragging-over-target {
    /* turn stuff orange when we are dragging over the target */
    color: #96c0ce;
    box-shadow: 0 0 13px 3px #96c0ce 0.6;
  }

  .hidden {
    display: none;
  }
`;

export default FileDropArea;
