/*import ObjecLiterals from "./typescript/ObjecLiterals"
*/

/*import Counter from "./components/Counter"*/
/*import LoginPage from "./components/LoginPage"*/
import UserPage from "./components/UserPage"
import { AuthProvider } from "./context/AuthContext"

/*import BasicFuntions from "./typescript/BasicFuntions"
*/
/*
import BasicTypes from './typescript/BasicTypes'
*/
function App() {

  return (

    <AuthProvider>

    <div className='flex flex-col justify-center items-center h-svh'>

      {/*<BasicTypes />*/}
      {/*<ObjecLiterals />*/}
      {/*<BasicFuntions/>*/}

      {/*<Counter/>*/}
      {/*<LoginPage/>*/}

      <UserPage/>

    </div>
    
    </AuthProvider>
  )
}

export default App
