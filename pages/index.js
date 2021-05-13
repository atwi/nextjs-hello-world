import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
  console.log(response);
});

import Link from 'next/link'
const Index = () => (
  <div>
    Hello World.{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)
export default Index;
