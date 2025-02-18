import Child from "./Child";

function Parent({message}){
    return(
        <div>
            <h2>parent</h2>
            <Child message={message}/>
        </div>
    )

}

export default Parent;