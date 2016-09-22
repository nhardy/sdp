import config from 'app/config';


export const users = {
  1234567: {
    studentId: 1234567,
    firstName: 'Nathan',
    lastName: 'Hardy',
    // NEVER EVER store passwords in plaintext
    // @see https://youtu.be/8ZtInClXe1Q
    password: 'password',
    email: 'example@student.uts.edu.au',
    mobile: '+61400555555',
  },
};

export const clients = {
  [config.sso.client]: {
    // In production, this would include domain/port
    callback: '/callback',
    scope: [
      'studentId',
      'firstName',
      'lastName',
      'email',
      'mobile',
    ],
  },
};

export const sessions = {};
