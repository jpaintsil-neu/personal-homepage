const interests = {
  /**Jharshini: I like that you split each interest content into separate data objects */
  running: {
    title: "Running",
    image: "./images/interests/running.jpg",
    alt: "Runner moving along an outdoor track",
    description:
      "Track and cross country introduced me to a sport I still have a love-hate relationship with—and to the runner's high that keeps bringing me back.",
    media: [
      {
        image: "./images/interests/media/running/track.jpg",
        alt: "Running track representing track and field",
        title: "Track",
        subtitle: "Where It Started",
      },
      {
        image: "./images/interests/media/running/cross-country.jpg",
        alt: "Runner moving along a cross-country trail",
        title: "Cross Country",
        subtitle: "Endurance",
      },
      {
        image: "./images/interests/media/running/runners-high.jpg",
        alt: "Runner on an open road",
        title: "The Runner's High",
        subtitle: "Why I Keep Running",
      },
    ],
  },

  music: {
    title: "Music",
    image: "./images/interests/music.jpg",
    alt: "Vinyl records arranged beside a record player",
    description:
      "Michael Jackson, Lauryn Hill, and Nina Simone are among my favorite artists.",
    media: [
      {
        image: "./images/interests/media/music/michael-jackson.jpg",
        alt: "Photo representing Michael Jackson",
        title: "Michael Jackson",
        subtitle: "Artist",
      },
      {
        image: "./images/interests/media/music/lauryn-hill.jpg",
        alt: "Photo representing Lauryn Hill",
        title: "Lauryn Hill",
        subtitle: "Artist",
      },
      {
        image: "./images/interests/media/music/nina-simone.jpg",
        alt: "Photo representing Nina Simone",
        title: "Nina Simone",
        subtitle: "Artist",
      },
    ],
  },

  reading: {
    title: "Reading",
    image: "./images/interests/reading.jpg",
    alt: "Open book resting on a desk",
    description:
      "I enjoy Robert Greene's work as well as Alan Watts, particularly The Way of Zen.",
    media: [
      {
        image: "./images/interests/media/reading/48-laws-of-power.jpg",
        alt: "Cover of The 48 Laws of Power",
        title: "The 48 Laws of Power",
        subtitle: "Robert Greene",
      },
      {
        image: "./images/interests/media/reading/laws-of-human-nature.jpg",
        alt: "Cover of The Laws of Human Nature",
        title: "The Laws of Human Nature",
        subtitle: "Robert Greene",
      },
      {
        image: "./images/interests/media/reading/way-of-zen.jpg",
        alt: "Cover of The Way of Zen",
        title: "The Way of Zen",
        subtitle: "Alan Watts",
      },
    ],
  },

  movies: {
    title: "Movies + TV",
    image: "./images/interests/movies.jpg",
    alt: "Cinema auditorium facing a large movie screen",
    description:
      "Comedy and action are usually my first choices for movies, while current television favorites include Dark Matter, The Three-Body Problem, and House of the Dragon.",
    media: [
      {
        image: "./images/interests/media/movies/dark-matter.jpg",
        alt: "Poster for Dark Matter",
        title: "Dark Matter",
        subtitle: "Apple TV+",
      },
      {
        image: "./images/interests/media/movies/three-body-problem.jpg",
        alt: "Poster for The Three-Body Problem",
        title: "The Three-Body Problem",
        subtitle: "Netflix",
      },
      {
        image: "./images/interests/media/movies/house-of-the-dragon.jpg",
        alt: "Poster for House of the Dragon",
        title: "House of the Dragon",
        subtitle: "HBO",
      },
    ],
  },

  travel: {
    title: "Travel",
    image: "./images/interests/travel.jpg",
    alt: "Travel planning materials including a map, camera, and passport",
    description:
      "I enjoy discovering new places and cultures, with Tokyo, Casablanca, and Santiago among the destinations I would especially like to explore.",
    media: [],
  },

  technology: {
    title: "Technology",
    image: "./images/interests/technology.jpg",
    alt: "Laptop displaying programming code in a workspace",
    description:
      "I enjoy exploring coding, experimenting with new technical ideas, and learning how software works.",
    media: [
      {
        image: "./images/interests/media/technology/software-development.jpg",
        alt: "Laptop displaying source code",
        title: "Software Development",
        subtitle: "Building",
      },
      {
        image: "./images/interests/media/technology/cybersecurity.jpg",
        alt: "Cybersecurity monitoring interface",
        title: "Cybersecurity",
        subtitle: "Securing",
      },
      {
        image: "./images/interests/media/technology/automation.jpg",
        alt: "Terminal displaying an automation script",
        title: "Automation",
        subtitle: "Improving",
      },
    ],
  },
};

