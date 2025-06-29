const products = [
  {
    id: 1,
    name: "iPhone 14 Model 1",
    category: "Phones",
    price: 962.19,
    stock: 19,
    description: "High-quality phones product with excellent features.",
    image: "iphone_14_model_1.jpg"
  },
  {
    "id": 2,
    "name": "iPhone 14 Model 2",
    "category": "Phones",
    "price": 1944.99,
    "stock": 10,
    "description": "High-quality phones product with excellent features.",
    "image": "iphone_14_model_2.jpg"
  },
  {
    "id": 3,
    "name": "iPhone 14 Model 3",
    "category": "Phones",
    "price": 2187.23,
    "stock": 12,
    "description": "High-quality phones product with excellent features.",
    "image": "iphone_14_model_3.jpg"
  },
  {
    "id": 4,
    "name": "iPhone 14 Model 4",
    "category": "Phones",
    "price": 1402.88,
    "stock": 6,
    "description": "High-quality phones product with excellent features.",
    "image": "iphone_14_model_4.jpg"
  },
  {
    "id": 5,
    "name": "iPhone 14 Model 5",
    "category": "Phones",
    "price": 2457.72,
    "stock": 17,
    "description": "High-quality phones product with excellent features.",
    "image": "iphone_14_model_5.jpg"
  },
  {
    "id": 6,
    "name": "Samsung S23 Model 1",
    "category": "Phones",
    "price": 2229.28,
    "stock": 9,
    "description": "High-quality phones product with excellent features.",
    "image": "samsung_s23_model_1.jpg"
  },
  {
    "id": 7,
    "name": "Samsung S23 Model 2",
    "category": "Phones",
    "price": 1724.56,
    "stock": 4,
    "description": "High-quality phones product with excellent features.",
    "image": "samsung_s23_model_2.jpg"
  },
  {
    "id": 8,
    "name": "Samsung S23 Model 3",
    "category": "Phones",
    "price": 2461.31,
    "stock": 9,
    "description": "High-quality phones product with excellent features.",
    "image": "samsung_s23_model_3.jpg"
  },
  {
    "id": 9,
    "name": "Samsung S23 Model 4",
    "category": "Phones",
    "price": 1110.86,
    "stock": 7,
    "description": "High-quality phones product with excellent features.",
    "image": "samsung_s23_model_4.jpg"
  },
  {
    "id": 10,
    "name": "Samsung S23 Model 5",
    "category": "Phones",
    "price": 1877.47,
    "stock": 3,
    "description": "High-quality phones product with excellent features.",
    "image": "samsung_s23_model_5.jpg"
  },
  {
    "id": 11,
    "name": "Google Pixel 8 Model 1",
    "category": "Phones",
    "price": 751.41,
    "stock": 15,
    "description": "High-quality phones product with excellent features.",
    "image": "google_pixel_8_model_1.jpg"
  },
  {
    "id": 12,
    "name": "Google Pixel 8 Model 2",
    "category": "Phones",
    "price": 1636.94,
    "stock": 12,
    "description": "High-quality phones product with excellent features.",
    "image": "google_pixel_8_model_2.jpg"
  },
  {
    "id": 13,
    "name": "Google Pixel 8 Model 3",
    "category": "Phones",
    "price": 741.88,
    "stock": 6,
    "description": "High-quality phones product with excellent features.",
    "image": "google_pixel_8_model_3.jpg"
  },
  {
    "id": 14,
    "name": "Google Pixel 8 Model 4",
    "category": "Phones",
    "price": 865.0,
    "stock": 17,
    "description": "High-quality phones product with excellent features.",
    "image": "google_pixel_8_model_4.jpg"
  },
  {
    "id": 15,
    "name": "Google Pixel 8 Model 5",
    "category": "Phones",
    "price": 1552.66,
    "stock": 16,
    "description": "High-quality phones product with excellent features.",
    "image": "google_pixel_8_model_5.jpg"
  },
  {
    "id": 16,
    "name": "OnePlus 11 Model 1",
    "category": "Phones",
    "price": 2087.27,
    "stock": 17,
    "description": "High-quality phones product with excellent features.",
    "image": "oneplus_11_model_1.jpg"
  },
  {
    "id": 17,
    "name": "OnePlus 11 Model 2",
    "category": "Phones",
    "price": 604.43,
    "stock": 9,
    "description": "High-quality phones product with excellent features.",
    "image": "oneplus_11_model_2.jpg"
  },
  {
    "id": 18,
    "name": "OnePlus 11 Model 3",
    "category": "Phones",
    "price": 369.37,
    "stock": 4,
    "description": "High-quality phones product with excellent features.",
    "image": "oneplus_11_model_3.jpg"
  },
  {
    "id": 19,
    "name": "OnePlus 11 Model 4",
    "category": "Phones",
    "price": 2208.94,
    "stock": 16,
    "description": "High-quality phones product with excellent features.",
    "image": "oneplus_11_model_4.jpg"
  },
  {
    "id": 20,
    "name": "OnePlus 11 Model 5",
    "category": "Phones",
    "price": 1032.94,
    "stock": 16,
    "description": "High-quality phones product with excellent features.",
    "image": "oneplus_11_model_5.jpg"
  },
  {
    "id": 21,
    "name": "Xiaomi 13 Model 1",
    "category": "Phones",
    "price": 861.82,
    "stock": 19,
    "description": "High-quality phones product with excellent features.",
    "image": "xiaomi_13_model_1.jpg"
  },
  {
    "id": 22,
    "name": "Xiaomi 13 Model 2",
    "category": "Phones",
    "price": 2099.88,
    "stock": 17,
    "description": "High-quality phones product with excellent features.",
    "image": "xiaomi_13_model_2.jpg"
  },
  {
    "id": 23,
    "name": "Xiaomi 13 Model 3",
    "category": "Phones",
    "price": 2252.13,
    "stock": 14,
    "description": "High-quality phones product with excellent features.",
    "image": "xiaomi_13_model_3.jpg"
  },
  {
    "id": 24,
    "name": "Xiaomi 13 Model 4",
    "category": "Phones",
    "price": 1535.28,
    "stock": 9,
    "description": "High-quality phones product with excellent features.",
    "image": "xiaomi_13_model_4.jpg"
  },
  {
    "id": 25,
    "name": "Xiaomi 13 Model 5",
    "category": "Phones",
    "price": 2393.61,
    "stock": 9,
    "description": "High-quality phones product with excellent features.",
    "image": "xiaomi_13_model_5.jpg"
  },
  {
    "id": 26,
    "name": "MacBook Pro M3 Model 1",
    "category": "Laptops",
    "price": 1086.08,
    "stock": 12,
    "description": "High-quality laptops product with excellent features.",
    "image": "macbook_pro_m3_model_1.jpg"
  },
  {
    "id": 27,
    "name": "MacBook Pro M3 Model 2",
    "category": "Laptops",
    "price": 564.76,
    "stock": 19,
    "description": "High-quality laptops product with excellent features.",
    "image": "macbook_pro_m3_model_2.jpg"
  },
  {
    "id": 28,
    "name": "MacBook Pro M3 Model 3",
    "category": "Laptops",
    "price": 708.19,
    "stock": 17,
    "description": "High-quality laptops product with excellent features.",
    "image": "macbook_pro_m3_model_3.jpg"
  },
  {
    "id": 29,
    "name": "MacBook Pro M3 Model 4",
    "category": "Laptops",
    "price": 1120.75,
    "stock": 16,
    "description": "High-quality laptops product with excellent features.",
    "image": "macbook_pro_m3_model_4.jpg"
  },
  {
    "id": 30,
    "name": "MacBook Pro M3 Model 5",
    "category": "Laptops",
    "price": 359.92,
    "stock": 6,
    "description": "High-quality laptops product with excellent features.",
    "image": "macbook_pro_m3_model_5.jpg"
  },
  {
    "id": 31,
    "name": "Dell XPS 15 Model 1",
    "category": "Laptops",
    "price": 2205.48,
    "stock": 4,
    "description": "High-quality laptops product with excellent features.",
    "image": "dell_xps_15_model_1.jpg"
  },
  {
    "id": 32,
    "name": "Dell XPS 15 Model 2",
    "category": "Laptops",
    "price": 801.63,
    "stock": 19,
    "description": "High-quality laptops product with excellent features.",
    "image": "dell_xps_15_model_2.jpg"
  },
  {
    "id": 33,
    "name": "Dell XPS 15 Model 3",
    "category": "Laptops",
    "price": 955.95,
    "stock": 19,
    "description": "High-quality laptops product with excellent features.",
    "image": "dell_xps_15_model_3.jpg"
  },
  {
    "id": 34,
    "name": "Dell XPS 15 Model 4",
    "category": "Laptops",
    "price": 2217.86,
    "stock": 4,
    "description": "High-quality laptops product with excellent features.",
    "image": "dell_xps_15_model_4.jpg"
  },
  {
    "id": 35,
    "name": "Dell XPS 15 Model 5",
    "category": "Laptops",
    "price": 2455.38,
    "stock": 12,
    "description": "High-quality laptops product with excellent features.",
    "image": "dell_xps_15_model_5.jpg"
  },
  {
    "id": 36,
    "name": "HP Spectre x360 Model 1",
    "category": "Laptops",
    "price": 2319.03,
    "stock": 16,
    "description": "High-quality laptops product with excellent features.",
    "image": "hp_spectre_x360_model_1.jpg"
  },
  {
    "id": 37,
    "name": "HP Spectre x360 Model 2",
    "category": "Laptops",
    "price": 921.6,
    "stock": 13,
    "description": "High-quality laptops product with excellent features.",
    "image": "hp_spectre_x360_model_2.jpg"
  },
  {
    "id": 38,
    "name": "HP Spectre x360 Model 3",
    "category": "Laptops",
    "price": 1148.92,
    "stock": 10,
    "description": "High-quality laptops product with excellent features.",
    "image": "hp_spectre_x360_model_3.jpg"
  },
  {
    "id": 39,
    "name": "HP Spectre x360 Model 4",
    "category": "Laptops",
    "price": 2154.81,
    "stock": 9,
    "description": "High-quality laptops product with excellent features.",
    "image": "hp_spectre_x360_model_4.jpg"
  },
  {
    "id": 40,
    "name": "HP Spectre x360 Model 5",
    "category": "Laptops",
    "price": 1720.02,
    "stock": 12,
    "description": "High-quality laptops product with excellent features.",
    "image": "hp_spectre_x360_model_5.jpg"
  },
  {
    "id": 41,
    "name": "Lenovo ThinkPad X1 Model 1",
    "category": "Laptops",
    "price": 207.13,
    "stock": 12,
    "description": "High-quality laptops product with excellent features.",
    "image": "lenovo_thinkpad_x1_model_1.jpg"
  },
  {
    "id": 42,
    "name": "Lenovo ThinkPad X1 Model 2",
    "category": "Laptops",
    "price": 1247.24,
    "stock": 3,
    "description": "High-quality laptops product with excellent features.",
    "image": "lenovo_thinkpad_x1_model_2.jpg"
  },
  {
    "id": 43,
    "name": "Lenovo ThinkPad X1 Model 3",
    "category": "Laptops",
    "price": 1015.51,
    "stock": 18,
    "description": "High-quality laptops product with excellent features.",
    "image": "lenovo_thinkpad_x1_model_3.jpg"
  },
  {
    "id": 44,
    "name": "Lenovo ThinkPad X1 Model 4",
    "category": "Laptops",
    "price": 1490.37,
    "stock": 12,
    "description": "High-quality laptops product with excellent features.",
    "image": "lenovo_thinkpad_x1_model_4.jpg"
  },
  {
    "id": 45,
    "name": "Lenovo ThinkPad X1 Model 5",
    "category": "Laptops",
    "price": 1548.61,
    "stock": 7,
    "description": "High-quality laptops product with excellent features.",
    "image": "lenovo_thinkpad_x1_model_5.jpg"
  },
  {
    "id": 46,
    "name": "Asus Zenbook Model 1",
    "category": "Laptops",
    "price": 131.73,
    "stock": 8,
    "description": "High-quality laptops product with excellent features.",
    "image": "asus_zenbook_model_1.jpg"
  },
  {
    "id": 47,
    "name": "Asus Zenbook Model 2",
    "category": "Laptops",
    "price": 1218.43,
    "stock": 20,
    "description": "High-quality laptops product with excellent features.",
    "image": "asus_zenbook_model_2.jpg"
  },
  {
    "id": 48,
    "name": "Asus Zenbook Model 3",
    "category": "Laptops",
    "price": 1399.1,
    "stock": 17,
    "description": "High-quality laptops product with excellent features.",
    "image": "asus_zenbook_model_3.jpg"
  },
  {
    "id": 49,
    "name": "Asus Zenbook Model 4",
    "category": "Laptops",
    "price": 814.28,
    "stock": 7,
    "description": "High-quality laptops product with excellent features.",
    "image": "asus_zenbook_model_4.jpg"
  },
  {
    "id": 50,
    "name": "Asus Zenbook Model 5",
    "category": "Laptops",
    "price": 2371.96,
    "stock": 13,
    "description": "High-quality laptops product with excellent features.",
    "image": "asus_zenbook_model_5.jpg"
  },
  {
    "id": 51,
    "name": "Samsung QLED 65 Model 1",
    "category": "TVs",
    "price": 1903.96,
    "stock": 4,
    "description": "High-quality tvs product with excellent features.",
    "image": "samsung_qled_65_model_1.jpg"
  },
  {
    "id": 52,
    "name": "Samsung QLED 65 Model 2",
    "category": "TVs",
    "price": 262.04,
    "stock": 17,
    "description": "High-quality tvs product with excellent features.",
    "image": "samsung_qled_65_model_2.jpg"
  },
  {
    "id": 53,
    "name": "Samsung QLED 65 Model 3",
    "category": "TVs",
    "price": 2177.31,
    "stock": 16,
    "description": "High-quality tvs product with excellent features.",
    "image": "samsung_qled_65_model_3.jpg"
  },
  {
    "id": 54,
    "name": "Samsung QLED 65 Model 4",
    "category": "TVs",
    "price": 2492.48,
    "stock": 10,
    "description": "High-quality tvs product with excellent features.",
    "image": "samsung_qled_65_model_4.jpg"
  },
  {
    "id": 55,
    "name": "Samsung QLED 65 Model 5",
    "category": "TVs",
    "price": 2014.13,
    "stock": 4,
    "description": "High-quality tvs product with excellent features.",
    "image": "samsung_qled_65_model_5.jpg"
  },
  {
    "id": 56,
    "name": "LG OLED 55 Model 1",
    "category": "TVs",
    "price": 1945.54,
    "stock": 19,
    "description": "High-quality tvs product with excellent features.",
    "image": "lg_oled_55_model_1.jpg"
  },
  {
    "id": 57,
    "name": "LG OLED 55 Model 2",
    "category": "TVs",
    "price": 337.57,
    "stock": 17,
    "description": "High-quality tvs product with excellent features.",
    "image": "lg_oled_55_model_2.jpg"
  },
  {
    "id": 58,
    "name": "LG OLED 55 Model 3",
    "category": "TVs",
    "price": 2027.35,
    "stock": 3,
    "description": "High-quality tvs product with excellent features.",
    "image": "lg_oled_55_model_3.jpg"
  },
  {
    "id": 59,
    "name": "LG OLED 55 Model 4",
    "category": "TVs",
    "price": 2432.45,
    "stock": 4,
    "description": "High-quality tvs product with excellent features.",
    "image": "lg_oled_55_model_4.jpg"
  },
  {
    "id": 60,
    "name": "LG OLED 55 Model 5",
    "category": "TVs",
    "price": 1547.97,
    "stock": 14,
    "description": "High-quality tvs product with excellent features.",
    "image": "lg_oled_55_model_5.jpg"
  },
  {
    "id": 61,
    "name": "Sony Bravia 4K Model 1",
    "category": "TVs",
    "price": 1988.17,
    "stock": 7,
    "description": "High-quality tvs product with excellent features.",
    "image": "sony_bravia_4k_model_1.jpg"
  },
  {
    "id": 62,
    "name": "Sony Bravia 4K Model 2",
    "category": "TVs",
    "price": 1156.04,
    "stock": 18,
    "description": "High-quality tvs product with excellent features.",
    "image": "sony_bravia_4k_model_2.jpg"
  },
  {
    "id": 63,
    "name": "Sony Bravia 4K Model 3",
    "category": "TVs",
    "price": 144.85,
    "stock": 17,
    "description": "High-quality tvs product with excellent features.",
    "image": "sony_bravia_4k_model_3.jpg"
  },
  {
    "id": 64,
    "name": "Sony Bravia 4K Model 4",
    "category": "TVs",
    "price": 559.45,
    "stock": 18,
    "description": "High-quality tvs product with excellent features.",
    "image": "sony_bravia_4k_model_4.jpg"
  },
  {
    "id": 65,
    "name": "Sony Bravia 4K Model 5",
    "category": "TVs",
    "price": 611.97,
    "stock": 5,
    "description": "High-quality tvs product with excellent features.",
    "image": "sony_bravia_4k_model_5.jpg"
  },
  {
    "id": 66,
    "name": "TCL Roku TV Model 1",
    "category": "TVs",
    "price": 1106.91,
    "stock": 15,
    "description": "High-quality tvs product with excellent features.",
    "image": "tcl_roku_tv_model_1.jpg"
  },
  {
    "id": 67,
    "name": "TCL Roku TV Model 2",
    "category": "TVs",
    "price": 816.02,
    "stock": 15,
    "description": "High-quality tvs product with excellent features.",
    "image": "tcl_roku_tv_model_2.jpg"
  },
  {
    "id": 68,
    "name": "TCL Roku TV Model 3",
    "category": "TVs",
    "price": 219.07,
    "stock": 12,
    "description": "High-quality tvs product with excellent features.",
    "image": "tcl_roku_tv_model_3.jpg"
  },
  {
    "id": 69,
    "name": "TCL Roku TV Model 4",
    "category": "TVs",
    "price": 1901.54,
    "stock": 3,
    "description": "High-quality tvs product with excellent features.",
    "image": "tcl_roku_tv_model_4.jpg"
  },
  {
    "id": 70,
    "name": "TCL Roku TV Model 5",
    "category": "TVs",
    "price": 307.47,
    "stock": 20,
    "description": "High-quality tvs product with excellent features.",
    "image": "tcl_roku_tv_model_5.jpg"
  },
  {
    "id": 71,
    "name": "Panasonic Smart TV Model 1",
    "category": "TVs",
    "price": 556.5,
    "stock": 12,
    "description": "High-quality tvs product with excellent features.",
    "image": "panasonic_smart_tv_model_1.jpg"
  },
  {
    "id": 72,
    "name": "Panasonic Smart TV Model 2",
    "category": "TVs",
    "price": 1028.47,
    "stock": 14,
    "description": "High-quality tvs product with excellent features.",
    "image": "panasonic_smart_tv_model_2.jpg"
  },
  {
    "id": 73,
    "name": "Panasonic Smart TV Model 3",
    "category": "TVs",
    "price": 2248.31,
    "stock": 17,
    "description": "High-quality tvs product with excellent features.",
    "image": "panasonic_smart_tv_model_3.jpg"
  },
  {
    "id": 74,
    "name": "Panasonic Smart TV Model 4",
    "category": "TVs",
    "price": 1999.22,
    "stock": 10,
    "description": "High-quality tvs product with excellent features.",
    "image": "panasonic_smart_tv_model_4.jpg"
  },
  {
    "id": 75,
    "name": "Panasonic Smart TV Model 5",
    "category": "TVs",
    "price": 554.44,
    "stock": 7,
    "description": "High-quality tvs product with excellent features.",
    "image": "panasonic_smart_tv_model_5.jpg"
  },
  {
    "id": 76,
    "name": "Canon EOS R6 Model 1",
    "category": "Cameras",
    "price": 2403.18,
    "stock": 17,
    "description": "High-quality cameras product with excellent features.",
    "image": "canon_eos_r6_model_1.jpg"
  },
  {
    "id": 77,
    "name": "Canon EOS R6 Model 2",
    "category": "Cameras",
    "price": 1474.26,
    "stock": 18,
    "description": "High-quality cameras product with excellent features.",
    "image": "canon_eos_r6_model_2.jpg"
  },
  {
    "id": 78,
    "name": "Canon EOS R6 Model 3",
    "category": "Cameras",
    "price": 2090.86,
    "stock": 5,
    "description": "High-quality cameras product with excellent features.",
    "image": "canon_eos_r6_model_3.jpg"
  },
  {
    "id": 79,
    "name": "Canon EOS R6 Model 4",
    "category": "Cameras",
    "price": 635.35,
    "stock": 17,
    "description": "High-quality cameras product with excellent features.",
    "image": "canon_eos_r6_model_4.jpg"
  },
  {
    "id": 80,
    "name": "Canon EOS R6 Model 5",
    "category": "Cameras",
    "price": 122.6,
    "stock": 3,
    "description": "High-quality cameras product with excellent features.",
    "image": "canon_eos_r6_model_5.jpg"
  },
  {
    "id": 81,
    "name": "Nikon Z6 Model 1",
    "category": "Cameras",
    "price": 685.23,
    "stock": 16,
    "description": "High-quality cameras product with excellent features.",
    "image": "nikon_z6_model_1.jpg"
  },
  {
    "id": 82,
    "name": "Nikon Z6 Model 2",
    "category": "Cameras",
    "price": 1502.7,
    "stock": 11,
    "description": "High-quality cameras product with excellent features.",
    "image": "nikon_z6_model_2.jpg"
  },
  {
    "id": 83,
    "name": "Nikon Z6 Model 3",
    "category": "Cameras",
    "price": 235.31,
    "stock": 9,
    "description": "High-quality cameras product with excellent features.",
    "image": "nikon_z6_model_3.jpg"
  },
  {
    "id": 84,
    "name": "Nikon Z6 Model 4",
    "category": "Cameras",
    "price": 1795.07,
    "stock": 14,
    "description": "High-quality cameras product with excellent features.",
    "image": "nikon_z6_model_4.jpg"
  },
  {
    "id": 85,
    "name": "Nikon Z6 Model 5",
    "category": "Cameras",
    "price": 2059.56,
    "stock": 3,
    "description": "High-quality cameras product with excellent features.",
    "image": "nikon_z6_model_5.jpg"
  },
  {
    "id": 86,
    "name": "Sony Alpha A7 Model 1",
    "category": "Cameras",
    "price": 964.94,
    "stock": 9,
    "description": "High-quality cameras product with excellent features.",
    "image": "sony_alpha_a7_model_1.jpg"
  },
  {
    "id": 87,
    "name": "Sony Alpha A7 Model 2",
    "category": "Cameras",
    "price": 1835.14,
    "stock": 16,
    "description": "High-quality cameras product with excellent features.",
    "image": "sony_alpha_a7_model_2.jpg"
  },
  {
    "id": 88,
    "name": "Sony Alpha A7 Model 3",
    "category": "Cameras",
    "price": 1246.52,
    "stock": 20,
    "description": "High-quality cameras product with excellent features.",
    "image": "sony_alpha_a7_model_3.jpg"
  },
  {
    "id": 89,
    "name": "Sony Alpha A7 Model 4",
    "category": "Cameras",
    "price": 2342.05,
    "stock": 5,
    "description": "High-quality cameras product with excellent features.",
    "image": "sony_alpha_a7_model_4.jpg"
  },
  {
    "id": 90,
    "name": "Sony Alpha A7 Model 5",
    "category": "Cameras",
    "price": 1713.19,
    "stock": 10,
    "description": "High-quality cameras product with excellent features.",
    "image": "sony_alpha_a7_model_5.jpg"
  },
  {
    "id": 91,
    "name": "Fujifilm X-T5 Model 1",
    "category": "Cameras",
    "price": 1277.73,
    "stock": 3,
    "description": "High-quality cameras product with excellent features.",
    "image": "fujifilm_x_t5_model_1.jpg"
  },
  {
    "id": 92,
    "name": "Fujifilm X-T5 Model 2",
    "category": "Cameras",
    "price": 444.18,
    "stock": 4,
    "description": "High-quality cameras product with excellent features.",
    "image": "fujifilm_x_t5_model_2.jpg"
  },
  {
    "id": 93,
    "name": "Fujifilm X-T5 Model 3",
    "category": "Cameras",
    "price": 585.45,
    "stock": 3,
    "description": "High-quality cameras product with excellent features.",
    "image": "fujifilm_x_t5_model_3.jpg"
  },
  {
    "id": 94,
    "name": "Fujifilm X-T5 Model 4",
    "category": "Cameras",
    "price": 940.42,
    "stock": 6,
    "description": "High-quality cameras product with excellent features.",
    "image": "fujifilm_x_t5_model_4.jpg"
  },
  {
    "id": 95,
    "name": "Fujifilm X-T5 Model 5",
    "category": "Cameras",
    "price": 922.65,
    "stock": 17,
    "description": "High-quality cameras product with excellent features.",
    "image": "fujifilm_x_t5_model_5.jpg"
  },
  {
    "id": 96,
    "name": "Panasonic Lumix G9 Model 1",
    "category": "Cameras",
    "price": 1696.5,
    "stock": 8,
    "description": "High-quality cameras product with excellent features.",
    "image": "panasonic_lumix_g9_model_1.jpg"
  },
  {
    "id": 97,
    "name": "Panasonic Lumix G9 Model 2",
    "category": "Cameras",
    "price": 683.73,
    "stock": 7,
    "description": "High-quality cameras product with excellent features.",
    "image": "panasonic_lumix_g9_model_2.jpg"
  },
  {
    "id": 98,
    "name": "Panasonic Lumix G9 Model 3",
    "category": "Cameras",
    "price": 817.06,
    "stock": 14,
    "description": "High-quality cameras product with excellent features.",
    "image": "panasonic_lumix_g9_model_3.jpg"
  },
  {
    "id": 99,
    "name": "Panasonic Lumix G9 Model 4",
    "category": "Cameras",
    "price": 899.09,
    "stock": 15,
    "description": "High-quality cameras product with excellent features.",
    "image": "panasonic_lumix_g9_model_4.jpg"
  },
  {
    "id": 100,
    "name": "Panasonic Lumix G9 Model 5",
    "category": "Cameras",
    "price": 1372.3,
    "stock": 7,
    "description": "High-quality cameras product with excellent features.",
    "image": "panasonic_lumix_g9_model_5.jpg"
  },
  {
    "id": 101,
    "name": "AirPods Pro Model 1",
    "category": "Accessories",
    "price": 151.53,
    "stock": 9,
    "description": "High-quality accessories product with excellent features.",
    "image": "airpods_pro_model_1.jpg"
  },
  {
    "id": 102,
    "name": "AirPods Pro Model 2",
    "category": "Accessories",
    "price": 1166.36,
    "stock": 7,
    "description": "High-quality accessories product with excellent features.",
    "image": "airpods_pro_model_2.jpg"
  },
  {
    "id": 103,
    "name": "AirPods Pro Model 3",
    "category": "Accessories",
    "price": 1329.31,
    "stock": 8,
    "description": "High-quality accessories product with excellent features.",
    "image": "airpods_pro_model_3.jpg"
  },
  {
    "id": 104,
    "name": "AirPods Pro Model 4",
    "category": "Accessories",
    "price": 2481.46,
    "stock": 19,
    "description": "High-quality accessories product with excellent features.",
    "image": "airpods_pro_model_4.jpg"
  },
  {
    "id": 105,
    "name": "AirPods Pro Model 5",
    "category": "Accessories",
    "price": 1239.82,
    "stock": 17,
    "description": "High-quality accessories product with excellent features.",
    "image": "airpods_pro_model_5.jpg"
  },
  {
    "id": 106,
    "name": "Samsung Galaxy Buds Model 1",
    "category": "Accessories",
    "price": 672.0,
    "stock": 4,
    "description": "High-quality accessories product with excellent features.",
    "image": "samsung_galaxy_buds_model_1.jpg"
  },
  {
    "id": 107,
    "name": "Samsung Galaxy Buds Model 2",
    "category": "Accessories",
    "price": 1302.9,
    "stock": 12,
    "description": "High-quality accessories product with excellent features.",
    "image": "samsung_galaxy_buds_model_2.jpg"
  },
  {
    "id": 108,
    "name": "Samsung Galaxy Buds Model 3",
    "category": "Accessories",
    "price": 938.16,
    "stock": 15,
    "description": "High-quality accessories product with excellent features.",
    "image": "samsung_galaxy_buds_model_3.jpg"
  },
  {
    "id": 109,
    "name": "Samsung Galaxy Buds Model 4",
    "category": "Accessories",
    "price": 572.64,
    "stock": 17,
    "description": "High-quality accessories product with excellent features.",
    "image": "samsung_galaxy_buds_model_4.jpg"
  },
  {
    "id": 110,
    "name": "Samsung Galaxy Buds Model 5",
    "category": "Accessories",
    "price": 2499.36,
    "stock": 3,
    "description": "High-quality accessories product with excellent features.",
    "image": "samsung_galaxy_buds_model_5.jpg"
  },
  {
    "id": 111,
    "name": "Logitech MX Mouse Model 1",
    "category": "Accessories",
    "price": 388.5,
    "stock": 9,
    "description": "High-quality accessories product with excellent features.",
    "image": "logitech_mx_mouse_model_1.jpg"
  },
  {
    "id": 112,
    "name": "Logitech MX Mouse Model 2",
    "category": "Accessories",
    "price": 873.75,
    "stock": 7,
    "description": "High-quality accessories product with excellent features.",
    "image": "logitech_mx_mouse_model_2.jpg"
  },
  {
    "id": 113,
    "name": "Logitech MX Mouse Model 3",
    "category": "Accessories",
    "price": 208.67,
    "stock": 3,
    "description": "High-quality accessories product with excellent features.",
    "image": "logitech_mx_mouse_model_3.jpg"
  },
  {
    "id": 114,
    "name": "Logitech MX Mouse Model 4",
    "category": "Accessories",
    "price": 975.34,
    "stock": 3,
    "description": "High-quality accessories product with excellent features.",
    "image": "logitech_mx_mouse_model_4.jpg"
  },
  {
    "id": 115,
    "name": "Logitech MX Mouse Model 5",
    "category": "Accessories",
    "price": 2244.42,
    "stock": 13,
    "description": "High-quality accessories product with excellent features.",
    "image": "logitech_mx_mouse_model_5.jpg"
  },
  {
    "id": 116,
    "name": "Apple Magic Keyboard Model 1",
    "category": "Accessories",
    "price": 251.1,
    "stock": 5,
    "description": "High-quality accessories product with excellent features.",
    "image": "apple_magic_keyboard_model_1.jpg"
  },
  {
    "id": 117,
    "name": "Apple Magic Keyboard Model 2",
    "category": "Accessories",
    "price": 317.22,
    "stock": 4,
    "description": "High-quality accessories product with excellent features.",
    "image": "apple_magic_keyboard_model_2.jpg"
  },
  {
    "id": 118,
    "name": "Apple Magic Keyboard Model 3",
    "category": "Accessories",
    "price": 2041.5,
    "stock": 10,
    "description": "High-quality accessories product with excellent features.",
    "image": "apple_magic_keyboard_model_3.jpg"
  },
  {
    "id": 119,
    "name": "Apple Magic Keyboard Model 4",
    "category": "Accessories",
    "price": 1509.34,
    "stock": 7,
    "description": "High-quality accessories product with excellent features.",
    "image": "apple_magic_keyboard_model_4.jpg"
  },
  {
    "id": 120,
    "name": "Apple Magic Keyboard Model 5",
    "category": "Accessories",
    "price": 1789.42,
    "stock": 19,
    "description": "High-quality accessories product with excellent features.",
    "image": "apple_magic_keyboard_model_5.jpg"
  },
  {
    "id": 121,
    "name": "Anker Power Bank Model 1",
    "category": "Accessories",
    "price": 837.36,
    "stock": 6,
    "description": "High-quality accessories product with excellent features.",
    "image": "anker_power_bank_model_1.jpg"
  },
  {
    "id": 122,
    "name": "Anker Power Bank Model 2",
    "category": "Accessories",
    "price": 158.64,
    "stock": 17,
    "description": "High-quality accessories product with excellent features.",
    "image": "anker_power_bank_model_2.jpg"
  },
  {
    "id": 123,
    "name": "Anker Power Bank Model 3",
    "category": "Accessories",
    "price": 786.87,
    "stock": 13,
    "description": "High-quality accessories product with excellent features.",
    "image": "anker_power_bank_model_3.jpg"
  },
  {
    "id": 124,
    "name": "Anker Power Bank Model 4",
    "category": "Accessories",
    "price": 2462.18,
    "stock": 4,
    "description": "High-quality accessories product with excellent features.",
    "image": "anker_power_bank_model_4.jpg"
  },
  {
    "id": 125,
    "name": "Anker Power Bank Model 5",
    "category": "Accessories",
    "price": 146.82,
    "stock": 11,
    "description": "High-quality accessories product with excellent features.",
    "image": "anker_power_bank_model_5.jpg"
  },
  {
    "id": 126,
    "name": "PlayStation 5 Model 1",
    "category": "Gaming",
    "price": 1553.88,
    "stock": 11,
    "description": "High-quality gaming product with excellent features.",
    "image": "playstation_5_model_1.jpg"
  },
  {
    "id": 127,
    "name": "PlayStation 5 Model 2",
    "category": "Gaming",
    "price": 227.9,
    "stock": 9,
    "description": "High-quality gaming product with excellent features.",
    "image": "playstation_5_model_2.jpg"
  },
  {
    "id": 128,
    "name": "PlayStation 5 Model 3",
    "category": "Gaming",
    "price": 2198.7,
    "stock": 19,
    "description": "High-quality gaming product with excellent features.",
    "image": "playstation_5_model_3.jpg"
  },
  {
    "id": 129,
    "name": "PlayStation 5 Model 4",
    "category": "Gaming",
    "price": 1335.31,
    "stock": 15,
    "description": "High-quality gaming product with excellent features.",
    "image": "playstation_5_model_4.jpg"
  },
  {
    "id": 130,
    "name": "PlayStation 5 Model 5",
    "category": "Gaming",
    "price": 110.79,
    "stock": 13,
    "description": "High-quality gaming product with excellent features.",
    "image": "playstation_5_model_5.jpg"
  },
  {
    "id": 131,
    "name": "Xbox Series X Model 1",
    "category": "Gaming",
    "price": 388.7,
    "stock": 7,
    "description": "High-quality gaming product with excellent features.",
    "image": "xbox_series_x_model_1.jpg"
  },
  {
    "id": 132,
    "name": "Xbox Series X Model 2",
    "category": "Gaming",
    "price": 1489.44,
    "stock": 4,
    "description": "High-quality gaming product with excellent features.",
    "image": "xbox_series_x_model_2.jpg"
  },
  {
    "id": 133,
    "name": "Xbox Series X Model 3",
    "category": "Gaming",
    "price": 1002.93,
    "stock": 15,
    "description": "High-quality gaming product with excellent features.",
    "image": "xbox_series_x_model_3.jpg"
  },
  {
    "id": 134,
    "name": "Xbox Series X Model 4",
    "category": "Gaming",
    "price": 534.11,
    "stock": 18,
    "description": "High-quality gaming product with excellent features.",
    "image": "xbox_series_x_model_4.jpg"
  },
  {
    "id": 135,
    "name": "Xbox Series X Model 5",
    "category": "Gaming",
    "price": 1299.28,
    "stock": 11,
    "description": "High-quality gaming product with excellent features.",
    "image": "xbox_series_x_model_5.jpg"
  },
  {
    "id": 136,
    "name": "Nintendo Switch Model 1",
    "category": "Gaming",
    "price": 587.59,
    "stock": 4,
    "description": "High-quality gaming product with excellent features.",
    "image": "nintendo_switch_model_1.jpg"
  },
  {
    "id": 137,
    "name": "Nintendo Switch Model 2",
    "category": "Gaming",
    "price": 790.78,
    "stock": 5,
    "description": "High-quality gaming product with excellent features.",
    "image": "nintendo_switch_model_2.jpg"
  },
  {
    "id": 138,
    "name": "Nintendo Switch Model 3",
    "category": "Gaming",
    "price": 923.45,
    "stock": 3,
    "description": "High-quality gaming product with excellent features.",
    "image": "nintendo_switch_model_3.jpg"
  },
  {
    "id": 139,
    "name": "Nintendo Switch Model 4",
    "category": "Gaming",
    "price": 327.7,
    "stock": 11,
    "description": "High-quality gaming product with excellent features.",
    "image": "nintendo_switch_model_4.jpg"
  },
  {
    "id": 140,
    "name": "Nintendo Switch Model 5",
    "category": "Gaming",
    "price": 1225.01,
    "stock": 3,
    "description": "High-quality gaming product with excellent features.",
    "image": "nintendo_switch_model_5.jpg"
  },
  {
    "id": 141,
    "name": "Razer Gaming Mouse Model 1",
    "category": "Gaming",
    "price": 2412.05,
    "stock": 3,
    "description": "High-quality gaming product with excellent features.",
    "image": "razer_gaming_mouse_model_1.jpg"
  },
  {
    "id": 142,
    "name": "Razer Gaming Mouse Model 2",
    "category": "Gaming",
    "price": 446.54,
    "stock": 12,
    "description": "High-quality gaming product with excellent features.",
    "image": "razer_gaming_mouse_model_2.jpg"
  },
  {
    "id": 143,
    "name": "Razer Gaming Mouse Model 3",
    "category": "Gaming",
    "price": 852.15,
    "stock": 8,
    "description": "High-quality gaming product with excellent features.",
    "image": "razer_gaming_mouse_model_3.jpg"
  },
  {
    "id": 144,
    "name": "Razer Gaming Mouse Model 4",
    "category": "Gaming",
    "price": 1126.3,
    "stock": 8,
    "description": "High-quality gaming product with excellent features.",
    "image": "razer_gaming_mouse_model_4.jpg"
  },
  {
    "id": 145,
    "name": "Razer Gaming Mouse Model 5",
    "category": "Gaming",
    "price": 1788.14,
    "stock": 4,
    "description": "High-quality gaming product with excellent features.",
    "image": "razer_gaming_mouse_model_5.jpg"
  },
  {
    "id": 146,
    "name": "Logitech Gaming Keyboard Model 1",
    "category": "Gaming",
    "price": 1416.47,
    "stock": 13,
    "description": "High-quality gaming product with excellent features.",
    "image": "logitech_gaming_keyboard_model_1.jpg"
  },
  {
    "id": 147,
    "name": "Logitech Gaming Keyboard Model 2",
    "category": "Gaming",
    "price": 2232.1,
    "stock": 15,
    "description": "High-quality gaming product with excellent features.",
    "image": "logitech_gaming_keyboard_model_2.jpg"
  },
  {
    "id": 148,
    "name": "Logitech Gaming Keyboard Model 3",
    "category": "Gaming",
    "price": 773.52,
    "stock": 3,
    "description": "High-quality gaming product with excellent features.",
    "image": "logitech_gaming_keyboard_model_3.jpg"
  },
  {
    "id": 149,
    "name": "Logitech Gaming Keyboard Model 4",
    "category": "Gaming",
    "price": 544.47,
    "stock": 11,
    "description": "High-quality gaming product with excellent features.",
    "image": "logitech_gaming_keyboard_model_4.jpg"
  },
  {
    "id": 150,
    "name": "Logitech Gaming Keyboard Model 5",
    "category": "Gaming",
    "price": 1583.98,
    "stock": 19,
    "description": "High-quality gaming product with excellent features.",
    "image": "logitech_gaming_keyboard_model_5.jpg"
  },
  {
    "id": 151,
    "name": "Dyson V15 Model 1",
    "category": "Home Appliances",
    "price": 751.36,
    "stock": 19,
    "description": "High-quality home appliances product with excellent features.",
    "image": "dyson_v15_model_1.jpg"
  },
  {
    "id": 152,
    "name": "Dyson V15 Model 2",
    "category": "Home Appliances",
    "price": 486.14,
    "stock": 8,
    "description": "High-quality home appliances product with excellent features.",
    "image": "dyson_v15_model_2.jpg"
  },
  {
    "id": 153,
    "name": "Dyson V15 Model 3",
    "category": "Home Appliances",
    "price": 2178.11,
    "stock": 4,
    "description": "High-quality home appliances product with excellent features.",
    "image": "dyson_v15_model_3.jpg"
  },
  {
    "id": 154,
    "name": "Dyson V15 Model 4",
    "category": "Home Appliances",
    "price": 2208.94,
    "stock": 14,
    "description": "High-quality home appliances product with excellent features.",
    "image": "dyson_v15_model_4.jpg"
  },
  {
    "id": 155,
    "name": "Dyson V15 Model 5",
    "category": "Home Appliances",
    "price": 178.87,
    "stock": 18,
    "description": "High-quality home appliances product with excellent features.",
    "image": "dyson_v15_model_5.jpg"
  },
  {
    "id": 156,
    "name": "iRobot Roomba Model 1",
    "category": "Home Appliances",
    "price": 786.2,
    "stock": 9,
    "description": "High-quality home appliances product with excellent features.",
    "image": "irobot_roomba_model_1.jpg"
  },
  {
    "id": 157,
    "name": "iRobot Roomba Model 2",
    "category": "Home Appliances",
    "price": 2259.45,
    "stock": 15,
    "description": "High-quality home appliances product with excellent features.",
    "image": "irobot_roomba_model_2.jpg"
  },
  {
    "id": 158,
    "name": "iRobot Roomba Model 3",
    "category": "Home Appliances",
    "price": 620.69,
    "stock": 6,
    "description": "High-quality home appliances product with excellent features.",
    "image": "irobot_roomba_model_3.jpg"
  },
  {
    "id": 159,
    "name": "iRobot Roomba Model 4",
    "category": "Home Appliances",
    "price": 1542.27,
    "stock": 8,
    "description": "High-quality home appliances product with excellent features.",
    "image": "irobot_roomba_model_4.jpg"
  },
  {
    "id": 160,
    "name": "iRobot Roomba Model 5",
    "category": "Home Appliances",
    "price": 2073.15,
    "stock": 8,
    "description": "High-quality home appliances product with excellent features.",
    "image": "irobot_roomba_model_5.jpg"
  },
  {
    "id": 161,
    "name": "Instant Pot Model 1",
    "category": "Home Appliances",
    "price": 1496.16,
    "stock": 12,
    "description": "High-quality home appliances product with excellent features.",
    "image": "instant_pot_model_1.jpg"
  },
  {
    "id": 162,
    "name": "Instant Pot Model 2",
    "category": "Home Appliances",
    "price": 566.41,
    "stock": 3,
    "description": "High-quality home appliances product with excellent features.",
    "image": "instant_pot_model_2.jpg"
  },
  {
    "id": 163,
    "name": "Instant Pot Model 3",
    "category": "Home Appliances",
    "price": 2078.88,
    "stock": 10,
    "description": "High-quality home appliances product with excellent features.",
    "image": "instant_pot_model_3.jpg"
  },
  {
    "id": 164,
    "name": "Instant Pot Model 4",
    "category": "Home Appliances",
    "price": 692.14,
    "stock": 16,
    "description": "High-quality home appliances product with excellent features.",
    "image": "instant_pot_model_4.jpg"
  },
  {
    "id": 165,
    "name": "Instant Pot Model 5",
    "category": "Home Appliances",
    "price": 2361.0,
    "stock": 14,
    "description": "High-quality home appliances product with excellent features.",
    "image": "instant_pot_model_5.jpg"
  },
  {
    "id": 166,
    "name": "Nespresso Machine Model 1",
    "category": "Home Appliances",
    "price": 686.47,
    "stock": 9,
    "description": "High-quality home appliances product with excellent features.",
    "image": "nespresso_machine_model_1.jpg"
  },
  {
    "id": 167,
    "name": "Nespresso Machine Model 2",
    "category": "Home Appliances",
    "price": 1768.18,
    "stock": 17,
    "description": "High-quality home appliances product with excellent features.",
    "image": "nespresso_machine_model_2.jpg"
  },
  {
    "id": 168,
    "name": "Nespresso Machine Model 3",
    "category": "Home Appliances",
    "price": 388.41,
    "stock": 3,
    "description": "High-quality home appliances product with excellent features.",
    "image": "nespresso_machine_model_3.jpg"
  },
  {
    "id": 169,
    "name": "Nespresso Machine Model 4",
    "category": "Home Appliances",
    "price": 1980.54,
    "stock": 12,
    "description": "High-quality home appliances product with excellent features.",
    "image": "nespresso_machine_model_4.jpg"
  },
  {
    "id": 170,
    "name": "Nespresso Machine Model 5",
    "category": "Home Appliances",
    "price": 2177.6,
    "stock": 12,
    "description": "High-quality home appliances product with excellent features.",
    "image": "nespresso_machine_model_5.jpg"
  },
  {
    "id": 171,
    "name": "Samsung Air Purifier Model 1",
    "category": "Home Appliances",
    "price": 1770.95,
    "stock": 11,
    "description": "High-quality home appliances product with excellent features.",
    "image": "samsung_air_purifier_model_1.jpg"
  },
  {
    "id": 172,
    "name": "Samsung Air Purifier Model 2",
    "category": "Home Appliances",
    "price": 169.71,
    "stock": 9,
    "description": "High-quality home appliances product with excellent features.",
    "image": "samsung_air_purifier_model_2.jpg"
  },
  {
    "id": 173,
    "name": "Samsung Air Purifier Model 3",
    "category": "Home Appliances",
    "price": 572.61,
    "stock": 8,
    "description": "High-quality home appliances product with excellent features.",
    "image": "samsung_air_purifier_model_3.jpg"
  },
  {
    "id": 174,
    "name": "Samsung Air Purifier Model 4",
    "category": "Home Appliances",
    "price": 187.17,
    "stock": 20,
    "description": "High-quality home appliances product with excellent features.",
    "image": "samsung_air_purifier_model_4.jpg"
  },
  {
    "id": 175,
    "name": "Samsung Air Purifier Model 5",
    "category": "Home Appliances",
    "price": 2148.01,
    "stock": 17,
    "description": "High-quality home appliances product with excellent features.",
    "image": "samsung_air_purifier_model_5.jpg"
  }
];

export default products;