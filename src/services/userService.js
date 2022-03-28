import axios from "axios";
import authHeader from "./auth-header";
import getToken from "./getToken";
const API_URL = "http://1.117.157.26:9999/";
// 1.117.157.26


//获取所有任务
class UserService {
  async getAllTasks() {
    const response = await axios.get(API_URL + "task-info/getAllTasks", {
      headers: {
        token: authHeader().Authorization
          ? authHeader().Authorization
          : "nothing"
      }
    });
    return response;
  }
//获取发布方发布的任务
async getpublisherTasks() {
  const response = await axios.get(API_URL + "task-info/getBossTasks", {
    headers: {
      token: authHeader().Authorization
        ? authHeader().Authorization
        : "nothing"
    }
  });
  return response;
}
//获得工人的任务
async getWorkerTasks() {
  const response = await axios.get(API_URL + "submission-info/getWorkerTasks", {
    headers: {
      token: authHeader().Authorization
        ? authHeader().Authorization
        : "nothing"
    }
  });
  return response;
}

  async getAuthentication() {
    const response = await axios.get(API_URL + "task-info/getAllTasks", {
      headers: {
        token: getToken()
      }
    });
    if (response.data.code === "200") return true;
    return false;
  }
//发包方上传任务
async publishTask(formData) {

    var headers = {
      'token': authHeader().Authorization,
      "Content-Type": "multipart/form-data"
    }
    // console.log(authHeader())
    const response = await axios.post(API_URL + "task-info/publish",
      formData, { headers: headers });
    return response;
  }
//获取单个任务信息
async getsingleTask(taskId) {
  const response = await axios.get(API_URL + "task-info/getTaskInfo/"+taskId, {
    headers: {
      token: authHeader().Authorization
        ? authHeader().Authorization
        : "nothing"
    },
  });
  return response;
}
//下载文件
async downloadfile(fileId) {
  // console.log(fileId)
  const response = await axios.get(API_URL + "file-info/download/"+fileId, {
    headers: {
      token: authHeader().Authorization
        ? authHeader().Authorization
        : "nothing"
    },
  });
  return response;
}
// 添加到我的任务
async uptomytastks(fileId) {
  const response = await axios.post(API_URL + "submission-info/receiveTask",fileId, {
    headers: {
      token: authHeader().Authorization
        ? authHeader().Authorization
        : "nothing"
    },
  });
  return response;
}
//上传任务报告
async uploadReport(formData,id) {

  var headers = {
    'token': authHeader().Authorization,
    "Content-Type": "multipart/form-data"
  }
  // console.log(authHeader())
  const response = await axios.post(API_URL + "report-info/submitReport/"+id,
    formData, { headers: headers });
  return response;
}
//获取任务信息
async getsingleTask(taskId) {
  const response = await axios.get(API_URL + "task-info/getTaskInfo/"+taskId, {
    headers: {
      token: authHeader().Authorization
        ? authHeader().Authorization
        : "nothing"
    },
  });
  return response;
}
//获取报告信息
async getreportinfo(submissionId) {
  const response = await axios.get(API_URL + "report-info/getReportInfo/"+submissionId, {
    headers: {
      token: authHeader().Authorization
        ? authHeader().Authorization
        : "nothing"
    },
  });
  return response;
}
// async uptomytastks(fileId) {
//   var headers = {
//     'token': authHeader().Authorization,
//     "Content-Type": "multipart/form-data"
//   }
//   console.log(typeof(fileId))
//   const response = await axios.post(API_URL + "submission-info/receiveTask",fileId,
//      { headers: headers });
//      console.log(response)
//   return response;
// }


  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }


  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }

  getTasks(id) {
    return axios.get(API_URL + "tasks/" + id, { headers: authHeader() });
  }
}

export default new UserService();
