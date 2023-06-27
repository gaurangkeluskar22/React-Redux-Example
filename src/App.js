import {useSelector, useDispatch} from "react-redux";
import { incNumber,decNumber } from "./actions/index";

const App =() =>{
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-sm-12 mt-5">
            <h1>Increment/Decrement Counter</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 mt-4">
            <h3>React Redux Example</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
           
          </div>
          <div className="col-sm-4 mt-5">
          <button className="p-2 m-2" onClick={()=>dispatch(incNumber())}>+</button>
            <span className="p-2 m-2">{myState}</span>
            <button className="p-2 m-2" onClick={()=>dispatch(decNumber())}>-</button>
          </div>
          <div className="col-sm-4">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
