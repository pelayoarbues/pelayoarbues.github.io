---
author: "[[HuggyMonkey]]"
title: 'How To Gradio: Components — Image'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_691412/11RsFTq3PgFQnhEhdywrpcA.png)

## Metadata
- Author: [[HuggyMonkey]]
- Full Title: How To Gradio: Components — Image
- URL: https://medium.com/@HuggyMonkey/how-to-gradio-components-image-bb5e6a5b97d6

## Highlights
- Gradio’s Image Component
  Use the image component if you need to upload or display image data.
  **Image Input Component:**
  • Users can upload an image from a file, webcam, or clipboard.
  • The uploaded image data is passed to the linked Gradio interface/blocks function as the datatype `numpy.array`, `PIL.Image` or `str` file path depending on components `type=` parameter.
  **Image Output Component:**
  • Displays an image to the user.
  • Displayed image data should be returned by the Gradio interface/blocks function as the datatype `numpy.array`, `PIL.Image` or `str` or `pathlib.Path` file path to an image.
  **String Shortcut**: “image” ([View Highlight](https://read.readwise.io/read/01hyz3a9dnnpqnyfwvxngafxna))
- How To Use: The Gradio **Image Component As An Input Component**
  **Task:** Allow users to upload an image from a file, webcam, or clipboard.
  **Datatype passed to Python function:** `numpy.array`, `PIL.Image` or `str` file path.
  • The datatype used by the Image component can be controlled using the `type=` parameter.
  ![](https://miro.medium.com/v2/resize:fit:700/1*WfLgm1L1ciPjA5tMj_segA.png)
  Image adapted from [https://www.gradio.app/docs/image](https://www.gradio.app/docs/image)
  It’s important to remember that the default datatype used by the Gradio image component is `numpy.array.` This means that if you don’t set the datatype using the `type=`parameter, *Gradio will automatically pass your image data to the function as* `*numpy.array.*` ([View Highlight](https://read.readwise.io/read/01hyz3ah9xazvy7qzn692596cp))
- • **type=”pil”** `*PIL.Image*`
  ***“”pil” converts the image to a PIL image object”***
  import gradio as gr 
  def show_image(img): 
  print(type(img)) 
  return img 
  app = gr.Interface( 
  fn=show_image, 
  inputs=gr.Image(label="Input Image Component", type="pil"), # Set image componet's type= parameter to "pil" PIL.Image 
  outputs=gr.Image(label="Output Image Component"), 
  ) 
  app.launch()
  ![](https://miro.medium.com/v2/resize:fit:700/1*SIzx-KDFlRCITpMjcKBmRw.png)
  Image of print() result in Python Console
  In the above code snippet, the image input component’s `type=`parameter is set as “pil”. In this case, the image input component will always pass the image data to the Python function as a PIL.Image object. ([View Highlight](https://read.readwise.io/read/01hyz3bc5gv1899dgzx58g2cs6))
- • **type=”str”** `str`
  ***““filepath” passes a str path to a temporary file containing the image.”***
  import gradio as gr 
  def show_image(img): 
  print(type(img)) 
  print(img) 
  return img 
  app = gr.Interface( 
  fn=show_image, 
  inputs=gr.Image(label="Input Image Component", type="filepath"), # Set image componet's type= parameter to "filepath" str 
  outputs=gr.Image(label="Output Image Component"), 
  ) 
  app.launch() ([View Highlight](https://read.readwise.io/read/01hyz3bhwqyfq96b557hqfy0hr))
