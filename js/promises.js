/**
 * Постојат три особено важни методи од API-то на промисите, а тоа се: then(resolve), catch(reject) и finally(resolve and reject).
 * Може да користиме и  IF ELSE структура.
 */

let p = new Promise(function (resolve, reject) {
  reject("Unsuccessfully executed!");
});

p.then(function (res) {
  console.log(res);
})
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("Always execute");
  });
