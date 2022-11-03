import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () =>{

    const userContext = useContext(UserContext)

    const handleLogin = () => {  
        if(userContext){
            userContext.setUser({
                name: 'Noumedem Tami Florian',
                email : 'noumedemtamiflorian@gmail.com'
            })
        }
      }
    const handleLogout = () => {  
        if(userContext){
        userContext.setUser(null)
        }
      }
    if ( userContext.user) {
        return (
            <>
                        <button onClick={handleLogout}>Logout</button>
                        <div>User name is {userContext.user.name}</div>
            <div>User email is {userContext.user.email}</div>
            </>
        )
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}