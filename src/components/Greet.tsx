type GreetProps = {
    name:string,
    messageCount : number,
    isLoggedIn : boolean
}

export const Greet = (props:GreetProps) =>{
    return (
        <div>
            <h2>
                {
                props.isLoggedIn ?
                `Welcome ${props.name} ! you haves ${props.messageCount} unread messages`
                :
                "Welcomme Guest"
                }
            </h2>
        </div>
    )
}