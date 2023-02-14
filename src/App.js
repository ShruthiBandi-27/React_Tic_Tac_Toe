import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col, Card, CardBody } from "reactstrap";
import { useState } from "react";
import Icons from "./Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const itemArray = new Array(9).fill("empty");

export default function App() {
  console.log(itemArray);
  const [isCircle, setIsCircle] = useState("circle");
  const [winMessage, setWinMessage] = useState("");

  const relaodGame = () => {
    itemArray.fill("empty");
    setIsCircle(true);
    setWinMessage("");
  };

  const changeItem = (index) => {
    if (winMessage) {
      return toast.warning(`Game Over!!! ${winMessage}`);
    }
    if (itemArray[index] === "empty") {
      itemArray[index] = isCircle ? "circle" : "cross";
      setIsCircle(!isCircle);
    } else {
      return toast.error("Already filled");
    }
    checkWinner();
  };
  const checkWinner = () => {
    if (!itemArray.includes("empty")) {
      setWinMessage(`Its a draw!!!`);
      return toast.warning("Oops!! its a draw");
    }
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} is a winner!!!`);
      toast.success(`Game Over!!! ${winMessage}`);
    }

    if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMessage(`${itemArray[3]} is a winner!!!`);
      toast(`Game Over!!! ${winMessage}`);
    }

    if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMessage(`${itemArray[6]} is a winner!!!`);
      toast(`Game Over!!! ${winMessage}`);
    }

    if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} is a winner!!!`);
      toast(`Game Over!!! ${winMessage}`);
    }

    if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMessage(`${itemArray[1]} is a winner!!!`);
      toast(`Game Over!!! ${winMessage}`);
    }

    if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} is a winner!!!`);
      toast(`Game Over!!! ${winMessage}`);
    }

    if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} is a winner!!!`);
      toast(`Game Over!!! ${winMessage}`);
    }

    if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} is a winner!!!`);
      toast(`Game Over!!! ${winMessage}`);
    }
  };
  return (
    <div className="App">
      <Container>
        <Row>
          {<h1>TIC TAC TOE</h1>}
          <Col md={6} className="offset-md-3">
            <ToastContainer theme="dark" autoClose={2000} />
            {winMessage ? (
              <>
                <h1>{winMessage}</h1>
                <Button color="success" block onClick={relaodGame}>
                  Reload Game
                </Button>
              </>
            ) : (
              <h1>{isCircle ? "Player 1 " : "Player 2 "} turn</h1>
            )}

            <div className="grid">
              {itemArray.map((value, index) => {
                return (
                  <Card key={index} onClick={() => changeItem(index)}>
                    <CardBody className="box">
                      <Icons value={value} />
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
      {/* <Button color="success" className="mybtn">reactstrapButton</Button> */}
    </div>
  );
}
