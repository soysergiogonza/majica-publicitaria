export interface FormData {
  name: string;
  email: string;
  phone: string;
  socialNetwork: string;
}

export interface SubmitStatus {
  message: string;
  isError: boolean;
}