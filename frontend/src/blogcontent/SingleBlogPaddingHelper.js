export function calculateBlogPadding() {
    const basePaddingTop = 30; // Example paddingTop value, adjust as needed
    let paddingLeftPercentage = 10;
    let paddingRightPercentage = 30;
  
    const windowWidth = window.innerWidth;
    const minWidth = 600; // Minimum width threshold
    let effectiveWidth = windowWidth;

    // Adjust padding percentages based on window width
    if (windowWidth >= 600) {
        paddingLeftPercentage = 10;
        paddingRightPercentage = windowWidth < 1200 ? 10 : 30;
    } else {
        paddingLeftPercentage = 5;
        paddingRightPercentage = 5;
    }

    // Calculate padding in pixels
    let paddingLeft = windowWidth * paddingLeftPercentage / 100;
    let paddingRight = windowWidth * paddingRightPercentage / 100;
  
    effectiveWidth = windowWidth - paddingLeft - paddingRight;
  
    // Adjust paddings to ensure content width is at least 600px
    while (effectiveWidth < minWidth) {
        if (paddingRightPercentage > 10) {
            paddingRightPercentage -= 1;
            paddingRight = windowWidth * paddingRightPercentage / 100;
        } else if (paddingLeftPercentage > 5) {
            paddingLeftPercentage -= 1;
            paddingLeft = windowWidth * paddingLeftPercentage / 100;
        } else {
            break; // Prevents an infinite loop if adjustments can't meet the criteria
        }

        effectiveWidth = windowWidth - paddingLeft - paddingRight;

        // When both sides reach their minimum but width is still below 600, reduce both equally
        if (effectiveWidth < minWidth && paddingLeftPercentage === 5 && paddingRightPercentage === 10) {
            paddingLeftPercentage = paddingRightPercentage = Math.max(5, paddingLeftPercentage - 1);
            paddingLeft = windowWidth * paddingLeftPercentage / 100;
            paddingRight = windowWidth * paddingRightPercentage / 100;
            effectiveWidth = windowWidth - paddingLeft - paddingRight;
        }
    }
  
    return {
        paddingTop: `${basePaddingTop}px`,
        paddingLeft: `${paddingLeftPercentage}%`,
        paddingRight: `${paddingRightPercentage}%`,
    };
}
