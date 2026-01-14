import Joi from "joi";

export const fullNameRuSchema = Joi.string()
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

export const fullNameUzSchema = Joi.string()
  .trim()
  .min(5)
  .max(100)
  .pattern(/^[A-Za-zА-Яа-яЁёЎўҒғҚқҲҳ\s'-]+$/)
  .required()
  .messages({
    "string.base": "Ism familiya matn bo‘lishi kerak",
    "string.empty": "Ism familiya bo‘sh bo‘lishi mumkin emas",
    "string.min": "Ism familiya juda qisqa",
    "string.max": "Ism familiya juda uzun",
    "string.pattern.base":
      "Ism familiyada faqat harflar va bo‘sh joy bo‘lishi mumkin",
    "string.fullName": "Ism va familiyani to‘liq kiriting",
    "any.required": "Ism familiya majburiy"
  });

export const phoneUzSchema = Joi.string()
  .trim()
  .pattern(/^(\+?998\s?)?(90|91|93|94|95|97|98|99)\s?\d{3}\s?\d{2}\s?\d{2}$/)
  .required()
  .messages({
    "string.base": "Telefon raqami matn ko‘rinishida bo‘lishi kerak",
    "string.empty": "Telefon raqami bo‘sh bo‘lishi mumkin emas",
    "string.pattern.base":
      "Telefon raqami noto‘g‘ri formatda kiritildi. Misol: +998 97 192 22 27",
    "any.required": "Telefon raqami majburiy"
  });

export const phoneRuSchema = Joi.string()
  .trim()
  .pattern(/^(\+?998\s?)?(90|91|93|94|95|97|98|99)\s?\d{3}\s?\d{2}\s?\d{2}$/)
  .required()
  .messages({
    "string.base": "Номер телефона должен быть строкой",
    "string.empty": "Номер телефона не может быть пустым",
    "string.pattern.base":
      "Неверный формат номера телефона. Пример: +998 97 192 22 27",
    "any.required": "Номер телефона обязателен"
  });
