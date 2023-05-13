import instanceBaseurl2 from "./auth/HttpInterceptor2";

class assessmentContentService {
    assessmentContent = (trigger) => {
        var config = {
            headers: {
              "x-access-token": localStorage.getItem("access_tokens"),
              "Content-Type": "application/json",
            },
          };
    return new Promise((resolve, reject) => {
      instanceBaseurl2
        .post(`chapter/assessments`, trigger,config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default new assessmentContentService();
