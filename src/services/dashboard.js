import instanceBaseurl from "./auth/HttpInterceptor";

class dashboardServices {
  Dashboardcontent = (language) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl
        .get(`/api/v1/student/dashboard/content?lang=${language}`)
        .then((respose) => {
          resolve(respose.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  profiledetails = (data) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl
        .get(`api/v1/student/profile/${data}`)
        .then((respose) => {
          resolve(respose.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  DashboardSwitchAcc = (data) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl
        .post(`/api/v1/student/check-account`, data)
        .then((respose) => {
          resolve(respose.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default new dashboardServices();
