import styled from "styled-components";
import Popup from "reactjs-popup";

export default styled.div`
  .item {
    &__right {
      display: flex;
      flex: 2;
      flex-direction: column;
      gap: 10px;
    }
    &__cont {
      display: flex;
      gap: 30px;
      flex-direction: column;

      & > div {
        display: flex;
        gap: 30px;
      }

      .product-description {
        padding: 16px 20px;
        border-radius: 20px;

        width: 100%;
        background: #ffffff;

        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      &-pics {
        flex: 1;

        @media screen and (max-width: 600px) {
          flex-direction: column;
        }
        & .item__pic {
          @media screen and (max-width: 600px) {
            align-self: center;
          }
          & img {
            width: 300px;
            height: 250px;

            @media screen and (max-width: 800px) {
              width: 230px;
              height: 170px;
            }

            @media screen and (max-width: 600px) {
              width: 300px;
              height: 170px;
            }
          }
        }
      }

      &-temp {
        padding: 16px 30px;

        border-radius: 20px;

        width: 100%;
        background: #ffffff;

        & h3 {
          font-size: 23px;
        }
        & p {
          font-weight: 400;
          font-size: 20px;
        }
      }

      &-main {
        font-family: "Plus Jakarta Sans";
        font-weight: 400;
        color: #596780;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        background-color: #fff;
        border-radius: 20px;

        padding: 34px;

        @media screen and (max-width: 800px) {
          padding: 25px;
        }

        p,
        h1 {
          color: #596780;
        }

        .item__info {
          h1 {
            font-weight: 700;
            font-size: 25px;

            @media screen and (max-width: 800px) {
              font-size: 20px;
            }
          }
        }

        .item__barter {
          @media screen and (max-width: 800px) {
            font-size: 20px;
          }
          &-btn {
            display: flex;
            padding-bottom: 30px;
            gap: 20px;

            .button {
              width: 60px;
              height: 60px;
              border: 1px solid #596780;
              background-color: transparent;
              border-radius: 50%;
            }

            & button {
              border: none;
              border-radius: 20px;
              padding: 10px 70px;

              color: #ffffff;
              font-weight: 600;
              font-size: 15px;

              background-color: #16ab19;
              cursor: pointer;

              @media screen and (max-width: 800px) {
                padding: 10px 50px;
                font-size: 12px;
              }
            }

            & a {
              align-self: center;

              @media screen and (max-width: 800px) {
                font-size: 15px;
              }
            }
          }
        }
      }
    }
  }

  .title {
    font-weight: 600;
    font-size: 35px;
    color: #2d2d2d;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .description-box {
    width: 1320px;
    height: auto;
    padding: 30px;
    left: 60px;
    top: 1410px;
    /* white */
    background: #ffffff;
    border-radius: 20px;
  }

  .modal {
    font-size: 12px;
    background-color: #ffffff;
  }
  .modal > .header {
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 18px;
    text-align: center;
    padding: 5px;
  }
  .modal > .content {
    width: 100%;
    padding: 10px 5px;
  }
  .modal > .actions {
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
  }
  .modal > .close {
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    right: -10px;
    top: -10px;
    font-size: 24px;
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid #cfcece;
  }
`;

export const StyledPopup = styled(Popup)`
  &-content {
    left: 30% !important;
    top: 25% !important;
    .modal {
      font-size: 12px;
      background-color: #ffffff;
      width: 700px;
      height: 700px;
    }
    .modal > .content {
      padding: 0 55px;
      display: flex;
      flex-direction: column;
      gap: 50px;

      align-items: center;
      justify-content: center;

      & div > form {
        display: flex;
        flex-direction: column;
        gap: 5px;

        & > div > div {
          display: flex;
          gap: 20px;

          & > label {
            max-height: 100px;
            & > div {
              gap: 20px;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }
      & button {
        padding: 17px 70px;
        background-color: #16ab19;

        color: #ffffff;
      }

      & img {
        width: 110px;
        height: 100px;
      }
    }
    .modal > .close {
      cursor: pointer;
      position: absolute;
      display: block;
      padding: 2px 5px;
      line-height: 20px;
      right: 30px;
      top: 30px;
      font-size: 24px;
      background: #ffffff;
      border-radius: 18px;
      border: 1px solid #cfcece;
    }
    .modal .popup-input {
    }
  }
`;
