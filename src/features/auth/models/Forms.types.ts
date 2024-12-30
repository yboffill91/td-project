export type SignInInputs = {
  email: string;
  password: string;
};

export type SignUpInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type ForgotPasswordInputs = {
  email: string;
};
