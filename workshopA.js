const user = {
    name : "Phupha",
    nickname : "PooH",
    hobby : "playing games",
    address : "Bangkok",
    province:{
        province:"Prawet",
        postcode : 10250
    }

}
// const showData = () => 


const showData = () => {
    let info1 = "My nickname is"
    let info2 = ", My hobby is "
    let info3 = "and my postcode is "
    return `${info1} ${user.nickname}${info2} ${user.hobby} ${info3} ${user.province.postcode} ` 
}
console.log(showData())