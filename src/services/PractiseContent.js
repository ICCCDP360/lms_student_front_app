// import instanceBaseurl from "./HttpInterceptor";
import instanceBaseurl from "./auth/HttpInterceptor";

class practiseServices {
  PracticeContent = (id) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl
        .get(`/api/v1/tasks/concept/conceptPractice/${id}`)
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
export default new practiseServices();
