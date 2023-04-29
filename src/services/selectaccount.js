import instanceBaseurl from "./auth/HttpInterceptor";

class selectServices {
  SelectAccount = (data) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl
        .post(`/api/v1/student/select-account`, data)
        .then((res) => {
          resolve(res.data);
          console.log(res.data, "jj");
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}
export default new selectServices();
