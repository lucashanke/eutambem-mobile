import { API_ENDPOINT } from 'react-native-dotenv';

export const fetchReportFormConstants = () =>
  fetch(`${API_ENDPOINT}/report/constants`).then(response => response.json());

export const sendReport = report =>
  fetch(`${API_ENDPOINT}/report`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(report),
  }).then(response => response.text());
