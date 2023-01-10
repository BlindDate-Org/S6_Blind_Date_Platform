---
<h1 align="center"> Getting Started document </h1>
<h2 align="center"> Blind date </h2>
<h5 align="center"> Project Assignment by - <a href="https://fontys.nl">Fontys Pedagogy</a></h5>
---

### 👋🏽Introduction

Hello, future developers of `Blind date` !

Within this document you can find the documentation to get started with the project. We proudly designed and created this code-base and configurations for the project created for: `fontys pedagogy`.

In order to get started with the project, make sure you have installed the following tools and packages:

1. **Your preferred code IDE** (visual studio, visual studio code)
2. **Node Package Manager (NPM)**

You can see this project into 2 seperate parts, in which you have a front-end and a back-end code-bases. In order to get the latest version of the code-base of this project go over to the <a href="https://github.com/BlindDate-Org/S6_Blind_Date_Platform">GitHub organization</a> and download the zip file or clone it.

---

## GitHub setup

In order to assign everyone the right role within this project. We decided to assign two people as code owners of this project, these people are responsible for maintaining and managing the repository. And they are the `code-owners` of the GitHub repositoy.

In order to modify the code-owners file, simply go to the file called: `CODEOWNERS` and modify the following users names to the github name of your persons you want to assign to this role.

```md
# This is a comment.

# Each line is a file pattern followed by one or more owners.

# These owners will be the default owners for everything in

# the repo. Unless a later match takes precedence,

# @global-owner1 and @global-owner2 will be requested for

# review when someone opens a pull request.

-       @Luca-Bulles @markgoertz   <-- Modify this to the code-owners GitHub name.

# Order is important; the last matching pattern takes the most

# precedence. When someone opens a pull request that only

# modifies JS files, only @js-owner and not the global

# owner(s) will be requested for a review.

\*.js @zyhzsh <-- Modify this to the code-owners GitHub name to the person with in this case the most experience on javascript language files.
```

When this is not done or done properly, you can not be able to commit to the main-branch since the `main branch is protected.` This means that nobody can make commits directly into the main branch. And thus in order to make changes in the main-branch it needs to be done by pull-requests. And the code-owner need to approve your pull-request in order to make a merge possible.

So, an pull-request looks like this:

<div align=center>
    <img src="..\documentation\assets\pull-request.png"/>
</div>

In which there is a reviewer, an check on the written CI-pipeline jobs and code-owner reviewer who can approve the pull-request.

## Front end setup

​ This repository contains two front-end projects. Since the naming convention was not carefully desscussed when it was first created, you may be confused by the folder name.

​ Both projects are SPA (single page application) based on React.js framework.Where "**frontend**" is an app designed for visually impaired users. And "**fontend-sighted-user**" is for sighted users.

​ Unlike `npx create-react-app`, this time we use vite as the build tool. Therefore, it will be different from the traditional command line when developing.

**To Run local development **

```bash
npm run dev
```

**Preview your production build locally **

```bash
// Build production bundle
npm run build
// Run production preview on your local machine
npm run preview
```

**Run your test **

```bash
npm run test
```

## Backend setup

The back-end code is build with `C#` on the `.NET framework` which all microservices are currently built on. In order to set the microservices up and make it ready for the coding environment, you need to install the NuGet packages that are within the `.csproj file`.

There are currently two microservices that are available:

- **Backend** - _Microservice for the answer microservice._
- Backendquestions - _Microservice for the question microservice._

Due to plausible issues with the metafiles of renaming the file, we decided to remain this naming of these folders.

To give an indication on how we thought about the architecture, please consult the technical design document. In here the C4-model, technical choices, Entity Relation Diagram and more stuff are described in there.

<div align=center>
    <img src="..\documentation\assets\Project-structure.png"/>
</div>

We recommend you to use `Visual studio 2022` since this is used this throughout the whole project development. And it comes with docker command options.

## Database access.

We used `Azure cloud` as the cloud database for future development. It is hosted on the Fontys environment and thus does not require credits. In order to gain access please contact `Luca`, since he is the administator over this database.

Consult dilana for contact information of Luca since he wants to have his privacy of information.
