const validLocalStorage = (key: string) => {
  if (!localStorage) {
    console.error('Local storage not supported');
    return false;
  }

  if (key === '' || key === undefined) {
    console.error('Local storage key required');
    return false;
  }

  return true;
};

export const setLocalStorage = (key: string, value: object) => {
  if (!validLocalStorage(key)) return false;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Local storage quota exceeded', e);
    return false;
  }
  return true;
};

export const getLocalStorage = (key: string) => {
  if (!validLocalStorage(key)) return;
  return localStorage.getItem(key) ?? null;
};

export const removeLocalStorage = (key: string) => {
  if (!validLocalStorage(key)) return;
  localStorage.removeItem(key);
};
