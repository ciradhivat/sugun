document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenuButton = document.querySelector('.hamburger-menu');
    const hamburgerList = document.querySelector('#hamburgerList'); // Or use .hamburger-list if you prefer class selectors

    hamburgerMenuButton.addEventListener('click', function() {
        hamburgerList.classList.toggle('active');
    });

    const flashcards = [
    {
        "front": "พระราชบัญญัติ การอำนวยความสะดวก ใน - - - - - พ.ศ.๒๕๕๘ ภูมิพล อดุลยเดช ป.ร.",
        "back": "การพิจารณา อนุญาต ของ ทางราชการ"
    },
    {
        "front": "ให้ ไว้ - - - - -",
        "back": "ณ วันที่ ๑๖ มกราคม พ.ศ.๒๕๕๘"
    },
    {
        "front": "เป็น ปี ที่ - - - - -",
        "back": "๗๐ ใน รัชกาล ปัจจุบัน"
    },
    {
        "front": "พระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช มี - - - - -",
        "back": "พระบรมราชโองการ โปรดเกล้าฯ ให้ ประกาศ ว่า"
    },
    {
        "front": "โดยที่ เป็นการสมควร มี กฎหมาย ว่าด้วย - - - - - ทางราชการ",
        "back": "การอำนวยความสะดวก ใน การพิจารณา อนุญาต ของ"
    },
    {
        "front": "จึง ทรง พระ กรุณา โปรดเกล้าฯ ให้ ตรา พระราชบัญญัติ ขึ้น ไว้ โดย คำแนะนำ - - - - - ดังต่อไปนี้",
        "back": "และ ยินยอม ของ สภานิติบัญญัติ แห่งชาติ"
    },
    {
        "front": "มาตรา ๑ พระราชบัญญัติ นี้ เรียก ว่า - - - - - ของ ทางราชการ พ.ศ.๒๕๕๘”",
        "back": "“พระราชบัญญัติ การอำนวยความสะดวก ใน การพิจารณา อนุญาต"
    },
    {
        "front": "มาตรา ๒ [1] พระราชบัญญัติ นี้ ให้ ใช้ บังคับ เมื่อ - - - - - นับ",
        "back": "พ้น กำหนด หนึ่งร้อย แปดสิบ วัน"
    },
    {
        "front": "แต่วัน ประกาศ ใน - - - - - ให้ ใช้ บังคับ ตั้ง แต่วัน ประกาศ ใน ราชกิจจานุเบกษา เป็นต้นไป",
        "back": "ราชกิจจานุเบกษา เป็นต้นไป เว้นแต่ มาตรา ๑๗"
    },
    {
        "front": "มาตรา ๓ พระราชบัญญัติ นี้ ให้ ใช้ - - - - - จดทะเบียน หรือ การ แจ้ง",
        "back": "บังคับ กับ บรรดา การอนุญาต การ"
    },
    {
        "front": "ที่ มี กฎหมาย หรือ กฎ กำหนดให้ - - - - - ก่อน จะ ดำเนินการ ใด",
        "back": "ต้อง ขออนุญาต จดทะเบียน หรือ แจ้ง"
    },
    {
        "front": "บทบัญญัติ ของ กฎหมาย หรือ - - - - - แย้ง กับ พระราชบัญญัติ นี้ ให้ ใช้",
        "back": "กฎ ใด ที่ ขัด หรือ"
    },
    {
        "front": "พระราชบัญญัติ นี้ แทน - - - - - นี้",
        "back": "มาตรา ๔ ใน พระราชบัญญัติ"
    },
    {
        "front": "“เจ้าหน้าที่” - - - - -",
        "back": "หมายความว่า เจ้าหน้าที่ ตามกฎหมาย ว่าด้วย วิธีปฏิบัติราชการทางปกครอง"
    },
    {
        "front": "“อนุญาต” หมายความว่า การ ที่ เจ้าหน้าที่ ยิน ยอมให้ - - - - - มี กฎหมาย กำหนดให้",
        "back": "บุคคล ใด กระทำการ ใด ที่"
    },
    {
        "front": "ต้อง ได้รับ ความยินยอม - - - - - หมายความ รวมถึง การ ออก ใบอนุญาต การอนุมัติ การ",
        "back": "ก่อน กระทำการ นั้น และ ให้"
    },
    {
        "front": "- - - - - แจ้ง การ ให้ ประทานบัตร และ การ ให้ อาชญาบัตร ด้วย",
        "back": "จดทะเบียน การ ขึ้นทะเบียน การ รับ"
    },
    {
        "front": "“ผู้ - - - - - กำหนดให้ มีอำนาจ ใน การอนุญาต",
        "back": "อนุญาต” หมายความว่า ผู้ ซึ่ง กฎหมาย"
    },
    {
        "front": "- - - - - การอนุญาต",
        "back": "“พนักงานเจ้าหน้าที่” หมายความว่า พนักงานเจ้าหน้าที่ ตามกฎหมาย ว่าด้วย"
    },
    {
        "front": "“กฎหมาย - - - - - ที่ มี บทบัญญัติ กำหนด ให้การ ดำเนินการ ใด หรือ การ",
        "back": "ว่าด้วย การอนุญาต” หมายความว่า บรรดา กฎหมาย"
    },
    {
        "front": "ประกอบ กิจการ ใด จะ - - - - - ดำเนินการ ได้ “คำขอ” หมายความว่า คำ ขออนุญาต",
        "back": "ต้อง ได้รับอนุญาต ก่อน จึง จะ"
    },
    {
        "front": "- - - - - ให้ ใช้ บังคับ แก่ (๑) รัฐสภา และ คณะรัฐมนตรี",
        "back": "มาตรา ๕ พระราชบัญญัติ นี้ มิ"
    },
    {
        "front": "(๒) การพิจารณา พิพากษา คดี ของ ศาล และ การ - - - - - พิจารณาคดี การ",
        "back": "ดำเนินงาน ของ เจ้าหน้าที่ ใน กระบวนการ"
    },
    {
        "front": "- - - - -",
        "back": "บังคับ คดี และ การ วางทรัพย์"
    },
    {
        "front": "- - - - - ทางอาญา",
        "back": "(๓) การ ดำเนินงาน ตาม กระบวนการยุติธรรม"
    },
    {
        "front": "(๔) - - - - - สิ่งแวดล้อม",
        "back": "การอนุญาต ตามกฎหมาย ว่าด้วย ทรัพยากรธรรมชาติ และ"
    },
    {
        "front": "(๕) การอนุญาต - - - - - ทางทหาร ด้าน ยุทธการ รวมทั้ง ตามกฎหมาย เกี่ยวกับ การควบคุม ยุทธภัณฑ์",
        "back": "ที่ เกี่ยวข้อง กับ การ ปฏิบัติการ"
    },
    {
        "front": "และ กฎหมาย ว่าด้วย โรงงาน - - - - -",
        "back": "ผลิต อาวุธ ของ เอกชน"
    },
    {
        "front": "การยกเว้น ไม่ ให้ นำ บทบัญญัติ แห่ง พระราชบัญญัติ - - - - - การ ดำเนินกิจการ ใด",
        "back": "นี้ มา ใช้ บังคับ แก่"
    },
    {
        "front": "หรือ - - - - - กำหนด ไว้ ใน วรรค หนึ่ง ให้ ตรา เป็น พระราชกฤษฎีกา",
        "back": "กับ หน่วยงาน ใด นอกจาก ที่"
    },
    {
        "front": "- - - - - นับแต่ วันที่ พระราชบัญญัติ นี้ ใช้ บังคับ ให้ ผู้ อนุญาต พิจารณา",
        "back": "มาตรา ๖ ทุก ห้า ปี"
    },
    {
        "front": "กฎหมาย ที่ ให้อำนาจ ใน การอนุญาต ว่า สมควร ปรับปรุง - - - - - หรือ จัด",
        "back": "กฎหมาย นั้น เพื่อ ยกเลิก การอนุญาต"
    },
    {
        "front": "ให้ มี มาตรการ อื่น แทน การอนุญาต หรือไม่ ทั้งนี้ - - - - - พิจารณา ปรับปรุง",
        "back": "ในกรณีที่ มีความจำเป็น ผู้ อนุญาต จะ"
    },
    {
        "front": "กฎหมาย - - - - - อื่น แทน ใน กำหนด ระยะเวลา ที่ เร็ว กว่า นั้น ก็ได้",
        "back": "หรือ จัด ให้ มี มาตรการ"
    },
    {
        "front": "ให้ ผู้ อนุญาต เสนอ ผล การพิจารณา ตาม วรรค หนึ่ง ต่อ - - - - -",
        "back": "คณะรัฐมนตรี เพื่อ พิจารณา ยกเลิก การอนุญาต"
    },
    {
        "front": "หรือ จัด ให้ มี มาตรการ - - - - - คณะรัฐมนตรี รับฟัง ความคิดเห็น ของ คณะกรรมการ",
        "back": "อื่น แทน การอนุญาต ในการนี้ ให้"
    },
    {
        "front": "พัฒนา กฎหมาย - - - - - การพิจารณา ด้วย",
        "back": "ตามกฎหมาย ว่าด้วย คณะกรรมการ กฤษฎีกา ประกอบ"
    },
    {
        "front": "มาตรา ๗ ในกรณีที่ มี กฎหมาย กำหนดให้ - - - - - ผู้ อนุญาต จะ ต้อง",
        "back": "การกระทำ ใด จะ ต้อง ได้รับอนุญาต"
    },
    {
        "front": "จัดทำ คู่มือ สำหรับ ประชาชน ซึ่ง อย่าง น้อย ต้อง - - - - - (ถ้า มี)",
        "back": "ประกอบด้วย หลักเกณฑ์ วิธีการ และ เงื่อนไข"
    },
    {
        "front": "ใน การ ยื่นคำขอ ขั้นตอน และ ระยะเวลา ใน การพิจารณา อนุญาต - - - - - ที่",
        "back": "และ รายการ เอกสาร หรือ หลักฐาน"
    },
    {
        "front": "ผู้ ขออนุญาต จะ ต้อง ยื่น มา พร้อมกับ คำขอ และ จะ - - - - -",
        "back": "กำหนดให้ ยื่นคำขอ ผ่าน ทาง สื่อ"
    },
    {
        "front": "อิเล็กทรอนิกส์ แทน - - - - - ก็ได้",
        "back": "การ มา ยื่นคำขอ ด้วย ตนเอง"
    },
    {
        "front": "คู่มือ สำหรับ ประชาชน - - - - - ไว้ ณ สถานที่ ที่ กำหนดให้ ยื่นคำขอ และ",
        "back": "ตาม วรรค หนึ่ง ให้ ปิดประกาศ"
    },
    {
        "front": "เผยแพร่ ทาง สื่อ อิเล็กทรอนิกส์ และ เมื่อ ประชาชน ประสงค์ จะ - - - - - พนักงานเจ้าหน้าที่",
        "back": "ได้ สำเนา คู่มือ ดังกล่าว ให้"
    },
    {
        "front": "จัด - - - - - ค่าใช้จ่าย ตามควร แก่ กรณี ก็ได้ ใน กรณี เช่นนั้น ให้",
        "back": "สำเนา ให้ โดย จะ คิด"
    },
    {
        "front": "ระบุ ค่าใช้จ่าย ดังกล่าว - - - - - ด้วย",
        "back": "ไว้ ใน คู่มือ สำหรับ ประชาชน"
    },
    {
        "front": "ให้ - - - - - ระบบ ราชการ ตรวจสอบ ขั้นตอน และ ระยะเวลา ใน การพิจารณา อนุญาต",
        "back": "เป็น หน้าที่ ของ คณะกรรมการ พัฒนา"
    },
    {
        "front": "ที่ กำหนด ตาม วรรค หนึ่ง - - - - - ตาม หลักเกณฑ์ และ วิธี การบริหาร",
        "back": "ว่า เป็น ระยะเวลา ที่ เหมาะสม"
    },
    {
        "front": "กิจการ บ้านเมือง ที่ ดี - - - - - และ ระยะเวลา ที่ กำหนด ดังกล่าว ล่าช้า",
        "back": "หรือไม่ ในกรณีที่ เห็น ว่า ขั้นตอน"
    },
    {
        "front": "เกิน สมควร ให้ เสนอ คณะรัฐมนตรี เพื่อ พิจารณา และ สั่งการ ให้ - - - - - เหมาะสม โดยเร็ว",
        "back": "ผู้ อนุญาต ดำเนินการ แก้ไข ให้"
    },
    {
        "front": "เพื่อ ประโยชน์ ใน การอำนวยความสะดวก ให้ แก่ ประชาชน - - - - - ศูนย์ บริการ ร่วม",
        "back": "ให้ ส่วนราชการ จัด ให้ มี"
    },
    {
        "front": "เพื่อ รับ - - - - - การอนุญาต ต่าง ๆ ตามกฎหมาย ว่าด้วย การอนุญาต ไว้ ณ",
        "back": "คำขอ และ ชี้แจง รายละเอียด เกี่ยวกับ"
    },
    {
        "front": "- - - - - คณะกรรมการ พัฒนา ระบบ ราชการ กำหนด",
        "back": "ที่ เดียวกัน ตาม แนวทาง ที่"
    },
    {
        "front": "มาตรา ๘ ให้ เป็น หน้าที่ ของ พนักงานเจ้าหน้าที่ ผู้ มี - - - - - จะ",
        "back": "หน้าที่ ใน การ รับ คำขอ"
    },
    {
        "front": "ต้อง ตรวจสอบ คำขอ และ - - - - - ยื่น พร้อม คำ ขอให้ ถูกต้อง ครบถ้วน",
        "back": "รายการ เอกสาร หรือ หลักฐาน ที่"
    },
    {
        "front": "หาก เห็น ว่า - - - - - เอกสาร หรือ หลักฐาน ใด ให้ แจ้ง ให้",
        "back": "คำขอ ไม่ ถูกต้อง หรือยัง ขาด"
    },
    {
        "front": "ผู้ ยื่นคำขอ ทราบ ทันที ถ้า เป็น กรณี ที่ สามารถ แก้ไข - - - - -",
        "back": "หรือ เพิ่มเติม ได้ ในขณะนั้น ให้"
    },
    {
        "front": "แจ้ง ให้ ผู้ ยื่นคำขอ ดำเนินการ แก้ไข - - - - - เพิ่มเติม ให้ ครบถ้วน ถ้า",
        "back": "หรือ ยื่น เอกสาร หรือ หลักฐาน"
    },
    {
        "front": "เป็น กรณี ที่ ไม่ อาจ ดำเนินการ - - - - - บกพร่อง และ รายการ เอกสาร",
        "back": "ได้ ในขณะนั้น ให้ บันทึก ความ"
    },
    {
        "front": "- - - - - เพิ่มเติม พร้อมทั้ง กำหนด ระยะเวลา ที่ ผู้ ยื่นคำขอ จะ ต้อง ดำเนินการ",
        "back": "หรือ หลักฐาน ที่จะ ต้อง ยื่น"
    },
    {
        "front": "แก้ไข หรือ ยื่น เพิ่มเติม ไว้ ใน บันทึก ดังกล่าว ด้วย - - - - - ยื่นคำขอ",
        "back": "และ ให้ พนักงานเจ้าหน้าที่ และ ผู้"
    },
    {
        "front": "- - - - -",
        "back": "ลงนาม ไว้ ใน บันทึก นั้น"
    },
    {
        "front": "ให้ พนักงานเจ้าหน้าที่ มอบ สำเนา - - - - - ผู้ ยื่นคำขอ ไว้ เป็น หลักฐาน",
        "back": "บันทึก ตาม วรรค หนึ่ง ให้"
    },
    {
        "front": "- - - - - คำขอ ถูกต้อง และ แนบ เอกสาร หรือ หลักฐาน ครบถ้วน ตามที่ ระบุ",
        "back": "ในกรณีที่ ผู้ ยื่นคำขอ ได้ จัดทำ"
    },
    {
        "front": "ใน คู่มือ สำหรับ ประชาชน - - - - - ได้ แก้ไข หรือ ยื่น เอกสาร หรือ",
        "back": "ตาม มาตรา ๗ แล้ว หรือ"
    },
    {
        "front": "หลักฐาน เพิ่มเติม ครบถ้วน ตามที่ พนักงานเจ้าหน้าที่ แนะนำ หรือ ตามที่ ปรากฏ - - - - - แล้ว",
        "back": "ใน บันทึก ตาม วรรค หนึ่ง"
    },
    {
        "front": "พนักงานเจ้าหน้าที่ จะ เรียก เอกสาร - - - - - อีก ไม่ ได้ และ จะ ปฏิเสธ",
        "back": "หรือ หลักฐาน เพิ่มเติม อื่น ใด"
    },
    {
        "front": "การพิจารณา คำขอ นั้น โดย อาศัย เหตุ แห่ง ความ ไม่ - - - - - ไม่",
        "back": "สมบูรณ์ ของ คำขอ หรือ ความ"
    },
    {
        "front": "- - - - - ไม่ ได้ เว้นแต่ เป็น กรณี ที่ ความ ไม่ สมบูรณ์ หรือ",
        "back": "ครบถ้วน ของ เอกสาร หรือ หลักฐาน"
    },
    {
        "front": "ความ ไม่ ครบถ้วน นั้น เกิด - - - - - ของ พนักงานเจ้าหน้าที่ และ เป็นผล ให้",
        "back": "จาก ความ ประมาทเลินเล่อ หรือ ทุจริต"
    },
    {
        "front": "ไม่ อาจ อนุญาต ได้ ในกรณีนี้ ให้ ผู้ อนุญาต สั่งการ - - - - - วินัย",
        "back": "ตามที่เห็นสมควร และ ให้ ดำเนินการ ทาง"
    },
    {
        "front": "- - - - - เกี่ยวข้อง โดย ไม่ ชักช้า",
        "back": "หรือ ดำเนินคดี กับ พนักงานเจ้าหน้าที่ ที่"
    },
    {
        "front": "มาตรา ๙ ในกรณีที่ ผู้ ยื่นคำขอ - - - - - ส่ง เอกสาร หรือ หลักฐาน เพิ่มเติม",
        "back": "ไม่ แก้ไข เพิ่มเติม คำขอ หรือไม่"
    },
    {
        "front": "ตามที่ พนักงานเจ้าหน้าที่ แจ้งให้ทราบ หรือ ตามที่ ปรากฏ ใน บันทึก ที่ - - - - - หนึ่ง",
        "back": "จัด ทำตาม มาตรา ๘ วรรค"
    },
    {
        "front": "- - - - - ผู้ ยื่นคำขอ พร้อมทั้ง แจ้ง เป็น หนังสือ ถึง เหตุ แห่ง การ คืนคำ ขอให้ ทราบ ด้วย",
        "back": "ให้ พนักงานเจ้าหน้าที่ คืนคำ ขอให้ แก่"
    },
    {
        "front": "ผู้ ยื่นคำขอ จะ อุทธรณ์ คำสั่ง คืน - - - - - ว่าด้วย วิธีปฏิบัติราชการทางปกครอง หรือ จะ",
        "back": "คำขอ ตาม วรรค หนึ่ง ตามกฎหมาย"
    },
    {
        "front": "- - - - - กฎหมาย กำหนดให้ ต้อง ยื่นคำขอ ใด ภายใน ระยะเวลา ที่ กำหนด ผู้",
        "back": "ยื่นคำขอ ใหม่ ก็ได้ แต่ ในกรณีที่"
    },
    {
        "front": "ยื่นคำขอ - - - - - ภายใน ระยะเวลา ดังกล่าว",
        "back": "จะ ต้อง ยื่นคำขอ นั้น ใหม่"
    },
    {
        "front": "มาตรา ๑๐ ผู้ อนุญาต ต้อง ดำเนินการ - - - - - ที่ ระบุ ไว้ ใน",
        "back": "ให้ แล้วเสร็จ ภายใน กำหนด เวลา"
    },
    {
        "front": "- - - - - ๗ และ แจ้ง ให้ ผู้ ยื่นคำขอ ทราบ ภายใน เจ็ด วัน นับแต่ วันที่ พิจารณา แล้วเสร็จ",
        "back": "คู่มือ สำหรับ ประชาชน ตาม มาตรา"
    },
    {
        "front": "เมื่อ ครบกำหนด เวลา ตามที่ ระบุ ไว้ ใน - - - - - ๗ แล้ว หาก",
        "back": "คู่มือ สำหรับ ประชาชน ตาม มาตรา"
    },
    {
        "front": "ผู้ อนุญาต ยัง พิจารณา - - - - - หนังสือ ให้ ผู้ ยื่นคำขอ ทราบ ถึง",
        "back": "ไม่ แล้วเสร็จ ให้ แจ้ง เป็น"
    },
    {
        "front": "เหตุ - - - - - จนกว่า จะ พิจารณา แล้วเสร็จ พร้อมทั้ง ส่ง สำเนา การ แจ้ง",
        "back": "แห่ง ความล่าช้า ทุก เจ็ด วัน"
    },
    {
        "front": "ดังกล่าว ให้ คณะกรรมการ - - - - -",
        "back": "พัฒนา ระบบ ราช การทราบ ทุกครั้ง"
    },
    {
        "front": "ในกรณีที่ คณะกรรมการ พัฒนา ระบบ ราชการ เห็น - - - - - แก่ เหตุ หรือ เกิด",
        "back": "ว่า ความล่าช้า นั้น เกิน สมควร"
    },
    {
        "front": "จาก การ ขาด ประสิทธิภาพ ใน การปฏิบัติ - - - - - อนุญาต ให้ คณะกรรมการ พัฒนา",
        "back": "ราชการ ของ หน่วยงาน ของ ผู้"
    },
    {
        "front": "ระบบ ราชการ รายงาน ต่อ คณะรัฐมนตรี พร้อมทั้ง เสนอแนะ ให้ - - - - - หรือ ระบบ",
        "back": "มี การพัฒนา หรือ ปรับปรุง หน่วยงาน"
    },
    {
        "front": "- - - - -",
        "back": "การปฏิบัติ ราชการ ของ หน่วยงาน นั้น"
    },
    {
        "front": "ใน กรณี ไม่ - - - - - วรรค สอง ให้ ถือว่า ผู้ อนุญาต กระทำการ",
        "back": "แจ้ง ตาม วรรค หนึ่ง หรือ"
    },
    {
        "front": "หรือ ละเว้น - - - - - ผู้อื่น เว้นแต่ จะ เป็น เพราะ มี เหตุสุดวิสัย",
        "back": "กระทำการ เพื่อให้ เกิด ความเสียหาย แก่"
    },
    {
        "front": "มาตรา ๑๑ ในกรณีที่ มี กฎหมาย กฎ ระเบียบ - - - - - และ มีผล ให้",
        "back": "หรือ ข้อบังคับ ใด ออกใช้ บังคับ"
    },
    {
        "front": "ต้อง เปลี่ยนแปลง หลักเกณฑ์ วิธีการ - - - - - ที่ ปรากฏ ใน คู่มือ สำหรับ ประชาชน",
        "back": "เงื่อนไข หรือ รายละเอียด อื่น ใด"
    },
    {
        "front": "- - - - - นั้น มิ ให้ ใช้ บังคับ กับ การ ยื่นคำขอ ที่ ได้",
        "back": "ตาม มาตรา ๗ การเปลี่ยนแปลง เช่นว่า"
    },
    {
        "front": "ยื่น ไว้ แล้ว - - - - - กฎ ระเบียบ หรือ ข้อบังคับ ดังกล่าว มีผล ใช้",
        "back": "โดย ชอบ ก่อน วันที่ กฎหมาย"
    },
    {
        "front": "บังคับ เว้นแต่ กฎหมาย นั้น จะ บัญญัติ ไว้ เป็น อย่าง - - - - - กฎ",
        "back": "อื่น แต่ สำหรับ ใน กรณี"
    },
    {
        "front": "- - - - - บัญญัติ ไว้ เป็น อย่าง อื่น ได้ ก็ แต่ เฉพาะ ในกรณีที่",
        "back": "ระเบียบ หรือ ข้อบังคับ นั้น จะ"
    },
    {
        "front": "- - - - - ผู้ ยื่นคำขอ",
        "back": "การเปลี่ยนแปลง นั้น จะ เป็นประโยชน์ ต่อ"
    },
    {
        "front": "มาตรา ๑๒ ในกรณีที่ กฎหมาย กำหนด อายุ ใบอนุญาต - - - - - ดำเนินการ ที่ ได้รับ",
        "back": "ไว้ และ กิจการ หรือ การ"
    },
    {
        "front": "ใบอนุญาต - - - - - หรือ การ ดำเนินการ ที่ เห็น ได้ ว่า ผู้ ได้รับ",
        "back": "นั้น มี ลักษณะ เป็น กิจการ"
    },
    {
        "front": "ใบอนุญาต จะ ประกอบ - - - - - กัน คณะรัฐมนตรี จะ กำหนดให้ ผู้รับ ใบอนุญาต ชำระ",
        "back": "กิจการ หรือ ดำเนินการ นั้น ต่อเนื่อง"
    },
    {
        "front": "ค่าธรรมเนียม การ ต่ออายุ - - - - - กฎหมาย นั้น ๆ แทน การ ยื่นคำขอ ต่ออายุ",
        "back": "ใบอนุญาต ตามที่ กำหนด ไว้ ใน"
    },
    {
        "front": "ใบอนุญาต - - - - - มีอำนาจ ออก ใบอนุญาต ได้รับ ค่าธรรมเนียม ดังกล่าว แล้ว ให้ ออก",
        "back": "ก็ได้ และ เมื่อ หน่วยงาน ซึ่ง"
    },
    {
        "front": "หลักฐาน การ ต่ออายุ - - - - - โดยเร็ว และ ให้ ถือว่า ผู้รับ ใบอนุญาต ได้รับ",
        "back": "ใบอนุญาต ให้ แก่ ผู้รับ ใบอนุญาต"
    },
    {
        "front": "การ ต่ออายุ - - - - -",
        "back": "ใบอนุญาต ตามกฎหมาย นั้น ๆ แล้ว"
    },
    {
        "front": "การ กำหนดให้ ผู้รับ - - - - - แทน การ ยื่นคำขอ ต่ออายุ ใบอนุญาต ตาม วรรค",
        "back": "ใบอนุญาต ชำระ ค่าธรรมเนียม ต่ออายุ ใบอนุญาต"
    },
    {
        "front": "หนึ่ง ให้ ตรา - - - - - ให้ ระบุชื่อ พระราชบัญญัติ และ ประเภท ของ ใบอนุญาต",
        "back": "เป็น พระราชกฤษฎีกา ใน พระราชกฤษฎีกา ดังกล่าว"
    },
    {
        "front": "ตาม พระราชบัญญัติ ดังกล่าว ที่ ผู้รับ ใบอนุญาต - - - - - ได้",
        "back": "อาจ ดำเนิน การตาม วรรค หนึ่ง"
    },
    {
        "front": "ก่อน ตรา พระราชกฤษฎีกา ตาม วรรค - - - - - พระราชกฤษฎีกา ดังกล่าว ให้ สภาผู้แทนราษฎร และ",
        "back": "สอง ให้ คณะรัฐมนตรี ส่ง ร่าง"
    },
    {
        "front": "วุฒิสภา เป็นเวลา - - - - - พ้น กำหนด เวลา ดังกล่าว แล้ว หาก สภาผู้แทนราษฎร หรือ",
        "back": "ไม่ น้อยกว่า สามสิบ วัน เมื่อ"
    },
    {
        "front": "วุฒิสภา มิได้ มีมติ ทักท้วง ให้ นำ ความ กราบบังคมทูล เพื่อ ทรง - - - - -",
        "back": "ตรา พระราชกฤษฎีกา ดังกล่าว ต่อไป"
    },
    {
        "front": "ให้ เป็น หน้าที่ ของ - - - - - ที่จะ หารือ กับ หน่วยงาน ที่ เกี่ยวข้อง",
        "back": "สำนักงาน คณะกรรมการ พัฒนา ระบบ ราชการ"
    },
    {
        "front": "กับ - - - - - ต่อ คณะรัฐมนตรี ใน การ ดำเนิน การตาม วรรค หนึ่ง และ วรรค สอง",
        "back": "การ ออก ใบอนุญาต เพื่อ เสนอแนะ"
    },
    {
        "front": "มาตรา ๑๓ ให้ เป็น หน้าที่ ของ - - - - - หลักเกณฑ์ และ แนว ทางการ",
        "back": "ผู้ อนุญาต ที่จะ ต้อง กำหนด"
    },
    {
        "front": "ตรวจสอบ การ - - - - - ของ ผู้ ได้รับอนุญาต ให้ เป็นไป ตามที่ กฎหมาย ว่าด้วย",
        "back": "ประกอบ กิจการ หรือ การ ดำเนินกิจการ"
    },
    {
        "front": "การอนุญาต กำหนด และ - - - - - และ ผู้ อนุญาต ที่จะ ต้อง ตรวจสอบ ตาม หลักเกณฑ์ และ แนวทาง ดังกล่าว",
        "back": "ให้ เป็น หน้าที่ ของ พนักงานเจ้าหน้าที่"
    },
    {
        "front": "เมื่อ มี ผู้ ได้รับความเดือดร้อน รำคาญ หรือ - - - - - หรือ การ ดำเนินกิจการ ของ",
        "back": "เสียหาย จาก การ ประกอบ กิจการ"
    },
    {
        "front": "ผู้ ได้รับอนุญาต ไม่ ว่าความ จะ - - - - - มี ผู้ ร้องเรียน ให้ เป็น",
        "back": "ปรากฏ ต่อ พนักงานเจ้าหน้าที่ เอง หรือ"
    },
    {
        "front": "หน้าที่ ของ พนักงานเจ้าหน้าที่ - - - - - การตาม อำนาจหน้าที่ โดยเร็ว",
        "back": "ที่จะ ดำเนินการ ตรวจสอบ และ สั่ง"
    },
    {
        "front": "มาตรา ๑๔ - - - - - ใน การอำนวยความสะดวก แก่ ประชาชน ให้ คณะรัฐมนตรี มีมติ จัดตั้ง",
        "back": "ในกรณีจำเป็น และ สมควร เพื่อ ประโยชน์"
    },
    {
        "front": "ศูนย์ รับคำ ขออนุญาต เพื่อ - - - - - รับ คำขอ ตามกฎหมาย ว่าด้วย การอนุญาต ขึ้น",
        "back": "ทำหน้าที่ เป็น ศูนย์กลาง ใน การ"
    },
    {
        "front": "ให้ ศูนย์ รับคำ - - - - - ฐานะ เป็น ส่วนราชการ ตาม มาตรา ๑๘ วรรค",
        "back": "ขออนุญาต ตาม วรรค หนึ่ง มี"
    },
    {
        "front": "สี่ แห่ง - - - - - พ.ศ.๒๕๓๔ ซึ่ง แก้ไข เพิ่มเติม โดย พระราชบัญญัติ ระเบียบ บริหาร",
        "back": "พระราชบัญญัติ ระเบียบ บริหาร ราชการ แผ่นดิน"
    },
    {
        "front": "ราชการ แผ่นดิน - - - - - อยู่ ในสังกัด สำนักนายกรัฐมนตรี และ จะ ให้ มี สาขา",
        "back": "(ฉบับ ที่ ๕) พ.ศ.๒๕๔๕ โดย"
    },
    {
        "front": "ของ ศูนย์ ประจำ กระทรวง - - - - -",
        "back": "หรือ ประจำจังหวัด ด้วย ก็ได้"
    },
    {
        "front": "การ - - - - - วรรค หนึ่ง ให้ ตรา เป็น พระราชกฤษฎีกา ใน พระราชกฤษฎีกา ดังกล่าว",
        "back": "จัดตั้ง ศูนย์ รับคำ ขออนุญาต ตาม"
    },
    {
        "front": "ให้ กำหนด รายชื่อ - - - - - อยู่ ภายใต้ การ ดำเนินการ ของ ศูนย์ รับคำ ขออนุญาต",
        "back": "กฎหมาย ว่าด้วย การอนุญาต ที่จะ ให้"
    },
    {
        "front": "ใน การ ดำเนินการ - - - - - กำหนด ใน พระราชกฤษฎีกา ให้ ผู้ ยื่นคำขอ ยื่นคำขอ",
        "back": "เกี่ยวกับ การ รับ คำขอ จะ"
    },
    {
        "front": "ผ่าน - - - - -",
        "back": "ทาง สื่อ อิเล็กทรอนิกส์ ก็ได้"
    },
    {
        "front": "มาตรา ๑๕ เมื่อ มี การ จัดตั้ง ศูนย์ รับคำ ขออนุญาต ตาม มาตรา ๑๔ แล้ว - - - - -",
        "back": "ให้ ดำเนินการ และ มีผล ดังต่อไปนี้"
    },
    {
        "front": "(๑) ในกรณีที่ กฎหมาย ว่าด้วย การอนุญาต หรือ กฎ ที่ ออก - - - - - หรือ",
        "back": "ตามกฎหมาย ดังกล่าว กำหนดให้ ต้อง ยื่นคำขอ"
    },
    {
        "front": "ส่ง เอกสาร หรือ หลักฐาน หรือ - - - - - ถ้า ได้ มี การ ยื่นคำขอ",
        "back": "ค่าธรรมเนียม ใด ณ สถาน ที่ใด"
    },
    {
        "front": "- - - - - หรือ ค่าธรรมเนียม ณ ศูนย์ รับคำ ขออนุญาต แล้ว ให้ ถือว่า ได้",
        "back": "หรือ ส่ง เอกสาร หรือ หลักฐาน"
    },
    {
        "front": "มี การ ยื่นคำขอ หรือ ส่ง เอกสาร หรือ หลักฐาน หรือ - - - - - การอนุญาต นั้น แล้ว",
        "back": "ค่าธรรมเนียม โดย ชอบ ตามกฎหมาย ว่าด้วย"
    },
    {
        "front": "(๒) บรรดา - - - - - ใด ที่ ศูนย์ รับคำ ขออนุญาต ได้รับ ไว้ ตาม",
        "back": "เงิน ค่าธรรมเนียม หรือ เงิน อื่น"
    },
    {
        "front": "(๑) ให้ ศูนย์ รับคำ ขออนุญาต - - - - - ในนามของ หน่วยงาน ของ ผู้ อนุญาต",
        "back": "นำ ส่ง คลัง เป็น รายได้แผ่นดิน"
    },
    {
        "front": "หรือ ส่ง ให้ องค์กรปกครองส่วนท้องถิ่น แล้วแต่ - - - - - ของ ผู้ อนุญาต ทราบ",
        "back": "กรณี และ แจ้ง ให้ หน่วยงาน"
    },
    {
        "front": "(๓) ในกรณีที่ หน่วยงาน ของ ผู้ อนุญาต มี สิทธิ หัก ค่าใช้จ่าย - - - - -",
        "back": "จาก เงิน ที่จะ ต้อง นำ"
    },
    {
        "front": "- - - - - ขออนุญาต หัก เงิน ดังกล่าว แทน และ ส่งมอบ เงิน ที่ หัก",
        "back": "ส่ง คลัง ให้ ศูนย์ รับคำ"
    },
    {
        "front": "ไว้ นั้น ให้ แก่ หน่วยงาน ของ ผู้ อนุญาต โดย ให้ - - - - -",
        "back": "ศูนย์ รับคำ ขออนุญาต มี สิทธิ"
    },
    {
        "front": "หัก ค่าใช้จ่าย ของ ศูนย์ รับคำ ขออนุญาต ตาม - - - - - หน่วยงาน ของ ผู้ อนุญาต",
        "back": "อัตรา ที่จะ ได้ ตกลง กับ"
    },
    {
        "front": "- - - - - ให้ นับแต่ วันที่ ศูนย์ รับคำ ขออนุญาต ส่ง เรื่อง ให้ ผู้",
        "back": "(๔) ระยะเวลา ตาม มาตรา ๑๐"
    },
    {
        "front": "อนุญาต โดย ศูนย์ รับคำ ขออนุญาต จะ - - - - - อนุญาต ไม่ ช้า กว่า",
        "back": "ต้อง ส่ง เรื่อง ให้ ผู้"
    },
    {
        "front": "สาม วันทำการ และ - - - - - สี่ มา ใช้ บังคับ โดย อนุโลม",
        "back": "ให้ นำ มาตรา ๑๐ วรรค"
    },
    {
        "front": "- - - - - ผู้ อนุญาต ที่จะ ต้อง ส่ง คู่มือ สำหรับ ประชาชน ตาม มาตรา",
        "back": "(๕) ให้ เป็น หน้าที่ ของ"
    },
    {
        "front": "๗ ที่ ถูกต้อง และ - - - - - ขออนุญาต ตาม จำนวน ที่ จำเป็น และ",
        "back": "เป็น ปัจจุบัน ให้ ศูนย์ รับคำ"
    },
    {
        "front": "ดำเนินการ ให้ มี การ - - - - - ของ ศูนย์ รับคำ ขออนุญาต เพื่อให้ เกิด",
        "back": "ฝึกอบรม หรือ ชี้แจง แก่ เจ้าหน้าที่"
    },
    {
        "front": "- - - - -",
        "back": "ความชำนาญ ใน การ ปฏิบัติหน้าที่ ด้วย"
    },
    {
        "front": "(๖) ให้ เป็น หน้าที่ ของ เจ้าหน้าที่ ของ ศูนย์ - - - - - การตาม มาตรา",
        "back": "รับคำ ขออนุญาต ที่จะ ต้อง ดำเนิน"
    },
    {
        "front": "๘ - - - - - เช่นเดียวกับ พนักงานเจ้าหน้าที่ ตามที่ บัญญัติ ไว้ ใน มาตรา ๘",
        "back": "และ ต้อง รับผิดชอบ ใน ฐานะ"
    },
    {
        "front": "มาตรา ๑๖ - - - - - หน้าที่ ดังต่อไปนี้",
        "back": "ให้ ศูนย์ รับคำ ขออนุญาต มี"
    },
    {
        "front": "- - - - - รวม ตลอดทั้ง คำ อุทธรณ์ ตามกฎหมาย ว่าด้วย การอนุญาต",
        "back": "(๑) รับ คำขอ และ ค่าธรรมเนียม"
    },
    {
        "front": "(๒) ให้ ข้อมูล ชี้แจง - - - - - ประชาชน ให้ ทราบ ถึง หลักเกณฑ์ วิธีการ",
        "back": "และ แนะนำ ผู้ ยื่นคำขอ หรือ"
    },
    {
        "front": "- - - - - รวม ตลอดทั้ง ความจำเป็น ใน การ ยื่นคำขอ อื่น ใด ที่ จำเป็นต้อง",
        "back": "และ เงื่อนไข ใน การ ขออนุญาต"
    },
    {
        "front": "- - - - - ใน การ ประกอบ กิจการ หรือ ดำเนินการ อย่างหนึ่ง อย่างใด",
        "back": "ดำเนินการ ตามกฎหมาย ว่าด้วย การอนุญาต ทั้งปวง"
    },
    {
        "front": "(๓) ส่ง คำขอ - - - - - จาก ผู้ ยื่นคำขอ หรือ ผู้ ยื่น คำ",
        "back": "หรือ คำ อุทธรณ์ ที่ ได้รับ"
    },
    {
        "front": "อุทธรณ์ พร้อมทั้ง เอกสาร หรือ หลักฐาน ที่ เกี่ยวข้อง ให้ หน่วยงาน - - - - - เร่งรัด",
        "back": "ที่ เกี่ยวข้อง และ คอย ติดตาม"
    },
    {
        "front": "หน่วยงาน ดังกล่าว เพื่อ ดำเนินการ ให้ ถูกต้อง ภายใน ระยะเวลา - - - - - และ คู่มือ",
        "back": "ที่ กำหนด ตาม พระราชบัญญัติ นี้"
    },
    {
        "front": "สำหรับ ประชาชน ตาม - - - - - ให้ สิทธิ ใน การ อุทธรณ์",
        "back": "มาตรา ๗ หรือ ตามกฎหมาย ที่"
    },
    {
        "front": "(๔) ในกรณีที่ เห็น - - - - - การ ยื่นคำขอ มี รายละเอียด หรือ กำหนดให้ ต้อง",
        "back": "ว่า หลักเกณฑ์ หรือ วิธีการ ใน"
    },
    {
        "front": "ส่ง เอกสาร ที่ - - - - - เกิน สมควร แก่ ประชาชน ให้ เสนอแนะ ต่อ",
        "back": "ไม่ จำเป็น หรือ เป็น ภาระ"
    },
    {
        "front": "คณะรัฐมนตรี - - - - - เกี่ยวข้อง ดำเนินการ ปรับปรุงแก้ไข ให้ เหมาะสม ยิ่งขึ้น",
        "back": "เพื่อ สั่งการ ให้ หน่วยงาน ที่"
    },
    {
        "front": "(๕) รวบรวม ปัญหา และ อุปสรรค จาก การอนุญาต - - - - - รับคำ ขออนุญาต เพื่อ",
        "back": "และ การ ดำเนินการ ของ ศูนย์"
    },
    {
        "front": "- - - - - ราชการ เพื่อ รายงาน ต่อ คณะรัฐมนตรี พิจารณา สั่งการ ให้ หน่วยงาน ที่",
        "back": "เสนอ ต่อ คณะกรรมการ พัฒนา ระบบ"
    },
    {
        "front": "เกี่ยวข้อง ดำเนินการ - - - - -",
        "back": "ปรับปรุงแก้ไข ให้ เหมาะสม ต่อไป"
    },
    {
        "front": "(๖) - - - - - กระบวนการ ขั้นตอน ระยะเวลา เกี่ยวกับ การอนุญาต ต่าง ๆ รวมถึง ข้อเสนอ",
        "back": "เสนอแนะ ใน การพัฒนา หรือ ปรับปรุง"
    },
    {
        "front": "ใน การออกกฎหมาย กฎ ระเบียบ หรือ กำหนด หลักเกณฑ์ ที่ เกี่ยวกับ - - - - - มากขึ้น",
        "back": "การอนุญาต เพื่อให้ ประชาชน ได้รับ ความสะดวก"
    },
    {
        "front": "มาตรา ๑๗ ให้ ผู้ อนุญาต จัดทำ - - - - - ๗ ให้ เสร็จสิ้น ภายใน",
        "back": "คู่มือ สำหรับ ประชาชน ตาม มาตรา"
    },
    {
        "front": "หนึ่งร้อย แปดสิบ - - - - - ประกาศ ใน ราชกิจจานุเบกษา",
        "back": "วัน นับแต่ วันที่ พระราชบัญญัติ นี้"
    },
    {
        "front": "มาตรา ๑๘ ให้ นายกรัฐมนตรี รักษา การตาม พระราชบัญญัติ นี้ ผู้ รับสนองพระบรมราชโองการ - - - - - นายกรัฐมนตรี",
        "back": "พลเอก ประยุทธ์ จันทร์ โอชา"
    },
    {
        "front": "หมายเหตุ :- เหตุผล ใน การ ประกาศใช้ พระราชบัญญัติ ฉบับ นี้ คือ - - - - -",
        "back": "โดยที่ ปัจจุบัน มี กฎหมาย ว่าด้วย"
    },
    {
        "front": "การอนุญาต จำนวนมาก การ ประกอบ กิจการ ของ - - - - - ส่วนราชการ หลาย แห่ง อีก",
        "back": "ประชาชน จะ ต้อง ขออนุญาต จาก"
    },
    {
        "front": "ทั้ง กฎหมาย ที่ เกี่ยวข้อง กับ การอนุญาต - - - - - ระยะเวลา เอกสาร และ หลักฐาน",
        "back": "บาง ฉบับ ไม่ ได้ กำหนด"
    },
    {
        "front": "ที่ จำเป็น รวมถึง ขั้นตอน ใน - - - - - ต่อ ประชาชน ใน การ ยื่นคำขอ",
        "back": "การพิจารณา ไว้ ทำให้ เป็น อุปสรรค"
    },
    {
        "front": "อนุญาต ดำเนินการ ต่าง ๆ ดังนั้น - - - - - กำหนด ขั้นตอน และ ระยะเวลา ใน",
        "back": "เพื่อให้ มี กฎหมาย กลาง ที่จะ"
    },
    {
        "front": "การพิจารณา อนุญาต และ มี การ จัดตั้ง - - - - - คำร้อง และ ศูนย์ รับคำ",
        "back": "ศูนย์ บริการ ร่วม เพื่อ รับ"
    },
    {
        "front": "ขออนุญาต ณ จุด เดียว เพื่อให้ ข้อมูล ที่ - - - - - จะ เป็น การอำนวยความสะดวก",
        "back": "ชัดเจน เกี่ยวกับ การ ขออนุญาต ซึ่ง"
    },
    {
        "front": "แก่ ประชาชน จึง จำเป็นต้อง ตรา พระราชบัญญัติ นี้ - - - - - มีนาคม 2565",
        "back": "ศ ริน รัตน์/Maker 18"
    },
    {
        "front": "ภัท รา นิษฐ์/Checker 6 พฤษภาคม 2565 ภัท รา นิษฐ์/Authorizer - - - - -",
        "back": "6 พฤษภาคม 2565"
    },
    {
        "front": "[1] ราชกิจจานุเบกษา เล่ม ๑๓๒/ตอนที่ - - - - -",
        "back": "๔ ก/หน้า ๑/๒๒ มกราคม ๒๕๕๘"
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

});
