import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyledWrapper>
      <div className="header-title-container">
        <span className="header-title">ONE CLICK IMAGE MOODMAKER</span>
      </div>
    </HeaderStyledWrapper>
  );
};

const HeaderStyledWrapper = styled.div`
  /* margin: 20px; */
  margin: 30px auto;
  width: 80%;

  .header-title-container {
    text-align: center;
    padding: 10px;
    margin: 10px;
  }

  .header-title {
    padding: 20px;
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid #c25b56;
    border-radius: 10px 10px;
    font-size: 15px;
    transition: opacity 0.5s;
  }

  .header-title:hover {
    opacity: 0.6;
  }
`;

export default Header;
