import data from "./data.json";

const authenticateUser = (userEmail: string, userPass: string) => {
    const user = data.users.find(
        (u) => u.userEmail === userEmail && u.userPass === userPass,
    );
    return user;
};

export default authenticateUser;
