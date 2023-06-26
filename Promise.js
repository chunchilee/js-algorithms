// const name = document.querySelector("#name");
// const delay = document.querySelector("#delay");
// const button = document.querySelector("#set-alarm");
// const output = document.querySelector("#output");

// // button.addEventListener("click",()=>{
// //   alarm(name.value,delay.value)
// // })

// // function alarm(name,delay){
// //   setTimeout(()=>{
// //     output.innerHTML=name+"起床"
// //   },delay)
// // }

// // ----------------------------------------------------------------
// // promise

// button.addEventListener("click", () => {
//   let promiseObject = alarm(name.value, delay.value);
//   promiseObject
//     .then((message) => {
//       output.innerHTML = message;
//     })
//     .catch((e) => (output.innerHTML = e));
// });

// function alarm(name, delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//       reject("delay不能小於0");
//     } else {
//       setTimeout(() => {
//         resolve(name + "早安！");
//       }, delay);
//     }
//   });
// }

// // ----------------------------------------------------------------
// // async and await

// button.addEventListener("click", async () => {
//   try {
//     let result = await alarm(name.value, delay.value);
//     output.innerHTML = result;
//   } catch (e) {
//     output.innerHTML = e;
//   }
// });

// function alarm(name, delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//       reject("delay不能小於0");
//     } else {
//       setTimeout(() => {
//         resolve(name + "早安！");
//       }, delay);
//     }
//   });
// }

// const currentWeather = async () => {
//   try {
//     await axios
//       .get(
//         `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-E29ED462-2F47-45EE-A7E9-5863B59656F7&locationName=臺北`
//       )
//   } catch (e) {
//     console.log(e);
//   }
// };
// const forecast = async () => {
//   try {
//     await axios.get(
//       `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-E29ED462-2F47-45EE-A7E9-5863B59656F7&locationName=臺北市`
//     );
//   } catch (e) {
//     console.log(e);
//   }
// };
// currentWeather();
// axios.all([currentWeather(), forecast()]).then(
//   axios.spread((acc, perms) => {
//     console.log(acc, perms);
//   })
// );
// Promise -> (await) Response -> (await .json()) return Response object的內部文本(JSON格式)
// fetch() => promise object(pending)
// fetch().then() => response object
// fetch().then((data)=>{data.json().then()}) => return 完整的Response object
// await fetch() => return response object
// await fetch.json() => return 完整的Response object

// axios.get() => return Promise object(pending)
// await axios.get() => return axios response object
// 等同於 axios.get().then()
// await axios.get().then(resp=>{resp.data}) return axios response object內部的文本資料

const abc = async () => {
  return axios.get(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-E29ED462-2F47-45EE-A7E9-5863B59656F7&locationName=臺北市`
  );
};

const cse = async () => {
  return axios.get(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-E29ED462-2F47-45EE-A7E9-5863B59656F7&locationName=臺北`
  );
};

const result = async () => {
  let b = axios.all([abc(), cse()]).then(
    axios.spread((resp) => {
      console.log(resp);
    })
  );
};
result();
