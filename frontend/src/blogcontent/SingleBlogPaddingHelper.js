// SingleBlogPaddingHelper.js

/**
 * Calculates the padding for the blog container based on the window width.
 * Ensures the total width never goes below 600px by adjusting the padding.
 * 
 * @returns {Object} An object containing the paddingTop, paddingLeft, and paddingRight values.
 */
export function calculateBlogPadding() {
    const basePaddingTop = 30; // Example paddingTop value, adjust as needed
    let paddingLeft = "10%";
    let paddingRight = "30%";
  
    const windowWidth = window.innerWidth;
    const minWidth = 600; // Minimum width threshold
  
    // No padding if window width is less than 600px
    if (windowWidth < minWidth) {
      paddingLeft = "0";
      paddingRight = "0";
    } else {
      // Calculate total padding in pixels for 10% and 30%
      const totalPadding = windowWidth * 0.4; // 10% left + 30% right
      const contentWidth = windowWidth - totalPadding;
  
      if (contentWidth < minWidth) {
        // Calculate the maximum padding percentage while ensuring contentWidth >= minWidth
        const maxPaddingPercentage = (windowWidth - minWidth) / windowWidth * 100;
        const sidePadding = maxPaddingPercentage / 4; // Distribute evenly to both sides, prioritizing less padding on the right
  
        paddingLeft = `${sidePadding}%`;
        paddingRight = `${maxPaddingPercentage - sidePadding}%`; // Allocate the remainder to the right
      }
    }
  
    return {
      paddingTop: `${basePaddingTop}px`,
      paddingLeft,
      paddingRight,
    };
  }
  