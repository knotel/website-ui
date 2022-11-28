import React, { useState, useEffect, useRef } from 'react';
import Spinner from '../Spinner';
import style from './style.module.css';
import { get } from 'lodash';

const BrokenImage = ({ className, icon = "fa-image", sizer }) => {
    return (
        <>
            {
                sizer === true && (
                    <div className={style.sizer}></div>
                )
            }
            <div className={style.bsz}>
                <div className={`${style.bgImage}${className ? " " + className : ""}`}>
                    <div className={style.fa}>
                        <i className={`fa-solid ${icon}`}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

const NormalImage = ({ src, className, alt }) => {
    return (
        <div className={style.bsz}>
            <div className={`${style.bgImage}${className ? " " + className : ""}`} style={{ backgroundImage: `url(${src})` }}>
                <img src={src} alt={alt} />
            </div>
        </div>
    )
}

const LazyImage = ({ src, className, alt, sizer }) => {
    const [loaded, setLoaded] = useState(0);
    const [dimesion, setDimension] = useState([0, 0]);
    const [isIntersecting, setIntersecting] = useState(false)
    const ref = useRef();
    let img = new Image();
    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    )

    const loadImage = () => {
        img.src = src;
        if (img.complete || img.readystate === 4) {
            setLoaded(1);
            setDimension([img.width, img.height]);
        }
        else {
            img.onload = () => {
                setLoaded(1);
                setDimension([img.width, img.height]);
            }
            img.onerror = () => {
                setLoaded(2);
                console.log("Error in loading img: " + src);
            }
        }
    }

    useEffect(() => {
        if (loaded === 0) {
            if (isIntersecting) {
                // Remove the observer once intersected or error
                observer.disconnect();
                loadImage();
            }
            else {
                observer.observe(ref.current);
            }
        }
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    })

    return (
        <>
            {
                sizer === true && (
                    <div className={style.sizer} style={{ paddingTop: `${dimesion[0] > 0 && dimesion[1] > 0 ? dimesion[1] * 100 / dimesion[0] : 50}%` }}></div>
                )
            }
            <div className={style.bsz} ref={ref}>
                <div className={`${style.bgImage}${className ? " " + className : ""}${loaded === 0 ? " " + style.loading : ""}`} style={{ backgroundImage: loaded === 1 ? `url("${encodeURI(src)}")` : "none" }}>
                    {
                        loaded === 1 && (
                            <img src={src} alt={alt} />
                        )
                    }
                    {
                        loaded === 0 && (
                            <div className={style.spinner}>
                                <Spinner color="#fff" />
                            </div>
                        )
                    }
                    {
                        loaded === 2 && (
                            <div className={style.fa}>
                                <i className={`fa-regular fa-image-slash`}></i>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

const Background = ({ src, cdn = false, className = false, alt = "", lazy = true, fallback = true, retainAspectRatio = false }) => {
    //If src is empty then display a broken image
    if (!src) {
        if (fallback === true) {
            //Show a broken image for fallback if set to true
            return (
                <BrokenImage sizer={retainAspectRatio} />
            )
        }
        return null;
    }

    //Construct image url using CDN
    let image_url = src;

    if (cdn === true) {
        image_url = process.env.REACT_APP_IMAGES + '/uploads/' + get(src, 'name');
    }

    //If lazy load is disabled, then display the image directly
    if (lazy === false && retainAspectRatio === false) {
        return (
            <NormalImage src={image_url} className={className} alt={alt} />
        )
    }

    //Lazy load the image
    return (
        <LazyImage src={image_url} className={className} alt={alt} sizer={retainAspectRatio} />
    )
}

export default Background;