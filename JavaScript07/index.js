const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

function isAdult(people){
  const currentYear = (new Date()).getFullYear();
  return (currentYear - people.year)>18
}
console.log(people.some(isAdult));
console.log(people.every(isAdult));

function commentContain(comment){
  return comment.id == 823423
}
console.log(comments.find(commentContain));
console.log(comments.findIndex(commentContain));

newComments1 = comments.slice(2,3)
console.log('slice'+newComments1);
console.log(comments);
newComments2 = comments.splice(2,3)
console.log('splice'+newComments2);
console.log(comments);
