import { useState, useEffect } from "react";
import "./App.css";

// const Person = (props) => {
//   return (
//     <>
//       <h1>First Name: Emmaculat</h1>
//       <h2>Last Name: Chelangat</h2>
//       <h2>Surname: Chelaa</h2>
//       <h2>Age: 22</h2>

//       <h1>First Name: {props.fname}</h1>
//       <h2>Last Name: {props.lname}</h2>
//       <h2>Course: {props.course}</h2>
//       <h2>Registration: {props.registration}</h2>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <div className="App">
//       {/* <Person /> */}
//       <Person
//         fname={"Jill"}
//         lname={"Chepkirui"}
//         course={"Computer Science"}
//         registration={"CSC"}
//       />
//       <Person
//         fname={"Brandon"}
//         lname={"Kiptoo"}
//         course={"Education"}
//         registration={"EDS"}
//       />
//     </div>
//   );
// };
const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100)
  }, []);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
};

export default App;
