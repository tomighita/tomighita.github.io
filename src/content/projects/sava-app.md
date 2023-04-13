---
title: Pacients Management Application
description: An application used by "Sfantul Sava" hospital for internal management of their data, aimed to improve their worflow efficiency.
tags: [Spring Boot, Thymeleaf, PostgreSQL, AlpineJS, Htmx, TailwindCSS]
images: [
    {
        src: '/images/sava-app/ss-1.png',
        alt: 'First screenshot'
    },
    {
        src: '/images/sava-app/ss-2.png',
        alt: 'Second screenshot'
    },
    {
        src: '/images/sava-app/ss-3.png',
        alt: 'Third screenshot'
    },
    {
        src: '/images/sava-app/ss-4.png',
        alt: 'Fourth screenshot'
    },
    {
        src: '/images/sava-app/ss-5.png',
        alt: 'Fifth screenshot'
    },
]
---

### Project description
The main functionalty is centered arround patients' data, by providing features like monitoring the currently active patients, changing their diagnosis and medical recommendations, providing patients' history at ["Sfantul Sava"](https://spitalulsfantulsava.ro), change treatments and many more.

Besides this, the application is also used for stock management, to a certain degree, for things like administration of patients' treatement, usage of medical supplies or various other requirements. As such, a reporting feature is also available, allowing the management staff to generate different invoices or overall usage within a given time span.

#### Tech stack
This is the second iteration of the application, which is built using Spring Boot w/ Spring Security, Thymeleaf for templating, AlpineJs and Htmx for frontend interactions, DaisyUI and Tailwind for styling. Some pictures of the current application can be seen below. For generating reports, I have decided to use the Apache POI and PDFBox. In terms of the database, I have decided to go with PostgreSQL.
