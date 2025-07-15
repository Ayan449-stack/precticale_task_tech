// utils/validation.js

export const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password: string) => {
  const minLength = 6;
  const maxLength = 12;
  const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
  const number = /\d/;
  const capitalLetter = /[A-Z]/;

  return (
    password.length >= minLength &&
    password.length <= maxLength &&
    specialChar.test(password) &&
    number.test(password) &&
    capitalLetter.test(password)
  );
};
