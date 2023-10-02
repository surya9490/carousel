# Carousel Component

A simple and customizable carousel component with options for looping and dragging.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [Options](#options)
- [License](#license)

## Demo

You can view a live demo of the carousel [here](#insert-demo-url).

## Features

- Responsive carousel with smooth transitions.
- Supports both manual navigation (previous and next buttons) and dragging.
- Customizable options for looping and drag functionality.
- Random background colors for carousel items.
- Easily integrateable into your web projects.

## Getting Started

To get started with this carousel component, you can follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/yourusername/your-carousel-repo.git



1.Include the required HTML and CSS files in your project:
<link rel="stylesheet" href="carousel.css" />
<script src="carousel.js"></script>

2.Initialize the carousel with your desired options:
initializeCarousel({
  carouselSelector: "[data-carousel]",
  containerSelector: ".carousel-container",
  prevButtonSelector: ".prev-button",
  nextButtonSelector: ".next-button",
  loop: true, // Enable looping
  drag: true, // Enable dragging
});

3.Customize the carousel by modifying the CSS and JavaScript as needed.




## Options
The carousel component supports the following options:

carouselSelector (string, required): The selector for the carousel container.

containerSelector (string, required): The selector for the container of carousel items.

prevButtonSelector (string, required): The selector for the previous button.

nextButtonSelector (string, required): The selector for the next button.

loop (boolean, optional, default: true): Enable or disable looping through carousel items.

drag (boolean, optional, default: true): Enable or disable dragging to navigate between items.

