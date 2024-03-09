import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Task_one from "./component/task1/task1";
import TaskTwo from "./component/task1/task2";
import Taskthree from "./component/task1/task3";
import Taskfour from "./component/task1/task4";
import Taskfive from "./component/task1/task5";
import TaskSix from "./component/task1/task6";
import Taskseven from "./component/task1/task7";
import {TaskNine} from "./component/task1/task9";
import TaskTen from "./component/task1/task10";
import { Productpage } from "./component/task1/task10";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MyNav from './nav';
// import 'bootstrap/dist/js/bootstrap.bundle'
import { Counter } from "./component/task1/counter";
import { Details } from "./component/task1/details";
import { Feedback } from "./feedback1";
import { Greetings } from "./component/task1/feedback";
import MyComponent from "./component/task1/date";
import { Clocify } from "./project";
import VideoPlayer from "./video";
import { Animation, Drop, Drops } from "./animation";
import { MySvgComponent } from "./project1";
import { Tags } from "./project1";
import { Alerts } from "./alart";
import { Accounts } from "./accounts";
import { Authentication } from "./authentication";
import 'bootstrap/dist/js/bootstrap';
import { Integrations } from "./integrations";
import { Down } from "./animation";
import { Login } from "./login";
import { Signup } from "./signup";
import { TimeTracker } from "./startproject";
import { SettingNav } from "./projectnav";
import { Setting } from "./settingnav";
// import Sidebar from "./bar";
import Password from "./homepage";
import LoginDetails from "./log";
import Signups from "./sign";
import { Task11 } from "./component/task1/task11";
import GraphComponent from "./reports/graphs";
// import MyCalendar from "./reports/calander";
import MySideNav from "./barr";
import YourComponent from "./barr";
import Prosidebar from "./proside";
import StudentAttendance from "./attendendce/attend";
import MainComponent from "./Modal";
import Admin from "./integrations";
import { MyTimer } from "./timer";
import MilestoneTable from "./timer";
import Profile from "./reports/profile";
import Progration from "./reports/progration";
import SignIn from "./lifepro/lifepro";
import ParticleBackground from "./lifepro/sam";
import Apppp from "./lifepro/sam";
import Dashboard from "./lifepro/sam";
import { BrowserRouter as Router,Switch} from 'react-router-dom';
function App(){
    // const videoId = 'YOUR_YOUTUBE_VIDEO_ID';
    return(
    <>
 {/* <BrowserRouter>
   <Routes>
       <Route path="/task1" element={[<MyNav/>,<Task_one/>]}></Route>
       <Route path="/task2" element={[<MyNav/>,<TaskTwo/>]}></Route>
       <Route path="/task3" element={[<MyNav/>,<Taskthree/>]}></Route>
       <Route path="/task4" element={[<MyNav/>,<Taskfour/>]}></Route>
       <Route path="/task5" element={[<MyNav/>,<Taskfive/>]}></Route>
       <Route path="/task6" element={[<MyNav/>,<TaskSix/>]}></Route>
       <Route path="/task7" element={[<MyNav/>,<Taskseven/>]}></Route>
       <Route path="/task9" element={[<MyNav/>,<TaskNine/>]}></Route>
       <Route path="/counter" element={[<MyNav/>,<Counter/>]}></Route>
       <Route path="/json" element={[<MyNav/>,<Productpage/>]}></Route>
       <Route path="/details/:id" element={[<MyNav/>,<Details/>]}></Route>
       <Route path="/task10" element={[<MyNav/>,<Feedback/>]}></Route>
       <Route path="/feedback" element={[<MyNav/>,<Greetings/>]}></Route>
       <Route path="/date" element={[<MyNav/>,<MyComponent/>]}></Route>
   </Routes>
   </BrowserRouter> */}
    {/* <BrowserRouter>
   <Routes>
       <Route path="/alart" element={[<SettingNav/>,<Alerts/>]}></Route>
       </Routes>
   </BrowserRouter> */}
   {/* <Password/> */}
   {/* <BrowserRouter>
     <Routes>
       <Route path="/" element={<Setting/>} />
       <Route path="/accounts" element={<Accounts/>}/>
     </Routes>
   </BrowserRouter> */}


{/* <BrowserRouter>
     <Routes>
       <Route path="/" element={<Setting/>} />
     </Routes>
   </BrowserRouter> */}
  
   {/* <ParticleAnimation/>  */}

   <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
   </>
   );
}
   export default App; 


















    
    // import React, { useEffect, useState } from "react";
    // import'bootstrap/dist/css/bootstrap.css';
    // import './App.css';
    // import Board from './board';
    // import Editable from './editable';
    
    // function App() {
    //   const [boards, setBoards] = useState(
    // JSON.parse(localStorage.getItem("prac-kanban")) || []
    //   );
    
    //   const [targetCard, setTargetCard] = useState({
    //     bid: "",
    //     cid: "",
    //   });
    
    //   const addboardHandler = (name) => {
    //     const tempBoards = [...boards];
    //     tempBoards.push({
    //       id: Date.now() + Math.random() * 2,
    //       title: name,
    //       cards: [],
    //     });
    //     setBoards(tempBoards);
    //   };
    
    //   const removeBoard = (id) => {
    //     const index = boards.findIndex((item) => item.id === id);
    //     if (index < 0) return;
    
    //     const tempBoards = [...boards];
    //     tempBoards.splice(index, 1);
    //     setBoards(tempBoards);
    //   };
    
    //   const addCardHandler = (id, title) => {
    //     const index = boards.findIndex((item) => item.id === id);
    //     if (index < 0) return;
    
    //     const tempBoards = [...boards];
    //     tempBoards[index].cards.push({
    //       id: Date.now() + Math.random() * 2,
    //       title,
    //       labels: [],
    //       date: "",
    //       tasks: [],
    //     });
    //     setBoards(tempBoards);
    //   };
    
    //   const removeCard = (bid, cid) => {
    //     const index = boards.findIndex((item) => item.id === bid);
    //     if (index < 0) return;
    
    //     const tempBoards = [...boards];
    //     const cards = tempBoards[index].cards;
    
    //     const cardIndex = cards.findIndex((item) => item.id === cid);
    //     if (cardIndex < 0) return;
    
    //     cards.splice(cardIndex, 1);
    //     setBoards(tempBoards);
    //   };
    
    //   const dragEnded = (bid, cid) => {
    //     let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
    //     s_boardIndex = boards.findIndex((item) => item.id === bid);
    //     if (s_boardIndex < 0) return;
    
    //     s_cardIndex = boards[s_boardIndex]?.cards?.findIndex(
    //       (item) => item.id === cid
    //     );
    //     if (s_cardIndex < 0) return;
    
    //     t_boardIndex = boards.findIndex((item) => item.id === targetCard.bid);
    //     if (t_boardIndex < 0) return;
    
    //     t_cardIndex = boards[t_boardIndex]?.cards?.findIndex(
    //       (item) => item.id === targetCard.cid
    //     );
    //     if (t_cardIndex < 0) return;
    
    //     const tempBoards = [...boards];
    //     const sourceCard = tempBoards[s_boardIndex].cards[s_cardIndex];
    //     tempBoards[s_boardIndex].cards.splice(s_cardIndex, 1);
    //     tempBoards[t_boardIndex].cards.splice(t_cardIndex, 0, sourceCard);
    //     setBoards(tempBoards);
    
    //     setTargetCard({
    //       bid: "",
    //       cid: "",
    //     });
    //   };
    
    //   const dragEntered = (bid, cid) => {
    //     if (targetCard.cid === cid) return;
    //     setTargetCard({
    //       bid,
    //       cid,
    //     });
    //   };
    
    //   const updateCard = (bid, cid, card) => {
    //     const index = boards.findIndex((item) => item.id === bid);
    //     if (index < 0) return;
    
    //     const tempBoards = [...boards];
    //     const cards = tempBoards[index].cards;
    
    //     const cardIndex = cards.findIndex((item) => item.id === cid);
    //     if (cardIndex < 0) return;
    
    //     tempBoards[index].cards[cardIndex] = card;
    
    //     setBoards(tempBoards);
    //   };
    
    //   useEffect(() => {
    //     localStorage.setItem("prac-kanban", JSON.stringify(boards));
    //   }, [boards]);
    
    //   return (
    //     <div className="app">
    //       <div className="app_nav">
    //         <h1>Kanban Board</h1>
    //       </div>
    //       <div className="app_boards_container">
    //         <div className="app_boards">
    //           {boards.map((item) => (
    //             <Board
    //               key={item.id}
    //               board={item}
    //               addCard={addCardHandler}
    //               removeBoard={() => removeBoard(item.id)}
    //               removeCard={removeCard}
    //               dragEnded={dragEnded}
    //               dragEntered={dragEntered}
    //               updateCard={updateCard}
    //             />
    //           ))}
    //           <div className="app_boards_last">
    //             <Editable
    //               displayClass="app_boards_add-board"
    //               editClass="app_boards_add-board_edit"
    //               placeholder="Enter Board Name"
    //               text="Add Board"
    //               buttonText="Add Board"
    //               onSubmit={addboardHandler}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // }
    
    // export default App;