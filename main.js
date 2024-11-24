import { notification } from './services';
import { firebaseService } from './services/firebase';

firebaseService.auth.checkAuthState();

document.querySelector('#signout-button')?.addEventListener('click', () => {
  firebaseService.auth.signOut();
});

document.querySelector('#login-form')?.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;

  if(!email.length) {
    notification.error('Email is mandatory');
    return;
  }

  if(!password.length) {
    notification.error('Password is mandatory');
    return;
  }

  firebaseService.auth.signIn(email, password);
});

document.querySelector('#add-user-form')?.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;

  if(!name.length) {
    notification.error('Name is mandatory');
    return;
  }

  if(!email.length) {
    notification.error('Email is mandatory');
    return;
  }

  if(!password.length) {
    notification.error('Password is mandatory');
    return;
  }

  firebaseService.user.addUser({
    name,
    email, 
    password,
  });
});
