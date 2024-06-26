(require 'find-lisp)

(projectile-mode -1)
(recentf-mode -1)
(global-org-modern-mode -1)

(defun darrell/publish (file)
  (with-current-buffer (find-file-noselect file)
    (setq org-hugo-base-dir "../../")
    (setq org-hugo-default-section-directory "garden")
    (let ((org-id-extra-files (find-lisp-find-files org-roam-directory "\.org$")))
      (org-hugo-export-to-md))))
