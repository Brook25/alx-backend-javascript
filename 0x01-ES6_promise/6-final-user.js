import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const ret = results.map((val) => {
        const item = { ...val };
        if ('reason' in item) {
          item.value = String(val.reason); delete item.reason;
        } return item;
      }); return ret;
    });
}
