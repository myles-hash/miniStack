import { useParams } from "react-router-dom";

export default function UserLikesPage(){
    let { username } = useParams();
    return (
        <h2>{username}'s Likes</h2>
    )
}