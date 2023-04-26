import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const response = await Promise.all([uploadPhoto(), createUser()])
    .then((res) => ({ photo: res[0], user: res[1] }))
    .catch(() => ({ photo: null, user: null }));
  return response;
}
