import React, {FC, useContext} from "react";
import {PropsType} from './types'
import {GridMediaContext, mediaType} from '../GridMediaContext'

export const GridItem: FC<PropsType> = (props) => {

    const {children, className, parameters: {col, row}} = props
    const currentMedia = useContext<mediaType>(GridMediaContext)

    return (
        <div
            style={{gridColumn: col[currentMedia], gridRow: row?.[currentMedia]}}
            className={className}
        >
            {children}
        </div>
    )
}