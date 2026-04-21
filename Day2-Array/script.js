// # 11. Remove Duplicate
function removeDuplicate(num){
    let k = 1
    for(let i = 1; i<num.length; i++){
        if(num[i] !== num[i-1]){
            num[k] = num[i]
            k++
        }
    }
    console.log(k)
    return k 
}
 removeDuplicate([0,0,1,1,1,2,2,3,3,4])