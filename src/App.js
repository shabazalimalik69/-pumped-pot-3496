import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { AllRoutes } from './Routes/AllRoutes';
import { AllRouting } from './Routing/AllRouting';
import { PlanPricing } from './Routes/PlanPricing';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
     <AllRouting/>
    </div>
  );
}

export default App;
