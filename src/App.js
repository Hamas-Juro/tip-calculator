import { useState } from "react";

function App() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const bill = description * ((quantity + quantity2) / 2 / 100);
  const handleSubmit = (e) => {
    e.preventDefault();
    setDescription("");
  };
  const handleReset = () => {
    setDescription("");
    setQuantity(0);
    setQuantity2(0);
  };
  return (
    <div className="App">
      Lets calculate the bill
      <Bill
        description={description}
        setDescription={setDescription}
        handleSubmit={handleSubmit}
      />
      <Service percentage={quantity} onSelect={setQuantity}>
        How did you like the service?
      </Service>
      <Service percentage={quantity2} onSelect={setQuantity2}>
        How did Your Friend Like the Service
      </Service>
      {bill > 0 && (
        <>
          <Output description={description} bill={bill} />
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
}

const Bill = ({ description, setDescription, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <p>How much the bill was?</p>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(Number(e.target.value))}
      />
    </form>
  );
};

const Service = ({ children, percentage, onSelect }) => {
  if (percentage === "Not Satisfied (0%)") {
  }
  return (
    <div>
      <p>{children}</p>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Not Satisfied 0%</option>
        <option value="5">Ok 5%</option>
        <option value="10">Satisfactory 10%</option>
        <option value="20">Very Good 20%</option>
      </select>
    </div>
  );
};

const Output = ({ description, bill }) => {
  return (
    <div>
      <h3>
        You Pay ${description + bill} ( ${description} + {bill}(tip) )
      </h3>
    </div>
  );
};

const Reset = ({ handleReset }) => {
  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
