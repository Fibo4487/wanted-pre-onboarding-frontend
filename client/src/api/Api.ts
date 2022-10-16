import axios from "axios";

const serverURL = "https://pre-onboarding-selection-task.shop/";

const accessToken = window.localStorage.getItem("access_token");

async function get(endpoint: string) {
  console.log("get", endpoint);
  return await axios.get(serverURL + endpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

async function post(endpoint: string, data: any) {
  console.log("post", endpoint, data);
  const body = JSON.stringify(data);

  return await axios.post(serverURL + endpoint, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

async function put(endpoint: string, data: any) {
  console.log("put", endpoint, data);
  const body = JSON.stringify(data);

  return await axios.put(serverURL + endpoint, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

async function del(endpoint: string) {
  console.log("delete", endpoint);

  return await axios.delete(serverURL + endpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export { get, post, put, del as delete };
