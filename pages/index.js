import axios from 'axios';

axios.get('https://www.reddit.com/r/javascript.json', {
  headers: {
    "User-Agent": 'Reddit API test' 
    }
  })
  .then(response => {
  
  console.log(response);
  
});

fetch('https://api.openuv.io/api/v1/uv?lat=-31.45&lng=115.67&dt=2018-01-24T10:50:52.283Z', {
  headers: {
      'x-access-token': '1d98887a2e12a06a3155e96808793b5e'
    },
})
  .then(response => response.json())
  .then(json => console.log(json))

let output=json;

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
