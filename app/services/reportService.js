import axios from 'axios';
import { API_ENDPOINT } from 'react-native-dotenv';

const fetchReportFormConstants = () => axios.get(`${API_ENDPOINT}/report/constants`);

export default fetchReportFormConstants;