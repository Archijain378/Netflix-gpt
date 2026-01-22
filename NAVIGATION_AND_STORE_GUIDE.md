# Netflix-GPT: Navigation and Redux Store Detailed Guide

## 1. Navigation (React Router)

### How Navigation Works

- **React Router** is used for client-side navigation.
- The main routing is usually set up in `App.js` using `<BrowserRouter>`, `<Routes>`, and `<Route>`.
- **`useNavigate` Hook:**
  - Import from `react-router-dom`.
  - Allows programmatic navigation (e.g., after login or logout).
  - Example:
    ```js
    import { useNavigate } from "react-router-dom";
    const navigate = useNavigate();
    // Navigate to browse page
    navigate("/browse");
    ```
- **Typical Usage:**
  - After a successful login, redirect to `/browse`.
  - After logout, redirect to `/login`.

### Example (from Login.js or similar):

```js
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

const handleLogin = () => {
  // ...login logic...
  if (loginSuccess) {
    navigate("/browse");
  }
};
```

## 2. Redux Store (State Management)

### Store Setup

- **Redux Toolkit** is used for easier Redux setup.
- Store is created in `src/utils/appStore.js`:

  ```js
  import { configureStore } from "@reduxjs/toolkit";
  import userReducer from "./userSlice";

  const appStore = configureStore({
    reducer: {
      user: userReducer,
      // add other reducers here
    },
  });

  export default appStore;
  ```

### Providing the Store

- In `src/index.js`, the store is provided to the app:

  ```js
  import { Provider } from "react-redux";
  import appStore from "./utils/appStore";

  <Provider store={appStore}>
    <App />
  </Provider>;
  ```

### Slices (e.g., userSlice.js)

- Slices define state and reducers for a feature.
- Example from `src/utils/userSlice.js`:

  ```js
  import { createSlice } from "@reduxjs/toolkit";

  const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
      setUser: (state, action) => action.payload,
      clearUser: () => null,
    },
  });

  export const { setUser, clearUser } = userSlice.actions;
  export default userSlice.reducer;
  ```

### Using Redux in Components

- **Reading State:**
  ```js
  import { useSelector } from "react-redux";
  const user = useSelector((state) => state.user);
  ```
- **Dispatching Actions:**
  ```js
  import { useDispatch } from "react-redux";
  import { setUser, clearUser } from "../utils/userSlice";
  const dispatch = useDispatch();
  dispatch(setUser(userData));
  dispatch(clearUser());
  ```

## 3. Example Flow

1. User logs in on the Login page.
2. On success, `dispatch(setUser(userData))` updates the Redux store.
3. `navigate("/browse")` redirects the user to the Browse page.
4. Components like `Header` or `Browse` use `useSelector` to access the user state.
5. On logout, `dispatch(clearUser())` clears the user state and `navigate("/login")` redirects to login.

---

**Tip:**

- Use Redux for global state (user, auth, etc.).
- Use React Router for navigation between pages.
- Use hooks (`useSelector`, `useDispatch`, `useNavigate`) in your components for clean, readable code.

---

Feel free to expand this file with more details or code samples as your project grows!
