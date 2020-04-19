import { Sorter } from './Sorter';
import { NumbersCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([10, 3, -5, 0, 200000, 9000]);
// const sorter = new Sorter(numbers);
// sorter.sort();
numbers.sort();
console.log(numbers.data);

const chars = new CharactersCollection('XoosiemnTC');
// const sortChars = new Sorter(chars);
chars.sort();
console.log(chars);

const linkedList = new LinkedList();
linkedList.add(4);
linkedList.add(2);
linkedList.add(3);
linkedList.add(1111);

linkedList.sort();
linkedList.print();
