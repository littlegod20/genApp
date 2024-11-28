
// created the generator function
export function* apiCallGenerator(endpoints) {
  for (const endpoint of endpoints) {
    yield fetch(endpoint);
  }
}


