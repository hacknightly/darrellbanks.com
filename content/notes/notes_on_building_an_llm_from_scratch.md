+++
title = "Notes on building an LLM from scratch"
author = ["Darrell Banks"]
date = 2025-05-21T00:00:00-06:00
lastmod = 2025-11-26T00:00:00-07:00
tags = ["notes"]
draft = false
+++

:ID:       F29CBBCE-BF32-4A7F-A576-A3DA674F540A

**Connections**: [AI]({{< relref "../categories/ai.md" >}})


## Chapter 1: Understanding Large Language Models {#chapter-1-understanding-large-language-models}

input text -&gt; tokenize text -&gt; token ids -&gt; token embeddings -&gt; GPT decoder only transformer -&gt; postprocessing steps -&gt; output


### The "large" in large language models refers to the number of {#the-large-in-large-language-models-refers-to-the-number-of}

parameters


### The first step in creating an LLM is to train it on a large corpus {#the-first-step-in-creating-an-llm-is-to-train-it-on-a-large-corpus}

of text data, sometimes referred to as "raw" text


### LLM pretraining does not require labeled data, and instead uses {#llm-pretraining-does-not-require-labeled-data-and-instead-uses}

self-supervised learning where the model generates its own labels.
The "labels" come frome the structure of the data itself


### Transformer Architecture {#transformer-architecture}


#### Originally developed for machine translation {#originally-developed-for-machine-translation}


#### Consists of two submodules, an encoder and decoder {#consists-of-two-submodules-an-encoder-and-decoder}


#### Both submodules consist of many layers connected by a self-attention mechanism {#both-submodules-consist-of-many-layers-connected-by-a-self-attention-mechanism}

<!--list-separator-->

-  The self-attention mechanism is a key component which allows the model to weigh the importance of words or tokens in a sequence relative to each other


#### Systems like BERT focus on the encoder, while systems like GPT focus on the decoder {#systems-like-bert-focus-on-the-encoder-while-systems-like-gpt-focus-on-the-decoder}


#### GPT is considered an "autoregressive" model, meaning it uses previous outputs as inputs for future predictions {#gpt-is-considered-an-autoregressive-model-meaning-it-uses-previous-outputs-as-inputs-for-future-predictions}


### Three main stages of coding an LLM {#three-main-stages-of-coding-an-llm}


#### Implementing the LLM architecture and data preperation process {#implementing-the-llm-architecture-and-data-preperation-process}


#### Pretraining an LLM to create a foundation model {#pretraining-an-llm-to-create-a-foundation-model}


#### Fine-tuning the foundation model to become a personal assistant or text classifier {#fine-tuning-the-foundation-model-to-become-a-personal-assistant-or-text-classifier}


## Chapter 2: Working with text data {#chapter-2-working-with-text-data}


### Data preperation and sampling {#data-preperation-and-sampling}


#### Word embeddings {#word-embeddings}

<!--list-separator-->

-  Deep neural networks and LLMs cannot process text directly, so we need to represent words as continuous-valued vectors

<!--list-separator-->

-  Converting data into vectors is often referred to as embedding

<!--list-separator-->

-  There are word, sentence, paragraph, and whole document embeddings. Sentence and paragraph are useful for RAG

<!--list-separator-->

-  Forget 3 dimensions, systems like GPT-3 use 12,288 dimensions. What does that even mean?


#### Tokenizing Text {#tokenizing-text}

<!--list-separator-->

-  &lt;|unk|&gt; tokens are used to indicate words that aren't in the vocab

<!--list-separator-->

-  &lt;|endoftext|&gt; tokens are used to indicate the beginning of a new text source when multiple sources are used

<!--list-separator-->

-  BPE or "Byte Pair Encoding" is a commonly used, sophisticated tokenization scheme that can be installed with the [tiktoken](https://github.com/openai/tiktoken) package


#### Data Sampling With a Sliding Window {#data-sampling-with-a-sliding-window}

<!--list-separator-->

-  [LLMs] <span class="underline">learn</span> to predict one word at a time

<!--list-separator-->

-  [LLMs learn] <span class="underline">to</span> predict one word at a time

<!--list-separator-->

-  [LLMs learn to] <span class="underline">predict</span> one word at a time

    <!--list-separator-->

    -  Given a text sample, the LLM prediction task during training is to predict the next word that follows the input block.

        In the example above, the input blocks are in [brackets] and the
        target word is <span class="underline">underlined</span>


### Creating Token Embeddings {#creating-token-embeddings}


#### The last step in preparing the input text for an LLM is to convert the token IDs into embedding vectors {#the-last-step-in-preparing-the-input-text-for-an-llm-is-to-convert-the-token-ids-into-embedding-vectors}

<!--list-separator-->

-  Step 1: Initialize the vectors with random weights

    <!--list-separator-->

    -  A continuous vector representation is necessary because LLMs like GPT are deep neural networks trained with the backpropagation algorithm.


### Summary {#summary}


#### LLMs require textual data to be converted into numerical representations known as vectors, since they can't process raw text. {#llms-require-textual-data-to-be-converted-into-numerical-representations-known-as-vectors-since-they-can-t-process-raw-text-dot}


#### Embeddings transform discrete data like words or images into continuous vector spaces, making them compatible with NNs {#embeddings-transform-discrete-data-like-words-or-images-into-continuous-vector-spaces-making-them-compatible-with-nns}


#### As the first step, raw text is broken into tokens, which can be words or characters. Then, the tokens are converted into integer representations, termed token IDs {#as-the-first-step-raw-text-is-broken-into-tokens-which-can-be-words-or-characters-dot-then-the-tokens-are-converted-into-integer-representations-termed-token-ids}


#### Special tokens such as &lt;|unk|&gt; and &lt;|endoftext|&gt; can be added to enhance the model's understanding {#special-tokens-such-as-unk-and-endoftext-can-be-added-to-enhance-the-model-s-understanding}


#### The byte pair encoding (BPE) tokenizer used for LLMs like GPT2 and 3 can efficiently handle unknown words by breaking them down into subword units or characters {#the-byte-pair-encoding--bpe--tokenizer-used-for-llms-like-gpt2-and-3-can-efficiently-handle-unknown-words-by-breaking-them-down-into-subword-units-or-characters}


#### We use a sliding window approach on the tokenized data to generate input-target pairs for LLM training. {#we-use-a-sliding-window-approach-on-the-tokenized-data-to-generate-input-target-pairs-for-llm-training-dot}


#### Embedding layers in PyTorch function as a lookup operation, retrieving vectors corresponding to token IDs. The resulting embedding vectors provide continuous representations of tokens {#embedding-layers-in-pytorch-function-as-a-lookup-operation-retrieving-vectors-corresponding-to-token-ids-dot-the-resulting-embedding-vectors-provide-continuous-representations-of-tokens}


#### Absolute or relative positional embeddings are created to augment the LLMs lack of ability to understand a token's position in a sequence. OpenAIs models use absolute positional embeddings. {#absolute-or-relative-positional-embeddings-are-created-to-augment-the-llms-lack-of-ability-to-understand-a-token-s-position-in-a-sequence-dot-openais-models-use-absolute-positional-embeddings-dot}


## Coding Attention Mechanisms {#coding-attention-mechanisms}
