import StackNavigator from './StackNavigator';
import {FitnessContext} from "./Context"

export default function App() {
  return (
    <FitnessContext>
      <StackNavigator/>
    </FitnessContext>   
  );
}

