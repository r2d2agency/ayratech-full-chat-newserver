import { AsyncLocalStorage } from 'async_hooks';

export const requestContext = new AsyncLocalStorage();

export function getRequestContext() {
  return requestContext.getStore() || null;
}

export function setRequestContext(values) {
  const store = requestContext.getStore();
  if (store) {
    Object.assign(store, values);
  }
}

export function runWithContext(values, callback) {
  return requestContext.run({ ...values }, callback);
}
