//获取localstorge中的token
export default function getToken(){
    const localUser = localStorage.getItem('user');
    if(!localUser) return 'no'

    const user = JSON.parse(localUser);
    if (user) {
      return ''+user.token ; // for Spring Boot back-end
    } else {
      return 'no';
    }
}