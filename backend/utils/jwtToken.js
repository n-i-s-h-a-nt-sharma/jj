// export const sendToken = (user, statusCode, res, message) => {
//   const token = user.getJWTToken();
//   const options = {
//     expires: new Date(
//       Date.now() + process.env.COOKIE_EXPIRE  * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true, // Set httpOnly to true
//   };

//   res.status(statusCode).cookie("token", token, options).json({
//     success: true,
//     user,
//     message,
//     token,
//   });
// };

// import jwt from 'jsonwebtoken';

export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken(); // Use getJWTToken instead of getJwtToken

  const options = {
    expiresIn: process.env.JWT_EXPIRE
  };

  res.status(statusCode).cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
  }).json({
    success: true,
    user,
    message,
    token,
  });
};


