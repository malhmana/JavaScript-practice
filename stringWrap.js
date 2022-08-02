function stringWrap(string, max_width){
    let newString= "";
    let num= 0;
    
    while(num < string.length){
        if (num == 0 || num % max_width != 0){
            newString += string[num]
            num += 1
        }else{
            newString += '\n' + string[num]
            num += 1
        }
    }return newString;
}
