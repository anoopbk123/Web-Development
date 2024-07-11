const isLeapYear = (year)=>{
    if(year % 4) return false
    if(year % 100) return true
    if(year % 400) return false
    return true
}
console.log(isLeapYear(3000))