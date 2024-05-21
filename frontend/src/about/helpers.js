export const splitSections = (data) => {
  const pattern = /<h2\s+.*?>(.+?)<\/h2>([\s\S]*?(?=<h2\s+.*?>|$))/gs;
  const sectionsArray = [];
  let match;
  while ((match = pattern.exec(data)) !== null) {
    const title = match[1];
    const content = match[2];
    sectionsArray.push({ title, content });
  }
  return sectionsArray;
};

export const extractData = (sections) => {
  const data = {
    aboutMe: "",
    profileImage: "",
    interests: "",
    socialLinks: "",
    servers: "",
    data: "",
    howIUseMyLaptop: "",
    howIUseMyPhone: "",
    howIThinkAboutTech: "",
    fun: "",
    references: "",
  };

  sections.forEach((section) => {
    const { title, content } = section;
    switch (title) {
      case "About Me":
        data.aboutMe = content;
        break;
      case "Portrait":
        data.profileImage = `<div class="profile-image-container">${content}</div>`;
        break;
      case "Interests":
        data.interests = content;
        break;
      case "Contact":
        data.socialLinks = content;
        break;
      case "My Servers":
        data.servers = content;
        break;
      case "My Data":
        data.data = content;
        break;
      case "How I use My Laptop":
        data.howIUseMyLaptop = content;
        break;
      case "How I use My Phone":
        data.howIUseMyPhone = content;
        break;
      case "How I Think About Tech":
        data.howIThinkAboutTech = content;
        break;
      case "Fun":
        data.fun = content;
        break;
      case "References":
        data.references = content;
        break;
      default:
        break;
    }
  });

  // Inject CSS for the profile image container
  const style = document.createElement("style");
  style.textContent = `
      .profile-image-container {
        max-width: 200px; 
      }
      .profile-image-container img {
        width: 100%;
      }
            
    `;
  document.head.appendChild(style);

  return data;
};
