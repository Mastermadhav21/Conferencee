import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  protected readonly team = [
    {
  name: 'Requirement Analysis',
  image: '/assets/images/Requirements_ analysis_stage.jpg',
  bio: 'We understand your business objectives, gather requirements, and define the project scope to build the right solution.'
},
{
  name: 'Planning & UI/UX Design',
  image: '/assets/images/ux.jpg',
  bio: 'Our team prepares wireframes, user flows, and modern UI/UX designs to ensure an engaging user experience.'
},
{
  name: 'Development',
  image: '/assets/images/development.jpg',
  bio: 'We build secure, scalable, and high-performance web and mobile applications using modern technologies.'
},
{
  name: 'Testing & Quality Assurance',
  image: '/assets/images/Testing.jpg',
  bio: 'Every feature undergoes rigorous testing to ensure functionality, security, responsiveness, and performance.'
},
{
  name: 'Deployment',
  image: '/assets/images/Deployment.jpg',
  bio: 'After successful testing, we deploy the application securely with performance optimization and monitoring'
},
{
  name: 'Technical Support',
  image: '/assets/images/Technical.jpg',
  bio: 'Our support team assists with troubleshooting, user queries, and technical guidance to ensure uninterrupted operations.'
},
{
  name: 'Maintenance & Updates',
  image: '/assets/images/aintenance.jpg',
  bio: 'We provide regular maintenance, security patches, performance optimization, and feature enhancements to keep your solution up to date.'
}
  ];

  protected readonly techList = [
    {
      title: 'Cloud Infrastructure Solutions',
      desc: 'Scalable, secure, and high-performance cloud deployment with AWS, Azure, and Google Cloud integration.',
      icon: 'bi bi-cloud'
    },
    {
      title: 'Custom Web Development',
      desc: 'Responsive, high-performance websites and web applications tailored to your business requirements.',
      icon: 'bi bi-code-slash'
    },
    {
  title: 'UI/UX Design',
  desc: 'Modern, intuitive, and user-focused interfaces that enhance engagement and improve customer satisfaction.',
  icon: 'bi bi-palette'
},
{
  title: 'Cybersecurity Services',
  desc: 'Protect your business with advanced security assessments, vulnerability testing, and data protection.',
  icon: 'bi bi-shield-lock'
},
{
  title: 'DevOps & Automation',
  desc: 'Accelerate software delivery with CI/CD pipelines, infrastructure automation, and containerized deployments.',
  icon: 'bi bi-gear-wide-connected'
},
{
  title: 'Cloud Migration',
  desc: 'Seamlessly migrate applications, databases, and workloads to the cloud with minimal downtime.',
  icon: 'bi bi-cloud-upload'
},
  ];

  protected readonly testimonials = [
    {
  name: 'Michael Carter',
  issue: 'Web Development Client',
  text: 'MG Digital Solutions delivered a modern, high-performing website that exceeded our expectations. Their team was professional, responsive, and committed throughout the project.',
  stars: 5
},
{
  name: 'Sophia Williams',
  issue: 'Cloud Migration Project',
  text: 'The cloud migration process was seamless and completed with zero downtime. Their technical expertise and support were outstanding from start to finish.',
  stars: 5
},
{
  name: 'James Anderson',
  issue: 'Mobile App Development',
  text: 'Our mobile application was delivered on time with an intuitive design and exceptional performance. We highly recommend MG Digital Solutions.',
  stars: 5
},
{
  name: 'Emma Johnson',
  issue: 'UI/UX Design',
  text: 'The redesigned user interface significantly improved customer engagement. Their designers understood our vision and brought it to life beautifully.',
  stars: 5
},
{
  name: 'Daniel Brown',
  issue: 'AI Automation Solution',
  text: 'The AI-powered automation solution streamlined our workflow and increased productivity. Their innovative approach truly transformed our business operations.',
  stars: 5
},
{
  name: 'Olivia Martinez',
  issue: 'Digital Transformation',
  text: 'MG Digital Solutions modernized our digital infrastructure with exceptional quality and continuous support. Working with their team was an excellent experience.',
  stars: 4
}
  ];
}
