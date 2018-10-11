import { API_ENDPOINT } from 'react-native-dotenv';

export const fetchReportFormConstants = async () => {
  const response = await fetch(`${API_ENDPOINT}/report/constants`);
  return await response.json();
}

export const sendReport = async report => {
  debugger;
  const response = await fetch(`${API_ENDPOINT}/report`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(report),
  });
  return await response.text();
};