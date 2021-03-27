import styled from 'styled-components';

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  /* Tablet */
  @media screen and (min-width: 640px) {

  }
  /* desktop */
  @media screen and (max-width: 1280px) {
    display: block;
  }
`;

const FilterWrapper = styled.div`
    /* mobile */
    display: block;
    margin-right: 10px;
    margin-left: 10px;
    /* Tablet */
    @media screen and (min-width: 640px) {

    }
    /* desktop */
    @media screen and (min-width: 1280px) {
      min-width: 300px;
      margin-right: 30px;
    }
`;

const ContentWrapper = styled.div`
  /* mobile */
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  .loading {
    width: 100px;
    height: 100px;
    margin: auto;
  }
  .loading-wrap {
    text-align: center;
    display: grid;
  
  }
  .loading-text{
    font-family: 'Mulish', sans-serif;
  }
  /* desktop */
  @media screen and (min-width: 1280px) {
    width: 100%;
    margin-top: 0px;
  }

`

export { MainWrapper, FilterWrapper, ContentWrapper} ;