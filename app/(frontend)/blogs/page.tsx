export default async function Blogs() {
    const users = await getPost();
    console.log('data', users);

    return (
        <div>
            {
                users.map((user): any => (
                    <div key={user.id}>
                        <h3>Name : {user?.name}</h3>
                        <h4>User name : {user?.username}</h4>
                    </div>
                ))
            }
        </div>
    )
}

async function getPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
}