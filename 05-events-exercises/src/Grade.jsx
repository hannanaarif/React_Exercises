

function Grades(){
    const data=[
        {subject: "Math", marks: 80,grade: "A"},
        {subject: "Science", marks: 90,grade: "A+"},
        {subject: "English", marks: 70,grade: "B"},
        {subject: "History", marks: 85,grade: "A"},
        {subject: "Geography", marks: 75,grade: "B"}
    ];

    function handleTableClick(e) {
        if (e.target.tagName === "TD" || e.target.tagName === "TH") {
            console.log("Clicked:", e.target.textContent);
        }
        console.log(e);
    }
    return (
        <>
            <h1>Grades</h1>
            <table onClick={handleTableClick}>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Marks</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>{
                        return <tr key={index}>
                            <td>{item.subject}</td>
                            <td>{item.marks}</td>
                            <td>{item.grade}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Grades;