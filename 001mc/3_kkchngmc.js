document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenuButton = document.querySelector('.hamburger-menu');
    const hamburgerList = document.querySelector('#hamburgerList'); // Or use .hamburger-list if you prefer class selectors

    hamburgerMenuButton.addEventListener('click', function() {
        hamburgerList.classList.toggle('active');
    });

    // ข้อมูล เริ่มตรงนี้
    const data = [
    {
        "front": "หน้า ๑ เล่ม - - - - - ราชกิจจานุเบกษา ๓ มีนาคม ๒๕๖๐",
        "back": "๑๓๔ ตอน พิเศษ ๖๗ ง"
    },
    {
        "front": "ระเบียบ กรมการจัดหางาน - - - - - ไป ทํา ที่ บ้าน พ.ศ.๒๕๖๐",
        "back": "ว่าด้วย การ ส่งเสริม การ รับงาน"
    },
    {
        "front": "เพื่อ ให้การ ส่งเสริม การ รับงาน ไป - - - - - ความ เรียบร้อย และ มีประสิทธิภาพ",
        "back": "ทํา ที่ บ้าน เป็นไป ด้วย"
    },
    {
        "front": "มากยิ่งขึ้น - - - - - ความใน มาตรา ๓๒ แห่ง พระราชบัญญัติ ระเบียบ บริหาร ราชการ แผ่นดิน",
        "back": "อาศัย อํา นา จ ตาม"
    },
    {
        "front": "พ.ศ.๒๕๓๔ ซึ่ง แก้ไข เพิ่มเติม - - - - - แผ่นดิน (ฉบับ ที่ ๕) พ.ศ.๒๕๔๕ อธิบดี",
        "back": "โดย พระราชบัญญัติ ระเบียบ บริหาร ราชการ"
    },
    {
        "front": "กรมการจัดหางาน - - - - -",
        "back": "จึง วางระเบียบ ไว้ ดังต่อไปนี้"
    },
    {
        "front": "ข้อ ๑ ระเบียบ นี้ เรียก ว่า - - - - - การ รับงาน ไป ทํา ที่ บ้าน พ.ศ.๒๕๖๐”",
        "back": "“ระเบียบ กรมการจัดหางาน ว่าด้วย การ ส่งเสริม"
    },
    {
        "front": "ข้อ ๒ ระเบียบ นี้ ให้ ใช้ บังคับ ตั้ง แต่วัน ถัดจาก วัน ประกาศ เป็นต้นไป - - - - -",
        "back": "ข้อ ๓ ให้ ยกเลิก"
    },
    {
        "front": "(๑) ระเบียบ กรมการจัดหางาน ว่าด้วย การ ส่งเสริม การ รับงาน ไป - - - - -",
        "back": "ทํา ที่ บ้าน พ.ศ.๒๕๔๖"
    },
    {
        "front": "(๒) ระเบียบ กรมการจัดหางาน ว่าด้วย การ ส่งเสริม การ รับงาน ไป ทํา - - - - - พ.ศ.๒๕๕๓",
        "back": "ที่ บ้าน (ฉบับ ที่ ๒)"
    },
    {
        "front": "ข้อ ๔ ใน ระเบียบ นี้ “งาน ที่ รับ - - - - - งาน ที่",
        "back": "ไป ทํา ที่ บ้าน” หมายความว่า"
    },
    {
        "front": "ผู้ จ้างงาน มอบให้ ผู้ รับงาน ไป ทํา - - - - - ประกอบ บรรจุ ซ่อม",
        "back": "ที่ บ้าน เพื่อ ไป ผลิต"
    },
    {
        "front": "หรือ แปรรูป สิ่งของ ตามที่ ได้ ตกลง ใน บ้าน ของ ตนเอง - - - - -",
        "back": "หรือ สถานที่ ที่ มิใช่ สถาน"
    },
    {
        "front": "- - - - -",
        "back": "ประกอบ กิจการ ของ ผู้ จ้างงาน"
    },
    {
        "front": "“ผู้ รับงาน ไป ทํา ที่ บ้าน” หมายความว่า บุคคล หรือ กลุ่ม - - - - -",
        "back": "บุคคล ซึ่ง ตกลง กับ ผู้"
    },
    {
        "front": "จ้างงาน - - - - - เป็นงาน ที่ รับ ไป ทํา ที่ บ้าน และ จดทะเบียน ตามระเบียบ นี้",
        "back": "เพื่อ รับ ทํา งาน อัน"
    },
    {
        "front": "“นายทะเบียน” หมายความว่า จัดหา งาน จังหวัด หรือ ผู้ อํา นวย กา - - - - - กรุงเทพมหานคร พื้นที่",
        "back": "รส ํา นักงาน จัดหา งาน"
    },
    {
        "front": "“ทะเบียน” - - - - - ทํา ที่ บ้าน",
        "back": "หมายความว่า ทะเบียน ผู้ รับงาน ไป"
    },
    {
        "front": "ข้อ - - - - - ดังต่อไปนี้",
        "back": "๕ ให้ นายทะเบียน มี หน้าที่"
    },
    {
        "front": "(๑) จดทะเบียน ผู้ รับงาน ไป ทํา ที่ บ้าน ใน - - - - -",
        "back": "ท้องที่ ที่ ตน รับผิดชอบ"
    },
    {
        "front": "(๒) ให้ คํา ปรึกษา และ แนะ นํา ต่อ ผู้ รับงาน - - - - -",
        "back": "ไป ทํา ที่ บ้าน เกี่ยวกับ"
    },
    {
        "front": "การ - - - - -",
        "back": "รับงาน ไป ทํา ที่ บ้าน"
    },
    {
        "front": "(๓) ส่งเสริม และ - - - - - ทํา ที่ บ้าน เพื่อ สร้าง ความมั่นคง ใน",
        "back": "พัฒนาการ เป็น ผู้ รับงาน ไป"
    },
    {
        "front": "กา รท ํา - - - - -",
        "back": "งาน เพิ่มประสิทธิภาพ ใน การผลิต"
    },
    {
        "front": "(๔) ส่งเสริม - - - - - ของ ผู้ รับงาน ไป ทํา ที่ บ้าน",
        "back": "ให้ มี การพัฒนา ทักษะ อาชีพ"
    },
    {
        "front": "(๕) ศึกษา วิเคราะห์ วิจัย และ รวบรวม ข้อมูล - - - - - ที่ บ้าน",
        "back": "เกี่ยวกับ การ รับงาน ไป ทํา"
    },
    {
        "front": "(๖) - - - - - ไป ทํา ที่ บ้าน",
        "back": "ติดตาม ประเมินผล เกี่ยวกับ การ รับงาน"
    },
    {
        "front": "- - - - - พิเศษ ๖๗ ง ราชกิจจานุเบกษา ๓ มีนาคม ๒๕๖๐",
        "back": "หน้า ๒ เล่ม ๑๓๔ ตอน"
    },
    {
        "front": "ข้อ ๖ ผู้ รับงาน ไป - - - - - จะ ขอ จดทะเบียน ต้อง มี",
        "back": "ทํา ที่ บ้าน ที่ ประสงค์"
    },
    {
        "front": "คุณสมบัติ และ ไม่ - - - - -",
        "back": "มี ลักษณะ ต้องห้าม ดังนี้"
    },
    {
        "front": "(๑) กรณี ผู้ รับงาน ไป - - - - - (ก) มี สัญชาติ ไทย",
        "back": "ทํา ที่ บ้าน เป็น บุคคล"
    },
    {
        "front": "- - - - - ขึ้นไป",
        "back": "(ข) มีอายุ ยี่สิบ ปี บริบูรณ์"
    },
    {
        "front": "(ค) - - - - - ทํา ที่ บ้าน เป็น หลักแหล่ง",
        "back": "มี สถานที่ ที่ รับงาน ไป"
    },
    {
        "front": "(๒) กรณี - - - - - บ้าน เป็น กลุ่ม บุคคล",
        "back": "ผู้ รับงาน ไป ทํา ที่"
    },
    {
        "front": "(ก) มี สมาชิก กลุ่ม ที่ มี คุณสมบัติ - - - - - ไม่ น้อยกว่า ห้า",
        "back": "ตาม (๑) (ก) และ (ข)"
    },
    {
        "front": "คน - - - - - คน เป็น ผู้ นํา กลุ่ม",
        "back": "โดย ให้ เลือก สมาชิก หนึ่ง"
    },
    {
        "front": "- - - - - ต้อง ไม่ เป็น ผู้ รับงาน ไป ทํา ที่ บ้าน อื่น",
        "back": "(ข) สมาชิก กลุ่ม บุคคล จะ"
    },
    {
        "front": "(ค) มี - - - - - ที่ บ้าน เป็น หลักแหล่ง",
        "back": "สถานที่ ที่ รับงาน ไป ทํา"
    },
    {
        "front": "ข้อ ๗ ผู้ - - - - - ที่ ประสงค์ จะ ขอ จดทะเบียน ให้ ยื่น",
        "back": "รับงาน ไป ทํา ที่ บ้าน"
    },
    {
        "front": "คําขอ จดทะเบียน - - - - - จังหวัด หรือ สํา นักงาน จัดหา งาน กรุงเทพมหานคร พื้นที่",
        "back": "ณ สํา นักงาน จัดหา งาน"
    },
    {
        "front": "แห่ง ท้องที่ ที่ สถานที่ รับงาน ไป ทํา ที่ บ้าน ตั้งอยู่ - - - - -",
        "back": "ตาม แบบ ท .รบ.๑ หรือ"
    },
    {
        "front": "ท .รบ.๒ - - - - - พร้อมด้วย หลักฐาน ที่ ระบุ ใน แบบ ดังกล่าว",
        "back": "ท้าย ระเบียบ นี้ แล้วแต่ กรณี"
    },
    {
        "front": "ข้อ ๘ เมื่อ นายทะเบียน ได้รับ คําขอ พร้อมด้วย - - - - - ให้ นายทะเบียน ตรวจสอบ",
        "back": "หลักฐาน ตาม ข้อ ๗ แล้ว"
    },
    {
        "front": "ความถูกต้อง - - - - - เอกสาร และ หลักฐาน เมื่อ ถูกต้อง ครบถ้วน แล้ว ให้ จดทะเบียน",
        "back": "และ ความครบถ้วน ของ คําขอ และ"
    },
    {
        "front": "เป็น - - - - - บ้าน",
        "back": "ผู้ รับงาน ไป ทํา ที่"
    },
    {
        "front": "- - - - - หลักฐาน ไม่ ครบถ้วน ให้ มี หนังสือ แจ้ง ให้ ผู้ ยื่น",
        "back": "ในกรณีที่ คําขอ หรือ เอกสาร หรือ"
    },
    {
        "front": "คําขอ แก้ไข เพิ่มเติม ให้ - - - - - หลักฐาน ให้ ถูกต้อง ครบถ้วน ภายใน ระยะเวลา ที่ เจ้าหน้าที่ กําหนด",
        "back": "ถูกต้อง หรือ ส่ง เอกสาร หรือ"
    },
    {
        "front": "ในกรณีที่ ผู้ ยื่น คําขอ ไม่ แก้ไข เพิ่มเติม คําขอ หรือไม่ จัดส่ง - - - - -",
        "back": "เอกสาร หรือ หลักฐาน ให้ ถูกต้อง"
    },
    {
        "front": "ครบถ้วน ภายใน ระยะเวลา ที่ กําหนด - - - - - จดทะเบียน พร้อมด้วย เหตุผล ให้ ผู้",
        "back": "ให้ นายทะเบียน แจ้ง การ ไม่"
    },
    {
        "front": "ยื่น คําขอ ทราบ ภายใน เจ็ด วัน ทํา - - - - - ตาม วรรค สอง",
        "back": "การ นับแต่ พ้น กําหนด ระยะเวลา"
    },
    {
        "front": "ทะเบียน ผู้ รับงาน - - - - - ใช้ แบบ ท .รบ.๓ หรือ ท .รบ.๔",
        "back": "ไป ทํา ที่ บ้าน ให้"
    },
    {
        "front": "ท้าย ระเบียบ นี้ - - - - - ห้า ปี นับแต่ วันที่ จดทะเบียน",
        "back": "แล้วแต่ กรณี และ ให้ มีอายุ"
    },
    {
        "front": "ข้อ ๙ ผู้ รับงาน ไป ทํา ที่ บ้าน ที่ ประสงค์ - - - - -",
        "back": "จะ ขอ ต่ออายุ ทะเบียน ให้"
    },
    {
        "front": "ยื่น คําขอ - - - - - หรือ ท .รบ.๖ ท้าย ระเบียบ นี้ แล้วแต่ กรณี",
        "back": "ต่ออายุ ตาม แบ บท .รบ.๕"
    },
    {
        "front": "พร้อมด้วย หลักฐาน ที่ ระบุ ใน แบบ ดังกล่าว ก่อน ทะเบียน - - - - - วัน",
        "back": "สิ้น อายุ ไม่ น้อยกว่า สิบห้า"
    },
    {
        "front": "และ ให้ นํา หลักเกณฑ์ ตาม ข้อ ๘ - - - - - ต่อ ทะเบียน โดย อนุโลม",
        "back": "มา ใช้ บังคับ กับ การ"
    },
    {
        "front": "ในกรณีที่ ผู้ รับงาน ไป ทํา ที่ บ้าน มิได้ ยื่น คําขอ - - - - -",
        "back": "ต่ออายุ ตาม วรรค หนึ่ง และ"
    },
    {
        "front": "ผู้ รับงาน ไป ทํา ที่ บ้าน นั้น ยังมี ภาระผูกพัน - - - - - กองทุน",
        "back": "ต้อง ชํา ระ หนี้ ต่อ"
    },
    {
        "front": "เพื่อ ผู้ รับงาน ไป - - - - - อายุ ของ ทะเบียน ตาม ข้อ ๘",
        "back": "ทํา ที่ บ้าน แล้ว ให้"
    },
    {
        "front": "ขยาย ต่อไป จนกว่า ผู้ รับงาน ไป ทํา - - - - - หนี้ เสร็จสิ้น",
        "back": "ที่ บ้าน จะ ชํา ระ"
    },
    {
        "front": "หน้า ๓ เล่ม ๑๓๔ - - - - - ๓ มีนาคม ๒๕๖๐",
        "back": "ตอน พิเศษ ๖๗ ง ราชกิจจานุเบกษา"
    },
    {
        "front": "ข้อ ๑๐ ผู้ รับงาน ไป ทํา ที่ บ้าน - - - - - ชื่อตัว ชื่อรอง",
        "back": "ผู้ใด ประสงค์ จะ ขอ เปลี่ยนแปลง"
    },
    {
        "front": "ชื่อสกุล หรือ ที่อยู่ ต้อง - - - - - วัน นับ แต่วัน เปลี่ยนแปลง ตาม แบบ",
        "back": "แจ้ง ต่อ นายทะเบียน ภายใน สิบห้า"
    },
    {
        "front": "ท - - - - -",
        "back": ".รบ.๗ ท้าย ระเบียบ นี้"
    },
    {
        "front": "ให้ นายทะเบียน จด แจ้ง - - - - - ผู้ รับงาน ไป ทํา ที่ บ้าน",
        "back": "การเปลี่ยนแปลง ไว้ ด้านหลัง ใบ ทะเบียน"
    },
    {
        "front": "ภายใน เจ็ด วัน - - - - - คําขอ",
        "back": "ทํา การ นับแต่ วันที่ ได้รับ"
    },
    {
        "front": "ข้อ ๑๑ ให้ นายทะเบียน รายงาน ผล การ ปฏิบัติงาน ตาม - - - - - นี้",
        "back": "แบบ ท .รบ.๘ ท้าย ระเบียบ"
    },
    {
        "front": "ให้ - - - - - ของ เดือน ถัดไป",
        "back": "อธิบดี ทราบ ทุก วันที่ ห้า"
    },
    {
        "front": "- - - - - เป็น ผู้รักษาการ ตามระเบียบ นี้ และ มี อํา นา จ ตีความ",
        "back": "ข้อ ๑๒ ให้ อธิบดี กรมการจัดหางาน"
    },
    {
        "front": "- - - - - นี้",
        "back": "วินิจฉัย ปัญหา เกี่ยวกับ การปฏิบัติ ตามระเบียบ"
    },
    {
        "front": "- - - - - พ.ศ.๒๕๖๐ สิงห เดช ชู อํา นา จ อธิบดี กรมการจัดหางาน",
        "back": "ประกาศ ณ วันที่ ๘ กุมภาพันธ์"
    }
];
    const container = document.querySelector('.container');
    const resetButton = document.getElementById('reset');

    let currentIndex =0;

    function getRandomChoice(currentIndex) {
        // สุ่มข้อความคำตอบลวงจากคำถามอื่น
        let randomIndex = Math.floor(Math.random() * data.length);
        while (randomIndex === currentIndex) {
            randomIndex = Math.floor(Math.random() * data.length); // หลีกเลี่ยงคำตอบที่ถูกต้องของคำถามปัจจุบัน
        }
        return data[randomIndex].back;
    }

    function loadQuestion() {
        if (currentIndex >= data.length) {
            container.innerHTML = '<p>คุณได้ทำคำถามทั้งหมดแล้ว!</p>';
            return;
        }
        const question = data[currentIndex];
        const fakeAnswer = getRandomChoice(currentIndex);
        
        // สร้างตัวเลือกและสุ่มตำแหน่ง
        let choices = [
            `<button class="choice">${question.back}</button>`,
            `<button class="choice">${fakeAnswer}</button>`
        ];
        // สุ่มการจัดเรียงตัวเลือก
        choices = choices.sort(() => Math.random() - 0.5);

        container.innerHTML = `
            <p>${question.front}</p>
            ${choices.join('')}
        `;
        addChoiceEventListeners();
    }

    function addChoiceEventListeners() {
        const choices = container.querySelectorAll('.choice');
        choices.forEach(choice => {
            choice.addEventListener('click', function() {
                choices.forEach(c => c.classList.remove('correct', 'incorrect')); // ลบคลาสก่อนเพิ่มใหม่
                const question = data[currentIndex];
                if (this.textContent === question.back) {
                    this.classList.add('correct');
                    playSound(true);
                
                    setTimeout(() => {
                        currentIndex++;
                        if (currentIndex < data.length) {
                            loadQuestion();
                        } else {
                            container.innerHTML = '<p>คุณได้ทำคำถามทั้งหมดแล้ว!</p>';
                        }
                    }, 1000); // หน่วงเวลา 1 วินาทีก่อนไปคำถามถัดไป
                } else {
                    this.classList.add('incorrect');
                    playSound(false);

                }
            });
        });
    }

    function playSound(isCorrect) {
        if (isCorrect) {
            document.getElementById('correctSound').play();
        } else {
            document.getElementById('wrongSound').play();
        }
    }

    // คำสั่ง จดจำ หน้าเพจ เริ่มตรงนี้ แก้ currentCard เป็น currentIndex
    function getCurrentCardKey() {
        // ตัวอย่าง: สมมติว่า URL คือ "http://example.com/pages/index.html"
        const pathName = window.location.pathname; // "/pages/index.html"
        const pageName = pathName.split('/').pop(); // "index.html"
        const baseName = pageName.split('.').shift(); // "index"
        return `currentCard_${baseName}`; // "currentCard_index"
    }
    console.log(getCurrentCardKey());

        // ใช้ getKey แทนที่จะใช้ currentCardKey แบบตรงๆ
        let currentCardKey = getCurrentCardKey();
        currentIndex = localStorage.getItem(currentCardKey) ? parseInt(localStorage.getItem(currentCardKey), 10) : 0;
        // อ่านค่า currentCard จาก localStorage หรือเริ่มต้นที่ 0 หากไม่มี
      
    let isFront = true;
           
      // ตัวจัดการเหตุการณ์เมื่อหน้าเพจกำลังจะถูกปิด
    window.addEventListener('beforeunload', function () {
        localStorage.setItem(currentCardKey, currentIndex);
        // อัปเดตค่า currentCard ล่าสุดใน localStorage
        if (!isFront) {
            currentCard = (currentIndex + 1) % data.length;
            localStorage.setItem(currentCardKey, currentIndex);
            // บันทึกค่า currentCard ไว้ใน localStorage
            isFront = true;
        } else {
            isFront = false;
        }
        loadQuestion();
        //สิ้นสุดการเพิ่ม
    });
    
        resetButton.addEventListener('click', function() {
        currentIndex = 0; // รีเซ็ตค่า currentindex เป็น 0
        localStorage.setItem(currentCardKey, currentIndex); 
        // บันทึกค่า currentCard ล่าสุดไว้ใน localStorage
        isFront = true; // ตั้งค่าให้แสดงด้านหน้าของบัตรคำ
        loadQuestion(); // อัปเดตแสดงผลบัตรคำ
      });
    
     loadQuestion();
});