export default function promise1(success) {
  return new Promise(function(resolve, reject) {
    if (success == true) {
      resolve({ status: 200,
        body: 'Success',
      });
    }
   else {
     reject(new Error('The fake API is not working currently'));
   }
  });
}
