document.addEventListener('DOMContentLoaded', function() {
    const flashcards = [
        {
            "front": "สำนักข้อสอบ . . . . . ",
            "back": "พ่อสุกันซาซุม"
        },
        {
            "front": "กองงาน - - - - -",
            "back": "พระบัณฑูรลิ้นดำ"
        },
]

function getCurrentCardKey() {
    // ตัวอย่าง: สมมติว่า URL คือ "http://example.com/pages/index.html"
    const pathName = window.location.pathname; // "/pages/index.html"
    const pageName = pathName.split('/').pop(); // "index.html"
    const baseName = pageName.split('.').shift(); // "index"
    return `currentCard_${baseName}`; // "currentCard_index"
}
    // ใช้ getKey แทนที่จะใช้ currentCardKey แบบตรงๆ
    let currentCardKey = getCurrentCardKey();
    let currentCard = localStorage.getItem(currentCardKey) ? parseInt(localStorage.getItem(currentCardKey), 10) : 0;
    
    // โค้ดอื่นๆที่จัดการกับการแสดงบัตรคำและการอัพเดต localStorage

  // อ่านค่า currentCard จาก localStorage หรือเริ่มต้นที่ 0 หากไม่มี
  //let currentCard = localStorage.getItem(currentCardKey) ? parseInt(localStorage.getItem(currentCardKey), 10) : 0;
  let isFront = true;

  const flashcardElement = document.getElementById('flashcard');
  updateFlashcard();

  function updateFlashcard() {
      flashcardElement.textContent = isFront ? flashcards[currentCard].front : flashcards[currentCard].back;
      flashcardElement.style.lineHeight = '50px';
  }

  flashcardElement.addEventListener('click', () => {
      if (!isFront) {
          currentCard = (currentCard + 1) % flashcards.length;
          localStorage.setItem(currentCardKey, currentCard); // บันทึกค่า currentCard ไว้ใน localStorage
          isFront = true;
      } else {
          isFront = false;
      }
      updateFlashcard();
  });

  // ตัวจัดการเหตุการณ์เมื่อหน้าเพจกำลังจะถูกปิด
  window.addEventListener('beforeunload', function() {
      localStorage.setItem(currentCardKey, currentCard); // อัปเดตค่า currentCard ล่าสุดใน localStorage
  });

  const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', function() {
    currentCard = 0; // รีเซ็ตค่า currentCard เป็น 0
    localStorage.setItem(currentCardKey, currentCard); // บันทึกค่า currentCard ล่าสุดไว้ใน localStorage
    isFront = true; // ตั้งค่าให้แสดงด้านหน้าของบัตรคำ
    updateFlashcard(); // อัปเดตแสดงผลบัตรคำ
  });

});
