import instanceBaseurl2 from "./auth/HttpInterceptor2";

class videoContentService {
    videoContent = (trigger) => {
        var config = {
            headers: {
              "x-access-token": JSON.parse(localStorage.getItem("access_tokens")),
              "Content-Type": "application/json",
            },
          };
    return new Promise((resolve, reject) => {
      instanceBaseurl2
        .post(`subchapter/video`, trigger,config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default new videoContentService();
