import axios from 'axios';

const API_URL = 'http://1.117.157.26:9999/';
const MY_URL = 'http://localhost:8080/api/auth/login'
class AuthService {

  async login (user) {
    // console.log(user.userId);
    // console.log(user.password);

    const response =await  axios
      .post(API_URL+'account-info/login', {
        userId: user.userId,
        password: user.password
      })


    if(response.data.code !== "200"){
      return response;
    }
    localStorage.setItem('user', JSON.stringify(response.data.data));
    localStorage.setItem('token',response.data.data.token)
    return response;
  }

  logout () {
    localStorage.removeItem('user');
  }
  async register (user) {
    const response = await axios.post(API_URL + 'account-info/register', {
      userId: user.userId,
      // email: user.email,
      password: user.password,
      identity: user.identity
    });
    // console.log("register log");
    // console.log(response.data);
    return response;
  }
}

export default new AuthService();
