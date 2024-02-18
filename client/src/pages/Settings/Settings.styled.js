import styled from "styled-components";

export default styled.div`
  display: flex;
  gap: 40px;
  & .cont {
    margin-top: 40px;
    gap: 40px;
    width: 1040px;

    & input,
    textarea,
    select {
      width: 100%;
      max-width: 504px;
      height: 40px;
      border-radius: 70px;
      border: 1px solid rgba(195, 212, 233, 0.4);
      padding: 8px 24px;
      margin-top: 14px;

      &::placeholder {
        font-family: "Plus Jakarta Sans";
        font-size: 15px;
        font-weight: 400;
      }
    }
    & button {
      margin-top: 30px;
      padding: 13px 107px;
      background-color: #16ab19;

      color: #ffffff;
      font-size: 15px;
      font-weight: 600;
    }

    & h4 {
      margin-top: 18px;
    }
    & > div {
      background-color: #ffffff;
      border-radius: 20px;
      padding: 25px 60px 25px 35px;

      display: flex;
      flex-direction: column;
      gap: 7px;

      & > .info {
        display: flex;
        justify-content: space-between;

        & h3 {
          font-weight: 500;
          font-size: 20px;
        }
        & h4 {
          font-weight: 500;
        }

        & p {
          font-weight: 300;
          font-size: 15px;
        }
      }
      & .settings {
        display: flex;

        &-main {
          flex: 2;
        }

        & .upload-pic {
          padding: 22px 50px;
          border-radius: 10px;
          //   height: 200px;
          background-color: #f9f9f9;
          label {
            & > div > div {
              display: flex;
              flex-direction: column;
              gap: 15px;

              align-items: center;
              justify-content: center;
            }

            & p {
              cursor: pointer;
              span {
                color: #16ab19;
              }
            }

            .dragdrop {
              border-radius: 10px;
              border: 1px dashed #dee6ee;
              padding: 10px 20px;
              background-color: #ffffff;
            }
          }
        }
      }
    }
  }
`;
