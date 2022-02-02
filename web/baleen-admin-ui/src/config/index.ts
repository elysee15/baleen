const { REACT_APP_S3_ACCESS_KEY_ID, REACT_APP_S3_SECRET_ACCESS_KEY, REACT_APP_API_ENDPOINT } = process.env;

const CONFIG = {
    S3_ACCESS_KEY_ID: REACT_APP_S3_ACCESS_KEY_ID,
    S3_SECRET_ACCESS_KEY: REACT_APP_S3_SECRET_ACCESS_KEY,
    API_ENDPOINT: REACT_APP_API_ENDPOINT,
};

export default CONFIG;