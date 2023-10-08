import data from "../components/back-end/data.json";

export const authenticateUser = (userEmail: string, userPass: string) => {
    const user = data.users.find(
        (u) => u.userEmail === userEmail && u.userPass === userPass,
    );
    return user;
};

export const storeUserInLS = (user) => {
    localStorage.setItem("userSession", JSON.stringify(user));
};

export const getUserFromLS = () => {
    const rawUser = localStorage.getItem("userSession");
    return rawUser ? JSON.parse(rawUser) : {};
};

export const removeUserSessionFromLS = () => {
    localStorage.removeItem("userSession");
};

export const storeHotelIDInLS = (hotelId) => {
    localStorage.setItem("hotelInfo", JSON.stringify(hotelId));
};
