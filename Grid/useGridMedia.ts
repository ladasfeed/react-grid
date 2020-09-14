import useMediaQuery from "use-media";
import {mediaType} from './GridSources/GridMediaContext'
/* types */

type MediaType = {
    //desktop: boolean
    laptop: boolean
    tablet: boolean
    mobile: boolean
}

export const useGridMedia = ():mediaType => {
    /* repeat your grid parameters */
    const media:MediaType = {
        //desktop: useMediaQuery({minWidth: 1280}),
        laptop: useMediaQuery({minWidth: 1024, maxWidth: 1439}),
        tablet: useMediaQuery({minWidth: 426, maxWidth: 1023}),
        mobile: useMediaQuery({maxWidth: 425})
    }

    return (():mediaType=>{
        //if (media.desktop) return 'desktop'
        if (media.laptop) return 'laptop'
        if (media.tablet) return 'tablet'
        if (media.mobile) return 'mobile'
        return 'desktop'
    })()
};

