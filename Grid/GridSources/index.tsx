import React, {FC} from "react";
import '../style.css'

type GridType = {
    className?: string
}
export const Grid: FC<GridType> = ({children, className}) => {
    return (
        <div className={`Grid ${className}`}>
            {children}
        </div>
    )
}