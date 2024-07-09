import { fetchCall, fetchNoCall, fetchLoginCall } from './ajax';
import { API_CONSTANTS, API_METHODS } from './api-constants';


// export const GetSolutions = (callback, payload) => {
//     const url = `${API_CONSTANTS.GET_SOLUTIONS}`;
//     return fetchCall((response) => {
//         callback(response);
//     }, url, API_METHODS.GET, payload);
// };

// export const ScheduleCall = (callback, payload) => {
//     const url = `${API_CONSTANTS.SCHEDULE_CALL}`;
//     return fetchCall((response) => {
//         callback(response);
//     }, url, API_METHODS.POST, payload);
// };

export const ContactUsEnquire = (callback, payload) => {
    const url = `${API_CONSTANTS.ENQUIRE_FORM}`;
    return fetchCall((response) => {
        callback(response);
    }, url, API_METHODS.POST, payload);
};
export const senddata = (callback, payload) => {
    const url = `https://csol.creedleads.com/api/Account/HomePageContactUs`;
    return fetchCall((response) => {
        callback(response);
    }, url, API_METHODS.POST, payload);
};