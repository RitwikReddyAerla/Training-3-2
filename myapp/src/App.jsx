// import React, { Component } from "react";
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";
// import CBCPropsex1 from "./propsexample/CBCPropsex1";

// class App extends Component {
//     render() {
//         return(
//             <div>App
//                 <hr></hr>
//                 <CBCPropsex1 
//                 username="Sam" 
//                 age={25} 
//                 desig={["developer", "tester"]} 
//                 userdetails={{city:"hyd", area:"maisammaguda"}} 
//                 sendfun={function(){alert("Hi i am from parent component")}}/>
//             </div>
//         )
//     }
// }
// export default App;

// import React from 'react'
// import FBCPROPex1 from "./propsexample/FBCPROPex1";

// const App = () => {
//   return (
//     <div>
//         <FBCPROPex1
//         username="a"
//         isLoggedIn={true}
//         hobbies={["tv", "pirating", "gaming"]}
//         />
//     </div>
//   )
// }

// export default App;

// ! props children example
// import React from 'react'
// import PropsChildrebEx from './propsexample/PropsChildrebEx'
// import ChildProps from './propsexample/ChildProps'
// import Child1 from './propsexample/Child1'

// const App = () => {
//   return (
//     <div>
//       {/* <PropsChildrebEx username="arun" company="meta">
//         <h1>this data is passed as props children</h1>
//         <ChildProps/>
//       </PropsChildrebEx> */}
//       <Child1 university="mru"/>
//     </div>
//   )
// }

// export default App

// // ! state example
// import React from 'react'
// import CBCStateEx from './stateexamples/CBCStateEx'
// import FBCStateEx from './stateexamples/FBCStateEx'
// import FunctionalComponent from './components/FunctionalComponent'
// import MyForm from "./components/MyForm"

// const App = () => {
//   return (
//     <div>
//       App
//       <hr/>
//       {/* <CBCStateEx/> */}
//       {/* <FBCStateEx/> */}
//       {/* <FunctionalComponent/> */}
//       <MyForm></MyForm>
//     </div>
//   )
// }

// export default App

//! UseEffect
// import React from 'react'
// import ExUseEffect from './Hooks/ExUseEffect'

// const App = () => {
//   return (
//     <div>
//       <ExUseEffect></ExUseEffect>
//     </div>
//   )
// }

// export default App

// ! useRef
import React from 'react'
import Refexamples from './hooks/RefExamples'
import ExUseEffect from './hooks/ExUseEffect'

const App = () => {
  return (
    <div>
      <Refexamples></Refexamples>
      {/* <ExUseEffect></ExUseEffect> */}
    </div>
  )
}

export default App
