import { useState } from "react";

const Home = () => {
  let [counter, setCounter] = useState(0);
  // let counter = 15;
  // function addValue () {
  //   counter+=1;
  //   console.log(counter);
  // }

  // const addValue = () => {
  //   if (counter < 20) {
  //     counter = counter + 1;
  //     setCounter(counter);
  //   }
  // };

  // const removeValue = () => {
  //   if (counter > 0) {
  //     counter = counter - 1;
  //     setCounter(counter);
  //   }
  // };

  const addValue = () => {
      counter = counter + 1;
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
  };

  const removeValue = () => {
      counter = counter - 1;
      setCounter(prevCounter => prevCounter - 1);
      setCounter(prevCounter => prevCounter - 1);
      setCounter(prevCounter => prevCounter - 1);
      setCounter(prevCounter => prevCounter - 1);
  };

  return (
    <>
      <h1 className="bg-red-500 text-white">Home</h1>
      <div className="mt-10">
        <h2 className="mb-5">Counter value: {counter}</h2>
        <button className="bg-orange-700 px-4 py-2" onClick={addValue}>
          Add Value
        </button>
        <button className="bg-red-700 px-4 py-2 ml-5" onClick={removeValue}>
          Remove Value
        </button>
      </div>


    </>
  );
};

export default Home;
