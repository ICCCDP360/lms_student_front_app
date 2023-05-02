// import { BASE_URL } from "./baseurl";
import instanceBaseurl from "./auth/HttpInterceptor";

export async function VerifyData(datas) {
  // return await instanceBaseurl.post(`/api/v1/student/set-passcode`, datas);
  return await instanceBaseurl.post(`auth/genarate/password`, datas);
}

export async function verifydetail(data) {
  return await instanceBaseurl.post(`/api/v1/student/verify-account/${data}`);
}
