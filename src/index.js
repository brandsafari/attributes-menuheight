import { getCurrentBreakpoint } from "@finsweet/ts-utils"

const menu = document.querySelector("[brs-menuheight='menu']")
const menuContainer = menu?.querySelector("[brs-menuheight='menu-container']")
const navBar = menu?.querySelector("[brs-menuheight='navbar']")

let breakpoints = menu?.getAttribute("brs-menuheight-breakpoints")?.replace(/\s/g, "").split(",")
if (!breakpoints?.length) breakpoints = ["tiny"]

window.Webflow ||= []
window.Webflow.push(() => {
   if (!breakpoints.includes(getCurrentBreakpoint())) return
   if (!menu || !menuContainer || !navBar) return
   let lastPosition = 0
   window.addEventListener("scroll", () => {
      const { bottom: newPosition } = navBar.getBoundingClientRect()
      if (lastPosition === newPosition) return
      lastPosition = newPosition
      requestAnimationFrame(resizeMenu)
   })
   resizeMenu()
})

function resizeMenu() {
   const newHeight = getDistanceFromElementBottomToScreenBottom(navBar)
   menuContainer.style.height = newHeight / 16 + "rem"
   console.log("resize")
}

function getDistanceFromElementBottomToScreenBottom(element) {
   if (!element) {
      console.error("Element not found!")
      return null
   }
   const rect = element.getBoundingClientRect()
   const windowHeight = window.innerHeight || document.documentElement.clientHeight
   const distance = windowHeight - rect.bottom

   return distance
}
