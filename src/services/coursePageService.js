import instanceBaseurl1 from "./auth/HttpInterceptor1";

class courseDatasServices {
  courseDatas = (lang,std) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl1
        .get(`/course/getCourseMainPageByStandard/?language=${lang}&standard=${std}`)
        .then((res) => {
          resolve(res?.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default new courseDatasServices();