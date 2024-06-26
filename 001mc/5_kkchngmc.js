document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenuButton = document.querySelector('.hamburger-menu');
    const hamburgerList = document.querySelector('#hamburgerList'); // Or use .hamburger-list if you prefer class selectors

    hamburgerMenuButton.addEventListener('click', function() {
        hamburgerList.classList.toggle('active');
    });

    // ข้อมูล เริ่มตรงนี้
    const data = [
    {
        "front": "หน้า ๑ เล่ม ๑๓๓ ตอน พิเศษ ๑๙๗ - - - - - ระเบียบ กรมการจัดหางาน",
        "back": "ง ราชกิจจานุเบกษา ๒ กันยายน ๒๕๕๙"
    },
    {
        "front": "ว่าด้วย การบริหาร กองทุน เพื่อ - - - - - บ้าน พ.ศ.๒๕๕๙",
        "back": "ผู้ รับงาน ไป ทํา ที่"
    },
    {
        "front": "เพื่อให้ การบริหาร - - - - - กองทุน เพื่อ ผู้ รับงาน ไป ทํา ที่ บ้าน",
        "back": "จัดการ และ การปฏิบัติ ราชการ เกี่ยวกับ"
    },
    {
        "front": "เป็นไป ด้วย ความ เรียบร้อย มีประสิทธิภาพ - - - - -",
        "back": "และ เกิด ผลสัมฤทธิ์ มากยิ่งขึ้น"
    },
    {
        "front": "อาศัย อํา นา จ ตาม พระราชบัญญัติ การบริหาร ทุนหมุนเวียน - - - - - ข้อ ๑๐",
        "back": "พ.ศ.๒๕๕๘ มาตรา ๔๕ ประกอบ กับ"
    },
    {
        "front": "(๒) (ข) แห่ง ระเบียบ สํา นัก นายกรัฐมนตรี ว่าด้วย - - - - - ํา เนิน",
        "back": "การ ขอ จัดตั้ง กา รด"
    },
    {
        "front": "งาน และ การประเมินผล กา รด ํา - - - - - โดย ความ เห็นชอบ ของ",
        "back": "เนิน งาน ทุนหมุนเวียน พ.ศ.๒๕๕๗ กรมการจัดหางาน"
    },
    {
        "front": "กระทรวงการคลัง - - - - -",
        "back": "จึง วางระเบียบ ไว้ ดังต่อไปนี้"
    },
    {
        "front": "ข้อ ๑ ระเบียบ นี้ เรียก ว่า “ระเบียบ กรมการจัดหางาน ว่าด้วย การบริหาร กองทุน เพื่อ ผู้ - - - - - พ.ศ.๒๕๕๙”",
        "back": "รับงาน ไป ทํา ที่ บ้าน"
    },
    {
        "front": "ข้อ ๒ - - - - - ตั้ง แต่วัน ถัดจาก วัน ประกาศ เป็นต้นไป ข้อ ๓ ให้ ยกเลิก",
        "back": "ระเบียบ นี้ ให้ ใช้ บังคับ"
    },
    {
        "front": "(๑) ระเบียบ - - - - - รับงาน ไป ทํา ที่ บ้าน พ.ศ.๒๕๔๖ (๒) ระเบียบ",
        "back": "กรมการจัดหางาน ว่าด้วย กองทุน เพื่อ ผู้"
    },
    {
        "front": "กรมการจัดหางาน ว่าด้วย กองทุน เพื่อ ผู้ รับงาน ไป ทํา ที่ บ้าน - - - - -",
        "back": "(ฉบับ ที่ ๒) พ.ศ.๒๕๕๓"
    },
    {
        "front": "ข้อ - - - - -",
        "back": "๔ ใน ระเบียบ นี้"
    },
    {
        "front": "- - - - - รับงาน ไป ทํา ที่ บ้าน",
        "back": "“กองทุน” หมายความว่า กองทุน เพื่อ ผู้"
    },
    {
        "front": "“งาน ที่ รับ ไป ทํา ที่ บ้าน” - - - - - มอบให้ ผู้ รับงาน",
        "back": "หมายความว่า งาน ที่ ผู้ จ้างงาน"
    },
    {
        "front": "ไป ทํา ที่ บ้าน เพื่อ ไป - - - - - แปรรูป สิ่งของ ตามที่ ได้",
        "back": "ผลิต ประกอบ บรรจุ ซ่อม หรือ"
    },
    {
        "front": "ตกลง ใน บ้าน ของ ตนเอง หรือ - - - - - กิจการ ของ ผู้ จ้างงาน",
        "back": "สถานที่ ที่ มิใช่ สถาน ประกอบ"
    },
    {
        "front": "“ผู้ รับงาน ไป ทํา ที่ - - - - - บุคคล ซึ่ง ตกลง กับ ผู้",
        "back": "บ้าน” หมายความว่า บุคคล หรือ กลุ่ม"
    },
    {
        "front": "จ้างงาน เพื่อ รับ ทํา - - - - - ไป ทํา ที่ บ้าน",
        "back": "งาน อัน เป็นงาน ที่ รับ"
    },
    {
        "front": "“ผู้ จ้างงาน” หมายความว่า ผู้ ประกอบ กิจการ ซึ่ง ตกลง - - - - - ที่ บ้าน",
        "back": "จ้าง ผู้ รับงาน ไป ทํา"
    },
    {
        "front": "ให้ ทํา งาน ที่ รับ ไป ทํา - - - - - มอบ งาน โดย",
        "back": "ที่ บ้าน ไม่ ว่า ตกลง"
    },
    {
        "front": "- - - - - หรือ กระ ทํา ใน ลักษณะ ผู้รับเหมา ช่วง ก็ตาม",
        "back": "ตนเอง หรือ โดย ผ่าน ตัวแทน"
    },
    {
        "front": "“คณะกรรมการ” หมายความว่า คณะกรรมการ บริหาร กองทุน เพื่อ - - - - - บ้าน",
        "back": "ผู้ รับงาน ไป ทํา ที่"
    },
    {
        "front": "“คณะกรรมการ นโยบาย การบริหาร - - - - - ทุนหมุนเวียน ตามกฎหมาย ว่าด้วย การบริหาร ทุนหมุนเวียน",
        "back": "ทุนหมุนเวียน” หมายความว่า คณะกรรมการ นโยบาย การบริหาร"
    },
    {
        "front": "“ผู้บริหาร กองทุน” หมายความว่า ผู้บริหาร กองทุน เพื่อ ผู้ รับงาน ไป ทํา - - - - -",
        "back": "ที่ บ้าน “อธิบดี” หมายความว่า"
    },
    {
        "front": "อธิบดี กรมการจัดหางาน “พนักงาน” หมายความว่า - - - - - หมายความว่า ลูกจ้าง ของ กองทุน หน้า ๒",
        "back": "พนักงาน ของ กองทุน “ลูกจ้าง”"
    },
    {
        "front": "เล่ม ๑๓๓ ตอน พิเศษ ๑๙๗ - - - - -",
        "back": "ง ราชกิจจานุเบกษา ๒ กันยายน ๒๕๕๙"
    },
    {
        "front": "ข้อ - - - - - ตามระเบียบ นี้ และ มี อํา นา จ ตีความ วินิจฉัย",
        "back": "๕ ให้ อธิบดี เป็น ผู้รักษาการ"
    },
    {
        "front": "ชี้ขาด ปัญหา เกี่ยวกับ การปฏิบัติ ตามระเบียบ นี้ - - - - -",
        "back": "หมวด ๑ บท ทั่วไป"
    },
    {
        "front": "ข้อ ๖ วิธี - - - - - กําหนด ไว้ ใน ระเบียบ นี้ ให้ ถือ",
        "back": "ปฏิบัติ อื่น ใด ที่ มิได้"
    },
    {
        "front": "ปฏิบัติ ตามระเบียบ ของ ทางราชการ - - - - -",
        "back": "ว่าด้วย การ นั้น โดย อนุโลม"
    },
    {
        "front": "ข้อ ๗ ในกรณีที่ ไม่ อาจ ปฏิบัติตาม ข้อ กําหนด ใน ระเบียบ นี้ ให้ - - - - -",
        "back": "ขอ ทํา ความตกลง กับ กระทรวงการคลัง"
    },
    {
        "front": "ข้อ ๘ กองทุน มี วัตถุประสงค์ เพื่อให้ ผู้ รับงาน ไป - - - - - ซื้อ",
        "back": "ทํา ที่ บ้าน กู้ยืม ไป"
    },
    {
        "front": "วัตถุดิบ และ อุปกรณ์ ใน การผลิต หรือ ขยาย การผลิต เพื่อ - - - - - ให้",
        "back": "สร้าง อาชีพ และ สร้าง รายได้"
    },
    {
        "front": "กับ ผู้ - - - - - ข้อ ๙ กองทุน ประกอบด้วย",
        "back": "รับงาน ไป ทํา ที่ บ้าน"
    },
    {
        "front": "(๑) เงิน ที่ - - - - - จํา ปี",
        "back": "ได้รับ จาก งบประมาณ รายจ่าย ประ"
    },
    {
        "front": "(๒) เงิน ที่ มี - - - - - ของ เงิน กองทุน",
        "back": "ผู้บริจาค ให้ (๓) ดอกผล"
    },
    {
        "front": "(๔) เงิน ที่ ได้ รับคืน จาก ผู้ กู้ - - - - - ๒ คณะกรรมการ",
        "back": "(๕) เงินรายได้ อื่น หมวด"
    },
    {
        "front": "ข้อ ๑๐ ให้ - - - - - ผู้ รับงาน ไป ทํา ที่ บ้าน คณะ",
        "back": "มี คณะกรรมการ บริหาร กองทุน เพื่อ"
    },
    {
        "front": "- - - - - กรมการจัดหางาน เป็น ประธานกรรมการ",
        "back": "หนึ่ง ประกอบด้วย (๑) อธิบดี"
    },
    {
        "front": "(๒) ผู้แทน กระทรวงการคลัง ผู้แทน สํา นัก - - - - - กรรมการ",
        "back": "งบประมาณ และ ผู้แทน กรมการจัดหางาน เป็น"
    },
    {
        "front": "(๓) กรรมการ ผู้ทรงคุณวุฒิ จํานวน ไม่ เกิน สาม คน - - - - - เห็นชอบ ของ",
        "back": "ซึ่ง ประธานกรรมการ แต่งตั้ง โดย ความ"
    },
    {
        "front": "- - - - - และ ประสบการณ์ ด้าน การเงิน เศรษฐศาสตร์ การลงทุน กฎหมาย หรือ ด้าน อื่น ที่ เกี่ยวข้อง",
        "back": "กระทรวงการคลัง จาก ผู้มีความรู้ ความ เชี่ยวชาญ"
    },
    {
        "front": "ให้ ผู้บริหาร กองทุน - - - - -",
        "back": "เป็น กรรมการ และ เลขานุการ"
    },
    {
        "front": "ข้อ ๑๑ กรรมการ - - - - - ไม่ มี ลักษณะ ต้องห้าม ดังต่อไปนี้ (๑) มี สัญชาติ ไทย",
        "back": "ผู้ทรงคุณวุฒิ ต้อง มี คุณสมบัติ และ"
    },
    {
        "front": "- - - - - สิบห้า ปี บริบูรณ์",
        "back": "(๒) มีอายุ ไม่ เกิน หก"
    },
    {
        "front": "(๓) ไม่ เป็น บุคคลล้มละลาย คนไร้ความสามารถ - - - - -",
        "back": "หรือ คนเสมือนไร้ความสามารถ หน้า ๓"
    },
    {
        "front": "เล่ม ๑๓๓ - - - - - ๒ กันยายน ๒๕๕๙",
        "back": "ตอน พิเศษ ๑๙๗ ง ราชกิจจานุเบกษา"
    },
    {
        "front": "(๔) ไม่ เคย ได้ รับโทษ จํา คุก โดย คํา - - - - - เว้นแต่",
        "back": "พิพากษา ถึงที่สุด ให้ จํา คุก"
    },
    {
        "front": "เป็นโทษ สํา หรับ ความ - - - - - หรือ ความผิดลหุโทษ",
        "back": "ผิดที่ ได้ กระ ทํา โดยประมาท"
    },
    {
        "front": "(๕) - - - - - ปลดออก หรือ ให้ ออกจากงาน เพราะ ทุจริตต่อหน้าที่ หรือ ประพฤติ ชั่ว อย่าง ร้ายแรง",
        "back": "ไม่ เคย ถูก ลงโทษ ไล่ออก"
    },
    {
        "front": "(๖) ไม่ เป็น ผู้ ดํารงตํา แห น่ง ทางการเมือง - - - - - กรรมการ หรือ",
        "back": "สมาชิกสภา ท้องถิ่น หรือ ผู้บริหารท้องถิ่น หรือ"
    },
    {
        "front": "ผู้ ดํารงตํา - - - - - การบริหาร พรรคการเมือง ที่ปรึกษา พรรคการเมือง หรือ เจ้าหน้าที่ ของ พรรคการเมือง",
        "back": "แห น่ง ที่ รับผิดชอบ ใน"
    },
    {
        "front": "(๗) ไม่ เป็น - - - - - ํา เนิน งาน ของ กองทุน ไม่ ว่า โดยตรง หรือ โดยอ้อม",
        "back": "ผู้มีส่วน ได้เสีย ใน กา รด"
    },
    {
        "front": "ข้อ ๑๒ กรรมการ ผู้ทรงคุณวุฒิ มี วา ระกา รด ํารงตํา แห น่ง - - - - -",
        "back": "คราว ละ สี่ ปี"
    },
    {
        "front": "- - - - - ตํา แห น่ง ก่อ นวาระ ให้ ผู้ ได้รับแต่งตั้ง แทน ตํา",
        "back": "ในกรณีที่ กรรมการ ผู้ทรงคุณวุฒิ พ้น จาก"
    },
    {
        "front": "แห น่ง ที่ว่าง อยู่ ใน ตํา แห น่ง เท่ากับ วาระ - - - - - ได้ แต่งตั้ง ไว้ แล้ว",
        "back": "ที่ เหลืออยู่ ของ กรรมการ ซึ่ง"
    },
    {
        "front": "เมื่อ ครบ กําหนด ตาม วาระ ใน วรรค หนึ่ง หาก ยัง - - - - -",
        "back": "มิได้ มี การ แต่งตั้ง กรรมการ"
    },
    {
        "front": "ผู้ทรงคุณวุฒิ ขึ้น ใหม่ ให้ กรรมการ ซึ่ง พ้น - - - - - วาระ นั้น อยู่",
        "back": "จาก ตํา แห น่ง ตาม"
    },
    {
        "front": "ใน ตํา แห - - - - - ต่อไป จนกว่า กรรมการ ซึ่ง ได้รับ แต่ง ตั้งใหม่ เข้า รับหน้าที่",
        "back": "น่ง เพื่อ ดํา เนิน งาน"
    },
    {
        "front": "กรรมการ ผู้ทรงคุณวุฒิ ซึ่ง พ้น จาก - - - - - อาจ ได้รับแต่งตั้ง อีก ได้ แต่",
        "back": "ตํา แห น่ง ตาม วาระ"
    },
    {
        "front": "จะ ดํารงตํา แห น่ง ติดต่อกัน - - - - -",
        "back": "เกิน สอง วาระ ไม่ ได้"
    },
    {
        "front": "ข้อ ๑๓ นอกจาก การ - - - - - ตาม วาระ กรรมการ ผู้ทรงคุณวุฒิ พ้น จาก",
        "back": "พ้น จาก ตํา แห น่ง"
    },
    {
        "front": "ตํา แห น่ง เมื่อ - - - - -",
        "back": "(๑) ตาย (๒) ลาออก"
    },
    {
        "front": "(๓) ประธานกรรมการ ให้ ออก โดย - - - - - บกพร่อง ต่อ หน้าที่ มี ความประพฤติ เสื่อมเสีย หรือ หย่อน ความสามารถ",
        "back": "ความ เห็นชอบ ของ กระทรวงการคลัง เพราะ"
    },
    {
        "front": "(๔) ขาด คุณสมบัติ หรือ มี ลักษณะ - - - - -",
        "back": "ต้องห้าม ตาม ข้อ ๑๑"
    },
    {
        "front": "- - - - - นา จ หน้าที่ ดังต่อไปนี้",
        "back": "ข้อ ๑๔ คณะกรรมการ มี อํา"
    },
    {
        "front": "(๑) กําหนด นโยบาย - - - - - และ ติดตาม กา รด ํา เนิน งาน",
        "back": "กํา กับ ดูแล การบริหาร จัดการ"
    },
    {
        "front": "ให้ - - - - -",
        "back": "เป็นไปตาม วัตถุประสงค์ ของ ทุนหมุนเวียน"
    },
    {
        "front": "(๒) กําหนด ข้อบังคับ - - - - - ตลอดจน การก ําหนด ค่าตอบแทน สิทธิประโยชน์ หรือ สวัสดิการ",
        "back": "ว่าด้วย การบริหารงานบุคคล การเงิน การ พัสดุ"
    },
    {
        "front": "ต่าง - - - - - และ ลูกจ้าง ให้ สอดคล้อง กับ มาตรฐาน ที่ คณะกรรมการ นโยบาย การบริหาร ทุนหมุนเวียน กําหนด",
        "back": "ๆ ของ ผู้บริหาร กองทุน พนักงาน"
    },
    {
        "front": "(๓) - - - - - ให้ กู้ยืม",
        "back": "พิจารณา จัดสรรเงิน และ อนุมัติ เงิน"
    },
    {
        "front": "(๔) - - - - - ํา เนิน งาน ประ จํา ปี (๕) แต่งตั้ง",
        "back": "พิจารณา อนุมัติ แผน กา รด"
    },
    {
        "front": "ผู้บริหาร - - - - -",
        "back": "กองทุน หน้า ๔"
    },
    {
        "front": "เล่ม ๑๓๓ ตอน พิเศษ ๑๙๗ - - - - -",
        "back": "ง ราชกิจจานุเบกษา ๒ กันยายน ๒๕๕๙"
    },
    {
        "front": "ข้อ ๑๕ การประชุม ของ คณะกรรมการ ต้อง มี - - - - - กึ่งหนึ่ง ของ จํานวน",
        "back": "กรรมการ มา ประชุม ไม่ น้อยกว่า"
    },
    {
        "front": "กรรมการ ทั้งหมด - - - - -",
        "back": "จึง จะ เป็น องค์ประชุม"
    },
    {
        "front": "ใน การประชุม ของ คณะกรรมการ ถ้า - - - - - อาจ ปฏิบัติหน้าที่ ได้ ให้ ที่ประชุม",
        "back": "ประธานกรรมการ ไม่ มา ประชุม หรือไม่"
    },
    {
        "front": "- - - - - ประธาน ใน ที่ประชุม",
        "back": "เลือก กรรม การคน หนึ่ง เป็น"
    },
    {
        "front": "- - - - - ถือ เสียงข้างมาก กรรม การคน หนึ่ง ให้ มีเสียง หนึ่ง ใน การ",
        "back": "การวินิจฉัย ชี้ขาด ของ ที่ประชุม ให้"
    },
    {
        "front": "ลงคะแนน ถ้า คะแนนเสียง เท่ากัน - - - - - เพิ่มขึ้น อีก เสียง หนึ่ง เป็น เสียง ชี้ขาด",
        "back": "ให้ ประธาน ใน ที่ประชุม ออกเสียง"
    },
    {
        "front": "ข้อ ๑๖ - - - - - แต่งตั้ง คณะ อนุกรรมการ เพื่อ ปฏิบัติการ ตามที่ คณะกรรมการ มอบหมาย",
        "back": "คณะกรรมการ มี อํา นา จ"
    },
    {
        "front": "การประชุม ของ คณะ อนุกรรมการ ให้ นํา - - - - - บังคับ โดย อนุโลม",
        "back": "บทบัญญัติ ข้อ ๑๕ มา ใช้"
    },
    {
        "front": "ข้อ ๑๗ ให้ กรรมการ และ อนุกรรมการ ได้รับ เบี้ยประชุม หรือ ประโยชน์ - - - - -",
        "back": "ตอบแทน อื่น ตาม หลักเกณฑ์ ที่"
    },
    {
        "front": "คณะกรรมการ นโยบาย การบริหาร ทุนหมุนเวียน กําหนด ตาม ผล การประเมินผล กา รด ํา เนิน - - - - -",
        "back": "งาน หมวด ๓ การบริหาร"
    },
    {
        "front": "ข้อ ๑๘ ให้ กรมการ จัดหา งา นก - - - - - รองรับ กา รด",
        "back": "ําหนด โครงสร้าง การบริหาร กองทุน เพื่อ"
    },
    {
        "front": "ํา - - - - - ตาม หลักเกณฑ์ และ แนวทาง ที่ คณะกรรมการ นโยบาย การบริหาร ทุนหมุนเวียน ประกาศก ําหนด",
        "back": "เนิน งาน ด้าน ต่าง ๆ"
    },
    {
        "front": "ข้อ ๑๙ ให้ ผู้บริหาร กองทุน จัด ทํา แผน กา - - - - - จํา",
        "back": "รด ํา เนิน งาน ประ"
    },
    {
        "front": "ปี ซึ่ง - - - - - กา รด ํา เนิน งาน ของ ปี ที่ผ่านมา",
        "back": "อย่าง น้อย ต้อง ประกอบด้วย ผล"
    },
    {
        "front": "- - - - - ประ จํา ปี และ ประมาณ การ กระแส เงินสด ทั้งนี้ ตาม",
        "back": "แผนการ ปฏิบัติงาน ประมาณการ รายรับ รายจ่าย"
    },
    {
        "front": "แบบ ที่ กระทรวงการคลัง กําหนด เพื่อน - - - - - อย่าง น้อย หกสิบ วันก่อน วัน",
        "back": "ํา เสนอ คณะกรรมการ พิจารณา อนุมัติ"
    },
    {
        "front": "เริ่ม ต้นปี - - - - - ส่ง กระทรวงการคลัง อย่าง น้อย สามสิบ วัน ก่อน วัน",
        "back": "บัญชี ของ ทุกปี และ ให้"
    },
    {
        "front": "เริ่ม ต้นปี บัญชี ของ ทุกปี เพื่อ ใช้ ประกอบ - - - - - กองทุน และ",
        "back": "การก ํา กับ ดูแล การบริหาร"
    },
    {
        "front": "ติดตาม การประเมินผล กา - - - - -",
        "back": "รด ํา เนิน งาน"
    },
    {
        "front": "- - - - - และ ลูกจ้าง",
        "back": "หมวด ๔ ผู้บริหาร กองทุน พนักงาน"
    },
    {
        "front": "ข้อ ๒๐ ให้ คณะกรรมการ แต่งตั้ง ผู้บริหาร กอง ทุ - - - - - ให้ เป็นไปตาม",
        "back": "นท ํา หน้าที่ บริหาร กองทุน"
    },
    {
        "front": "วัตถุประสงค์ ของ กองทุน โดย ให้ คํา นึง - - - - - เนิน งาน ของ",
        "back": "ถึง ลักษณะ กา รด ํา"
    },
    {
        "front": "กองทุน ความรับผิดชอบ ความประหยัด - - - - - ที่ คณะกรรมการ นโยบาย การบริหาร ทุนหมุนเวียน กําหนด",
        "back": "และ ความคุ้มค่า ทั้งนี้ ตาม มาตรฐาน"
    },
    {
        "front": "ข้อ ๒๑ ในกรณีที่ - - - - - กรมการจัดหางาน ให้ กา รด ํารงตํา แห น่ง",
        "back": "ผู้บริหาร กองทุน มิใช่ เจ้าหน้าที่ ใน"
    },
    {
        "front": "การ พ้น จาก ตํา แห น่ง และ - - - - - ที่ คณะ กรรมการก",
        "back": "เงื่อนไข การ จ้าง เป็นไปตาม ข้อบังคับ"
    },
    {
        "front": "ําหนด ให้ - - - - - นโยบาย บริหาร ทุนหมุนเวียน กําหนด หน้า ๕",
        "back": "สอดคล้อง กับ มาตรฐาน ที่ คณะกรรมการ"
    },
    {
        "front": "เล่ม - - - - - ราชกิจจานุเบกษา ๒ กันยายน ๒๕๕๙",
        "back": "๑๓๓ ตอน พิเศษ ๑๙๗ ง"
    },
    {
        "front": "- - - - - น่ง คุณสมบัติ ของ ตํา แห น่ง อัตรา เงินเดือน ค่าตอบแทน อํา",
        "back": "ข้อ ๒๒ การก ําหนดตํา แห"
    },
    {
        "front": "นา จ หน้าที่ ระยะเวลา การ จ้าง การประเมินผล การ ปฏิบัติงาน และ - - - - -",
        "back": "การ เลิกจ้าง พนักงาน และ ลูกจ้าง"
    },
    {
        "front": "ให้ เป็นไปตาม ข้อบังคับ ที่ คณะ - - - - - มาตรฐาน ที่ คณะกรรมการ นโยบาย บริหาร ทุนหมุนเวียน กําหนด",
        "back": "กรรมการก ําหนด ให้ สอดคล้อง กับ"
    },
    {
        "front": "- - - - - กองทุน",
        "back": "หมวด ๕ การ กู้ยืม เงิน"
    },
    {
        "front": "- - - - - กา รท ํา สัญญา กู้ยืม รวมถึง กําหนด หลักประกัน การ จ่าย",
        "back": "ข้อ ๒๓ การ ให้ กู้ยืม"
    },
    {
        "front": "เงินกู้ การ ชํา ระ คืน เงินกู้ และ การ เรียกคืน - - - - - วิธีการ ที่ คณะกรรมการ ประกาศก ําหนด",
        "back": "เงินกู้ ให้ เป็นไปตาม หลักเกณฑ์ และ"
    },
    {
        "front": "ข้อ ๒๔ อัตราดอกเบี้ย หรือ ค่าตอบแทน อื่น รวมถึง ค่าปรับ ใน การ กู้ยืม เงิน ให้ เป็นไป - - - - -",
        "back": "ตามที่ คณะกรรมการ ประกาศก ําหนด"
    },
    {
        "front": "- - - - - พัสดุ และ การ ตรวจสอบ",
        "back": "หมวด ๖ การเงิน การบัญชี การ"
    },
    {
        "front": "ข้อ ๒๕ ให้ กรมการจัดหางาน เปิด บัญชีเงินฝาก ไว้ ที่ กรมบัญชีกลาง กระทรวงการคลัง - - - - -",
        "back": "หรือ สํา นักงาน คลัง จังหวัด"
    },
    {
        "front": "แล้วแต่ กรณี - - - - - รับงาน ไป ทํา ที่ บ้าน” เพื่อ ฝากเงิน ของ",
        "back": "ชื่อ “บัญชี กองทุน เพื่อ ผู้"
    },
    {
        "front": "กองทุน ที่ - - - - - หรือ ส่วนภูมิภาค และ ห้าม มิ ให้ นํา เงิน",
        "back": "ได้รับ จาก หน่วยงาน ใน ราชการส่วนกลาง"
    },
    {
        "front": "ไป - - - - -",
        "back": "ใช้จ่าย ก่อน ส่ง เข้า บัญชีเงินฝาก"
    },
    {
        "front": "ในกรณีที่ มี ความ - - - - - เปิด บัญชีเงินฝาก ไว้ ณ ธนาคาร ของ รัฐ",
        "back": "จํา เป็น กรมการจัดหางาน อาจ ขอ"
    },
    {
        "front": "หรือ ธนาคารพาณิชย์ ใน ชื่อ บัญชี เช่นเดียวกับ - - - - - ตาม วัตถุประสงค์ ภายใน วงเงิน",
        "back": "วรรค หนึ่ง เพื่อ ไว้ ใช้จ่าย"
    },
    {
        "front": "และ เงื่อนไข - - - - - ความ เห็นชอบ ของ กระทรวงการคลัง",
        "back": "ที่ คณะ กรรมการก ําหนด โดย"
    },
    {
        "front": "ข้อ - - - - - ที่ ได้รับ ส่ง เข้าบัญชี ของ กองทุน ที่ เปิด ไว้",
        "back": "๒๖ ให้ กรมการจัดหางาน นํา เงิน"
    },
    {
        "front": "ที่ - - - - - จังหวัด แล้วแต่ กรณี ภายใน สาม วัน ทํา การ นับแต่ วันที่ รับเงิน",
        "back": "กรมบัญชีกลาง หรือ สํา นักงาน คลัง"
    },
    {
        "front": "ข้อ ๒๗ การ จ่าย เงิน จาก กองทุน ให้ ใช้จ่าย - - - - - กองทุน ดังต่อไปนี้",
        "back": "เพื่อ กิจ การตาม วัตถุประสงค์ ของ"
    },
    {
        "front": "(๑) เป็น เงิน - - - - - ไป ทํา ที่ บ้าน",
        "back": "กู้ยืม ให้ แก่ ผู้ รับงาน"
    },
    {
        "front": "- - - - - กองทุน",
        "back": "(๒) เป็น ค่าใช้จ่าย ใน การบริหาร"
    },
    {
        "front": "- - - - - ผู้ ที่ ได้ รับมอบหมาย เป็น ผู้อนุมัติ การ ใช้จ่าย เงิน ของ",
        "back": "ข้อ ๒๘ ให้ อธิบดี หรือ"
    },
    {
        "front": "กองทุน ภายใต้ - - - - - ปี ที่ ได้รับ อนุมัติ จาก กระทรวงการคลัง",
        "back": "กรอบ ประมาณการ รายจ่าย ประ จํา"
    },
    {
        "front": "เมื่อ ได้รับ อนุมัติ ตาม วรรค - - - - - ผู้ ที่ ได้ รับมอบหมาย จาก",
        "back": "หนึ่ง ให้ ผู้บริหาร กองทุน หรือ"
    },
    {
        "front": "ผู้บริหาร กองทุน มี - - - - - เบิกเงิน ของ กองทุน",
        "back": "อํา นา จ สั่งจ่าย และ"
    },
    {
        "front": "ข้อ ๒๙ การ ตัด หนี้สูญ ให้ กรมการจัดหางาน ขออนุมัติ จาก - - - - - กับ",
        "back": "คณะกรรมการ และ ขอ ทํา ความตกลง"
    },
    {
        "front": "กระทรวงการคลัง เป็นราย - - - - -",
        "back": "ๆ ไป หน้า ๖"
    },
    {
        "front": "เล่ม ๑๓๓ - - - - - ๒ กันยายน ๒๕๕๙",
        "back": "ตอน พิเศษ ๑๙๗ ง ราชกิจจานุเบกษา"
    },
    {
        "front": "ข้อ - - - - - รักษา ไว้ ซึ่ง ระบบ บัญชี ที่ เหมาะสม เพื่อให้ สามารถ",
        "back": "๓๐ ให้ คณะกรรมการ วาง และ"
    },
    {
        "front": "- - - - - ฐานะทางการเงิน และ ผล กา รด ํา เนิน งาน ของ กองทุน",
        "back": "จัด ทํา รายงาน ทางการเงิน แสดง"
    },
    {
        "front": "- - - - - ที่รับรอง โดยทั่วไป",
        "back": "ได้ อย่าง ถูกต้อง ตามหลักการ บัญชี"
    },
    {
        "front": "ข้อ ๓๑ - - - - - การเงิน ของ กองทุน ส่ง ผู้สอบบัญชี ภายใน หกสิบ วัน นับ แต่วัน สิ้นปี บัญชี",
        "back": "ให้ คณะกรรมการ จัด ทํา รายงาน"
    },
    {
        "front": "ปี บัญชี ของ กองทุน ให้ - - - - - ประกาศก ําหนด เป็น อย่าง อื่น",
        "back": "เป็นไปตาม ปีงบประมาณ เว้นแต่ คณะกรรมการ จะ"
    },
    {
        "front": "โดย ความ - - - - - ทุนหมุนเวียน",
        "back": "เห็นชอบ ของ คณะกรรมการ นโยบาย การบริหาร"
    },
    {
        "front": "ข้อ ๓๒ ให้ กองทุน มี การ บันทึก - - - - - การเงิน การคลัง ภาครัฐ",
        "back": "ราย การบัญชี ใน ระบบ การบริหาร"
    },
    {
        "front": "แบบ อิเล็กทรอนิกส์ ที่ ถูกต้อง และ เป็น ปัจจุบัน ตาม รูปแบบ และ เงื่อนไข ที่ - - - - -",
        "back": "กรม บัญชี กลา งก ําหนด"
    },
    {
        "front": "ข้อ ๓๓ - - - - - ตรวจสอบ ภายใน เพื่อ การ ตรวจสอบ กา รด ํา",
        "back": "ให้ กรมการจัดหางาน จัด ให้ มีระบบ"
    },
    {
        "front": "เนิน งาน ต่าง - - - - - และ วิธีการ ที่ คณะกรรมการ นโยบาย การบริหาร ทุนหมุนเวียน กําหนด บทเฉพาะกาล",
        "back": "ๆ ของ กองทุน ตาม หลักเกณฑ์"
    },
    {
        "front": "ข้อ ๓๔ บรรดา หลักเกณฑ์ และ วิธีการ ที่ ออก ตามระเบียบ กรมการจัดหางาน - - - - -",
        "back": "ว่าด้วย กองทุน เพื่อ ผู้ รับงาน"
    },
    {
        "front": "ไป - - - - - ใช้ บังคับ อยู่ ก่อน วันที่ ระเบียบ นี้ ใช้ บังคับ",
        "back": "ทํา ที่ บ้าน ที่ ยังคง"
    },
    {
        "front": "ให้ ยังคง ใช้ บังคับ ต่อไป จนกว่า - - - - - วิธีการ ที่ ออก ตามระเบียบ นี้ ใช้ บังคับ",
        "back": "จะ ได้ มี หลักเกณฑ์ และ"
    },
    {
        "front": "ประกาศ ณ วันที่ ๑๗ สิงหาคม พ.ศ.๒๕๕๙ - - - - -",
        "back": "อารักษ์ พรหม ณี อธิบดี กรมการจัดหางาน"
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
