import cloudinary from 'cloudinary';
export function uploads(file, public_id, overwrite, invalidate) {
  return new Promise(resolve => {
    cloudinary.v2.uploader.upload(file, {
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
export function uploadVideos(file, public_id, overwrite, invalidate) {
  return new Promise(resolve => {
    cloudinary.v2.uploader.upload(file, {
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