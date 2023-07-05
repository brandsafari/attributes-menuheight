/* eslint-disable no-console */
import { getPublishDate } from "@finsweet/ts-utils"

/**
 * Greets the user by printing a message in the console.
 * @param name The user's name.
 */
export const greetUser = (name) => {
   const publishDate = getPublishDate()

   console.log(`Grüezi ${name}!`)
   console.log(
      `This site was last published on ${publishDate?.toLocaleDateString("de-CH", {
         year: "numeric",
         month: "long",
         day: "2-digit",
      })}.`
   )
}
