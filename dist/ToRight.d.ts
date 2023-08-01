import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare const SvgToRight: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => React.JSX.Element;
export default SvgToRight;
