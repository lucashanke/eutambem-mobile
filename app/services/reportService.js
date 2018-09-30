import axios from 'axios';
import { API_ENDPOINT } from 'react-native-dotenv';

const fetchReportFormConstants = () => axios.get(`${API_ENDPOINT}/report/constants`);
const sendReport = report => axios.post(`${API_ENDPOINT}/report`, report);

export default fetchReportFormConstants;