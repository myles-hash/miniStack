import { useParams } from "react-router-dom";

export default function UserPostsPage(){
    let { username } = useParams();
    return (
        <h2>{username}'s Posts</h2>
    )
}