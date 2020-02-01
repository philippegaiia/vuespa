export const is404 = function (err) {
    return isErrorWithResponseAnsStatus(err) && 404 === err.response.status;
};

export const is422 = function (err) {
    return isErrorWithResponseAnsStatus(err) && 422 === err.response.status;

};

const isErrorWithResponseAnsStatus = function (err) {
    return err.response && err.response.status;
};
