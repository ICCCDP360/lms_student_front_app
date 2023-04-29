import instanceBaseurl from "./auth/HttpInterceptor";

class checkServices {
  checkaccount = (datas) => {
    // console.log(datas, "jj");
    return new Promise((resolve, reject) => {
      instanceBaseurl
        // .post(`/api/v1/student/check-account`, data)
        .post(`auth/send/otp`, datas)
        .then((res) => {
          resolve(res);
          // console.log(res?.data,"yy");
        })
        .catch((err) => {
          reject(err);
          console.log(err,"err");
        });
    });
  };
}

export default new checkServices();
