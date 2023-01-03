const axios = require('axios'); // node.js쓸때 모듈 불러오기
const url = 'https://www.naver.com';
const load = 1;

let get = (url) => {
  return new Promise(
    (resolve, reject) => {
      axios.get(url)
        .then( (response)=> {
          resolve(response);
        })
        .catch(
          (err)=>{
            reject(err);
          }
        )
    }
  )
}

let compress = async (url) => {
  while (true) {
    await get(url).then(
      (result) => {
        console.log(new Date(), result);
        // console.log("success");
      }
    ).catch(
      (err) =>{
        console.log(new Date(), err);
        // console.log("fail");
      }
    )
  }
}

for (let i = 0; i < load; i++) {
  compress(url);
}


