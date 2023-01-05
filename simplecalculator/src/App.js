/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

const useStyle = makeStyles({
  app: {
    border: "2px solid gray",
    width: "50%",
    margin: "25% auto",
    height: "390px",
    backgroundColor: "black",
    color: "whitesmoke",

  },
  display: {
    border: "2px solid gray",
    margin: "10px",
    height: "25%",
  },
  row1: {
    display: "flex",
    gap: "30px",
    width: "100%",
    margin: "10px",
    marginTop: "20px",

  },
  row3: {
    display: "flex",
    gap: "22px",
    width: "100%",
    margin: "10px",
    marginTop: "20px",
  },
  row2: {
    display: "flex",
    gap: "30px",
    float: "right",
    marginRight: "15px",
  },

});
function App() {
  const [input, setInput] = React.useState("");
  const [answer, setAnswer] = React.useState(0);
  const clearHandler = () => {
    setInput("");
    setAnswer(0);
  };
  const numberHandler = (e) => {
    setInput(input.concat(e.target.value));
  };
  const backSpaceHandler = () => {
    setInput(input.slice(0, -1));
  };
  const classes = useStyle();
  return (
    <div className={classes.app}>
      <div className={classes.display}>
        <h2 style={{
          margin: "0px", marginBottom: "10px", width: "100%", paddingLeft: "10px",
        }}
        >
          {input}
        </h2>
        <h2 style={{ float: "right", paddingRight: "10px" }}>{answer}</h2>
      </div>
      <div className={classes.row3}>
        <Button onClick={clearHandler} variant="outlined" sx={{ borderRadius: 28, backgroundColor: "#cc5647", color: "whitesmoke" }}>Clear</Button>
        <Button onClick={backSpaceHandler} variant="outlined" sx={{ borderRadius: 28, backgroundColor: "#cc5647", color: "whitesmoke" }}>Back</Button>
        <Button variant="outlined" value="%" onClick={numberHandler} sx={{ borderRadius: 28, backgroundColor: "#cc5647", color: "whitesmoke" }}>%</Button>
        <Button variant="outlined" value="/" onClick={numberHandler} sx={{ borderRadius: 28, backgroundColor: "#cc5647", color: "whitesmoke" }}>/</Button>
      </div>
      <div className={classes.row1}>
        <Button value="7" onClick={numberHandler}>7</Button>
        <Button value="8" onClick={numberHandler}>8</Button>
        <Button value="9" onClick={numberHandler}>9</Button>
        <Button variant="outlined" value="*" onClick={numberHandler} sx={{ borderRadius: 28, backgroundColor: "#cc5647", color: "whitesmoke" }}>*</Button>
      </div>
      <div className={classes.row1}>
        <Button value="4" onClick={numberHandler}>4</Button>
        <Button value="5" onClick={numberHandler}>5</Button>
        <Button value="6" onClick={numberHandler}>6</Button>
        <Button variant="outlined" value="-" onClick={numberHandler} sx={{ borderRadius: 28, backgroundColor: "#cc5647", color: "whitesmoke" }}>-</Button>
      </div>
      <div className={classes.row1}>
        <Button value="1" onClick={numberHandler}>1</Button>
        <Button value="2" onClick={numberHandler}>2</Button>
        <Button value="3" onClick={numberHandler}>3</Button>
        <Button sx={{ borderRadius: 28, backgroundColor: "#cc5647", color: "whitesmoke" }} value="+" onClick={numberHandler}>+</Button>
      </div>
      <div className={classes.row2}>
        <Button value="0" onClick={numberHandler}>0</Button>
        <Button value="." onClick={numberHandler}>.</Button>
        <Button sx={{ borderRadius: 28, backgroundColor: "#cc5647", color: "whitesmoke" }}>=</Button>
      </div>
    </div>
  );
}

export default App;
