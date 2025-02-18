import Button from "./Button"

function Card({cardText,ButtonText,handleClick}){
    return (
        <>

        <h2>{cardText}</h2>
        <Button handleClick={handleClick} text={ButtonText}/>

        </>
    )
}

export default Card