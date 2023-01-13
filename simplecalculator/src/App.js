/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-eval */
import './App.css';
import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import BackspaceIcon from '@mui/icons-material/Backspace';

const useStyle = makeStyles({
  app: {
    border: '2px solid gray',
    width: '60%',
    marginTop: '10%',
    margin: 'auto',
    height: '50vh',

  },
  display: {
    border: '2px solid gray',
    margin: '10px',
    height: '50px',
    display: 'block',
  },
  row2: {
    display: 'flex',
    width: '882px',
    marginTop: '20px',
    gap: '200px',
    marginLeft: '10px',

  },
  row1: {
    display: 'flex',
    gap: '200px',
    width: '882px',
    marginLeft: '10px',
    marginTop: '35px',
  },
  row3: {
    display: 'flex',
    float: 'right',
    gap: '200px',
    marginTop: '20px',
    marginRight: '30px',
  },
  logicButton: {
    borderRadius: '28px !important',
    backgroundColor: '#cc5647 !important',
    color: 'whitesmoke !important',
    '&:hover': {
      borderRadius: '28px !important',
      backgroundColor: 'whitesmoke !important',
      color: '#cc5647 !important',

    },
  },
  numericalButton: {
    borderRadius: '28px !important',
    '&:hover': {
      borderRadius: '28px !important',
      backgroundColor: '#a29290 !important',
    },
  },
  firstH1: {
    paddingLeft: '10px', marginTop: '10px', marginBottom: '0px',
  },
  secondH2: {
    float: 'right', paddingRight: '10px', marginTop: '0px', marginBottom: '0px',
  },

});
function App() {
  const classes = useStyle();
  const [input, setInput] = React.useState('');
  const [answer, setAnswer] = React.useState(0);
  const clearHandler = () => {
    setInput('');
    setAnswer(0);
  };
  const numberHandler = (e) => {
    const c = input.concat(e.target.value);
    setInput(c);
  };
  const backSpaceHandler = () => {
    const reaming = input.slice(0, input.length - 1);
    setInput(reaming);
  };
  const calculateHandle = () => {
    try {
      const total = eval(input);
      setAnswer(total);
    } catch {
      setAnswer('some error');
    }
  };
  return (
    <div className={classes.app}>
      <div className={classes.display}>
        <h4 className={classes.firstH1}>
          {input}
        </h4>
        <h4 className={classes.secondH2}>
          {answer}
        </h4>
      </div>
      <div className={classes.row1}>
        <Button className={classes.logicButton} onClick={clearHandler}>Clear</Button>
        <Button onClick={backSpaceHandler} className={classes.logicButton}>
          <BackspaceIcon />
        </Button>
        <Button value="%" onClick={numberHandler} className={classes.logicButton}>%</Button>
        <Button value="/" onClick={numberHandler} className={classes.logicButton}>/</Button>
      </div>
      <div className={classes.row2}>
        <Button value="7" className={classes.numericalButton} onClick={numberHandler}>7</Button>
        <Button value="8" className={classes.numericalButton} onClick={numberHandler}>8</Button>
        <Button value="9" className={classes.numericalButton} onClick={numberHandler}>9</Button>
        <Button value="*" onClick={numberHandler} className={classes.logicButton}>*</Button>
      </div>
      <div className={classes.row2}>
        <Button value="4" className={classes.numericalButton} onClick={numberHandler}>4</Button>
        <Button value="5" className={classes.numericalButton} onClick={numberHandler}>5</Button>
        <Button value="6" className={classes.numericalButton} onClick={numberHandler}>6</Button>
        <Button value="-" onClick={numberHandler} className={classes.logicButton}>-</Button>
      </div>
      <div className={classes.row2}>
        <Button value="1" className={classes.numericalButton} onClick={numberHandler}>1</Button>
        <Button value="2" className={classes.numericalButton} onClick={numberHandler}>2</Button>
        <Button value="3" className={classes.numericalButton} onClick={numberHandler}>3</Button>
        <Button className={classes.logicButton} value="+" onClick={numberHandler}>+</Button>
      </div>
      <div className={classes.row3}>
        <Button className={classes.numericalButton} value="0" onClick={numberHandler}>0 0</Button>
        <Button className={classes.numericalButton} value="." onClick={numberHandler}>.</Button>
        <Button className={classes.logicButton} onClick={calculateHandle}>=</Button>
      </div>
    </div>
  );
}

export default App;
