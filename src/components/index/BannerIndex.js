import React from 'react';
import styled from 'styled-components';

const BannerStyled = styled.article`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: flex-end;
  margin-top: 5rem;
  width: 100%;

  .bannerIndex__background {
    align-items: flex-end;
    background: ${props => props.colors.grayLighter};
    display: flex;
    height: 310px;
    justify-content: center;
    width: 100%;
    
    .bannerIndex__img {
      width: 300px;
    }

    .bannerIndex__text {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 3rem 0 0 3rem;
      width: 310px;
      
      span {
        font-size: 32px;
        margin-bottom: 2rem;
        text-align: center;
        width: 100%;
        
        strong {
          color: ${props => props.colors.greenDark};
          font-size: inherit;
        }
      }

      a {
        background: ${props => props.colors.greenDark};
        border-radius: 32px;
        color: ${props => props.colors.white};
        font-size: 20px;
        padding: .8rem 1.5rem;
        text-align: center;
        width: 235px;

        &:hover {
          background: ${props => props.colors.greenLight};
        }
      }
    }
  }
`;

const BannerIndex = ({ colors }) => {
  return (
    <BannerStyled colors={colors}>
      {/* <!-- 앱 다운로드 배너 시작 --> */}
      <h2 className="bannerIndex__title nonVisible">앱 다운로드</h2>
      <div className="bannerIndex__background">
        <img
          src={require("../../assets/img/index/img_appPreview.png")}
          alt=""
          className="bannerIndex__img"
        />
        <div
          className="bannerIndex__text"
        >
          <span>
            새로워진 <strong>우푸</strong> 앱을 만나보세요!
          </span>
          <a href="/" title="앱 다운로드">앱 다운로드</a>
        </div>
      </div>
      {/* <!-- 앱 다운로드 배너 끝 --> */}
    </BannerStyled>
  );
};

export default BannerIndex;