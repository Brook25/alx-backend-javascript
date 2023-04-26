//import * as module from './utils';

import { uploadPhoto, createUser } from './utils';
/*export default async function asyncUploadUser() {
  const uPhoto = module.uploadPhoto;
  const cUser = module.createUser;

  const res = { photo: null, user: null };
  const x = await uPhoto().catch(() => null);
  if (x !== null) {
    const y = await cUser().catch(() => null);
    if (y) { res.photo = x; res.user = y; return res; }
  }
  return res;
}*/

async function asyncUploadUser() {
        return await Promise.all([uploadPhoto(), createUser()]).then((res) => ({ photo: res[0], user: res[1] })).catch(() => ({ photo: null, user: null }));
}

