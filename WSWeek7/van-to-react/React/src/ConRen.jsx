export default function ConRen(){
    const isLoggedIn = true;

    if (isLoggedIn) {
        return <h1>Welcome back</h1>;
    } else {
        return <h1>Please log in</h1>;
    }
}