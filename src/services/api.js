import axios from "axios";

const BASE_URL = "http://188.121.113.3/api";

const signUpHandler = async (username, email, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/accounts/register/`,
      { username: username, email: email, password: password },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (err) {
    return err;
  }
};

const signInHandler = async (username, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/accounts/register/`,
      { username: username, password: password },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (err) {
    return err;
  }
};
const signUpVerifyCodeHandler = async (code) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/accounts/register/verify/`,
      { code: code },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (err) {
    return err;
  }
};

export { signUpHandler, signInHandler, signUpVerifyCodeHandler };
