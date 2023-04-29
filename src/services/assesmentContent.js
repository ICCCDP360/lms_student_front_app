import instanceBaseurl from "./auth/HttpInterceptor";

class assesemnetServices {
  AssesmentContent = (id) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl
        .get(`/api/v1/tasks/concept/conceptAssessment/${id}`)
        .then((res) => {
          resolve(res);
          return res;
        })
        .catch((err) => {
          console.log(err);
          reject(false);
          return err;
        });
    });
  };

  AssesmentResultPage = (datas) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl
        .post(`/api/v1/tasks/assessmentresult/assessmentresult`, datas)
        .then((res) => {
          resolve(res);
          return res;
        })
        .catch((err) => {
          console.log(err);
          reject(false);
          return err;
        });
    });
  };
}

export default new assesemnetServices();
