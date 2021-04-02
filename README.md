### React + Redux + firestore 간단체팅기능 demo

[app link](web-quickstart-134f5.web.app)

#### 기능

1. google 로그인
2. 체팅방 만들고 체팅하기

#### Memo

1. **redux store**

   reducer: user(로그인 유저), chat(현제 체팅방 정보)

2. **redux + firebase auth(provider) 로그인**

   firebase.js: firebase 연결 초기화

   ```javascript
   import firebase from 'firebase';

   // firebase config
   const firebaseConfig = {};
   const firebaseApp = firebase.initializeApp(firebaseConfig);

   const db = firebaseApp.firestore();
   const auth = firebase.auth();
   // google login provider
   const provider = new firebase.auth.GoogleAuthProvider();

   export { auth, provider };
   export default db;
   ```

   login.js: google login provider로 로그인

   ```javascript
   // login
   const signin = () => {
     auth.signInWithPopup(provider).catch((err) => alert(err.message));
   };
   // logout
   const signour = () => auth.signOut();
   ```

   app.js firebase auth가 제공하는 함수로 로그인 상태 감시하고 따라서 store user reducer 상태를 dispatch하고 상태를 따라서 다른 화면을 보여줌

   ```javascript
   auth.onAuthStateChanged((authUser) => {
     if (authUser) {
       // user is logged in
       // createSlice에서 export한 "action" 함수를 dispatch
       // "action" 함수에 전달한 object가 store reducer action.payload속성에 들어감
       dispatch(
         login({
           uid: authUser.uid,
           photo: authUser.photoURL,
           email: authUser.email,
           displayName: authUser.displayName,
         })
       );
     } else {
       // user is logged out
       dispatch(logout());
     }
   });
   ```

   ```html
   <!-- user state 따라 다른 화면을 보여줌 -->
   <div className="App">{user ? <Imessage /> : <Login />}</div>
   ```

3. **firestore 구조**

   chats(collection) -> doc({chatName: ""})

   ​ -> messages(collection) -> doc({timestamp: "", message: "", uid: "", email: "", photo: "", displayName: ""})

#### process

1. **redux project setup**

   ```shell
   npx create-react-app my-app-name --template redux
   ```

2. 필요한 library 설치

   material UI

   ```shell
   npm install @material-ui/core
   npm install @material-ui/icons
   ```

   firebase 연결

   ```shell
   npm install firebase
   ```

3. firebase hosting로 deploy

   ```shell
   firebase login
   firebase init
   ```

   hosting 선택 >> use an existing project >> project 선택 >> public directory: build로 설정

   ```shell
   npm run build
   firebase deploy
   ```

#### 기타

1. **날짜 표현 library**

   [timeage](https://github.com/hustcc/timeago.js#readme)

   [moment](https://momentjs.com/)

2. **animating a list of items when the list's order changes**

   [react flip move](https://github.com/joshwcomeau/react-flip-move)
