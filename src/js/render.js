export function createListFromObject(data) {
  const list = document.createElement('ul');

  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    list.textContent = 'Неподдерживаемый формат данных.';
    return list;
  }

  const keys = Object.keys(data);
  if (keys.length === 0) {
    list.textContent = 'Нет элементов.';
    return list;
  }

  keys.forEach((key) => {
    const value = data[key];
    const item = document.createElement('li');

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      item.textContent = key;
      const childList = createListFromObject(value);
      item.append(childList);
    } else if (Array.isArray(value)) {
      item.textContent = key;
      const childList = document.createElement('ul');
      value.forEach((entry) => {
        const childItem = document.createElement('li');
        childItem.textContent = String(entry);
        childList.append(childItem);
      });
      item.append(childList);
    } else {
      item.textContent = `${key}: ${value}`;
    }

    list.append(item);
  });

  return list;
}
