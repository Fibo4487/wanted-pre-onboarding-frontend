import axios from "axios";

const serverURL = "https://pre-onboarding-selection-task.shop/";

async function get(endpoint: string) {
  return await axios.get(serverURL + endpoint);
}

async function post(endpoint: string, data: any) {
  const body = JSON.stringify(data);

  return await axios.post(serverURL + endpoint, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function put(endpoint: string, data: any) {
  const body = JSON.stringify(data);

  return await axios.put(serverURL + endpoint, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function del(endpoint: string) {
  return await axios.delete(serverURL + endpoint);
}

export { get, post, put, del as delete };
