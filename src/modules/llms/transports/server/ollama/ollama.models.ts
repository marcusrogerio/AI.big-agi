/**
 * This is here because the API does not provide a list of available upstream models, and does not provide
 * descriptions for the models.
 * (nor does it reliably provide context window sizes) - TODO: open a bug upstream
 *
 * from: https://ollama.ai/library?sort=popular
 */
export const OLLAMA_BASE_MODELS: { [key: string]: { description: string, pulls: number, added?: string } } = {
  'mistral': { description: 'The Mistral 7B model released by Mistral AI', pulls: 56100 },
  'llama2': { description: 'The most popular model for general use.', pulls: 117400 },
  'codellama': { description: 'A large language model that can use text prompts to generate and discuss code.', pulls: 61500 },
  'llama2-uncensored': { description: 'Uncensored Llama 2 model by George Sung and Jarrad Hope.', pulls: 26800 },
  'orca-mini': { description: 'A general-purpose model ranging from 3 billion parameters to 70 billion, suitable for entry-level hardware.', pulls: 23000 },
  'vicuna': { description: 'General use chat model based on Llama and Llama 2 with 2K to 16K context sizes.', pulls: 20600 },
  'wizard-vicuna-uncensored': { description: 'Wizard Vicuna Uncensored is a 7B, 13B, and 30B parameter model based on Llama 2 uncensored by Eric Hartford.', pulls: 12100 },
  'phind-codellama': { description: 'Code generation model based on CodeLlama.', pulls: 9760 },
  'wizardcoder': { description: 'Llama based code generation model focused on Python.', pulls: 9002 },
  'mistral-openorca': { description: 'Mistral OpenOrca is a 7 billion parameter model, fine-tuned on top of the Mistral 7B model using the OpenOrca dataset.', pulls: 8671 },
  'nous-hermes': { description: 'General use models based on Llama and Llama 2 from Nous Research.', pulls: 8478 },
  'zephyr': { description: 'Zephyr beta is a fine-tuned 7B version of mistral that was trained on on a mix of publicly available, synthetic datasets.', pulls: 8142 },
  'wizard-math': { description: 'Model focused on math and logic problems', pulls: 7426 },
  'llama2-chinese': { description: 'Llama 2 based model fine tuned to improve Chinese dialogue ability.', pulls: 7035 },
  'stable-beluga': { description: 'Llama 2 based model fine tuned on an Orca-style dataset. Originally called Free Willy.', pulls: 6140 },
  'falcon': { description: 'A large language model built by the Technology Innovation Institute (TII) for use in summarization, text generation, and chat bots.', pulls: 5865 },
  'codeup': { description: 'Great code generation model based on Llama2.', pulls: 5534 },
  'everythinglm': { description: 'Uncensored Llama2 based model with 16k context size.', pulls: 4696 },
  'medllama2': { description: 'Fine-tuned Llama 2 model to answer medical questions based on an open source medical dataset.', pulls: 4275 },
  'wizardlm-uncensored': { description: 'Uncensored version of Wizard LM model.', pulls: 4227 },
  'deepseek-coder': { description: 'DeepSeek Coder is trained from scratch on both 87% code and 13% natural language in English and Chinese. Each of the models are pre-trained on 2 trillion tokens.', pulls: 3663, added: '20231129' },
  'wizard-vicuna': { description: 'Wizard Vicuna is a 13B parameter model based on Llama 2 trained by MelodysDreamj.', pulls: 3343 },
  'orca2': { description: 'Orca 2 is built by Microsoft research, and are a fine-tuned version of Meta\'s Llama 2 models. The model is designed to excel particularly in reasoning.', pulls: 3134, added: '20231129' },
  'open-orca-platypus2': { description: 'Merge of the Open Orca OpenChat model and the Garage-bAInd Platypus 2 model. Designed for chat and code generation.', pulls: 3050 },
  'starcoder': { description: 'StarCoder is a code generation model trained on 80+ programming languages.', pulls: 2981 },
  'dolphin2.2-mistral': { description: 'An instruct-tuned model based on Mistral. Version 2.2 is fine-tuned for improved conversation and empathy.', pulls: 2636 },
  'yarn-mistral': { description: 'An extension of Mistral to support a context of up to 128k tokens.', pulls: 2328 },
  'openchat': { description: 'A family of open-source models trained on a wide variety of data, surpassing ChatGPT on various benchmarks.', pulls: 2281, added: '20231129' },
  'openhermes2.5-mistral': { description: 'OpenHermes 2.5 Mistral 7B is a Mistral 7B fine-tune, a continuation of OpenHermes 2 model, which trained on additional code datasets.', pulls: 2101 },
  'yi': { description: 'A high-performing, bilingual base model.', pulls: 1806 },
  'samantha-mistral': { description: 'A companion assistant trained in philosophy, psychology, and personal relationships. Based on Mistral.', pulls: 1803 },
  'yarn-llama2': { description: 'An extension of Llama 2 that supports a context of up to 128k tokens.', pulls: 1605 },
  'sqlcoder': { description: 'SQLCoder is a code completion model fined-tuned on StarCoder for SQL generation tasks.', pulls: 1584 },
  'openhermes2-mistral': { description: 'OpenHermes 2 Mistral is a 7B model fine-tuned on Mistral with 900,000 entries of primarily GPT-4 generated data from open datasets.', pulls: 1560 },
  'neural-chat': { description: 'A fine-tuned model based on Mistral with good coverage of domain and language.', pulls: 1338, added: '20231129' },
  'wizardlm': { description: 'General use 70 billion parameter model based on Llama 2.', pulls: 1253 },
  'dolphin2.1-mistral': { description: 'An instruct-tuned model based on Mistral and trained on a dataset filtered to remove alignment and bias.', pulls: 1163 },
  'mistrallite': { description: 'MistralLite is a fine-tuned model based on Mistral with enhanced capabilities of processing long contexts.', pulls: 1099 },
  'codebooga': { description: 'A high-performing code instruct model created by merging two existing code models.', pulls: 1042 },
  'goliath': { description: 'A language model created by combining two fine-tuned Llama 2 70B models into one.', pulls: 728, added: '20231129' },
  'xwinlm': { description: 'Conversational model based on Llama 2 that performs competitively on various benchmarks.', pulls: 593 },
  'nexusraven': { description: 'Nexus Raven is a 13B instruction tuned model for function calling tasks.', pulls: 585 },
  'alfred': { description: 'A robust conversational model designed to be used for both chat and instruct use cases.', pulls: 573, added: '20231129' },
  'starling-lm': { description: 'Starling is a large language model trained by reinforcement learning from AI feedback focused on improving chatbot helpfulness.', pulls: 446, added: '20231129' },
  'meditron': { description: 'Open-source medical large language model adapted from Llama 2 to the medical domain.', pulls: 100, added: '20231129' },
  'deepseek-llm': { description: 'An advanced language model crafted with 2 trillion bilingual tokens.', pulls: 11, added: '20231129' },
};
export const OLLAMA_LAST_UPDATE: string = '20231129';