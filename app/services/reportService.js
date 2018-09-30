import axios from 'axios';
import { API_ENDPOINT } from 'react-native-dotenv';

export const fetchReportFormConstants = () => axios.get(`${API_ENDPOINT}/report/constants`);
export const sendReport = report => axios.post(`${API_ENDPOINT}/report`, report);
