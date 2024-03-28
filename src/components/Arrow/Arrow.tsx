import * as React from "react"

function SvgComponent(props: any) {
    return (
        <svg
            width="7px"
            height="12px"
            viewBox="0 0 7 12"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                transform="translate(-619 -2862) translate(100 2626) translate(510 230)"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
            >
                <path d="M0 0L24 0 24 24 0 24z" />
                <path
                    d="M9.31 6.71a.996.996 0 000 1.41L13.19 12l-3.88 3.88a.996.996 0 101.41 1.41l4.59-4.59a.996.996 0 000-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"
                    fill="#f1b431"
                />
            </g>
        </svg>
    )
}

export default SvgComponent