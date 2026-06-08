---
author: "[[Sushovan Saha]]"
title: 'YOLOv8.1 on Custom Dataset — Logo Detection'
date: "2026-05-26"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://miro.medium.com/v2/resize:fit:1400/1*x4eteo0X9VqrLEHAYyCX8Q.jpeg)

## Metadata
- Author: [[Sushovan Saha]]
- Full Title: YOLOv8.1 on Custom Dataset — Logo Detection
- URL: https://medium.com/@sushovansaha95/yolov8-1-on-custom-dataset-logo-detection-8915286999ef

## Highlights
- **Main challenge while training YOLO with custom dataset is *preparing the dataset***. Here we will be using [**Flickr27**](http://image.ntua.gr/iva/datasets/flickr_logos/) as our image dataset which contains 27 different brand logos. We have to download and unzip this. Folder contains **annotations.txt** which consists of -
  Press enter or click to view image in full size
  ![](https://miro.medium.com/v2/resize:fit:700/1*BA7ugX3NzC9AZqV5ZIEgbw.png) ([View Highlight](https://read.readwise.io/read/01ksg8hz3free197thc5fvsxm4))
- For Ex — there is an image inside *images* folder ***img001.jpg*** and all its ***class, x-norm,y-norm,width-norm and height-norm*** will be stored in space separated manner inside *labels* folder in ***img001.txt*** file. So if we have n images inside images folder then we will also have n .txt files inside labels folder.
  Press enter or click to view image in full size
  ![](https://miro.medium.com/v2/resize:fit:373/1*EVEm7EEXl730TIUovLVOVg.png) ([View Highlight](https://read.readwise.io/read/01ksg8hfq7ec0vg9v3ej57m45c))
- Now our dataset is prepared in desired format. Now we split the dataset in train and val set. Now YOLO training module accepts *train and val* folder path in **.yaml** file along with that we provide the total no. of classes and class names. structure of the .yaml file - ([View Highlight](https://read.readwise.io/read/01ksg8j7y1xffbgb0ywza94xm3))
