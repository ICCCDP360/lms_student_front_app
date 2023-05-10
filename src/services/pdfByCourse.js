import instanceBaseurl2 from "./auth/HttpInterceptor2";

class pdfContentService {
    pdfContent = (trigger) => {
        var config = {
            headers: {
              "x-access-token": JSON.parse(localStorage.getItem("access_tokens")),
              "Content-Type": "application/json",
            },
          };
    return new Promise((resolve, reject) => {
      instanceBaseurl2
        .post(`subchapter/pdf`, trigger,config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default new pdfContentService();
