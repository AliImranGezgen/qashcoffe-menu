const menuData = {
  "cafe_name": "Q'ASH COFFEE",
  "categories": [
    {
      "name": "Espresso Bazlı Kahveler",
      "description": "Küçük Boy / Orta Boy",
      "items": [
        {"name": "Latte", "small_price": "165 ₺", "large_price": "180 ₺"},
        {"name": "Americano", "small_price": "140 ₺", "large_price": "165 ₺"},
        {"name": "Flat White", "small_price": "175 ₺", "large_price": "190 ₺"},
        {"name": "Cortado", "small_price": "165 ₺", "large_price": "180 ₺"},
        {"name": "Caramel Macchiato", "small_price": "175 ₺", "large_price": "190 ₺"},
        {"name": "Mocha", "small_price": "175 ₺", "large_price": "190 ₺"},
        {"name": "White Mocha", "small_price": "175 ₺", "large_price": "190 ₺"},
        {"name": "Toffeenut", "small_price": "175 ₺", "large_price": "190 ₺"},
        {"name": "Macademia", "small_price": "175 ₺", "large_price": "190 ₺"},
        {"name": "Lotus Latte", "small_price": "175 ₺", "large_price": "190 ₺"},
        {"name": "Dark Coco", "small_price": "175 ₺", "large_price": "190 ₺"},
        {"name": "Hazelnut Latte", "small_price": "175 ₺", "large_price": "190 ₺"},
        {"name": "Caramel Latte", "small_price": "175 ₺", "large_price": "190 ₺"},
        {"name": "Vanilya Latte", "small_price": "175 ₺", "large_price": "190 ₺"}
      ]
    },
    {
      "name": "Espresso",
      "description": "Tek Ebat",
      "items": [
        {"name": "Espresso", "price": "110 ₺"},
        {"name": "Double Espresso", "price": "140 ₺"},
        {"name": "Macha Latte", "price": "190 ₺"}
      ]
    },
    {
      "name": "Filtre Kahveler",
      "description": "Küçük Boy / Orta Boy",
      "items": [
        {"name": "Klasik Filtre", "small_price": "140 ₺", "large_price": "165 ₺"},
        {"name": "V60", "small_price": "170 ₺", "large_price": "190 ₺"},
        {"name": "Chemex", "small_price": "170 ₺", "large_price": "190 ₺"},
        {"name": "Misto", "small_price": "165 ₺", "large_price": "180 ₺"}
      ]
    },
    {
      "name": "Sıcak İçecekler",
      "description": "Diğer",
      "items": [
        {"name": "Sıcak Çikolata", "small_price": "185 ₺", "large_price": "200 ₺"},
        {"name": "Frambuazlı Beyaz Çikolata", "small_price": "185 ₺", "large_price": "200 ₺"},
        {"name": "Chai Tea Latte", "small_price": "185 ₺", "large_price": "200 ₺"},
        {"name": "Sahlep", "small_price": "185 ₺", "large_price": "200 ₺"},
        {"name": "Türk Kahvesi", "price": "130 ₺"},
        {"name": "Double Türk Kahvesi", "price": "160 ₺"},
        {"name": "Çay", "price": "60 ₺"}
      ]
    },
    {
      "name": "Ekstralar",
      "items": [
        {"name": "Süt, Laktozsuz", "price": "30 ₺"},
        {"name": "Shot", "price": "50 ₺"},
        {"name": "Şurup", "price": "50 ₺"},
        {"name": "Krema", "price": "50 ₺"},
        {"name": "Sos", "price": "50 ₺"}
      ]
    },
    {
      "name": "Soğuk İçecekler",
      "description": "Küçük Boy / Orta Boy",
      "items": [
        {"name": "Ice Latte", "small_price": "165 ₺", "large_price": "180 ₺"},
        {"name": "Ice Americano", "small_price": "140 ₺", "large_price": "165 ₺"},
        {"name": "Cold Brew", "small_price": "175 ₺", "large_price": "190 ₺"},
        {"name": "Ice White Mocha", "small_price": "165 ₺", "large_price": "180 ₺"},
        {"name": "Ice Mocha", "small_price": "175 ₺", "large_price": "190 ₺"},
        {"name": "Ice Caramel Latte", "small_price": "175 ₺", "large_price": "190 ₺"},
        {"name": "Ice Vanilya Latte", "small_price": "175 ₺", "large_price": "190 ₺"},
        {"name": "Ice Toffeenut Latte", "small_price": "175 ₺", "large_price": "190 ₺"},
        {"name": "Ice Hazelnut Latte", "small_price": "175 ₺", "large_price": "190 ₺"},
        {"name": "Ice Misto", "small_price": "175 ₺", "large_price": "190 ₺"},
        {"name": "Ice Dark Coco", "small_price": "175 ₺", "large_price": "190 ₺"}
      ]
    },
    {
      "name": "Kokteyller",
      "description": "Tek Ebat",
      "items": [
        {"name": "Cool Lime", "price": "210 ₺"},
        {"name": "Berry Hibiscus", "price": "210 ₺"},
        {"name": "Q'ash Blue", "price": "210 ₺"},
        {"name": "Q'ash Velvet", "price": "210 ₺"},
        {"name": "Q'ash Breeze", "price": "210 ₺"},
        {"name": "Q'ash Tropical", "price": "210 ₺"},
        {"name": "Macha Mix", "price": "215 ₺"}
      ]
    },
    {
      "name": "Milkshake",
      "description": "Tek Ebat",
      "items": [
        {"name": "Çikolatalı Milkshake", "price": "225 ₺"},
        {"name": "Vanilya Milkshake", "price": "225 ₺"},
        {"name": "Çilekli Milkshake", "price": "225 ₺"},
        {"name": "Karamel Milkshake", "price": "225 ₺"}
      ]
    },
    {
      "name": "Frozen",
      "description": "Tek Ebat",
      "items": [
        {"name": "Q'ash Mango", "price": "210 ₺"},
        {"name": "Karpuz-Çilek Frozen", "price": "210 ₺"},
        {"name": "Yeşil Elma Frozen", "price": "210 ₺"},
        {"name": "Orman Meyveli Frozen", "price": "210 ₺"},
        {"name": "Sunset", "price": "210 ₺"}
      ]
    },
    {
      "name": "Frappe",
      "description": "Tek Ebat",
      "items": [
        {"name": "Golden Frappe", "price": "210 ₺"},
        {"name": "Mocha Frappe", "price": "210 ₺"},
        {"name": "Caramel Frappe", "price": "210 ₺"},
        {"name": "Lotus Frappe", "price": "210 ₺"}
      ]
    }
  ]
};
