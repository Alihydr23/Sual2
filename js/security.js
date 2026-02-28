// Security Functions Module

/**
 * XSS Protection Function
 * This function sanitizes user input to prevent XSS attacks.
 * @param {string} input - The user input to be sanitized.
 * @returns {string} - The sanitized input.
 */
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(input));
    return div.innerHTML;
}

/**
 * Input Validation Function
 * Validates user input against a set of rules.
 * @param {string} input - The user input to validate.
 * @param {RegExp} pattern - The regular expression pattern to validate against.
 * @returns {boolean} - True if valid, otherwise false.
 */
function validateInput(input, pattern) {
    return pattern.test(input);
}

/**
 * Error Handling Function
 * Centralized error handling function.
 * @param {Error} error - The error object.
 */
function handleError(error) {
    console.error('An error occurred:', error);
    // Additional logic for handling the error, e.g. logging to a server
}

/**
 * Data Sanitization Function
 * Sanitizes data before processing.
 * @param {string} data - The data to sanitize.
 * @returns {string} - The sanitized data.
 */
function sanitizeData(data) {
    return data.replace(/<script[^>]*>(.*?)<\/script>/gi, '');
}

module.exports = { sanitizeInput, validateInput, handleError, sanitizeData };