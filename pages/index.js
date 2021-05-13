import axios from 'axios';

function getUVIndex() {
 var lat = $('#lat').val();
 var lng = $('#lng').val();
 var alt = $('#alt').val();
 var ozone = $('#ozone').val();
 var dt = $('#dt').val();

 $.ajax({
   type: 'GET',
   dataType: 'json',
   beforeSend: function(request) {
     request.setRequestHeader('x-access-token', '1d98887a2e12a06a3155e96808793b5e');
   },
   url: 'https://api.openuv.io/api/v1/uv?lat=' + lat + '&lng=' + lng + '&alt=' + alt + '&ozone=' + ozone + '&dt=' + dt,
   success: function(response) {
     //handle successful response
   },
   error: function(response) {
     // handle error response
   }
 });
}

let logValue=getUVIndex();
console.log(logValue);

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
