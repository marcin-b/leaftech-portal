import React from 'react';

export type Style = React.CSSProperties;
export type InformationType = "WARNING" | "INFORMATION" | "DANGER" | "SUCCESS";
export type Direction = "up" | "down" | "right" | "left";
export type VoidFunc = () => void;
export type Children = JSX.Element | JSX.Element[];
export type Align = "start" | "end" | "center" | "strech" | undefined;
export type Justify = "start" | "end" | "center" | "between" | "around" | "evenly" | undefined;
export type AlignSelf = "start" | "end" | "center" | "strech";
export type IconatorVariation = "dark" | "light" | string;
export type IconatorType = "globe" | "location" | "form"| "invoice" | "edit" | "trashcan" | "network" | "footfall" | "clock" | string;
