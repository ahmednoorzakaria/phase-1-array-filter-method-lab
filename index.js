function findMatching(driver , matchName){
  let matcher = driver.filter(drivers => drivers.toLowerCase() === matchName.toLowerCase())
  return matcher;

}
const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

console.log(findMatching(drivers , 'Bobby'))

function fuzzyMatch(array , string){
  let find = array.filter(driver => driver.startsWith(string))
  return find

}
let ahmed = fuzzyMatch(drivers , 'B')
console.log(ahmed)

function matchName(array, string) {
  return array.filter(driver => driver.name === string);
}
let me = matchName(drivers , 'Los Angeles')