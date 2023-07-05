import { styled } from "styled-components";

const Box = () => {
  return (
    <Main>
      <Container>
        <Left>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
        </Left>
        <Right>
          <p style={{ color: "skyblue" }}>
            {" "}
            #field <span style={{ color: "#d3c9c9" }}>{"{"}</span>
          </p>
          <p style={{ margin: "0", marginLeft: "20px" }}>
            {" "}
            <span style={{ color: "lightgreen" }}>display</span>: flex;
          </p>
          <textarea placeholder="Type your answers here..." />
          <p style={{ margin: 0, marginBottom: "7px" }}>{"}"}</p>
          <ButHold>
            <button>Next</button>
          </ButHold>
        </Right>
      </Container>
    </Main>
  );
};

export default Box;

const ButHold = styled.div`
  width: 550px;
  display: flex;
  justify-content: flex-end;

  button {
    width: 100px;
    margin-right: 20px;
    height: 40px;
    border-radius: 5px;
    background-color: purple;
    color: white;
    font-size: 17px;
    border: none;
  }
`;

const Right = styled.div`
  margin-left: 10px;

  p {
    margin: 0;
    margin-top: 10px;
  }

  textarea {
    width: 400px;
    resize: none;
    height: 20px;
    margin-left: 20px;
    outline: none;
    border: none;
    background-color: #b1a2a2;
  }
`;

const Left = styled.div`
  width: 30px;
  height: 100%;
  background-color: #494949;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  p {
    margin: 0;
  }
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 190px;
  background-color: #282c34;
  border-radius: 7px;
  margin-top: 10px;
  display: flex;
`;
