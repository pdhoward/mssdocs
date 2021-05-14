---
part: MSS
title: Settings & Customization
---

#### General Settings

Change configuration in `config/config.json` file to add your table of contents.

#### Advanced Settings

Use `.env.local.example` to keep sensitive configration data or keys by making a local copy with the name `.env.local` and customize content. 

!> Warning When Deploying
Keep in mind that the host you are planning to deploy the application must also support environment variables in order to use them. Most of them do.

#### Customizations

Here are customizable files/folders of the project:

```
components  -> Your components and state stores live here
config      -> Main configuration file lives here
content     -> All book/documentation markdown content goes here.
layouts     -> Layouts of your pages go here. Modify these if you want to completely change design.
pages       -> Standard Next.js pages folder. This app uses dynamic routes [part]/[page]. You can add as many pages as you want here.
public      -> Keep assets like images you reference in content files here.
styles      -> Some global style for screen and print. Change as you like.
```
