let sentene =  "Education is Wealth";
let vowels = ['a', 'e' ,'i', 'o', 'u'];

let final = {};
for( let vowel of vowels){
    let count  = 0;
    for(let char of sentene){
        if(char.toLowerCase()==vowel){
            count++;
        }
    }
    final[vowel] = count;
}
console.log(final);