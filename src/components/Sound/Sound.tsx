import * as React from "react"

function SvgComponent(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            strokeWidth="1.5"
            color="#000"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#000"
                d="M1 13.857v-3.714a2 2 0 012-2h2.9a1 1 0 00.55-.165l6-3.956a1 1 0 011.55.835v14.286a1 1 0 01-1.55.835l-6-3.956a1 1 0 00-.55-.165H3a2 2 0 01-2-2z"
            ></path>
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.5 7.5S19 9 19 11.5s-1.5 4-1.5 4M20.5 4.5S23 7 23 11.5s-2.5 7-2.5 7"
            ></path>
        </svg>
    )
}

export default SvgComponent