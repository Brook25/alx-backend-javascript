import { uploadPhoto, createUser } from './utils.js';

Promise.all([uploadPhoto(), createUser()]).then((lst) => {
  console.log(`${lst[0].body} ${lst[1].firstName} ${lst[1].lastName}`);
})
  .catch(() => console.log('Signup system offline'));
