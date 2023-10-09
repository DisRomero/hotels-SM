export const getHotels = (db) => {
    const hotels = db.hotels;
    return hotels;
};

export const getHotelsById = (db, hotelId: string) => {
    const hotel = db.hotels.find((h) => h.hotelId === hotelId);

    return hotel ? hotel : undefined;
};

export const getRooms = (db) => {
    const rooms = db.rooms;
    return rooms;
};

export const getRoomsByHotelId = (db, hotelId: string) => {
    const rooms = db.rooms.filter((r) => r.hotelId === hotelId);

    return rooms;
};

export const getRoomById = (db, roomId: string) => {
    const room = db.rooms.find((r) => r.roomId === roomId);

    return room ? room : undefined;
};

export const getBookingByUserEmail = (db, userEmail: string) => {
    const booking = db.booking.find((b) => b.email === userEmail);

    return booking ? booking : undefined;
};
