
import axios from 'axios';
import { useState } from 'react';
function PicturePage() {
useState(()=>{
    axios.post('http://localhost:4000/')
    .then(function (response) {
      
      console.log(response);
    })
    .catch(function (error) {
      
      console.log(error);
    })
    .then(function () {
      
    });

})
  return (
    <div>
     
      
    </div>
  );
}

export default PicturePage;
