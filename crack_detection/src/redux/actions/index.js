import { PIC_PATH, RES_PATH } from '../contants/index'
export function loadPicA(pic_path) {

    return {
        type: PIC_PATH,
        pic_path
    }
}
export function res_pathA(res_path) {
    return {
        type: RES_PATH,
        res_path
    }
}