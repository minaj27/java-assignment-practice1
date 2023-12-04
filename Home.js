console.log()

const str = "stop";
const revstr =str.split('').reverse();
const newstr = revstr.map((item,index)=>index==0 ? item.toUpperCase() : item.toLowerCase());
console.log(`Last letter capital: Name "Stop" to==> ${newstr.join('')}`);

console.log()

const setTimeout=(time)=>{
    if(time>6 && time<=12){
        console.log("Good Morning")
    }else if(time>=12 && time<=16){
        console.log("Good AfterNoon")
    }else if(time>=16 && time<=20){
        console.log("Good Evening")
    }else if(time>=20 && time<=24){
        console.log("Good Night")
    }else{
        console.log("Good Bye")
    }
}
setTimeout(8);
setTimeout(14);
setTimeout(17);
setTimeout(22);
setTimeout(4);

console.log();

const str1 = "INDIA IS BHARAT";
const revstr2 =str1.split('');
const all =[...revstr2];
const unique = [...new Set(all)];
console.log(`Unique Name :${unique.join('')}`);

console.log();

const arr= [4,5,6,7,8,1,4,2];
const num = [...new Set(arr)];
const sorted= num.sort().reverse();
console.log(sorted);
console.log();
console.log(`Second Highest Number===> ${arr.sort().reverse()[1]}`);
console.log(`Third Highest Number===> ${arr.sort().reverse()[2]}`);
console.log();
console.log(`Second Smallest Number===> ${arr.sort().reverse()[sorted.length-1]}`);
console.log(`Third Smallest Number===> ${arr.sort().reverse()[sorted.length-2]}`);
console.log()





