import React from "react";
export type mediaType =  'mobile' | 'tablet' | 'laptop' | 'desktop'
export const GridMediaContext = React.createContext<mediaType>('desktop')