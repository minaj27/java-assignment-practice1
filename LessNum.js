const num=[4,15,5,40,7]; 

let smallNum=num[0];
num.forEach((item)=>{
    smallNum = smallNum<item ? smallNum :item
})
console.log(`Less Numbers ==> ${smallNum}`);

const result = num.map((item)=>item**2);
console.log(`Square of Number ==> ${result}`);


const sorted =num.sort();
console.log(`Highest Number ==> ${sorted[0]}, ${sorted.reverse()[2]}`);
 
const sorted1 =num.sort();
console.log(`Odd Numbers ==> ${sorted[1]}, ${sorted1.reverse()[2]}`);

const sum=num.reduce((acc,curr)=> acc+curr);
console.log(`Sum of All Number ==>${sum}`);

const filtered = result.filter((item)=> item>40);
console.log(`Greater than 40 numbers of Square Number ==>${filtered}`);

const nameList = [
    { name: "Sam", age: 4, location:"Mumbai" },
    { name: "Lara", age: 15, location:"Delhi" },
    { name: "Amit", age: 21, location:"Pune" },
    { name: "Sumit", age: 25, location:"Mumbai" },
    { name: "Shehnaz", age: 23, location:"Delhi" },
    { name:"Sana", age: 25, location:"Mumbai" },
    { name: "Parth", age: 40, location:"Mumbai" },
    ];
    const result1 = nameList.filter((item)=>item.location==="Mumbai");
    const namelist = result1.map((item)=>`${item.name}`)
    console.log(`Print more than 18yrs age from Mumbai ==> ${namelist.slice(1,4)}`);

    const List2=["My"," ","Name"," ","is"," ","Mayuri"]
     const newresult =List2.reduce((acc,curr)=>acc+curr);
     console.log(newresult);


    














