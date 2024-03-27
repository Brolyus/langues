import { defineConfig, defineGlobalStyles } from "@pandacss/dev"

const globalCss = defineGlobalStyles({
    'html, body': {
        height: "100%",
        boxSizing: "border-box"
    },
    '#__next': {
        height: "100%"
    }
})

export default defineConfig({
    globalCss,
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/pages/**/*.{ts,tsx,js,jsx}"],

    // Files to exclude
    exclude: [],

    // The output directory for your css system
    outdir: "styled-system",
})