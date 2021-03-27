import styled from 'styled-components';

const HeaderWrapper = styled.div`
  margin-bottom: 80px;
  margin-left: 30px;
  padding-top: 50px;
  display: block;
  a {
    text-decoration: none;
    color: white;
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
  }
  .link {
    padding: 10px;
  }
  .ShadowHeading{
    position: relative;
    margin-top: -58px;
    font-size: 50px;
    left: -29px !important;
    color: #182c47;
    z-index: -1;
    font-weight: 700;
  }
  a:hover {
    opacity: 0.8;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    .link {
      padding: 30px;
    }
    .ShadowHeading{
      position: relative;
      margin-top: -72px;
      font-size: 60px;
      left: -35px !important;
      color: #182c47;
      z-index: -1;
      font-weight: 700;
    }
  }
`

export { HeaderWrapper }