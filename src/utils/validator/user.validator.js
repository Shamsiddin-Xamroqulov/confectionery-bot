import Joi from "joi";

export const fullNameSchema = Joi.string()
  .trim()
  .min(5)
  .max(100)
  .pattern(/^[A-Za-zА-Яа-яЁёЎўҒғҚқҲҳ\s'-]+$/)
  .required()
  .messages({
    "string.base": "Имя и фамилия должны быть текстом",
    "string.empty": "Имя и фамилия не могут быть пустыми",
    "string.min": "Имя и фамилия слишком короткие",
    "string.max": "Имя и фамилия слишком длинные",
    "string.pattern.base": "Имя и фамилия могут содержать только буквы и пробелы",
    "string.fullName": "Пожалуйста, введите имя и фамилию полностью",
    "any.required": "Имя и фамилия обязательны"
});