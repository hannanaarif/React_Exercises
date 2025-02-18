import ChildButton from "./ChildButton"

function ParentButton({handleClick}){

   return <ChildButton handleClick={handleClick}/>

}

export default ParentButton