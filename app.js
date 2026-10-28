function gradeExam() {
    const structures = document.querySelectorAll('.quiz-box');
    let score = 0;
    let answeredCount = 0;

    structures.forEach((box) => {
        const checkedOption = box.querySelector('input[type="radio"]:checked');
        const correctAnswer = box.getAttribute('data-correct');
        
        if (checkedOption) {
            answeredCount++;
            if (checkedOption.value === correctAnswer) {
                score++;
                box.style.borderLeft = "4px solid #38b2ac";
                box.style.background = "#e6fffa";
            } else {
                box.style.borderLeft = "4px solid #e53e3e";
                box.style.background = "#fff5f5";
            }
        } else {
            box.style.borderLeft = "4px solid #dd6b20";
        }
    });

    if (answeredCount < structures.length) {
        alert("Please answer all questions before submitting your test evaluations!");
        return;
    }

    const feedback = document.getElementById('results-screen');
    feedback.style.display = "block";
    feedback.innerHTML = `🏁 You scored ${score} out of ${structures.length} correct! (${Math.round((score/structures.length)*100)}%)`;
    feedback.scrollIntoView({ behavior: 'smooth' });
}