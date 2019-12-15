import React from "react";
// types
import { Children, Align, Justify, AlignSelf } from "./types/main";

interface FlexContainerProps {
	children: Children;
	column?: boolean;
	row?: boolean;
	columnReverse?: boolean;
	rowReverse?: boolean;
	align?: Align;
	justify?: Justify;
	alignSelf?: AlignSelf;
	alignContent?: Justify;
	style?: any;
	disabled?: boolean;
	wrap?: boolean;
	className?: string;
}

export const FlexContainer = ({
	column,
	row,
	rowReverse,
	columnReverse,
	align,
	justify,
	alignSelf,
	alignContent,
	wrap,
	children,
	style,
	className
}: FlexContainerProps) => {
	return (
		<div
			className={className ? className : ""}
			style={{
				display: "flex",
				flexWrap: !wrap ? "no-wrap" : "wrap",
				flexDirection: column
					? "column"
					: columnReverse
					? "column-reverse"
					: rowReverse
					? "row-reverse"
					: row
					? "row"
					: "row",
				justifyContent:
					justify === "start"
						? "flex-start"
						: justify === "end"
						? "flex-end"
						: justify === "center"
						? "center"
						: justify === "between"
						? "space-between"
						: justify === "around"
						? "space-around"
						: justify === "evenly"
						? "space-evenly"
						: "flex-start",
				alignContent:
					alignContent === "start"
						? "flex-start"
						: alignContent === "end"
						? "flex-end"
						: alignContent === "center"
						? "center"
						: alignContent === "between"
						? "space-between"
						: alignContent === "around"
						? "space-around"
						: alignContent === "evenly"
						? "space-evenly"
						: "flex-start",
				alignItems: align ? align : "center",
				alignSelf: alignSelf ? alignSelf : null,
				...style
			}}
		>
			{children}
		</div>
	);
};
