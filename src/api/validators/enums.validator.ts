import { z } from "zod"
import { Theme } from "@generated-prisma-client"

const themeValues = Object.values(Theme) as [string, ...string[]]

export const ThemeEnum = z.enum(themeValues)
