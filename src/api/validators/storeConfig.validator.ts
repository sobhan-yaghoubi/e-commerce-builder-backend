import { z } from "zod"
import { ThemeEnum } from "./enums.validator"

export const BaseStoreConfigSchema = z.object({
  theme: ThemeEnum,
  name: z.string().min(1, "name is required"),
  domain: z.string().min(1, "domain is required"),
  languages: z.array(z.string().min(2)),
  defaultLanguage: z.string().min(2, "defaultLanguage is required"),
})

export const CreateStoreConfigSchema = BaseStoreConfigSchema.refine(
  (data) => data.languages.includes(data.defaultLanguage),
  {
    message: "defaultLanguage must be one of the value of languages filed",
    path: ["defaultLanguage"],
  }
)

export const UpdateStoreConfigSchema = BaseStoreConfigSchema.partial()

export type CreateStoreConfigInput = z.infer<typeof BaseStoreConfigSchema>

export type UpdateStoreConfigInput = z.infer<typeof UpdateStoreConfigSchema>
