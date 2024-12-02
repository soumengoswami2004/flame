function playFlames() {
    let name1 = document.getElementById("name1").value.toLowerCase().replace(/\s+/g, '');
    let name2 = document.getElementById("name2").value.toLowerCase().replace(/\s+/g, '');
    
    // Remove common letters
    for (let char of name1) {
        if (name2.includes(char)) {
            name1 = name1.replace(char, '');
            name2 = name2.replace(char, '');
        }
    }
    
    // Calculate remaining letters count
    let remainingCount = name1.length + name2.length;
    let flames = ["Friends", "Lovers", "Affectionate", "Marriage", "Enemies", "Siblings"];
    
    // Determine the FLAMES result
    while (flames.length > 1) {
        let splitIndex = (remainingCount % flames.length) - 1;
        if (splitIndex >= 0) {
            flames = flames.slice(splitIndex + 1).concat(flames.slice(0, splitIndex));
        } else {
            flames.pop();
        }
    }
    
    const resultText = flames[0];
    const resultImage = document.getElementById("result-image");

    // Set result text and image
    document.getElementById("result").innerText = `The relationship is: ${resultText}`;

    // Update image based on result
    resultImage.classList.remove("hidden");
    switch (resultText) {
        case "Friends":
            resultImage.src = "friends1.jpg";
            break;
        case "Lovers":
            resultImage.src = "love.png";
            break;
        case "Affectionate":
            resultImage.src = "affectionate.png";
            break;
        case "Marriage":
            resultImage.src = "marriage.png";
            break;
        case "Enemies":
            resultImage.src = "enemy.jpg";
            break;
        case "Siblings":
            resultImage.src = "sister.jpg";
            break;
        default:
            resultImage.classList.add("hidden");  // Hide image if no match
    }
}
function submitReview() {
    const review = document.getElementById('review').value;
    if (review) {
        const reviewSection = document.getElementById('review-section');
        const newReview = document.createElement('p');
        newReview.textContent = `User Review: ${review}`;
        reviewSection.appendChild(newReview);
        document.getElementById('review').value = ''; // Clear input after submission.
        alert('Thank you for your review!');
    } else {
        alert('Please write a review before submitting.');
    }
}