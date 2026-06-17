---
author: "[[Adrian Araya]]"
title: 'How to Use Multimodal Embeddings to Create Semantic Search Engines for Multimedia'
date: "2025-04-16"
tags:
  - "articles"
  - literature-note
---
![rw-book-cover](https://static.wixstatic.com/media/c53988_a91018b961384b2aa278b68131585de2~mv2.png/v1/fill/w_1000,h_520,al_c,q_90,usm_0.66_1.00_0.01/c53988_a91018b961384b2aa278b68131585de2~mv2.png)

## Metadata
- Author: [[Adrian Araya]]
- Full Title: How to Use Multimodal Embeddings to Create Semantic Search Engines for Multimedia
- URL: https://www.ridgerun.ai/post/how-to-use-multimodal-embeddings-to-create-semantic-search-engines-for-multimedia

## Highlights
- [back](https://www.ridgerun.ai/developer)
  How to Use Multimodal Embeddings to create Semantic Search Engines for Multimedia
  ![Writer: Adrian Araya](https://static.wixstatic.com/media/3e14fd_f3cda891f13e4cbd8076e4ecaaa9fa63%7Emv2.png/v1/fill/w_32,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3e14fd_f3cda891f13e4cbd8076e4ecaaa9fa63%7Emv2.png)Adrian Araya
  Aug 21, 20248 min read
  Updated: Nov 13, 2024
  ![semantic search engine sample](https://static.wixstatic.com/media/c53988_63cb8ebfc9744384be6585e79c0ebf3d~mv2.jpg/v1/fill/w_740,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c53988_63cb8ebfc9744384be6585e79c0ebf3d~mv2.jpg)
  Semantic Search
  As humans, we have an innate ability to understand the "meaning" or "concept" behind various forms of information. For instance, we know that the words "cat" and "feline" are closely related, whereas "cat" and "cat scan" refer to entirely different concepts. This understanding is rooted in semantics, the study of meaning in language. In the realm of artificial intelligence, researchers are striving to enable machines to operate with a similar level of semantic understanding.
  An embedding is a dense vector representation of data that retains semantic meaning. In the context of text, embeddings map words or phrases into a continuous vector space where semantically similar terms are positioned close to each other. This means that the embeddings of two similar words, like "cat" and "kitten," will be closer together in the vector space than the embeddings of two unrelated words, like "cat" and "spaceship". Embeddings also allow us to perform "arithmetic" on semantics, which computers excel at. For instance, by using embeddings, we can perform operations like "king" - "man" + "woman" to get a result close to "queen." Similarly, "kid" + "time" might yield a vector close to "adult," or "cow" - "female" + "male" would approximate "bull."
  ![Sample image of words embeddings](https://static.wixstatic.com/media/c53988_15fec40bdd764809a5b8069b36e00f73~mv2.webp/v1/fill/w_279,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c53988_15fec40bdd764809a5b8069b36e00f73~mv2.webp)
  Example of words embeddings ([taken from medium](https://medium.com/@krithiqkrish/from-words-to-vectors-decoding-the-intuition-behind-word-embedding-5a4f83fbf920)).
  Multimodal Embeddings
  Embeddings were initially thought for text, but recently, new advances in artificial intelligence have made it possible to work with information of different modalities under a single, compatible mathematical representation. In this project, we refer to a **modality** as a way information is represented. Among the most typical modalities, we can mention audio, text, image, or video. However, modalities can also be more exotic, such as depth information, heat maps, inertia measurements, and more. This mathematical representation is typically known as an **embedding**. Many research efforts are focused on allowing machines to operate using semantics, bridging the gap between human-like understanding and machine processing.
  For example, in the image below, the embeddings are computed for an image, a document and audio file. These can be interpreted as points in a coordinate system. As such, we can perform operations over it, such as grouping nearby points, computing the distance between two points, and so on.
  ![Sample image of multimodal embeddings](https://static.wixstatic.com/media/c53988_d6f312ad739c4c43abf85419993916b7~mv2.png/v1/fill/w_536,h_245,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c53988_d6f312ad739c4c43abf85419993916b7~mv2.png)
  Example of multimodal embeddings (taken from [qdrant](https://qdrant.tech/articles/what-are-embeddings/)).
  Until recently, embeddings were mostly **uni-modal**. This means that we had models that generated embeddings for images, other models for audio, other models for text, and so forth. Text was the most common modality by far. Examples include [Word2Vect](https://www.cambridge.org/core/journals/natural-language-engineering/article/word2vec/B84AE4446BD47F48847B4904F0B36E0B), [Glove](https://aclanthology.org/D14-1162.pdf) and [SBERT](https://ieeexplore.ieee.org/abstract/document/9140343).
  Later came **bi-modal** models, for example: [CLIP](https://arxiv.org/abs/2103.00020), [ALIGN](https://arxiv.org/abs/2102.05918) and [Florence](https://arxiv.org/abs/2111.11432), which were designed for producing embeddings for text and image. These embeddings, even though came from different modalities, could be used together to perform calculations.
  In the past few years, **multi-modal** architectures have been released, with Meta's [ImageBind](https://arxiv.org/pdf/2305.05665.pdf) the most prominent example. ImageBind is capable of producing embeddings for six different modalities:
  • Vision (Image/Video)
  • Audio
  • Heatmap
  • Depth
  • IMU (Inertial Measurement Unit)
  • Text
  This is groundbreaking because it means that now a picture, an audio clip, a paragraph or an IMU measurement can be treated as points in a vectorial space. A picture of a cat will be close to the sound of a purring. A text describing a car crash will be close to a measurement of a sudden, violent stop. Muli-modal embeddings allow us to perform integrated analysis from multiple sensors simultaneously.
  In this context, embeddings offer a powerful way to enhance search capabilities. By converting data into dense vector representations, embeddings enable semantic search by measuring the distance ([similarity](https://medium.com/@sudhiryelikar/understanding-similarity-or-semantic-search-and-vector-databases-5f9a5ba98acb)) between the query embedding and the database embeddings. The results with the smallest distances are considered the most relevant matches to the search term.
  Designing a Multimodal Semantic Search Engine
  We gave ourselves the task to develop a system that, given a textual query from the user, will look for similarities in one or more video files, in any of their modalities. For example, given the phrase "black cat", the system may return:
  • Time segment of a movie where a black cat crosses by.
  • Time segment of a movie where a cat meows in the audio.
  • Time segment of a movie where there is a conversation about cats.
  • Time segment of a movie where there is a poster in the street with some text about a cat.
  The overall design of our search engine looks like the image below, where each module does the following:
  • **Crawler:** Finds the video files that are located in the directory specified by the user.
  • **Movie Processor:** Extract all data (frames, audio clips, subtitles) from video files.
  • **Audio Transcriber:** Extract audio transcription from video.
  • **OCR:** Extract the text that has the embedded video using Optical Character Recognition.
  • **Text/Audio/Image embedders:** Generates the embeddings for each modality and stores them in a database.
  • **Vector Store:** Database specialized in embeddings storing, allows calculating the distance between vectors.
  • **Vector search:** Generates the embedding of the search term and calculates the distance against all the embeddings in the database then selects the results and returns them.
  ![ Search engine architecture diagram.](https://static.wixstatic.com/media/c53988_1a04a68d3eb14662a281da66610ab9d6~mv2.png/v1/fill/w_691,h_522,al_c,q_90,enc_avif,quality_auto/c53988_1a04a68d3eb14662a281da66610ab9d6~mv2.png)
  Search engine architecture diagram.
  The system operates in two modes (see the image below):
  • Caching: periodically, all the files in a directory will be processed and their embeddings will be stored for their future usage.
  • Searching: the user query will be compared against all the cached embeddings and the closest results will be returned. ([View Highlight](https://read.readwise.io/read/01jp5fqg6evtdszqbsvjd9yk10))
- Embedding Generation and Caching
  To generate embeddings of the different modalities, the following steps were followed:
  **Define Parameters:**
  • The user sets configurable parameters (**Window Size**, **Overlap Size**) or defaults are used. **Window size** refers to the length of each segment. It determines the temporal resolution and affects how well the segment features represent the data. **Overlap size** is the portion by which consecutive windows overlap each other. Using overlap is necessary to ensure smooth transitions between segments (see the image below), providing redundancy and robustness to the feature extraction process (Overlap size parameter does not apply to frame extraction).
  ![Sample image of segment overlaping ](https://static.wixstatic.com/media/c53988_6514009a7e004a8884b2e0adde63d4bf~mv2.png/v1/fill/w_740,h_186,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c53988_6514009a7e004a8884b2e0adde63d4bf~mv2.png) ([View Highlight](https://read.readwise.io/read/01jp5fst6d25eemtbph4pbcf6v))
- **Extract Data:**
  • Extract data (frame, audio clip, text) from the source (image, audio, subtitles, transcription or OCR) according to the Window Size and Overlap Size.
  **Generate Representation:**
  • For each extracted data, generate its vector representation (image) or waveform (audio). The text does not require transformation.
  **Generate Embedding:**
  • Use ImageBind to generate embeddings from the image vector representation, audio waveform or text.
  **Store Embedding:**
  • Store the generated embedding in the database along with metadata (path file, time, embedding). ([View Highlight](https://read.readwise.io/read/01jp5fsxyngen1mfcx1snnc6ew))
- When it comes to storing and managing data from processed files and their embeddings, we use the powerful [ChromaDB](https://www.trychroma.com/) library. This open-source vector store is perfect for retrieving vector embeddings, making it ideal for our needs. Here’s how we make it work for us:
  **Storing and Retrieving Processed Files**
  We use ChromaDB to keep track of our processed files with the following structure:
  {
  "file": "path/to/file",
  "hash": "md5hash",
  "processing_params": {"video_window_size": 1000, ...}
  } ([View Highlight](https://read.readwise.io/read/01jp5ft764ekna1mxtbsxdvzx7))
- **What we achieve with this:**
  • **File Existence Check:** We check if the file is already in our database using the *file* field.
  • **Modification Check:** If the file exists, we determine if it has been modified by checking the *hash* field.
  • P**arameter Change Check:** If the file exists and hasn’t been modified, we see if its processing parameters have changed using the *processing_params* field. ([View Highlight](https://read.readwise.io/read/01jp5ftb1smn6vthf4r6yesz58))
- Distance Based Search
  The search is based on the [cosine distance](https://spencerporter2.medium.com/understanding-cosine-similarity-and-word-embeddings-dbf19362a3c) metric between the input embedding and the embeddings stored in the database. The returned results are those with a distance equal to or less than the threshold defined for each modality.
  To decide if the search resulted in a match, we define a threshold value for each modality. If the distance between the query and the clip is below the threshold, then it is considered a hit. The procedure used to calculate the optimal threshold for each modality (vision, audio, subtitles/transcription, and OCR) is explained below. **Note**: In the application, each threshold is a modifiable parameter; this calculation only corresponds to the default and recommended value (the value with the most hits). ([View Highlight](https://read.readwise.io/read/01jp5ftqbzfgx04gcr0f8256cv))
- To determine the ideal threshold for each modality, we used the [ROC curve](https://www.ridgerun.ai/post/demystifying-roc-curves-understanding-performance-metrics-for-ai-classification-models). To create the ROC curve we manually annotated a video in every modality and then ran the system at different cutoff threshold values and plotted TPR (true positive rate) against FPR (false positive rate) using [sklearn](https://scikit-learn.org/). We choose the ideal threshold by selecting a good balance between true positives and false positives, with a preference for recall. In the context of this project, it is more important to maximize the number of true positives, even if it means accepting some false positives, as false positives are not critical in this context. Our goal is to ensure that we capture all true positives. ([View Highlight](https://read.readwise.io/read/01jp5ftzg9gfmpmmvbq5xpvjpv))
- The image below shows the ROC graph from which the threshold was obtained for each modality (marked with a black cross) and the next three images show each extracted data (image, audio or text) vs the distance (between the embedding of the data and the embedding of the search term), the hits/matches are marked with black dots and also shows a red line that represents the selected threshold.
  ![ROC curves used for threshold calculation.](https://static.wixstatic.com/media/c53988_41aa8d427b2c4609ba64d7aa935c70fb~mv2.png/v1/fill/w_740,h_233,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c53988_41aa8d427b2c4609ba64d7aa935c70fb~mv2.png) ([View Highlight](https://read.readwise.io/read/01jp5fv402ykzcnjfe1hwvgx7h))
- Search operation
  • The first parameter on this screen is **"path to cache"** and its function is to specify the directory where the processing data is stored to load it.
  • The second parameter **"Choose results modalities"** allows you to filter the results by modality.
  • The third parameter **"Configure modalities thresholds"** allows you to adjust the thresholds for each modality.
  • And the last parameter is a text input field to insert the search phrase.
  Below, the image shows the demo user interface to modify the parameters of the search operation. This screen also shows the results obtained. ([View Highlight](https://read.readwise.io/read/01jp5fvc9gq9nrnpm6nfgvtgem))
