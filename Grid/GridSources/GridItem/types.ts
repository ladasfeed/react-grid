type DeviceType = {
    'desktop': string,
    'laptop'?: string,
    'tablet'?: string,
    'mobile': string,
}

export type GridStylesType = {
    col: DeviceType,
    row?: DeviceType
}

export type PropsType = {
    className?: string,
    parameters: GridStylesType,
}