// import instanceBaseurl from "./HttpInterceptor";
import instanceBaseurl from "./auth/HttpInterceptor";

class accountServices {
  Accountdeatailsdata = (datas) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl
        .post("/api/v1/student/select-account", datas)
        .then((respose) => {
          resolve(respose.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default new accountServices();
