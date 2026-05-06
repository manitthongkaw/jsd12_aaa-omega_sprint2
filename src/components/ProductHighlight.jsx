import React, { useState, useEffect } from 'react';

// สมมติว่านี่คือข้อมูลจากไฟล์ solar_product_list.xlsx ที่แปลงเป็น Array
const allProducts = [
  { id: 1, name: "Solar Panel Mono 450W", price: 4200 },
  { id: 2, name: "Hybrid Inverter 5kW 48V", price: 28500 },
  { id: 3, name: "LiFePO4 48V 100Ah", price: 35000 },
  { id: 4, name: "PV Combiner Box 2 String", price: 2800 },
  { id: 5, name: "Solar Panel Mono 550W", price: 5500 },
  { id: 6, name: "On-Grid Inverter 3kW", price: 14900 },
  { id: 7, name: "Deep Cycle Gel 12V 100Ah", price: 5200 },
  { id: 8, name: "PV Combiner Box 4 String", price: 5200 },
  // ... เพิ่มรายการอื่นๆ ให้ครบ 30 รายการตามไฟล์ solar_product_list.xlsx
];

const ProductHighlight = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    // Logic สำหรับการสุ่ม 8 รายการจากทั้งหมด
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    setRandomProducts(shuffled.slice(0, 8));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">สินค้าแนะนำ</h2>
      
      {/* Grid 4 คอลัมน์ (Desktop) 2 คอลัมน์ (Tablet/Mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {randomProducts.map((product, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            {/* ส่วนแสดงรูปภาพ (Placeholder) */}
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">รูปภาพสินค้า</span>
            </div>
            
            {/* รายละเอียดสินค้าที่มีเฉพาะชื่อและราคา */}
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg text-gray-700 truncate">
                {product.name}
              </h3>
              <p className="text-blue-600 font-bold mt-2">
                ฿{product.price.toLocaleString()}
              </p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors text-sm">
                ดูรายละเอียด
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHighlight;