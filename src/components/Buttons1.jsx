const arr = [0,1,2,3,4,5,6,7,8,9]

const tenButtonsData = []

arr.forEach((x)=>{
    tenButtonsData.push({
        buttonName: `${x} to ${x+9}`
    })
})



export default function Buttons1 (){


    return(
        <>
        
        {tenButtonsData.map(x=>{
            return(<button>{x.buttonName}</button>)
        })}
        </>
    )
}