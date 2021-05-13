import axios from 'axios';

axios.get('https://www.reddit.com/r/javascript.json').then(response => {
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
