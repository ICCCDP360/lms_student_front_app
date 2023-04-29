import instanceBaseurl from "./auth/HttpInterceptor";

class signinServices {
  Signinpage = (trigger) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl
        // .post(`/api/v1/student/signin`, trigger)
        .post(`auth/login`, trigger)
        
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default new signinServices();
