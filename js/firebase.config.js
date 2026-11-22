// Настройки проекта Firebase для входа через Google и синхронизации.
//
// Эти значения не секретны: Google по замыслу встраивает их в клиентский код, и любой посетитель
// сайта их видит. Данные защищают правила доступа из docs/firestore.rules: каждый видит только
// свою ветку users/{uid}.
//
// Используется тот же проект, что и у приложения wordschatz: Bücherleser хранит своё в отдельной
// ветке users/{uid}/buecherleser и данные соседа не трогает. Чтобы перейти на собственный проект,
// достаточно заменить значения ниже. С пустым apiKey приложение работает без облака.
export const firebaseConfig = {
  apiKey: 'AIzaSyBDUXZ42zXIeDXYg6YvuOEjZYEI91tB9x0',
  authDomain: 'wortschatz-f1ca2.firebaseapp.com',
  projectId: 'wortschatz-f1ca2',
  storageBucket: 'wortschatz-f1ca2.firebasestorage.app',
  messagingSenderId: '849798596139',
  appId: '1:849798596139:web:ebc625fa11310df7968c6e',
};
