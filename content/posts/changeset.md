+++
title = "Tasks for Changeset.io project"
author = ["Darrell Banks"]
draft = false
+++

## Changeset Tasks {#changeset-tasks}


### <span class="org-todo todo TODO">TODO</span> allow custom attribute typeahead with <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist> {#allow-custom-attribute-typeahead-with-https-developer-dot-mozilla-dot-org-en-us-docs-web-html-element-datalist}


### <span class="org-todo done DONE">DONE</span> allow custom attribute comparisons with @@ {#allow-custom-attribute-comparisons-with}


### <span class="org-todo todo TODO">TODO</span> match gitstream coverage  <https://docs.gitstream.cm/examples/> {#match-gitstream-coverage-https-docs-dot-gitstream-dot-cm-examples}


### <span class="org-todo todo TODO">TODO</span> handle non-visible email redirects (when a user hides email on github) {#handle-non-visible-email-redirects--when-a-user-hides-email-on-github}


### Template Example {#template-example}


### Stat {#stat}

-   avg time to close: avg(open_duration)
-   total merges: count(merge events for this repo)
-   total commits: count(commits for prs in this repo)
-   total additions: count(additions for prs in this repo)
-   total removals: count(removals for prs in this repo)
-   total changes: count(additions + removals for prs in this repo)
-   total comments: count(comment events for this repo)
-   most modified file: look at all prs, look at files, count file touches
-   most modified directory: look at all prs, look at files, break into directory, create counts
-   total workflow runs: count(pull_request_events_workflows for this repo)
-   most run workflow: (count pull_request_events_workflows uuid for this repo)
-   total closed prs: (count where state is closed and no merged_by)
-   unmerged commits: (count where state is closed and no merged_by, total commits)
-   total failed checks: (count all prs, all failed checks)
-   most failed check: (count all prs, all failed checks uuid)
-   total successchecks: (count all prs, all success checks)
-   most success check: (count all prs, all success checks uuid)

Author: {{author}}

---

Approvers: {{approvers | join(', @')}}

---

Body: {{body}}

---

Assignees: {{assignees | join(', @')}}

---

base: {{base}}

---

changes_requested_by: {{changes_requested_by | join(', @')}}

---

draft: {{draft}}

---

head: {{head}}

---

labels: {{labels}}

---

locked: {{is_locked}}

---

merged: {{is_merged}}

---

merged by: @{{merged_by}}

---

milestone: {{milestone}}

---

number: {{number}}

---

reviewers: {{requested_reviewers | join(', @')}}


### <span class="org-todo todo TODO">TODO</span> allow custom attribute typeahead with <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist> {#allow-custom-attribute-typeahead-with-https-developer-dot-mozilla-dot-org-en-us-docs-web-html-element-datalist}


### <span class="org-todo todo TODO">TODO</span> cookie consent <https://github.com/brainsum/cookieconsent> {#cookie-consent-https-github-dot-com-brainsum-cookieconsent}


### <span class="org-todo todo TODO">TODO</span> setup atlassian status page {#setup-atlassian-status-page}


### <span class="org-todo todo TODO">TODO</span> add ability to create checks with workflows {#add-ability-to-create-checks-with-workflows}


### <span class="org-todo todo TODO">TODO</span> add some/all matching to label list {#add-some-all-matching-to-label-list}


### <span class="org-todo todo TODO">TODO</span> remove repos from stripe on termination {#remove-repos-from-stripe-on-termination}


### Todo fix "commits" entity {#todo-fix-commits-entity}
