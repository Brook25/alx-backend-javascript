export default function handleResponseFromAPI(promise) {
  const prom = promise.then((result) => {
    return {
      status: 200,
      body: 'success',
    }}
    ,
     (reject) => {
      return new Error()}
     )
   console.log("Got a response from the API");
   return prom;
}
