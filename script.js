document.addEventListener('DOMContentLoaded', function() {
    const flashcards = [
        { front: "เมืองหลวงของฝรั่งเศสคือ?", back: "ปารีส" },
        { front: "H2O คือสูตรเคมีของ?", back: "น้ำ" },
        { front: "ใครเป็นผู้คิดพีทาโกรัส?", back: "พีทาโกรัส" },
    ];

    let currentCard = 0; // บัตรคำปัจจุบัน
    let isFront = true; // กำลังแสดงด้านหน้าหรือไม่

    const flashcardElement = document.getElementById('flashcard');
    updateFlashcard(); // อัปเดตบัตรคำเมื่อเริ่มต้น

    // ฟังก์ชันสำหรับอัปเดตบัตรคำ
    function updateFlashcard() {
        flashcardElement.textContent = isFront ? flashcards[currentCard].front : flashcards[currentCard].back;
        flashcardElement.style.lineHeight = '200px'; // รีเซ็ตค่า line-height ทุกครั้งที่อัปเดต
    }

    flashcardElement.addEventListener('click', () => {
        if (!isFront) {
            // ถ้าปัจจุบันแสดงด้านหลัง, แสดงด้านหน้าของบัตรคำถัดไป
            currentCard = (currentCard + 1) % flashcards.length; // ไปยังบัตรถัดไป และกลับไปที่บัตรแรกหากถึงบัตรสุดท้าย
            isFront = true; // รีเซ็ตสถานะเพื่อแสดงด้านหน้า
        } else {
            // ถ้าปัจจุบันแสดงด้านหน้า, พลิกไปแสดงด้านหลัง
            isFront = false;
        }
        updateFlashcard();
    });
});
