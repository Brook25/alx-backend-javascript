import * as module from './utils';

export default function handleProfileSignup() {
  const uPhoto = module.uploadPhoto;
  const cUser = module.createUser;

  return Promise.all([uPhoto(), cUser()]).then((values) => {
    console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
