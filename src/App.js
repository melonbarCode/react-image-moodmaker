import styled from "styled-components";
import "./reset.css";
import FileDropArea from "./components/FileDropArea";
import Header from "./components/Header";
import {
  GlobalProvider,
} from "./components/context/globalContext";
import ImagePreview from "./components/ImagePreview";

import Cards from "./components/Cards";

function App() {
  return (
    <GlobalProvider>
      <AppStyledWrapper>
        <Header />
        <FileDropArea />
        <ImagePreview />
        <Cards />
        <div className="empty-container"></div>
      </AppStyledWrapper>
    </GlobalProvider>
  );
}

export default App;

const AppStyledWrapper = styled.div`
  position: absolute;
  background-color: #fef6eb;
  width: 100%;

  /* height: 100%; */

  .empty-container {
    height: 1500px;
  }
`;
