import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';


export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const ret = results.map((val) => {
        if ('reason' in val) {
          const item = { ...val };
          item.value = String(item.reason); delete item.reason;
          return item;
        } return val;
      }); return ret;
    });
}

