"use strict";
exports.__esModule = true;
exports.datetimeToString = exports.dateToString = void 0;
exports.dateToString = function (dt) {
    return dt.getFullYear() + '-'
        + ('00' + (dt.getMonth() + 1)).slice(-2) + '-'
        + ('00' + dt.getDate()).slice(-2);
};
/**
 * Convert datetime into the String.
 * @param {Date} dt
 * @returns {string} "YYYY-MM-DD"
 */
exports.datetimeToString = function (dt) {
    return dt.getFullYear() + '-'
        + ('00' + (dt.getMonth() + 1)).slice(-2) + '-'
        + ('00' + dt.getDate()).slice(-2) + ' '
        + ('00' + dt.getHours()).slice(-2) + ':'
        + ('00' + dt.getMinutes()).slice(-2) + ':'
        + ('00' + dt.getSeconds()).slice(-2);
};
