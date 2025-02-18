
function Input(){
    return (
        <input type="text" onChange={e => console.log(e.target.value)} />
    )
}

export default Input;