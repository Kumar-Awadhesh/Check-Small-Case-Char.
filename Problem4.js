function SmallCaseChar(char){
    let alpha="abcdefghijklmnopqrstuvwxyz",found=false;
    for(let i=0;i<char.length;i++){
        if(alpha.includes(char[i])){
            found=true
        }
        else{
            found=false
            break
        }
    } 
    if(found===true){
      return("Yes")
    }
    else{
      return ("No")
      
    }
}


let arr=SmallCaseChar("awadhesh")
console.log(arr)