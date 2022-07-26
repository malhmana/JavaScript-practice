function median(data){
    let datalen= data.length;
    data= data.sort(function(a,b){return a - b});
    let median;
    if (data.length % 2 != 0){
        median= data[Math.floor(datalen/2)]
    }else{
        median= (data[datalen/2] + data[(datalen/2)-1])/2
    }
    return median;
}
