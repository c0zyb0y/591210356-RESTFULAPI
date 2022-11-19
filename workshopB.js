const users = [
    {nickname:"Nite",hobby:"sleep",address:"Bangkok",province:{province:"Prawet",postcode:10250} },
    {nickname:"Nit",hobby:"sleep",address:"Bangkok",province:{province:"Prawet",postcode:10250} },
    {nickname:"Noi",hobby:"sleep",address:"Bangkok",province:{province:"Prawet",postcode:10250} },
]

for (const u of users){
    console.log(`"My nickname is ${u.nickname}, My hobby is ${u.hobby} and my postcode is ${u.province.postcode}"`)
}