// Fetch the YAML data
fetch("config.yaml")
  .then((response) => response.text())
  .then((yamlData) => {
    const data = jsyaml.load(yamlData);

    // Render the logo
    const logoHTML = `
      <a href="#"><img src="${data.logo}" alt="Logo" class="logo"></a>
    `;
    document.querySelector(".logo-container").innerHTML = logoHTML;

    // Render the navigation links
    const navLinksHTML = data.steps
      .map((step, index) => {
        return `<li><a href="#step-${index + 1}">${step.title}</a></li>`;
      })
      .join("");
    document.querySelector(".nav-links").innerHTML = navLinksHTML;

    // Render the main content
    const mainHTML = `
      <section>
        <div class="content-container">
          <h1 class="title centered" data-aos="fade-up">${data.title}</h1>
          <div class="description-box centered" data-aos="fade-up">
            <p class="description">${data.description}</p>
          </div>
        </div>
      </section>

      ${data.steps
        .map(
          (step, index) => `
            <section id="step-${index + 1}" style="background-image: url('${
            step.image
          }'); background-color: rgba(255, 255, 255, 0.5);">
              <div class="process fade-up" data-aos="fade-up">
                <h2>${step.title}</h2>
                <p class="slide-left">${step.description}</p>
                <ul class="slide-left">
                ${
                  step.substeps
                    ? step.substeps
                        .map(
                          (substep, subIndex) => `
                            <li data-aos="fade-up" data-aos-delay="${
                              index * 100 + subIndex * 50
                            }">
                              <img src="${substep.image}" alt="${
                            substep.title
                          }">
                              <h3>${substep.title}</h3>
                              <p>${substep.description}</p>
                            </li>
                          `
                        )
                        .join("")
                    : ""
                }
                </ul>
              </div>
            </section>
          `
        )
        .join("")}
    `;
    document.querySelector("main").innerHTML = mainHTML;

    // Initialize AOS
    AOS.init({
      once: true,
    });

    window.addEventListener("scroll", function () {
      const slideLeftElements = document.querySelectorAll(".slide-left");
      const fadeUpElements = document.querySelectorAll(".fade-up");

      slideLeftElements.forEach(function (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      });

      fadeUpElements.forEach(function (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      });
    });

    // Background image transition
    const sections = document.querySelectorAll("section");
    let currentSection = 1; // Start from the second section

    // Set the background image of the second section
    sections[1].style.backgroundImage = `url('${data.steps[0].image}')`;
    sections[1].style.backgroundSize = "cover";
    sections[1].style.backgroundPosition = "center";

    window.addEventListener("scroll", function () {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 2;
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          index !== 0 // Exclude the first section
        ) {
          currentSection = index;
          section.style.backgroundImage = `url('${
            data.steps[index - 1].image
          }')`;
          section.style.backgroundSize = "cover";
          section.style.backgroundPosition = "center";
          section.style.transition = "background-image 0.5s ease";
        }
      });

      // Show footer only at the bottom of the scroll
      const footer = document.querySelector("footer");
      if (scrollPosition >= documentHeight - windowHeight) {
        footer.style.display = "block";
      } else {
        footer.style.display = "none";
      }
    });

    // Render the footer
    const footerHTML = `
      <p>${data.footer.contact}</p>
      <div>
        ${data.footer.social
          .map(
            (social) => `
              <a href="${social.link}" target="_blank">${social.name}</a>
            `
          )
          .join("")}
      </div>
    `;
    document.querySelector("footer").innerHTML = footerHTML;
    document.querySelector("footer").style.display = "none"; // Initially hide the footer
  })
  .catch((error) => console.error("Error fetching YAML data:", error));
