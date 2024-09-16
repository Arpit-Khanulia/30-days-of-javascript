const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen in my fav food ever', id: 123523 },
    { text: 'Super good', id: 823423 },
    { text: 'Nice Nice Nice!', id: 542328 },
];


// 01  some - is at least 1 person 19

const year = new Date().getFullYear();

const data1 = people.some(i=>{
    return (year - i.year) == 19;
})

console.log(data1);

// 02 every - is everyone 19?

const data2 = people.every(i=>{
    return (year-i.year) == 19;
})
console.log(data2);

// 03 find the comment with id = 823423

const data3 = comments.find(i=>{
    return (i.id == 823423);
})

console.log(data3);

// 04 find the index of the comment with id = 823423

const data4 =comments.findIndex(i=>i.id == 823423);
console.log(data4);

//05 delete the comment with id  = 823423

const data5 = comments.filter(i=> i.id != 823423);
console.table(data5);

//using splice and slice

// console.table(comments.splice(data4,1)); // modifies the original array
// console.table(comments);

console.table([...comments.slice(0,data4),...comments.slice(data4+1)]);