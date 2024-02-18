import styled from "styled-components";

export default styled.div`
  .barterMenu {
    width: 300px;
    height: 900px;
    background-color: #fff;
    padding: 30px;

    @media screen and (max-width: 1024px) {
      width: 220px;
    }

    &-main {
      display: flex;
      flex-direction: column;
    }

    ul {
      font-weight: 400;
      color: #93a8cc;
      display: flex;
      flex-direction: column;
      gap: 30px;

      li {
        display: flex;
        gap: 17px;
        align-items: center;

        color: #596780;
        cursor: pointer;

        text-transform: uppercase;

        p {
          font-weight: 400;
          font-size: 18px;
        }
      }
      .active {
        border-radius: 20px;
        height: 50px;

        background-color: #de8807;
        padding: 10px;

        p {
          color: white;
        }
      }
    }
  }
`;
