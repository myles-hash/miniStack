import { Routes, Route} from "react-router-dom";
import UserPage from "./pages/UserPage";
import UserPostsPage from "./pages/UserPostsPage";
import UserLikesPage from "./pages/UserLikesPage";
import SortOrderForm from "./components/SortOrderForm";


export default function App(){
  return (
    <>
    <Routes>
      <Route path="/users/:username" element={<UserPage />} >
      <Route path="posts" element={<UserPostsPage />}/>
      <Route path="likes" element={<UserLikesPage />}/>
      </Route>
    </Routes>
    <SortOrderForm />
    </>
  );
}
