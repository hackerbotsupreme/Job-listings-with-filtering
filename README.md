# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Job listings with filtering solution](#frontend-mentor---job-listings-with-filtering-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Design](#design)
    - [Implementation](#implementation)
    - [Implementation Filter](#implementation-filter)
    - [Link](#link)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Design

![](./src/assets/design/desktop-design.jpg)

### Implementation

![](./src/assets/images/job.png)

### Implementation Filter

![](./src/assets/images/job-backend.png)


### Link

- Live Site URL: [live](https://jobs-listing.netlify.app)

## My process

- created my react app using vite
- configured eslint and prettier
- established my scss rules
- identified the components i may need then made room for them
- Declared  my layout which consists of my navigation and container
- Created a pages folder which will house the pages that can be viewed by the user
- cleared all my console logs
- Deployed to netlify after build
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Framer motion](https://www.framer.com/) - for animation
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

- I learnt how to use framer motion
- I learnt how to use custom handelers to add or filter out items
- I learnt how to configure eslint

To see how you can add code snippets, see below:

```html
<div>
  className={`${
        featured === true ? `${`${styles.JobS} ${styles.Jobs}`}` : styles.Jobs
      } `}
  <div>
```
```
```
```js
  filterJobs.forEach((e) => {
      const filtered = mappedJobs.filter((jobPosts) =>
        Object.keys(jobPosts).some((result) => {
          return jobPosts[result].toString().includes(e)
        })
      )
      setFinalMap(filtered)
    })
  }, [filterJobs, mappedJobs])
}
```

## Author

- Frontend Mentor - [@Ezeh20](https://www.frontendmentor.io/profile/Ezeh20)
- twitter - [@Cii_jay11000](https://twitter.com/Cii_jay11000)