import instanceBaseurl from "./auth/HttpInterceptor";

class allconceptServices {
  allconcept = (lang, scl_id, std) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl
        .get(
          `/api/v1/tasks/concept/conceptBySchool/?lang=${lang}&sch_id=${scl_id}&std=${std}`
        )
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  taskCourse = (id, lang) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl
        .get(`/api/v1/tasks/mytask/mytask/mystudent/${id}/?lang=${lang}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  completeconcept = (id, lang) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl
        .get(`/api/v1/tasks/mytask/completed/${id}/?lang=${lang}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };
}

export default new allconceptServices();
