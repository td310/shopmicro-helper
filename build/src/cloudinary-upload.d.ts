import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
export declare function uploads(file: string, public_id?: string, overwrite?: boolean, invalidate?: boolean): Promise<UploadApiResponse | UploadApiErrorResponse | undefined>;
export declare function uploadVideos(file: string, public_id?: string, overwrite?: boolean, invalidate?: boolean): Promise<UploadApiResponse | UploadApiErrorResponse | undefined>;
