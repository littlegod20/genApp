import { apiCallGenerator } from "../apiCallGen";

// fuction to handle the generator
export async function handleApiCalls(endpoints) {
  const generator = apiCallGenerator(endpoints);
  const results = [];

  for (let promise of generator) {
    results.push(await promise)
  }

  return Promise.all(results)
}