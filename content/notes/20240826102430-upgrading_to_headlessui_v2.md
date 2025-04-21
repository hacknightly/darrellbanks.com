---
id: B1E2986B-C6E7-468F-BA6F-36DB31B91110
title: Upgrading to HeadlessUI V2
---

# Overview

In order to continue making use of HeadlessUI, our team needed to ensure
that we were up-to-date with the latest changes from the community. To
that end, we chose to upgrade to the next major version in both of the
applications that we maintain which depend on HeadlessUI. This document
looks to outline the different problems encoutered during the upgrade
with the hope that it can serve as a guide for other teams to upgrade in
the future.

# Initial Steps

## Update to headlessui/react@2.1.3

## Update to headlesssui/tailwindcss@0.2.1

# Obvious Issues

## Subcomponents like Transition.Child have been changed to TransitionChild

## List elements like ListBox used to default to li, now they default to div

# Tricky Stuff

## Combobox was behaving strangely due to focus states

The combobox defaults to looking at an options \"id\" attribute to
differentiate between them. Our doctor options use the same id even when
the options are different due to location. This caused the active/focus
state to be applide to wrong option. Updating the ComboBox \"by\"
property to use the \"name\" attribute instead of the id fixed this.
