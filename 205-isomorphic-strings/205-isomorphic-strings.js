/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
// let obj={}
// let arr=[]
// let count=0
// for(let i=0 ; i<s.length;i++){

// obj[s[i]]?obj[s[i]]=obj[s[i]]+1:obj[s[i]]=1
// }
//     for(let i=0 ; i<t.length;i++){
// if(!arr.includes(t[i])){
//     arr.push(t[i])
// }}
// for(let key in obj){
//     count++
// }
//     console.log (arr,obj)
// if(count===arr.length){
    
// }else{
//     return false
// }
    if(s.length !== t.length)
        return false
    
    let obj = {};
    for(let i = 0; i < s.length; i++){
        if(obj[s[i]] === undefined)
            obj[s[i]] = t[i];
        else if(obj[s[i]] !== t[i])
            return false;
    }
    obj = {};
    for(let i = 0; i < t.length; i++){
        if(obj[t[i]] === undefined)
            obj[t[i]] = s[i];
        else if(obj[t[i]] !== s[i])
            return false;
    }
    return true;
    
};