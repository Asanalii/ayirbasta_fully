import styled from "styled-components";

export default styled.div`
  display: flex;
  gap: 40px;

  & .empty {
    margin-top: 180px;
    margin-left: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  & .cont {
    padding: 20px 40px;
    & > div {
      display: flex;
      flex-wrap: wrap;
      gap: 50px;

      & > div {
        padding: 20px 30px;
      }
      & div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & button {
          padding: 13px 80px;
          background-color: #16ab19;

          color: #fffff;
          font-weight: 600;
          font-size: 15px;
        }
        & .swap {
          width: 70px;
          height: 70px;
          background-color: #f9f9f9;
          border-radius: 10px;

          display: flex;

          align-self: center;
          justify-content: center;

          & img {
            transform: rotate(90deg);
            align-self: center;
          }
        }
      }
    }
  }
`;
