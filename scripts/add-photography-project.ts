import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const project = await prisma.project.create({
    data: {
      title: "My Photography Site",
      slug: "my-photography-site",
      description: "A personal photography website showcasing my mock portfolio while demonstrating my coding skills. Features a clean, user-friendly design with an interactive gallery and contact form.",
      content: `## About the Project
This website is designed to display my photography portfolio in a clean and user-friendly manner. It includes a gallery section, contact form, and responsive design to ensure optimal viewing on various devices.

## Features
- Responsive design for seamless viewing on desktops, tablets, and mobile devices (currently working on this)
- Interactive gallery showcasing selected photographs
- Contact form for inquiries and feedback
- Custom favicon for brand identity

## Pages
- **Home** - Introduction and photography story
- **Gallery** - Showcase of photography work
- **Contact** - Contact form for inquiries`,
      features: [
        "Responsive design for all devices",
        "Interactive photo gallery",
        "Contact form integration",
        "Custom branding with favicon"
      ],
      category: "WEB_DEVELOPMENT",
      tags: ["HTML", "CSS", "Photography", "Portfolio", "Responsive Design"],
      techStack: ["HTML5", "CSS3"],
      githubUrl: "https://github.com/kashik09/my-photography-site",
      liveUrl: "https://kashik09.github.io/my-photography-site/",
      published: true,
      featured: false,
    },
  });

  console.log('✅ Project created successfully:', project.title);
  console.log('📍 Slug:', project.slug);
  console.log('🔗 Live URL:', project.liveUrl);
}

main()
  .catch((e) => {
    console.error('❌ Error creating project:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
