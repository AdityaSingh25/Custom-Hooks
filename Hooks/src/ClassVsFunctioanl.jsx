// import { useState, useEffect } from "react";
// import "./App.css";
// import React from "react";

// function App() {
//   const [render, setRender] = useState(true);

//   useEffect(() => {
//     setInterval(() => {
//       setRender((render) => !render); // toggeling the value of render
//     }, 2000);
//   }, []);

//   return <div>{render ? <MyComponent /> : <div>Unmounted</div>}</div>;
// }

// class MyComponent extends React.Component {
//   componentDidMount() {
//     console.log("component mounted");
//   }

//   componentWillUnmount() {
//     console.log("component unmounted");
//   }

//   render() {
//     return <div>Hi there</div>;
//   }
// }
// // function MyComponent() {
// //   useEffect(() => {
// //     console.log("component mounted");

// //     return () => {
// //       console.log("Component unmounted");
// //     };
// //     // you can return a function from a use effect
// //   }, []);

// //   // so this "return" inside the useEffect -> it will run when the component unmounts. 1st render -> "Component mounted" will print -> then suppose some dependency is also there and when it changes then first "Component unmounted"will run then component mounted will run;

// //   return <div>From inside MyComponent</div>;
// // }

// // class component

// // class MyComponent extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { count: 0 };
// //   }

// //   incrementCount = () => {
// //     this.setState({ count: this.state.count + 1 });
// //   };

// //   render() {
// //     return (
// //       <div>
// //         <p>{this.state.count}</p>
// //         <button onClick={this.incrementCount}>Increment</button>
// //       </div>
// //     );
// //   }
// // }

// //functional component

// // function MyComponent() {
// //   const [count, setCount] = useState(0);
// //   return (
// //     <div>
// //       <p>{count}</p>
// //       <button
// //         onClick={() => {
// //           setCount(count + 1);
// //         }}
// //       >
// //         Increment
// //       </button>
// //     </div>
// //   );
// // }

// export default App;
