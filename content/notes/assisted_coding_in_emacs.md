---
title: "Mixing the Old with the New: AI Assisted Programming in Emacs"
author: ["Darrell Banks"]
date: 2025-01-07T00:00:00-07:00
lastmod: 2025-01-07T00:00:00-07:00
tags: ["notes"]
draft: false
---

**Link**: [Engineering]({{< relref "engineering.md" >}}) [AI]({{< relref "ai.md" >}})

;; Copilot
(use-package copilot
  :ensure t
  :quelpa (copilot :fetcher github
                   :repo "copilot-emacs/copilot.el"
                   :branch "main"
                   :files ("\*.el"))
  :init
  (global-copilot-mode)
  (define-key copilot-completion-map (kbd "&lt;backtab&gt;") 'copilot-accept-completion))

(use-package gptel :ensure t
  :config
  (setq gptel-api-key (getenv "OPENAI_API_KEY"))
  (gptel-make-ollama "Ollama"
    :host "localhost:11434"
    :stream t
    :models '("llama2:latest")))

"ai"   '(:ignore t :which-key "AI")
"ai&gt;"  '(gptel-send :which-key "Send Line")
"aig"  '(gptel :which-key "GPT Buffer")
"aim"  '(gptel-menu :which-key "GPT Menu")
"air"  '(gptel-rewrite :which-key "Rewrite")
"ai+"  '(gptel-add :which-key "Add")
"ai!"  '(gptel-add-file :which-key "Add File")
"ain" '(gptel--rewrite-next :which-key "Rewrite Next")
"aip" '(gptel--rewrite-previous :which-key "Rewrite Previous")
