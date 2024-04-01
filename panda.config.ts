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

    // theme
    theme: {
        // 👇🏻 Define your tokens here
        extend: {
            tokens: {
                colors: {
                    primary: { value: '#fff' },
                    secondary: { value: '#f4f4f4' },
                    mainBlue: { value: '#242f5b' },
                    mainYellow: { value: '#f1b431' },
                    mainBlack: { value: '#1f1e23'},
                    mainWhite: { value: '#fafafa'}
                },
                shadows: {
                    card: { value: '2px 4px 12px #00000014' }
                }
            }
        }
    },
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/pages/**/*.{ts,tsx,js,jsx}"],

    // Files to exclude
    exclude: [],

    // The output directory for your css system
    outdir: "styled-system",
})