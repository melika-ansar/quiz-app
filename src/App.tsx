import {Route, BrowserRouter as Router, Routes  } from "react-router"
import { ROUTES } from "./constants/routes/routes"
import SetUpPage from "./pages/setUp/setUp"
import QuestionPage from "./pages/question/question"
import ResultPage from "./pages/result/result"
import WelcomePage from "./pages/welcome/welcome"
import { ReactNode, useState } from "react"
import { QuizContext } from "./context/context"

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

function App() {
  const [QuizList, setQuizList] = useState([]);
  return (
    <>
      <QuizContext.Provider value={{ QuizList, setQuizList }}>
        <Router>
          <Routes>
            {routeArray.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Router>
      </QuizContext.Provider>
    </>
  );
}

export default App
