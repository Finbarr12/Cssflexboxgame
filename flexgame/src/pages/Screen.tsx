import styled from "styled-components";
import Box from "../components/Box";

const Screen = () => {
  return (
    <Container>
      <First>
        <Holder>
          <Up>
            <h3>Learn FlexboxCSS</h3>
            <h5>Level 1</h5>
          </Up>
          <p>
            Hello, Hero! As you know, we must help Arthur defeat the three evil
            brothers and return stolen gold! Are you ready for the adventure?
            Seems like Arthur lost some health. Let's help him! On the right you
            can see Arthur. Your goal is to restore this health.
          </p>
          <p>
            Guide Arthur to the food on the right by using the justify-content
            property, which aligns items horizontally and accepts the following
            values:
          </p>
          <p style={{ fontWeight: "bolder", color: "white", fontSize: "15px" }}>
            <ul>
              <li>
                flex-start: Items align to the left side of the container.
              </li>
              <li>flex-end: Items align to the right side of the container.</li>
              <li>center: Items align at the center of the container.</li>
              <li>
                space-between: Items display with equal spacing between them.
              </li>
              <li>
                space-around: Items display with equal spacing around them.
              </li>
            </ul>
          </p>
          <Box />
        </Holder>
      </First>
      <Second></Second>
    </Container>
  );
};

export default Screen;

const Up = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  h3 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    color: white;
    font-size: 24px;
    text-transform: uppercase;
    margin: 0;
  }

  h5 {
    color: white;
    font-size: 21px;
    text-transform: capitalize;
    margin: 0;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
`;

const Holder = styled.div`
  width: 85%;
  height: 93%;
  /* background-color: red; */

  p {
    color: #d3c9c9;
    font-size: 17px;
    line-height: 1.5rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Second = styled.div`
  background-color: green;
`;
const First = styled.div`
  background-color: #332a37;
  display: flex;
  align-items: center;
  justify-content: center;
`;
