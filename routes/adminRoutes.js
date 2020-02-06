const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
var AdminBroMongoose = require("admin-bro-mongoose");
AdminBro.registerAdapter(AdminBroMongoose);

const mongoose = require("mongoose");

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: "/admin"
});

// const ADMIN = {
//   email: process.env.ADMIN_EMAIL || "admin@recycleit.com",
//   password: process.env.ADMIN_PASSWORD || "recycleteam"
// };
// , {
//   cookieName: process.env.ADMIN_COOKIE_NAME || "admin-bro",
//   cookiePassword:
//     process.env.ADMIN_COOKIE_PASS ||
//     "supersecret-and-long-password-for-a-cookie-in-the-browser",
//   authenticate: async (email, password) => {
//     if (email === ADMIN.email && password === ADMIN.password) {
//       return ADMIN;
//     }
//     return null;
//   }
// }
// , {
//   cookieName: process.env.ADMIN_COOKIE_NAME || "admin-bro",
//   cookiePassword:
//     process.env.ADMIN_COOKIE_PASS ||
//     "supersecret-and-long-password-for-a-cookie-in-the-browser",
//   authenticate: async (email, password) => {
//     if (email === ADMIN.email && password === ADMIN.password) {
//       return ADMIN;
//     }
//     return null;
//   }
// }

// const Adminrouter = AdminBroExpress.buildRouter(adminBro);
const Adminrouter = AdminBroExpress.buildRouter(adminBro);

module.exports = Adminrouter;
