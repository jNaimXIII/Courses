import joi from "joi";

export const rangeSchema = joi.object({
  min: joi.number().integer().required(),
  max: joi.number().integer().min(joi.ref("min")).required(),
});
