export const clientLanguageText = (msg) => {
    return `
🍰 *Assalomu alaykum* ${msg.from.first_name ? msg.from.first_name : msg.from.username} !

Shirinliklar buyurtma berish botimizga *xush kelibsiz* 😊  
Bu yerda siz tort, pirojniy va boshqa mazali shirinliklarga buyurtma berishingiz mumkin.

*Iltimos, davom etish uchun tilni tanlang* 👇


🍰 *Здравствуйте ${msg.from.first_name ? msg.from.first_name : msg.from.username} !*

Добро пожаловать в наш бот для заказа сладостей 😊  
Здесь вы можете заказать торты, пирожные и другие вкусные десерты.

*Пожалуйста, выберите язык для продолжения* 👇
`;
};

export const adminLanguageText = () => {
    return `
*👨‍💼 CONFECTIONERY BOTIGA XUSH KELIBSIZ !*

Assalomu alaykum !
Siz shirinliklar buyurtma botining *administrator bo‘limiga* kirdingiz.

*Bu bot orqali siz:*
• 📦 Barcha buyurtmalarni ko‘rishingiz  
• 🛠 Buyurtmalar holatini boshqarishingiz  
• 🍰 Mahsulotlar va kategoriyalarni tahrirlashingiz  
• 💰 Narxlarni yangilashingiz  
• 📊 Kunlik va oylik hisobotlarni ko‘rishingiz mumkin

*Davom etishdan oldin, iltimos, interfeys tilini tanlang* 👇


*👨‍💼 ДОБРО ПОЖАЛОВАТЬ В КОНДИТЕРСКИЙ-БОТ !*

Здравствуйте !
Вы вошли в *административную часть* бота для управления заказами сладостей.

*Здесь вы можете:*
• 📦 Просматривать все заказы  
• 🛠 Управлять статусами заказов  
• 🍰 Редактировать товары и категории  
• 💰 Обновлять цены  
• 📊 Смотреть дневные и месячные отчёты

*Перед началом работы, пожалуйста, выберите язык интерфейса* 👇 
`;
}

export const messageValidateText = () => {
    return `
⚠️ *Iltimos, davom etish uchun tilni tanlang* 👇

⚠️ *Пожалуйста, выберите язык для продолжения* 👇    
`
};