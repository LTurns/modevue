exports.ids = [29];
exports.modules = {

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const required = (propertyType, customErrorMessage) => {
  return v => v && v.length > 0 || customErrorMessage || `You must input a ${propertyType}`;
};

const minLength = (propertyType, minLength) => {
  return v => {
    if (!v) {
      return true;
    }

    return v.length >= minLength || `${propertyType} must be at least ${minLength} characters`;
  };
};

const maxLength = (propertyType, maxLength) => {
  return v => v && v.length <= maxLength || `${propertyType} must be less than ${maxLength} characters`;
};

const emailFormat = () => {
  const regex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,24})+$/;
  return v => v && regex.test(v) || 'Must be a valid email';
};

/* harmony default export */ __webpack_exports__["default"] = ({
  required,
  minLength,
  maxLength,
  emailFormat
});

/***/ })

};;
//# sourceMappingURL=utils-validations.js.map