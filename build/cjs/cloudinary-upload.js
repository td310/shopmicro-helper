"use strict";

exports.__esModule = true;
exports.uploadVideos = uploadVideos;
exports.uploads = uploads;
var _cloudinary = _interopRequireDefault(require("cloudinary"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function uploads(file, public_id, overwrite, invalidate) {
  return new Promise(resolve => {
    _cloudinary.default.v2.uploader.upload(file, {
      public_id,
      overwrite,
      invalidate,
      resource_type: 'auto'
    }, (error, result) => {
      if (error) {
        resolve(error);
      } else {
        resolve(result);
      }
    });
  });
}
function uploadVideos(file, public_id, overwrite, invalidate) {
  return new Promise(resolve => {
    _cloudinary.default.v2.uploader.upload(file, {
      public_id,
      overwrite,
      invalidate,
      chunk_size: 6000000,
      resource_type: 'video'
    }, (error, result) => {
      if (error) {
        resolve(error);
      } else {
        resolve(result);
      }
    });
  });
}
//# sourceMappingURL=cloudinary-upload.js.map