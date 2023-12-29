import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Herosection from './Components/Herosection';
import Aboutsection from './Components/Aboutsection';
import Ulitiessection from './Components/Ulitiessection';
import Mintsection from './Components/Mintsection';
import Partnersection from './Components/Partnersection';
import Meetsection from './Components/Meetsection';
import Accordian from './Components/Accordian';
import Thekong from './Components/Thekong';
import Roadmap from './Components/Roadmap';
import Backtotop from './Components/Backtotop';
import PreLoader from './Components/PreLoader';

function App() {
  return (
    <div className='page-color'>
      <PreLoader/>
      <Herosection />
      <Backtotop/>
      <Aboutsection/>
      <Ulitiessection/>
      <Thekong/>
      <Mintsection/>
      <Roadmap/>
      <Partnersection/>
      <Meetsection/>
      <Accordian/>
    </div>
  );
}

export default App;
