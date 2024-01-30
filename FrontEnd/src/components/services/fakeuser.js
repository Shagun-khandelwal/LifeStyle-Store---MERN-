const users=[
    {
        "_id": "643796b0c7e9155cc01908e2",
        "fullname": "user1",
        "email": "user1@gmail.com",
        "password": "123456",
        "services": "buyer",
        "phone": "1234567890",
        "address": "M.P.Nagar",
        "city": "Bhopal",
        "state": "M.P.",
        "pincode": 462022,
        "cart": [],
        "order":[]
      }
];
export function getUser(userid){
    return users.find(user=>user._id===userid);
}