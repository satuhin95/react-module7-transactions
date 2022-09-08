import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Balance from "./components/Balance";
import Form from "./components/Form";
import Layouts from "./components/Layouts";
import Transactions from "./components/transaction/Transactions";
import AllTransaction from './pages/AllTransaction';
import Home from "./pages/Home";


function App() {
    return (
        <Router>
            <Layouts>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/all' element={<AllTransaction/>}/>
            </Routes>    
            </Layouts>
        </Router>
    )
}

export default App;
