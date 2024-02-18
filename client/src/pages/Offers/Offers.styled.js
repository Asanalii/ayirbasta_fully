import styled from "styled-components";

export default styled.div`
  display: flex;

  & .empty {
    margin-top: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 2;
    gap: 30px;

    p {
      text-align: center;
    }

    .button {
      background-color: $green;
      width: 250px;
      height: 50px;
    }
  }
  & .info {
    display: flex;
    justify-content: space-between;

    & button {
      padding: 10px 76px;
      background-color: #16ab19;
      border-radius: 20px;
      border: none;

      color: #ffffff;
      font-size: 15px;

      cursor: pointer;
    }
  }

  & .offers {
    display: flex;
    flex-direction: column;
    flex: 5;

    padding: 40px;
  }
  & .cont {
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    align-items: center;
    gap: 44px;

    margin-top: 30px;
  }
`;
