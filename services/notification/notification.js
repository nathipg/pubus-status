export const success = (data) => {
  const { message } = data;

  alert(message);
};

export const error = (data) => {
  const { message } = data;

  alert(`Error: ${message}`);
};

export const warning = (data) => {
  const { message } = data;

  alert(`Warning: ${message}`);
};
