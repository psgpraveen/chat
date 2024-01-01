import "./App.css";
import SocketIO from 'socket.io-client';
import Join from './comp/join/Join'
import Chat from './comp/chat/chat'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
   <Router basename="/">
    <Routes>
    <Route path="/chat" Component={Join}/>
    <Route path="/chat-app"Component={Chat}/ >
   </Routes>
    </Router>
  );
}

export default App;
