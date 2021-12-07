import { checkError, client } from './client';

export async function getCountries() {
  const response = await client.from('countries').select();
  console.log(response);
  return checkError(response);
}
