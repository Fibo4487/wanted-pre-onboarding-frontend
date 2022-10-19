import axios from "axios";

const serverURL = "https://pre-onboarding-selection-task.shop/";

const getAccessToken = () => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    return JSON.parse(accessToken);
  } else {
    return null;
  }
};

async function get(endpoint: string) {
  const accessToken = getAccessToken();
  return await axios.get(serverURL + endpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

async function post(endpoint: string, data: any) {
  const accessToken = getAccessToken();
  const body = JSON.stringify(data);

  return await axios.post(serverURL + endpoint, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

async function put(endpoint: string, data: any) {
  const accessToken = getAccessToken();
  const body = JSON.stringify(data);

  return await axios.put(serverURL + endpoint, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

async function del(endpoint: string) {
  const accessToken = getAccessToken();

  return await axios.delete(serverURL + endpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export { get, post, put, del as delete };
