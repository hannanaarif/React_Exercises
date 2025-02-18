import ParentButton from "./ParentButton"


function GrandParentButton(){
    function handleButtonClick(){
        console.log("Button clicked in Grandparent!")
    }
    return(
        <>
         <ParentButton handleClick={handleButtonClick}/>
        </>
    )

}

export default GrandParentButton;