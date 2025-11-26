---
title: "Notes on building an LLM from scratch"
author: ["Darrell Banks"]
date: 2025-05-21T00:00:00-06:00
lastmod: 2025-11-26T00:00:00-07:00
tags: ["notes"]
draft: false
---

:ID:       F29CBBCE-BF32-4A7F-A576-A3DA674F540A

**Connections**: [AI]({{< relref "../categories/ai.md" >}})


## Chapter 1: Understanding Large Language Models {#chapter-1-understanding-large-language-models}

-   Input text -&gt; tokenize text -&gt; token ids -&gt; token embeddings -&gt; GPT decoder only transformer -&gt; postprocessing steps -&gt; output
-   The "large" in large language models refers to the number of parameters
-   The first step in creating an LLM is to train it on a large corpus of text data, sometimes referred to as "raw" text
-   LLM pretraining does not require labeled data, and instead uses self-supervised learning where the model generates its own labels. The "labels" come from the structure of the data itself

****Transformer Architecture****

-   Originally developed for machine translation
-   Consists of two submodules: an encoder and decoder
-   Both submodules consist of many layers connected by a self-attention mechanism
    -   The self-attention mechanism allows the model to weigh the importance of words or tokens in a sequence relative to each other
-   Systems like BERT focus on the encoder, while systems like GPT focus on the decoder
-   GPT is considered an "autoregressive" model, meaning it uses previous outputs as inputs for future predictions

****Three Main Stages of Coding an LLM****

-   Implementing the LLM architecture and data preparation process
-   Pretraining an LLM to create a foundation model
-   Fine-tuning the foundation model to become a personal assistant or text classifier


## Chapter 2: Working with Text Data {#chapter-2-working-with-text-data}

****Data Preparation and Sampling****

-   Deep neural networks and LLMs cannot process text directly, so words are represented as continuous-valued vectors (embeddings)
-   There are word, sentence, paragraph, and whole document embeddings. Sentence and paragraph embeddings are useful for RAG
-   Systems like GPT-3 use 12,288 dimensions for embeddings
-   Special tokens like "unk" indicate words not in the vocabulary, and "endoftext" indicates the beginning of a new text source
-   Byte Pair Encoding (BPE) is a common tokenization scheme, available via the [tiktoken](<https://github.com/openai/tiktoken>) package

****Data Sampling With a Sliding Window****

-   LLMs learn to predict one word at a time
-   Example input-target pairs:
    -   [LLMs] <span class="underline">learn</span> to predict one word at a time
    -   [LLMs learn] <span class="underline">to</span> predict one word at a time
    -   [LLMs learn to] <span class="underline">predict</span> one word at a time
-   During training, the model predicts the next word following the input block (shown in [brackets]), with the target word underlined

****Creating Token Embeddings****

-   The final step in preparing input is converting token IDs into embedding vectors
-   Step 1: Initialize vectors with random weights
    -   Continuous vector representation is required because LLMs like GPT are deep neural networks trained with backpropagation


## Chapter 2 Summary {#chapter-2-summary}

-   LLMs require text to be converted into numerical vectors since they cannot process raw text
-   Embeddings transform discrete data (words, images) into continuous vector spaces compatible with neural networks
-   Raw text is broken into tokens (words or characters), then converted to integer token IDs
-   Special tokens (e.g., "unk", "endoftext") enhance model understanding
-   BPE tokenizers handle unknown words by breaking them into subword units
-   A sliding window approach generates input-target pairs for training
-   Embedding layers in PyTorch act as a lookup, retrieving vectors for token IDs
-   Positional embeddings (absolute or relative) are added to convey token position; OpenAI models use absolute positional embeddings
