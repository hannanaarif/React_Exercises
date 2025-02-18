import Parent from "./Parent";

function GrandParents(){
    let message ="Hello from Grandparent!"

    return (
        <div>
            <Parent message={message}/>
        </div>
    )
}

export default GrandParents;