import Joi from "joi";

export const insertTest = Joi.object({
  name: Joi.string().trim().required(),
  pdfUrl: Joi.string().uri().trim().required(),
  categoryId: Joi.number().integer().required(),
  teacherId: Joi.number().integer().required(),
  disciplineId: Joi.number().integer().required(),
});
