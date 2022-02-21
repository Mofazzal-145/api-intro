
// JavaScript Object Notation
// JSON
const user = {id: 32, name: 'mofazzal', job: 'student'};
const stringified = JSON.stringify(user);
/* 
console.log(user);
console.log(stringified);
 */

const shop = {
    name: 'Afzal store',
    address: 'washa road',
    profit: 13000,
    product: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'hasan ali',
        profession: 'everything',
    },
    isExpensive: true
}

const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);

const converted = JSON.parse(shopStringified);
console.log(converted);

