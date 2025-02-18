import Card from "./Card"
function Profile({Profiletext,cardText,ButtonText,handleCLick}){
    
    return (
        <>
        <h1>{Profiletext}</h1>
        <Card
            cardText={cardText}
            ButtonText={ButtonText}
            handleClick={handleCLick}
        />

       
        </>
    )
}

export default Profile