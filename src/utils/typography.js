import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

// https://kyleamathews.github.io/typography.js/ - Customizing Themes
fairyGateTheme.overrideThemeStyles = options => ({
  html: {
    overflowY: "auto",
  },
})

const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography
