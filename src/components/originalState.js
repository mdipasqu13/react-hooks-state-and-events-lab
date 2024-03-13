// // import React from "react";
// // import ShoppingList from "./ShoppingList";
// // import itemData from "../data/items";

// // function App() {

// //   // replace 'false' with a state variable that can be toggled between true and false
// //   // this will be used for the Dark Mode Toggle feature
// //   const appClass = false ? "App dark" : "App light"

// //   return (
// //     <div className={appClass}>
// //       <header>
// //         <h2>Shopster</h2>
// //         <button>Dark Mode</button>
// //       </header>
// //       <ShoppingList items={itemData} />
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {
//   // Keep the initial value as true if necessary
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   // Keep the line const appClass = false ? "App dark" : "App light" unchanged
//   const appClass = isDarkMode ? "App dark" : "App light";

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={toggleDarkMode}>
//           {/* Button text toggles based on isDarkMode state */}
//           {isDarkMode ? "Light Mode" : "Dark Mode"}
//         </button>
//       </header>
//       {/* Pass isDarkMode state to ShoppingList component */}
//       <ShoppingList items={itemData} className={isDarkMode ? "dark" : "light"} />
//     </div>
//   );
// }

// export default App;