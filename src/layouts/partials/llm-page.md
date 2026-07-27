{{- /*
  Renders a single documentation page as plain markdown with a YAML preamble.
  Consumed by the `markdown` output format (/<path>/index.md) and, through it,
  by the devdocs MCP server's `get_doc` tool.
*/ -}}
{{- $repoPath := "" -}}
{{- with .File -}}
  {{- $repoPath = strings.TrimPrefix (printf "%s/" $.Section) (replace .Path "\\" "/") -}}
{{- end -}}
---
title: {{ .Title | jsonify }}
url: {{ .Permalink | jsonify }}
version: {{ .Section | jsonify }}
{{ with .Description -}}
description: {{ . | jsonify }}
{{ end -}}
{{ if $repoPath -}}
source: {{ printf "%sblob/%s.x/%s" $.Site.Params.ghRepoURL $.Section $repoPath | jsonify }}
{{ end -}}
{{ if not .Lastmod.IsZero -}}
lastmod: {{ .Lastmod.Format "2006-01-02" | jsonify }}
{{ end -}}
---

{{ .RawContent }}
