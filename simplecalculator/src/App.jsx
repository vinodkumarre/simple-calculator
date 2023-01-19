/* eslint-disable no-eval */
import './App.css';
import React from 'react';
import { makeStyles } from '@mui/styles';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Buttons from './Button';

const useStyle = makeStyles({
  app: {
    border: '2px solid gray',
    width: '60%',
    marginTop: '10%',
    margin: 'auto',
    height: '55vh',

  },
  display: {
    border: '2px solid gray',
    margin: '10px',
    height: '50px',
    display: 'block',
  },
  row2: {
    display: 'flex',
    marginTop: '20px',
    justifyContent: 'space-between',
    marginLeft: '10px',
    marginRight: '20px',

  },
  row1: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '10px',
    marginTop: '35px',
    marginRight: '20px',
  },
  row3: {
    display: 'flex',
    float: 'right',
    gap: '225px',
    marginTop: '20px',
    marginRight: '20px',
  },
  logicButton: {
    width: '50px',
    height: '45px',
    padding: '10px',
    border: '0px',
    borderRadius: '28px !important',
    backgroundColor: '#cc5647 !important',
    color: 'whitesmoke !important',
    '&:hover': {
      cursor: 'pointer',
      borderRadius: '28px !important',
      backgroundColor: 'whitesmoke !important',
      color: '#cc5647 !important',

    },
  },
  numericalButton: {
    width: '50px',
    padding: '10px',
    border: '0px',
    borderRadius: '28px !important',
    '&:hover': {
      cursor: 'pointer',
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
      setAnswer('Error');
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
        <Buttons className={classes.logicButton} onClick={clearHandler}>Clear</Buttons>
        <Buttons onClick={backSpaceHandler} className={classes.logicButton}>
          <BackspaceIcon />
        </Buttons>
        <Buttons value="%" onClick={numberHandler} className={classes.logicButton}>%</Buttons>
        <Buttons value="/" onClick={numberHandler} className={classes.logicButton}>/</Buttons>
      </div>
      <div className={classes.row2}>
        <Buttons value="7" className={classes.numericalButton} onClick={numberHandler}>7</Buttons>
        <Buttons value="8" className={classes.numericalButton} onClick={numberHandler}>8</Buttons>
        <Buttons value="9" className={classes.numericalButton} onClick={numberHandler}>9</Buttons>
        <Buttons value="*" onClick={numberHandler} className={classes.logicButton}>*</Buttons>
      </div>
      <div className={classes.row2}>
        <Buttons value="4" className={classes.numericalButton} onClick={numberHandler}>4</Buttons>
        <Buttons value="5" className={classes.numericalButton} onClick={numberHandler}>5</Buttons>
        <Buttons value="6" className={classes.numericalButton} onClick={numberHandler}>6</Buttons>
        <Buttons value="-" onClick={numberHandler} className={classes.logicButton}>-</Buttons>
      </div>
      <div className={classes.row2}>
        <Buttons value="1" className={classes.numericalButton} onClick={numberHandler}>1</Buttons>
        <Buttons value="2" className={classes.numericalButton} onClick={numberHandler}>2</Buttons>
        <Buttons value="3" className={classes.numericalButton} onClick={numberHandler}>3</Buttons>
        <Buttons className={classes.logicButton} value="+" onClick={numberHandler}>+</Buttons>
      </div>
      <div className={classes.row3}>
        <Buttons className={classes.numericalButton} value="0" onClick={numberHandler}>0 0</Buttons>
        <Buttons className={classes.numericalButton} value="." onClick={numberHandler}>.</Buttons>
        <Buttons className={classes.logicButton} onClick={calculateHandle}>=</Buttons>
      </div>
    </div>
  );
}

export default App;
