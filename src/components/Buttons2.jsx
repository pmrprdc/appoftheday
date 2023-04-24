const arr = [0,1,2,3,4,5,6,7,8,9]

const tenButtonsData = []

arr.forEach((x)=>{
    tenButtonsData.push({
        buttonName: x
    })
})



export default function Buttons2 (){


    return(
        <>
        
        {tenButtonsData.map(x=>{
            return(<button>{x.buttonName}</button>)
        })}
        </>
    )
}