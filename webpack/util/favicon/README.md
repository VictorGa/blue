example:
add the following to #definitions.yaml
```
favicon:
  path: 'static/image/favicon.png'
  out: 'static/favicons/icon-[hash]'
  background: '#fff'
```
path: the sourcefile for all the favicons (string)
out: the output directory including the filename prefix (string)
background: background color, defaults to '#FFF' (string)
title: title used for meta content, defaults to package name
