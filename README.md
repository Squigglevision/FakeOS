# FakeOS

## Overview

The FakeOS project uses HTML, SCSS, and JavaScript to replicate the look and feel, and some of the functionality, of the Mac OS Ventura operating system. In this document, I compare my mock-up with that of the actual operating system, and describe some of my choices in terms of functionality.

## Comparison of Mac OS Ventura and FakeOS:

### The "real" Mac OS:

This screenshot of the OS includes the Ventura wallpaper, an open menu and multiple in-built Mac applications which formed the basis for my replica:

![Screenshot of Mac OS Ventura](./assets/images/screenshot-of-realOS.png)
On an external monitor, hovering on the menu fills in the bar completely, as shown below:
![Screenshot of menu on external monitor](./assets/images/menu-screenshot.png)

This is what the "Dock" looks like in Ventura:

![Screenshot of the Dock in Mac OS Ventura](./assets/images/mac-ventura-dock.png)
The "Dock" is a menu that houses all of the open applications as well as regularly used applications, and is found at the bottom of the screen by default.

### FakeOS:

![Screenshot of FakeOS](./assets/images/screenshot-of-fakeos.png)

As you can see from the above screenshot, with FakeOS I've attempted to recreate the look and feel of the main desktop, menu and native Mac apps while adding some stylistic changes. Some of the colours are a little off, as I didn't realise the applications were partly see-through when grabbing their colours, and they were on a darker background.

#### Replicated functionality

I made sure the menu both looks and functions similarly to the real menu, by ensuring that dropdowns stay open until either the user clicks anywhere else or moves their mouse to an empty spot on the menu. Clicking on the menu item will also close it.

I also made sure that apps on the "Dock" open when clicked, and will be brought to the front whenever their icon is clicked again, even if they're already open. The apps will then be able to be closed, by clicking on the red circle in the corner:

![Screenshot of close, minimise and fullscreen buttons on a Mac OS application](./assets/images/close-minimise-and-fullscreen.png)

Clicking on the icons on the desktop will make the "Finder" window change its contents and header which was a design choice and not how they would normally function.

For the functionality, I selected items in the DOM and added and removed classes with event listeners to show and hide them. The DOM JavaScript I've used is fairly basic, and in the future I would like to add functions that programmatically generate the apps when clicked.
