import { auth } from './../../utils';
//Toastify
import { toast } from 'react-toastify'
export const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));

export const handleResetPasswordAPI = (email) => {
  const config = {
    url: 'http://localhost:3000/login'
  };

  return new Promise((resolve, reject) => {
    auth.sendPasswordResetEmail(email, config)
      .then(() => {
        resolve();
      })
      .catch(() => {
        toast.error('Email not found. Please try again.')
        reject();
      });
  });
};