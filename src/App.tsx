import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
 import { useReducer } from 'react';
import { ROUTES } from "./constants/routes/routes"
import SetUpPage from "./pages/setUp/setUp"
import QuestionPage from "./pages/question/question"
import ResultPage from "./pages/result/result"
import WelcomePage from "./pages/welcome/welcome"
import { createContext, ReactNode} from "react"
import { initialSetupState, QuizSetupReducer } from "./Components/SetUpReducer/SetUpReducer"
import { initialQuizState, QuizReducer } from "./Components/QuizReducer/QuizReducer"

interface IrouteArray {
  path :string,
  element : ReactNode
}

const routeArray : IrouteArray[] =[
    {path:ROUTES.welcome , element:<WelcomePage />},
    {path:ROUTES.setUp , element:<SetUpPage />},
    {path:ROUTES.question , element:<QuestionPage />},
    {path:ROUTES.result , element:<ResultPage />}
];

export const QuizSetupContext = createContext<any>(null);
export const QuizResultContext = createContext<any>(null);


function App() {

const [state, dispatch] = QuizSetupReducer();
const [quizState, quizDispatch] = QuizReducer();

  return (
    <div>
      <QuizSetupContext.Provider value={{ state, dispatch }}>
        <QuizResultContext.Provider value={{ quizState, quizDispatch }}>
        <Router>
          <Routes>
            {routeArray.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Router>
      </QuizResultContext.Provider>
      </QuizSetupContext.Provider>
      
    </div>
  );
}

export default App
