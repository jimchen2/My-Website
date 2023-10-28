import React, { useEffect, useRef } from "react";
import { useHeaderPadding } from "../../utils/adjustelementwidth";

const scrollToElementWithOffset = (id, offset) => {
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top: y });
};

const addAnchorsToHeaders = (padd, styles) => {
  document.querySelectorAll("h2, h3").forEach((header) => {
    const id = header.getAttribute("id");
    const anchor = document.createElement("a");
    anchor.setAttribute("href", `#${id}`);
    anchor.className = "anchor";
    anchor.textContent = "🔗";
    anchor.style.textDecoration = styles.anchor.textDecoration;
    anchor.style.color = styles.anchor.color;
    anchor.style.marginRight = `${styles.anchor.marginRight}px`;
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToElementWithOffset(id, -80);
    });

    if (!header.querySelector(".anchor")) {
      header.appendChild(anchor);
    }
  });
};

const addItemToNavbar = (padd, tocList) => {
    let currentH2List, currentH3List;

    document.querySelectorAll("h2, h3").forEach((header) => {
      const id = header.getAttribute("id");
      const tocLink = document.createElement("a");
      tocLink.setAttribute("href", `#${id}`);
      tocLink.textContent = header.textContent;
      tocLink.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToElementWithOffset(id, -padd() - 5);
      });
    
      switch (header.tagName) {
        case "H2":
          if (currentH2List && !currentH3List.hasChildNodes()) {
            currentH2List.removeChild(currentH3List);
          }
    
          currentH2List = document.createElement("p");
          tocList.appendChild(currentH2List);
          currentH2List.appendChild(tocLink);
    
          currentH3List = document.createElement("ul");
          currentH2List.appendChild(currentH3List);
          break;
    
        case "H3":
          if (currentH3List) {
            const h3ListItem = document.createElement("li");
            h3ListItem.appendChild(tocLink);
            currentH3List.appendChild(h3ListItem);
          }
          break;
      }
    });
    
    if (currentH2List && !currentH3List.hasChildNodes()) {
      currentH2List.removeChild(currentH3List);
    }
    };

const SideNav = () => {
  const sideNavRef = useRef(null);
  const padd = useHeaderPadding();

  const sidebarContentHeight = sideNavRef.current
    ? sideNavRef.current.scrollHeight
    : 0;
  const sidebarContainerHeight = sideNavRef.current
    ? sideNavRef.current.clientHeight
    : 0;

  if (sidebarContentHeight > sidebarContainerHeight) {
    sideNavRef.current.style.overflowY = "auto";
  }

  useEffect(() => {
    const tocDiv = sideNavRef.current;
    while (tocDiv.firstChild) {
      tocDiv.removeChild(tocDiv.firstChild);
    }
    const tocList = document.createElement("u");

    addAnchorsToHeaders(() => padd, styles);
    addItemToNavbar(() => padd, tocList);
    tocDiv.appendChild(tocList);
  }, [padd]);

  const styles = {
    sideNav: {
      fontFamily: "Courier New, monospace",
      position: "fixed",
      top: `${padd}px`,
      left: 0,
      width: 200,
      height: "100vh",
      overflowY: "auto",
      backgroundColor: "#EDEDED",
      padding: 20,
      paddingBottom: 180,
    },
    anchor: {
      textDecoration: "none",
      color: "black",
      marginRight: 5,
    },
  };

  return (
    <div ref={sideNavRef} style={styles.sideNav}>
      {/* Table of contents will be added here */}
    </div>
  );
};

export { SideNav };
