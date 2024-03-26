document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenuButton = document.querySelector('.hamburger-menu');
    const hamburgerList = document.querySelector('#hamburgerList'); // Or use .hamburger-list if you prefer class selectors

    hamburgerMenuButton.addEventListener('click', function() {
        hamburgerList.classList.toggle('active');
    });

    const flashcards = [
    {
        "front": "หน้า ๑ เล่ม ๑๓๘ ตอน พิเศษ ๑๓๙ ง - - - - -",
        "back": "ราชกิจจานุเบกษา ๒๕ มิถุนายน ๒๕๖๔"
    },
    {
        "front": "ระเบียบ กรมการจัดหางาน ว่าด้วย การ ส่งเสริม - - - - - บ้าน (ฉบับ ที่ ๒) พ.ศ.๒๕๖๔",
        "back": "การ รับงาน ไป ทำ ที่"
    },
    {
        "front": "โดยที่ เป็นการสมควร แก้ไข เพิ่มเติม ระเบียบ กรมการจัดหางาน ว่าด้วย การ ส่งเสริม การ - - - - -",
        "back": "รับงาน ไป ทํา ที่ บ้าน"
    },
    {
        "front": "พ.ศ.๒๕๖๐ เพื่อ ให้การ - - - - - ที่ บ้าน เป็นไป ด้วย ความ เรียบร้อย และ มีประสิทธิภาพ",
        "back": "ส่งเสริม การ รับงาน ไป ทำ"
    },
    {
        "front": "อาศัย อำนาจ ตาม ความใน มาตรา ๓๒ แห่ง พระราชบัญญัติ - - - - - ซึ่ง แก้ไข",
        "back": "ระเบียบ บริหาร ราชการ แผ่นดิน พ.ศ.๒๕๓๔"
    },
    {
        "front": "เพิ่มเติม โดย พระราชบัญญัติ ระเบียบ บริหาร ราชการ แผ่นดิน (ฉบับ ที่ 4) พ.ศ.๒๕๔๕ อธิบดี กรมการจัดหางาน - - - - -",
        "back": "จึง วางระเบียบ ไว้ ดังต่อไปนี้"
    },
    {
        "front": "ข้อ ๑ ระเบียบ - - - - - ๒) พ.ศ.๒๕๖๔ \" “ ระเบียบ กรมการจัดหางาน ว่าด้วย",
        "back": "นี้ เรียก ว่า (ฉบับ ที่"
    },
    {
        "front": "- - - - - ทำ ที่ บ้าน",
        "back": "การ ส่งเสริม การ รับงาน ไป"
    },
    {
        "front": "ข้อ ๒ ระเบียบ นี้ ให้ ใช้ - - - - - ประกาศ เป็นต้นไป",
        "back": "บังคับ ตั้ง แต่วัน ถัดจาก วัน"
    },
    {
        "front": "ข้อ ๓ ให้ - - - - - ๑๐/๑ ของ ระเบียบ กรมการจัดหางาน ว่าด้วย การ ส่งเสริม",
        "back": "เพิ่ม ความ ต่อไปนี้ เป็น ข้อ"
    },
    {
        "front": "- - - - - บ้าน พ.ศ.๒๕๖๐",
        "back": "การ รับงาน ไป ทำ ที่"
    },
    {
        "front": "“ ข้อ ๑๐/๑ กรณี ผู้ รับงาน - - - - - กลุ่ม บุคคล ซึ่ง ประสงค์",
        "back": "ไป ทำ ที่ บ้าน เป็น"
    },
    {
        "front": "จะ - - - - - สมาชิก กลุ่ม หรือ เพิ่ม หรือ ลด สมาชิก กลุ่ม จะ",
        "back": "ขอ เปลี่ยน ผู้นำ กลุ่ม หรือ"
    },
    {
        "front": "ต้อง มี คุณสมบัติ และ - - - - - ข้อ ๖ (๒) และ ให้ ยื่นคำขอ",
        "back": "ไม่ มี ลักษณะ ต้องห้าม ตาม"
    },
    {
        "front": "เปลี่ยนแปลง สมาชิก กลุ่ม ผู้ - - - - - ตาม แบบ ท .รบ.๗/๑ และ หนังสือ",
        "back": "รับงาน ไป ทำ ที่ บ้าน"
    },
    {
        "front": "แสดง ความยินยอม การเปลี่ยนแปลง สมาชิก กลุ่ม ผู้ รับงาน - - - - - แบบ ท .รบ.๗/๒",
        "back": "ไป ทำ ที่ บ้าน ตาม"
    },
    {
        "front": "พร้อมด้วย เอกสาร และ หลักฐาน ต่อ นายทะเบียน ณ สำนักงาน - - - - - จัดหา งาน",
        "back": "จัดหา งาน จังหวัด หรือ สำนักงาน"
    },
    {
        "front": "กรุงเทพมหานคร พื้นที่ แห่ง ท้องที่ ที่ สถานที่ - - - - - ตั้งอยู่ และ ให้ นำ",
        "back": "รับงาน ไป ทำ ที่ บ้าน"
    },
    {
        "front": "หลักเกณฑ์ - - - - - บังคับ กับ การเปลี่ยนแปลง สมาชิก กลุ่ม ผู้ รับงาน ไป ทำ ที่ บ้าน โดย อนุโลม",
        "back": "ตาม ข้อ ๘ มา ใช้"
    },
    {
        "front": "ให้ นายทะเบียน จด แจ้ง การเปลี่ยนแปลง สมาชิก กลุ่ม ผู้ รับงาน ไป ทำ - - - - - ทะเบียน",
        "back": "ที่ บ้าน ไว้ ด้านหลัง ใบ"
    },
    {
        "front": "ผู้ รับงาน ไป ทำ ที่ บ้าน ภายใน เจ็ด วันทำการ - - - - -",
        "back": "นับแต่ วันที่ ได้รับ คำขอ \""
    },
    {
        "front": "ประกาศ ณ วันที่ - - - - - โชติก เสถียร",
        "back": "๒๑ พฤษภาคม พ.ศ.๒๕๖๔ ไพโรจน์"
    },
    {
        "front": "รอง ปลัดกระทรวง - - - - - กรมการจัดหางาน",
        "back": "แรงงาน รักษา ราชการ แทน อธิบดี"
    }
];

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
      //flashcardElement.style.lineHeight = '5px';
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
