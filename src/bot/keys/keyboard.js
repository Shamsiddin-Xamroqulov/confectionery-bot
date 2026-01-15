export const languageKeyboard = () => ({
  keyboard: [[{ text: "🇷🇺 Русский" }, { text: "🇺🇿 Uzbek" }]],
  resize_keyboard: true,
  one_time_keyboard: true,
});

export const editingLanguageKeyboard = () => ({
  uzLanguageKeyboard: [
    [{ text: "🇺🇿 Uzbek" }],
    [{ text: "⬅️ Вернутся в Настройках" }],
  ],
  ruLanguageKeyboard: [
    [{ text: "🇷🇺 Русский" }],
    [{ text: "⬅️ Sozlamalarga qaytish" }],
  ],
});

export const registerRuKeyboard = () => ({
  keyboard: [[{ text: "📝 Регистрация" }]],
  resize_keyboard: true,
  one_time_keyboard: true,
});

export const registerUzKeyboard = () => ({
  keyboard: [[{ text: "📝 Ro'yxatdan o'tish" }]],
  resize_keyboard: true,
  one_time_keyboard: true,
});

export const contactRuKeyboard = () => ({
  keyboard: [[{ text: "📞 Поделиться контактом", request_contact: true }]],
  resize_keyboard: true,
  one_time_keyboard: true,
});

export const contactUzKeyboard = () => ({
  keyboard: [[{ text: "📞 Contactni yuborish", request_contact: true }]],
  resize_keyboard: true,
  one_time_keyboard: true,
});

export const clientRuMenu = () => ({
  keyboard: [
    [{ text: "🍰 Меню" }, { text: "🧾 Мои заказы" }],
    [{ text: "⚙️ Настройки" }, { text: "🏪 О нас" }],
  ],
  resize_keyboard: true,
});

export const clientUzMenu = () => ({
  keyboard: [
    [{ text: "🍰 Menyu" }, { text: "🧾 Buyurtmalarim" }],
    [{ text: "⚙️ Sozlamalar" }, { text: "🏪 Biz haqimizda" }],
  ],
  resize_keyboard: true,
});

export const settingsUzKeyboard = () => ({
  keyboard: [
    [{ text: "🌐 Tilni o‘zgartirish" }],
    [{ text: "👤 Shaxsiy ma’lumotlar" }],
    [{ text: "📞 Telefon raqamini yangilash" }],
    [{ text: "⬅️ Ortga qaytish" }],
  ],
  resize_keyboard: true,
});

export const settingsRuKeyboard = () => ({
  keyboard: [
    [{ text: "🌐 Изменить язык" }],
    [{ text: "👤 Личные данные" }],
    [{ text: "📞 Обновить номер телефона" }],
    [{ text: "⬅️ Назад" }],
  ],
  resize_keyboard: true,
});

export const adminRuMenuKeyboard = () => ({
  keyboard: [
    [{ text: "🛒 Меню товаров" }],
    [{ text: "📦 Заказы" }, { text: "📊 Статистика" }],
    [{ text: "⚙️ Настройки" }],
  ],
  resize_keyboard: true
});

export const adminUzMenuKeyboard = () => ({
  keyboard: [
    [{ text: "🛒 Mahsulotlar menyusi" }],
    [{ text: "📦 Buyurtmalar" }, { text: "📊 Statistika" }],
    [{ text: "⚙️ Sozlamalar" }],
  ],
  resize_keyboard: true
});
