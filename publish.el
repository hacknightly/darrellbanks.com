(require 'find-lisp)

(projectile-mode -1)
(recentf-mode -1)

(defun darrell/publish (file)
  (with-current-buffer (find-file-noselect file)
    (setq org-hugo-base-dir "../../")
    (let ((org-id-extra-files (find-lisp-find-files org-roam-directory "\.org$")))
      (org-hugo-export-to-md))))
