import { useParams, Outlet, Link, useSearchParams } from "react-router-dom";


export default function UserPage() {
    const [searchParams] = useSearchParams();
    const sort = searchParams.get("sort");
    let { username } = useParams();
    return (
    <>
    <hr />
    sort: {sort}
    <h2>User ID: {username}</h2>
    <Link to={`/users/${username}`}>User {username}'s profile</Link>
    <Link to={`/users/${username}/posts`}>User {username}'s posts</Link>
    <Link to={`/users/${username}/likes`}>User {username}'s likes</Link>
    <Outlet />
    </>
    );
}