const destinations = {
  tokyo: {
    city: "Tokyo, Japan",
    description:
      "A destination that interests me for its mix of technology, design, history, food, and urban culture.",
  },

  casablanca: {
    city: "Casablanca, Morocco",
    description:
      "A destination that interests me for its architecture, coastal setting, cultural history, and connection between tradition and modern city life.",
  },

  santiago: {
    city: "Santiago, Chile",
    description:
      "A destination that interests me for its urban culture, surrounding mountain landscape, food, and opportunities to experience more of South America.",
  },
};

function initInterestSpotlight() {
  const interestButtons = document.querySelectorAll(".interest-selector");
  const spotlightImage = document.querySelector("#spotlight-image");
  const spotlightTitle = document.querySelector("#spotlight-title");
  const spotlightDescription = document.querySelector("#spotlight-description");
  const travelDestinations = document.querySelector("#travel-destinations");

  if (
    !interestButtons.length ||
    !spotlightImage ||
    !spotlightTitle ||
    !spotlightDescription ||
    !travelDestinations
  ) {
    return;
  }

  interestButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedInterest = interests[button.dataset.interest];

      if (!selectedInterest) {
        return;
      }

      spotlightImage.src = selectedInterest.image;
      spotlightImage.alt = selectedInterest.alt;
      spotlightTitle.textContent = selectedInterest.title;
      spotlightDescription.textContent = selectedInterest.description;

      renderInterestMedia(selectedInterest.media);

      travelDestinations.hidden = button.dataset.interest !== "travel";

      interestButtons.forEach((interestButton) => {
        const isSelected = interestButton === button;

        interestButton.classList.toggle("active", isSelected);
        interestButton.setAttribute("aria-pressed", String(isSelected));
      });
    });
  });

  renderInterestMedia(interests.running.media);

  initTravelDestinations();
}

function initTravelDestinations() {
  const travelButtons = document.querySelectorAll(".travel-destination-button");
  const travelSpotlight = document.querySelector("#travel-spotlight");

  if (!travelButtons.length || !travelSpotlight) {
    return;
  }

  const city = travelSpotlight.querySelector(".travel-city");
  const description = travelSpotlight.querySelector(".travel-description");

  travelButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const destination = destinations[button.dataset.destination];

      if (!destination) {
        return;
      }

      city.textContent = destination.city;
      description.textContent = destination.description;

      travelButtons.forEach((travelButton) => {
        const isSelected = travelButton === button;

        travelButton.classList.toggle("active", isSelected);
        travelButton.setAttribute("aria-pressed", String(isSelected));
      });
    });
  });
}

export { initInterestSpotlight };

function renderInterestMedia(mediaItems) {
  const interestMedia = document.querySelector("#interest-media");
  const interestMediaGrid = document.querySelector("#interest-media-grid");

  if (!interestMedia || !interestMediaGrid) {
    return;
  }

  if (!mediaItems || mediaItems.length === 0) {
    interestMedia.hidden = true;
    interestMediaGrid.innerHTML = "";
    return;
  }

  interestMedia.hidden = false;

  interestMediaGrid.innerHTML = mediaItems
    .map(
      (item) => `
        <article class="interest-media-card">
          <img
            src="${item.image}"
            alt="${item.alt}"
            loading="lazy"
            decoding="async"
          />
          <div class="interest-media-card-content">
            <h4>${item.title}</h4>
            <p>${item.subtitle}</p>
          </div>
        </article>
      `,
    )
    .join("");
}
