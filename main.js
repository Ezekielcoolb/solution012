function duplicateCount(text){
    let newString = text.toLowerCase().split('')
    let newArray = []
    for(i = 0; i < newString.length; i++){
  
     
      
      if(newString[i] === newString[i + 1] && !newArray.includes(newString[i])){
          
          newArray.push(newString[i])
      }
   }
  
    console.log(newArray);
  }
  duplicateCount('AAAABBBCCDAABBB')