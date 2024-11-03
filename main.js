import { firebaseService } from './services';

// TEMP CODE
window.email = 'teste5@teste.com';
window.password = 'senha123';
window.signIn = firebaseService.auth.signIn;
window.signOut = firebaseService.auth.signOut;

(async () => {
  await firebaseService.auth.checkAuthState();
})();
