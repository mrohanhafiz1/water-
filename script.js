/* ================================
   PURE LITE WATER - ABOUT SECTION
================================ */

document.addEventListener("DOMContentLoaded", function () {

    const aboutSection = document.querySelector("#about");

    if (!aboutSection) {
        return;
    }

    // About section reveal animation
    aboutSection.classList.add("about-js-ready");

    // Respect reduced motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        aboutSection.classList.add("about-visible");
        return;
    }

    // Reveal section when it enters the screen
    if ("IntersectionObserver" in window) {

        const aboutObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        aboutSection.classList.add("about-visible");

                        observer.unobserve(aboutSection);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        aboutObserver.observe(aboutSection);

    } else {

        aboutSection.classList.add("about-visible");

    }

});

document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("reviewsTrack");

  if (!track) {
    console.error("Reviews section nahi mila.");
    return;
  }

  const reviews = [
    { name: "Ahmed Ali", city: "Hyderabad", message: "Water delivery ka experience bohat acha raha." },
    { name: "Usman Khan", city: "Hyderabad", message: "Order karna easy hai aur service convenient hai." },
    { name: "Ayesha Malik", city: "Hyderabad", message: "Customer service friendly aur helpful hai." },
    { name: "Bilal Ahmed", city: "Hyderabad", message: "Ghar par water mangwana bohat convenient hai." },
    { name: "Fatima Noor", city: "Hyderabad", message: "Ordering process simple aur straightforward hai." },
    { name: "Hassan Raza", city: "Hyderabad", message: "Team ka response acha aur helpful hai." },
    { name: "Sana Iqbal", city: "Hyderabad", message: "Home delivery se hamara kaam asaan ho gaya." },
    { name: "Ali Hassan", city: "Hyderabad", message: "Order place karna kaafi easy hai." },
    { name: "Maryam Shah", city: "Hyderabad", message: "Service ka overall experience acha raha." },
    { name: "Hamza Siddiqui", city: "Hyderabad", message: "Water order karne ka simple tareeqa hai." },
    { name: "Zainab Ahmed", city: "Hyderabad", message: "Staff cooperative aur polite hai." },
    { name: "Saad Hussain", city: "Hyderabad", message: "Delivery service daily routine mein helpful hai." },
    { name: "Hira Khan", city: "Hyderabad", message: "Contact karna aur order dena asaan hai." },
    { name: "Danish Ali", city: "Hyderabad", message: "Service convenient aur customer friendly hai." },
    { name: "Maham Tariq", city: "Hyderabad", message: "Order process simple aur easy to follow hai." },
    { name: "Farhan Ahmed", city: "Hyderabad", message: "Team se baat karna easy raha." },
    { name: "Laiba Noor", city: "Hyderabad", message: "Ghar ke liye delivery arrange karna asaan hai." },
    { name: "Ibrahim Shah", city: "Hyderabad", message: "Customer support ne achi guidance di." },
    { name: "Areeba Malik", city: "Hyderabad", message: "Website se contact karna bohat simple hai." },
    { name: "Taha Raza", city: "Hyderabad", message: "Order dene ka experience smooth raha." },
    { name: "Noor Fatima", city: "Hyderabad", message: "Friendly service aur convenient ordering." },
    { name: "Saif Ahmed", city: "Hyderabad", message: "Water delivery ke liye contact karna asaan hai." },
    { name: "Iqra Hussain", city: "Hyderabad", message: "Service details samajhna bohat simple tha." },
    { name: "Arslan Khan", city: "Hyderabad", message: "Team ne order ke hawale se help ki." },
    { name: "Eman Ali", city: "Hyderabad", message: "Website clean hai aur order process easy hai." },
    { name: "Rehan Siddiqui", city: "Hyderabad", message: "Customer service ka response helpful raha." },
    { name: "Anaya Raza", city: "Hyderabad", message: "Water order karna ab zyada convenient hai." },
    { name: "Muneeb Ahmed", city: "Hyderabad", message: "Simple ordering aur friendly communication." },
    { name: "Zoya Hassan", city: "Hyderabad", message: "Contact form use karna bohat asaan hai." },
    { name: "Abdullah Shah", city: "Hyderabad", message: "Pure Lite Water se contact karna convenient hai." }
  ];

  function createCard(review, index, duplicate) {
    const card = document.createElement("article");
    card.className = "review-card";

    if (duplicate) {
      card.setAttribute("aria-hidden", "true");
    }

    const top = document.createElement("div");
    top.className = "review-card-top";

    const avatar = document.createElement("div");
    avatar.className = "review-avatar";
    avatar.textContent = review.name
      .split(" ")
      .map(part => part[0])
      .slice(0, 2)
      .join("");

    const person = document.createElement("div");
    person.className = "review-person";

    const name = document.createElement("h3");
    name.textContent = review.name;

    const city = document.createElement("span");
    city.textContent = review.city;

    person.append(name, city);
    top.append(avatar, person);

    const stars = document.createElement("div");
    stars.className = "review-stars";
    stars.setAttribute("aria-hidden", "true");
    stars.textContent = "★★★★★";

    const message = document.createElement("p");
    message.className = "review-message";
    message.textContent = review.message;

    card.append(top, stars, message);

    return card;
  }

  function createGroup(duplicate) {
    const group = document.createElement("div");
    group.className = "reviews-group";

    if (duplicate) {
      group.setAttribute("aria-hidden", "true");
    }

    reviews.forEach(function (review, index) {
      group.appendChild(createCard(review, index, duplicate));
    });

    return group;
  }

  track.replaceChildren(
    createGroup(false),
    createGroup(true)
  );

  console.log("30 review cards loaded in one continuous row.");
});

/* =========================
   CONTACT FORM - WEB3FORMS
========================= */

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) return;

  const submitButton = document.getElementById("contactSubmit");
  const statusMessage = document.getElementById("contactStatus");

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    statusMessage.textContent = "";
    statusMessage.className = "contact-status";

    const accessKey = contactForm.querySelector(
      'input[name="access_key"]'
    ).value.trim();

    if (
      !accessKey ||
      accessKey === "YOUR_WEB3FORMS_ACCESS_KEY"
    ) {
      statusMessage.textContent =
        "Please add your Web3Forms access key in the HTML first.";
      statusMessage.classList.add("error");
      return;
    }

    const originalButtonText = submitButton.innerHTML;

    submitButton.disabled = true;
    submitButton.textContent = "Sending Request...";

    try {
      const formData = new FormData(contactForm);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        statusMessage.textContent =
          "Your request has been sent successfully!";
        statusMessage.classList.add("success");

        contactForm.reset();
      } else {
        throw new Error(
          result.message || "Unable to send your request."
        );
      }
    } catch (error) {
      statusMessage.textContent =
        "Message could not be sent. Please check your access key and internet connection, then try again.";

      statusMessage.classList.add("error");
      console.error("Web3Forms error:", error);
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const footerYear = document.getElementById("footerYear");

  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
});
