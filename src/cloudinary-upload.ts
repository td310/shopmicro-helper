import cloudinary, {UploadApiErrorResponse, UploadApiResponse} from 'cloudinary';

export function uploads(
    file: string, 
    public_id?: string,
    overwrite?: boolean,
    invalidate?: boolean,
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
    return new Promise((resolve) => {
        cloudinary.v2.uploader.upload(
            file,
            {
                public_id,
                overwrite,
                invalidate,
                resource_type: 'auto',
            },
            (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
                if (error) {
                    resolve(error);
                } else {
                    resolve(result);
                }
            },
        );
    });
}

export function uploadVideos(
    file: string, 
    public_id?: string,
    overwrite?: boolean,
    invalidate?: boolean,
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
    return new Promise((resolve) => {
        cloudinary.v2.uploader.upload(
            file,
            {
                public_id,
                overwrite,
                invalidate,
                chunk_size: 6000000,
                resource_type: 'video',
            },
            (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
                if (error) {
                    resolve(error);
                } else {
                    resolve(result);
                }
            },
        );
    });
}