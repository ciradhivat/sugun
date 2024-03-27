document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenuButton = document.querySelector('.hamburger-menu');
    const hamburgerList = document.querySelector('#hamburgerList'); // Or use .hamburger-list if you prefer class selectors

    hamburgerMenuButton.addEventListener('click', function() {
        hamburgerList.classList.toggle('active');
    });

    const flashcards = [
    {
        "front": "หน้า ๑ เล่ม - - - - - ราชกิจจานุเบกษา ๒๕ มิถุนายน ๒๕๖๔",
        "back": "๑๓๘ ตอน พิเศษ ๑๓๙ ง"
    },
    {
        "front": "- - - - - การ รับงาน ไป ทำ ที่ บ้าน (ฉบับ ที่ ๒) พ.ศ.๒๕๖๔",
        "back": "ระเบียบ กรมการจัดหางาน ว่าด้วย การ ส่งเสริม"
    },
    {
        "front": "โดยที่ เป็นการสมควร แก้ไข เพิ่มเติม ระเบียบ กรมการจัดหางาน ว่าด้วย - - - - - ทํา ที่ บ้าน",
        "back": "การ ส่งเสริม การ รับงาน ไป"
    },
    {
        "front": "พ.ศ.๒๕๖๐ เพื่อ ให้การ ส่งเสริม การ รับงาน ไป - - - - - ความ เรียบร้อย และ มีประสิทธิภาพ",
        "back": "ทำ ที่ บ้าน เป็นไป ด้วย"
    },
    {
        "front": "อาศัย อำนาจ ตาม ความใน มาตรา ๓๒ - - - - - แผ่นดิน พ.ศ.๒๕๓๔ ซึ่ง แก้ไข",
        "back": "แห่ง พระราชบัญญัติ ระเบียบ บริหาร ราชการ"
    },
    {
        "front": "- - - - - ราชการ แผ่นดิน (ฉบับ ที่ 4) พ.ศ.๒๕๔๕ อธิบดี กรมการจัดหางาน จึง วางระเบียบ ไว้ ดังต่อไปนี้",
        "back": "เพิ่มเติม โดย พระราชบัญญัติ ระเบียบ บริหาร"
    },
    {
        "front": "- - - - - ว่า (ฉบับ ที่ ๒) พ.ศ.๒๕๖๔ \" “ ระเบียบ กรมการจัดหางาน ว่าด้วย",
        "back": "ข้อ ๑ ระเบียบ นี้ เรียก"
    },
    {
        "front": "การ ส่งเสริม การ - - - - -",
        "back": "รับงาน ไป ทำ ที่ บ้าน"
    },
    {
        "front": "ข้อ ๒ - - - - - ตั้ง แต่วัน ถัดจาก วัน ประกาศ เป็นต้นไป",
        "back": "ระเบียบ นี้ ให้ ใช้ บังคับ"
    },
    {
        "front": "ข้อ ๓ ให้ เพิ่ม ความ ต่อไปนี้ เป็น ข้อ ๑๐/๑ - - - - - ส่งเสริม",
        "back": "ของ ระเบียบ กรมการจัดหางาน ว่าด้วย การ"
    },
    {
        "front": "- - - - - บ้าน พ.ศ.๒๕๖๐",
        "back": "การ รับงาน ไป ทำ ที่"
    },
    {
        "front": "“ ข้อ - - - - - ทำ ที่ บ้าน เป็น กลุ่ม บุคคล ซึ่ง ประสงค์",
        "back": "๑๐/๑ กรณี ผู้ รับงาน ไป"
    },
    {
        "front": "จะ - - - - - สมาชิก กลุ่ม หรือ เพิ่ม หรือ ลด สมาชิก กลุ่ม จะ",
        "back": "ขอ เปลี่ยน ผู้นำ กลุ่ม หรือ"
    },
    {
        "front": "ต้อง มี คุณสมบัติ และ ไม่ มี ลักษณะ ต้องห้าม ตาม - - - - - ยื่นคำขอ",
        "back": "ข้อ ๖ (๒) และ ให้"
    },
    {
        "front": "เปลี่ยนแปลง สมาชิก กลุ่ม - - - - - บ้าน ตาม แบบ ท .รบ.๗/๑ และ หนังสือ",
        "back": "ผู้ รับงาน ไป ทำ ที่"
    },
    {
        "front": "แสดง ความยินยอม การเปลี่ยนแปลง สมาชิก กลุ่ม ผู้ รับงาน ไป ทำ ที่ - - - - -",
        "back": "บ้าน ตาม แบบ ท .รบ.๗/๒"
    },
    {
        "front": "พร้อมด้วย เอกสาร - - - - - สำนักงาน จัดหา งาน จังหวัด หรือ สำนักงาน จัดหา งาน",
        "back": "และ หลักฐาน ต่อ นายทะเบียน ณ"
    },
    {
        "front": "กรุงเทพมหานคร พื้นที่ แห่ง ท้องที่ ที่ สถานที่ รับงาน ไป ทำ - - - - - นำ",
        "back": "ที่ บ้าน ตั้งอยู่ และ ให้"
    },
    {
        "front": "หลักเกณฑ์ ตาม ข้อ ๘ - - - - - สมาชิก กลุ่ม ผู้ รับงาน ไป ทำ ที่ บ้าน โดย อนุโลม",
        "back": "มา ใช้ บังคับ กับ การเปลี่ยนแปลง"
    },
    {
        "front": "ให้ นายทะเบียน จด แจ้ง การเปลี่ยนแปลง สมาชิก กลุ่ม ผู้ รับงาน - - - - - ด้านหลัง ใบ ทะเบียน",
        "back": "ไป ทำ ที่ บ้าน ไว้"
    },
    {
        "front": "ผู้ รับงาน ไป ทำ ที่ - - - - - วันที่ ได้รับ คำขอ \"",
        "back": "บ้าน ภายใน เจ็ด วันทำการ นับแต่"
    },
    {
        "front": "ประกาศ ณ วันที่ ๒๑ พฤษภาคม - - - - -",
        "back": "พ.ศ.๒๕๖๔ ไพโรจน์ โชติก เสถียร"
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
    // อ่านค่า currentCard จาก localStorage หรือเริ่มต้นที่ 0 หากไม่มี
  
  let isFront = true;

  const flashcardElement = document.getElementById('flashcard_id');
  updateFlashcard();

  function updateFlashcard() {
      flashcardElement.textContent = isFront ? flashcards[currentCard].front : flashcards[currentCard].back;
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

//   เริ่มฟังก์ชั่น slide show

    // โค้ดที่มีอยู่ก่อนหน้านี้

    let slideshowInterval;
    
    const startSlideshow = () => {
        slideshowInterval = setInterval(() => {
            if (!isFront) {
                currentCard = (currentCard + 1) % flashcards.length;
                isFront = true;
            } else {
                isFront = false;
            }
            updateFlashcard();
        }, 7000); // 7 วินาที
    };

    const stopSlideshow = () => {
        clearInterval(slideshowInterval);
        slideshowInterval = null; // เพิ่มบรรทัดนี้ เพื่อทำให้ stop แล้ว start ต่อไปได้
    };

    // เริ่มการเลื่อนอัตโนมัติเมื่อหน้าเว็บโหลด
    // startSlideshow();

    // ตัวจัดการเหตุการณ์สำหรับปุ่มหยุดการเลื่อนอัตโนมัติ (จะเพิ่มใน HTML)
    const slideshowControlButton = document.querySelector('.slideshow-control');
    if (slideshowControlButton) {
        slideshowControlButton.addEventListener('click', function() {
            // สลับระหว่างเริ่มและหยุดการเลื่อนอัตโนมัติ
            if (slideshowInterval) {
                stopSlideshow();
                slideshowControlButton.textContent = 'Slideshow';
            } else {
                startSlideshow();
                slideshowControlButton.textContent = 'หยุด Slideshow';
            }
        });
    }


// สิ้นสุด ฟังก์ชั่น slide show
});
