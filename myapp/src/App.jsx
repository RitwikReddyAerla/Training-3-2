import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Sidebar1 from "./components/Sidebar1";
import Sidebar2 from "./components/Sidebar2";
import Footer from "./components/Footer";
import CBCPropsex1 from "./components/CBCPropsex1";

// const App = () => {
//     return(
//         <>
//             <div>Hello Welcome to </div>
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, illo autem. Eius unde ex earum, porro autem facere, maiores eos consequuntur architecto enim laudantium, sint aliquid quaerat nobis dignissimos. Fugiat.</p>
//         </>    
//     )
// }
// export default App

const App=()=>{
    return(
        <div className="app">
            <CBCPropsex1 username="Sam"></CBCPropsex1>
            {/* <Navbar></Navbar>
            <Main></Main>
            <div className="sidebar">
                <Sidebar1></Sidebar1>
                <Sidebar2></Sidebar2>
            </div>
            <Footer></Footer> */}
        </div>
    )
}
export default App;