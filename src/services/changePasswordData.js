import instanceBaseurl from "./auth/HttpInterceptor";

class changeServices {
  ChangePasswordData = (data) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl
        .post(`/api/v1/student/change-passcode`, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default new changeServices();
