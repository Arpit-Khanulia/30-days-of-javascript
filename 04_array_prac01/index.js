const people = [
  'John, Smith',
  'Jane, Doe',
  'Alice, Johnson',
  'Bob, Williams',
  'Charlie, Brown',
  'David, Davis',
  'Frank, Miller',
  'Grace, Wilson',
  'Henry, Moore',
  'Olivia, Taylor'
];

const inventors = [
  { firstName: 'Emily', lastName: 'Chen', dob: 2001, passed: 2015 },
  { firstName: 'Liam', lastName: 'Lee', dob: 1998, passed: 2009 },
  { firstName: 'Ava', lastName: 'Kim', dob: 2005, passed: 2019 },
  { firstName: 'Noah', lastName: 'Hall', dob: 1992, passed: 2006 },
  { firstName: 'Sophia', lastName: 'Patel', dob: 2003, passed: 2017 },
  { firstName: 'Ethan', lastName: 'Martin', dob: 1998, passed: 2012 },
  { firstName: 'Mia', lastName: 'Garcia', dob: 2002, passed: 2016 },
  { firstName: 'Lucas', lastName: 'Harris', dob: 1998, passed: 2010 },
  { firstName: 'Isabella', lastName: 'Walker', dob: 2004, passed: 2018 },
  { firstName: 'Mason', lastName: 'White', dob: 1999, passed: 2013 }
];


// 1) filter the list of inventors for those who were born in 1998

const data1 = inventors.filter(e=>e.dob == 1998);
console.table(data1);


// 2) give us an array of inventors first name and last name

const data2 = inventors.map(e=>`${e.firstName},${e.lastName}`);
console.table(data2);


// 3) sort the array of inventors by birthdate , oldest to youngest

const data3 = inventors.sort((a,b)=>b.dob-a.dob);
console.table(data3);

// 4 how many years did all the inventors lived

const data4 = inventors.reduce((acc,cur,i)=>{
    return (cur.passed - cur.dob) + acc;
},0)

console.table(data4);


// 5 sort the inventors by years lived

const data5 = inventors.sort((a,b)=> (a.passed - a.dob) - (b.passed - b.dob));
console.table(data5);

// 6 add column , year lived

const data6 = data5.map(e=>{return{...e,'years lived':e.passed - e.dob}});
console.table(data6);

// 7 sort names from people alphabetically by their last name

const data7 = people.sort((a,b)=>{

    const [afirst,alast] = a.split(', ');
    const [bfirst,blast] = b.split(', ');

    return alast > blast?1:-1;
})

console.log(data7);