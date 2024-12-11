import { useAuthContext } from '../context/AuthContext';

export default function LoginPage() {

  const { stateValue, loginWithPassword ,logOut} = useAuthContext();

  console.log(stateValue);


  if (stateValue === 1) {
    return(
      <>
       <h3> tu estas logueado</h3>
       <button onClick={()=>logOut()}>logOut</button>
       
      </>
    )
  }
  
  if (stateValue === 2) {
    return(
      <>
       <h3> te deslogeastw</h3>
       
      </>
    )
  }

  return (
    <>
      <h3>Bienvenidos a la Página</h3>
      
      <h3> Ingresar</h3>
      
      <button onClick={()=>loginWithPassword('pablo@gmail.com','12345')}className='bg-blue-700 text-white rounded-2xl mt-2 p-5'>Login</button>
      
      <p>Estado actual: {stateValue}</p>
    </>
  );
}