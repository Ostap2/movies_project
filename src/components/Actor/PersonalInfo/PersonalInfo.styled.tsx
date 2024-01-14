import styled from 'styled-components';

export const Heading = styled.h2`
    text-align: center;
    margin-bottom: 24px;

    @media screen and (min-width: 1024px){
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;
      white-space: nowrap;
      clip-path: inset(100%);
      clip: rect(0 0 0 0);
      overflow: hidden;
    }
`

export const CardImg = styled.img`
  float: left;
  margin-right: 24px;
  margin-bottom: 24px;
  width: 189px;
  border-radius : 16px;
  
  @media screen and (min-width: 1024px)  {
    width: 144px;
    margin-right: 20px;
    margin-bottom: 40px;
    float: none;
  }
  @media screen and (min-width: 1440px){
    width: 231px;    
    margin-right: 24px;
    margin-bottom: 40px;
    float:none;
  }   
  
`
export const CardSubtitle = styled.h4`
    margin-bottom : 12px;

    @media screen and (min-width:1024px){
      margin-bottom : 24px;
    }
`

export const CardText = styled.p`
    margin-bottom : 16px;

    @media screen and (min-width:1024px){
      margin-bottom : 40px;      
    }
`

export const Info=styled.div`
 min-width: 430px;
 margin-bottom: 24px;
`