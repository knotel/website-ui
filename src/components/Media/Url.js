import { get, isObject } from 'lodash';

const generateUrl = (src, size) => {
    //Check if source is object
    if (isObject(src)) {
        let image_url = src;
        const { name, extension, updated_at } = src;
        const w = get(size.split('x'), "[0]", 0);
        const h = get(size.split('x'), "[1]", 0);
        if (extension === "jpg" || extension === "jpeg" || extension === "png") {
            image_url = `/image/${w}x${h}/${name}`;
        }
        else {
            image_url = `/uploads/${name}`;
        }
        if (updated_at) {
            image_url = image_url + "?v=" + updated_at;
        }
        return process.env.REACT_APP_IMAGES + image_url;
    }
    return src;
}

export {
    generateUrl
}