import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1. Akan Name Generator (Featured)
  const akanProject = await prisma.project.create({
    data: {
      title: "Akan Name Generator",
      slug: "akan-name-generator",
      description: "Discover your Akan name! This web application calculates the day of the week you were born based on your date of birth and assigns you an Akan name according to Ghanaian naming traditions.",
      content: `## Overview

The Akan Name Generator is a simple, user-friendly web application that celebrates Ghanaian culture while providing users a fun way to explore their potential Akan name.

## How It Works

- Calculates the day of the week you were born based on the date you provide
- Assigns you a traditional Akan name from Ghana based on your gender and birth day

## Features

- **Date Input**: Use a calendar to select your birthdate in a clear dd/mm/yyyy format
- **Gender Selection**: Choose your gender from a dropdown menu for personalized naming
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop users
- **Cultural Insight**: Learn about Akan naming traditions through the app

## Usage

1. Open the app in your browser
2. Enter your date of birth using the calendar picker
3. Select your gender from the dropdown menu
4. Click the "Find My Akan Name" button
5. Your Akan name will be displayed below the form`,
      features: [
        "Date input with calendar picker",
        "Gender selection dropdown",
        "Responsive design for all devices",
        "Cultural insight into Akan naming traditions",
        "Day of the week calculation algorithm"
      ],
      category: "WEB_DEVELOPMENT",
      tags: ["HTML", "CSS", "JavaScript", "Cultural", "Interactive", "Responsive Design"],
      techStack: ["HTML5", "CSS3", "JavaScript (ES6)"],
      githubUrl: "https://github.com/kashik09/akan-name-generator",
      liveUrl: "https://kashik09.github.io/AkanNameGenerator/",
      published: true,
      featured: true,
    },
  });

  console.log('✅ Project 1 created:', akanProject.title);

  // 2. CreativeAds Agency (Featured)
  const creativeAdsProject = await prisma.project.create({
    data: {
      title: "Mock CreativeAds Agency",
      slug: "creativeads-agency",
      description: "A mock website for a creative ads agency showcasing web development skills with a user-friendly design, fast performance, and professional layout. Demonstrates ability to create business-focused websites.",
      content: `## Overview

This is a mock website for a creative ads agency called CreativeAds Agency, showcasing professional web development capabilities and design skills.

## Features

- **User-Friendly Design**: Intuitive and responsive layout that guides visitors seamlessly
- **Fast Performance**: Optimized for quick load times and smooth user experience
- **Professional Structure**: Multi-page website with homepage, about page, and contact page
- **Hosted on GitHub Pages**: Free and accessible hosting solution

## Project Structure

The website includes:
- Homepage: Main landing page for the ad agency
- About Page: Information about the agency
- Contact Page: Contact form and agency details

## Deployment

This website is deployed using GitHub Pages, with updates automatically reflected on the live site.`,
      features: [
        "Multi-page website structure",
        "User-friendly and intuitive design",
        "Fast load times and performance optimization",
        "Responsive layout for all devices",
        "Professional business presentation"
      ],
      category: "WEB_DEVELOPMENT",
      tags: ["HTML", "CSS", "Business Website", "Mock Project", "GitHub Pages"],
      techStack: ["HTML5", "CSS3"],
      githubUrl: "https://github.com/kashik09/CreativeAds-Agency",
      liveUrl: "https://kashik09.github.io/CreativeAds-Agency/",
      published: true,
      featured: true,
    },
  });

  console.log('✅ Project 2 created:', creativeAdsProject.title);

  // 3. Shopkeeper Calculator (Not Featured)
  const shopkeeperProject = await prisma.project.create({
    data: {
      title: "Shopkeeper Calculator",
      slug: "shopkeeper-calculator",
      description: "A beautiful, interactive web app that helps shopkeepers calculate discounts, profits, and losses instantly. Built with vanilla HTML, CSS, and JavaScript featuring real-time calculations and profit/loss analysis.",
      content: `## Overview

A beautiful, interactive web app designed to help shopkeepers make quick financial calculations for their business operations.

## How It Works

### Discount Calculation
- Enter your item name, cost price, and discount percentage
- The app calculates:
  - Discount amount: costPrice × (discount / 100)
  - Final price after discount: costPrice - discountAmount

### Profit/Loss Analysis
- Enter your selling price
- The app determines:
  - **Profit**: When sellingPrice > costPrice
  - **Loss**: When sellingPrice < costPrice
  - **Break-even**: When sellingPrice = costPrice

### Test Scenarios
- Try different selling prices without changing your main calculation
- See instant results with percentage gains or losses

## Features

- **Real-time Calculations**: Instantly calculate discount amounts and final prices
- **Profit/Loss Analysis**: Automatically determines if you're making profit, loss, or breaking even
- **Scenario Testing**: Test different selling prices to optimize your pricing strategy
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Clean UI**: Modern, gradient-based design with smooth animations

## Technologies

Built with vanilla JavaScript, CSS Grid, Flexbox, and CSS Variables for a modern, maintainable codebase.`,
      features: [
        "Real-time discount calculations",
        "Profit and loss analysis",
        "Scenario testing functionality",
        "Responsive design for all devices",
        "Modern gradient-based UI",
        "Smooth animations"
      ],
      category: "WEB_DEVELOPMENT",
      tags: ["HTML", "CSS", "JavaScript", "Calculator", "Business Tool", "Responsive Design"],
      techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "CSS Grid", "Flexbox"],
      githubUrl: "https://github.com/kashik09/shopkeeper-calc",
      liveUrl: "https://shopkeeper-calc.vercel.app",
      published: true,
      featured: false,
    },
  });

  console.log('✅ Project 3 created:', shopkeeperProject.title);

  console.log('\n🎉 All projects added successfully!');
  console.log('📊 Summary:');
  console.log('  - Featured projects: 2');
  console.log('  - Regular projects: 1');
}

main()
  .catch((e) => {
    console.error('❌ Error creating projects:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
