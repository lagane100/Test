import { fetchImgs } from '../api';
/* 
    action type
*/
export const RECEIVE_BANNER_IMGS = 'RECEIVE_BANNER_IMGS';

export const fetchBannerImgs = payload => dispatch => {
    return fetchImgs().then(res => {
        if (res) {
            dispatch(receiveBannerImgs(res.data));
        }
    });
}
const receiveBannerImgs = imgs => {
    return {
        type: RECEIVE_BANNER_IMGS,
        data: imgs
    }
}