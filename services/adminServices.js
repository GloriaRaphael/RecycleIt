// const admin = require("../models/admin");
// const CustomError = require("../helpers/CustError");

// class AdminService {
//   async signinAdmin({ email, password }) {
//     const user = await Doctor.findOne({ email });

//     if (user.password != password) {
//       //Throw custom error if password is invalid
//       // throw new Error('Incorrect username or password');
//     }
//   }

//   async getUser(_id) {
//     const user = await user.findOne({ _id });

//     //Throw custom error if id is invalid

//     return doctor;
//   }

//   async getUser(userId) {
//     const user = await User.findOne({ _id: userId });

//     return user;
//   }

//   async deleteUser(userId) {
//     return await User.findOneAndRemove({ _id: userId });
//   }
// }
