import joi from "joi";

export const fakeSchema = joi.object({
  fields: joi
    .array()
    .unique()
    .items(joi.string().valid("name", "email", "age")),
});
