import { z } from "zod"
import { ThemeEnum } from "./enums.validator"

export const BaseStoreConfigSchema = z.object({
  theme: ThemeEnum,
  domain: z.string().min(1, "domain is required"),
  languages: z.array(z.string().min(2)),
  default_language: z.string().min(2, "default_language is required"),
})

export const CreateStoreConfigSchema = BaseStoreConfigSchema.refine(
  (data) => data.languages.includes(data.default_language),
  {
    message: "default_language must be one of the value of languages filed",
    path: ["default_language"],
  }
)

export const UpdateStoreConfigSchema = BaseStoreConfigSchema.partial()

export type CreateStoreConfigInput = z.infer<typeof BaseStoreConfigSchema>

export type UpdateStoreConfigInput = z.infer<typeof UpdateStoreConfigSchema>
