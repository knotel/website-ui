import moment from "moment";

export const todayDateInUnix = () => {
    return Math.floor(moment.unix(moment()).valueOf() / 1000000);
}

export const formatDate = (d, format) => {
    if (!d)
        return "";
    if (!format)
        format = "DD MMMM YYYY";
    return moment(d * 1000).format(format);
}

export const convertDateToUnix = (dateText) => {
    return Math.floor(moment.unix(moment(dateText)).valueOf() / 1000000);
}