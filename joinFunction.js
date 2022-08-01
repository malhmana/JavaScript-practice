function joinSent(iterable){
    let newSentence= ""
    for (i in iterable){
        if (i < (iterable.length - 1)){
            newSentence += iterable[i] + " "
        }else{
            newSentence += iterable[i]
        }
    } return newSentence
}
