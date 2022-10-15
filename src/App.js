import "./App.css";
import { useState,useEffect } from "react";
function App() {
  const [bill, setBill] = useState(0);
  const [person, setPerson] = useState(0);
  const [tip, setTip] = useState(0);
  const [totalTip,setTotalTip] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    // if (bill > 0 || tip > 0 || numberOfPeop > 0) {
    //   // setStarted(true);
    // }

    if (bill > 0 && tip > 0 && person > 0) {
      calculatednum(bill, person, tip);
      // setReset(true);
    }
  }, [bill, tip, person]);
  
  

  const calculatednum = (amount, persons, percent) => {
    setTotalAmount(Math.round(amount * percent * 100) / 100 );
    setTotalTip(Math.round(((amount * percent) / persons) * 100) / 100);
  };

  return (
    <div className="App">
      <h1 className="heading">SPLITTER</h1>
      <div className="rectangle">
        <div>
          <p className="bill">Bill</p>
          <input
            type="text"
            value={bill}
            onChange={(e) => {
              console.log(e.target.value);
              setBill(e.target.value);
            }}
            className="rec"
          ></input>
          <p className="Tip">Select Tip %</p>
          <div className="grid">
            <button
              className="btn"
              onClick={() => {
                setTip(0.05);
              }}
            >
              5%
            </button>
            <button
              onClick={() => {
                setTip(0.1);
              }}
              className="btn"
            >
              10%
            </button>
            <button
              onClick={() => {
                setTip(0.15);
              }}
              className="btn"
            >
              15%
            </button>
            <button
              onClick={() => {
               
                setTip(0.25);
              }}
              className="btn"
            >
              25%
            </button>
            <button
              onClick={() => {
                setTip(0.5);
              }}
              className="btn"
            >
              50%
            </button>
            <input
              placeholder="Custom"
            onChange={(e) =>{
              setTip(e.target.value / 100)
            }}
              className="custom"
            ></input>
          </div>
          <p className="people">Number of people</p>
          <input
            type="text"
            value={person}
            onChange={(e) => {
              console.log(e.target.value);
              setPerson(e.target.value);
      
            }}
            className="ppl"
          ></input>
        </div>
        <div className="secondrec">
          <div>
            <div className="calculations">
              <span>
                <p className="tipamount">Tip Amount</p>
                <p className="person1">/ person</p>
              </span>
              <h1 className="calculatednum">{totalTip} $</h1>
            </div>

            <div className="calculations">
              <span>
                <p className="tipamount">Total</p>
                <p className="person1">/ person</p>
              </span>
              <h1 className="calculatednum">{totalAmount} $</h1>
            </div>
          </div>
          <button className="reset" onClick={()=>{
            setTip(0)
            setBill(0)
            setTotalAmount(0)
            setPerson(0)
            setTotalTip(0)
            
          }}>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
