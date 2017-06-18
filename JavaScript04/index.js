const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

var fifteen = inventors.filter(item=>item.year>=1500 && item.year<=1600)
console.info("1、filter：筛选出生年份在1500-1600之间的发明家")
console.table(fifteen);

console.info("2、map：映射全名")
var fullNames = inventors.map(item=>`${item.first} ${item.last}`);
console.log(fullNames);

console.info("3、sort：按出生年份排序")
var ordered = inventors.sort((a,b) => a.year > b.year ? 1:-1)
console.table(ordered);

console.info("4、reduce：计算发明家共生活了多少年")
var totalYears = inventors.reduce((total,item)=>{
  return total+(item.passed-item.year)
},0)
console.log(totalYears);

console.info("5、sort：按生命长度排序")
var oldest = inventors.sort((a,b)=>{
  var lastInventor = b.passed - b.year;
  var nextInventor = a.passed - a.year;
  return lastInventor>nextInventor ? 1 : -1
})
console.table(oldest);

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

console.info("6、sort：根据lastName排序")
var alpha = people.sort((a,b)=>{
  var [aFirst,aLast]=a.split(',');
  var [bFirst,bLast]=b.split(',');
  return aLast>bLast?1:-1
})
console.log(alpha);

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
console.info("7、reduce：计算各种类型出现的次数")

var times = data.reduce((obj,item)=>{
  if(!obj[item]){
    obj[item]=0
  }
  obj[item]++;

  return obj;
},{})
console.log(times);
