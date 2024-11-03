import { firebaseService } from './services';

// TEMP CODE
window.email = 'teste5@teste.com';
window.password = 'senha123';
window.signIn = firebaseService.auth.signIn;
window.signOut = firebaseService.auth.signOut;

const getPostList = async () => {
  try {
    const requestInfo = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
    );
    const data = await requestInfo.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const getPost = async (id) => {
  try {
    const requestInfo = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    const data = await requestInfo.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  await firebaseService.auth.checkAuthState();

  try {
    const posts = await getPostList();
    console.log(posts);

    const post = await getPost(2);
    console.log(post);
  } catch (error) {
    console.error(error);
  }
})();
