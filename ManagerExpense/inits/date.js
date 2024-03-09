export const formatDate=(date)=>{
    if(typeof date ==="string")
    {
        return date
    }
    return (`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
}