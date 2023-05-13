import instanceBaseurl from "./auth/HttpInterceptor";
import instanceBaseurl1 from "./auth/HttpInterceptor1";

// export async function videodata(data) {
//   return await instanceBaseurl.get(
//     `/api/v1/tasks/concept/conceptVideo/${data}`
//   );
// }

// export async function pdfdata(data) {
//   return await instanceBaseurl.get(`/api/v1/tasks/concept/conceptPdf/${data}`);
// }

class videoServices {
  videodata = (data) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl1
        // .get(`/api/v1/tasks/concept/conceptVideo/${data}`)
        .get(`/cdp/course/getCourseVideosList/${data}/?language=en`)
        
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  pdfdata = (data) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl
        .get(`/api/v1/tasks/concept/conceptPdf/${data}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(false);
          console.log(err);
        });
    });
  };
}

export default new videoServices();
