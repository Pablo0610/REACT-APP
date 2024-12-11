import useUser from "../hooks/useUser"
import UserRow from "./UserRow";

export default function userPage() {
    
const { users } =useUser();

    return (
      <>
       <h3>USUARIOS</h3>
       <table>
  
          <thead>
              <td>Avatar</td>
              <td>Nombrer</td>
              <td>Email</td>
  
  
          </thead>
          <tbody>
                    {users.map((user) => (
                        <UserRow key={user.id} user= {user}/>
                    ))}
                </tbody>
          
       </table>
      </>
  )
  }     