// src/app/core/seo/seo.service.ts

import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoServiceService {
  private seoData: { [path: string]: { title: string; description: string; keywords: string } } = {
    '/': {
      title: 'Jindal Speciality Chemicals | Innovating Chemistry for a Better Tomorrow',
      description: 'Welcome to Jindal Speciality Chemicals, a leading manufacturer of fine chemicals serving agriculture, life sciences, pharmaceuticals, and industrial sectors.',
      keywords: 'speciality chemicals, chemical manufacturer India, fine chemicals, Jindal Chemicals, life sciences, industrial solvents',
    },
    '/about-us': {
      title: 'About Jindal Speciality Chemicals | Legacy, Vision & Growth',
      description: 'Discover the story of Jindal Speciality Chemicals – part of the Jindal Group with 3 decades of legacy in innovation, R&D, and sustainable chemical solutions.',
      keywords: 'Jindal Group, chemical company India, speciality chemical manufacturer, company history, Gujarat chemicals, innovation in chemistry',
    },
    '/vision-mission-values': {
      title: 'Our Vision, Mission & Values | Jindal Speciality Chemicals',
      description: 'Learn about our commitment to innovation, sustainability, and excellence that drives Jindal Speciality Chemicals toward enriching lives through chemistry.',
      keywords: 'chemical company values, sustainability vision, mission in chemicals, Jindal ethics, corporate values',
    },
    '/expertise': {
      title: 'Expertise in Chemical Manufacturing | Jindal Speciality Chemicals',
      description: 'Explore our advanced expertise in R&D, process development, and scalable manufacturing for speciality chemicals in diverse industrial domains.',
      keywords: 'chemical expertise, R&D chemicals, process innovation, fine chemicals development, chemical technology India',
    },
    '/applications': {
      title: 'Speciality Chemical Applications | Jindal Speciality Chemicals',
      description: 'Discover versatile applications of our speciality chemicals across agriculture, pharmaceuticals, dyes, food, rubber, and polymer industries.',
      keywords: 'chemical applications, agriculture chemicals, pharma intermediates, food-grade chemicals, industrial chemicals India',
    },
    '/products': {
      title: 'Our Product Range | Jindal Speciality Chemicals',
      description: 'View our portfolio of high-quality speciality and fine chemicals engineered for diverse applications in global markets.',
      keywords: 'speciality chemicals products, fine chemical supplier, industrial solvents, pharma intermediates, food chemicals',
    },
    '/sustainability': {
      title: 'Sustainability at Jindal Speciality Chemicals | Green Chemistry',
      description: 'Learn how we integrate sustainability, eco-friendly processes, and green chemistry to reduce carbon footprint and support communities.',
      keywords: 'sustainable chemical manufacturing, green chemistry, eco-friendly processes, CSR chemicals, low carbon footprint',
    },
    '/news': {
      title: 'News & Updates | Jindal Speciality Chemicals',
      description: 'Stay informed with the latest news, press releases, and events from Jindal Speciality Chemicals and the wider Jindal Group.',
      keywords: 'chemical industry news, Jindal updates, press releases chemicals, corporate news, speciality chemical events',
    },
    '/join-team': {
      title: 'Careers at Jindal Speciality Chemicals | Join Our Team',
      description: 'Explore career opportunities at Jindal Speciality Chemicals and become part of an innovation-driven and growth-focused team.',
      keywords: 'chemical careers India, jobs in chemical industry, work at Jindal, chemical R&D careers, Jindal employment',
    },
    '/life-at-jindal': {
      title: 'Careers at Jindal Speciality Chemicals | Join Our Team',
      description: 'Explore career opportunities at Jindal Speciality Chemicals and become part of an innovation-driven and growth-focused team.',
      keywords: 'chemical careers India, jobs in chemical industry, work at Jindal, chemical R&D careers, Jindal employment',
    },
    '/contact': {
      title: 'Contact Us | Jindal Speciality Chemicals',
      description: 'Get in touch with Jindal Speciality Chemicals. Reach out to our corporate or manufacturing units for inquiries, support, or partnerships.',
      keywords: 'contact Jindal Chemicals, chemical manufacturer Gujarat, inquiry chemical company, Ahmedabad chemicals, connect Jindal',
    },
  };

  constructor(private title: Title, private meta: Meta) { }

  updateMetaTags(path: string) {
    const seo = this.seoData[path];
    if (!seo) return;

    const fullUrl = 'https://www.jindalspecialitychemicals.com' + path;
    const imageUrl = 'https://www.jindalspecialitychemicals.com/assets/images/Jindal-speciality-chemicals-opengraph.png';

    // Basic Meta Tags
    this.title.setTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ name: 'keywords', content: seo.keywords });

    // Open Graph Meta
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: fullUrl });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ property: 'og:locale', content: 'en_US' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Jindal Speciality Chemicals' });

    // Twitter Card Meta
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
    this.meta.updateTag({ name: 'twitter:site', content: '@JindalChem' });
    this.meta.updateTag({ name: 'twitter:creator', content: '@JindalChem' });

    // Extra SEO
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Jindal Speciality Chemicals' });

    this.setCanonicalURL(fullUrl);
  }

  private setCanonicalURL(url: string): void {
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute('href', url);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
  }
}
