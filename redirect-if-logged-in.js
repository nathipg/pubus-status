import { firebaseService } from './services';

(async () => {
  await firebaseService.auth.redirectLoggedUser();
})();
