import React from "react";
import ReactDOM from "react-dom";

import Profile from "./App";
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

ReactDOM.render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>,
  document.getElementById("root")
);
