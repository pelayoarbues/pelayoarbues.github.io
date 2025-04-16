---
author: [[Umberto Grando]]
title: 'Stable Diffusion Ultimate Guide Pt. 7: Tips and Tricks'
date: 2025-04-16
tags: 
- articles
- literature-note
---
![rw-book-cover](https://miro.medium.com/v2/resize:fit:1200/1*zV-JIbliUh-TWHqxa-qcTA.png)

## Metadata
- Author: [[Umberto Grando]]
- Full Title: Stable Diffusion Ultimate Guide Pt. 7: Tips and Tricks
- URL: https://medium.com/@inzaniak/stable-diffusion-ultimate-guide-pt-7-tips-and-tricks-e2b299a70421

## Highlights
- One of the most overlooked features for a beginner when Inpainting is the “Only Masked” checkbox. This option change how the Inpainting process works:
  • **Whole Picture**: This means that the input of the inpainting process will be the whole picture, while the output will be the original picture with the replaced inpainted part
  • **Only Masked**: This means that the input of the inpainting process will be only the masked area (with some padding). By doing this the masked area will be upscaled to match the resolution defined inside the UI, then it will diffuse the inpainted area, and finally it will place back the generated picture inside the original one.
  Using the “Only Masked” checkbox is really useful when adding details to a high resolution picture. For example, here’s a face generated from img2img using a resolution of 768x1152:
  ![](https://miro.medium.com/v2/resize:fit:336/1*9bXCHDlP0oDnl52L1VhRuQ.png)
  And here’s the same resolution output but inpainted using the “Only Masked” option (512x768):
  ![](https://miro.medium.com/v2/resize:fit:327/1*lb2ozffA8HKthCydzXQgDA.png)
  As you can see, the difference is incredible! ([View Highlight](https://read.readwise.io/read/01hbng8p5v5kbde40aj4kctdvm))
- Enlarge the mask when inpainting small details (Only Masked) ([View Highlight](https://read.readwise.io/read/01hbnyrk49dwb1zyy9emnmp2mm))
